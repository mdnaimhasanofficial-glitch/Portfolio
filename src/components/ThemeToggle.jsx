import { useEffect, useState } from "react";

/**
 * Dark / light theme switch.
 * - Persists the choice in localStorage (`naim-theme`).
 * - Applies by toggling `data-theme="light"` on <html>; index.css flips
 *   the design tokens accordingly (default = dark).
 * - index.html contains a tiny inline script that applies the stored
 *   theme before first paint to prevent a flash of the wrong theme.
 */
const STORAGE_KEY = "naim-theme";

const ThemeToggle = ({ className = "", size = "md" }) => {
  const [light, setLight] = useState(false);

  useEffect(() => {
    setLight(document.documentElement.getAttribute("data-theme") === "light");
  }, []);

  const toggle = () => {
    const next = !light;
    setLight(next);
    const root = document.documentElement;
    if (next) {
      root.setAttribute("data-theme", "light");
      try {
        localStorage.setItem(STORAGE_KEY, "light");
      } catch {
        /* private mode — ignore */
      }
    } else {
      root.removeAttribute("data-theme");
      try {
        localStorage.removeItem(STORAGE_KEY);
      } catch {
        /* private mode — ignore */
      }
    }
  };

  const isSmall = size === "sm";
  const track = isSmall ? "h-8 w-14" : "h-9 w-16";
  const knob = isSmall ? "h-6 w-6 mx-[3px] text-xs" : "h-7 w-7 mx-1 text-sm";
  const knobShift = isSmall ? "translate-x-6" : "translate-x-7";

  return (
    <button
      type="button"
      onClick={toggle}
      role="switch"
      aria-checked={light}
      aria-label={light ? "Switch to dark theme" : "Switch to light theme"}
      title={light ? "Dark mode" : "Light mode"}
      className={`relative inline-flex ${track} shrink-0 cursor-pointer items-center rounded-full border border-line bg-panel transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-neon/40 ${className}`}
    >
      {/* Track glow */}
      <span
        aria-hidden="true"
        className={`absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 ${
          light ? "opacity-100 bg-gradient-to-r from-amber-300/40 to-sky-400/30" : "bg-gradient-to-r from-neon/20 to-vio/25 opacity-100"
        }`}
      />
      {/* Knob */}
      <span
        aria-hidden="true"
        className={`relative z-10 flex ${knob} items-center justify-center rounded-full shadow-md transition-transform duration-300 ${
          light
            ? `${knobShift} bg-amber-300 text-amber-900`
            : "translate-x-0 bg-gradient-to-tr from-neon to-vio text-white"
        }`}
      >
        {light ? "☀️" : "🌙"}
      </span>
      {/* End icons */}
      <span aria-hidden="true" className="sr-only">
        Theme
      </span>
    </button>
  );
};

export default ThemeToggle;
