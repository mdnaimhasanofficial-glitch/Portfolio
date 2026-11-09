import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

/**
 * Cinematic page loader: brand monogram with a sweeping progress line.
 * Runs once per visit, is intentionally brief (~1s), and is skipped
 * entirely for users who prefer reduced motion.
 */
const PageLoader = ({ onDone = () => {} }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      onDone();
      return undefined;
    }

    setShow(true);
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setShow(false);
      document.body.style.overflow = "";
      onDone();
    }, 1100);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="loader"
          aria-hidden="true"
          className="fixed inset-0 z-[300] flex items-center justify-center bg-ink"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="flex flex-col items-center gap-6">
            {/* Monogram */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="absolute -inset-6 rounded-full bg-neon/15 blur-2xl" />
              <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl glass-strong">
                <span className="font-display text-3xl font-bold text-gradient-static">
                  N
                </span>
              </div>
            </motion.div>

            {/* Sweep line */}
            <div className="h-[2px] w-40 overflow-hidden rounded-full bg-line">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-neon via-electric to-vio"
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
                style={{ width: "100%" }}
              />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="font-mono text-xs tracking-[0.3em] text-muted uppercase"
            >
              Initializing Portfolio
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;
