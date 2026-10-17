import {
  HiOutlineBriefcase,
  HiOutlineCalendar,
  HiOutlineLocationMarker,
  HiOutlineCheckCircle,
  HiOutlineSparkles,
} from "react-icons/hi";
import { FaLaptopCode, FaRocket, FaGraduationCap } from "react-icons/fa";

const experiences = [
  {
    role: "MERN Stack Intern",
    company: "Daffodil International Professional Training Institute (DIPTI)",
    location: "Dhaka / Hybrid, Bangladesh",
    period: "Present",
    type: "Professional Internship",
    badgeColor: "bg-emerald-50/90 text-emerald-700 border-emerald-200/60",
    responsibilities: [
      "Currently undertaking MERN Stack internship training and developing practical web development skills.",
      "Building on existing knowledge of React.js, JavaScript (ES6+), TypeScript, and modern frontend development.",
      "Strengthening backend, database, API integration, and full-stack application development skills.",
      "Collaborating on real-world projects following clean coding standards and Git version control workflows.",
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "TypeScript", "REST APIs", "Git"],
  },
  {
    role: "Web Development Training",
    company: "Programming Hero",
    location: "Online / Practical Coursework",
    period: "Ongoing",
    type: "Intensive Web Engineering",
    badgeColor: "bg-blue-50/90 text-blue-700 border-blue-200/60",
    responsibilities: [
      "Learning modern web development through comprehensive practical exercises and hands-on projects.",
      "Covering core JavaScript algorithms, TypeScript fundamentals, React ecosystem, and Next.js modern patterns.",
      "Building responsive frontend UIs with Tailwind CSS and integrating asynchronous client-side state.",
      "Engaging in problem-solving challenges and structured assignments.",
    ],
    technologies: ["JavaScript (ES6+)", "TypeScript", "React", "Next.js", "Tailwind CSS", "Vite"],
  },
];

const valueProps = [
  {
    icon: FaLaptopCode,
    title: "MERN Stack Foundations",
    desc: "Hands-on experience developing both frontend client experiences and backend server routes.",
  },
  {
    icon: FaRocket,
    title: "Continuous Learner",
    desc: "Actively training at DIPTI & Programming Hero to keep pace with modern engineering standards.",
  },
  {
    icon: FaGraduationCap,
    title: "Technical Background",
    desc: "Diploma in Computer Technology providing strong computing and analytical problem-solving foundation.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden bg-[#0F172A]">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-[#38BDF8]/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-[#818CF8]/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E293B] border border-[#38BDF8]/30 text-[#38BDF8] text-xs font-bold uppercase tracking-wider shadow-sm">
          <HiOutlineSparkles className="text-[#38BDF8] text-sm" />
          <span>Internship &amp; Training</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F8FAFC] tracking-tight">
          Experience &amp;{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#38BDF8]">
            Training
          </span>
        </h2>

        <p className="text-base sm:text-lg text-[#94A3B8]">
          Practical industry training, internship experience, and hands-on software development education.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Timeline Cards (8 Cols) */}
        <div className="lg:col-span-8 space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative bg-[#1E293B] rounded-3xl border border-slate-700/70 hover:border-[#38BDF8]/60 shadow-xl transition-all duration-300 p-6 sm:p-8"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                <div>
                  <h3 className="text-xl font-extrabold text-[#F8FAFC]">
                    {exp.role}
                  </h3>
                  <p className="text-base font-bold text-[#38BDF8] mt-0.5">
                    {exp.company}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold px-3 py-1 rounded-full border bg-[#0F172A] text-emerald-400 border-emerald-500/30">
                    {exp.type}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#94A3B8] bg-[#0F172A] px-2.5 py-1 rounded-full border border-slate-700">
                    <HiOutlineCalendar className="text-[#38BDF8]" />
                    {exp.period}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-[#94A3B8] mb-4">
                <HiOutlineLocationMarker className="text-[#38BDF8]" />
                <span>{exp.location}</span>
              </div>

              {/* Responsibilities list */}
              <ul className="space-y-2 mb-6 text-sm text-[#94A3B8]">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <HiOutlineCheckCircle className="text-[#38BDF8] text-lg shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{resp}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack Pills */}
              <div className="pt-4 border-t border-slate-700/60 flex flex-wrap items-center gap-1.5">
                <span className="text-xs font-bold text-[#94A3B8] mr-1 uppercase">Stack:</span>
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-0.5 text-xs font-semibold rounded-lg bg-[#0F172A] text-[#38BDF8] border border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right Column: Value Props Cards (4 Cols) */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-[#1E293B] rounded-3xl border border-slate-700/80 p-6 shadow-xl space-y-5">
            <h3 className="text-lg font-extrabold text-[#F8FAFC] border-b border-slate-700/70 pb-3">
              Why Work With Me
            </h3>

            {valueProps.map((prop, idx) => {
              const Icon = prop.icon;
              return (
                <div key={idx} className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#38BDF8] to-[#818CF8] text-[#0F172A] flex items-center justify-center shrink-0 shadow-md">
                    <Icon className="text-lg text-[#0F172A]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#F8FAFC]">
                      {prop.title}
                    </h4>
                    <p className="text-xs text-[#94A3B8] mt-1 leading-relaxed">
                      {prop.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
