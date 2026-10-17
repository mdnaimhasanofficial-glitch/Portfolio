import { useEffect, useState } from "react";
import { HiArrowUp } from "react-icons/hi";

const FloatingScrollTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 350) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top of page"
      className={`fixed bottom-6 right-6 z-50 p-3.5 rounded-2xl bg-[#1E293B]/90 backdrop-blur-xl border border-slate-700/80 text-[#38BDF8] shadow-2xl hover:border-[#38BDF8] hover:text-[#0F172A] hover:bg-gradient-to-r hover:from-[#38BDF8] hover:to-[#818CF8] transition-all duration-300 transform active:scale-90 group cursor-pointer ${
        visible
          ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
          : "opacity-0 translate-y-6 scale-75 pointer-events-none"
      }`}
    >
      <HiArrowUp className="text-xl group-hover:-translate-y-1 transition-transform duration-300" />
      <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping opacity-75" />
      <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-500" />
    </button>
  );
};

export default FloatingScrollTop;
