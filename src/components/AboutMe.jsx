import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "motion/react";
import {
  HiOutlineUser,
  HiOutlineLocationMarker,
  HiOutlineBriefcase,
  HiOutlineAcademicCap,
  HiOutlineTranslate,
  HiDocumentText,
  HiArrowRight,
  HiOutlineSparkles,
} from "react-icons/hi";
import { FaLaptopCode, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import profileImg from "../assets/profile.jpg";
import SectionHeader from "./SectionHeader";

const highlights = [
  {
    title: "Component-Driven Frontend",
    desc: "Crafting fluid, pixel-perfect user interfaces with React.js, Next.js, and Tailwind CSS.",
    icon: FaReact,
    accent: "text-neon",
    ring: "group-hover:border-neon/60",
  },
  {
    title: "Backend & RESTful APIs",
    desc: "Developing backend routes, middleware, and database operations with Node.js, Express, and MongoDB.",
    icon: FaNodeJs,
    accent: "text-emerald-400",
    ring: "group-hover:border-emerald-400/60",
  },
  {
    title: "Type Safety & Best Practices",
    desc: "Writing clean, maintainable code using TypeScript, modern JavaScript (ES6+), and structured patterns.",
    icon: SiTypescript,
    accent: "text-electric",
    ring: "group-hover:border-electric/60",
  },
  {
    title: "Fast Learner & Adaptable",
    desc: "Eager to learn industry practices, strengthen problem-solving, and contribute to collaborative teams.",
    icon: FaLaptopCode,
    accent: "text-vio",
    ring: "group-hover:border-vio/60",
  },
];

const learningFocus = [
  "Full-Stack Integration",
  "Authentication Patterns",
  "TypeScript Deep-Dives",
  "Next.js App Router",
  "API Architecture",
];

/** Animated count-up that only runs when scrolled into view */
const CountUp = ({ value, suffix = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDisplay(value);
      return undefined;
    }

    let rafId;
    const start = performance.now();
    const duration = 1200;

    const tick = (now) => {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [inView, value]);

  return (
    <span ref={ref} className="block font-display text-3xl font-black text-neon">
      {display}
      {suffix}
    </span>
  );
};

const stats = [
  { value: 3, suffix: "+", label: "Featured Projects" },
  { text: "DIPTI", label: "MERN Intern" },
  { text: "100%", label: "Dedicated" },
];

const AboutMe = () => {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-7xl overflow-hidden px-6 py-24 md:px-12"
    >
      <div className="pointer-events-none absolute -z-10 left-10 top-1/3 h-72 w-72 rounded-full bg-neon/5 blur-3xl" />
      <div className="pointer-events-none absolute -z-10 bottom-10 right-10 h-72 w-72 rounded-full bg-vio/5 blur-3xl" />

      <SectionHeader
        icon={HiOutlineUser}
        eyebrow="About Me"
        title="Who I"
        highlight="Am"
        description="A glimpse into my background, hands-on training, and passion for modern web engineering."
      />

      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
        {/* Left: Glass profile card */}
        <div className="space-y-6 lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="glass glow-border relative rounded-3xl p-6 shadow-2xl sm:p-8"
          >
            <div className="pointer-events-none absolute -right-4 -top-4 -z-10 h-32 w-32 rounded-full bg-gradient-to-tr from-neon/10 to-vio/10 blur-2xl" />

            <div className="mb-6 flex items-center gap-4 border-b border-line pb-6">
              <div className="relative">
                <div className="h-20 w-20 shrink-0 rounded-2xl bg-gradient-to-tr from-neon via-vio to-neon p-[2px] shadow-lg shadow-neon/15">
                  <img
                    src={profileImg}
                    alt="Md Naim Hasan"
                    className="h-full w-full rounded-[14px] object-cover"
                    loading="lazy"
                  />
                </div>
                <span className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-card bg-emerald-500" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-fg">
                  Md Naim Hasan
                </h3>
                <p className="text-sm font-semibold text-neon">Full Stack Web Developer</p>
                <div className="mt-1 flex items-center gap-1.5 text-xs text-muted">
                  <HiOutlineLocationMarker className="shrink-0 text-neon" />
                  <span>Kishoreganj, Nilphamari, Bangladesh</span>
                </div>
              </div>
            </div>

            {/* Quick specs */}
            <div className="space-y-1 text-sm text-muted">
              {[
                {
                  icon: HiOutlineBriefcase,
                  label: "Current Role",
                  node: (
                    <span className="rounded-full border border-emerald-500/30 bg-panel px-2.5 py-0.5 text-xs font-bold text-emerald-400">
                      MERN Stack Intern @ DIPTI
                    </span>
                  ),
                },
                {
                  icon: FaLaptopCode,
                  label: "Training",
                  node: <span className="font-semibold text-fg text-sm">Programming Hero</span>,
                },
                {
                  icon: HiOutlineAcademicCap,
                  label: "Education",
                  node: (
                    <span className="text-right font-semibold text-fg text-sm">
                      Diploma in Computer Tech
                    </span>
                  ),
                },
                {
                  icon: HiOutlineTranslate,
                  label: "Languages",
                  node: <span className="font-semibold text-fg text-sm">Bengali (Native), English</span>,
                },
              ].map(({ icon: Icon, label, node }) => (
                <div
                  key={label}
                  className="flex items-center justify-between border-b border-line/60 py-2.5 last:border-0"
                >
                  <span className="flex items-center gap-2 font-medium">
                    <Icon className="text-base text-neon" />
                    {label}:
                  </span>
                  {node}
                </div>
              ))}
            </div>

            {/* Animated stats */}
            <div className="mt-6 grid grid-cols-3 gap-3 border-t border-line pt-6 text-center">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass rounded-2xl border-line p-3 shadow-xs"
                >
                  {stat.value !== undefined ? (
                    <CountUp value={stat.value} suffix={stat.suffix} />
                  ) : (
                    <span className="block font-display text-2xl font-black text-vio">
                      {stat.text}
                    </span>
                  )}
                  <span className="text-[11px] font-semibold text-muted">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right: narrative + strengths */}
        <div className="space-y-6 lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4 text-base leading-relaxed text-muted sm:text-lg"
          >
            <h3 className="font-display text-2xl font-black leading-snug tracking-tight text-fg sm:text-3xl">
              Building responsive, high-performance web applications end-to-end.
            </h3>
            <p>
              I am <strong className="text-fg">Md Naim Hasan</strong>, a motivated{" "}
              <strong className="text-neon">Full Stack Web Developer</strong> and aspiring
              MERN stack engineer. I am passionate about hands-on web engineering,
              transforming concepts into scalable, intuitive digital experiences with{" "}
              <strong className="text-neon">React.js</strong>,{" "}
              <strong className="text-fg">Next.js</strong>,{" "}
              <strong className="text-vio">TypeScript</strong>,{" "}
              <strong className="text-neon">Node.js</strong>, and{" "}
              <strong className="text-vio">MongoDB</strong>.
            </p>
            <p>
              Currently, I am undertaking intensive MERN Stack internship training at{" "}
              <strong className="text-fg">Daffodil International Professional Training
              Institute (DIPTI)</strong> while actively learning modern web technologies
              with <strong className="text-fg">Programming Hero</strong>. With a{" "}
              <strong className="text-fg">Diploma in Engineering in Computer Technology</strong>{" "}
              from UST Private Polytechnic Institute, I blend solid computing principles
              with modern front-to-back development.
            </p>

            {/* Current learning focus */}
            <div className="pt-2">
              <p className="mb-2 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-muted">
                <HiOutlineSparkles className="text-neon" /> Current Learning Focus
              </p>
              <div className="flex flex-wrap gap-2">
                {learningFocus.map((topic, i) => (
                  <motion.span
                    key={topic}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.06, duration: 0.4 }}
                    className="glass rounded-full px-3.5 py-1.5 text-xs font-semibold text-electric"
                  >
                    {topic}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Core strengths */}
          <div className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-2">
            {highlights.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="glass group flex items-start gap-3.5 rounded-2xl p-4 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div
                    className={`shrink-0 rounded-xl border border-line bg-panel p-2.5 group-hover:scale-110 transition-transform ${item.accent}`}
                  >
                    <Icon className="text-lg" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-fg transition-colors group-hover:text-neon">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-xs leading-relaxed text-muted">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 pt-2"
          >
            <Link
              to="/resume"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-neon to-vio px-5 py-2.5 text-sm font-bold text-ink shadow-md shadow-neon/20 transition-all hover:shadow-lg hover:-translate-y-0.5"
            >
              <HiDocumentText className="text-lg text-ink" />
              <span>Read Full Resume</span>
              <HiArrowRight className="text-sm" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
