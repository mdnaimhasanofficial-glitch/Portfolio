import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { HiMenuAlt3, HiX, HiDocumentText } from "react-icons/hi";
import profileImg from "../assets/profile.jpg";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Experience", id: "experience" },
  { name: "Education", id: "education" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  // Shadow and active section detection when scrolling on home page
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (!isHomePage) return;

      const sections = navLinks.map((link) => document.getElementById(link.id));

      sections.forEach((section) => {
        if (!section) return;

        const top = section.offsetTop - 100;
        const height = section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < top + height) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  // Escape key closes the mobile menu (a11y nicety)
  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed left-0 top-4 z-50 w-full px-4 transition-all duration-300 print:hidden ${
        scrolled ? "top-2" : ""
      }`}
    >
      <div className="mx-auto max-w-7xl">
        <nav
          className={`glass-strong flex items-center justify-between rounded-2xl px-4 sm:px-5 transition-all duration-300 ${
            scrolled
              ? "h-14 shadow-[0_8px_40px_rgba(0,0,0,0.55)] border-neon/20"
              : "h-16 shadow-lg"
          }`}
        >
          {/* Logo */}
          <Link to="/" className="group flex select-none items-center gap-3">
            <div className="relative">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-neon to-vio opacity-25 blur-sm transition duration-300 group-hover:opacity-70" />
              <img
                src={profileImg}
                alt="Md Naim Hasan"
                className="relative h-9 w-9 rounded-xl object-cover ring-2 ring-neon/50 shadow-md transition-transform duration-300 group-hover:scale-105 sm:h-10 sm:w-10"
                loading="lazy"
              />
              <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-base bg-emerald-500" />
            </div>
            <div className="flex flex-col">
              <span className="flex items-center font-display text-xl font-bold tracking-tight text-fg transition-colors group-hover:text-neon sm:text-2xl">
                <span>Naim.dev</span>
                <span className="ml-1 h-1.5 w-1.5 animate-pulse rounded-full bg-neon" />
              </span>
              <span className="-mt-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted">
                Full Stack Developer
              </span>
            </div>
          </Link>

          {/* Desktop pill navigation with sliding indicator */}
          <div className="hidden md:flex items-center rounded-full border border-line bg-panel/70 p-1 shadow-inner backdrop-blur-md">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => {
                const href = isHomePage ? `#${link.id}` : `/#${link.id}`;
                const isLinkActive = isHomePage && active === link.id;

                return (
                  <li key={link.id}>
                    <a
                      href={href}
                      className={`relative inline-block rounded-full px-3.5 py-1.5 text-[13px] font-semibold tracking-wide transition-colors duration-200 ${
                        isLinkActive
                          ? "text-neon"
                          : "text-muted hover:text-fg"
                      }`}
                    >
                      {isLinkActive && (
                        <motion.span
                          layoutId="nav-active-pill"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          className="absolute inset-0 rounded-full bg-neon/10 ring-1 ring-neon/40"
                        />
                      )}
                      <span className="relative z-10">{link.name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Link
              to="/resume"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-neon to-vio px-5 py-2 text-xs font-bold text-ink shadow-md shadow-neon/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-neon/30 sm:text-sm"
            >
              <span
                className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                aria-hidden="true"
              />
              <HiDocumentText className="text-lg text-ink" />
              <span>Resume</span>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            className="relative rounded-xl border border-line bg-card p-2.5 text-fg transition-all hover:text-neon hover:border-neon focus:outline-none focus:ring-2 focus:ring-neon/40 md:hidden"
          >
            {menuOpen ? <HiX className="text-xl" /> : <HiMenuAlt3 className="text-xl" />}
          </button>
        </nav>

        {/* Mobile Backdrop Overlay */}
        {menuOpen && (
          <div
            onClick={closeMenu}
            className="fixed inset-0 -z-10 bg-ink/80 backdrop-blur-xs md:hidden"
            aria-hidden="true"
          />
        )}

        {/* Mobile floating menu card */}
        <div
          className={`absolute top-[calc(100%+0.5rem)] inset-x-4 max-w-lg mx-auto overflow-hidden rounded-2xl bg-elev/98 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-2xl border transition-all duration-300 md:hidden ${
            menuOpen
              ? "pointer-events-auto translate-y-0 border-line p-5 opacity-100"
              : "pointer-events-none max-h-0 -translate-y-4 border-transparent p-0 opacity-0"
          }`}
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-line pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-muted">
                Navigation
              </span>
              <div className="flex items-center gap-2">
                <ThemeToggle size="sm" />
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-panel px-2.5 py-0.5 text-xs font-semibold text-emerald-400">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                  Available
                </span>
              </div>
            </div>

            <ul className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => {
                const href = isHomePage ? `#${link.id}` : `/#${link.id}`;
                const isLinkActive = isHomePage && active === link.id;

                return (
                  <li key={link.id}>
                    <a
                      href={href}
                      onClick={closeMenu}
                      className={`flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-semibold transition-all ${
                        isLinkActive
                          ? "border border-neon/40 bg-neon/10 text-neon font-bold"
                          : "text-muted hover:bg-panel/50 hover:text-fg"
                      }`}
                    >
                      <span>{link.name}</span>
                      {isLinkActive && (
                        <span className="h-1.5 w-1.5 rounded-full bg-neon" />
                      )}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Mobile CTA */}
            <div className="border-t border-line pt-2">
              <Link
                to="/resume"
                onClick={closeMenu}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-neon to-vio py-3 font-bold text-ink shadow-md shadow-neon/25 transition-all active:scale-[0.98]"
              >
                <HiDocumentText className="text-xl" />
                <span>View Full Resume</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
