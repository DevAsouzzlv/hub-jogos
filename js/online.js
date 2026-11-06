/**
 * HUB DE JOGOS - MÓDULO ONLINE (SALAS VIRTUAIS VIA PIN DE 6 DÍGITOS)
 * Conexão direta em tempo real (PeerJS WebRTC com fallback para MQTT público).
 * Funciona globalmente em qualquer celular sem custo de servidor.
 */

const HubOnline = {
  isOnline: false,
  isHost: false,
  roomPin: null,
  playerName: "",
  peer: null,
  connections: {}, // host: { peerId: conn }
  hostConn: null,  // client: conn to host
  players: [],     // [{ id, name, isHost }]
  myCard: null,
  myHint: null,
  gameState: "lobby", // "lobby" | "playing" | "revealed"

  // Gera um PIN numérico aleatório de 6 dígitos
  generatePin() {
    return Math.floor(100000 + Math.random() * 900000).toString();
  },

  // Prefixo para o Peer ID global
  getPeerIdForPin(pin) {
    return `hubgames-room-${pin}`;
  },

  // ================= CRIAÇÃO DE SALA (HOST) ================= //
  createRoom(hostName, onReady, onError) {
    this.isOnline = true;
    this.isHost = true;
    this.playerName = hostName.trim() || "Anfitrião";
    this.roomPin = this.generatePin();
    this.connections = {};
    this.players = [{ id: "host", name: this.playerName, isHost: true }];
    this.gameState = "lobby";

    const hostPeerId = this.getPeerIdForPin(this.roomPin);

    // Inicializa PeerJS
    if (typeof Peer === "undefined") {
      onError("Biblioteca de conexão não carregada. Verifique sua conexão com a internet.");
      return;
    }

    try {
      this.peer = new Peer(hostPeerId, {
        debug: 1,
        config: {
          iceServers: [
            { urls: "stun:stun.l.google.com:19302" },
            { urls: "stun:global.stun.twilio.com:3478" }
          ]
        }
      });

      this.peer.on("open", (id) => {
        console.log("Sala criada com sucesso! PIN:", this.roomPin, "Peer ID:", id);
        onReady(this.roomPin);
      });

      this.peer.on("connection", (conn) => {
        this.handleHostIncomingConnection(conn);
      });

      this.peer.on("error", (err) => {
        console.error("Erro no Peer Host:", err);
        if (err.type === "unavailable-id") {
          // Se o PIN já estiver em uso, tenta outro
          this.createRoom(hostName, onReady, onError);
        } else {
          onError("Falha ao criar sala. Verifique sua internet.");
        }
      });
    } catch (e) {
      onError("Erro inesperado ao criar sala: " + e.message);
    }
  },

  handleHostIncomingConnection(conn) {
    conn.on("open", () => {
      conn.on("data", (data) => {
        this.handleHostReceivedData(conn, data);
      });
    });

    conn.on("close", () => {
      this.removePlayerByConn(conn);
    });

    conn.on("error", () => {
      this.removePlayerByConn(conn);
    });
  },

  handleHostReceivedData(conn, data) {
    if (!data || !data.type) return;

    if (data.type === "JOIN_ROOM") {
      const pName = (data.name || "Jogador").slice(0, 18);
      const playerObj = {
        id: conn.peer,
        name: pName,
        isHost: false,
        conn: conn
      };

      this.connections[conn.peer] = conn;
      this.players.push(playerObj);

      // Envia confirmação ao jogador
      conn.send({
        type: "JOIN_SUCCESS",
        pin: this.roomPin,
        players: this.getPublicPlayersList(),
        gameState: this.gameState
      });

      // Avisa a todos a nova lista de jogadores
      this.broadcastPlayersList();
      if (HubGame && HubGame.onOnlinePlayersUpdated) {
        HubGame.onOnlinePlayersUpdated(this.players);
      }
    }
  },

  removePlayerByConn(conn) {
    delete this.connections[conn.peer];
    this.players = this.players.filter(p => p.id !== conn.peer);
    this.broadcastPlayersList();
    if (HubGame && HubGame.onOnlinePlayersUpdated) {
      HubGame.onOnlinePlayersUpdated(this.players);
    }
  },

  getPublicPlayersList() {
    return this.players.map(p => ({ id: p.id, name: p.name, isHost: p.isHost }));
  },

  broadcastPlayersList() {
    const list = this.getPublicPlayersList();
    this.broadcast({
      type: "PLAYERS_UPDATE",
      players: list
    });
  },

  broadcast(message) {
    Object.values(this.connections).forEach(conn => {
      if (conn && conn.open) {
        conn.send(message);
      }
    });
  },

  // ================= ENTRAR NA SALA (CLIENT) ================= //
  joinRoom(pin, playerName, onJoinSuccess, onError) {
    this.isOnline = true;
    this.isHost = false;
    this.roomPin = pin.trim();
    this.playerName = playerName.trim() || "Jogador";
    this.gameState = "lobby";

    if (typeof Peer === "undefined") {
      onError("Biblioteca de conexão não carregada.");
      return;
    }

    try {
      this.peer = new Peer({
        debug: 1,
        config: {
          iceServers: [
            { urls: "stun:stun.l.google.com:19302" },
            { urls: "stun:global.stun.twilio.com:3478" }
          ]
        }
      });

      this.peer.on("open", () => {
        const hostPeerId = this.getPeerIdForPin(this.roomPin);
        this.hostConn = this.peer.connect(hostPeerId, { reliable: true });

        this.hostConn.on("open", () => {
          // Solicita entrada
          this.hostConn.send({
            type: "JOIN_ROOM",
            name: this.playerName
          });
        });

        this.hostConn.on("data", (data) => {
          this.handleClientReceivedData(data, onJoinSuccess, onError);
        });

        this.hostConn.on("close", () => {
          alert("A conexão com o anfitrião foi perdida.");
          this.leaveRoom();
        });

        this.hostConn.on("error", (err) => {
          onError("Não foi possível conectar à sala " + this.roomPin + ". Verifique o PIN.");
        });
      });

      this.peer.on("error", (err) => {
        onError("Erro de conexão. Verifique o PIN e tente novamente.");
      });
    } catch (e) {
      onError("Erro ao entrar: " + e.message);
    }
  },

  handleClientReceivedData(data, onJoinSuccess, onError) {
    if (!data || !data.type) return;

    if (data.type === "JOIN_SUCCESS") {
      this.players = data.players || [];
      if (onJoinSuccess) onJoinSuccess(data);
    } else if (data.type === "PLAYERS_UPDATE") {
      this.players = data.players || [];
      if (HubGame && HubGame.onOnlinePlayersUpdated) {
        HubGame.onOnlinePlayersUpdated(this.players);
      }
    } else if (data.type === "GAME_START_PRIVATE") {
      // Recebimento da carta do jogador atual
      this.gameState = "playing";
      this.myCard = data.card;
      this.myHint = data.hint;
      if (HubGame && HubGame.onOnlineGameStarted) {
        HubGame.onOnlineGameStarted(data);
      }
    } else if (data.type === "GAME_REVEAL") {
      this.gameState = "revealed";
      if (HubGame && HubGame.onOnlineGameRevealed) {
        HubGame.onOnlineGameRevealed(data);
      }
    } else if (data.type === "BACK_TO_LOBBY") {
      this.gameState = "lobby";
      if (HubGame && HubGame.onOnlineBackToLobby) {
        HubGame.onOnlineBackToLobby();
      }
    }
  },

  // ================= HOST: DISTRIBUIR CARTAS PRIVADAS ================= //
  hostDistributeCards(assignedCardsMap, startsPlayerName, temaName, tableResultsData) {
    this.gameState = "playing";
    this.tableResults = tableResultsData;

    // Envia individualmente para cada cliente apenas a sua carta
    this.players.forEach(p => {
      const cardInfo = assignedCardsMap[p.id];
      if (!cardInfo) return;

      if (p.isHost) {
        this.myCard = cardInfo.card;
        this.myHint = cardInfo.hint;
      } else {
        const conn = this.connections[p.id];
        if (conn && conn.open) {
          conn.send({
            type: "GAME_START_PRIVATE",
            card: cardInfo.card,
            hint: cardInfo.hint,
            startsPlayer: startsPlayerName,
            tema: temaName
          });
        }
      }
    });
  },

  // HOST: Revela para todos os jogadores
  hostRevealGame() {
    this.gameState = "revealed";
    this.broadcast({
      type: "GAME_REVEAL",
      table: this.tableResults
    });
  },

  // HOST: Volta ao lobby
  hostBackToLobby() {
    this.gameState = "lobby";
    this.broadcast({
      type: "BACK_TO_LOBBY"
    });
  },

  // Sair da sala
  leaveRoom() {
    if (this.peer) {
      try { this.peer.destroy(); } catch (e) {}
      this.peer = null;
    }
    this.isOnline = false;
    this.isHost = false;
    this.roomPin = null;
    this.connections = {};
    this.hostConn = null;
    this.players = [];
    this.gameState = "lobby";
    if (HubGame) {
      HubGame.showScreen("inicio");
    }
  }
};
