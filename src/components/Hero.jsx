import { useState } from "react";
import { Link } from "react-router-dom";
import {
  HiDocumentText,
  HiArrowRight,
  HiSparkles,
  HiCode,
  HiPhotograph,
  HiLocationMarker,
  HiCheckCircle,
} from "react-icons/hi";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiTailwindcss,
  SiExpress,
} from "react-icons/si";
import profileImg from "../assets/profile.jpg";

const auraThemes = {
  skyIndigo: {
    name: "Sky & Indigo",
    color: "from-[#38BDF8] to-[#818CF8]",
    ringGradient: "from-[#38BDF8] via-[#818CF8] to-[#1E293B]",
    glowClass: "from-[#38BDF8]/25 via-[#818CF8]/20 to-[#38BDF8]/15",
    accentDot: "bg-[#38BDF8]",
  },
  cyberCyan: {
    name: "Cyber Cyan",
    color: "from-cyan-400 to-blue-500",
    ringGradient: "from-cyan-400 via-blue-500 to-[#1E293B]",
    glowClass: "from-cyan-500/25 via-blue-500/20 to-transparent",
    accentDot: "bg-cyan-400",
  },
  electricViolet: {
    name: "Electric Violet",
    color: "from-[#818CF8] to-purple-500",
    ringGradient: "from-[#818CF8] via-purple-500 to-[#1E293B]",
    glowClass: "from-[#818CF8]/25 via-purple-500/20 to-transparent",
    accentDot: "bg-[#818CF8]",
  },
  matrixEmerald: {
    name: "Matrix Emerald",
    color: "from-emerald-400 to-teal-500",
    ringGradient: "from-emerald-400 via-teal-500 to-[#1E293B]",
    glowClass: "from-emerald-500/25 via-teal-500/20 to-transparent",
    accentDot: "bg-emerald-400",
  },
  sunsetAmber: {
    name: "Sunset Amber",
    color: "from-amber-400 to-rose-500",
    ringGradient: "from-amber-400 via-rose-500 to-[#1E293B]",
    glowClass: "from-amber-500/25 via-rose-500/20 to-transparent",
    accentDot: "bg-amber-400",
  },
};

