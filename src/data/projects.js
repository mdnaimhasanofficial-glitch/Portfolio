import project1 from "../assets/projects/project01.png";
import project2 from "../assets/projects/project02.png";
import project3 from "../assets/projects/project03.png";

const projects = [
  {
    id: 1,
    title: "FitLog — Workout Tracking Application",
    image: project2,
    category: "Personal Project • Health & Fitness",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "JavaScript (ES6+)",
      "Responsive Design",
      "Vercel"
    ],
    description:
      "A workout-focused web application designed to help users explore workout-related content and organize their fitness activities with an intuitive, responsive interface.",
    live: "https://fit-log-phi-henna.vercel.app/",
    github: "https://github.com/mdnaimhasanofficial-glitch",
    challenges: [
      "Developed and deployed a web application with a responsive user interface.",
      "Practiced component-based development and reusable UI patterns.",
      "Applied modern frontend development techniques to build a user-friendly experience."
    ],
    future: [
      "Custom workout routine builder with personalized exercise timers",
      "User authentication and personal workout progress dashboard",
      "Integration with fitness activity tracking REST APIs"
    ],
  },
  {
    id: 2,
    title: "Bazar Dor — Digital Market Price Platform",
    image: project1,
    category: "Personal Project • Market Price & Commerce",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "JavaScript (ES6+)",
      "REST APIs",
      "Vercel"
    ],
    description:
      "A web project focused on presenting market price-related information through a clean digital interface, addressing real-world everyday commodity pricing needs.",
    live: "https://bazar-dor-utn4.vercel.app/",
    github: "https://github.com/mdnaimhasanofficial-glitch",
    challenges: [
      "Built and deployed a web application focused on market price information.",
      "Practiced responsive UI development and structured presentation of information.",
      "Worked on a real-world-inspired project addressing everyday user needs."
    ],
    future: [
      "Real-time market price fluctuation charts and historical trend analytics",
      "District-wise commodity price comparison and filter system",
      "Crowdsourced price reporting and verification system"
    ],
  },
  {
    id: 3,
    title: "Developer Portfolio & Interactive Showcase",
    image: project3,
    category: "Personal Project • Modern Portfolio & ATS Resume",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "JavaScript (ES6+)",
      "React Router",
      "Vite",
      "Vercel"
    ],
    description:
      "A modern, high-performance personal portfolio built to showcase MERN stack and frontend engineering skills, featuring glassmorphism design, active scroll spy, custom slate color palette, and an ATS-friendly printable resume viewer.",
    live: "https://portfolio-chi-henna-74.vercel.app/",
    github: "https://github.com/mdnaimhasanofficial-glitch",
    challenges: [
      "Crafted an ATS-compatible, print-optimized resume stylesheet in React.",
      "Engineered clean modern design system with curated slate dark palette and micro-interactions.",
      "Ensured fluid responsiveness across ultra-wide monitors down to small mobile viewports."
    ],
    future: [
      "Interactive blog section powered by markdown rendering",
      "Full-stack contact form with automated email notification via Node.js",
      "Internationalization (i18n) support for multiple languages"
    ],
  },
];

export default projects;
