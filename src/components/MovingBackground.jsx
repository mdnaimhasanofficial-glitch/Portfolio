import { useEffect, useRef, useState } from "react";

/**
 * Futuristic ambient layer:
 * 1. A lightweight canvas particle field (grid-drifting neon nodes that
 *    react to the cursor) — single rAF loop, pauses when the tab is hidden,
 *    respects prefers-reduced-motion, and downgrades gracefully.
 * 2. A mouse-following radial glow (existing behavior, kept).
 * 3. A faint futuristic grid backdrop.
 */
const PARTICLE_DENSITY = 26000; // px² per particle (≈ 90 on a 1080p desktop)

const MovingBackground = () => {
  const canvasRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 });

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    let animationFrameId;

    const handleMouseMove = (e) => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        setMousePos({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // ---- Canvas particle field ----------------------------------------
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const ctx = canvas.getContext("2d");
    let particles = [];
    let rafId = 0;
    let width = 0;
    let height = 0;
    let dpr = 1;
    const mouse = { x: -1000, y: -1000 };

    const createParticles = () => {
      const count = Math.min(
        110,
        Math.max(24, Math.round((width * height) / PARTICLE_DENSITY))
      );
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        r: Math.random() * 1.6 + 0.6,
        hue: Math.random() > 0.5 ? "34,211,238" : "139,92,246",
      }));
    };

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      createParticles();
    };

    const onMouse = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const tick = () => {
      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        // Gentle cursor repulsion — only for near particles, cheap check
        const dxm = p.x - mouse.x;
        const dym = p.y - mouse.y;
        if (Math.abs(dxm) < 110 && Math.abs(dym) < 110) {
          const d2 = dxm * dxm + dym * dym;
          if (d2 < 110 * 110 && d2 > 0.01) {
            const f = (110 - Math.sqrt(d2)) / 110;
            p.x += (dxm / Math.sqrt(d2)) * f * 2.2;
            p.y += (dym / Math.sqrt(d2)) * f * 2.2;
          }
        }

        // Wrap-around edges
        if (p.x < -4) p.x = width + 4;
        if (p.x > width + 4) p.x = -4;
        if (p.y < -4) p.y = height + 4;
        if (p.y > height + 4) p.y = -4;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.hue},0.5)`;
        ctx.fill();
      }

      if (!document.hidden) rafId = requestAnimationFrame(tick);
    };

    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(rafId);
      } else {
        rafId = requestAnimationFrame(tick);
      }
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouse, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);
    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouse);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Faint futuristic grid */}
      <div className="bg-grid absolute inset-0 opacity-60" />

      {/* Interactive mouse spotlight glow */}
      <div
        className="absolute h-[560px] w-[560px] rounded-full opacity-25 blur-[130px] transition-transform duration-300 ease-out"
        style={{
          background:
            "radial-gradient(circle, rgba(34, 211, 238, 0.35) 0%, rgba(139, 92, 246, 0.14) 50%, transparent 72%)",
          transform: `translate(${mousePos.x - 280}px, ${mousePos.y - 280}px)`,
        }}
      />

      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  );
};

export default MovingBackground;
