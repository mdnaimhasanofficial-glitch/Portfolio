import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenuAlt3, HiX, HiDocumentText } from "react-icons/hi";
import profileImg from "../assets/profile.jpg";

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
          ? "bg-[#0F172A]/90 backdrop-blur-xl shadow-lg border-b border-[#1E293B]"
          : "bg-[#0F172A]/70 backdrop-blur-md border-b border-[#1E293B]/60"
      }`}
    >
      {/* Top subtle hairline gradient accent line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#38BDF8] opacity-90"></div>

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
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-[#38BDF8] to-[#818CF8] opacity-30 blur-sm group-hover:opacity-75 transition duration-300"></div>
            <img
              src={profileImg}
              alt="Md Naim Hasan"
              className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl object-cover ring-2 ring-[#38BDF8]/60 shadow-md group-hover:scale-105 transition-transform duration-300"
            />
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-[#0F172A] rounded-full"></span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl sm:text-2xl font-black tracking-tight text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors flex items-center">
              <span>Naim.dev</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] ml-1 animate-pulse"></span>
            </span>
            <span className="text-[10px] font-semibold text-[#94A3B8] tracking-wider uppercase -mt-0.5">
              MERN Stack Intern
            </span>
          </div>
        </Link>

        {/* Desktop Segmented Pill Navigation */}
        <div className="hidden md:flex items-center bg-[#1E293B]/90 p-1.5 rounded-full border border-slate-700/70 shadow-inner backdrop-blur-md">
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
                        ? "bg-[#0F172A] text-[#38BDF8] ring-1 ring-[#38BDF8]/40 shadow-sm font-bold"
                        : "text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#0F172A]/50"
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
            className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-[#38BDF8] to-[#818CF8] hover:from-[#38BDF8] hover:to-[#6366F1] text-[#0F172A] px-5 py-2 rounded-full text-xs sm:text-sm font-bold shadow-md shadow-[#38BDF8]/20 hover:shadow-lg hover:shadow-[#38BDF8]/30 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer overflow-hidden"
          >
            {/* Shimmer light effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
            <HiDocumentText className="text-lg group-hover:scale-110 transition-transform text-[#0F172A]" />
            <span>Resume</span>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          className="md:hidden relative p-2.5 rounded-xl text-[#F8FAFC] hover:text-[#38BDF8] bg-[#1E293B] hover:bg-slate-700 border border-slate-700 transition-all focus:outline-none focus:ring-2 focus:ring-[#38BDF8]/40"
        >
          {menuOpen ? <HiX className="text-xl" /> : <HiMenuAlt3 className="text-xl" />}
        </button>
      </nav>

      {/* Mobile Backdrop Overlay */}
      {menuOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 bg-[#0F172A]/80 backdrop-blur-xs -z-10 md:hidden"
          aria-hidden="true"
        />
      )}

      {/* Mobile Floating Menu Card */}
      <div
        className={`md:hidden absolute top-[calc(100%+0.5rem)] inset-x-4 max-w-lg mx-auto bg-[#1E293B]/98 backdrop-blur-2xl rounded-2xl border border-slate-700/80 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden transition-all duration-300 ${
          menuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto p-5"
            : "opacity-0 -translate-y-4 pointer-events-none p-0 max-h-0 border-transparent"
        }`}
      >
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-700/80">
            <span className="text-xs font-bold text-[#94A3B8] uppercase tracking-wider">
              Navigation
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#0F172A] text-emerald-400 text-xs font-semibold border border-emerald-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
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
                        ? "bg-[#0F172A] text-[#38BDF8] font-bold border border-[#38BDF8]/40 shadow-xs"
                        : "text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#0F172A]/50"
                    }`}
                  >
                    <span>{link.name}</span>
                    {isLinkActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]"></span>
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Mobile Resume Button */}
          <div className="pt-2 border-t border-slate-700/80">
            <Link
              to="/resume"
              onClick={closeMenu}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#38BDF8] to-[#818CF8] text-[#0F172A] py-3 rounded-xl font-bold shadow-md shadow-[#38BDF8]/25 hover:shadow-lg transition-all active:scale-[0.98]"
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