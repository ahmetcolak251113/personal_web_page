/**
 * graph-bg.js
 * Ambient "knowledge graph" background: floating nodes drift slowly,
 * connect with lines when close, and gently react to the pointer —
 * an homage to graph theory / neural nets, tuned for a calm, Apple-like feel.
 */
(function () {
  const canvas = document.getElementById("graph-bg");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width, height, dpr;
  let nodes = [];
  let mouse = { x: null, y: null, active: false };

  const COLORS = {
    node: "rgba(140, 170, 220, 0.9)",
    nodeCore: "rgba(34, 211, 238, 1)",
    line: (alpha) => `rgba(80, 140, 220, ${alpha})`,
  };

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    initNodes();
  }

  function initNodes() {
    const area = width * height;
    const density = 1 / 22000; // nodes per px^2
    const count = Math.max(28, Math.min(110, Math.round(area * density)));
    nodes = new Array(count).fill(null).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.18,
      r: 1.1 + Math.random() * 1.6,
      pulse: Math.random() * Math.PI * 2,
    }));
  }

  function step() {
    ctx.clearRect(0, 0, width, height);

    const linkDist = Math.min(160, width * 0.14);

    // update positions
    for (const n of nodes) {
      if (!reducedMotion) {
        n.x += n.vx;
        n.y += n.vy;
        n.pulse += 0.015;

        if (mouse.active) {
          const dx = n.x - mouse.x;
          const dy = n.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const radius = 180;
          if (dist < radius && dist > 0.001) {
            const force = ((radius - dist) / radius) * 0.045;
            n.x += (dx / dist) * force;
            n.y += (dy / dist) * force;
          }
        }
      }

      if (n.x < -20) n.x = width + 20;
      if (n.x > width + 20) n.x = -20;
      if (n.y < -20) n.y = height + 20;
      if (n.y > height + 20) n.y = -20;
    }

    // draw edges
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i], b = nodes[j];
        const dx = a.x - b.x, dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < linkDist) {
          const alpha = (1 - dist / linkDist) * 0.22;
          ctx.strokeStyle = COLORS.line(alpha);
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    // draw nodes
    for (const n of nodes) {
      const glow = 0.5 + Math.sin(n.pulse) * 0.5;
      ctx.beginPath();
      ctx.fillStyle = COLORS.node;
      ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
      ctx.fill();

      ctx.beginPath();
      ctx.fillStyle = `rgba(34, 211, 238, ${0.35 + glow * 0.3})`;
      ctx.arc(n.x, n.y, n.r * 2.4, 0, Math.PI * 2);
      ctx.fill();
    }

    requestAnimationFrame(step);
  }

  window.addEventListener("resize", resize, { passive: true });
  window.addEventListener("pointermove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    mouse.active = true;
  }, { passive: true });
  window.addEventListener("pointerleave", () => { mouse.active = false; });

  resize();
  requestAnimationFrame(step);
})();
