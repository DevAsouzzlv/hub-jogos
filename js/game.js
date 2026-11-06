/**
 * HUB DE JOGOS - LÓGICA PRINCIPAL DO JOGO
 * Gerenciamento de estado, sorteios, modos (Duplas, Impostor, Mímica),
 * pilha de telas para Botão Voltar em todos os estágios.
 */

// Estado global do jogo
const HubGame = {
  modo: "duplas", // "duplas" | "impostor" | "mimica"
  tema: null,
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
  dica: "",
  usaDica: true,
  numImpostoresCustom: null,
  numImpostoresOutros: 1,

  // Jogadores por modo
  jogadoresDuplas: ["Arthur", "Vitor", "João Pedro", "Coro", "Bia", "Ana Vitória", "Vinícius", "Gustavo"],
  jogadoresImpostor: ["Arthur", "Vitor", "João Pedro", "Coro", "Bia"],
  jogadoresMimica: ["Arthur", "Vitor", "João Pedro", "Coro", "Bia"],

  // Dados da Mímica
  mm: {
    placar: [],
    vez: 0,
    palavra: "",
    t: 60,
    timer: null,
    usados: []
  },
  mmDif: [],
  mmPal: [],

  // Pilha de histórico de navegação para o Botão Voltar
  historyStack: [],
  currentScreen: "inicio",

  // Elementos do DOM
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
  },

  saveData() {
    try {
      localStorage.setItem("hub_nomes_duplas", JSON.stringify(this.jogadoresDuplas));
      localStorage.setItem("hub_nomes_impostor", JSON.stringify(this.jogadoresImpostor));
      localStorage.setItem("hub_nomes_mimica", JSON.stringify(this.jogadoresMimica));
    } catch (e) {}
  },

  // Retorna lista ativa de jogadores
  getPlayers() {
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

  // Cálculo de impostores no modo duplas
  getDuplasImpCount() {
    const N = this.jogadoresDuplas.length;
    const defaultImp = (N % 2 === 0) ? 2 : 1;
    let v = this.numImpostoresCustom;
    if (v == null || (v % 2) !== (N % 2) || v < defaultImp || v > N - 4) {
      v = defaultImp;
    }
    return v;
  },

  // Cálculo de impostores para modo Impostor ou Mímica
  getOtherImpCount() {
    const N = this.getPlayers().length;
    const max = Math.max(1, Math.ceil(N / 2) - 1);
    return Math.min(this.numImpostoresOutros, max);
  },

  // Random criptográfico seguro
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

    // Limpa timers ativos ao mudar de tela
    if (this.mm.timer) {
      clearInterval(this.mm.timer);
      this.mm.timer = null;
    }

    switch (screenName) {
      case "inicio":
        this.renderInicio();
        break;
      case "jogadores":
        this.renderJogadores();
        break;
      case "temas":
        this.renderTemas();
        break;
      case "filtro_herois":
        this.renderFiltroHerois();
        break;
      case "jogo":
        this.renderJogo();
        break;
      case "mimica_jogo":
        this.renderMimicaVez();
        break;
      case "mimica_placar":
        this.renderMimicaPlacar();
        break;
    }
  },

  goBack() {
    if (this.currentScreen === "jogo") {
      if (confirm("Deseja interromper a partida atual e voltar à escolha de temas?")) {
        this.showScreen("temas", true);
      }
      return;
    }

    if (this.currentScreen === "mimica_jogo" || this.currentScreen === "mimica_placar") {
      this.showScreen("temas", true);
      return;
    }

    if (this.historyStack.length > 0) {
      const prevScreen = this.historyStack.pop();
      this.showScreen(prevScreen, true);
    } else {
      this.showScreen("inicio", true);
    }
  },

  updateVoltarButtonVisibility() {
    if (!this.elements.voltarBtn) return;
    if (this.currentScreen === "inicio") {
      this.elements.voltarBtn.style.display = "none";
    } else {
      this.elements.voltarBtn.style.display = "inline-flex";
    }
  },

  hideActionButtons() {
    this.elements.mainBtn.style.display = "none";
    this.elements.proxBtn.style.display = "none";
    this.elements.revelarBtn.style.display = "none";
    this.elements.againBtn.style.display = "none";
    this.elements.trocarBtn.style.display = "none";
  },

  // ================= TELAS ================= //

  // TELA 1: Escolha do Modo
  renderInicio() {
    this.historyStack = [];
    this.elements.subText.textContent = "Escolha um modo de jogo para começar";
    this.hideActionButtons();

    const html = `
      <div class="who" style="margin-bottom: 14px">Escolha o modo de jogo</div>
      <div class="grid" style="grid-template-columns: 1fr; gap: 12px">
        <button class="modo pop-in" data-action="set-modo" data-value="duplas" style="animation-delay: 0.05s">
          <span class="em">👯</span>
          <div>
            <b>Duplas & Impostores</b>
            <small>6 a 20 jogadores · Forme pares secretos e caçe os farsantes</small>
          </div>
        </button>
        <button class="modo pop-in" data-action="set-modo" data-value="impostor" style="animation-delay: 0.12s">
          <span class="em">🕵️</span>
          <div>
            <b>Modo Impostor</b>
            <small>3 a 20 jogadores · Todos sabem a palavra, menos os espiões!</small>
          </div>
        </button>
        <button class="modo pop-in" data-action="set-modo" data-value="mimica" style="animation-delay: 0.19s">
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

  // TELA 2: Configuração de Jogadores
  renderJogadores() {
    this.elements.subText.textContent = `Configurando jogadores do modo ${this.modo.toUpperCase()}`;
    this.hideActionButtons();

    const players = this.getPlayers();
    const minPlayers = this.modo === "duplas" ? 6 : 3;

    let html = `
      <div class="who" style="margin-bottom: 12px">Quem vai jogar? (${players.length})</div>
      <div class="players-list-scroll">
    `;

    players.forEach((p, idx) => {
      html += `
        <div class="player-input-row">
          <input class="nm" maxlength="20" placeholder="Jogador ${idx + 1}" value="${p}" data-index="${idx}">
          <button class="sec btn-remove" data-action="rem-player" data-index="${idx}" title="Remover jogador">✕</button>
        </div>
      `;
    });

    html += `</div>`;

    // Configurações específicas por modo
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

    if (this.modo !== "mimica") {
      html += `
        <div class="opt">
          <span>💡 Dica para o impostor</span>
          <div class="seg">
            <button class="${this.usaDica ? 'on' : ''}" data-action="toggle-dica" data-val="1">Com Dica</button>
            <button class="${!this.usaDica ? 'on' : ''}" data-action="toggle-dica" data-val="0">Sem Dica</button>
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

  // Lê nomes digitados nos inputs
  readPlayerInputs() {
    const inputs = document.querySelectorAll(".nm");
    const updated = [];
    inputs.forEach((inp, idx) => {
      const val = inp.value.replace(/[<>&"]/g, "").trim();
      updated.push(val || `Jogador ${idx + 1}`);
    });
    this.setPlayers(updated);
  },

  // TELA 3: Escolha do Tema
  renderTemas() {
    this.elements.subText.textContent = "Escolha um tema ou abra os filtros de palavras";
    this.hideActionButtons();

    let html = `
      <div class="who" style="margin-bottom: 12px">Escolha o tema</div>
      <div class="grid theme-grid">
    `;

    Object.keys(TEMAS_CONFIG).forEach(t => {
      const cfg = TEMAS_CONFIG[t];
      const isHerois = t === "Super-herói";
      
      html += `
        <div class="theme-btn-wrapper">
          <button class="tema" data-action="select-tema" data-tema="${t}" style="border-left: 8px solid ${cfg.color};">
            <span class="theme-icon">${cfg.icon}</span>
            <span class="theme-name">${t}</span>
          </button>
          ${isHerois ? `<button class="btn-filter-shortcut" data-action="open-hero-filter" title="Filtrar universos Marvel, DC, Animes">⚙️ Filtro</button>` : ''}
        </div>
      `;
    });

    html += `
      </div>
      <div class="menu-bottom-actions">
        <button class="sec" data-action="nav-jogadores">👥 Editar jogadores (${this.getPlayers().length})</button>
        <button class="sec" data-action="nav-modo">🔄 Trocar modo (${this.modo})</button>
      </div>
    `;

    GameAnimations.flipCard(this.elements.card, () => {
      this.elements.card.innerHTML = html;
      this.elements.card.style.background = "";
    });
  },

  // TELA 4: FILTRO ESPECIAL DE SUPER-HERÓIS (Marvel, DC, Animes, Outros)
  renderFiltroHerois() {
    this.elements.subText.textContent = "Personalize quais heróis entrarão no sorteio";
    this.hideActionButtons();

    const f = GameFilters.heroes;
    const heroCount = GameFilters.getFilteredHeroes().length;

    const html = `
      <div class="who" style="margin-bottom: 6px">Filtro de Super-heróis</div>
      <p style="margin-bottom: 14px; font-size: 0.95rem;">Selecione os universos que você quer no jogo:</p>

      <div class="filter-options-box">
        <label class="filter-chip ${f.marvel ? 'active' : ''}">
          <input type="checkbox" data-universe="marvel" ${f.marvel ? 'checked' : ''}>
          <span class="chip-badge">🔴</span>
          <div class="chip-info">
            <b>Marvel</b>
            <small>Vingadores, X-Men, Homem-Aranha</small>
          </div>
        </label>

        <label class="filter-chip ${f.dc ? 'active' : ''}">
          <input type="checkbox" data-universe="dc" ${f.dc ? 'checked' : ''}>
          <span class="chip-badge">🔵</span>
          <div class="chip-info">
            <b>DC Comics</b>
            <small>Batman, Superman, Liga da Justiça</small>
          </div>
        </label>

        <label class="filter-chip ${f.anime ? 'active' : ''}">
          <input type="checkbox" data-universe="anime" ${f.anime ? 'checked' : ''}>
          <span class="chip-badge">🟢</span>
          <div class="chip-info">
            <b>Animes & Shonen</b>
            <small>Goku, Naruto, Luffy, Gojo, Saitama</small>
          </div>
        </label>

        <label class="filter-chip ${f.outros ? 'active' : ''}">
          <input type="checkbox" data-universe="outros" ${f.outros ? 'checked' : ''}>
          <span class="chip-badge">🟡</span>
          <div class="chip-info">
            <b>Clássicos & Outros</b>
            <small>Tartarugas Ninja, Ben 10, Incríveis</small>
          </div>
        </label>
      </div>

      <div class="filter-count-badge">
        🎯 <b>${heroCount}</b> heróis ativos no sorteio
      </div>

      <div class="grid" style="grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 14px">
        <button class="sec" data-action="filter-all">Marcar Todos</button>
        <button class="btn-confirm" data-action="filter-play">Jogar com Filtro ➔</button>
      </div>
    `;

    GameAnimations.flipCard(this.elements.card, () => {
      this.elements.card.innerHTML = html;
      this.elements.card.style.background = "";
    });
  },

  // ================= SORTEIO E PARTIDA ================= //

  iniciarPartida(temaEscolhido) {
    this.tema = temaEscolhido;
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

    // Quem começa (evita repetir o anterior)
    let candidatos = players.filter(p => p !== this.ultInicia);
    if (!candidatos.length) candidatos = players.slice();
    this.inicia = candidatos[this.randomInt(candidatos.length)];
    this.ultInicia = this.inicia;

    // Dica genérica de categoria
    const hintsList = HINTS[this.tema] || HINTS["Misto"];
    this.dica = hintsList[this.randomInt(hintsList.length)];

    // Monta cartas
    let arr = [];
    if (this.modo === "impostor") {
      for (let q = 0; q < N - nimp; q++) arr.push(sorteadas[0]);
    } else {
      sorteadas.forEach(w => arr.push(w, w));
    }
    for (let q2 = 0; q2 < nimp; q2++) arr.push("IMPOSTOR");

    // Embaralha e tenta evitar dar impostor para quem acabou de ser
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

    // Pistas individuais para impostores
    this.dicasI = [];
    let wi = 0;
    const sortWords = this.shuffle(sorteadas.slice());
    this.cartas.forEach((c, idx) => {
      if (c === "IMPOSTOR") {
        const wordKey = sortWords[wi % sortWords.length];
        this.dicasI[idx] = HW[wordKey] || this.dica;
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

  // RENDERIZAÇÃO DA RODADA
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

    // FIM DA VISUALIZAÇÃO: TODOS JÁ VIRAM!
    if (this.indiceAtual >= players.length) {
      GameAnimations.launchConfetti();
      card.style.background = "";
      
      let instrucao = "";
      if (this.modo === "mimica") {
        instrucao = "Façam a mímica da sua palavra, um de cada vez, e descubram quem recebeu a palavra diferente!";
      } else if (this.modo === "impostor") {
        instrucao = "Agora façam perguntas e deem pistas para descobrir quem é o impostor!";
      } else {
        instrucao = "Dêem pistas sutis para achar sua dupla sem entregar o jogo para os impostores!";
      }

      card.innerHTML = `
        <div class="who success-title">🎉 Todos já viram!</div>
        <p style="margin: 10px 0 16px; font-size: 1.05rem;">${instrucao}</p>
        <div style="color: var(--mut); font-size: 0.95rem; font-weight: 700;">QUEM COMEÇA:</div>
        <div class="word starter-word pop-in">${this.inicia}</div>
      `;

      proxBtn.style.display = "none";
      mainBtn.style.display = "none";
      againBtn.style.display = "block";
      trocarBtn.style.display = "block";
      revelarBtn.style.display = "block";
      return;
    }

    // VEZ DO JOGADOR ATUAL
    mainBtn.style.display = "block";
    proxBtn.style.display = "block";
    proxBtn.disabled = !this.visto;
    proxBtn.style.opacity = this.visto ? "1" : "0.4";

    const jogadorNome = players[this.indiceAtual];

    if (!this.visivel) {
      card.style.background = "";
      card.innerHTML = `
        <div class="who-badge">Vez de:</div>
        <div class="who" style="font-size: 1.6rem; margin: 4px 0 8px;">${jogadorNome}</div>
        <p style="margin: 8px 0 0">
          ${this.visto ? '✅ Palavra visualizada! Agora passe o celular para a próxima pessoa.' : '🔒 Apenas você deve olhar a tela!'}
        </p>
      `;
      mainBtn.textContent = `👁️ Ver palavra de ${jogadorNome}`;
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
        const hintText = this.dicasI[this.indiceAtual] || this.dica;
        extraDicaHtml = `<div class="impostor-hint-badge">💡 Dica secreta: <b>${hintText}</b></div>`;
      }

      card.innerHTML = `
        <div class="who" style="margin-bottom: 6px">${jogadorNome}</div>
        <div class="word ${isImp ? 'imp' : ''} pop-in">${this.cartas[this.indiceAtual]}</div>
        ${extraDicaHtml}
      `;
      mainBtn.textContent = "🙈 Esconder palavra";
    }
  },

  // REVELAR RESULTADOS DA RODADA
  mostrarTabelaRevelacao() {
    GameAnimations.launchConfetti();
    const card = this.elements.card;
    card.style.background = "";

    if (this.modo === "mimica") {
      card.innerHTML = `
        <div class="who" style="margin-bottom: 10px">Resultado da Mímica</div>
        <table>
          <tr><th>Impostor(es)</th><th>Palavra dele</th><th>Palavra do grupo</th></tr>
          <tr class="imp">
            <td>${this.mmDif.map(k => this.jogadoresMimica[k]).join(' e ')}</td>
            <td>${this.mmPal[1]}</td>
            <td>${this.mmPal[0]}</td>
          </tr>
        </table>
        <div class="table-actions">
          <button class="sec" data-action="restart-same">Jogar novamente</button>
          <button class="btn-confirm" data-action="back-to-themes">Trocar tema</button>
        </div>
      `;
      return;
    }

    if (this.modo === "impostor") {
      const ids = [];
      let palavraGrupo = "";
      this.cartas.forEach((c, k) => {
        if (c === "IMPOSTOR") ids.push(k);
        else if (!palavraGrupo) palavraGrupo = c;
      });

      let dicasTxt = "";
      if (this.usaDica) {
        dicasTxt = `<div class="dicas-resultado">💡 <b>Dicas do impostor:</b> ` +
          ids.map(k => `${this.jogadoresImpostor[k]}: <i>${this.dicasI[k] || this.dica}</i>`).join(' · ') +
          `</div>`;
      }

      card.innerHTML = `
        <div class="who" style="margin-bottom: 10px">Quem eram os Impostores?</div>
        <table>
          <tr><th>Impostor${ids.length > 1 ? 'es' : ''}</th><th>Palavra Secreta</th></tr>
          <tr class="imp">
            <td>${ids.map(k => this.jogadoresImpostor[k]).join(' e ')}</td>
            <td>${palavraGrupo}</td>
          </tr>
        </table>
        ${dicasTxt}
        <div class="table-actions">
          <button class="sec" data-action="restart-same">Jogar novamente</button>
          <button class="btn-confirm" data-action="back-to-themes">Trocar tema</button>
        </div>
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
        dd.push(`${pNome}: ${this.dicasI[k] || this.dica}`);
      } else {
        if (!grupos[c]) grupos[c] = [];
        grupos[c].push(pNome);
      }
    });

    let html = `
      <div class="who" style="margin-bottom: 10px">Duplas e Impostores Revelados!</div>
      <table>
        <tr><th>#</th><th>Dupla</th><th>Palavra</th></tr>
    `;

    let n = 1;
    Object.keys(grupos).forEach(w => {
      html += `<tr><td>${n}</td><td>${grupos[w].join(' e ')}</td><td><b>${w}</b></td></tr>`;
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
      html += `<div class="dicas-resultado">💡 <b>Dica(s) do impostor:</b> ${dd.join(' · ')}</div>`;
    }

    html += `
      <div class="table-actions">
        <button class="sec" data-action="restart-same">Jogar novamente</button>
        <button class="btn-confirm" data-action="back-to-themes">Trocar tema</button>
      </div>
    `;

    card.innerHTML = html;
  },

  // ================= MÍMICA CRONÔMETRO ================= //
  iniciarMimicaCronometro() {
    this.mm.placar = this.getPlayers().map(() => 0);
    this.mm.vez = 0;
    this.mm.usados = [];
    this.showScreen("mimica_jogo");
  },

  renderMimicaVez() {
    if (this.mm.timer) clearInterval(this.mm.timer);
    this.hideActionButtons();
    const jogador = this.getPlayers()[this.mm.vez];

    const html = `
      <div class="who">Vez da mímica</div>
      <div class="word" style="margin: 10px 0;">${jogador}</div>
      <p style="margin: 10px 0 16px">Apenas quem fará a mímica deve olhar a palavra agora.</p>
      <div class="grid" style="grid-template-columns: 1fr; gap: 10px;">
        <button class="btn-confirm" data-action="mm-start-word">👁️ Mostrar palavra & Iniciar (60s)</button>
        <button class="sec" data-action="mm-view-score">📊 Ver Placar</button>
      </div>
    `;

    GameAnimations.flipCard(this.elements.card, () => {
      this.elements.card.innerHTML = html;
      this.elements.card.style.background = "";
    });
  },

  sortearPalavraMimica() {
    const pool = GameFilters.getWordsForTheme(this.tema);
    let l = pool.filter(w => this.mm.usados.indexOf(w) < 0);
    if (!l.length) {
      this.mm.usados = [];
      l = pool.slice();
    }
    const w = l[this.randomInt(l.length)];
    this.mm.usados.push(w);
    this.mm.palavra = w;
  },

  iniciarTempoMimica() {
    this.sortearPalavraMimica();
    this.mm.t = 60;

    const html = `
      <div id="tempo" class="who timer-display">60s</div>
      <div id="mmw" class="word" style="margin: 12px 0;">${this.mm.palavra}</div>
      <div class="grid" style="grid-template-columns: 1fr; gap: 10px; margin-top: 16px">
        <button class="btn-confirm" data-action="mm-success">✅ Acertaram (+1 ponto)</button>
        <button class="sec" data-action="mm-pass">🔄 Pular palavra</button>
      </div>
    `;

    this.elements.card.innerHTML = html;

    clearInterval(this.mm.timer);
    this.mm.timer = setInterval(() => {
      this.mm.t--;
      const el = document.getElementById("tempo");
      if (el) {
        el.textContent = `${this.mm.t}s`;
        if (this.mm.t <= 10) el.classList.add("danger");
      }
      if (this.mm.t <= 0) {
        clearInterval(this.mm.timer);
        this.fimTempoMimica(false);
      }
    }, 1000);
  },

  fimTempoMimica(acertou) {
    clearInterval(this.mm.timer);
    if (acertou) {
      this.mm.placar[this.mm.vez]++;
      GameAnimations.launchConfetti();
    }

    const html = `
      <div class="who ${acertou ? 'success-title' : 'danger-title'}">
        ${acertou ? '🎉 Acertaram! +1 ponto' : '⏰ Tempo esgotado!'}
      </div>
      <p style="margin: 10px 0 16px; font-size: 1.1rem;">A palavra era: <b>${this.mm.palavra}</b></p>
      <div class="grid" style="grid-template-columns: 1fr; gap: 10px;">
        <button class="btn-confirm" data-action="mm-next-player">Próxima pessoa ➔</button>
        <button class="sec" data-action="mm-view-score">Ver placar</button>
      </div>
    `;

    GameAnimations.flipCard(this.elements.card, () => {
      this.elements.card.innerHTML = html;
    });
  },

  renderMimicaPlacar() {
    clearInterval(this.mm.timer);
    const players = this.getPlayers();
    const sortedIdx = players.map((_, k) => k).sort((a, b) => this.mm.placar[b] - this.mm.placar[a]);

    let html = `
      <div class="who" style="margin-bottom: 10px">🏆 Placar de Mímica</div>
      <table>
        <tr><th>#</th><th>Jogador</th><th>Pontos</th></tr>
    `;

    sortedIdx.forEach((k, pos) => {
      html += `<tr><td>${pos + 1}º</td><td>${players[k]}</td><td><b>${this.mm.placar[k]}</b></td></tr>`;
    });

    html += `
      </table>
      <div class="grid" style="grid-template-columns: 1fr; gap: 8px; margin-top: 14px;">
        <button class="btn-confirm" data-action="mm-continue">Continuar rodada</button>
        <button class="sec" data-action="back-to-themes">Trocar tema</button>
        <button class="sec" data-action="mm-reset">Zerar pontuação</button>
      </div>
    `;

    GameAnimations.flipCard(this.elements.card, () => {
      this.elements.card.innerHTML = html;
    });
  },

  // ================= EVENT HANDLERS ================= //
  bindGlobalEvents() {
    // Botão Voltar Fixo
    if (this.elements.voltarBtn) {
      this.elements.voltarBtn.addEventListener("click", () => this.goBack());
    }

    // Botão Principal (Ver/Esconder Palavra)
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

    // Próxima Pessoa
    this.elements.proxBtn.addEventListener("click", () => {
      if (GameAnimations.flipping || !this.visto || this.visivel) return;
      this.indiceAtual++;
      this.visto = false;
      this.visivel = false;
      GameAnimations.flipCard(this.elements.card, () => this.renderJogo());
    });

    // Sortear de novo
    this.elements.againBtn.addEventListener("click", () => {
      if (this.tema) this.iniciarPartida(this.tema);
    });

    // Trocar Tema
    this.elements.trocarBtn.addEventListener("click", () => {
      this.showScreen("temas");
    });

    // Revelar Duplas e Impostores
    this.elements.revelarBtn.addEventListener("click", () => {
      GameAnimations.flipCard(this.elements.card, () => {
        this.mostrarTabelaRevelacao();
        this.elements.revelarBtn.style.display = "none";
      });
    });

    // Delegação de cliques no Card
    this.elements.card.addEventListener("click", (e) => {
      const target = e.target.closest("[data-action]") || e.target;
      const action = target.getAttribute ? target.getAttribute("data-action") : null;
      if (!action) return;

      switch (action) {
        // Seleção de modo
        case "set-modo":
          this.modo = target.getAttribute("data-value");
          this.showScreen("jogadores");
          break;

        // Configuração de jogadores
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
          const N = this.jogadoresDuplas.length;
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

        case "set-other-imp":
          this.readPlayerInputs();
          this.numImpostoresOutros = parseInt(target.getAttribute("data-val"), 10);
          this.renderJogadores();
          break;

        case "confirm-players":
          this.readPlayerInputs();
          this.showScreen("temas");
          break;

        // Navegação a partir de Temas
        case "select-tema":
          const tName = target.getAttribute("data-tema");
          this.iniciarPartida(tName);
          break;

        case "open-hero-filter":
          this.showScreen("filtro_herois");
          break;

        case "nav-jogadores":
          this.showScreen("jogadores");
          break;

        case "nav-modo":
          this.showScreen("inicio");
          break;

        // Filtro de Heróis
        case "filter-all":
          GameFilters.selectAllHeroes();
          this.renderFiltroHerois();
          break;

        case "filter-play":
          this.iniciarPartida("Super-herói");
          break;

        // Ações de fim de partida / tabela
        case "restart-same":
          if (this.tema) this.iniciarPartida(this.tema);
          break;

        case "back-to-themes":
          this.showScreen("temas");
          break;

        // Ações de Mímica
        case "mm-start-word":
          this.iniciarTempoMimica();
          break;

        case "mm-pass":
          this.sortearPalavraMimica();
          const mmwEl = document.getElementById("mmw");
          if (mmwEl) mmwEl.textContent = this.mm.palavra;
          break;

        case "mm-success":
          this.fimTempoMimica(true);
          break;

        case "mm-next-player":
          this.mm.vez = (this.mm.vez + 1) % this.getPlayers().length;
          this.renderMimicaVez();
          break;

        case "mm-view-score":
          this.renderMimicaPlacar();
          break;

        case "mm-continue":
          this.renderMimicaVez();
          break;

        case "mm-reset":
          this.iniciarMimicaCronometro();
          break;
      }
    });

    // Checkbox de universos de heróis
    this.elements.card.addEventListener("change", (e) => {
      if (e.target.matches("[data-universe]")) {
        const uni = e.target.getAttribute("data-universe");
        GameFilters.toggleHeroFilter(uni);
        this.renderFiltroHerois();
      }
    });
  }
};

// Inicia quando o DOM carregar
document.addEventListener("DOMContentLoaded", () => {
  HubGame.init();
});
