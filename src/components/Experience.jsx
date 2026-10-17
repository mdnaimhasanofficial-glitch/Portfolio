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
    <section id="experience" className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/70 backdrop-blur-xl border border-blue-200/70 text-blue-700 text-xs font-bold uppercase tracking-wider shadow-xs">
          <HiOutlineSparkles className="text-blue-600 text-sm" />
          <span>Internship &amp; Training</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
          Experience &amp;{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500">
            Training
          </span>
        </h2>

        <p className="text-base sm:text-lg text-slate-600">
          Practical industry training, internship experience, and hands-on software development education.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Timeline Cards (8 Cols) */}
        <div className="lg:col-span-8 space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative bg-white/75 hover:bg-white/95 backdrop-blur-2xl rounded-3xl border border-white/90 hover:border-blue-300 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.05)] hover:shadow-xl transition-all duration-300 p-6 sm:p-8 ring-1 ring-slate-900/5"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900">
                    {exp.role}
                  </h3>
                  <p className="text-base font-bold text-blue-600 mt-0.5">
                    {exp.company}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full border ${exp.badgeColor}`}>
                    {exp.type}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 bg-slate-100/80 px-2.5 py-1 rounded-full">
                    <HiOutlineCalendar />
                    {exp.period}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-4">
                <HiOutlineLocationMarker className="text-blue-500" />
                <span>{exp.location}</span>
              </div>

              {/* Responsibilities list */}
              <ul className="space-y-2 mb-6 text-sm text-slate-600">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <HiOutlineCheckCircle className="text-emerald-500 text-lg shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{resp}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack Pills */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-1.5">
                <span className="text-xs font-bold text-slate-400 mr-1 uppercase">Stack:</span>
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-0.5 text-xs font-semibold rounded-lg bg-blue-50/80 text-blue-700 border border-blue-200/50"
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
          <div className="bg-white/70 backdrop-blur-xl rounded-3xl border border-white/80 p-6 shadow-sm space-y-5">
            <h3 className="text-lg font-extrabold text-slate-900 border-b border-slate-100 pb-3">
              Why Work With Me
            </h3>

            {valueProps.map((prop, idx) => {
              const Icon = prop.icon;
              return (
                <div key={idx} className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-500/20">
                    <Icon className="text-lg" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      {prop.title}
                    </h4>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
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
