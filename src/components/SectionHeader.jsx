import { motion } from "motion/react";

/**
 * Shared futuristic section header: glowing icon eyebrow, display heading
 * with gradient keyword, and an optional subline.
 */
const SectionHeader = ({ icon: Icon, eyebrow, title, highlight, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    className="mx-auto mb-14 max-w-3xl space-y-3 text-center sm:mb-16"
  >
    <div className="glass inline-flex items-center gap-2 rounded-full border-neon/30 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-neon shadow-glow-neon">
      {Icon && <Icon className="text-sm text-neon" />}
      <span>{eyebrow}</span>
    </div>

    <h2 className="font-display text-3xl font-black tracking-tight text-fg sm:text-4xl lg:text-5xl">
      {title}{" "}
      <span className="text-gradient-static">{highlight}</span>
    </h2>

    {description && (
      <p className="text-base text-muted sm:text-lg">{description}</p>
    )}
  </motion.div>
);

export default SectionHeader;
