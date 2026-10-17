import { useState } from "react";
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
  SiNetlify,
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

const categories = [
  { id: "all", name: "All Skills" },
  { id: "frontend", name: "Frontend", icon: HiOutlineCode },
  { id: "backend", name: "Backend", icon: HiOutlineServer },
  { id: "database", name: "Database & Auth", icon: HiOutlineDatabase },
  { id: "tools", name: "Tools & Deploy", icon: HiOutlineTerminal },
];

const skillsData = [
  // 1. Frontend Development (from Resume)
  {
    name: "React.js",
    category: "frontend",
    icon: FaReact,
    color: "text-cyan-500",
    bg: "bg-cyan-50/80 border-cyan-200/60",
    badge: "Proficient",
    description: "Component architecture, Hooks, React Router, Context API, SPA state",
  },
  {
    name: "Next.js",
    category: "frontend",
    icon: SiNextdotjs,
    color: "text-slate-900",
    bg: "bg-slate-100/80 border-slate-200/60",
    badge: "Learning & Projects",
    description: "Server components, App Router, SSR/SSG, optimized performance",
  },
  {
    name: "TypeScript",
    category: "frontend",
    icon: SiTypescript,
    color: "text-blue-600",
    bg: "bg-blue-50/80 border-blue-200/60",
    badge: "Familiar",
    description: "Type safety, interfaces, strict generics, props validation",
  },
  {
    name: "JavaScript (ES6+)",
    category: "frontend",
    icon: FaJsSquare,
    color: "text-amber-500",
    bg: "bg-amber-50/80 border-amber-200/60",
    badge: "Proficient",
    description: "Async/Await, Promises, Array methods, closures, DOM manipulation",
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    icon: SiTailwindcss,
    color: "text-teal-500",
    bg: "bg-teal-50/80 border-teal-200/60",
    badge: "Proficient",
    description: "Modern utility classes, glassmorphism, responsive design, dark mode",
  },
  {
    name: "HTML5 & Semantic Markup",
    category: "frontend",
    icon: FaHtml5,
    color: "text-orange-500",
    bg: "bg-orange-50/80 border-orange-200/60",
    badge: "Advanced",
    description: "Semantic elements, accessible structures (a11y), clean document tree",
  },
  {
    name: "CSS3 & Animations",
    category: "frontend",
    icon: FaCss3Alt,
    color: "text-blue-500",
    bg: "bg-blue-50/80 border-blue-200/60",
    badge: "Advanced",
    description: "Flexbox, CSS Grid, media queries, smooth keyframe animations",
  },
  {
    name: "Responsive Web Design",
    category: "frontend",
    icon: HiOutlineDeviceMobile,
    color: "text-indigo-500",
    bg: "bg-indigo-50/80 border-indigo-200/60",
    badge: "Proficient",
    description: "Mobile-first layouts, fluid viewports, cross-device compatibility",
  },

  // 2. Backend Development (from Resume)
  {
    name: "Node.js",
    category: "backend",
    icon: FaNodeJs,
    color: "text-emerald-600",
    bg: "bg-emerald-50/80 border-emerald-200/60",
    badge: "MERN Intern",
    description: "Runtime environment, event loop, asynchronous non-blocking I/O",
  },
  {
    name: "Express.js",
    category: "backend",
    icon: SiExpress,
    color: "text-slate-700",
    bg: "bg-slate-100/80 border-slate-200/60",
    badge: "MERN Intern",
    description: "Routing, custom middleware, error handlers, RESTful API endpoints",
  },
  {
    name: "REST APIs",
    category: "backend",
    icon: HiOutlineServer,
    color: "text-blue-600",
    bg: "bg-blue-50/80 border-blue-200/60",
    badge: "Working Knowledge",
    description: "HTTP status codes, request/response lifecycle, JSON serialization",
  },
  {
    name: "CRUD Operations",
    category: "backend",
    icon: HiOutlineDatabase,
    color: "text-violet-600",
    bg: "bg-violet-50/80 border-violet-200/60",
    badge: "Working Knowledge",
    description: "Create, Read, Update, Delete data flows with proper validations",
  },

  // 3. Database & Authentication (from Resume)
  {
    name: "MongoDB",
    category: "database",
    icon: SiMongodb,
    color: "text-emerald-500",
    bg: "bg-emerald-50/80 border-emerald-200/60",
    badge: "MERN Stack",
    description: "NoSQL document collections, querying, indexing, data modeling",
  },
  {
    name: "Database Operations",
    category: "database",
    icon: HiOutlineDatabase,
    color: "text-teal-600",
    bg: "bg-teal-50/80 border-teal-200/60",
    badge: "MERN Stack",
    description: "Schema design, data persistence, sanitization, filtering",
  },
  {
    name: "Better Auth & Auth Flows",
    category: "database",
    icon: HiOutlineKey,
    color: "text-amber-600",
    bg: "bg-amber-50/80 border-amber-200/60",
    badge: "Learning & Practice",
    description: "Authentication patterns, token handling, protected route patterns",
  },

  // 4. Tools & Technologies (from Resume)
  {
    name: "Git & GitHub",
    category: "tools",
    icon: FaGitAlt,
    color: "text-orange-600",
    bg: "bg-orange-50/80 border-orange-200/60",
    badge: "Daily Use",
    description: "Feature branches, commits, pull requests, version control",
  },
  {
    name: "Vite",
    category: "tools",
    icon: SiVite,
    color: "text-purple-600",
    bg: "bg-purple-50/80 border-purple-200/60",
    badge: "Daily Use",
    description: "Fast HMR, optimized build configurations, asset bundling",
  },
  {
    name: "npm",
    category: "tools",
    icon: FaNpm,
    color: "text-red-600",
    bg: "bg-red-50/80 border-red-200/60",
    badge: "Daily Use",
    description: "Package management, script automation, dependency resolution",
  },
  {
    name: "Postman",
    category: "tools",
    icon: SiPostman,
    color: "text-orange-500",
    bg: "bg-orange-50/80 border-orange-200/60",
    badge: "API Testing",
    description: "API testing, headers inspection, body payload validation",
  },
  {
    name: "Vercel & Netlify",
    category: "tools",
    icon: SiVercel,
    color: "text-slate-900",
    bg: "bg-slate-100/80 border-slate-200/60",
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
    <section id="skills" className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden bg-[#0F172A]">
      {/* Background Ambient Glows */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#38BDF8]/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#818CF8]/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E293B] border border-[#38BDF8]/30 text-[#38BDF8] text-xs font-bold uppercase tracking-wider shadow-sm">
          <HiOutlineSparkles className="text-[#38BDF8] text-sm" />
          <span>Technical Expertise</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F8FAFC] tracking-tight">
          Skills &amp;{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#38BDF8]">
            Technologies
          </span>
        </h2>

        <p className="text-base sm:text-lg text-[#94A3B8]">
          The core tools, languages, and frameworks I use to build modern MERN stack and frontend applications.
        </p>

        {/* Capsule Category Filter Tabs */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-2">
          <div className="inline-flex flex-wrap items-center justify-center p-1.5 rounded-full bg-[#1E293B] border border-slate-700/80 shadow-inner gap-1">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-[#38BDF8] to-[#818CF8] text-[#0F172A] font-bold shadow-md shadow-[#38BDF8]/25"
                      : "text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#0F172A]/50"
                  }`}
                >
                  {Icon && <Icon className="text-base" />}
                  <span>{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {filteredSkills.map((skill) => {
          const Icon = skill.icon;
          return (
            <div
              key={skill.name}
              className="group relative bg-[#1E293B] hover:bg-[#1E293B]/95 rounded-2xl border border-slate-700/70 hover:border-[#38BDF8]/60 p-5 shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Card Top */}
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="p-3 rounded-xl border bg-[#0F172A] border-slate-700 text-[#38BDF8] group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  <Icon className="text-2xl text-[#38BDF8]" />
                </div>
                <span className="text-[11px] font-bold text-[#38BDF8] bg-[#0F172A] border border-[#38BDF8]/30 px-2.5 py-0.5 rounded-full shadow-xs">
                  {skill.badge}
                </span>
              </div>

              <div>
                <h3 className="text-base font-extrabold text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors">
                  {skill.name}
                </h3>
                <p className="text-xs text-[#94A3B8] mt-1.5 leading-relaxed">
                  {skill.description}
                </p>
              </div>

              {/* Bottom Subtle Bar */}
              <div className="mt-4 pt-3 border-t border-slate-700/60 flex items-center justify-between text-[11px] text-[#94A3B8] font-semibold uppercase tracking-wider">
                <span>{skill.category}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]/40 group-hover:bg-[#38BDF8] transition-colors"></span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
