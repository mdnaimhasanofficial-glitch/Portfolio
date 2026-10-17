import { useEffect, useState } from "react";

const MovingBackground = () => {
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 });

  useEffect(() => {
    let animationFrameId;

    const handleMouseMove = (e) => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        setMousePos({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
    >
      {/* 1. Interactive Mouse Spotlight Glow */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-[140px] opacity-25 transition-transform duration-300 ease-out"
        style={{
          background:
            "radial-gradient(circle, rgba(56, 189, 248, 0.4) 0%, rgba(129, 140, 248, 0.15) 50%, transparent 70%)",
          transform: `translate(${mousePos.x - 300}px, ${mousePos.y - 300}px)`,
        }}
      />

      {/* 2. Floating Ambient Glow Orbs */}
      <div className="absolute -top-20 -left-20 w-[480px] h-[480px] rounded-full bg-gradient-to-tr from-[#38BDF8]/15 to-[#818CF8]/10 blur-[120px] animate-drift-slow" />
      <div className="absolute top-1/3 -right-24 w-[520px] h-[520px] rounded-full bg-gradient-to-bl from-[#818CF8]/15 to-[#38BDF8]/10 blur-[130px] animate-drift-reverse" />
      <div className="absolute bottom-10 left-1/4 w-[420px] h-[420px] rounded-full bg-gradient-to-t from-[#38BDF8]/10 to-transparent blur-[110px] animate-float-sway" />

      {/* 3. Floating Moving Geometric & Code Objects */}
      {/* Object 1: Code Tag Top-Left */}
      <div className="absolute top-36 left-[8%] hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1E293B]/60 backdrop-blur-md border border-slate-700/50 text-[#38BDF8]/70 font-mono text-xs shadow-lg animate-float-gentle">
        <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-ping" />
        <span>&lt;Code /&gt;</span>
      </div>

      {/* Object 2: Curly Braces Right Side */}
      <div className="absolute top-[28%] right-[6%] hidden xl:flex items-center justify-center w-12 h-12 rounded-2xl bg-[#1E293B]/50 backdrop-blur-md border border-slate-700/40 text-[#818CF8]/80 font-mono text-xl shadow-lg animate-float-reverse">
        &#123; &#125;
      </div>

      {/* Object 3: Floating TypeScript / Node Symbol Mid-Page */}
      <div className="absolute top-[52%] left-[4%] hidden lg:flex items-center gap-2 px-3 py-1 rounded-xl bg-[#1E293B]/40 backdrop-blur-sm border border-slate-700/40 text-[#94A3B8]/80 font-mono text-xs shadow-sm animate-float-sway">
        <span className="text-emerald-400 font-bold">const</span>
        <span className="text-[#38BDF8]">stack</span>
        <span>=</span>
        <span className="text-amber-300">"MERN"</span>
      </div>

      {/* Object 4: Floating Arrow Operator Mid-Right */}
      <div className="absolute top-[68%] right-[7%] hidden lg:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E293B]/50 backdrop-blur-sm border border-slate-700/40 text-[#818CF8]/80 font-mono text-xs shadow-md animate-drift-slow">
        <span>async () =&gt; &#123; deploy() &#125;</span>
      </div>

      {/* Object 5: Subtle Binary / Status Pill Bottom-Left */}
      <div className="absolute bottom-[22%] left-[10%] hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E293B]/40 border border-slate-800 text-[#94A3B8]/60 font-mono text-[11px] animate-float-reverse">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
        <span>Status: 200 OK</span>
      </div>

      {/* Object 6: Floating Sparkle / Star Mid-Center */}
      <div className="absolute top-[42%] right-[18%] hidden md:block text-[#38BDF8]/40 text-lg animate-pulse-glow">
        ✦
      </div>

      <div className="absolute bottom-[35%] left-[22%] hidden md:block text-[#818CF8]/40 text-sm animate-pulse-glow delay-200">
        ✦
      </div>
    </div>
  );
};

export default MovingBackground;
