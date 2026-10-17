import { Link } from "react-router-dom";
import projects from "../data/projects";
import { HiExternalLink, HiArrowRight, HiOutlineSparkles } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 right-1/4 w-[30rem] h-[30rem] bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 left-1/4 w-[30rem] h-[30rem] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/70 backdrop-blur-xl border border-blue-200/70 text-blue-700 text-xs font-bold uppercase tracking-wider shadow-xs">
          <HiOutlineSparkles className="text-blue-600 text-sm" />
          <span>My Featured Work</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500">Projects</span>
        </h2>

        <p className="text-base sm:text-lg text-slate-600">
          Real-world web applications built with modern frontend and full-stack technologies, showcasing responsive UI patterns and clean component architecture.
        </p>
      </div>

      {/* Frosted Glass Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative bg-white/75 hover:bg-white/95 backdrop-blur-2xl rounded-3xl border border-white/90 hover:border-blue-400/60 shadow-[0_10px_35px_-5px_rgba(0,0,0,0.06)] hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden ring-1 ring-slate-900/5 hover:-translate-y-1.5"
          >
            {/* Card Thumbnail Container */}
            <div className="relative aspect-video w-full overflow-hidden bg-slate-100 border-b border-slate-100">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              {project.category && (
                <span className="absolute top-3.5 left-3.5 bg-slate-900/80 backdrop-blur-md text-white text-[11px] font-semibold px-3 py-1 rounded-full shadow-md border border-white/20">
                  {project.category}
                </span>
              )}
            </div>

            {/* Card Body */}
            <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
              <div className="space-y-3">
                <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 text-xs font-semibold rounded-lg bg-blue-50/90 text-blue-700 border border-blue-200/60"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-0.5 text-xs font-semibold rounded-lg bg-slate-100 text-slate-600">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                <Link
                  to={`/projects/${project.id}`}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-700 transition"
                >
                  <span>Details &amp; Tech</span>
                  <HiArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                </Link>

                <div className="flex items-center gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="View Source Code on GitHub"
                      className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 rounded-xl transition"
                    >
                      <FaGithub className="text-lg" />
                    </a>
                  )}

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Open Live Demo"
                      className="inline-flex items-center gap-1 px-3.5 py-1.5 text-xs font-bold rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/25 hover:shadow-lg transition-all active:scale-95"
                    >
                      <span>Live Demo</span>
                      <HiExternalLink className="text-sm" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Github Note */}
      <div className="mt-14 text-center">
        <p className="text-sm text-slate-500">
          Want to see more code repositories and ongoing projects? Check out my{" "}
          <a
            href="https://github.com/mdnaimhasanofficial-glitch"
            target="_blank"
            rel="noreferrer"
            className="font-bold text-blue-600 hover:underline inline-flex items-center gap-1"
          >
            GitHub profile <HiExternalLink />
          </a>
        </p>
      </div>
    </section>
  );
};

export default Projects;
