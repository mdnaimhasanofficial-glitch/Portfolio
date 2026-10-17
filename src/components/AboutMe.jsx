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
import profileImg from "../assets/profile.jpg";

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
    <section id="about" className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden bg-[#0F172A]">
      {/* Background Glass Glows */}
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-[#38BDF8]/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#818CF8]/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E293B] border border-[#38BDF8]/30 text-[#38BDF8] text-xs font-bold uppercase tracking-wider shadow-sm">
          <HiOutlineUser className="text-[#38BDF8] text-sm" />
          <span>About Me</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F8FAFC] tracking-tight">
          Who I <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#38BDF8]">Am</span>
        </h2>

        <p className="text-base sm:text-lg text-[#94A3B8]">
          A glimpse into my background, hands-on training, and passion for modern web engineering.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Glass Profile Card & Specs */}
        <div className="lg:col-span-5 space-y-6">
          <div className="relative bg-[#1E293B] rounded-3xl border border-slate-700/80 p-6 sm:p-8 shadow-2xl ring-1 ring-slate-900/40">
            {/* Ambient Accent Glow inside card */}
            <div className="w-32 h-32 bg-gradient-to-tr from-[#38BDF8]/15 to-[#818CF8]/15 rounded-full blur-2xl absolute -top-4 -right-4 -z-10"></div>

            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-700/70">
              <div className="relative">
                <div className="w-18 h-18 rounded-2xl p-[2px] bg-gradient-to-tr from-[#38BDF8] via-[#818CF8] to-[#38BDF8] shadow-lg shadow-[#38BDF8]/20 shrink-0">
                  <img
                    src={profileImg}
                    alt="Md Naim Hasan"
                    className="w-full h-full object-cover rounded-[14px]"
                  />
                </div>
                <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-[#1E293B] rounded-full"></span>
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-[#F8FAFC]">Md Naim Hasan</h3>
                <p className="text-sm font-semibold text-[#38BDF8]">MERN Stack Intern</p>
                <div className="flex items-center gap-1.5 text-xs text-[#94A3B8] mt-1">
                  <HiOutlineLocationMarker className="text-[#38BDF8] shrink-0" />
                  <span>Kishoreganj, Nilphamari, Bangladesh</span>
                </div>
              </div>
            </div>

            {/* Quick Specs List with Frosted Styling */}
            <div className="space-y-3 text-sm text-[#94A3B8]">
              <div className="flex items-center justify-between py-2 border-b border-slate-700/60">
                <span className="flex items-center gap-2 text-[#94A3B8] font-medium">
                  <HiOutlineBriefcase className="text-[#38BDF8] text-base" /> Current Role:
                </span>
                <span className="font-bold text-emerald-400 bg-[#0F172A] px-2.5 py-0.5 rounded-full text-xs border border-emerald-500/30">
                  MERN Stack Intern @ DIPTI
                </span>
              </div>

              <div className="flex items-center justify-between py-2 border-b border-slate-700/60">
                <span className="flex items-center gap-2 text-[#94A3B8] font-medium">
                  <FaLaptopCode className="text-[#38BDF8] text-base" /> Training:
                </span>
                <span className="font-semibold text-[#F8FAFC] text-xs sm:text-sm">
                  Programming Hero
                </span>
              </div>

              <div className="flex items-center justify-between py-2 border-b border-slate-700/60">
                <span className="flex items-center gap-2 text-[#94A3B8] font-medium">
                  <HiOutlineAcademicCap className="text-[#38BDF8] text-base" /> Education:
                </span>
                <span className="font-semibold text-[#F8FAFC] text-xs sm:text-sm text-right">
                  Diploma in Computer Tech
                </span>
              </div>

              <div className="flex items-center justify-between py-2 border-b border-slate-700/60">
                <span className="flex items-center gap-2 text-[#94A3B8] font-medium">
                  <HiOutlineTranslate className="text-[#38BDF8] text-base" /> Languages:
                </span>
                <span className="font-semibold text-[#F8FAFC] text-xs sm:text-sm">
                  Bengali (Native), English
                </span>
              </div>
            </div>

            {/* Micro Stats in Glass Pills */}
            <div className="grid grid-cols-3 gap-3 pt-6 mt-6 border-t border-slate-700/70 text-center">
              <div className="p-3 bg-[#0F172A] rounded-2xl border border-slate-700/70 shadow-xs">
                <span className="block text-2xl font-black text-[#38BDF8]">2+</span>
                <span className="text-[11px] text-[#94A3B8] font-semibold">Live Projects</span>
              </div>
              <div className="p-3 bg-[#0F172A] rounded-2xl border border-slate-700/70 shadow-xs">
                <span className="block text-2xl font-black text-[#818CF8]">DIPTI</span>
                <span className="text-[11px] text-[#94A3B8] font-semibold">MERN Intern</span>
              </div>
              <div className="p-3 bg-[#0F172A] rounded-2xl border border-slate-700/70 shadow-xs">
                <span className="block text-2xl font-black text-emerald-400">100%</span>
                <span className="text-[11px] text-[#94A3B8] font-semibold">Dedicated</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Bio Narrative & Strengths */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-4 text-[#94A3B8] leading-relaxed text-base sm:text-lg">
            <h3 className="text-2xl sm:text-3xl font-black text-[#F8FAFC] tracking-tight leading-snug">
              Building responsive, high-performance web applications with modern technologies.
            </h3>
            <p>
              I am <strong className="text-[#F8FAFC]">Md Naim Hasan</strong>, a motivated <strong className="text-[#38BDF8]">MERN Stack Intern</strong> and aspiring full-stack web developer. I am passionate about hands-on web engineering, transforming concepts into scalable, intuitive digital experiences with <strong className="text-[#38BDF8]">React.js</strong>, <strong className="text-[#F8FAFC]">Next.js</strong>, <strong className="text-[#818CF8]">TypeScript</strong>, <strong className="text-[#38BDF8]">Node.js</strong>, and <strong className="text-[#818CF8]">MongoDB</strong>.
            </p>
            <p>
              Currently, I am undertaking intensive MERN Stack internship training at <strong className="text-[#F8FAFC]">Daffodil International Professional Training Institute (DIPTI)</strong> while actively learning modern web technologies with <strong className="text-[#F8FAFC]">Programming Hero</strong>. With a <strong className="text-[#F8FAFC]">Diploma in Engineering in Computer Technology</strong> from UST Private Polytechnic Institute, I blend solid computing principles with modern front-to-back development.
            </p>
          </div>

          {/* Core Strengths Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-4 rounded-2xl bg-[#1E293B] border border-slate-700/70 hover:border-[#38BDF8]/60 shadow-lg hover:shadow-xl transition-all duration-300 flex items-start gap-3.5 group"
                >
                  <div className="p-2.5 rounded-xl border shrink-0 bg-[#0F172A] border-slate-700 text-[#38BDF8] group-hover:scale-105 transition-transform">
                    <Icon className="text-lg" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#94A3B8] mt-1 leading-relaxed">
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
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#38BDF8] to-[#818CF8] hover:from-[#38BDF8] hover:to-[#6366F1] text-[#0F172A] font-bold text-sm shadow-md shadow-[#38BDF8]/20 hover:shadow-lg transition-all"
            >
              <HiDocumentText className="text-lg text-[#0F172A]" />
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
