import { FaWhatsapp } from "react-icons/fa";

/**
 * Floating WhatsApp chat bubble pinned to the bottom-right corner.
 * Clicking opens a direct WhatsApp chat window (wa.me deep link).
 * Hidden on print output; accessible with an aria-label.
 */
const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/8801616711677"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with me on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex items-center print:hidden"
      data-cursor="hover"
    >
      {/* Pulse ring */}
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-full bg-[#25D366]/60 animate-ping opacity-60"
      />
      {/* Tooltip — slides in on hover */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-full mr-4 whitespace-nowrap rounded-xl glass-strong px-3.5 py-2 text-xs font-bold text-fg shadow-lg opacity-0 translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
      >
        Chat with me on WhatsApp
      </span>

      {/* Button body */}
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-[#25D366] to-[#128C7E] text-white shadow-[0_8px_30px_rgba(37,211,102,0.4)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_10px_40px_rgba(37,211,102,0.55)] active:scale-95">
        <FaWhatsapp className="text-[26px]" />
      </span>
    </a>
  );
};

export default FloatingWhatsApp;
