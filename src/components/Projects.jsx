import { Link } from "react-router-dom";
import projects from "../data/projects";
import { HiExternalLink, HiArrowRight, HiOutlineSparkles } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden bg-[#0F172A]"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 right-1/4 w-[30rem] h-[30rem] bg-[#38BDF8]/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 left-1/4 w-[30rem] h-[30rem] bg-[#818CF8]/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E293B] border border-[#38BDF8]/30 text-[#38BDF8] text-xs font-bold uppercase tracking-wider shadow-sm">
          <HiOutlineSparkles className="text-[#38BDF8] text-sm" />
          <span>My Featured Work</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#F8FAFC] tracking-tight">
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#38BDF8]">Projects</span>
        </h2>

        <p className="text-base sm:text-lg text-[#94A3B8]">
          Real-world web applications built with modern frontend and full-stack technologies, showcasing responsive UI patterns and clean component architecture.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative bg-[#1E293B] hover:bg-[#1E293B]/95 rounded-3xl border border-slate-700/70 hover:border-[#38BDF8]/60 shadow-xl transition-all duration-300 flex flex-col overflow-hidden hover:-translate-y-1.5"
          >
            {/* Card Thumbnail Container */}
            <div className="relative aspect-video w-full overflow-hidden bg-[#0F172A] border-b border-slate-700/60">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              {project.category && (
                <span className="absolute top-3.5 left-3.5 bg-[#0F172A]/85 backdrop-blur-md text-[#38BDF8] text-[11px] font-semibold px-3 py-1 rounded-full shadow-md border border-slate-700">
                  {project.category}
                </span>
              )}
            </div>

            {/* Card Body */}
            <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
              <div className="space-y-3">
                <h3 className="text-xl font-extrabold text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-[#94A3B8] line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 text-xs font-semibold rounded-lg bg-[#0F172A] text-[#38BDF8] border border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-0.5 text-xs font-semibold rounded-lg bg-[#0F172A] text-[#94A3B8] border border-slate-700">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="pt-4 border-t border-slate-700/60 flex items-center justify-between gap-2">
                <Link
                  to={`/projects/${project.id}`}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[#38BDF8] hover:text-[#818CF8] transition"
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
                      className="p-2 text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#0F172A] rounded-xl transition"
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
                      className="inline-flex items-center gap-1 px-3.5 py-1.5 text-xs font-bold rounded-xl bg-gradient-to-r from-[#38BDF8] to-[#818CF8] text-[#0F172A] shadow-md shadow-[#38BDF8]/20 hover:shadow-lg transition-all active:scale-95"
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
        <p className="text-sm text-[#94A3B8]">
          Want to see more code repositories and ongoing projects? Check out my{" "}
          <a
            href="https://github.com/mdnaimhasanofficial-glitch"
            target="_blank"
            rel="noreferrer"
            className="font-bold text-[#38BDF8] hover:underline inline-flex items-center gap-1"
          >
            GitHub profile <HiExternalLink />
          </a>
        </p>
      </div>
    </section>
  );
};

export default Projects;
