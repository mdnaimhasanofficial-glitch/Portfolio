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
  chroma: {
    name: "Dynamic Chroma",
    color: "from-cyan-400 via-indigo-500 to-pink-500",
    ringClass:
      "bg-[conic-gradient(from_0deg,#38bdf8,#818cf8,#c084fc,#f472b6,#34d399,#38bdf8)] animate-spin-slow animate-dynamic-hue",
    glowClass:
      "bg-gradient-to-tr from-cyan-500/40 via-purple-500/35 to-pink-500/35 animate-aura-pulse animate-dynamic-hue",
    badgeGlow: "shadow-cyan-500/25",
    accentDot: "bg-gradient-to-r from-cyan-400 to-pink-500",
    buttonRing: "ring-cyan-400",
  },
  cyber: {
    name: "Cyber Cyan",
    color: "from-cyan-400 to-blue-600",
    ringClass:
      "bg-[conic-gradient(from_0deg,#06b6d4,#3b82f6,#6366f1,#06b6d4)] animate-spin-slow",
    glowClass:
      "bg-gradient-to-tr from-cyan-500/40 to-blue-600/40 animate-aura-pulse",
    badgeGlow: "shadow-cyan-500/30",
    accentDot: "bg-cyan-500",
    buttonRing: "ring-cyan-500",
  },
  purple: {
    name: "Neon Violet",
    color: "from-purple-500 to-pink-500",
    ringClass:
      "bg-[conic-gradient(from_0deg,#a855f7,#ec4899,#6366f1,#a855f7)] animate-spin-slow",
    glowClass:
      "bg-gradient-to-tr from-purple-500/40 to-pink-500/40 animate-aura-pulse",
    badgeGlow: "shadow-purple-500/30",
    accentDot: "bg-purple-500",
    buttonRing: "ring-purple-500",
  },
  emerald: {
    name: "Matrix Emerald",
    color: "from-emerald-400 to-teal-600",
    ringClass:
      "bg-[conic-gradient(from_0deg,#10b981,#14b8a6,#06b6d4,#10b981)] animate-spin-slow",
    glowClass:
      "bg-gradient-to-tr from-emerald-500/40 to-teal-500/40 animate-aura-pulse",
    badgeGlow: "shadow-emerald-500/30",
    accentDot: "bg-emerald-500",
    buttonRing: "ring-emerald-500",
  },
  sunset: {
    name: "Sunset Flare",
    color: "from-amber-400 to-rose-600",
    ringClass:
      "bg-[conic-gradient(from_0deg,#f59e0b,#ef4444,#ec4899,#f59e0b)] animate-spin-slow",
    glowClass:
      "bg-gradient-to-tr from-amber-500/40 to-rose-500/40 animate-aura-pulse",
    badgeGlow: "shadow-amber-500/30",
    accentDot: "bg-amber-500",
    buttonRing: "ring-amber-500",
  },
};

