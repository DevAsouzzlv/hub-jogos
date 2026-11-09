/**
 * HUB DE JOGOS - LÓGICA PRINCIPAL (OFFLINE & ONLINE)
 * Suporte a:
 * - Modo Offline (Passa celular) e Modo Online (PIN de 6 dígitos)
 * - Tipo de Dica do Impostor: "word" (palavra única difícil) ou "phrase" (frase curta enigmática)
 * - Dicas concisas sem frases compridas desnecessárias
 * - Botão de Voltar em todas as etapas
 */

const HubGame = {
  // Configurações
  gameEnvironment: "offline", // "offline" | "online"
  modo: "duplas",             // "duplas" | "impostor" | "mimica"
  tema: null,
  filtroTemaAtual: "Super-herói",
  hintType: "word",           // "word" (1 palavra sutil) | "phrase" (frase curta enigmática)
  usaDica: true,

  // Estado da rodada Offline
  cartas: [],
  indiceAtual: 0,
  visivel: false,
  visto: false,
  usados: [],
  usadosP: [],
  inicia: "",
  ultInicia: "",
  ultImp: [],
  dicasI: [],
  numImpostoresCustom: null,
  numImpostoresOutros: 1,

  // Jogadores locais (Offline)
  jogadoresDuplas: ["Arthur", "Vitor", "João Pedro", "Coro", "Bia", "Ana Vitória", "Vinícius", "Gustavo"],
  jogadoresImpostor: ["Arthur", "Vitor", "João Pedro", "Coro", "Bia"],
  jogadoresMimica: ["Arthur", "Vitor", "João Pedro", "Coro", "Bia"],

  // Estado Mímica
  mm: { placar: [], vez: 0, palavra: "", t: 60, timer: null, usados: [] },
  mmDif: [],
  mmPal: [],

  // Navegação
  historyStack: [],
  currentScreen: "inicio",
  elements: {},

  init() {
    this.cacheElements();
    this.loadSavedData();
    this.bindGlobalEvents();
    this.showScreen("inicio");
  },

  cacheElements() {
    this.elements = {
      card: document.getElementById("card"),
      mainBtn: document.getElementById("main"),
      proxBtn: document.getElementById("prox"),
      revelarBtn: document.getElementById("revelar"),
      againBtn: document.getElementById("again"),
      trocarBtn: document.getElementById("trocar"),
      voltarBtn: document.getElementById("btn-voltar"),
      subText: document.getElementById("sub"),
      topNav: document.getElementById("top-nav")
    };
  },

  loadSavedData() {
    try {
      const d = JSON.parse(localStorage.getItem("hub_nomes_duplas"));
      if (d && d.length >= 6) this.jogadoresDuplas = d;
    } catch (e) {}

    try {
      const im = JSON.parse(localStorage.getItem("hub_nomes_impostor"));
      if (im && im.length >= 3) this.jogadoresImpostor = im;
    } catch (e) {}

    try {
      const mi = JSON.parse(localStorage.getItem("hub_nomes_mimica"));
      if (mi && mi.length >= 3) this.jogadoresMimica = mi;
    } catch (e) {}

    try {
      const ht = localStorage.getItem("hub_hint_type");
      if (ht) this.hintType = ht;
    } catch (e) {}
  },

  saveData() {
    try {
      localStorage.setItem("hub_nomes_duplas", JSON.stringify(this.jogadoresDuplas));
      localStorage.setItem("hub_nomes_impostor", JSON.stringify(this.jogadoresImpostor));
      localStorage.setItem("hub_nomes_mimica", JSON.stringify(this.jogadoresMimica));
      localStorage.setItem("hub_hint_type", this.hintType);
    } catch (e) {}
  },

  getPlayers() {
    if (this.gameEnvironment === "online") {
      return HubOnline.players.map(p => p.name);
    }
    if (this.modo === "impostor") return this.jogadoresImpostor;
    if (this.modo === "mimica") return this.jogadoresMimica;
    return this.jogadoresDuplas;
  },

  setPlayers(arr) {
    if (this.modo === "impostor") this.jogadoresImpostor = arr;
    else if (this.modo === "mimica") this.jogadoresMimica = arr;
    else this.jogadoresDuplas = arr;
    this.saveData();
  },

  getDuplasImpCount() {
    const N = this.getPlayers().length;
    const defaultImp = (N % 2 === 0) ? 2 : 1;
    let v = this.numImpostoresCustom;
    if (v == null || (v % 2) !== (N % 2) || v < defaultImp || v > N - 4) {
      v = defaultImp;
    }
    return v;
  },

  getOtherImpCount() {
    const N = this.getPlayers().length;
    const max = Math.max(1, Math.ceil(N / 2) - 1);
    return Math.min(this.numImpostoresOutros, max);
  },

  randomInt(n) {
    try {
      const b = new Uint32Array(1);
      crypto.getRandomValues(b);
      return b[0] % n;
    } catch (e) {
      return Math.floor(Math.random() * n);
    }
  },

  shuffle(array) {
    const arr = array.slice();
    for (let k = arr.length - 1; k > 0; k--) {
      const j = this.randomInt(k + 1);
      const temp = arr[k];
      arr[k] = arr[j];
      arr[j] = temp;
    }
    return arr;
  },

  // ================= NAVEGAÇÃO E BOTÃO VOLTAR ================= //
  showScreen(screenName, skipHistory = false) {
    if (!skipHistory && this.currentScreen && this.currentScreen !== screenName) {
      this.historyStack.push(this.currentScreen);
    }
    this.currentScreen = screenName;
    this.updateVoltarButtonVisibility();

    if (this.mm.timer) {
      clearInterval(this.mm.timer);
      this.mm.timer = null;
    }

    switch (screenName) {
      case "inicio":
        this.renderInicio();
        break;
      case "online_menu":
        this.renderOnlineMenu();
        break;
      case "online_criar":
        this.renderOnlineCriar();
        break;
      case "online_entrar":
        this.renderOnlineEntrar();
        break;
      case "online_lobby":
        this.renderOnlineLobby();
        break;
      case "online_jogo_client":
        this.renderOnlineJogoClient();
        break;
      case "jogadores":
        this.renderJogadores();
        break;
      case "temas":
        this.renderTemas();
        break;
      case "filtro_tema":
      case "filtro_herois":
        this.renderFiltroTema();
        break;
      case "jogo":
        this.renderJogo();
        break;
    }
  },

  goBack() {
    // Se estiver em jogo online
    if (HubOnline.isOnline && (this.currentScreen === "online_lobby" || this.currentScreen === "online_jogo_client")) {
      if (confirm("Deseja sair da sala online?")) {
        HubOnline.leaveRoom();
        this.showScreen("inicio", true);
      }
      return;
    }

    // Se estiver em jogo offline
    if (this.currentScreen === "jogo") {
      if (confirm("Deseja interromper a partida atual e voltar aos temas?")) {
        this.showScreen("temas", true);
      }
      return;
    }

    if (this.historyStack.length > 0) {
      const prev = this.historyStack.pop();
      this.showScreen(prev, true);
    } else {
      this.showScreen("inicio", true);
    }
  },

  updateVoltarButtonVisibility() {
    if (!this.elements.voltarBtn) return;
    this.elements.voltarBtn.style.display = (this.currentScreen === "inicio") ? "none" : "inline-flex";
  },

  hideActionButtons() {
    this.elements.mainBtn.style.display = "none";
    this.elements.proxBtn.style.display = "none";
    this.elements.revelarBtn.style.display = "none";
    this.elements.againBtn.style.display = "none";
    this.elements.trocarBtn.style.display = "none";
  },

  // ================= TELA INICIAL (OFFLINE OU ONLINE) ================= //
  renderInicio() {
    this.historyStack = [];
    HubOnline.leaveRoom();
    this.elements.subText.textContent = "Como vocês vão jogar hoje?";
    this.hideActionButtons();

    const html = `
      <div class="who" style="margin-bottom: 12px">Escolha como jogar</div>
      <div class="grid" style="grid-template-columns: 1fr; gap: 12px">
        <button class="modo pop-in" data-action="choose-env" data-val="offline" style="background: var(--p);">
          <span class="em">📱</span>
          <div>
            <b>Modo Offline (Mesmo celular)</b>
            <small>Passe o celular de mão em mão · Sem internet necessária</small>
          </div>
        </button>
        <button class="modo pop-in" data-action="choose-env" data-val="online" style="background: var(--b); animation-delay: 0.1s">
          <span class="em">🌐</span>
          <div>
            <b>Modo Online (Salas Virtuais)</b>
            <small>Cada um no seu celular com PIN de 6 dígitos · Jogue com amigos de qualquer lugar!</small>
          </div>
        </button>
      </div>
    `;

    this.elements.card.innerHTML = html;
    this.elements.card.style.background = "";
  },

  // ================= MENU ONLINE ================= //
  renderOnlineMenu() {
    this.elements.subText.textContent = "Crie uma sala ou entre com um código PIN";
    this.hideActionButtons();

    const html = `
      <div class="who" style="margin-bottom: 14px">Salas Virtuais Online</div>
      <div class="grid" style="grid-template-columns: 1fr; gap: 10px;">
        <button class="btn-confirm" data-action="go-online-criar">➕ Criar Nova Sala</button>
        <button class="sec" data-action="go-online-entrar">🔢 Entrar com PIN de 6 dígitos</button>
      </div>
    `;

    GameAnimations.flipCard(this.elements.card, () => {
      this.elements.card.innerHTML = html;
      this.elements.card.style.background = "";
    });
  },

  renderOnlineCriar() {
    this.elements.subText.textContent = "Digite seu nome para criar a sala";
    this.hideActionButtons();

    const html = `
      <div class="who" style="margin-bottom: 10px">Criar Sala</div>
      <input class="nm" id="online-host-name" maxlength="18" placeholder="Seu apelido no jogo" value="Anfitrião">
      <div style="margin-top: 14px;">
        <button class="btn-confirm" data-action="confirm-create-room">Criar Sala e Gerar PIN ➔</button>
      </div>
    `;

    GameAnimations.flipCard(this.elements.card, () => {
      this.elements.card.innerHTML = html;
    });
  },

  renderOnlineEntrar() {
    this.elements.subText.textContent = "Digite o PIN de 6 dígitos fornecido pelo anfitrião";
    this.hideActionButtons();

    const html = `
      <div class="who" style="margin-bottom: 10px">Entrar em uma Sala</div>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <input class="nm pin-input" id="online-pin-input" type="tel" maxlength="6" placeholder="000000" style="font-size: 1.8rem; text-align: center; letter-spacing: 6px;">
        <input class="nm" id="online-player-name" maxlength="18" placeholder="Seu apelido">
        <button class="btn-confirm" data-action="confirm-join-room" style="margin-top: 6px;">Conectar à Sala ➔</button>
      </div>
    `;

    GameAnimations.flipCard(this.elements.card, () => {
      this.elements.card.innerHTML = html;
    });
  },

  renderOnlineLobby() {
    this.hideActionButtons();
    const isHost = HubOnline.isHost;
    const pin = HubOnline.roomPin;
    const players = HubOnline.players;

    this.elements.subText.textContent = isHost 
      ? "Compartilhe o PIN com seus amigos para eles entrarem!" 
      : "Aguardando o anfitrião iniciar a partida...";

    let html = `
      <div class="pin-display-box">
        <div style="font-size: 0.85rem; font-weight: 700; text-transform: uppercase;">PIN DA SALA</div>
        <div class="pin-digits">${pin}</div>
        <small style="opacity: 0.8;">Amigos entram digitando este código</small>
      </div>

      <div class="who" style="margin: 12px 0 6px;">Jogadores Conectados (${players.length})</div>
      <div class="online-players-list">
    `;

    players.forEach(p => {
      html += `
        <div class="online-player-badge">
          <span>${p.isHost ? '👑' : '🎮'} <b>${p.name}</b></span>
          <span class="online-status-dot"></span>
        </div>
      `;
    });

    html += `</div>`;

    if (isHost) {
      const minPlayers = this.modo === "duplas" ? 6 : 3;
      const canStart = players.length >= minPlayers;

      html += `
        <div class="grid" style="grid-template-columns: 1fr; gap: 8px; margin-top: 14px;">
          <button class="sec" data-action="online-change-mode">⚙️ Modo: ${this.modo.toUpperCase()}</button>
          <button class="btn-confirm" data-action="online-host-choose-theme" ${!canStart ? 'disabled' : ''}>
            ${canStart ? 'Escolher Tema & Iniciar Partida ➔' : `Mínimo de ${minPlayers} jogadores`}
          </button>
        </div>
      `;
    }

    GameAnimations.flipCard(this.elements.card, () => {
      this.elements.card.innerHTML = html;
    });
  },

  // Celular do Jogador no Modo Online (Client)
  renderOnlineJogoClient() {
    this.hideActionButtons();
    const card = this.elements.card;
    const cardWord = HubOnline.myCard;
    const hint = HubOnline.myHint;
    const isImp = cardWord === "IMPOSTOR";

    if (HubOnline.gameState === "revealed") {
      this.mostrarTabelaRevelacaoOnline();
      return;
    }

    if (!this.visivel) {
      card.style.background = "";
      card.innerHTML = `
        <div class="who-badge">Sua Carta Online</div>
        <div class="who" style="margin: 8px 0 12px;">${HubOnline.playerName}</div>
        <p style="margin: 8px 0 14px;">Toque no botão abaixo para ver sua palavra secreta.</p>
        <button class="btn-confirm" data-action="online-toggle-word">👁️ Ver Minha Palavra</button>
      `;
    } else {
      if (isImp) {
        card.style.background = "#FFD1DC";
      } else {
        card.style.background = "";
      }

      let hintHtml = "";
      if (isImp && hint) {
        hintHtml = `<div class="impostor-hint-badge">💡 Dica secreta: <b>${hint}</b></div>`;
      }

      card.innerHTML = `
        <div class="who-badge">Sua Carta Online</div>
        <div class="word ${isImp ? 'imp' : ''} pop-in">${cardWord}</div>
        ${hintHtml}
        <button class="sec" data-action="online-toggle-word" style="margin-top: 14px;">🙈 Esconder Palavra</button>
      `;
    }

    if (HubOnline.isHost) {
      card.innerHTML += `
        <div style="margin-top: 14px; border-top: 2px dashed var(--ink); padding-top: 10px;">
          <button class="btn-confirm" data-action="online-host-reveal">📢 Revelar Resultado para Todos</button>
        </div>
      `;
    }
  },

  mostrarTabelaRevelacaoOnline() {
    GameAnimations.launchConfetti();
    const card = this.elements.card;
    card.style.background = "";

    const t = HubOnline.tableResults;
    if (!t) return;

    let html = `
      <div class="who" style="margin-bottom: 10px">Partida Encerrada!</div>
      <table>
        <tr><th>Jogador</th><th>Carta</th></tr>
    `;

    t.forEach(row => {
      html += `
        <tr class="${row.card === 'IMPOSTOR' ? 'imp' : ''}">
          <td>${row.name}</td>
          <td><b>${row.card}</b></td>
        </tr>
      `;
    });

    html += `</table>`;

    if (HubOnline.isHost) {
      html += `
        <button class="btn-confirm" data-action="online-host-back-lobby" style="margin-top: 10px;">
          🔄 Voltar ao Lobby para Nova Rodada
        </button>
      `;
    } else {
      html += `<p style="margin-top: 10px; font-weight: 700;">Aguardando anfitrião voltar ao lobby...</p>`;
    }

    card.innerHTML = html;
  },

  // Callbacks disparados pelo HubOnline
  onOnlinePlayersUpdated(players) {
    if (this.currentScreen === "online_lobby") {
      this.renderOnlineLobby();
    }
  },

  onOnlineGameStarted(data) {
    this.visivel = false;
    this.showScreen("online_jogo_client");
  },

  onOnlineGameRevealed(data) {
    HubOnline.tableResults = data.table;
    this.renderOnlineJogoClient();
  },

  onOnlineBackToLobby() {
    this.showScreen("online_lobby");
  },

  // ================= MODO OFFLINE: ESCOLHA DE MODO ================= //
  renderModoOffline() {
    this.elements.subText.textContent = "Escolha as regras da rodada";
    this.hideActionButtons();

    const html = `
      <div class="who" style="margin-bottom: 12px">Escolha o modo de jogo</div>
      <div class="grid" style="grid-template-columns: 1fr; gap: 12px">
        <button class="modo pop-in" data-action="set-modo" data-value="duplas" style="background: var(--p);">
          <span class="em">👯</span>
          <div>
            <b>Duplas & Impostores</b>
            <small>6 a 20 jogadores · Forme pares secretos e caçe os farsantes</small>
          </div>
        </button>
        <button class="modo pop-in" data-action="set-modo" data-value="impostor" style="background: var(--b);">
          <span class="em">🕵️</span>
          <div>
            <b>Modo Impostor</b>
            <small>3 a 20 jogadores · Todos sabem a palavra, menos os espiões!</small>
          </div>
        </button>
        <button class="modo pop-in" data-action="set-modo" data-value="mimica" style="background: var(--g);">
          <span class="em">🤫</span>
          <div>
            <b>Mímica Secreta</b>
            <small>3 a 20 jogadores · Palavras semelhantes, descubra o diferente</small>
          </div>
        </button>
      </div>
    `;

    GameAnimations.flipCard(this.elements.card, () => {
      this.elements.card.innerHTML = html;
      this.elements.card.style.background = "";
    });
  },

  // ================= JOGADORES & CONFIGURAÇÃO DA DICA ================= //
  renderJogadores() {
    this.elements.subText.textContent = `Configurando jogadores (${this.modo.toUpperCase()})`;
    this.hideActionButtons();

    const players = this.getPlayers();

    let html = `
      <div class="who" style="margin-bottom: 10px">Quem vai jogar? (${players.length})</div>
      <div class="players-list-scroll">
    `;

    players.forEach((p, idx) => {
      html += `
        <div class="player-input-row">
          <input class="nm" maxlength="20" placeholder="Jogador ${idx + 1}" value="${p}" data-index="${idx}">
          <button class="sec btn-remove" data-action="rem-player" data-index="${idx}">✕</button>
        </div>
      `;
    });

    html += `</div>`;

    // Duplas
    if (this.modo === "duplas") {
      const impCount = this.getDuplasImpCount();
      const numDuplas = (players.length - impCount) / 2;
      html += `
        <div class="game-info-badge">
          <span>🎯 <b>${numDuplas}</b> duplas de palavras</span>
          <span>🕵️ <b>${impCount}</b> impostor${impCount > 1 ? "es" : ""}</span>
        </div>
        <div class="stepper-row">
          <button class="sec" data-action="imp-step" data-delta="-1">−</button>
          <div class="who">Impostores: ${impCount}</div>
          <button class="sec" data-action="imp-step" data-delta="1">+</button>
        </div>
      `;
    }

    // Configuração do Tipo de Dica (Palavra difícil vs Frase curta)
    if (this.modo !== "mimica") {
      html += `
        <div class="opt">
          <span>💡 Dica do impostor</span>
          <div class="seg">
            <button class="${this.usaDica ? 'on' : ''}" data-action="toggle-dica" data-val="1">Com</button>
            <button class="${!this.usaDica ? 'on' : ''}" data-action="toggle-dica" data-val="0">Sem</button>
          </div>
        </div>

        <div class="opt" style="${!this.usaDica ? 'opacity: 0.4; pointer-events: none;' : ''}">
          <span>📝 Estilo da dica</span>
          <div class="seg">
            <button class="${this.hintType === 'word' ? 'on' : ''}" data-action="set-hint-type" data-val="word" title="Apenas 1 palavra sutil e difícil">Palavra</button>
            <button class="${this.hintType === 'phrase' ? 'on' : ''}" data-action="set-hint-type" data-val="phrase" title="Uma frase curta e enigmática">Frase</button>
          </div>
        </div>
      `;
    }

    if (this.modo !== "duplas") {
      const maxImp = Math.max(1, Math.ceil(players.length / 2) - 1);
      const currImp = this.getOtherImpCount();
      html += `
        <div class="opt">
          <span>${this.modo === "mimica" ? "🎭 Diferentes" : "🕵️ Impostores"}</span>
          <div class="seg">
      `;
      for (let n = 1; n <= 3; n++) {
        html += `
          <button class="${n === currImp ? 'on' : ''}" data-action="set-other-imp" data-val="${n}" ${n > maxImp ? 'disabled' : ''}>
            ${n}
          </button>
        `;
      }
      html += `</div></div>`;
    }

    html += `
      <div class="grid" style="grid-template-columns: 1fr; margin-top: 14px; gap: 8px">
        <button class="sec" data-action="add-player" ${players.length >= 20 ? 'disabled' : ''}>+ Adicionar jogador</button>
        <button class="btn-confirm" data-action="confirm-players">Continuar para Temas ➔</button>
      </div>
    `;

    GameAnimations.flipCard(this.elements.card, () => {
      this.elements.card.innerHTML = html;
      this.elements.card.style.background = "";
    });
  },

  readPlayerInputs() {
    const inputs = document.querySelectorAll(".nm");
    const updated = [];
    inputs.forEach((inp, idx) => {
      const val = inp.value.replace(/[<>&"]/g, "").trim();
      updated.push(val || `Jogador ${idx + 1}`);
    });
    this.setPlayers(updated);
  },

  // ================= ESCOLHA DO TEMA ================= //
  renderTemas() {
    this.elements.subText.textContent = "Escolha um tema ou abra o filtro de categorias";
    this.hideActionButtons();

    let html = `
      <div class="who" style="margin-bottom: 12px">Escolha o tema</div>
      <div class="grid theme-grid">
    `;

    Object.keys(THEME_DATABASE).forEach(t => {
      const themeObj = THEME_DATABASE[t];
      const count = GameFilters.getActiveWordsCount(t);
      html += `
        <div class="theme-btn-wrapper">
          <button class="tema" data-action="select-tema" data-tema="${t}" style="border-left: 8px solid ${themeObj.color};">
            <span class="theme-icon">${themeObj.icon || "🎯"}</span>
            <span class="theme-name">${t}</span>
            <small style="font-size: 0.72rem; opacity: 0.7; font-weight: 700;">${count} palavras</small>
          </button>
          <button class="btn-filter-shortcut" data-action="open-theme-filter" data-theme="${t}" title="Filtrar categorias de ${t}">⚙️ Filtro</button>
        </div>
      `;
    });

    html += `
      <div class="theme-btn-wrapper">
        <button class="tema" data-action="select-tema" data-tema="Misto" style="border-left: 8px solid var(--ink); background: var(--ink); color: #fff;">
          <span class="theme-icon">🎲</span>
          <span class="theme-name">Misto</span>
          <small style="font-size: 0.72rem; opacity: 0.8; font-weight: 700;">Todos os temas ativos</small>
        </button>
      </div>
    `;

    html += `</div>`;

    if (this.gameEnvironment === "offline") {
      html += `
        <div class="menu-bottom-actions">
          <button class="sec" data-action="nav-jogadores">👥 Jogadores (${this.getPlayers().length})</button>
          <button class="sec" data-action="nav-modo">🔄 Modo (${this.modo})</button>
        </div>
      `;
    }

    GameAnimations.flipCard(this.elements.card, () => {
      this.elements.card.innerHTML = html;
      this.elements.card.style.background = "";
    });
  },

  // ================= FILTRO DE QUALQUER TEMA ================= //
  renderFiltroTema() {
    const tema = this.filtroTemaAtual || "Super-herói";
    const themeObj = THEME_DATABASE[tema];
    if (!themeObj) {
      this.showScreen("temas");
      return;
    }

    this.elements.subText.textContent = `Personalize as categorias de ${tema}`;
    this.hideActionButtons();

    const subcategories = themeObj.subcategories || {};
    const totalActive = GameFilters.getActiveWordsCount(tema);

    let chipsHtml = "";
    Object.keys(subcategories).forEach(subKey => {
      const sub = subcategories[subKey];
      const isActive = GameFilters.isSubActive(tema, subKey);
      const subItemsCount = themeObj.items.filter(it => it.sub === subKey).length;

      chipsHtml += `
        <label class="filter-chip ${isActive ? 'active' : ''}">
          <input type="checkbox" data-filter-theme="${tema}" data-filter-sub="${subKey}" ${isActive ? 'checked' : ''}>
          <span class="chip-badge">${sub.icon || "🎯"}</span>
          <div class="chip-info">
            <b>${sub.label} <small>(${subItemsCount})</small></b>
            <small>${sub.desc}</small>
          </div>
        </label>
      `;
    });

    const html = `
      <div class="who" style="margin-bottom: 6px">${themeObj.icon || "🎯"} Filtro: ${tema}</div>
      <p style="margin-bottom: 12px; font-size: 0.9rem;">Escolha quais grupos você deseja no sorteio:</p>

      <div class="filter-options-box">
        ${chipsHtml}
      </div>

      <div class="filter-count-badge">
        🎯 <b>${totalActive}</b> palavras ativas no sorteio
      </div>

      <div class="grid" style="grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 14px">
        <button class="sec" data-action="filter-all-theme">Marcar Todas</button>
        <button class="btn-confirm" data-action="filter-play-theme">Jogar com Filtro ➔</button>
      </div>
    `;

    GameAnimations.flipCard(this.elements.card, () => {
      this.elements.card.innerHTML = html;
      this.elements.card.style.background = "";
    });
  },

  // ================= SORTEIO ================= //
  iniciarPartida(temaEscolhido) {
    this.tema = temaEscolhido;

    if (this.gameEnvironment === "online") {
      this.iniciarPartidaOnline();
      return;
    }

    if (this.modo === "mimica") {
      this.sortearMimica();
    } else {
      this.sortearPadrao();
    }
  },

  sortearPadrao() {
    const pool = GameFilters.getWordsForTheme(this.tema);
    const players = this.getPlayers();
    const N = players.length;
    const nimp = (this.modo === "impostor") ? this.getOtherImpCount() : this.getDuplasImpCount();
    const npar = (this.modo === "impostor") ? 1 : (N - nimp) / 2;

    let livres = pool.filter(w => this.usados.indexOf(w) < 0);
    if (livres.length < npar) {
      this.usados = [];
      livres = pool.slice();
    }

    const sorteadas = this.shuffle(livres).slice(0, npar);
    this.usados = this.usados.concat(this.modo === "impostor" ? [sorteadas[0]] : sorteadas);

    let candidatos = players.filter(p => p !== this.ultInicia);
    if (!candidatos.length) candidatos = players.slice();
    this.inicia = candidatos[this.randomInt(candidatos.length)];
    this.ultInicia = this.inicia;

    let arr = [];
    if (this.modo === "impostor") {
      for (let q = 0; q < N - nimp; q++) arr.push(sorteadas[0]);
    } else {
      sorteadas.forEach(w => arr.push(w, w));
    }
    for (let q2 = 0; q2 < nimp; q2++) arr.push("IMPOSTOR");

    let shuffled = this.shuffle(arr);
    for (let attempt = 0; attempt < 30; attempt++) {
      let repetido = false;
      shuffled.forEach((c, idx) => {
        if (c === "IMPOSTOR" && this.ultImp.indexOf(players[idx]) >= 0) {
          repetido = true;
        }
      });
      if (!repetido) break;
      shuffled = this.shuffle(arr);
    }

    this.cartas = shuffled;
    this.ultImp = [];
    this.cartas.forEach((c, idx) => {
      if (c === "IMPOSTOR") this.ultImp.push(players[idx]);
    });

    // Pista: utiliza getHintForWord com o hintType configurado ("word" ou "phrase")
    this.dicasI = [];
    let wi = 0;
    const sortWords = this.shuffle(sorteadas.slice());
    this.cartas.forEach((c, idx) => {
      if (c === "IMPOSTOR") {
        const wordKey = sortWords[wi % sortWords.length];
        this.dicasI[idx] = getHintForWord(wordKey, this.hintType);
        wi++;
      }
    });

    this.indiceAtual = 0;
    this.visivel = false;
    this.visto = false;
    this.showScreen("jogo");
  },

  sortearMimica() {
    const listaOriginal = GameFilters.getPairsForTheme(this.tema);
    const totPool = GameFilters.getWordsForTheme(this.tema);

    let lista = listaOriginal.filter(p => {
      const a = p.split("|");
      return totPool.indexOf(a[0]) >= 0 && totPool.indexOf(a[1]) >= 0;
    });

    if (!lista.length) lista = listaOriginal;

    let livres = lista.filter(p => this.usadosP.indexOf(p) < 0);
    if (!livres.length) {
      this.usadosP = [];
      livres = lista.slice();
    }

    const parEscolhido = livres[this.randomInt(livres.length)];
    this.usadosP.push(parEscolhido);

    let ab = parEscolhido.split("|");
    if (this.randomInt(2) === 1) ab = [ab[1], ab[0]];

    const players = this.getPlayers();
    const N = players.length;
    const nI = this.getOtherImpCount();

    let arr = [];
    for (let q = 0; q < N - nI; q++) arr.push(ab[0]);
    for (let q2 = 0; q2 < nI; q2++) arr.push(ab[1]);

    let tries = 0;
    let ixs = [];
    do {
      this.cartas = this.shuffle(arr.slice());
      ixs = [];
      this.cartas.forEach((c, k) => {
        if (c === ab[1]) ixs.push(k);
      });
      tries++;
    } while (tries < 30 && ixs.some(k => this.ultImp.indexOf(players[k]) >= 0));

    this.ultImp = ixs.map(k => players[k]);
    this.mmDif = ixs;
    this.mmPal = ab;

    let cand = players.filter(x => x !== this.ultInicia);
    if (!cand.length) cand = players.slice();
    this.inicia = cand[this.randomInt(cand.length)];
    this.ultInicia = this.inicia;

    this.dicasI = [];
    this.indiceAtual = 0;
    this.visivel = false;
    this.visto = false;
    this.showScreen("jogo");
  },

  // Sorteio Online (distribuição privada entre os celulares)
  iniciarPartidaOnline() {
    const pool = GameFilters.getWordsForTheme(this.tema);
    const players = HubOnline.players;
    const N = players.length;
    const nimp = (this.modo === "impostor") ? this.getOtherImpCount() : this.getDuplasImpCount();
    const npar = (this.modo === "impostor") ? 1 : (N - nimp) / 2;

    let livres = pool.filter(w => this.usados.indexOf(w) < 0);
    if (livres.length < npar) {
      this.usados = [];
      livres = pool.slice();
    }

    const sorteadas = this.shuffle(livres).slice(0, npar);
    this.usados = this.usados.concat(this.modo === "impostor" ? [sorteadas[0]] : sorteadas);

    let cand = players.map(p => p.name);
    const starts = cand[this.randomInt(cand.length)];

    let arr = [];
    if (this.modo === "impostor") {
      for (let q = 0; q < N - nimp; q++) arr.push(sorteadas[0]);
    } else {
      sorteadas.forEach(w => arr.push(w, w));
    }
    for (let q2 = 0; q2 < nimp; q2++) arr.push("IMPOSTOR");

    let shuffledCards = this.shuffle(arr);
    const assignedMap = {};
    const tableResults = [];

    players.forEach((p, idx) => {
      const card = shuffledCards[idx];
      let hint = null;
      if (card === "IMPOSTOR" && this.usaDica) {
        hint = getHintForWord(sorteadas[0], this.hintType);
      }
      assignedMap[p.id] = { card: card, hint: hint };
      tableResults.push({ name: p.name, card: card });
    });

    HubOnline.hostDistributeCards(assignedMap, starts, this.tema, tableResults);
    this.visivel = false;
    this.showScreen("online_jogo_client");
  },

  // ================= RENDERIZAÇÃO DA RODADA OFFLINE ================= //
  renderJogo() {
    const players = this.getPlayers();
    const card = this.elements.card;
    const mainBtn = this.elements.mainBtn;
    const proxBtn = this.elements.proxBtn;
    const againBtn = this.elements.againBtn;
    const trocarBtn = this.elements.trocarBtn;
    const revelarBtn = this.elements.revelarBtn;

    againBtn.style.display = "none";
    trocarBtn.style.display = "none";
    revelarBtn.style.display = "none";

    // Todos viram
    if (this.indiceAtual >= players.length) {
      GameAnimations.launchConfetti();
      card.style.background = "";

      let instrucao = "";
      if (this.modo === "mimica") {
        instrucao = "Façam a mímica da sua palavra, um de cada vez, e descubram quem recebeu a palavra diferente!";
      } else if (this.modo === "impostor") {
        instrucao = "Agora deem dicas e descubram quem é o impostor!";
      } else {
        instrucao = "Agora deem dicas e achem sua dupla!";
      }

      card.innerHTML = `
        <div class="who success-title">🎉 Todos já viram!</div>
        <p style="margin: 8px 0 14px">${instrucao}</p>
        <div style="color: var(--mut); font-size: 0.9rem">Quem começa:</div>
        <div class="word starter-word pop-in">${this.inicia}</div>
      `;

      proxBtn.style.display = "none";
      mainBtn.style.display = "none";
      againBtn.style.display = "block";
      trocarBtn.style.display = "block";
      revelarBtn.style.display = "block";
      return;
    }

    mainBtn.style.display = "block";
    proxBtn.style.display = "block";
    proxBtn.disabled = !this.visto;
    proxBtn.style.opacity = this.visto ? "1" : "0.4";

    const jogadorNome = players[this.indiceAtual];

    if (!this.visivel) {
      card.style.background = "";
      card.innerHTML = `
        <div class="who">${jogadorNome}</div>
        <p style="margin: 8px 0 0">
          ${this.visto ? 'Pronto! Agora passe para a próxima pessoa.' : 'Só você deve olhar a tela'}
        </p>
      `;
      mainBtn.textContent = `Ver palavra de ${jogadorNome}`;
    } else {
      const isImp = this.cartas[this.indiceAtual] === "IMPOSTOR";
      if (isImp) {
        GameAnimations.playSound("impostor");
        GameAnimations.vibrate([100, 50, 100]);
        card.style.background = "#FFD1DC";
      } else {
        card.style.background = "";
      }

      let extraDicaHtml = "";
      if (isImp && this.usaDica) {
        const hintText = this.dicasI[this.indiceAtual];
        extraDicaHtml = `
          <div class="impostor-hint-badge">
            Dica: <b>${hintText}</b>
          </div>
        `;
      }

      card.innerHTML = `
        <div class="who" style="margin-bottom: 10px">${jogadorNome}</div>
        <div class="word ${isImp ? 'imp' : ''} pop-in">${this.cartas[this.indiceAtual]}</div>
        ${extraDicaHtml}
      `;
      mainBtn.textContent = "Esconder palavra";
    }
  },

  // ================= REVELAR RESULTADOS OFFLINE ================= //
  mostrarTabelaRevelacao() {
    GameAnimations.launchConfetti();
    const card = this.elements.card;
    card.style.background = "";

    if (this.modo === "mimica") {
      card.innerHTML = `
        <table>
          <tr><th>Impostor(es)</th><th>Palavra dele</th><th>Palavra do grupo</th></tr>
          <tr class="imp">
            <td>${this.mmDif.map(k => this.jogadoresMimica[k]).join(' e ')}</td>
            <td>${this.mmPal[1]}</td>
            <td>${this.mmPal[0]}</td>
          </tr>
        </table>
      `;
      return;
    }

    if (this.modo === "impostor") {
      const ids = [];
      let palavra = "";
      this.cartas.forEach((c, k) => {
        if (c === "IMPOSTOR") ids.push(k);
        else if (!palavra) palavra = c;
      });

      let dicasTxt = "";
      if (this.usaDica) {
        dicasTxt = `<div class="dicas-resultado">Dica${ids.length > 1 ? 's' : ''}: ` +
          ids.map(k => `${this.jogadoresImpostor[k]}: ${this.dicasI[k]}`).join(' · ') +
          `</div>`;
      }

      card.innerHTML = `
        <table>
          <tr><th>Impostor${ids.length > 1 ? 'es' : ''}</th><th>Palavra</th></tr>
          <tr class="imp">
            <td>${ids.map(k => this.jogadoresImpostor[k]).join(' e ')}</td>
            <td>${palavra}</td>
          </tr>
        </table>
        ${dicasTxt}
      `;
      return;
    }

    // Modo Duplas
    const grupos = {};
    const imp = [];
    const dd = [];

    this.cartas.forEach((c, k) => {
      const pNome = this.jogadoresDuplas[k];
      if (c === "IMPOSTOR") {
        imp.push(pNome);
        dd.push(`${pNome}: ${this.dicasI[k]}`);
      } else {
        if (!grupos[c]) grupos[c] = [];
        grupos[c].push(pNome);
      }
    });

    let html = `
      <table>
        <tr><th>Dupla</th><th>Pessoas</th><th>Palavra</th></tr>
    `;

    let n = 1;
    Object.keys(grupos).forEach(w => {
      html += `<tr><td>${n}</td><td>${grupos[w].join(' e ')}</td><td>${w}</td></tr>`;
      n++;
    });

    html += `
      <tr class="imp">
        <td>⚠️</td>
        <td>${imp.join(' e ')}</td>
        <td>IMPOSTOR${imp.length > 1 ? 'ES' : ''}</td>
      </tr>
      </table>
    `;

    if (this.usaDica && dd.length) {
      html += `<div class="dicas-resultado">Dica${dd.length > 1 ? 's' : ''} do impostor: ${dd.join(' · ')}</div>`;
    }

    card.innerHTML = html;
  },

  // ================= EVENT HANDLERS GLOBAIS ================= //
  bindGlobalEvents() {
    if (this.elements.voltarBtn) {
      this.elements.voltarBtn.addEventListener("click", () => this.goBack());
    }

    this.elements.mainBtn.addEventListener("click", () => {
      if (GameAnimations.flipping) return;
      if (!this.visivel) {
        this.visivel = true;
      } else {
        this.visivel = false;
        this.visto = true;
      }
      GameAnimations.flipCard(this.elements.card, () => this.renderJogo());
    });

    this.elements.proxBtn.addEventListener("click", () => {
      if (GameAnimations.flipping || !this.visto || this.visivel) return;
      this.indiceAtual++;
      this.visto = false;
      this.visivel = false;
      GameAnimations.flipCard(this.elements.card, () => this.renderJogo());
    });

    this.elements.againBtn.addEventListener("click", () => {
      if (this.tema) this.iniciarPartida(this.tema);
    });

    this.elements.trocarBtn.addEventListener("click", () => {
      this.showScreen("temas");
    });

    this.elements.revelarBtn.addEventListener("click", () => {
      GameAnimations.flipCard(this.elements.card, () => {
        this.mostrarTabelaRevelacao();
        this.elements.revelarBtn.style.display = "none";
      });
    });

    // Delegação de cliques
    this.elements.card.addEventListener("click", (e) => {
      const target = e.target.closest("[data-action]") || e.target;
      const action = target.getAttribute ? target.getAttribute("data-action") : null;
      if (!action) return;

      switch (action) {
        case "choose-env":
          const env = target.getAttribute("data-val");
          this.gameEnvironment = env;
          if (env === "online") {
            this.showScreen("online_menu");
          } else {
            this.renderModoOffline();
          }
          break;

        case "go-online-criar":
          this.showScreen("online_criar");
          break;

        case "go-online-entrar":
          this.showScreen("online_entrar");
          break;

        case "confirm-create-room":
          const hostName = document.getElementById("online-host-name").value;
          HubOnline.createRoom(
            hostName,
            (pin) => {
              this.showScreen("online_lobby");
            },
            (err) => alert(err)
          );
          break;

        case "confirm-join-room":
          const pinVal = document.getElementById("online-pin-input").value;
          const pNameVal = document.getElementById("online-player-name").value;
          if (!pinVal || pinVal.length < 6) {
            alert("Digite o PIN de 6 dígitos completo.");
            return;
          }
          HubOnline.joinRoom(
            pinVal,
            pNameVal,
            () => {
              this.showScreen("online_lobby");
            },
            (err) => alert(err)
          );
          break;

        case "online-change-mode":
          const modos = ["duplas", "impostor", "mimica"];
          const nextModo = modos[(modos.indexOf(this.modo) + 1) % modos.length];
          this.modo = nextModo;
          this.renderOnlineLobby();
          break;

        case "online-host-choose-theme":
          this.showScreen("temas");
          break;

        case "online-toggle-word":
          this.visivel = !this.visivel;
          GameAnimations.flipCard(this.elements.card, () => this.renderOnlineJogoClient());
          break;

        case "online-host-reveal":
          HubOnline.hostRevealGame();
          break;

        case "online-host-back-lobby":
          HubOnline.hostBackToLobby();
          this.showScreen("online_lobby");
          break;

        case "set-modo":
          this.modo = target.getAttribute("data-value");
          this.showScreen("jogadores");
          break;

        case "add-player":
          this.readPlayerInputs();
          const pList = this.getPlayers();
          if (pList.length < 20) {
            pList.push("");
            this.setPlayers(pList);
          }
          this.renderJogadores();
          break;

        case "rem-player":
          this.readPlayerInputs();
          const pListRem = this.getPlayers();
          const minP = this.modo === "duplas" ? 6 : 3;
          if (pListRem.length > minP) {
            const idx = parseInt(target.getAttribute("data-index"), 10);
            pListRem.splice(idx, 1);
            this.setPlayers(pListRem);
          }
          this.renderJogadores();
          break;

        case "imp-step":
          this.readPlayerInputs();
          const delta = parseInt(target.getAttribute("data-delta"), 10);
          const curr = this.getDuplasImpCount();
          const N = this.getPlayers().length;
          const minAllowed = (N % 2 === 0) ? 2 : 1;
          let nextVal = curr + 2 * delta;
          if (nextVal >= minAllowed && nextVal <= N - 4) {
            this.numImpostoresCustom = nextVal;
          }
          this.renderJogadores();
          break;

        case "toggle-dica":
          this.readPlayerInputs();
          this.usaDica = target.getAttribute("data-val") === "1";
          this.renderJogadores();
          break;

        case "set-hint-type":
          this.readPlayerInputs();
          this.hintType = target.getAttribute("data-val"); // "word" ou "phrase"
          this.saveData();
          this.renderJogadores();
          break;

        case "set-other-imp":
          this.readPlayerInputs();
          this.numImpostoresOutros = parseInt(target.getAttribute("data-val"), 10);
          this.renderJogadores();
          break;

        case "confirm-players":
          this.readPlayerInputs();
          this.showScreen("temas");
          break;

        case "select-tema":
          const tName = target.getAttribute("data-tema");
          this.iniciarPartida(tName);
          break;

        case "open-theme-filter":
          this.filtroTemaAtual = target.getAttribute("data-theme");
          this.showScreen("filtro_tema");
          break;

        case "open-hero-filter":
          this.filtroTemaAtual = "Super-herói";
          this.showScreen("filtro_tema");
          break;

        case "nav-jogadores":
          this.showScreen("jogadores");
          break;

        case "nav-modo":
          this.renderModoOffline();
          break;

        case "filter-all-theme":
          GameFilters.selectAll(this.filtroTemaAtual);
          this.renderFiltroTema();
          break;

        case "filter-play-theme":
          this.iniciarPartida(this.filtroTemaAtual);
          break;

        case "filter-all":
          GameFilters.selectAll(this.filtroTemaAtual || "Super-herói");
          this.renderFiltroTema();
          break;

        case "filter-play":
          this.iniciarPartida(this.filtroTemaAtual || "Super-herói");
          break;
      }
    });

    this.elements.card.addEventListener("change", (e) => {
      if (e.target.matches("[data-filter-theme][data-filter-sub]")) {
        const t = e.target.getAttribute("data-filter-theme");
        const s = e.target.getAttribute("data-filter-sub");
        GameFilters.toggleFilter(t, s);
        this.renderFiltroTema();
      } else if (e.target.matches("[data-universe]")) {
        const uni = e.target.getAttribute("data-universe");
        GameFilters.toggleFilter("Super-herói", uni);
        this.renderFiltroTema();
      }
    });
  }
};

document.addEventListener("DOMContentLoaded", () => {
  HubGame.init();
});
