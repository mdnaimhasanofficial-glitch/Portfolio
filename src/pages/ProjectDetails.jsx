import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";
import { HiArrowLeft, HiExternalLink, HiCode, HiLightBulb, HiShieldCheck } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-6 bg-[#0F172A]">
        <div className="text-center max-w-md bg-[#1E293B] p-8 rounded-2xl shadow-sm border border-slate-700/80">
          <h2 className="text-2xl font-bold text-[#F8FAFC] mb-2">Project Not Found</h2>
          <p className="text-[#94A3B8] text-sm mb-6">
            The project you are looking for does not exist or has been moved.
          </p>
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 bg-[#38BDF8] hover:bg-[#38BDF8]/90 text-[#0F172A] px-5 py-2.5 rounded-xl font-bold transition"
          >
            <HiArrowLeft /> Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen pt-28 pb-20 bg-[#0F172A] text-[#F8FAFC]">
      <div className="max-w-4xl mx-auto px-6">
        {/* Navigation Breadcrumb */}
        <div className="mb-6">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#94A3B8] hover:text-[#38BDF8] transition"
          >
            <HiArrowLeft /> Back to All Projects
          </Link>
        </div>

        {/* Project Card */}
        <div className="bg-[#1E293B] rounded-3xl border border-slate-700/80 shadow-2xl overflow-hidden p-6 sm:p-10 space-y-8">
          
          {/* Main Screenshot */}
          <div className="rounded-xl overflow-hidden border border-slate-700/60 shadow-md aspect-video bg-[#0F172A]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Title & Category */}
          <div className="space-y-3">
            {project.category && (
              <span className="inline-block bg-[#0F172A] text-[#38BDF8] border border-[#38BDF8]/30 text-xs font-semibold px-3 py-1 rounded-full">
                {project.category}
              </span>
            )}
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
              {project.title}
            </h1>
          </div>

          {/* Tech Stack Pills */}
          <div>
            <h3 className="text-xs font-bold text-[#94A3B8] uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
              <HiCode className="text-[#38BDF8] text-base" /> Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="bg-[#0F172A] text-[#38BDF8] border border-[#38BDF8]/20 px-3 py-1 rounded-lg text-xs font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-[#F8FAFC]">Project Overview</h3>
            <p className="text-[#94A3B8] leading-relaxed text-sm sm:text-base">
              {project.description}
            </p>
          </div>

          {/* Challenges & Solutions */}
          {project.challenges && project.challenges.length > 0 && (
            <div className="space-y-3 p-5 rounded-xl bg-[#0F172A]/70 border border-slate-700/60">
              <h3 className="text-base font-bold text-[#F8FAFC] flex items-center gap-2">
                <HiShieldCheck className="text-emerald-400 text-lg" />
                Technical Challenges &amp; Solutions
              </h3>
              <ul className="list-disc list-inside space-y-1.5 text-sm text-[#94A3B8]">
                {project.challenges.map((challenge) => (
                  <li key={challenge}>{challenge}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Future Enhancements */}
          {project.future && project.future.length > 0 && (
            <div className="space-y-3 p-5 rounded-xl bg-[#0F172A]/70 border border-slate-700/60">
              <h3 className="text-base font-bold text-[#F8FAFC] flex items-center gap-2">
                <HiLightBulb className="text-amber-400 text-lg" />
                Future Roadmap &amp; Enhancements
              </h3>
              <ul className="list-disc list-inside space-y-1.5 text-sm text-[#94A3B8]">
                {project.future.map((enhancement) => (
                  <li key={enhancement}>{enhancement}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Action Links */}
          <div className="pt-4 border-t border-slate-700/60 flex flex-wrap items-center gap-4">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#38BDF8] hover:bg-[#38BDF8]/90 text-[#0F172A] px-6 py-3 rounded-xl font-bold shadow-sm transition"
              >
                <span>Live Demo</span>
                <HiExternalLink className="text-base" />
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#0F172A] hover:bg-slate-900 border border-slate-700 hover:border-[#818CF8] text-[#F8FAFC] px-6 py-3 rounded-xl font-semibold shadow-sm transition"
              >
                <FaGithub className="text-lg text-[#818CF8]" />
                <span>Source Code</span>
              </a>
            )}

            <Link
              to="/resume"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#38BDF8] hover:underline ml-auto"
            >
              View Developer Resume &rarr;
            </Link>
          </div>

        </div>
      </div>
    </main>
  );
};

export default ProjectDetails;
