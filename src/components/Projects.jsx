import { motion } from "motion/react";
import { HiExternalLink, HiOutlineSparkles } from "react-icons/hi";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";
import SectionHeader from "./SectionHeader";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative mx-auto max-w-7xl overflow-hidden px-6 py-24 md:px-12"
    >
      <div className="pointer-events-none absolute -z-10 right-1/4 top-1/4 h-[28rem] w-[28rem] rounded-full bg-neon/5 blur-3xl" />
      <div className="pointer-events-none absolute -z-10 bottom-10 left-1/4 h-[28rem] w-[28rem] rounded-full bg-vio/5 blur-3xl" />

      <SectionHeader
        icon={HiOutlineSparkles}
        eyebrow="My Featured Work"
        title="Featured"
        highlight="Projects"
        description="Real-world web applications built with modern frontend and full-stack technologies — from role-based Next.js dashboards to complete MERN deployments."
      />

      {/* Projects grid with staggered reveal */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.6,
              delay: (index % 3) * 0.12,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>

      {/* Bottom GitHub note */}
      <div className="mt-14 text-center">
        <p className="text-sm text-muted">
          Want to see more code repositories and ongoing projects? Check out my{" "}
          <a
            href="https://github.com/mdnaimhasanofficial-glitch"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 font-bold text-neon hover:underline"
          >
            GitHub profile <HiExternalLink />
          </a>
        </p>
      </div>
    </section>
  );
};

export default Projects;
