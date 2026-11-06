/**
 * HUB DE JOGOS - MÓDULO DE ANIMAÇÕES E EFEITOS
 * Flip 3D, Confetes com Canvas nativo, Feedback sonoro (Web Audio API)
 */

const GameAnimations = {
  flipping: false,
  audioCtx: null,

  // Inicializa contexto de áudio de forma segura
  getAudio() {
    if (!this.audioCtx && (window.AudioContext || window.webkitAudioContext)) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioCtx();
    }
    if (this.audioCtx && this.audioCtx.state === "suspended") {
      this.audioCtx.resume();
    }
    return this.audioCtx;
  },

  // Toca efeito sonoro sintetizado simples
  playSound(type) {
    try {
      const ctx = this.getAudio();
      if (!ctx) return;

      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      if (type === "card-flip") {
        osc.type = "sine";
        osc.frequency.setValueAtTime(320, now);
        osc.frequency.exponentialRampToValueAtTime(640, now + 0.1);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
        osc.start(now);
        osc.stop(now + 0.12);
      } else if (type === "reveal-success") {
        // Acorde alegre de vitória
        [523.25, 659.25, 783.99, 1046.5].forEach((freq, idx) => {
          const o = ctx.createOscillator();
          const g = ctx.createGain();
          o.type = "triangle";
          o.frequency.setValueAtTime(freq, now + idx * 0.08);
          g.gain.setValueAtTime(0.15, now + idx * 0.08);
          g.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.4);
          o.connect(g);
          g.connect(ctx.destination);
          o.start(now + idx * 0.08);
          o.stop(now + idx * 0.08 + 0.45);
        });
      } else if (type === "impostor") {
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(220, now);
        osc.frequency.linearRampToValueAtTime(140, now + 0.25);
        gain.gain.setValueAtTime(0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
        osc.start(now);
        osc.stop(now + 0.3);
      }
    } catch (e) {
      // Ignora silenciosamente se o navegador bloquear autoplay
    }
  },

  // Efeito de vibração tátil no celular
  vibrate(pattern = [50]) {
    if ("vibrate" in navigator) {
      try {
        navigator.vibrate(pattern);
      } catch (e) {}
    }
  },

  // Flip 3D no elemento #card
  flipCard(cardElement, updateContentFn) {
    if (!cardElement) {
      updateContentFn();
      return;
    }

    if (window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches) {
      updateContentFn();
      return;
    }

    if (this.flipping) return;
    this.flipping = true;

    this.playSound("card-flip");
    this.vibrate(25);

    cardElement.style.transition = "transform 0.18s cubic-bezier(0.4, 0, 1, 1)";
    cardElement.style.transform = "perspective(800px) rotateY(90deg) scale(0.96)";

    setTimeout(() => {
      updateContentFn();
      cardElement.style.transition = "transform 0.28s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
      cardElement.style.transform = "perspective(800px) rotateY(0deg) scale(1)";

      setTimeout(() => {
        this.flipping = false;
      }, 280);
    }, 180);
  },

  // Efeito de Confetes na tela inteira
  launchConfetti() {
    let canvas = document.getElementById("confetti-canvas");
    if (!canvas) {
      canvas = document.createElement("canvas");
      canvas.id = "confetti-canvas";
      canvas.style.position = "fixed";
      canvas.style.top = "0";
      canvas.style.left = "0";
      canvas.style.width = "100%";
      canvas.style.height = "100%";
      canvas.style.pointerEvents = "none";
      canvas.style.zIndex = "9999";
      document.body.appendChild(canvas);
    }

    const ctx = canvas.getContext("2d");
    const width = (canvas.width = window.innerWidth);
    const height = (canvas.height = window.innerHeight);

    const particles = [];
    const colors = ["#FFD93D", "#FF6FA5", "#58A8FF", "#5BD98C", "#FF9F45", "#B9E769", "#C9B6FF", "#5B3DF5"];

    for (let i = 0; i < 90; i++) {
      particles.push({
        x: width / 2 + (Math.random() - 0.5) * 120,
        y: height / 2 + (Math.random() - 0.5) * 60,
        vx: (Math.random() - 0.5) * 16,
        vy: (Math.random() - 0.9) * 18,
        size: Math.random() * 8 + 6,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        vRot: (Math.random() - 0.5) * 15,
        opacity: 1
      });
    }

    this.playSound("reveal-success");

    let startTime = performance.now();
    function animate(t) {
      const elapsed = t - startTime;
      ctx.clearRect(0, 0, width, height);

      let alive = false;
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.45; // gravidade
        p.vx *= 0.98; // atrito
        p.rotation += p.vRot;
        if (elapsed > 1000) {
          p.opacity -= 0.02;
        }

        if (p.opacity > 0 && p.y < height + 50) {
          alive = true;
          ctx.save();
          ctx.globalAlpha = Math.max(0, p.opacity);
          ctx.translate(p.x, p.y);
          ctx.rotate((p.rotation * Math.PI) / 180);
          ctx.fillStyle = p.color;
          ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 1.3);
          ctx.restore();
        }
      });

      if (alive && elapsed < 3200) {
        requestAnimationFrame(animate);
      } else {
        ctx.clearRect(0, 0, width, height);
      }
    }

    requestAnimationFrame(animate);
  }
};