const Hero = () => {
  const [activeTab, setActiveTab] = useState("photo"); // 'photo' | 'code'
  const [auraKey, setAuraKey] = useState("chroma");

  const currentAura = auraThemes[auraKey];

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
            Motivated MERN Stack Intern and aspiring full-stack web developer
            with hands-on project experience in modern JavaScript-based web
            development. Building maintainable, responsive, and user-friendly
            applications with{" "}
            <span className="text-slate-900 font-semibold">React.js</span>,{" "}
            <span className="text-slate-900 font-semibold">Next.js</span>,{" "}
            <span className="text-slate-900 font-semibold">TypeScript</span>, and{" "}
            <span className="text-slate-900 font-semibold">MongoDB</span>.
          </p>

          {/* Action Buttons */}
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

        {/* Right Column: Visual Photo Card with Dynamic Color Changing Aura & Code Toggle */}
        <div className="lg:col-span-5 relative flex flex-col items-center">
          {/* Showcase Control Switcher (Portrait vs Terminal Code) */}
          <div className="mb-4 inline-flex items-center bg-white/80 backdrop-blur-xl p-1.5 rounded-2xl border border-slate-200/90 shadow-md">
            <button
              onClick={() => setActiveTab("photo")}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "photo"
                  ? "bg-slate-900 text-white shadow-md shadow-slate-900/20"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              <HiPhotograph className="text-base text-cyan-400" />
              <span>Portrait Showcase</span>
            </button>
            <button
              onClick={() => setActiveTab("code")}
              className={`flex items-center gap-2 px-4 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "code"
                  ? "bg-slate-900 text-white shadow-md shadow-slate-900/20"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              <HiCode className="text-base text-emerald-400" />
              <span>Code Matrix</span>
            </button>
          </div>

          {activeTab === "photo" ? (
            /* =================== PHOTO SPOTLIGHT WITH CHANGING COLOR AURA =================== */
            <div className="relative w-full max-w-[380px] sm:max-w-[420px] group">
              {/* Dynamic Aura Glow behind image */}
              <div
                className={`absolute -inset-4 sm:-inset-6 rounded-[36px] blur-2xl pointer-events-none transition-all duration-700 ${currentAura.glowClass}`}
              ></div>

              {/* Rotating Chromatic Gradient Border Ring */}
              <div
                className={`relative p-[3.5px] rounded-[32px] overflow-hidden shadow-2xl transition-all duration-500 ${currentAura.ringClass}`}
              >
                {/* Inner Card Container */}
                <div className="relative bg-slate-950 rounded-[29px] overflow-hidden">
                  {/* Photo with subtle zoom on hover */}
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-900">
                    <img
                      src={profileImg}
                      alt="Md Naim Hasan - MERN Stack Developer"
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Subtle aesthetic gradient overlay at bottom for text contrast */}
                    <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent pointer-events-none"></div>

                    {/* Top Status Badges inside photo */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/85 backdrop-blur-md border border-white/20 text-white text-xs font-semibold shadow-lg">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span>Available for Work</span>
                      </div>

                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-600/85 backdrop-blur-md border border-blue-400/40 text-white text-xs font-bold shadow-lg shadow-blue-500/30">
                        <FaReact className="animate-spin-slow text-cyan-200" />
                        <span>MERN Developer</span>
                      </div>
                    </div>

                    {/* Bottom Info Bar inside card */}
                    <div className="absolute bottom-4 inset-x-4 p-4 rounded-2xl bg-slate-900/85 backdrop-blur-xl border border-white/15 text-white shadow-xl">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-bold text-lg leading-tight flex items-center gap-1.5">
                            Md Naim Hasan
                            <HiCheckCircle className="text-cyan-400 text-base" />
                          </h3>
                          <p className="text-xs text-slate-300 font-medium flex items-center gap-1 mt-0.5">
                            <HiLocationMarker className="text-blue-400" />
                            Kishoreganj, Bangladesh
                          </p>
                        </div>
                        <span className="px-2.5 py-1 rounded-lg bg-white/10 text-cyan-300 text-xs font-mono font-semibold border border-white/10">
                          @DIPTI
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Pill 1: Top-Right Floating Tech Tag */}
              <div className="hidden sm:flex absolute -top-5 -right-6 z-20 items-center gap-2.5 bg-white/90 backdrop-blur-xl border border-white/90 rounded-2xl px-4 py-2.5 shadow-xl animate-float-gentle ring-1 ring-slate-900/5">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 text-white flex items-center justify-center font-bold text-sm shadow-md shadow-blue-500/25">
                  <FaReact className="text-lg animate-spin-slow" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">React &amp; Next.js</p>
                  <p className="text-[10px] text-slate-500">Component Driven</p>
                </div>
              </div>

              {/* Floating Pill 2: Bottom-Left Floating Stats Tag */}
              <div className="hidden sm:flex absolute -bottom-6 -left-6 z-20 items-center gap-2.5 bg-white/90 backdrop-blur-xl border border-white/90 rounded-2xl px-4 py-2.5 shadow-xl animate-float-reverse ring-1 ring-slate-900/5">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-600 text-white flex items-center justify-center font-black text-sm shadow-md shadow-emerald-500/25">
                  100%
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">MERN Stack Intern</p>
                  <p className="text-[10px] text-emerald-600 font-semibold">Active &amp; Ready</p>
                </div>
              </div>

              {/* Interactive Color Changing Aura Selector */}
              <div className="mt-5 p-3 rounded-2xl bg-white/80 backdrop-blur-xl border border-slate-200/80 shadow-lg flex items-center justify-between gap-2">
                <span className="text-xs font-bold text-slate-600 flex items-center gap-1.5 pl-1">
                  <HiSparkles className="text-blue-600 text-sm" /> Aura Theme:
                </span>
                <div className="flex items-center gap-1.5">
                  {Object.entries(auraThemes).map(([key, theme]) => {
                    const isSelected = auraKey === key;
                    return (
                      <button
                        key={key}
                        onClick={() => setAuraKey(key)}
                        title={theme.name}
                        className={`group relative p-1 rounded-xl transition-all duration-300 cursor-pointer ${
                          isSelected
                            ? "bg-slate-900 text-white shadow-md scale-105 ring-2 ring-blue-500/50"
                            : "hover:bg-slate-100 text-slate-600"
                        }`}
                      >
                        <span
                          className={`block w-4 h-4 rounded-full bg-gradient-to-tr ${theme.color}`}
                        ></span>
                      </button>
                    );
                  })}
                </div>
                <span className="text-[11px] font-semibold text-slate-500 pr-1">
                  {currentAura.name}
                </span>
              </div>
            </div>
          ) : (
            /* =================== TERMINAL CODE MATRIX =================== */
            <div className="relative w-full max-w-[420px]">
              <div className="relative bg-slate-900/95 backdrop-blur-2xl rounded-2xl shadow-[0_25px_60px_-15px_rgba(15,23,42,0.35)] border border-slate-700/60 overflow-hidden text-left">
                {/* Terminal Window Header */}
                <div className="bg-slate-800/80 px-4 py-3 flex items-center justify-between border-b border-slate-700/60">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/90"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500/90"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500/90"></div>
                  </div>
                  <span className="text-xs text-slate-400 font-mono">
                    DeveloperProfile.jsx
                  </span>
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
                  <p className="text-xs font-bold text-slate-900">
                    Featured Projects
                  </p>
                  <p className="text-[11px] text-slate-500">
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