import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
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
import Magnetic from "./Magnetic";

const EASE_OUT = [0.16, 1, 0.3, 1];
const BASE_DELAY = 1.25; // aligns with the page loader exit

const auraThemes = {
  neonMist: {
    name: "Neon Mist",
    color: "from-neon to-electric",
    ringGradient: "from-neon via-electric to-card",
    glowClass: "from-neon/25 via-electric/20 to-neon/10",
    accentDot: "bg-neon",
  },
  cyberCyan: {
    name: "Cyber Cyan",
    color: "from-cyan-400 to-sky-500",
    ringGradient: "from-cyan-400 via-sky-500 to-card",
    glowClass: "from-cyan-400/25 via-sky-500/20 to-transparent",
    accentDot: "bg-cyan-400",
  },
  electricViolet: {
    name: "Electric Violet",
    color: "from-vio to-[#C4B5FD]",
    ringGradient: "from-vio via-[#C4B5FD] to-card",
    glowClass: "from-vio/25 via-[#C4B5FD]/15 to-transparent",
    accentDot: "bg-vio",
  },
  matrixEmerald: {
    name: "Matrix Emerald",
    color: "from-emerald-400 to-teal-500",
    ringGradient: "from-emerald-400 via-teal-500 to-card",
    glowClass: "from-emerald-400/25 via-teal-500/20 to-transparent",
    accentDot: "bg-emerald-400",
  },
  plasmaMagenta: {
    name: "Plasma Magenta",
    color: "from-fuchsia-400 to-rose-500",
    ringGradient: "from-fuchsia-400 via-rose-500 to-card",
    glowClass: "from-fuchsia-400/25 via-rose-500/20 to-transparent",
    accentDot: "bg-fuchsia-400",
  },
};

const heroStack = [
  { name: "React.js", Icon: FaReact, color: "text-neon", border: "hover:border-neon" },
  { name: "Next.js", Icon: SiNextdotjs, color: "text-white", border: "hover:border-fg/60" },
  { name: "TypeScript", Icon: SiTypescript, color: "text-electric", border: "hover:border-electric" },
  { name: "Node.js", Icon: FaNodeJs, color: "text-emerald-400", border: "hover:border-emerald-400" },
  { name: "Express.js", Icon: SiExpress, color: "text-muted", border: "hover:border-muted" },
  { name: "MongoDB", Icon: SiMongodb, color: "text-green-400", border: "hover:border-green-400" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "text-neon", border: "hover:border-neon" },
  { name: "Git & GitHub", Icon: FaGitAlt, color: "text-orange-400", border: "hover:border-orange-400" },
];

