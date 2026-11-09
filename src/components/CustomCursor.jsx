import { useEffect, useRef, useState } from "react";

/**
 * Futuristic custom cursor: a precise dot with a lagging glow ring.
 * - Enabled only for fine pointers (mouse/trackpad), never on touch devices.
 * - Transform-only animation driven by a single rAF loop.
 * - Expands over interactive elements (a, button, inputs, [data-cursor]).
 * - Fully disabled when the user prefers reduced motion.
 */
const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [enabled, setEnabled] = useState(false);
  const [variant, setVariant] = useState("default"); // default | interactive | text

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!fine.matches || reduced.matches) return undefined;

    setEnabled(true);
    document.body.dataset.customCursor = "on";

    const pos = { x: -100, y: -100 };
    const ringPos = { x: -100, y: -100 };
    let rafId = 0;

    const ringLoop = () => {
      ringPos.x += (pos.x - ringPos.x) * 0.16;
      ringPos.y += (pos.y - ringPos.y) * 0.16;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.x}px, ${ringPos.y}px, 0)`;
      }
      rafId = requestAnimationFrame(ringLoop);
    };

    const onMouseMove = (e) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
      }
    };

    const onOver = (e) => {
      const target = e.target;
      if (!(target instanceof Element)) return;

      if (target.closest("input, textarea")) setVariant("text");
      else if (target.closest('a, button, [role="button"], [data-cursor="hover"], label, select'))
        setVariant("interactive");
      else setVariant("default");
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    rafId = requestAnimationFrame(ringLoop);

    const cleanup = () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onOver);
      delete document.body.dataset.customCursor;
    };

    return () => {
      // react to media changes
      if (fine.addEventListener) {
        fine.removeEventListener("change", cleanup);
      }
      cleanup();
    };
  }, []);

  if (!enabled) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[200]">
      {/* Lagging glow ring */}
      <div
        ref={ringRef}
        className="absolute left-0 top-0 transition-[width,height,opacity,background-color] duration-200 ease-out"
        style={{
          willChange: "transform",
          width: variant === "interactive" ? 64 : 44,
          height: variant === "interactive" ? 64 : 44,
          marginLeft: variant === "interactive" ? -32 : -24,
          marginTop: variant === "interactive" ? -32 : -24,
          borderRadius: "9999px",
          borderWidth: 1,
          borderStyle: "solid",
          backgroundColor:
            variant === "default" ? "transparent" : "rgba(34, 211, 238, 0.08)",
          borderColor:
            variant === "interactive"
              ? "rgba(34,211,238,0.7)"
              : variant === "text"
                ? "rgba(139,92,246,0.6)"
                : "rgba(34,211,238,0.4)",
          boxShadow:
            variant === "interactive" ? "0 0 24px rgba(34,211,238,0.25)" : "none",
        }}
      />
      {/* Precise dot */}
      <div
        ref={dotRef}
        className="absolute left-0 top-0 rounded-full transition-[width,height,background-color] duration-200"
        style={{
          willChange: "transform",
          width: variant === "interactive" ? 12 : 6,
          height: variant === "interactive" ? 12 : 6,
          marginLeft: variant === "interactive" ? -6 : -3,
          marginTop: variant === "interactive" ? -6 : -3,
          backgroundColor: variant === "interactive" ? "#8B5CF6" : "#22D3EE",
        }}
      />
    </div>
  );
};

export default CustomCursor;
