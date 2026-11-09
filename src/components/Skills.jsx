import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaNpm,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiVite,
  SiPostman,
  SiVercel,
} from "react-icons/si";
import {
  HiOutlineCode,
  HiOutlineServer,
  HiOutlineDatabase,
  HiOutlineTerminal,
  HiOutlineSparkles,
  HiOutlineKey,
  HiOutlineDeviceMobile,
} from "react-icons/hi";
import SectionHeader from "./SectionHeader";

const categories = [
  { id: "all", name: "All Skills" },
  { id: "frontend", name: "Frontend", icon: HiOutlineCode },
  { id: "backend", name: "Backend", icon: HiOutlineServer },
  { id: "database", name: "Database & Auth", icon: HiOutlineDatabase },
  { id: "tools", name: "Tools & Deploy", icon: HiOutlineTerminal },
];

const skillsData = [
  // Frontend Development
  {
    name: "React.js",
    category: "frontend",
    icon: FaReact,
    accent: "text-neon",
    badge: "Proficient",
    description: "Component architecture, Hooks, React Router, Context API, SPA state",
  },
  {
    name: "Next.js",
    category: "frontend",
    icon: SiNextdotjs,
    accent: "text-fg",
    badge: "Learning & Projects",
    description: "Server components, App Router, SSR/SSG, optimized performance",
  },
  {
    name: "TypeScript",
    category: "frontend",
    icon: SiTypescript,
    accent: "text-electric",
    badge: "Familiar",
    description: "Type safety, interfaces, strict generics, props validation",
  },
  {
    name: "JavaScript (ES6+)",
    category: "frontend",
    icon: FaJsSquare,
    accent: "text-amber-400",
    badge: "Proficient",
    description: "Async/Await, Promises, Array methods, closures, DOM manipulation",
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    icon: SiTailwindcss,
    accent: "text-cyan-400",
    badge: "Proficient",
    description: "Modern utility classes, glassmorphism, responsive design, dark mode",
  },
  {
    name: "HTML5 & Semantic Markup",
    category: "frontend",
    icon: FaHtml5,
    accent: "text-orange-400",
    badge: "Advanced",
    description: "Semantic elements, accessible structures (a11y), clean document tree",
  },
  {
    name: "CSS3 & Animations",
    category: "frontend",
    icon: FaCss3Alt,
    accent: "text-sky-400",
    badge: "Advanced",
    description: "Flexbox, CSS Grid, media queries, smooth keyframe animations",
  },
  {
    name: "Responsive Web Design",
    category: "frontend",
    icon: HiOutlineDeviceMobile,
    accent: "text-vio",
    badge: "Proficient",
    description: "Mobile-first layouts, fluid viewports, cross-device compatibility",
  },

  // Backend Development
  {
    name: "Node.js",
    category: "backend",
    icon: FaNodeJs,
    accent: "text-emerald-400",
    badge: "MERN Intern",
    description: "Runtime environment, event loop, asynchronous non-blocking I/O",
  },
  {
    name: "Express.js",
    category: "backend",
    icon: SiExpress,
    accent: "text-muted",
    badge: "MERN Intern",
    description: "Routing, custom middleware, error handlers, RESTful API endpoints",
  },
  {
    name: "REST APIs",
    category: "backend",
    icon: HiOutlineServer,
    accent: "text-electric",
    badge: "Working Knowledge",
    description: "HTTP status codes, request/response lifecycle, JSON serialization",
  },
  {
    name: "CRUD Operations",
    category: "backend",
    icon: HiOutlineDatabase,
    accent: "text-lilac",
    badge: "Working Knowledge",
    description: "Create, Read, Update, Delete data flows with proper validations",
  },

  // Database & Authentication
  {
    name: "MongoDB",
    category: "database",
    icon: SiMongodb,
    accent: "text-emerald-400",
    badge: "MERN Stack",
    description: "NoSQL document collections, querying, indexing, data modeling",
  },
  {
    name: "Database Operations",
    category: "database",
    icon: HiOutlineDatabase,
    accent: "text-teal-400",
    badge: "MERN Stack",
    description: "Schema design, data persistence, sanitization, filtering",
  },
  {
    name: "Better Auth & Auth Flows",
    category: "database",
    icon: HiOutlineKey,
    accent: "text-amber-400",
    badge: "Learning & Practice",
    description: "Authentication patterns, token handling, protected route patterns",
  },

  // Tools & Technologies
  {
    name: "Git & GitHub",
    category: "tools",
    icon: FaGitAlt,
    accent: "text-orange-400",
    badge: "Daily Use",
    description: "Feature branches, commits, pull requests, version control",
  },
  {
    name: "Vite",
    category: "tools",
    icon: SiVite,
    accent: "text-vio",
    badge: "Daily Use",
    description: "Fast HMR, optimized build configurations, asset bundling",
  },
  {
    name: "npm",
    category: "tools",
    icon: FaNpm,
    accent: "text-rose-400",
    badge: "Daily Use",
    description: "Package management, script automation, dependency resolution",
  },
  {
    name: "Postman",
    category: "tools",
    icon: SiPostman,
    accent: "text-orange-400",
    badge: "API Testing",
    description: "API testing, headers inspection, body payload validation",
  },
  {
    name: "Vercel & Netlify",
    category: "tools",
    icon: SiVercel,
    accent: "text-fg",
    badge: "Deployment",
    description: "Continuous deployment from Git, environment variables, hosting",
  },
];

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills =
    activeCategory === "all"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeCategory);

  return (
    <section
      id="skills"
      className="relative mx-auto max-w-7xl overflow-hidden px-6 py-24 md:px-12"
    >
      <div className="pointer-events-none absolute -z-10 right-10 top-20 h-96 w-96 rounded-full bg-neon/5 blur-3xl" />
      <div className="pointer-events-none absolute -z-10 bottom-10 left-10 h-96 w-96 rounded-full bg-vio/5 blur-3xl" />

      <SectionHeader
        icon={HiOutlineSparkles}
        eyebrow="Technical Expertise"
        title="Skills &"
        highlight="Technologies"
        description="The core tools, languages, and frameworks I use to build modern full-stack and frontend applications."
      />

      {/* Category filter */}
      <div className="flex flex-wrap items-center justify-center gap-2 pb-10">
        <div className="glass-strong flex flex-wrap items-center justify-center gap-1 rounded-full p-1.5 shadow-inner">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategory(category.id)}
                className={`relative inline-flex cursor-pointer items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200 sm:text-sm ${
                  isActive
                    ? "text-ink font-bold"
                    : "text-muted hover:text-fg"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="skills-active-tab"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-neon to-vio shadow-md shadow-neon/25"
                  />
                )}
                <span className="relative z-10 inline-flex items-center gap-2">
                  {Icon && <Icon className="text-base" />}
                  <span>{category.name}</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Skills grid with animated insertion/removal */}
      <motion.div
        layout
        className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, y: 22, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="glass glow-border group flex flex-col justify-between rounded-2xl p-5 shadow-xl"
              >
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div
                    className={`rounded-xl border border-line bg-panel p-3 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5 ${skill.accent}`}
                    style={{ filter: "drop-shadow(0 0 12px rgba(34,211,238,0.12))" }}
                  >
                    <Icon className="text-2xl" />
                  </div>
                  <span className="rounded-full border border-neon/30 bg-panel px-2.5 py-0.5 text-[11px] font-bold text-neon shadow-xs">
                    {skill.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-extrabold text-fg transition-colors group-hover:text-neon">
                    {skill.name}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted">
                    {skill.description}
                  </p>
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-line/60 pt-3 text-[11px] font-semibold uppercase tracking-wider text-muted">
                  <span>{skill.category}</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-neon/40 transition-colors group-hover:bg-neon" />
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Skills;
