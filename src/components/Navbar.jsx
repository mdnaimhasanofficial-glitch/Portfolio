import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenuAlt3, HiX, HiDocumentText } from "react-icons/hi";

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

      const sections = navLinks.map((link) =>
        document.getElementById(link.id)
      );

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

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 print:hidden ${
        scrolled || !isHomePage
          ? "bg-white/85 backdrop-blur-xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.07)] border-b border-slate-200/80"
          : "bg-white/40 backdrop-blur-md border-b border-slate-200/50"
      }`}
    >
      {/* Top subtle hairline gradient accent line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 opacity-90"></div>

      <nav
        className={`max-w-7xl mx-auto flex items-center justify-between px-6 transition-all duration-300 ${
          scrolled ? "h-16" : "h-20"
        }`}
      >
        {/* Logo */}
        <Link
          to="/"
          className="group flex items-center gap-3 select-none"
        >
          <div className="relative">
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 opacity-25 blur-sm group-hover:opacity-50 transition duration-300"></div>
            <span className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 flex items-center justify-center text-white font-mono font-bold text-base sm:text-lg shadow-md ring-1 ring-white/30 group-hover:scale-105 transition-transform duration-300">
              N
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors flex items-center">
              <span>Naim.dev</span>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 ml-1 animate-pulse"></span>
            </span>
            <span className="text-[10px] font-semibold text-slate-500 tracking-wider uppercase -mt-0.5">
              MERN Stack Intern
            </span>
          </div>
        </Link>

        {/* Desktop Segmented Pill Navigation */}
        <div className="hidden md:flex items-center bg-slate-100/80 p-1.5 rounded-full border border-slate-200/70 shadow-inner backdrop-blur-md">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => {
              const href = isHomePage ? `#${link.id}` : `/#${link.id}`;
              const isLinkActive = isHomePage && active === link.id;

              return (
                <li key={link.id}>
                  <a
                    href={href}
                    className={`px-3.5 py-1.5 rounded-full text-[13px] font-semibold tracking-wide transition-all duration-200 inline-block ${
                      isLinkActive
                        ? "bg-white text-blue-600 shadow-sm ring-1 ring-slate-900/5 font-bold"
                        : "text-slate-600 hover:text-slate-900 hover:bg-white/70"
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Desktop Right CTA (Resume Button) */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/resume"
            className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:via-indigo-700 hover:to-blue-800 text-white px-5 py-2 rounded-full text-xs sm:text-sm font-semibold shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/35 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer overflow-hidden"
          >
            {/* Shimmer light effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            <HiDocumentText className="text-lg group-hover:scale-110 transition-transform" />
            <span>Resume</span>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          className="md:hidden relative p-2.5 rounded-xl text-slate-700 hover:text-slate-900 bg-slate-100/90 hover:bg-slate-200/90 border border-slate-200/80 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/40"
        >
          {menuOpen ? <HiX className="text-xl" /> : <HiMenuAlt3 className="text-xl" />}
        </button>
      </nav>

      {/* Mobile Backdrop Overlay */}
      {menuOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs -z-10 md:hidden"
          aria-hidden="true"
        />
      )}

      {/* Mobile Floating Menu Card */}
      <div
        className={`md:hidden absolute top-[calc(100%+0.5rem)] inset-x-4 max-w-lg mx-auto bg-white/98 backdrop-blur-2xl rounded-2xl border border-slate-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.18)] overflow-hidden transition-all duration-300 ${
          menuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto p-5"
            : "opacity-0 -translate-y-4 pointer-events-none p-0 max-h-0 border-transparent"
        }`}
      >
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Navigation
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-600 text-xs font-semibold border border-emerald-200/60">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Available for hire
            </span>
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
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                      isLinkActive
                        ? "bg-blue-50 text-blue-600 font-bold border border-blue-200/60 shadow-xs"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70"
                    }`}
                  >
                    <span>{link.name}</span>
                    {isLinkActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Mobile Resume Button */}
          <div className="pt-2 border-t border-slate-100">
            <Link
              to="/resume"
              onClick={closeMenu}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white py-3 rounded-xl font-bold shadow-md shadow-blue-500/25 hover:shadow-lg transition-all active:scale-[0.98]"
            >
              <HiDocumentText className="text-xl" />
              <span>View Full Resume</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;