import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { HiMail, HiArrowUp } from "react-icons/hi";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-ink border-t border-line text-muted print:hidden mt-auto">
      {/* Animated aurora hairline */}
      <div
        aria-hidden="true"
        className="animate-gradient-shift absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-neon via-vio to-neon opacity-80"
      />
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand & Mission */}
          <div className="md:col-span-2 space-y-3">
            <Link
              to="/"
              className="text-xl font-extrabold text-fg flex items-center gap-2 group"
            >
              <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-neon to-vio flex items-center justify-center text-ink font-mono text-sm shadow-xs font-bold">
                N
              </span>
              <span>
                Md Naim Hasan<span className="text-neon">.</span>
              </span>
            </Link>
            <p className="text-sm text-muted max-w-md leading-relaxed">
              Motivated MERN Stack Intern &amp; Junior Web Developer specializing in building clean, responsive, and user-centric web applications with React.js, Next.js, and modern technologies.
            </p>
            <div className="pt-1 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs text-muted font-medium">
                MERN Stack Intern @ DIPTI • Open for Junior Roles
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-fg uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/#home" className="hover:text-neon transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/#about" className="hover:text-neon transition">
                  About Me
                </a>
              </li>
              <li>
                <a href="/#skills" className="hover:text-neon transition">
                  Skills &amp; Tech
                </a>
              </li>
              <li>
                <a href="/#projects" className="hover:text-neon transition">
                  Featured Projects
                </a>
              </li>
              <li>
                <Link to="/resume" className="text-neon font-bold hover:underline">
                  Resume / CV &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect & Socials */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-fg uppercase tracking-wider">
              Get in Touch
            </h4>
            <p className="text-sm text-muted">
              Have an opening or project inquiry? Feel free to reach out anytime.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://github.com/mdnaimhasanofficial-glitch"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="w-9 h-9 rounded-xl bg-card border border-line/80 hover:border-neon hover:text-neon flex items-center justify-center text-fg transition-all shadow-xs"
              >
                <FaGithub className="text-base" />
              </a>
              <a
                href="https://www.linkedin.com/in/naimhasan706016/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="w-9 h-9 rounded-xl bg-card border border-line/80 hover:border-neon hover:text-neon flex items-center justify-center text-fg transition-all shadow-xs"
              >
                <FaLinkedin className="text-base" />
              </a>
              <a
                href="mailto:mdnaimhasan.official@gmail.com"
                aria-label="Send Email"
                className="w-9 h-9 rounded-xl bg-card border border-line/80 hover:border-vio hover:text-vio flex items-center justify-center text-fg transition-all shadow-xs"
              >
                <HiMail className="text-base" />
              </a>
              <a
                href="https://wa.me/8801616711677"
                target="_blank"
                rel="noreferrer"
                aria-label="Chat on WhatsApp"
                className="w-9 h-9 rounded-xl bg-card border border-line/80 hover:border-[#25D366] hover:text-[#25D366] flex items-center justify-center text-fg transition-all shadow-xs"
              >
                <FaWhatsapp className="text-base" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-line/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p>
            &copy; {new Date().getFullYear()} Md Naim Hasan. Built with React &amp; Tailwind CSS.
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="inline-flex items-center gap-1.5 text-muted hover:text-neon font-semibold transition cursor-pointer"
          >
            <span>Back to top</span>
            <HiArrowUp className="text-sm" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
