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
  jogadoresPergunta: ["Arthur", "Vitor", "João Pedro", "Coro", "Bia"],

  // Estado Pergunta & Resposta (Invertido)
  perguntaAtual: null,
  perguntaEtapa: "cartas", // "cartas" | "falar" | "pergunta_revelada" | "resultado"

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
    if (typeof GameFilters !== "undefined" && typeof GameFilters.init === "function") {
      GameFilters.init();
    }
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
      const pq = JSON.parse(localStorage.getItem("hub_nomes_pergunta"));
      if (pq && pq.length >= 3) this.jogadoresPergunta = pq;
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
      localStorage.setItem("hub_nomes_pergunta", JSON.stringify(this.jogadoresPergunta));
      localStorage.setItem("hub_hint_type", this.hintType);
    } catch (e) {}
  },

  getPlayers() {
    if (this.gameEnvironment === "online") {
      return HubOnline.players.map(p => p.name);
    }
    if (this.modo === "impostor") return this.jogadoresImpostor;
    if (this.modo === "mimica") return this.jogadoresMimica;
    if (this.modo === "pergunta") return this.jogadoresPergunta;
    return this.jogadoresDuplas;
  },

  setPlayers(arr) {
    if (this.modo === "impostor") this.jogadoresImpostor = arr;
    else if (this.modo === "mimica") this.jogadoresMimica = arr;
    else if (this.modo === "pergunta") this.jogadoresPergunta = arr;
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
        <button class="modo" data-action="choose-env" data-val="offline" style="background: var(--p);">
          <span class="em">📱</span>
          <div>
            <b>Modo Offline (Mesmo celular)</b>
            <small>Passe o celular de mão em mão · Sem internet necessária</small>
          </div>
        </button>
        <button class="modo" data-action="choose-env" data-val="online" style="background: var(--b);">
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

    this.elements.card.innerHTML = html;
    this.elements.card.style.background = "";
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

    this.elements.card.innerHTML = html;
    this.elements.card.style.background = "";
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

    this.elements.card.innerHTML = html;
    this.elements.card.style.background = "";
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
      const modoLabel = this.modo === "pergunta" ? "❓ PERGUNTA & RESPOSTA" : this.modo.toUpperCase();
      const startLabel = this.modo === "pergunta" ? "Iniciar Rodada de Perguntas ➔" : "Escolher Tema & Iniciar Partida ➔";

      html += `
        <div class="grid" style="grid-template-columns: 1fr; gap: 8px; margin-top: 14px;">
          <button class="sec" data-action="online-change-mode">⚙️ Modo: ${modoLabel}</button>
          <button class="btn-confirm" data-action="online-host-choose-theme" ${!canStart ? 'disabled' : ''}>
            ${canStart ? startLabel : `Mínimo de ${minPlayers} jogadores`}
          </button>
        </div>
      `;
    }

    this.elements.card.innerHTML = html;
    this.elements.card.style.background = "";
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

    // Modo Pergunta & Resposta Online
    if (HubOnline.isPerguntaMode) {
      if (HubOnline.gameState === "question_revealed") {
        card.style.background = "";
        card.innerHTML = `
          <div class="who-badge" style="background: var(--o); color: #fff;">📢 Pergunta Oficial da Rodada</div>
          <div class="pergunta-box oficial-highlight">
            "${HubOnline.officialQuestion || HubOnline.perguntaReal}"
          </div>

          <div style="margin: 12px 0 6px; text-align: left;">
            <div style="font-size: 0.84rem; font-weight: 800; color: var(--mut); text-transform: uppercase; margin-bottom: 6px;">
              📝 Respostas dos Jogadores:
            </div>
            <div class="pergunta-respostas-list">
              ${HubOnline.players.map(p => {
                const resp = (HubOnline.playerAnswers && HubOnline.playerAnswers[p.name]) ? this.escapeHtml(HubOnline.playerAnswers[p.name]) : '<i style="color:var(--mut); font-weight:normal;">(não digitou)</i>';
                return `
                  <div class="pergunta-resposta-item">
                    <span class="resp-autor">👤 <b>${p.name}</b>:</span>
                    <span class="resp-balao">"${resp}"</span>
                  </div>
                `;
              }).join('')}
            </div>
          </div>

          <div class="pergunta-debate-box">
            <p style="font-size: 1.05rem; font-weight: 800; margin-bottom: 6px; color: var(--ink);">🕵️ Quem é o Impostor?</p>
            <p style="font-size: 0.92rem; color: var(--mut); line-height: 1.45; margin: 0;">
              Essa foi a pergunta que a maioria respondeu!<br>
              Quem respondeu algo esquisito ou oposto? <b>Debatam e acusem o suspeito!</b>
            </p>
          </div>
        `;
        if (HubOnline.isHost) {
          card.innerHTML += `
            <button class="btn-confirm" data-action="online-host-reveal" style="margin-top: 12px; width: 100%; background: var(--bad); color: #fff;">
              🎭 Revelar quem era o Impostor para Todos
            </button>
          `;
        } else {
          card.innerHTML += `
            <p style="margin-top: 12px; font-weight: 700; color: var(--mut); font-size: 0.9rem;">Aguardando o anfitrião revelar o impostor...</p>
          `;
        }
        return;
      }

      if (!this.visivel) {
        card.style.background = "";
        card.innerHTML = `
          <div class="who-badge" style="background: var(--o); color: #fff;">❓ Sala Online</div>
          <div class="who" style="margin: 8px 0 12px;">${HubOnline.playerName}</div>
          <p style="margin: 8px 0 14px;">Toque no botão abaixo para ver sua pergunta secreta.</p>
          <button class="btn-confirm" data-action="online-toggle-word">👁️ Ver Minha Pergunta</button>
        `;
      } else {
        card.style.background = "";
        const myResp = HubOnline.mySubmittedAnswer ? this.escapeHtml(HubOnline.mySubmittedAnswer) : "";
        card.innerHTML = `
          <div class="who-badge" style="background: var(--o); color: #fff;">❓ Sua Pergunta Secreta</div>
          <div class="who" style="margin: 6px 0 10px;">${HubOnline.playerName}</div>
          <div class="pergunta-box">${cardWord}</div>

          <div class="pergunta-input-wrap">
            <label for="input-online-resposta" class="pergunta-input-label">
              ✍️ Digite sua resposta secreta:
            </label>
            <div class="pergunta-input-row">
              <input type="text" id="input-online-resposta" class="pergunta-input-field"
                     placeholder="Digite aqui sua resposta..."
                     value="${myResp}"
                     maxlength="80" autocomplete="off" />
              <button class="btn-confirm" data-action="online-submit-answer" style="padding: 10px 14px; white-space: nowrap;">
                ${HubOnline.mySubmittedAnswer ? 'Atualizar' : 'Salvar'}
              </button>
            </div>
            ${HubOnline.mySubmittedAnswer ? '<p style="color: #27ae60; font-size: 0.8rem; font-weight: 700; margin: 4px 0 0;">✓ Resposta salva em segredo!</p>' : '<small class="pergunta-input-sub">🔒 Sua resposta fica registrada para a rodada.</small>'}
          </div>

          <p class="pergunta-dica">
            🧠 <b>Pense bem e digite sua resposta.</b> Todas as respostas serão exibidas no momento do debate!
          </p>
          <button class="sec" data-action="online-toggle-word" style="margin-top: 10px;">🙈 Esconder Pergunta</button>
        `;
      }

      if (HubOnline.isHost) {
        card.innerHTML += `
          <div style="margin-top: 14px; border-top: 2px dashed var(--ink); padding-top: 10px;">
            <p style="font-size: 0.85rem; color: var(--mut); margin-bottom: 8px;">Começa comentando: <b>${HubOnline.startsPlayer || 'Anfitrião'}</b></p>
            <button class="btn-confirm" data-action="online-pergunta-mostrar-oficial">
              📢 Todos responderam? Mostrar Pergunta Oficial ➔
            </button>
          </div>
        `;
      }
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
        <div class="word ${isImp ? 'imp' : ''}">${cardWord}</div>
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
    const card = this.elements.card;
    card.style.background = "";

    const t = HubOnline.tableResults;
    if (!t) return;

    if (HubOnline.isPerguntaMode) {
      const imps = t.filter(r => r.isImp).map(r => r.name);
      const qReal = HubOnline.officialQuestion || HubOnline.perguntaReal || (this.perguntaAtual && this.perguntaAtual.pergunta);
      const qImp = (this.perguntaAtual && this.perguntaAtual.impostor) ? this.perguntaAtual.impostor : "(Pergunta Invertida do Infiltrado)";

      let html = `
        <div class="who success-title" style="margin-bottom: 8px;">🎭 Revelação Final!</div>
        <div class="impostor-badge-reveal">
          🕵️ O Impostor era: <b>${imps.length ? imps.join(' e ') : 'Infiltrado'}</b>
        </div>
        <div style="margin: 10px 0; text-align: left; background: #fff; padding: 12px; border-radius: 10px; border: 2px solid var(--ink); box-shadow: 3px 3px 0 var(--ink);">
          <div style="color: var(--bad); font-size: 0.8rem; font-weight: 800; text-transform: uppercase;">Pergunta que o Infiltrado respondeu:</div>
          <div style="font-weight: 700; font-size: 1.05rem; margin: 4px 0 12px; color: var(--ink);">"${qImp}"</div>
          <div style="color: #27ae60; font-size: 0.8rem; font-weight: 800; text-transform: uppercase;">Pergunta que a Maioria respondeu:</div>
          <div style="font-weight: 700; font-size: 1.05rem; margin-top: 4px; color: var(--ink);">"${qReal}"</div>
        </div>

        <div style="margin: 12px 0 8px; text-align: left;">
          <div style="font-size: 0.84rem; font-weight: 800; color: var(--mut); text-transform: uppercase; margin-bottom: 6px;">
            📝 Respostas Dadas:
          </div>
          <div class="pergunta-respostas-list">
            ${t.map(row => {
              const isImp = row.isImp;
              const resp = (HubOnline.playerAnswers && HubOnline.playerAnswers[row.name]) ? this.escapeHtml(HubOnline.playerAnswers[row.name]) : '<i style="color:var(--mut); font-weight:normal;">(não digitou)</i>';
              return `
                <div class="pergunta-resposta-item ${isImp ? 'is-impostor' : ''}">
                  <span class="resp-autor">${isImp ? '🕵️' : '👤'} <b>${row.name}</b> ${isImp ? '<b style="color:var(--bad)">(Infiltrado)</b>' : ''}:</span>
                  <span class="resp-balao ${isImp ? 'balao-impostor' : ''}">"${resp}"</span>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;

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
      return;
    }

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

  onOnlineAnswersUpdate(answers) {
    if (this.currentScreen === "online_jogo_client") {
      this.renderOnlineJogoClient();
    }
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

  onOnlineShowOfficialQuestion(question) {
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
        <button class="modo" data-action="set-modo" data-value="duplas" style="background: var(--p);">
          <span class="em">👯</span>
          <div>
            <b>Duplas & Impostores</b>
            <small>6 a 20 jogadores · Forme pares secretos e caçe os farsantes</small>
          </div>
        </button>
        <button class="modo" data-action="set-modo" data-value="impostor" style="background: var(--b);">
          <span class="em">🕵️</span>
          <div>
            <b>Modo Impostor</b>
            <small>3 a 20 jogadores · Todos sabem a palavra, menos os espiões!</small>
          </div>
        </button>
        <button class="modo" data-action="set-modo" data-value="mimica" style="background: var(--g);">
          <span class="em">🤫</span>
          <div>
            <b>Mímica Secreta</b>
            <small>3 a 20 jogadores · Palavras semelhantes, descubra o diferente</small>
          </div>
        </button>
        <button class="modo" data-action="set-modo" data-value="pergunta" style="background: var(--o);">
          <span class="em">❓</span>
          <div>
            <b>Pergunta & Resposta (Infiltrado)</b>
            <small>3 a 20 jogadores · Responda sua pergunta... mas o impostor tem outra!</small>
          </div>
        </button>
      </div>
    `;

    this.elements.card.innerHTML = html;
    this.elements.card.style.background = "";
  },

  // ================= JOGADORES & CONFIGURAÇÃO DA DICA ================= //
  renderJogadores() {
    const modoTitle = this.modo === "pergunta" ? "PERGUNTA & RESPOSTA" : this.modo.toUpperCase();
    this.elements.subText.textContent = `Configurando jogadores (${modoTitle})`;
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

    // Modo Pergunta & Resposta (Invertido)
    if (this.modo === "pergunta") {
      const impCount = this.getOtherImpCount();
      html += `
        <div class="game-info-badge">
          <span>❓ <b>Pergunta Secreta</b></span>
          <span>🕵️ <b>${impCount}</b> infiltrado${impCount > 1 ? "s" : ""}</span>
        </div>
        <div style="background: #ffffff; border: 2px dashed var(--ink); border-radius: 10px; padding: 10px; margin: 10px 0; font-size: 0.85rem; color: var(--mut); line-height: 1.4;">
          💡 <b>Regra do Jogo:</b> Cada pessoa vê uma pergunta secreta no celular. O infiltrado recebe uma pergunta parecida ou oposta sem saber! Depois todos falam sua resposta e tentam descobrir quem recebeu a pergunta diferente!
        </div>
      `;
    }

    // Configuração do Tipo de Dica (Palavra difícil vs Frase curta) - Apenas para Duplas e Impostor
    if (this.modo !== "mimica" && this.modo !== "pergunta") {
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
      const impLabel = this.modo === "mimica" ? "🎭 Diferentes" : (this.modo === "pergunta" ? "❓ Infiltrados" : "🕵️ Impostores");
      html += `
        <div class="opt">
          <span>${impLabel}</span>
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

    const btnConfirmText = this.modo === "pergunta" ? "Iniciar Rodada de Perguntas ➔" : "Continuar para Temas ➔";
    html += `
      <div class="grid" style="grid-template-columns: 1fr; margin-top: 14px; gap: 8px">
        <button class="sec" data-action="add-player" ${players.length >= 20 ? 'disabled' : ''}>+ Adicionar jogador</button>
        <button class="btn-confirm" data-action="confirm-players">${btnConfirmText}</button>
      </div>
    `;

    this.elements.card.innerHTML = html;
    this.elements.card.style.background = "";
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

    this.elements.card.innerHTML = html;
    this.elements.card.style.background = "";
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

    this.elements.card.innerHTML = html;
    this.elements.card.style.background = "";
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
    } else if (this.modo === "pergunta") {
      this.sortearPergunta();
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

    // Dicas dos impostores: CADA IMPOSTOR RECEBE UMA DICA DIFERENTE E INDIVIDUAL!
    this.dicasI = [];
    const usedHintsThisRound = [];
    let impIndex = 0;
    const sortWords = this.shuffle(sorteadas.slice());
    this.cartas.forEach((c, idx) => {
      if (c === "IMPOSTOR") {
        const wordKey = (this.modo === "impostor") ? sorteadas[0] : sortWords[impIndex % sortWords.length];
        const uniqueHint = getHintForWord(wordKey, this.hintType, impIndex, usedHintsThisRound);
        this.dicasI[idx] = uniqueHint;
        usedHintsThisRound.push(uniqueHint);
        impIndex++;
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

  sortearPergunta() {
    const questions = typeof getPerguntasInvertidas === "function" ? getPerguntasInvertidas() : (typeof PERGUNTAS_INVERTIDAS !== "undefined" ? PERGUNTAS_INVERTIDAS : []);
    const players = this.getPlayers();
    const N = players.length;
    const nI = this.getOtherImpCount();

    let livres = questions.filter((q, idx) => this.usadosP.indexOf(idx) < 0);
    if (!livres.length) {
      this.usadosP = [];
      livres = questions.slice();
    }

    const escolhida = livres[this.randomInt(livres.length)];
    const qIdx = questions.indexOf(escolhida);
    this.usadosP.push(qIdx);
    this.perguntaAtual = escolhida;
    this.perguntaEtapa = "cartas";

    let cand = players.filter(x => x !== this.ultInicia);
    if (!cand.length) cand = players.slice();
    this.inicia = cand[this.randomInt(cand.length)];
    this.ultInicia = this.inicia;

    let indices = [];
    for (let i = 0; i < N; i++) indices.push(i);
    let shuffledIndices = this.shuffle(indices);
    for (let attempt = 0; attempt < 20; attempt++) {
      const imps = shuffledIndices.slice(0, nI).map(k => players[k]);
      if (!imps.some(p => this.ultImp.indexOf(p) >= 0)) break;
      shuffledIndices = this.shuffle(indices);
    }
    const impIndices = shuffledIndices.slice(0, nI);
    this.ultImp = impIndices.map(k => players[k]);

    this.cartas = [];
    players.forEach((p, idx) => {
      const isImp = impIndices.indexOf(idx) >= 0;
      this.cartas.push({
        isImp: isImp,
        pergunta: isImp ? escolhida.impostor : escolhida.pergunta,
        jogador: p
      });
    });

    this.respostasPergunta = {};
    this.dicasI = [];
    this.indiceAtual = 0;
    this.visivel = false;
    this.visto = false;
    this.showScreen("jogo");
  },

  escapeHtml(str) {
    if (!str) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  },

  salvarRespostaAtual() {
    const inp = document.getElementById("input-resposta-pergunta");
    if (inp) {
      const players = this.getPlayers();
      const jogador = players[this.indiceAtual];
      if (jogador) {
        if (!this.respostasPergunta) this.respostasPergunta = {};
        this.respostasPergunta[jogador] = inp.value.trim();
      }
    }
  },

  // Sorteio Online (distribuição privada entre os celulares)
  iniciarPartidaOnline() {
    if (this.modo === "pergunta") {
      const questions = typeof getPerguntasInvertidas === "function" ? getPerguntasInvertidas() : (typeof PERGUNTAS_INVERTIDAS !== "undefined" ? PERGUNTAS_INVERTIDAS : []);
      const players = HubOnline.players;
      const N = players.length;
      const nimp = this.getOtherImpCount();

      let livres = questions.filter((q, idx) => this.usadosP.indexOf(idx) < 0);
      if (!livres.length) {
        this.usadosP = [];
        livres = questions.slice();
      }
      const escolhida = livres[this.randomInt(livres.length)];
      const qIdx = questions.indexOf(escolhida);
      this.usadosP.push(qIdx);
      this.perguntaAtual = escolhida;

      let cand = players.map(p => p.name);
      const starts = cand[this.randomInt(cand.length)];

      let indices = [];
      for (let i = 0; i < N; i++) indices.push(i);
      let shuffledIndices = this.shuffle(indices);
      const impIndices = shuffledIndices.slice(0, nimp);
      this.ultImp = impIndices.map(k => players[k].name);

      const assignedMap = {};
      const tableResults = [];

      players.forEach((p, idx) => {
        const isImp = impIndices.indexOf(idx) >= 0;
        const pPergunta = isImp ? escolhida.impostor : escolhida.pergunta;
        assignedMap[p.id] = {
          card: pPergunta,
          hint: null,
          isImp: isImp,
          isPerguntaMode: true,
          perguntaReal: escolhida.pergunta,
          perguntaImpostor: escolhida.impostor
        };
        tableResults.push({
          name: p.name,
          card: isImp ? `IMPOSTOR (${pPergunta})` : `OFICIAL (${pPergunta})`,
          isImp: isImp
        });
      });

      HubOnline.hostDistributeCards(assignedMap, starts, "Pergunta & Resposta", tableResults);
      this.visivel = false;
      this.showScreen("online_jogo_client");
      return;
    }

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

    let impIndexOnline = 0;
    const usedHintsOnline = [];
    players.forEach((p, idx) => {
      const card = shuffledCards[idx];
      let hint = null;
      if (card === "IMPOSTOR" && this.usaDica) {
        hint = getHintForWord(sorteadas[0], this.hintType, impIndexOnline, usedHintsOnline);
        usedHintsOnline.push(hint);
        impIndexOnline++;
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

    // MODO PERGUNTA & RESPOSTA (INVERTIDO / IMPOSTOR)
    if (this.modo === "pergunta") {
      // Quando todos os jogadores já viram a tela
      if (this.indiceAtual >= players.length) {
        card.style.background = "";
        mainBtn.style.display = "none";
        proxBtn.style.display = "none";

        // Etapa 2: Pergunta oficial revelada na tela (antes de revelar quem é o impostor)
        if (this.perguntaEtapa === "pergunta_revelada") {
          this.elements.subText.textContent = "Debatam quem respondeu uma pergunta diferente!";
          card.innerHTML = `
            <div class="who-badge" style="background: var(--o); color: #fff;">📢 Pergunta Oficial da Rodada</div>
            <div class="pergunta-box oficial-highlight">
              "${this.perguntaAtual.pergunta}"
            </div>

            <div style="margin: 12px 0 6px; text-align: left;">
              <div style="font-size: 0.84rem; font-weight: 800; color: var(--mut); text-transform: uppercase; margin-bottom: 6px;">
                📝 Respostas dos Jogadores:
              </div>
              <div class="pergunta-respostas-list">
                ${players.map(p => {
                  const resp = (this.respostasPergunta && this.respostasPergunta[p]) ? this.escapeHtml(this.respostasPergunta[p]) : '<i style="color:var(--mut); font-weight:normal;">(não digitou)</i>';
                  return `
                    <div class="pergunta-resposta-item">
                      <span class="resp-autor">👤 <b>${p}</b>:</span>
                      <span class="resp-balao">"${resp}"</span>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>

            <div class="pergunta-debate-box">
              <p style="font-size: 1.05rem; font-weight: 800; margin-bottom: 6px; color: var(--ink);">🕵️ Quem é o Impostor?</p>
              <p style="font-size: 0.92rem; color: var(--mut); line-height: 1.45; margin: 0;">
                Essa foi a pergunta que a maioria respondeu!<br>
                Olhem as respostas digitadas acima: <b>quem respondeu algo suspeito ou que não faz sentido?</b><br>
                <b>Debatam e acusem o suspeito antes de revelar!</b>
              </p>
            </div>
            <button class="btn-confirm" data-action="pergunta-revelar-impostor" style="margin-top: 10px; width: 100%; background: var(--bad); color: #fff;">
              🎭 Revelar quem era o Impostor ➔
            </button>
          `;
          return;
        }

        // Etapa 3: Resultado e revelação do impostor
        if (this.perguntaEtapa === "resultado") {
          this.mostrarTabelaRevelacao();
          return;
        }

        // Etapa 1: Fase de ver as respostas digitadas
        this.elements.subText.textContent = "Vejam as respostas registradas de cada um!";
        card.innerHTML = `
          <div class="who-badge" style="background: var(--o); color: #fff;">📝 Respostas Registradas</div>
          <div class="who success-title" style="margin: 8px 0 4px;">Todos já responderam!</div>
          <p style="font-size: 0.92rem; color: var(--mut); margin: 0 0 10px;">
            Confira abaixo as respostas que cada jogador digitou:
          </p>
          <div class="pergunta-respostas-list">
            ${players.map(p => {
              const resp = (this.respostasPergunta && this.respostasPergunta[p]) ? this.escapeHtml(this.respostasPergunta[p]) : '<i style="color:var(--mut); font-weight:normal;">(não digitou)</i>';
              return `
                <div class="pergunta-resposta-item">
                  <span class="resp-autor">👤 <b>${p}</b>:</span>
                  <span class="resp-balao">"${resp}"</span>
                </div>
              `;
            }).join('')}
          </div>
          <div class="pergunta-phase-box" style="margin-top: 10px;">
            <div style="color: var(--mut); font-size: 0.85rem; font-weight: 700;">QUEM COMEÇA COMENTANDO/JUSTIFICANDO:</div>
            <div class="word starter-word" style="font-size: 1.45rem; margin: 4px 0 8px;">${this.inicia}</div>
            <p style="font-size: 0.9rem; line-height: 1.4; margin: 0;">
              👀 Leiam as respostas na tela! Quando todos tiverem visto,<br>
              toquem abaixo para mostrar a <b>Pergunta Oficial</b> e descobrir quem se entregou!
            </p>
          </div>
          <button class="btn-confirm" data-action="pergunta-mostrar-oficial" style="margin-top: 14px; width: 100%;">
            📢 Revelar Pergunta Oficial da Rodada ➔
          </button>
        `;
        return;
      }

      // Passa celular: cada um vê sua pergunta secreta
      mainBtn.style.display = "block";
      proxBtn.style.display = "block";
      proxBtn.disabled = !this.visto;
      proxBtn.style.opacity = this.visto ? "1" : "0.4";

      const jogadorNome = players[this.indiceAtual];
      const cObj = this.cartas[this.indiceAtual];

      if (!this.visivel) {
        card.style.background = "";
        card.innerHTML = `
          <div class="who-badge" style="background: var(--o); color: #fff;">❓ Pergunta Secreta</div>
          <div class="who" style="margin: 8px 0 6px;">${jogadorNome}</div>
          <p style="margin: 8px 0 0">
            ${this.visto ? 'Pronto! Agora passe para a próxima pessoa.' : 'Só você deve olhar a tela agora.'}
          </p>
        `;
        mainBtn.textContent = `Ver pergunta de ${jogadorNome}`;
      } else {
        card.style.background = ""; // Fundo neutro sem entregar nada visualmente!
        const respSalva = (this.respostasPergunta && this.respostasPergunta[jogadorNome]) ? this.escapeHtml(this.respostasPergunta[jogadorNome]) : "";
        card.innerHTML = `
          <div class="who-badge" style="background: var(--o); color: #fff;">❓ Sua Pergunta Secreta</div>
          <div class="who" style="margin: 6px 0 10px;">${jogadorNome}</div>
          <div class="pergunta-box">${cObj.pergunta}</div>

          <div class="pergunta-input-wrap">
            <label for="input-resposta-pergunta" class="pergunta-input-label">
              ✍️ Digite sua resposta secreta:
            </label>
            <div class="pergunta-input-row">
              <input type="text" id="input-resposta-pergunta" class="pergunta-input-field"
                     placeholder="Digite aqui sua resposta..."
                     value="${respSalva}"
                     maxlength="80" autocomplete="off" />
            </div>
            <small class="pergunta-input-sub">
              🔒 Digite e toque em <b>Esconder pergunta</b> para passar o celular!
            </small>
          </div>

          <p class="pergunta-dica">
            🧠 <b>Pense bem e digite sua resposta.</b> Não fale nada agora! Todas as respostas serão exibidas juntas na tela no momento do debate.
          </p>
        `;
        mainBtn.textContent = "Esconder pergunta";
      }
      return;
    }

    // Todos viram
    if (this.indiceAtual >= players.length) {
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
        <div class="who success-title">Todos já viram!</div>
        <p style="margin: 8px 0 14px">${instrucao}</p>
        <div style="color: var(--mut); font-size: 0.9rem">Quem começa:</div>
        <div class="word starter-word">${this.inicia}</div>
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
        <div class="word ${isImp ? 'imp' : ''}">${this.cartas[this.indiceAtual]}</div>
        ${extraDicaHtml}
      `;
      mainBtn.textContent = "Esconder palavra";
    }
  },

  // ================= REVELAR RESULTADOS OFFLINE ================= //
  mostrarTabelaRevelacao() {
    const card = this.elements.card;
    card.style.background = "";

    if (this.modo === "pergunta") {
      const players = this.getPlayers();
      card.innerHTML = `
        <div class="who success-title" style="margin-bottom: 8px;">🎭 Revelação Final!</div>
        <div class="impostor-badge-reveal">
          🕵️ O Impostor era: <b>${this.ultImp.join(' e ')}</b>
        </div>
        <div style="margin: 10px 0; text-align: left; background: #fff; padding: 12px; border-radius: 10px; border: 2px solid var(--ink); box-shadow: 3px 3px 0 var(--ink);">
          <div style="color: var(--bad); font-size: 0.8rem; font-weight: 800; text-transform: uppercase;">Pergunta que o Infiltrado respondeu:</div>
          <div style="font-weight: 700; font-size: 1.05rem; margin: 4px 0 12px; color: var(--ink);">"${this.perguntaAtual.impostor}"</div>
          <div style="color: #27ae60; font-size: 0.8rem; font-weight: 800; text-transform: uppercase;">Pergunta que a Maioria respondeu:</div>
          <div style="font-weight: 700; font-size: 1.05rem; margin-top: 4px; color: var(--ink);">"${this.perguntaAtual.pergunta}"</div>
        </div>

        <div style="margin: 12px 0 8px; text-align: left;">
          <div style="font-size: 0.84rem; font-weight: 800; color: var(--mut); text-transform: uppercase; margin-bottom: 6px;">
            📝 Respostas Dadas:
          </div>
          <div class="pergunta-respostas-list">
            ${players.map(p => {
              const isImp = this.ultImp.indexOf(p) >= 0;
              const resp = (this.respostasPergunta && this.respostasPergunta[p]) ? this.escapeHtml(this.respostasPergunta[p]) : '<i style="color:var(--mut); font-weight:normal;">(não digitou)</i>';
              return `
                <div class="pergunta-resposta-item ${isImp ? 'is-impostor' : ''}">
                  <span class="resp-autor">${isImp ? '🕵️' : '👤'} <b>${p}</b> ${isImp ? '<b style="color:var(--bad)">(Infiltrado)</b>' : ''}:</span>
                  <span class="resp-balao ${isImp ? 'balao-impostor' : ''}">"${resp}"</span>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <div class="grid" style="grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 14px;">
          <button class="btn-confirm" data-action="pergunta-jogar-novamente">🎲 Nova Pergunta</button>
          <button class="sec" data-action="nav-modo">🔄 Trocar Modo</button>
        </div>
      `;
      this.elements.proxBtn.style.display = "none";
      this.elements.mainBtn.style.display = "none";
      this.elements.againBtn.style.display = "none";
      this.elements.trocarBtn.style.display = "none";
      this.elements.revelarBtn.style.display = "none";
      return;
    }

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
      if (this.modo === "pergunta" && this.visivel) {
        this.salvarRespostaAtual();
      }
      if (!this.visivel) {
        this.visivel = true;
      } else {
        this.visivel = false;
        this.visto = true;
      }
      this.renderJogo();
    });

    this.elements.proxBtn.addEventListener("click", () => {
      if (!this.visto || this.visivel) return;
      if (this.modo === "pergunta") {
        this.salvarRespostaAtual();
      }
      this.indiceAtual++;
      this.visto = false;
      this.visivel = false;
      this.renderJogo();
    });

    this.elements.againBtn.addEventListener("click", () => {
      if (this.tema) this.iniciarPartida(this.tema);
    });

    this.elements.trocarBtn.addEventListener("click", () => {
      this.showScreen("temas");
    });

    this.elements.revelarBtn.addEventListener("click", () => {
      this.mostrarTabelaRevelacao();
      this.elements.revelarBtn.style.display = "none";
    });

    // Captura digitação em tempo real e tecla Enter nos inputs de resposta
    this.elements.card.addEventListener("input", (e) => {
      if (e.target && e.target.id === "input-resposta-pergunta") {
        const players = this.getPlayers();
        const jogador = players[this.indiceAtual];
        if (jogador) {
          if (!this.respostasPergunta) this.respostasPergunta = {};
          this.respostasPergunta[jogador] = e.target.value;
        }
      }
    });

    this.elements.card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && e.target && e.target.id === "input-resposta-pergunta") {
        e.preventDefault();
        this.salvarRespostaAtual();
        this.elements.mainBtn.click();
      } else if (e.key === "Enter" && e.target && e.target.id === "input-online-resposta") {
        e.preventDefault();
        const val = e.target.value.trim();
        HubOnline.submitAnswer(val);
        this.renderOnlineJogoClient();
      }
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
          const modos = ["duplas", "impostor", "mimica", "pergunta"];
          const nextModo = modos[(modos.indexOf(this.modo) + 1) % modos.length];
          this.modo = nextModo;
          this.renderOnlineLobby();
          break;

        case "online-pergunta-mostrar-oficial":
          const qText = this.perguntaAtual ? this.perguntaAtual.pergunta : HubOnline.perguntaReal;
          HubOnline.hostShowOfficialQuestion(qText);
          this.renderOnlineJogoClient();
          break;

        case "online-submit-answer":
          const inpOnline = document.getElementById("input-online-resposta");
          if (inpOnline) {
            HubOnline.submitAnswer(inpOnline.value);
            this.renderOnlineJogoClient();
          }
          break;

        case "salvar-resposta-pergunta":
          this.salvarRespostaAtual();
          this.elements.mainBtn.click();
          break;

        case "pergunta-mostrar-oficial":
          this.perguntaEtapa = "pergunta_revelada";
          this.renderJogo();
          break;

        case "pergunta-revelar-impostor":
          this.perguntaEtapa = "resultado";
          this.renderJogo();
          break;

        case "pergunta-jogar-novamente":
          this.sortearPergunta();
          break;

        case "online-host-choose-theme":
          if (this.modo === "pergunta") {
            this.iniciarPartida("Perguntas");
          } else {
            this.showScreen("temas");
          }
          break;

        case "online-toggle-word":
          this.visivel = !this.visivel;
          this.renderOnlineJogoClient();
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
          const pListConf = this.getPlayers();
          const minPConf = this.modo === "duplas" ? 6 : 3;
          if (pListConf.length < minPConf) {
            alert(`O modo ${this.modo === "pergunta" ? "PERGUNTA & RESPOSTA" : this.modo.toUpperCase()} precisa de pelo menos ${minPConf} jogadores!`);
            return;
          }
          if (this.modo === "pergunta") {
            this.iniciarPartida("Perguntas");
          } else {
            this.showScreen("temas");
          }
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

function startHubGame() {
  try {
    HubGame.init();
  } catch (err) {
    console.error("Erro ao inicializar HubGame:", err);
    try {
      HubGame.cacheElements();
      HubGame.renderInicio();
    } catch (e) {}
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", startHubGame);
} else {
  startHubGame();
}
