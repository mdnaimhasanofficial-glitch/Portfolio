import {
  HiOutlineAcademicCap,
  HiOutlineCalendar,
  HiOutlineLocationMarker,
  HiOutlineBadgeCheck,
} from "react-icons/hi";
import { FaGraduationCap, FaCertificate } from "react-icons/fa";

const educationHistory = [
  {
    degree: "Diploma in Engineering — Computer Technology",
    institution: "UST Private Polytechnic Institute",
    location: "Nilphamari, Bangladesh",
    period: "Completed",
    grade: "Completed with Distinction",
    status: "Graduated",
    description:
      "Gained comprehensive practical and theoretical foundation in computer systems, programming algorithms, database management, and software engineering principles.",
    coursework: [
      "Computer Programming & Algorithms",
      "Database Management Systems (DBMS)",
      "Web Development Fundamentals",
      "Operating Systems & Computer Architecture",
      "Data Communication & Networking",
    ],
  },
  {
    degree: "Secondary School Certificate (SSC / Dakhil)",
    institution: "Madrasah / High School",
    location: "Nilphamari, Bangladesh",
    period: "Completed",
    grade: "GPA: 3.94 / 5.00",
    status: "Graduated",
    description:
      "Successfully completed secondary education with a strong analytical focus in science and general studies.",
    coursework: ["General Science", "Mathematics", "ICT & Computer Studies", "Languages"],
  },
];

const certifications = [
  {
    title: "MERN Stack Internship & Training",
    issuer: "Daffodil International Professional Training Institute (DIPTI)",
    year: "Present",
    desc: "Hands-on professional internship focusing on React, Node.js, Express, MongoDB, and full-stack API architectures.",
  },
  {
    title: "Complete Web Development Course",
    issuer: "Programming Hero",
    year: "Ongoing",
    desc: "Intensive training covering modern JavaScript, TypeScript, React.js, Next.js, and real-world web application development.",
  },
];

const Education = () => {
  return (
    <section id="education" className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/70 backdrop-blur-xl border border-blue-200/70 text-blue-700 text-xs font-bold uppercase tracking-wider shadow-xs">
          <HiOutlineAcademicCap className="text-blue-600 text-sm" />
          <span>Academic Background</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
          Education &amp;{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500">
            Credentials
          </span>
        </h2>

        <p className="text-base sm:text-lg text-slate-600">
          My formal educational background in Computer Technology and specialized industry credentials.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Education Degree Cards (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-2.5 mb-2">
            <FaGraduationCap className="text-blue-600" />
            <span>Academic Qualifications</span>
          </h3>

          {educationHistory.map((edu, idx) => (
            <div
              key={idx}
              className="bg-white/75 hover:bg-white/95 backdrop-blur-2xl rounded-3xl border border-white/90 hover:border-blue-300 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.05)] hover:shadow-xl transition-all duration-300 p-6 sm:p-8 ring-1 ring-slate-900/5 space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <div>
                  <h4 className="text-lg font-extrabold text-slate-900">
                    {edu.degree}
                  </h4>
                  <p className="text-sm font-bold text-blue-600 mt-0.5">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                    <HiOutlineLocationMarker className="text-blue-500" />
                    <span>{edu.location}</span>
                  </p>
                </div>

                <div className="flex flex-col sm:items-end gap-1">
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    <HiOutlineBadgeCheck className="text-emerald-500" />
                    {edu.status}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    {edu.grade}
                  </span>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {edu.description}
              </p>

              {/* Coursework pills */}
              <div className="pt-3 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-400 block mb-2 uppercase">
                  Key Coursework:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {edu.coursework.map((course, cIdx) => (
                    <span
                      key={cIdx}
                      className="px-2.5 py-0.5 text-xs font-medium rounded-lg bg-slate-100 text-slate-700 border border-slate-200/60"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column: Training & Credentials (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-2.5 mb-2">
            <FaCertificate className="text-indigo-600" />
            <span>Professional Training</span>
          </h3>

          <div className="space-y-4">
            {certifications.map((cert, cIdx) => (
              <div
                key={cIdx}
                className="bg-white/70 hover:bg-white/90 backdrop-blur-xl rounded-3xl border border-white/80 hover:border-indigo-300 p-6 shadow-sm transition-all duration-300 space-y-2 ring-1 ring-slate-900/5"
              >
                <div className="flex items-center justify-between gap-2">
                  <h4 className="text-base font-extrabold text-slate-900">
                    {cert.title}
                  </h4>
                  <span className="text-xs font-bold text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-200">
                    {cert.year}
                  </span>
                </div>

                <p className="text-xs font-bold text-blue-600">
                  {cert.issuer}
                </p>

                <p className="text-xs text-slate-500 leading-relaxed pt-1">
                  {cert.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
