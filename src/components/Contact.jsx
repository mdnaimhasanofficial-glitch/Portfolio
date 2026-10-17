import { useState } from "react";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
  HiOutlineChatAlt2,
  HiOutlineCheckCircle,
} from "react-icons/hi";
import { FaGithub, FaLinkedin, FaTwitter, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        submitting: false,
        submitted: false,
        error: "Please fill in all required fields.",
      });
      return;
    }

    setStatus({ submitting: true, submitted: false, error: null });

    // Simulate sending message
    setTimeout(() => {
      setStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Auto-hide success message after 6 seconds
      setTimeout(() => {
        setStatus((prev) => ({ ...prev, submitted: false }));
      }, 6000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-[#0F172A]">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1E293B] border border-[#38BDF8]/30 text-[#38BDF8] text-xs font-semibold uppercase tracking-wider">
          <HiOutlineChatAlt2 className="text-[#38BDF8] text-sm" />
          <span>Get In Touch</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8FAFC] tracking-tight">
          Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] to-[#818CF8]">Connect</span>
        </h2>

        <p className="text-base sm:text-lg text-[#94A3B8]">
          Have an entry-level opening, internship, freelance project, or simply want to chat about tech? My inbox is always open.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Direct Info Cards & Social Links (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#1E293B] rounded-3xl border border-slate-700/80 p-6 sm:p-8 shadow-xl space-y-6">
            <h3 className="text-xl font-extrabold text-[#F8FAFC]">
              Contact Information
            </h3>
            <p className="text-sm text-[#94A3B8] leading-relaxed">
              I am actively looking for junior frontend, MERN stack, or full-stack opportunities and am available to join immediately.
            </p>

            <div className="space-y-3.5 pt-2">
              {/* Email */}
              <a
                href="mailto:mdnaimhasan.official@gmail.com"
                className="flex items-start gap-4 p-3.5 rounded-2xl bg-[#0F172A] hover:bg-[#0F172A]/80 border border-slate-700/80 hover:border-[#38BDF8]/60 transition-all group shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-[#1E293B] text-[#38BDF8] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <HiOutlineMail className="text-xl" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs text-[#94A3B8] font-bold block uppercase tracking-wider">
                    Email Address
                  </span>
                  <span className="text-sm font-bold text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors break-all">
                    mdnaimhasan.official@gmail.com
                  </span>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+8801616711677"
                className="flex items-start gap-4 p-3.5 rounded-2xl bg-[#0F172A] hover:bg-[#0F172A]/80 border border-slate-700/80 hover:border-[#38BDF8]/60 transition-all group shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-[#1E293B] text-[#38BDF8] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <HiOutlinePhone className="text-xl" />
                </div>
                <div>
                  <span className="text-xs text-[#94A3B8] font-bold block uppercase tracking-wider">
                    Phone / WhatsApp
                  </span>
                  <span className="text-sm font-bold text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors">
                    +880 1616711677
                  </span>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-[#0F172A] border border-slate-700/80 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-[#1E293B] text-[#38BDF8] flex items-center justify-center shrink-0">
                  <HiOutlineLocationMarker className="text-xl" />
                </div>
                <div>
                  <span className="text-xs text-[#94A3B8] font-bold block uppercase tracking-wider">
                    Location
                  </span>
                  <span className="text-sm font-bold text-[#F8FAFC]">
                    Kishoreganj, Nilphamari, Bangladesh
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links Bar */}
            <div className="pt-4 border-t border-slate-700/70">
              <span className="text-xs font-bold text-[#94A3B8] uppercase tracking-wider block mb-3">
                Social Profiles
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/mdnaimhasanofficial-glitch"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub Profile"
                  className="w-11 h-11 rounded-xl bg-[#0F172A] hover:bg-[#38BDF8] hover:text-[#0F172A] border border-slate-700 flex items-center justify-center text-[#F8FAFC] transition-all shadow-sm"
                >
                  <FaGithub className="text-xl" />
                </a>
                <a
                  href="https://www.linkedin.com/in/naimhasan706016/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn Profile"
                  className="w-11 h-11 rounded-xl bg-[#0F172A] hover:bg-[#38BDF8] hover:text-[#0F172A] border border-slate-700 flex items-center justify-center text-[#F8FAFC] transition-all shadow-sm"
                >
                  <FaLinkedin className="text-xl" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Contact Form (7 cols) */}
        <div className="lg:col-span-7">
          <div className="bg-[#1E293B] rounded-3xl border border-slate-700/80 p-6 sm:p-10 shadow-xl">
            <h3 className="text-xl font-extrabold text-[#F8FAFC] mb-2">
              Send a Direct Message
            </h3>
            <p className="text-sm text-[#94A3B8] mb-6">
              Fill out the form below and I'll respond as soon as possible.
            </p>

            {/* Success Toast */}
            {status.submitted && (
              <div className="mb-6 p-4 rounded-xl bg-[#0F172A] border border-emerald-500/50 text-emerald-400 flex items-center gap-3">
                <HiOutlineCheckCircle className="text-2xl text-emerald-400 shrink-0" />
                <div>
                  <p className="text-sm font-bold">Message sent successfully!</p>
                  <p className="text-xs text-[#94A3B8]">
                    Thank you for reaching out. I'll get back to you shortly.
                  </p>
                </div>
              </div>
            )}

            {/* Error Message */}
            {status.error && (
              <div className="mb-6 p-3 rounded-xl bg-rose-950/50 border border-rose-500/50 text-rose-300 text-sm">
                {status.error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-[#94A3B8] uppercase mb-1.5">
                    Your Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-700 bg-[#0F172A] text-[#F8FAFC] placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-[#38BDF8] transition"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-[#94A3B8] uppercase mb-1.5">
                    Email Address <span className="text-rose-400">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-700 bg-[#0F172A] text-[#F8FAFC] placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-[#38BDF8] transition"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-xs font-semibold text-[#94A3B8] uppercase mb-1.5">
                  Subject / Role
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Job Opportunity / Project Inquiry"
                  className="w-full px-4 py-3 rounded-xl border border-slate-700 bg-[#0F172A] text-[#F8FAFC] placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-[#38BDF8] transition"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-[#94A3B8] uppercase mb-1.5">
                  Your Message <span className="text-rose-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hello! We are looking for a Junior Frontend Developer to join our team..."
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-700 bg-[#0F172A] text-[#F8FAFC] placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-[#38BDF8] transition resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status.submitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#38BDF8] to-[#818CF8] hover:from-[#38BDF8] hover:to-[#6366F1] text-[#0F172A] font-bold px-8 py-3.5 rounded-xl shadow-md shadow-[#38BDF8]/25 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status.submitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <FaPaperPlane className="text-sm" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
