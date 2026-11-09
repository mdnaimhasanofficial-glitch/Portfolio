import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring } from "motion/react";
import { HiExternalLink, HiArrowRight } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

/**
 * Premium interactive project card:
 * - pointer-tracked 3D tilt (spring-smoothed, disabled on touch and reduced-motion)
 * - image zoom on hover, animated gradient border, glass body
 * - dual GitHub buttons when a separate backend repo exists
 */
const ProjectCard = ({ project }) => {
  const cardRef = useRef(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 260, damping: 22 });
  const springY = useSpring(rotateY, { stiffness: 260, damping: 22 });

  const MAX_TILT = 7;

  const enableTilt =
    typeof window !== "undefined" &&
    window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const onPointerMove = (e) => {
    if (!enableTilt || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;

    rotateY.set((px - 0.5) * MAX_TILT * 2);
    rotateX.set(0.5 - py * MAX_TILT * 2);
    glint.set(px * 100);
  };

  const onPointerLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <div
      ref={cardRef}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      className="glow-border group relative h-full rounded-3xl [perspective:1200px]"
    >
      <motion.div
        style={{
          rotateX: enableTilt ? springX : 0,
          rotateY: enableTilt ? springY : 0,
          transformStyle: "preserve-3d",
        }}
        className="glass flex h-full flex-col overflow-hidden rounded-3xl shadow-xl transition-shadow duration-300 hover:shadow-2xl hover:shadow-neon/10"
      >
        {/* Thumbnail — links to details */}
        <Link
          to={`/projects/${project.id}`}
          aria-label={`${project.title} — view details`}
          className="relative aspect-video w-full overflow-hidden border-b border-line/70 bg-panel"
        >
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.06]"
            loading="lazy"
          />
          {project.category && (
            <span className="absolute left-3.5 top-3.5 rounded-full border border-neon/40 bg-panel/85 px-3 py-1 text-[11px] font-semibold text-neon shadow-md backdrop-blur-md">
              {project.category}
            </span>
          )}
        </Link>

        {/* Body */}
        <div className="flex flex-grow flex-col justify-between space-y-4 p-6">
          <div className="space-y-3">
            <Link
              to={`/projects/${project.id}`}
              aria-label={`${project.title} — view details`}
              className="font-display text-xl font-bold text-fg transition-colors hover:text-neon"
            >
              {project.title}
            </Link>

            <p className="line-clamp-2 text-sm leading-relaxed text-muted">
              {project.description}
            </p>

            {/* Tech pills */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {project.technologies.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-line bg-panel px-2.5 py-0.5 text-xs font-semibold text-electric"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="rounded-lg border border-line bg-panel px-2 py-0.5 text-xs font-semibold text-muted">
                  +{project.technologies.length - 4}
                </span>
              )}
            </div>
          </div>

          {/* Footer actions */}
          <div className="flex items-center justify-between gap-2 border-t border-line/60 pt-4">
            <Link
              to={`/projects/${project.id}`}
              aria-label={`${project.title} — view full details and tech breakdown`}
              className="inline-flex items-center gap-1.5 text-sm font-bold text-neon transition hover:text-lilac"
            >
              <span>Details &amp; Stack</span>
              <HiArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
            </Link>

            <div className="flex items-center gap-1.5">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.title} frontend source on GitHub`}
                  className="rounded-xl p-2 text-muted transition hover:bg-panel hover:text-fg"
                >
                  <FaGithub className="text-lg" />
                </a>
              )}

              {project.githubBackend && (
                <a
                  href={project.githubBackend}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.title} backend source on GitHub`}
                  className="rounded-xl p-2 text-muted transition hover:bg-panel hover:text-vio"
                >
                  <span className="relative">
                    <FaGithub className="text-lg" />
                    <span className="absolute -bottom-1 -right-1.5 block h-[5px] w-[5px] rounded-full bg-vio" />
                  </span>
                </a>
              )}

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${project.title} live demo`}
                  className="inline-flex items-center gap-1 rounded-xl bg-gradient-to-r from-neon to-vio px-3.5 py-1.5 text-xs font-bold text-ink shadow-md shadow-neon/20 transition-all hover:shadow-lg active:scale-95"
                >
                  <span>Live Demo</span>
                  <HiExternalLink className="text-sm" />
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
