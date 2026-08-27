/**
 * scroll-fx.js
 * Apple-style ambient effects:
 *  - Aurora light blobs whose hue shifts as you scroll down the page
 *  - Multi-speed parallax on the blobs for depth
 *  - Gentle hero parallax/fade-out
 * Pure vanilla JS, no dependencies. Honors prefers-reduced-motion.
 */
(function () {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const aurora = document.querySelector(".aurora");
  const hero = document.querySelector(".hero");
  if (!aurora && !hero) return;

  const blobs = aurora ? Array.from(aurora.querySelectorAll("span")) : [];
  // Different depths -> different speeds
  const SPEEDS = [-0.05, -0.11, -0.03];

  let lerpT = 0;     // smoothed scroll progress (0..1)
  let targetT = 0;

  function measure() {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    targetT = max > 0 ? Math.min(Math.max(window.scrollY / max, 0), 1) : 0;
  }

  function tick() {
    lerpT += (targetT - lerpT) * 0.07; // smooth easing toward target
    const y = window.scrollY;

    // Hue rotation: blue at top -> violet mid -> cyan lower
    aurora.style.setProperty("--hue", (lerpT * 150).toFixed(2) + "deg");

    // Parallax drift
    for (let i = 0; i < blobs.length; i++) {
      blobs[i].style.transform =
        "translate3d(0," + (y * SPEEDS[i]).toFixed(1) + "px,0)";
    }

    // Hero fades slightly and drifts up as you leave it (apple.com feel)
    if (hero) {
      const vh = window.innerHeight;
      const p = Math.min(y / (vh * 0.85), 1);
      hero.style.transform = "translateY(" + (p * 46).toFixed(1) + "px)";
      hero.style.opacity = (1 - p * 0.45).toFixed(3);
    }

    requestAnimationFrame(tick);
  }

  window.addEventListener("scroll", measure, { passive: true });
  window.addEventListener("resize", measure, { passive: true });

  // Staggered entrance for cards inside grids
  document.querySelectorAll(".grid").forEach(function (g) {
    Array.prototype.forEach.call(g.children, function (c, i) {
      c.style.transitionDelay = (i % 4) * 90 + "ms";
    });
  });

  measure();
  requestAnimationFrame(tick);
})();
