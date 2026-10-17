
import { Link } from "react-router-dom";
import {
  HiArrowLeft,
  HiPrinter,
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiExternalLink,
} from "react-icons/hi";
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";
import profileImg from "../assets/profile.jpg";

const Resume = () => {
  const handlePrint = () => window.print();

  const skills = [
    {
      title: "Frontend Development",
      items: "HTML5, CSS3, JavaScript (ES6+), TypeScript, React.js, Next.js, Tailwind CSS, Responsive Design",
    },
    {
      title: "Backend Development",
      items: "Node.js, Express.js, REST APIs, CRUD Operations, Authentication",
    },
    {
      title: "Database & Authentication",
      items: "MongoDB, Database Operations, Better Auth (Learning & Implementation)",
    },
    {
      title: "Tools & Technologies",
      items: "Git, GitHub, VS Code, Vite, npm, Postman, Vercel, Netlify",
    },
  ];

  const projects = [
    {
      name: "FitLog — Workout Tracking Application",
      type: "Personal Project",
      link: "https://fit-log-phi-henna.vercel.app/",
      stack: "Web Development",
      description:
        "A workout-focused web application designed to help users explore workout-related content and organize their fitness activities.",
      points: [
        "Developed and deployed a web application with a responsive user interface.",
        "Practiced component-based development and reusable UI patterns.",
        "Applied modern frontend development techniques to build a user-friendly experience.",
      ],
      color: "blue",
    },
    {
      name: "Bazar Dor — Digital Market Price Platform",
      type: "Personal Project",
      link: "https://bazar-dor-utn4.vercel.app/",
      stack: "Web Development",
      description:
        "A web project focused on presenting market price-related information through a digital interface.",
      points: [
        "Built and deployed a web application focused on market price information.",
        "Practiced responsive UI development and structured presentation of information.",
        "Worked on a real-world-inspired project addressing everyday user needs.",
      ],
      color: "emerald",
    },
    {
      name: "Developer Portfolio & Interactive Showcase",
      type: "Personal Project",
      link: "https://portfolio-chi-henna-74.vercel.app/",
      stack: "React.js • Tailwind CSS • Vite • Vercel",
      description:
        "A modern personal portfolio built with React.js and Tailwind CSS featuring a glassmorphic dark slate aesthetic, active scroll spy navigation, and an ATS-friendly printable resume viewer.",
      points: [
        "Engineered an interactive, high-performance portfolio showcasing full-stack capabilities.",
        "Built an ATS-compliant printable resume viewer with responsive layouts.",
        "Deployed with automated CI/CD workflows on Vercel with clean Lighthouse performance.",
      ],
      color: "sky",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0F172A] px-4 py-8 font-sans text-slate-800 sm:px-6 print:bg-white print:p-0">
      {/* Action Bar */}
      <div className="mx-auto mb-6 flex max-w-4xl items-center justify-between gap-3 print:hidden">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-[#1E293B] px-4 py-2.5 text-sm font-semibold text-[#F8FAFC] transition hover:border-[#38BDF8] hover:text-[#38BDF8]"
        >
          <HiArrowLeft />
          Portfolio
        </Link>

        <button
          onClick={handlePrint}
          className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-gradient-to-r from-[#38BDF8] to-[#818CF8] px-4 py-2.5 text-sm font-bold text-[#0F172A] transition hover:opacity-90 shadow-lg shadow-sky-500/20"
        >
          <HiPrinter className="text-lg" />
          Print / Save PDF
        </button>
      </div>

      {/* Resume Sheet */}
      <article className="mx-auto max-w-4xl rounded-xl border border-slate-200 bg-white p-6 shadow-xl sm:p-10 print:max-w-none print:rounded-none print:border-0 print:p-0 print:shadow-none">
        {/* Header */}
        <header className="border-b-2 border-blue-600 pb-5">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div className="flex items-center gap-4">
              <img
                src={profileImg}
                alt="Md Naim Hasan"
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover ring-2 ring-blue-600 shadow-md shrink-0"
              />
              <div>
                <h1 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                  Md Naim Hasan
                </h1>

                <p className="mt-1 text-base sm:text-lg font-bold text-blue-600">
                  MERN Stack Intern | Junior Web Developer
                </p>

                <p className="mt-1 max-w-xl text-xs sm:text-sm leading-5 text-slate-600">
                  Aspiring full-stack developer focused on building responsive
                  web applications with React, Next.js, TypeScript, Node.js,
                  Express.js, and MongoDB.
                </p>
              </div>
            </div>

            <div className="shrink-0 sm:text-right">
              <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700">
                MERN Stack Intern
              </span>
              <p className="mt-2 text-xs text-slate-500">
                Daffodil International Professional Training Institute
                (DIPTI)
              </p>
            </div>
          </div>

          {/* Contact Details
              Replace the example email and phone with your real details.
          */}
          <div className="mt-5 grid grid-cols-1 gap-3 border-t border-slate-200 pt-4 text-sm sm:grid-cols-2 lg:grid-cols-3">
            <a
              href="mailto:mdnaimhasan.official@gmail.com"
              className="flex items-center gap-2 break-all hover:text-blue-600"
            >
              <HiMail className="shrink-0 text-lg text-blue-600" />
              mdnaimhasan.official@gmail.com
            </a>

            <a
              href="tel:+8801616711677"
              className="flex items-center gap-2 hover:text-blue-600"
            >
              <HiPhone className="shrink-0 text-lg text-blue-600" />
              +880 1616711677
            </a>

            <div className="flex items-center gap-2">
              <HiLocationMarker className="shrink-0 text-lg text-blue-600" />
              Kishoreganj, Nilphamari, Bangladesh
            </div>

            <a
              href="https://github.com/mdnaimhasanofficial-glitch"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-blue-600"
            >
              <FaGithub className="text-lg" />
              GitHub Profile
              <HiExternalLink className="print:hidden" />
            </a>

            {/* Replace with your actual LinkedIn profile URL */}
            <a
              href="www.linkedin.com/in/naimhasan706016/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-blue-600"
            >
              <FaLinkedin className="text-lg text-blue-600" />
              LinkedIn Profile
              <HiExternalLink className="print:hidden" />
            </a>

            <Link
              to="/"
              className="flex items-center gap-2 hover:text-blue-600"
            >
              <FaGlobe className="text-lg text-blue-600" />
              Portfolio Website
            </Link>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="mt-6">
          <SectionTitle>Professional Summary</SectionTitle>

          <p className="text-sm leading-6 text-slate-700">
            Motivated MERN Stack Intern and aspiring full-stack web developer
            with hands-on project experience in modern JavaScript-based web
            development. Familiar with React.js, Next.js, TypeScript,
            Tailwind CSS, Node.js, Express.js, and MongoDB. Interested in
            building maintainable, responsive, and user-friendly applications.
            Eager to strengthen problem-solving skills, learn industry
            practices, and contribute to collaborative software development
            projects.
          </p>
        </section>

        {/* Skills */}
        <section className="mt-6">
          <SectionTitle>Technical Skills</SectionTitle>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {skills.map((skill) => (
              <div
                key={skill.title}
                className="rounded-lg border border-slate-200 bg-slate-50 p-3"
              >
                <h3 className="mb-1 text-sm font-bold text-slate-900">
                  {skill.title}
                </h3>
                <p className="text-sm leading-5 text-slate-600">
                  {skill.items}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mt-6">
          <SectionTitle>Experience & Training</SectionTitle>

          <div className="border-l-2 border-blue-600 pl-4">
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-start">
              <div>
                <h3 className="font-bold text-slate-900">
                  MERN Stack Intern
                </h3>
                <p className="text-sm font-medium text-blue-700">
                  Daffodil International Professional Training Institute
                  (DIPTI)
                </p>
              </div>

              <span className="text-sm font-semibold text-slate-500">
                Present
              </span>
            </div>

            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-5 text-slate-700">
              <li>
                Currently undertaking MERN Stack internship training and
                developing practical web development skills.
              </li>
              <li>
                Building on existing knowledge of React, JavaScript,
                TypeScript, and modern frontend development.
              </li>
              <li>
                Strengthening backend, database, API integration, and
                full-stack application development skills.
              </li>
            </ul>
          </div>

          <div className="mt-4 border-l-2 border-indigo-500 pl-4">
            <h3 className="font-bold text-slate-900">
              Web Development Training
            </h3>
            <p className="text-sm font-medium text-indigo-700">
              Programming Hero
            </p>
            <p className="mt-1 text-sm leading-5 text-slate-700">
              Learning modern web development through practical exercises
              and projects, covering JavaScript, TypeScript, React, Next.js,
              and related frontend technologies.
            </p>
          </div>
        </section>

        {/* Projects */}
        <section className="mt-6">
          <SectionTitle>Featured Projects</SectionTitle>

          <div className="space-y-5">
            {projects.map((project) => (
              <div
                key={project.name}
                className="border-l-2 border-blue-600 pl-4"
              >
                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                  <div>
                    <h3 className="font-bold text-slate-900">
                      {project.name}
                    </h3>
                    <p className="mt-1 text-xs font-medium text-slate-500">
                      {project.type}
                    </p>
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-blue-600 hover:underline"
                  >
                    Live Project <HiExternalLink />
                  </a>
                </div>

                <p className="mt-2 text-sm leading-5 text-slate-700">
                  {project.description}
                </p>

                <p className="mt-2 text-xs font-semibold text-slate-500">
                  Live: {project.link}
                </p>

                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-5 text-slate-700">
                  {project.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mt-6">
          <SectionTitle>Education</SectionTitle>

          <div className="flex flex-col justify-between gap-2 sm:flex-row">
            <div>
              <h3 className="font-bold text-slate-900">
                Diploma in Engineering — Computer Technology
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                UST Private Polytechnic Institute
              </p>
              <p className="text-sm text-slate-600">
                Nilphamari, Bangladesh
              </p>
            </div>
            <span className="text-sm font-medium text-slate-500">
              Completed
            </span>
          </div>

          <div className="mt-4">
            <h3 className="font-bold text-slate-900">
              SSC / Dakhil
            </h3>
            <p className="mt-1 text-sm text-slate-600">
              GPA: 3.94
            </p>
          </div>
        </section>

        {/* Additional Information */}
        <section className="mt-6">
          <SectionTitle>Additional Information</SectionTitle>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <h3 className="mb-1 text-sm font-bold text-slate-900">
                Languages
              </h3>
              <p className="text-sm text-slate-700">
                Bengali — Native
                <br />
                English — Basic to Intermediate
              </p>
            </div>

            <div>
              <h3 className="mb-1 text-sm font-bold text-slate-900">
                Professional Interests
              </h3>
              <p className="text-sm leading-5 text-slate-700">
                Full-Stack Development, REST API Development, Database
                Design, Responsive Web Applications, and Problem Solving.
              </p>
            </div>
          </div>
        </section>

        <footer className="mt-7 border-t border-slate-200 pt-3 text-center text-xs text-slate-400">
          Md Naim Hasan | MERN Stack Intern & Junior Web Developer
        </footer>
      </article>

      {/* Print Styles */}
      <style>{`
        @page {
          size: A4;
          margin: 12mm;
        }

        @media print {
          html,
          body {
            background: #fff !important;
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }

          body {
            font-size: 10pt;
          }

          article {
            width: 100%;
          }

          section,
          header,
          footer {
            break-inside: avoid;
          }

          a {
            color: inherit;
            text-decoration: none;
          }

          button {
            display: none !important;
          }

          .print\\:hidden {
            display: none !important;
          }

          * {
            box-shadow: none !important;
          }
        }
      `}</style>
    </main>
  );
};

function SectionTitle({ children }) {
  return (
    <h2 className="mb-3 flex items-center gap-2 border-b border-slate-200 pb-2 text-base font-extrabold uppercase tracking-wide text-slate-900">
      <span className="h-5 w-1 rounded-full bg-blue-600" />
      {children}
    </h2>
  );
}

export default Resume;
