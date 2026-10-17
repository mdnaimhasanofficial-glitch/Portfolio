import { Link } from "react-router-dom";
import {
  HiOutlineUser,
  HiOutlineLocationMarker,
  HiOutlineBriefcase,
  HiOutlineAcademicCap,
  HiOutlineTranslate,
  HiOutlineCheckCircle,
  HiDocumentText,
  HiArrowRight,
} from "react-icons/hi";
import { FaLaptopCode, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiTypescript } from "react-icons/si";
import heroImg from "../assets/hero.png";

const AboutMe = () => {
  const highlights = [
    {
      title: "Component-Driven Frontend",
      desc: "Crafting fluid, pixel-perfect user interfaces with React.js, Next.js, and Tailwind CSS.",
      icon: FaReact,
      color: "text-cyan-500 bg-cyan-50/80 border-cyan-200/60",
    },
    {
      title: "Backend & RESTful APIs",
      desc: "Developing backend routes, middleware, and database operations with Node.js, Express, and MongoDB.",
      icon: FaNodeJs,
      color: "text-emerald-500 bg-emerald-50/80 border-emerald-200/60",
    },
    {
      title: "Type Safety & Best Practices",
      desc: "Writing clean, maintainable code using TypeScript, modern JavaScript (ES6+), and structured patterns.",
      icon: SiTypescript,
      color: "text-blue-500 bg-blue-50/80 border-blue-200/60",
    },
    {
      title: "Fast Learner & Adaptable",
      desc: "Eager to learn industry practices, strengthen problem-solving, and contribute to collaborative teams.",
      icon: FaLaptopCode,
      color: "text-indigo-500 bg-indigo-50/80 border-indigo-200/60",
    },
  ];

  return (
    <section id="about" className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* Background Glass Glows */}
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/70 backdrop-blur-xl border border-blue-200/70 text-blue-700 text-xs font-bold uppercase tracking-wider shadow-xs">
          <HiOutlineUser className="text-blue-600 text-sm" />
          <span>About Me</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
          Who I <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500">Am</span>
        </h2>

        <p className="text-base sm:text-lg text-slate-600">
          A glimpse into my background, hands-on training, and passion for modern web engineering.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Glass Profile Card & Specs */}
        <div className="lg:col-span-5 space-y-6">
          <div className="relative bg-white/75 backdrop-blur-2xl rounded-3xl border border-white/90 p-6 sm:p-8 shadow-[0_15px_35px_-5px_rgba(0,0,0,0.06)] ring-1 ring-slate-900/5">
            {/* Ambient Accent Glow inside card */}
            <div className="w-32 h-32 bg-gradient-to-tr from-blue-500/15 to-indigo-500/15 rounded-full blur-2xl absolute -top-4 -right-4 -z-10"></div>

            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-100">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/25 shrink-0 ring-2 ring-white/50">
                <img
                  src={heroImg}
                  alt="Md Naim Hasan"
                  className="w-10 h-10 object-contain brightness-200"
                />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-slate-900">Md Naim Hasan</h3>
                <p className="text-sm font-semibold text-blue-600">MERN Stack Intern</p>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-1">
                  <HiOutlineLocationMarker className="text-blue-500 shrink-0" />
                  <span>Kishoreganj, Nilphamari, Bangladesh</span>
                </div>
              </div>
            </div>

            {/* Quick Specs List with Frosted Styling */}
            <div className="space-y-3 text-sm text-slate-600">
              <div className="flex items-center justify-between py-2 border-b border-slate-100/80">
                <span className="flex items-center gap-2 text-slate-500 font-medium">
                  <HiOutlineBriefcase className="text-blue-600 text-base" /> Current Role:
                </span>
                <span className="font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full text-xs border border-emerald-200/60">
                  MERN Stack Intern @ DIPTI
                </span>
              </div>

              <div className="flex items-center justify-between py-2 border-b border-slate-100/80">
                <span className="flex items-center gap-2 text-slate-500 font-medium">
                  <FaLaptopCode className="text-blue-600 text-base" /> Training:
                </span>
                <span className="font-semibold text-slate-800 text-xs sm:text-sm">
                  Programming Hero
                </span>
              </div>

              <div className="flex items-center justify-between py-2 border-b border-slate-100/80">
                <span className="flex items-center gap-2 text-slate-500 font-medium">
                  <HiOutlineAcademicCap className="text-blue-600 text-base" /> Education:
                </span>
                <span className="font-semibold text-slate-800 text-xs sm:text-sm text-right">
                  Diploma in Computer Tech
                </span>
              </div>

              <div className="flex items-center justify-between py-2 border-b border-slate-100/80">
                <span className="flex items-center gap-2 text-slate-500 font-medium">
                  <HiOutlineTranslate className="text-blue-600 text-base" /> Languages:
                </span>
                <span className="font-semibold text-slate-800 text-xs sm:text-sm">
                  Bengali (Native), English
                </span>
              </div>
            </div>

            {/* Micro Stats in Glass Pills */}
            <div className="grid grid-cols-3 gap-3 pt-6 mt-6 border-t border-slate-100 text-center">
              <div className="p-3 bg-white/70 backdrop-blur-md rounded-2xl border border-slate-100 shadow-xs">
                <span className="block text-2xl font-black text-blue-600">2+</span>
                <span className="text-[11px] text-slate-500 font-semibold">Live Projects</span>
              </div>
              <div className="p-3 bg-white/70 backdrop-blur-md rounded-2xl border border-slate-100 shadow-xs">
                <span className="block text-2xl font-black text-indigo-600">DIPTI</span>
                <span className="text-[11px] text-slate-500 font-semibold">MERN Intern</span>
              </div>
              <div className="p-3 bg-white/70 backdrop-blur-md rounded-2xl border border-slate-100 shadow-xs">
                <span className="block text-2xl font-black text-emerald-600">100%</span>
                <span className="text-[11px] text-slate-500 font-semibold">Dedicated</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Bio Narrative & Strengths */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-4 text-slate-600 leading-relaxed text-base sm:text-lg">
            <h3 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight leading-snug">
              Building responsive, high-performance web applications with modern technologies.
            </h3>
            <p>
              I am <strong>Md Naim Hasan</strong>, a motivated <strong>MERN Stack Intern</strong> and aspiring full-stack web developer. I am passionate about hands-on web engineering, transforming concepts into scalable, intuitive digital experiences with <strong>React.js</strong>, <strong>Next.js</strong>, <strong>TypeScript</strong>, <strong>Node.js</strong>, and <strong>MongoDB</strong>.
            </p>
            <p>
              Currently, I am undertaking intensive MERN Stack internship training at <strong>Daffodil International Professional Training Institute (DIPTI)</strong> while actively learning modern web technologies with <strong>Programming Hero</strong>. With a <strong>Diploma in Engineering in Computer Technology</strong> from UST Private Polytechnic Institute, I blend solid computing principles with modern front-to-back development.
            </p>
          </div>

          {/* Core Strengths Glass Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-4 rounded-2xl bg-white/70 backdrop-blur-xl border border-white/80 hover:border-blue-300 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-md transition-all duration-300 flex items-start gap-3.5 group"
                >
                  <div className={`p-2.5 rounded-xl border shrink-0 ${item.color} group-hover:scale-105 transition-transform`}>
                    <Icon className="text-lg" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Action Link to Resume */}
          <div className="pt-2 flex items-center gap-4">
            <Link
              to="/resume"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md shadow-blue-500/20 hover:shadow-lg transition-all"
            >
              <HiDocumentText className="text-lg" />
              <span>Read Full Resume</span>
              <HiArrowRight className="text-sm" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
