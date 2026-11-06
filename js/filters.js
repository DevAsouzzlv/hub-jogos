/**
 * HUB DE JOGOS - MÓDULO DE FILTROS
 * Permite filtrar subcategorias (ex: Marvel, DC, Animes em Super-heróis)
 */

const GameFilters = {
  // Configuração padrão dos filtros de heróis
  heroes: {
    marvel: true,
    dc: true,
    anime: true,
    outros: true
  },

  // Inicializa filtros a partir do localStorage
  init() {
    try {
      const saved = localStorage.getItem("hub_game_heroes_filter");
      if (saved) {
        this.heroes = Object.assign(this.heroes, JSON.parse(saved));
      }
    } catch (e) {
      console.warn("Não foi possível carregar filtros salvos:", e);
    }
  },

  // Salva no localStorage
  save() {
    try {
      localStorage.setItem("hub_game_heroes_filter", JSON.stringify(this.heroes));
    } catch (e) {
      console.warn("Não foi possível salvar filtros:", e);
    }
  },

  // Alterna um filtro específico
  toggleHeroFilter(universe) {
    if (this.heroes.hasOwnProperty(universe)) {
      // Impede desmarcar todos (deve haver pelo menos 1 selecionado)
      const activeCount = Object.values(this.heroes).filter(Boolean).length;
      if (activeCount === 1 && this.heroes[universe]) {
        return false; // Não deixa desmarcar o último
      }
      this.heroes[universe] = !this.heroes[universe];
      this.save();
      return true;
    }
    return false;
  },

  // Seleciona todos os universos
  selectAllHeroes() {
    Object.keys(this.heroes).forEach(u => this.heroes[u] = true);
    this.save();
  },

  // Retorna a lista de heróis filtrada
  getFilteredHeroes() {
    return HEROES_DATABASE.filter(h => this.heroes[h.universe]).map(h => h.name);
  },

  // Retorna pares de mímica filtrados para super-heróis
  getFilteredHeroPairs() {
    const validNames = new Set(this.getFilteredHeroes());
    const rawPairs = PARES["Super-herói"] || [];
    return rawPairs.filter(pair => {
      const parts = pair.split("|");
      return validNames.has(parts[0]) && validNames.has(parts[1]);
    });
  },

  // Retorna as palavras para qualquer tema considerando filtros ativos
  getWordsForTheme(themeName) {
    if (themeName === "Super-herói") {
      return this.getFilteredHeroes();
    }
    if (themeName === "Misto") {
      let pool = [];
      Object.keys(TEMAS).forEach(t => {
        if (t === "Super-herói") {
          pool = pool.concat(this.getFilteredHeroes());
        } else {
          pool = pool.concat(TEMAS[t]);
        }
      });
      return pool;
    }
    return TEMAS[themeName] || [];
  },

  // Retorna pares para qualquer tema considerando filtros
  getPairsForTheme(themeName) {
    if (themeName === "Super-herói") {
      return this.getFilteredHeroPairs();
    }
    if (themeName === "Misto") {
      let allPairs = [];
      Object.keys(PARES).forEach(t => {
        if (t === "Super-herói") {
          allPairs = allPairs.concat(this.getFilteredHeroPairs());
        } else {
          allPairs = allPairs.concat(PARES[t]);
        }
      });
      return allPairs;
    }
    return PARES[themeName] || [];
  }
};

GameFilters.init();
