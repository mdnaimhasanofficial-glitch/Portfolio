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
    <section id="education" className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden bg-[#0F172A]">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-[#38BDF8]/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-[#818CF8]/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E293B] border border-[#38BDF8]/30 text-[#38BDF8] text-xs font-bold uppercase tracking-wider shadow-sm">
          <HiOutlineAcademicCap className="text-[#38BDF8] text-sm" />
          <span>Academic Background</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F8FAFC] tracking-tight">
          Education &amp;{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#38BDF8]">
            Credentials
          </span>
        </h2>

        <p className="text-base sm:text-lg text-[#94A3B8]">
          My formal educational background in Computer Technology and specialized industry credentials.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Education Degree Cards (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          <h3 className="text-xl font-extrabold text-[#F8FAFC] flex items-center gap-2.5 mb-2">
            <FaGraduationCap className="text-[#38BDF8]" />
            <span>Academic Qualifications</span>
          </h3>

          {educationHistory.map((edu, idx) => (
            <div
              key={idx}
              className="bg-[#1E293B] rounded-3xl border border-slate-700/70 hover:border-[#38BDF8]/60 shadow-xl transition-all duration-300 p-6 sm:p-8 space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <div>
                  <h4 className="text-lg font-extrabold text-[#F8FAFC]">
                    {edu.degree}
                  </h4>
                  <p className="text-sm font-bold text-[#38BDF8] mt-0.5">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-[#94A3B8] flex items-center gap-1 mt-1">
                    <HiOutlineLocationMarker className="text-[#38BDF8]" />
                    <span>{edu.location}</span>
                  </p>
                </div>

                <div className="flex flex-col sm:items-end gap-1">
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-400 bg-[#0F172A] px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                    <HiOutlineBadgeCheck className="text-emerald-400" />
                    {edu.status}
                  </span>
                  <span className="text-xs font-semibold text-[#94A3B8]">
                    {edu.grade}
                  </span>
                </div>
              </div>

              <p className="text-sm text-[#94A3B8] leading-relaxed">
                {edu.description}
              </p>

              {/* Coursework pills */}
              <div className="pt-3 border-t border-slate-700/60">
                <span className="text-xs font-bold text-[#94A3B8] block mb-2 uppercase">
                  Key Coursework:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {edu.coursework.map((course, cIdx) => (
                    <span
                      key={cIdx}
                      className="px-2.5 py-0.5 text-xs font-medium rounded-lg bg-[#0F172A] text-[#38BDF8] border border-slate-700"
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
          <h3 className="text-xl font-extrabold text-[#F8FAFC] flex items-center gap-2.5 mb-2">
            <FaCertificate className="text-[#818CF8]" />
            <span>Professional Training</span>
          </h3>

          <div className="space-y-4">
            {certifications.map((cert, cIdx) => (
              <div
                key={cIdx}
                className="bg-[#1E293B] rounded-3xl border border-slate-700/70 hover:border-[#818CF8]/60 p-6 shadow-xl transition-all duration-300 space-y-2"
              >
                <div className="flex items-center justify-between gap-2">
                  <h4 className="text-base font-extrabold text-[#F8FAFC]">
                    {cert.title}
                  </h4>
                  <span className="text-xs font-bold text-[#818CF8] bg-[#0F172A] px-2.5 py-0.5 rounded-full border border-slate-700">
                    {cert.year}
                  </span>
                </div>

                <p className="text-xs font-bold text-[#38BDF8]">
                  {cert.issuer}
                </p>

                <p className="text-xs text-[#94A3B8] leading-relaxed pt-1">
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
