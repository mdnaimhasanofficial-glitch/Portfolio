import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiMail, HiArrowUp } from "react-icons/hi";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0F172A] border-t border-slate-800 text-[#94A3B8] print:hidden mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand & Mission */}
          <div className="md:col-span-2 space-y-3">
            <Link
              to="/"
              className="text-xl font-extrabold text-[#F8FAFC] flex items-center gap-2 group"
            >
              <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#38BDF8] to-[#818CF8] flex items-center justify-center text-[#0F172A] font-mono text-sm shadow-xs font-bold">
                N
              </span>
              <span>
                Md Naim Hasan<span className="text-[#38BDF8]">.</span>
              </span>
            </Link>
            <p className="text-sm text-[#94A3B8] max-w-md leading-relaxed">
              Motivated MERN Stack Intern &amp; Junior Web Developer specializing in building clean, responsive, and user-centric web applications with React.js, Next.js, and modern technologies.
            </p>
            <div className="pt-1 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs text-[#94A3B8] font-medium">
                MERN Stack Intern @ DIPTI • Open for Junior Roles
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-[#F8FAFC] uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/#home" className="hover:text-[#38BDF8] transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/#about" className="hover:text-[#38BDF8] transition">
                  About Me
                </a>
              </li>
              <li>
                <a href="/#skills" className="hover:text-[#38BDF8] transition">
                  Skills &amp; Tech
                </a>
              </li>
              <li>
                <a href="/#projects" className="hover:text-[#38BDF8] transition">
                  Featured Projects
                </a>
              </li>
              <li>
                <Link to="/resume" className="text-[#38BDF8] font-bold hover:underline">
                  Resume / CV &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect & Socials */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-[#F8FAFC] uppercase tracking-wider">
              Get in Touch
            </h4>
            <p className="text-sm text-[#94A3B8]">
              Have an opening or project inquiry? Feel free to reach out anytime.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://github.com/mdnaimhasanofficial-glitch"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="w-9 h-9 rounded-xl bg-[#1E293B] border border-slate-700/80 hover:border-[#38BDF8] hover:text-[#38BDF8] flex items-center justify-center text-[#F8FAFC] transition-all shadow-xs"
              >
                <FaGithub className="text-base" />
              </a>
              <a
                href="https://www.linkedin.com/in/naimhasan706016/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="w-9 h-9 rounded-xl bg-[#1E293B] border border-slate-700/80 hover:border-[#38BDF8] hover:text-[#38BDF8] flex items-center justify-center text-[#F8FAFC] transition-all shadow-xs"
              >
                <FaLinkedin className="text-base" />
              </a>
              <a
                href="mailto:mdnaimhasan.official@gmail.com"
                aria-label="Send Email"
                className="w-9 h-9 rounded-xl bg-[#1E293B] border border-slate-700/80 hover:border-[#818CF8] hover:text-[#818CF8] flex items-center justify-center text-[#F8FAFC] transition-all shadow-xs"
              >
                <HiMail className="text-base" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#94A3B8]">
          <p>
            &copy; {new Date().getFullYear()} Md Naim Hasan. Built with React &amp; Tailwind CSS.
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="inline-flex items-center gap-1.5 text-[#94A3B8] hover:text-[#38BDF8] font-semibold transition cursor-pointer"
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
