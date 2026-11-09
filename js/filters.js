/**
 * HUB DE JOGOS - MÓDULO DE FILTROS UNIVERSAL
 * Permite filtrar subcategorias em TODOS os temas do jogo.
 * Salva automaticamente as preferências no localStorage.
 */

const GameFilters = {
  // Estado dos filtros: { [themeName]: { [subKey]: boolean } }
  filtersState: {},

  init() {
    // 1. Inicializa todas as subcategorias de todos os temas como true por padrão
    Object.keys(THEME_DATABASE).forEach(themeName => {
      this.filtersState[themeName] = {};
      const subs = THEME_DATABASE[themeName].subcategories;
      Object.keys(subs).forEach(subKey => {
        this.filtersState[themeName][subKey] = true;
      });
    });

    // 2. Carrega configurações salvas do localStorage
    try {
      const saved = localStorage.getItem("hub_game_all_filters");
      if (saved) {
        const parsed = JSON.parse(saved);
        Object.keys(parsed).forEach(tName => {
          if (this.filtersState[tName] && parsed[tName]) {
            Object.keys(parsed[tName]).forEach(subKey => {
              if (this.filtersState[tName].hasOwnProperty(subKey)) {
                this.filtersState[tName][subKey] = Boolean(parsed[tName][subKey]);
              }
            });
            // Se nenhuma subcategoria válida ficou ativa, reativa todas por segurança
            const hasActive = Object.values(this.filtersState[tName]).some(Boolean);
            if (!hasActive) {
              this.selectAll(tName);
            }
          }
        });
      }
    } catch (e) {
      console.warn("Não foi possível carregar os filtros salvos:", e);
    }
  },

  save() {
    try {
      localStorage.setItem("hub_game_all_filters", JSON.stringify(this.filtersState));
    } catch (e) {
      console.warn("Não foi possível salvar os filtros:", e);
    }
  },

  // Alterna o status de uma subcategoria
  toggleFilter(themeName, subKey) {
    if (!this.filtersState[themeName] || !this.filtersState[themeName].hasOwnProperty(subKey)) {
      return false;
    }

    const currentThemeFilters = this.filtersState[themeName];
    const activeCount = Object.values(currentThemeFilters).filter(Boolean).length;

    // Impede desmarcar a última subcategoria ativa do tema
    if (activeCount === 1 && currentThemeFilters[subKey]) {
      return false;
    }

    currentThemeFilters[subKey] = !currentThemeFilters[subKey];
    this.save();
    return true;
  },

  // Seleciona todas as subcategorias de um tema
  selectAll(themeName) {
    if (this.filtersState[themeName]) {
      Object.keys(this.filtersState[themeName]).forEach(subKey => {
        this.filtersState[themeName][subKey] = true;
      });
      this.save();
    }
  },

  // Verifica se uma subcategoria está ativa
  isSubActive(themeName, subKey) {
    if (this.filtersState[themeName] && this.filtersState[themeName].hasOwnProperty(subKey)) {
      return this.filtersState[themeName][subKey];
    }
    return true;
  },

  // Retorna as palavras ativas de um tema conforme os filtros selecionados
  getWordsForTheme(themeName) {
    if (themeName === "Misto") {
      let mixedPool = [];
      Object.keys(THEME_DATABASE).forEach(tName => {
        mixedPool = mixedPool.concat(this.getWordsForTheme(tName));
      });
      return mixedPool;
    }

    const themeObj = THEME_DATABASE[themeName];
    if (!themeObj) return [];

    const currentFilters = this.filtersState[themeName] || {};
    return themeObj.items
      .filter(it => currentFilters[it.sub] !== false)
      .map(it => it.name);
  },

  // Retorna os pares de mímica válidos considerando as palavras ativas
  getPairsForTheme(themeName) {
    const validWords = new Set(this.getWordsForTheme(themeName));
    const rawPairs = PARES[themeName] || [];

    if (themeName === "Misto") {
      let allPairs = [];
      Object.keys(PARES).forEach(t => {
        allPairs = allPairs.concat(PARES[t]);
      });
      return allPairs.filter(pair => {
        const parts = pair.split("|");
        return validWords.has(parts[0]) && validWords.has(parts[1]);
      });
    }

    return rawPairs.filter(pair => {
      const parts = pair.split("|");
      return validWords.has(parts[0]) && validWords.has(parts[1]);
    });
  },

  // Retorna a contagem de palavras ativas para um tema
  getActiveWordsCount(themeName) {
    return this.getWordsForTheme(themeName).length;
  },

  // Retorna as subcategorias de um tema
  getSubcategories(themeName) {
    if (THEME_DATABASE[themeName]) {
      return THEME_DATABASE[themeName].subcategories;
    }
    return {};
  }
};

// Inicializa automaticamente
GameFilters.init();