/** Staggered word-by-word reveal for the animated headline */
const RevealWords = ({ words, className = "", wordClassName = "" }) => (
  <span className={className}>
    {words.map((word, i) => (
      <motion.span
        key={`${word}-${i}`}
        className={`inline-block ${wordClassName}`}
        initial={{ opacity: 0, y: "0.8em", rotateX: -45 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{
          duration: 0.7,
          delay: BASE_DELAY + i * 0.09,
          ease: EASE_OUT,
        }}
        style={{ transformOrigin: "top center", willChange: "transform, opacity" }}
      >
        {word}
        {i < words.length - 1 ? "\u00A0" : ""}
      </motion.span>
    ))}
  </span>
);

const Hero = () => {
  const [activeTab, setActiveTab] = useState("photo");
  const [auraKey, setAuraKey] = useState("neonMist");
  const currentAura = auraThemes[auraKey];

  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] items-center justify-center overflow-hidden px-6 pb-16 pt-28 md:px-12"
    >
      {/* Ambient glow orbs */}
      <div className="pointer-events-none absolute -z-10 top-16 left-1/4 h-[30rem] w-[30rem] rounded-full bg-gradient-to-tr from-neon/10 to-vio/10 blur-3xl animate-aura-pulse" />
      <div className="pointer-events-none absolute -z-10 bottom-10 right-1/4 h-[26rem] w-[26rem] rounded-full bg-gradient-to-bl from-electric/10 via-vio/10 to-transparent blur-3xl" />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-12">
        {/* ─────────── Left Column ─────────── */}
        <div className="space-y-6 lg:col-span-7">
          {/* Glass status badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: BASE_DELAY, ease: EASE_OUT }}
            className="glass inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-xs font-semibold text-neon sm:text-sm shadow-glow-neon"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            <span>Available for Hire • Full Stack Developer</span>
          </motion.div>

          {/* Headline */}
          <h1 className="font-display text-4xl font-black leading-tight tracking-tight text-fg sm:text-5xl lg:text-6xl">
            <motion.span
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: BASE_DELAY + 0.15, ease: EASE_OUT }}
              className="mb-1 block text-lg text-muted sm:text-xl"
            >
              Hello, I am
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: BASE_DELAY + 0.25, ease: EASE_OUT }}
              className="block"
            >
              Md Naim Hasan
            </motion.span>
            <span className="sr-only"> - Full stack developer Naim | MERN developer Naim</span>
            <span className="mt-1 block">
              <RevealWords
                words={["Full", "Stack", "Web", "Developer"]}
                className="block"
                wordClassName="text-gradient"
              />
            </span>
          </h1>

          {/* Recruiter-friendly description */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: BASE_DELAY + 0.55, ease: EASE_OUT }}
            className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
          >
          Motivated full-stack web developer with hands-on project experience in
          modern JavaScript-based web development. Building maintainable,
          responsive, and user-friendly applications with{" "}
            <span className="font-semibold text-fg">React.js</span>,{" "}
            <span className="font-semibold text-neon">Next.js</span>,{" "}
            <span className="font-semibold text-vio">TypeScript</span>, and{" "}
            <span className="font-semibold text-neon">MongoDB</span> — turning
            ambitious ideas into polished digital experiences.
          </motion.p>

          {/* Action buttons — magnetic */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: BASE_DELAY + 0.7, ease: EASE_OUT }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <Magnetic>
              <Link
                to="/resume"
                className="group relative inline-flex cursor-pointer items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-gradient-to-r from-neon via-electric to-vio px-7 py-3.5 text-sm font-bold text-ink shadow-lg shadow-neon/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-neon/30 sm:text-base animate-gradient-shift"
              >
                <span
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                  aria-hidden="true"
                />
                <HiDocumentText className="text-xl text-ink" />
                <span>View Resume / CV</span>
              </Link>
            </Magnetic>

            <Magnetic strength={0.25}>
              <a
                href="#projects"
                className="glass glow-border inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-fg shadow-sm transition-all duration-300 hover:text-neon hover:shadow-md sm:text-base"
              >
                <span>Explore Projects</span>
                <HiArrowRight className="text-base" />
              </a>
            </Magnetic>

            <a
              href="#contact"
              className="inline-flex items-center justify-center px-4 py-3.5 text-sm font-semibold text-muted transition hover:text-neon"
            >
              Get in Touch &rarr;
            </a>
          </motion.div>

          {/* Core tech stack badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: BASE_DELAY + 0.85, ease: EASE_OUT }}
            className="border-t border-line pt-5"
          >
            <p className="mb-3 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-muted">
              <HiSparkles className="text-neon" /> Core Tech Stack
            </p>
            <div className="flex flex-wrap items-center gap-2.5 text-xs sm:text-sm">
              {heroStack.map(({ name, Icon, color, border }) => (
                <span
                  key={name}
                  className={`glass inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 font-semibold text-fg shadow-xs transition-all ${border}`}
                >
                  <Icon className={`text-base ${color}`} />
                  {name}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ─────────── Right Column ─────────── */}
        <div className="relative flex flex-col items-center lg:col-span-5">
          {/* Showcase control switcher */}
          <div className="glass-strong mb-5 inline-flex items-center rounded-2xl p-1.5 shadow-lg">
            <button
              type="button"
              onClick={() => setActiveTab("photo")}
              className={`flex cursor-pointer items-center gap-2 rounded-xl px-4 py-1.5 text-xs font-bold transition-all sm:text-sm ${
                activeTab === "photo"
                  ? "bg-panel text-neon ring-1 ring-neon/40 shadow-sm"
                  : "text-muted hover:bg-panel/50 hover:text-fg"
              }`}
            >
              <HiPhotograph className="text-base text-neon" />
              <span>Portrait Showcase</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("code")}
              className={`flex cursor-pointer items-center gap-2 rounded-xl px-4 py-1.5 text-xs font-bold transition-all sm:text-sm ${
                activeTab === "code"
                  ? "bg-panel text-neon ring-1 ring-neon/40 shadow-sm"
                  : "text-muted hover:bg-panel/50 hover:text-fg"
              }`}
            >
              <HiCode className="text-base text-vio" />
              <span>Code Matrix</span>
            </button>
          </div>

          {activeTab === "photo" ? (
            <>
              {/* Floating 3D tech elements around the card */}
              <motion.div
                aria-hidden="true"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: BASE_DELAY + 0.9, duration: 0.6, ease: EASE_OUT }}
                className="hidden sm:flex absolute -top-7 -right-6 z-20 items-center gap-2.5 rounded-2xl glass-strong px-3.5 py-2 shadow-xl animate-float-gentle"
                style={{ transform: "perspective(600px) rotateY(-10deg)" }}
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-tr from-neon to-vio font-bold text-sm text-ink shadow-md shadow-neon/25">
                  <FaReact className="text-lg text-ink" />
                </div>
                <div>
                  <p className="text-xs font-bold text-fg">React &amp; Next.js</p>
                  <p className="text-[10px] text-muted">Component Driven</p>
                </div>
              </motion.div>

              <motion.div
                aria-hidden="true"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: BASE_DELAY + 1.05, duration: 0.6, ease: EASE_OUT }}
                className="hidden sm:flex absolute -bottom-5 -left-6 z-20 items-center gap-2.5 rounded-2xl glass-strong px-3.5 py-2 shadow-xl animate-float-reverse"
                style={{ transform: "perspective(600px) rotateY(12deg)" }}
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-tr from-emerald-400 to-neon font-bold text-xs text-ink shadow-md shadow-emerald-500/20">
                  <span className="font-mono font-black">TS</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-fg">Node &amp; Express</p>
                  <p className="text-[10px] font-semibold text-emerald-400">Full-Stack API</p>
                </div>
              </motion.div>

              {/* Portrait card */}
              <div className="group relative w-full max-w-[360px] sm:max-w-[400px]">
                <div
                  className={`pointer-events-none absolute -inset-4 animate-aura-pulse rounded-[38px] bg-gradient-to-tr blur-2xl transition-all duration-700 sm:-inset-6 ${currentAura.glowClass}`}
                />
                <div
                  className={`relative rounded-[30px] bg-gradient-to-b p-[2.5px] shadow-2xl ${currentAura.ringGradient}`}
                >
                  <div className="relative overflow-hidden rounded-[27.5px] bg-card">
                    <div className="relative aspect-[4/5] w-full overflow-hidden bg-panel">
                      <img
                        src={profileImg}
                        alt="Developer Naim - Md Naim Hasan Full Stack Web Developer"
                        className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        loading="eager"
                      />
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-card via-card/70 to-transparent" />

                      <div className="pointer-events-none absolute left-4 right-4 top-4 flex items-center justify-between">
                        <div className="inline-flex items-center gap-2 rounded-full border border-line bg-panel/85 px-3 py-1.5 text-xs font-semibold text-fg shadow-lg backdrop-blur-md">
                          <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                          </span>
                          <span>Available for Work</span>
                        </div>
                        <div className="inline-flex items-center gap-1.5 rounded-full border border-neon/40 bg-card/90 px-3 py-1.5 text-xs font-bold text-neon shadow-lg backdrop-blur-md">
                          <FaReact className="text-neon" />
                          <span>Full Stack</span>
                        </div>
                      </div>

                      <div className="absolute inset-x-3 bottom-3 rounded-2xl border border-line bg-panel/90 p-3.5 text-fg shadow-xl backdrop-blur-xl">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="flex items-center gap-1.5 text-base font-bold leading-tight text-fg sm:text-lg">
                              Md Naim Hasan
                              <HiCheckCircle className="text-base text-neon" />
                            </h3>
                            <p className="mt-0.5 flex items-center gap-1 text-xs font-medium text-muted">
                              <HiLocationMarker className="text-neon" />
                              Kishoreganj, Bangladesh
                            </p>
                          </div>
                          <span className="rounded-lg border border-line bg-card px-2.5 py-1 font-mono text-xs font-bold text-neon">
                            @DIPTI
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Color theme selector */}
                <div className="glass-strong mt-4 flex items-center justify-between gap-2 rounded-2xl px-4 p-2.5 shadow-md">
                  <span className="flex items-center gap-1.5 text-xs font-bold text-muted">
                    <HiSparkles className="text-sm text-neon" /> Aura:
                  </span>
                  <div className="flex items-center gap-2">
                    {Object.entries(auraThemes).map(([key, theme]) => {
                      const isSelected = auraKey === key;
                      return (
                        <button
                          key={key}
                          type="button"
                          onClick={() => setAuraKey(key)}
                          title={theme.name}
                          aria-label={`Switch aura theme to ${theme.name}`}
                          className={`group relative cursor-pointer rounded-xl p-1 transition-all duration-200 ${
                            isSelected
                              ? "scale-110 bg-panel shadow-sm ring-2 ring-neon"
                              : "opacity-70 hover:opacity-100 hover:bg-line/40"
                          }`}
                        >
                          <span className={`block h-4 w-4 rounded-full bg-gradient-to-tr ${theme.color}`} />
                        </button>
                      );
                    })}
                  </div>
                  <span className="text-[11px] font-bold text-neon">{currentAura.name}</span>
                </div>
              </div>
            </>
          ) : (
            /* =================== Code Matrix =================== */
            <div className="relative w-full max-w-[420px]">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE_OUT }}
                className="glass-strong relative overflow-hidden rounded-2xl shadow-2xl text-left"
              >
                <div className="flex items-center justify-between border-b border-line bg-panel px-4 py-3">
                  <div className="flex gap-2">
                    <div className="h-3 w-3 rounded-full bg-rose-500/90" />
                    <div className="h-3 w-3 rounded-full bg-amber-500/90" />
                    <div className="h-3 w-3 rounded-full bg-emerald-500/90" />
                  </div>
                  <span className="font-mono text-xs text-muted">DeveloperProfile.jsx</span>
                  <div className="w-12" />
                </div>

                <div className="overflow-x-auto p-5 font-mono text-xs leading-relaxed text-fg/80 sm:text-sm">
                  <p>
                    <span className="text-vio">const</span>{" "}
                    <span className="text-neon">developer</span> = &#123;
                  </p>
                  <p className="pl-4">
                    <span className="text-muted">name:</span>{" "}
                    <span className="text-emerald-400">"Md Naim Hasan"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-muted">role:</span>{" "}
                    <span className="text-neon">"Full Stack Web Developer"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-muted">institute:</span>{" "}
                    <span className="text-vio">"DIPTI &amp; Programming Hero"</span>,
                  </p>
                  <p className="pl-4"><span className="text-muted">skills:</span> [</p>
                  <p className="pl-8 text-amber-300">
                    "React", "Next.js", "TypeScript", "Node.js", "MongoDB"
                  </p>
                  <p className="pl-4">],</p>
                  <p className="pl-4">
                    <span className="text-muted">location:</span>{" "}
                    <span className="text-emerald-400">"Nilphamari, Bangladesh"</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-muted">availableImmediately:</span>{" "}
                    <span className="text-neon">true</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-muted">codeQuality:</span>{" "}
                    <span className="text-emerald-400">"Clean &amp; Component-Driven"</span>
                  </p>
                  <p>&#125;;</p>

                  <div className="mt-4 flex items-center justify-between border-t border-line pt-3 text-xs text-muted">
                    <span className="flex items-center gap-1 font-semibold text-emerald-400">
                      &#10003; Open for Junior / Entry-Level Roles
                    </span>
                    <span className="font-mono">Ready to join</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.35, duration: 0.5, ease: EASE_OUT }}
                className="absolute -bottom-5 -left-4 flex items-center gap-3 rounded-2xl glass-strong p-3.5 shadow-xl flex items-center"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-neon to-vio text-lg font-bold text-ink shadow-md">
                  5+
                </div>
                <div>
                  <p className="text-xs font-bold text-fg">Featured Projects</p>
                  <p className="text-[11px] text-muted">FixMate &amp; StudioSpace Live</p>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
