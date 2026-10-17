import { Link } from "react-router-dom";
import { HiDocumentText, HiArrowRight, HiSparkles } from "react-icons/hi";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiTailwindcss,
  SiExpress,
} from "react-icons/si";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Dynamic Ambient Glass Glow Orbs */}
      <div className="absolute top-16 left-1/4 w-[32rem] h-[32rem] bg-gradient-to-tr from-blue-500/15 to-indigo-500/15 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse duration-1000"></div>
      <div className="absolute bottom-10 right-1/4 w-[28rem] h-[28rem] bg-gradient-to-bl from-cyan-400/15 via-blue-500/10 to-indigo-500/15 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[20rem] bg-blue-300/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Introductions & CTAs */}
        <div className="lg:col-span-7 text-left space-y-6">
          {/* Glass Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/75 backdrop-blur-xl border border-blue-200/70 text-blue-700 text-xs sm:text-sm font-semibold shadow-xs">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span>Available for Hire • MERN Stack Intern @ DIPTI</span>
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <p className="text-slate-600 font-semibold text-lg tracking-wide">
              Hello, I am
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-tight">
              Md Naim Hasan
              <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500">
                MERN Stack &amp; React Developer
              </span>
            </h1>
          </div>

          {/* Description matching Resume */}
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
            Motivated MERN Stack Intern and aspiring full-stack web developer with hands-on project experience in modern JavaScript-based web development. Building maintainable, responsive, and user-friendly applications with{" "}
            <span className="text-slate-900 font-semibold">React.js</span>,{" "}
            <span className="text-slate-900 font-semibold">Next.js</span>,{" "}
            <span className="text-slate-900 font-semibold">TypeScript</span>, and{" "}
            <span className="text-slate-900 font-semibold">MongoDB</span>.
          </p>

          {/* Action Buttons (Resume prominently featured) */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {/* Main Resume CTA */}
            <Link
              to="/resume"
              className="group relative inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:via-indigo-700 hover:to-blue-800 text-white px-7 py-3.5 rounded-xl font-bold shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer text-sm sm:text-base overflow-hidden"
            >
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              <HiDocumentText className="text-xl group-hover:scale-110 transition-transform" />
              <span>View Resume / CV</span>
            </Link>

            {/* Explore Projects Button - Glass Style */}
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 bg-white/80 backdrop-blur-md text-slate-800 border border-slate-200/80 hover:border-blue-500 hover:text-blue-600 px-6 py-3.5 rounded-xl font-semibold shadow-xs hover:shadow-md transition-all duration-300 text-sm sm:text-base hover:bg-white"
            >
              <span>Explore Projects</span>
              <HiArrowRight className="text-base" />
            </a>

            {/* Quick Contact Link */}
            <a
              href="#contact"
              className="inline-flex items-center justify-center text-sm font-semibold text-slate-600 hover:text-blue-600 px-4 py-3.5 transition"
            >
              Get in Touch &rarr;
            </a>
          </div>

          {/* Core Tech Stack Glass Badges */}
          <div className="pt-5 border-t border-slate-200/70">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
              <HiSparkles className="text-blue-600" /> Core Tech Stack
            </p>
            <div className="flex flex-wrap items-center gap-2.5 text-xs sm:text-sm">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/70 backdrop-blur-md text-slate-800 font-semibold border border-slate-200/70 shadow-xs hover:bg-white hover:border-cyan-300 transition-all">
                <FaReact className="text-cyan-500 text-base" /> React.js
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/70 backdrop-blur-md text-slate-800 font-semibold border border-slate-200/70 shadow-xs hover:bg-white hover:border-slate-400 transition-all">
                <SiNextdotjs className="text-black text-base" /> Next.js
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/70 backdrop-blur-md text-slate-800 font-semibold border border-slate-200/70 shadow-xs hover:bg-white hover:border-blue-400 transition-all">
                <SiTypescript className="text-blue-600 text-base" /> TypeScript
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/70 backdrop-blur-md text-slate-800 font-semibold border border-slate-200/70 shadow-xs hover:bg-white hover:border-emerald-400 transition-all">
                <FaNodeJs className="text-emerald-500 text-base" /> Node.js
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/70 backdrop-blur-md text-slate-800 font-semibold border border-slate-200/70 shadow-xs hover:bg-white hover:border-slate-400 transition-all">
                <SiExpress className="text-slate-700 text-base" /> Express.js
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/70 backdrop-blur-md text-slate-800 font-semibold border border-slate-200/70 shadow-xs hover:bg-white hover:border-green-400 transition-all">
                <SiMongodb className="text-green-500 text-base" /> MongoDB
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/70 backdrop-blur-md text-slate-800 font-semibold border border-slate-200/70 shadow-xs hover:bg-white hover:border-teal-400 transition-all">
                <SiTailwindcss className="text-teal-500 text-base" /> Tailwind CSS
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/70 backdrop-blur-md text-slate-800 font-semibold border border-slate-200/70 shadow-xs hover:bg-white hover:border-orange-400 transition-all">
                <FaGitAlt className="text-orange-500 text-base" /> Git &amp; GitHub
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Code Showcase & Visual Glass Card */}
        <div className="lg:col-span-5 relative">
          {/* Visual Glass Code Box */}
          <div className="relative bg-slate-900/90 backdrop-blur-2xl rounded-2xl shadow-[0_25px_60px_-15px_rgba(15,23,42,0.35)] border border-slate-700/60 overflow-hidden text-left">
            {/* Terminal Window Header */}
            <div className="bg-slate-800/80 px-4 py-3 flex items-center justify-between border-b border-slate-700/60">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/90"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500/90"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-500/90"></div>
              </div>
              <span className="text-xs text-slate-400 font-mono">DeveloperProfile.jsx</span>
              <div className="w-12"></div>
            </div>

            {/* Code Content matching Resume */}
            <div className="p-5 font-mono text-xs sm:text-sm text-slate-300 leading-relaxed overflow-x-auto">
              <p>
                <span className="text-purple-400">const</span>{" "}
                <span className="text-blue-400">developer</span> = &#123;
              </p>
              <p className="pl-4">
                <span className="text-slate-400">name:</span>{" "}
                <span className="text-emerald-400">"Md Naim Hasan"</span>,
              </p>
              <p className="pl-4">
                <span className="text-slate-400">role:</span>{" "}
                <span className="text-emerald-400">"MERN Stack Intern"</span>,
              </p>
              <p className="pl-4">
                <span className="text-slate-400">institute:</span>{" "}
                <span className="text-cyan-300">"DIPTI &amp; Programming Hero"</span>,
              </p>
              <p className="pl-4">
                <span className="text-slate-400">skills:</span> [
              </p>
              <p className="pl-8 text-yellow-300">
                "React", "Next.js", "TypeScript", "Node.js", "MongoDB"
              </p>
              <p className="pl-4">],</p>
              <p className="pl-4">
                <span className="text-slate-400">location:</span>{" "}
                <span className="text-emerald-400">"Nilphamari, Bangladesh"</span>,
              </p>
              <p className="pl-4">
                <span className="text-slate-400">availableImmediately:</span>{" "}
                <span className="text-blue-400">true</span>,
              </p>
              <p className="pl-4">
                <span className="text-slate-400">codeQuality:</span>{" "}
                <span className="text-emerald-400">"Clean &amp; Component-Driven"</span>
              </p>
              <p>&#125;;</p>

              <div className="mt-4 pt-3 border-t border-slate-800 text-xs text-slate-400 flex items-center justify-between">
                <span className="text-emerald-400 flex items-center gap-1 font-semibold">
                  &#10003; Open for Junior / Entry-Level Roles
                </span>
                <span className="text-slate-500 font-mono">Ready to join</span>
              </div>
            </div>
          </div>

          {/* Floating Glass Pill Badges */}
          <div className="absolute -bottom-5 -left-4 bg-white/80 backdrop-blur-xl border border-white/90 rounded-2xl p-3.5 shadow-xl flex items-center gap-3 ring-1 ring-slate-900/5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold text-lg shadow-md shadow-blue-500/20">
              2+
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900">Featured Projects</p>
              <p className="text-[11px] text-slate-500">FitLog &amp; Bazar Dor Live</p>
            </div>
          </div>

          <div className="absolute -top-4 -right-4 bg-white/80 backdrop-blur-xl border border-white/90 rounded-2xl px-4 py-2.5 shadow-xl flex items-center gap-2 ring-1 ring-slate-900/5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <p className="text-xs font-bold text-slate-900">100% Responsive UI</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;