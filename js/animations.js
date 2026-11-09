/**
 * HUB DE JOGOS - MÓDULO DE ANIMAÇÕES OTIMIZADO
 * Removidas rotações 3D demoradas, sons sintéticos estridentes e confetes pesados.
 * Renderização 100% instantânea para a melhor experiência do jogador.
 */

const GameAnimations = {
  flipping: false,

  // Renderização direta e imediata sem travas nem rotações 3D lentas
  flipCard(cardElement, updateContentFn) {
    if (typeof updateContentFn === "function") {
      updateContentFn();
    }
  },

  // Sons desativados para evitar bipes sintéticos incômodos no celular
  playSound() {
    // Silencioso por padrão
  },

  // Vibração sutil (apenas se suportado no celular e se desejado)
  vibrate(pattern = [30]) {
    if ("vibrate" in navigator) {
      try {
        navigator.vibrate(pattern);
      } catch (e) {}
    }
  },

  // Confetes desativados para manter a tela limpa e rápida
  launchConfetti() {
    // Sem efeito de confete pesado
  }
};