const Hero = () => {
  const [activeTab, setActiveTab] = useState("photo"); // 'photo' | 'code'
  const [auraKey, setAuraKey] = useState("skyIndigo");

  const currentAura = auraThemes[auraKey];

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden bg-[#0F172A]"
    >
      {/* Dynamic Ambient Glass Glow Orbs */}
      <div className="absolute top-16 left-1/4 w-[32rem] h-[32rem] bg-gradient-to-tr from-[#38BDF8]/10 to-[#818CF8]/10 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse duration-1000"></div>
      <div className="absolute bottom-10 right-1/4 w-[28rem] h-[28rem] bg-gradient-to-bl from-[#38BDF8]/10 via-[#818CF8]/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[20rem] bg-[#38BDF8]/5 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Introductions & CTAs */}
        <div className="lg:col-span-7 text-left space-y-6">
          {/* Glass Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#1E293B]/80 backdrop-blur-xl border border-[#38BDF8]/30 text-[#38BDF8] text-xs sm:text-sm font-semibold shadow-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span>Available for Hire • MERN Stack Intern @ DIPTI</span>
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <p className="text-[#94A3B8] font-semibold text-lg tracking-wide">
              Hello, I am
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#F8FAFC] tracking-tight leading-tight">
              Md Naim Hasan
              <span className="sr-only"> - Developer Naim | MERN Developer Naim</span>
              <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#38BDF8]">
                MERN Stack &amp; React Developer
              </span>
            </h1>
          </div>

          {/* Description matching Resume */}
          <p className="text-base sm:text-lg text-[#94A3B8] max-w-2xl leading-relaxed">
            Motivated MERN Stack Intern and aspiring full-stack web developer
            with hands-on project experience in modern JavaScript-based web
            development. Building maintainable, responsive, and user-friendly
            applications with{" "}
            <span className="text-[#F8FAFC] font-semibold">React.js</span>,{" "}
            <span className="text-[#38BDF8] font-semibold">Next.js</span>,{" "}
            <span className="text-[#818CF8] font-semibold">TypeScript</span>, and{" "}
            <span className="text-[#38BDF8] font-semibold">MongoDB</span>.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {/* Main Resume CTA */}
            <Link
              to="/resume"
              className="group relative inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-[#818CF8] hover:from-[#38BDF8] hover:to-[#6366F1] text-[#0F172A] px-7 py-3.5 rounded-xl font-bold shadow-lg shadow-[#38BDF8]/20 hover:shadow-xl hover:shadow-[#38BDF8]/30 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer text-sm sm:text-base overflow-hidden"
            >
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
              <HiDocumentText className="text-xl group-hover:scale-110 transition-transform text-[#0F172A]" />
              <span>View Resume / CV</span>
            </Link>

            {/* Explore Projects Button */}
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 bg-[#1E293B] hover:bg-slate-700/80 text-[#F8FAFC] border border-slate-700 hover:border-[#38BDF8] hover:text-[#38BDF8] px-6 py-3.5 rounded-xl font-semibold shadow-sm hover:shadow-md transition-all duration-300 text-sm sm:text-base"
            >
              <span>Explore Projects</span>
              <HiArrowRight className="text-base" />
            </a>

            {/* Quick Contact Link */}
            <a
              href="#contact"
              className="inline-flex items-center justify-center text-sm font-semibold text-[#94A3B8] hover:text-[#38BDF8] px-4 py-3.5 transition"
            >
              Get in Touch &rarr;
            </a>
          </div>

          {/* Core Tech Stack Badges */}
          <div className="pt-5 border-t border-slate-800">
            <p className="text-xs font-bold uppercase tracking-wider text-[#94A3B8] mb-3 flex items-center gap-1.5">
              <HiSparkles className="text-[#38BDF8]" /> Core Tech Stack
            </p>
            <div className="flex flex-wrap items-center gap-2.5 text-xs sm:text-sm">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#1E293B]/90 backdrop-blur-md text-[#F8FAFC] font-semibold border border-slate-700/80 shadow-xs hover:border-[#38BDF8] transition-all">
                <FaReact className="text-[#38BDF8] text-base" /> React.js
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#1E293B]/90 backdrop-blur-md text-[#F8FAFC] font-semibold border border-slate-700/80 shadow-xs hover:border-[#F8FAFC] transition-all">
                <SiNextdotjs className="text-white text-base" /> Next.js
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#1E293B]/90 backdrop-blur-md text-[#F8FAFC] font-semibold border border-slate-700/80 shadow-xs hover:border-[#38BDF8] transition-all">
                <SiTypescript className="text-[#38BDF8] text-base" /> TypeScript
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#1E293B]/90 backdrop-blur-md text-[#F8FAFC] font-semibold border border-slate-700/80 shadow-xs hover:border-emerald-400 transition-all">
                <FaNodeJs className="text-emerald-400 text-base" /> Node.js
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#1E293B]/90 backdrop-blur-md text-[#F8FAFC] font-semibold border border-slate-700/80 shadow-xs hover:border-slate-400 transition-all">
                <SiExpress className="text-[#94A3B8] text-base" /> Express.js
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#1E293B]/90 backdrop-blur-md text-[#F8FAFC] font-semibold border border-slate-700/80 shadow-xs hover:border-green-400 transition-all">
                <SiMongodb className="text-green-400 text-base" /> MongoDB
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#1E293B]/90 backdrop-blur-md text-[#F8FAFC] font-semibold border border-slate-700/80 shadow-xs hover:border-[#38BDF8] transition-all">
                <SiTailwindcss className="text-[#38BDF8] text-base" /> Tailwind CSS
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#1E293B]/90 backdrop-blur-md text-[#F8FAFC] font-semibold border border-slate-700/80 shadow-xs hover:border-orange-400 transition-all">
                <FaGitAlt className="text-orange-400 text-base" /> Git &amp; GitHub
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Photo Card & Code Toggle (NO ROTATING BORDER) */}
        <div className="lg:col-span-5 relative flex flex-col items-center">
          {/* Showcase Control Switcher (Portrait vs Terminal Code) */}
          <div className="mb-5 inline-flex items-center bg-[#1E293B]/90 backdrop-blur-xl p-1.5 rounded-2xl border border-slate-700/80 shadow-lg">
            <button
              onClick={() => setActiveTab("photo")}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "photo"
                  ? "bg-[#0F172A] text-[#38BDF8] ring-1 ring-[#38BDF8]/40 shadow-sm"
                  : "text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#0F172A]/40"
              }`}
            >
              <HiPhotograph className="text-base text-[#38BDF8]" />
              <span>Portrait Showcase</span>
            </button>
            <button
              onClick={() => setActiveTab("code")}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "code"
                  ? "bg-[#0F172A] text-[#38BDF8] ring-1 ring-[#38BDF8]/40 shadow-sm"
                  : "text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#0F172A]/40"
              }`}
            >
              <HiCode className="text-base text-[#818CF8]" />
              <span>Code Matrix</span>
            </button>
          </div>

          {activeTab === "photo" ? (
            /* =================== PHOTO SPOTLIGHT (STATIC BORDER, NO ROTATION) =================== */
            <div className="relative w-full max-w-[360px] sm:max-w-[400px] group">
              {/* Soft Ambient Glow behind image (Static / breathing, NO ROTATION) */}
              <div
                className={`absolute -inset-4 sm:-inset-6 rounded-[38px] blur-2xl pointer-events-none transition-all duration-700 animate-aura-pulse bg-gradient-to-tr ${currentAura.glowClass}`}
              ></div>

              {/* Static Modern Gradient Border (Rotations turned OFF completely) */}
              <div
                className={`relative rounded-[30px] p-[2.5px] shadow-2xl bg-gradient-to-b ${currentAura.ringGradient}`}
              >
                {/* Inner Card Container (#1E293B Lighter Slate) */}
                <div className="relative bg-[#1E293B] rounded-[27.5px] overflow-hidden">
                  {/* Photo with natural colors matching background */}
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#0F172A]">
                    <img
                      src={profileImg}
                      alt="Developer Naim - Md Naim Hasan MERN Stack Developer"
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Bottom vignette blending with #1E293B */}
                    <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#1E293B] via-[#1E293B]/70 to-transparent pointer-events-none"></div>

                    {/* Top Status Badges inside photo */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0F172A]/85 backdrop-blur-md border border-slate-700/80 text-[#F8FAFC] text-xs font-semibold shadow-lg">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span>Available for Work</span>
                      </div>

                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1E293B]/90 backdrop-blur-md border border-[#38BDF8]/40 text-[#38BDF8] text-xs font-bold shadow-lg">
                        <FaReact className="text-[#38BDF8]" />
                        <span>MERN Developer</span>
                      </div>
                    </div>

                    {/* Bottom Info Bar inside card */}
                    <div className="absolute bottom-3 inset-x-3 p-3.5 rounded-2xl bg-[#0F172A]/90 backdrop-blur-xl border border-slate-700/80 text-[#F8FAFC] shadow-xl">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-bold text-base sm:text-lg leading-tight flex items-center gap-1.5 text-[#F8FAFC]">
                            Md Naim Hasan
                            <HiCheckCircle className="text-[#38BDF8] text-base" />
                          </h3>
                          <p className="text-xs text-[#94A3B8] font-medium flex items-center gap-1 mt-0.5">
                            <HiLocationMarker className="text-[#38BDF8]" />
                            Kishoreganj, Bangladesh
                          </p>
                        </div>
                        <span className="px-2.5 py-1 rounded-lg bg-[#1E293B] text-[#38BDF8] text-xs font-mono font-bold border border-slate-700">
                          @DIPTI
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Pill: Top-Right Tech Tag */}
              <div className="hidden sm:flex absolute -top-4 -right-5 z-20 items-center gap-2.5 bg-[#1E293B]/95 backdrop-blur-xl border border-slate-700/80 rounded-2xl px-3.5 py-2 shadow-xl animate-float-gentle ring-1 ring-slate-900/20">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#38BDF8] to-[#818CF8] text-[#0F172A] flex items-center justify-center font-bold text-sm shadow-md shadow-[#38BDF8]/25">
                  <FaReact className="text-lg text-[#0F172A]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#F8FAFC]">React &amp; Next.js</p>
                  <p className="text-[10px] text-[#94A3B8]">Component Driven</p>
                </div>
              </div>

              {/* Floating Pill: Bottom-Left Tech Tag */}
              <div className="hidden sm:flex absolute -bottom-4 -left-5 z-20 items-center gap-2.5 bg-[#1E293B]/95 backdrop-blur-xl border border-slate-700/80 rounded-2xl px-3.5 py-2 shadow-xl animate-float-reverse ring-1 ring-slate-900/20">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-emerald-400 to-[#38BDF8] text-[#0F172A] flex items-center justify-center font-bold text-xs shadow-md shadow-emerald-500/20">
                  <span className="font-mono font-black">TS</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-[#F8FAFC]">Node &amp; Express</p>
                  <p className="text-[10px] text-emerald-400 font-semibold">MERN Backend</p>
                </div>
              </div>

              {/* Color Theme Selector Bar */}
              <div className="mt-4 p-2.5 px-4 rounded-2xl bg-[#1E293B]/90 backdrop-blur-xl border border-slate-700/80 shadow-md flex items-center justify-between gap-2">
                <span className="text-xs font-bold text-[#94A3B8] flex items-center gap-1.5">
                  <HiSparkles className="text-[#38BDF8] text-sm" /> Color Look:
                </span>
                <div className="flex items-center gap-2">
                  {Object.entries(auraThemes).map(([key, theme]) => {
                    const isSelected = auraKey === key;
                    return (
                      <button
                        key={key}
                        onClick={() => setAuraKey(key)}
                        title={theme.name}
                        className={`group relative p-1 rounded-xl transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? "bg-[#0F172A] shadow-sm scale-110 ring-2 ring-[#38BDF8]"
                            : "hover:bg-slate-700/50 opacity-70 hover:opacity-100"
                        }`}
                      >
                        <span
                          className={`block w-4 h-4 rounded-full bg-gradient-to-tr ${theme.color}`}
                        ></span>
                      </button>
                    );
                  })}
                </div>
                <span className="text-[11px] font-bold text-[#38BDF8]">
                  {currentAura.name}
                </span>
              </div>
            </div>
          ) : (
            /* =================== TERMINAL CODE MATRIX =================== */
            <div className="relative w-full max-w-[420px]">
              <div className="relative bg-[#1E293B] backdrop-blur-2xl rounded-2xl shadow-2xl border border-slate-700/80 overflow-hidden text-left">
                {/* Terminal Window Header */}
                <div className="bg-[#0F172A] px-4 py-3 flex items-center justify-between border-b border-slate-700/80">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/90"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500/90"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500/90"></div>
                  </div>
                  <span className="text-xs text-[#94A3B8] font-mono">
                    DeveloperProfile.jsx
                  </span>
                  <div className="w-12"></div>
                </div>

                {/* Code Content matching Resume */}
                <div className="p-5 font-mono text-xs sm:text-sm text-slate-300 leading-relaxed overflow-x-auto">
                  <p>
                    <span className="text-[#818CF8]">const</span>{" "}
                    <span className="text-[#38BDF8]">developer</span> = &#123;
                  </p>
                  <p className="pl-4">
                    <span className="text-[#94A3B8]">name:</span>{" "}
                    <span className="text-emerald-400">"Md Naim Hasan"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-[#94A3B8]">role:</span>{" "}
                    <span className="text-[#38BDF8]">"MERN Stack Intern"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-[#94A3B8]">institute:</span>{" "}
                    <span className="text-[#818CF8]">"DIPTI &amp; Programming Hero"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-[#94A3B8]">skills:</span> [
                  </p>
                  <p className="pl-8 text-amber-300">
                    "React", "Next.js", "TypeScript", "Node.js", "MongoDB"
                  </p>
                  <p className="pl-4">],</p>
                  <p className="pl-4">
                    <span className="text-[#94A3B8]">location:</span>{" "}
                    <span className="text-emerald-400">"Nilphamari, Bangladesh"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-[#94A3B8]">availableImmediately:</span>{" "}
                    <span className="text-[#38BDF8]">true</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-[#94A3B8]">codeQuality:</span>{" "}
                    <span className="text-emerald-400">"Clean &amp; Component-Driven"</span>
                  </p>
                  <p>&#125;;</p>

                  <div className="mt-4 pt-3 border-t border-slate-700/80 text-xs text-[#94A3B8] flex items-center justify-between">
                    <span className="text-emerald-400 flex items-center gap-1 font-semibold">
                      &#10003; Open for Junior / Entry-Level Roles
                    </span>
                    <span className="text-[#94A3B8] font-mono">Ready to join</span>
                  </div>
                </div>
              </div>

              {/* Floating Glass Pill Badges */}
              <div className="absolute -bottom-5 -left-4 bg-[#1E293B] border border-slate-700/80 rounded-2xl p-3.5 shadow-xl flex items-center gap-3 ring-1 ring-slate-900/50">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#38BDF8] to-[#818CF8] text-[#0F172A] flex items-center justify-center font-bold text-lg shadow-md">
                  2+
                </div>
                <div>
                  <p className="text-xs font-bold text-[#F8FAFC]">
                    Featured Projects
                  </p>
                  <p className="text-[11px] text-[#94A3B8]">
                    FitLog &amp; Bazar Dor Live
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;