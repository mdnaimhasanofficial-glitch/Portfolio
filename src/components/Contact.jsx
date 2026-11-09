import { useState } from "react";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
  HiOutlineChatAlt2,
  HiOutlineCheckCircle,
} from "react-icons/hi";
import { FaGithub, FaLinkedin, FaPaperPlane, FaWhatsapp } from "react-icons/fa";

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({
        submitting: false,
        submitted: false,
        error: "Please fill in all required fields.",
      });
      return;
    }

    setStatus({ submitting: true, submitted: false, error: null });

    try {
      const accessKey =
        import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ||
        "871c5739-104f-4f57-8e82-24e428133816";

      const payload = new FormData();
      payload.append("access_key", accessKey);
      payload.append("name", formData.name.trim());
      payload.append("email", formData.email.trim());
      payload.append(
        "subject",
        formData.subject.trim() || `Portfolio Contact Message from ${formData.name.trim()}`
      );
      payload.append("message", formData.message.trim());
      payload.append("from_name", "Portfolio Visitor");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: payload,
      });

      const data = await response.json();

      if (data.success) {
        setStatus({ submitting: false, submitted: true, error: null });
        setFormData({ name: "", email: "", subject: "", message: "" });

        // Auto-hide success message after 7 seconds
        setTimeout(() => {
          setStatus((prev) => ({ ...prev, submitted: false }));
        }, 7000);
      } else {
        setStatus({
          submitting: false,
          submitted: false,
          error:
            data.message ||
            "Unable to send message at the moment. Please email directly at mdnaimhasan.official@gmail.com",
        });
      }
    } catch (err) {
      console.error("Submission error:", err);
      setStatus({
        submitting: false,
        submitted: false,
        error:
          "Network error occurred. Please try again or reach out directly at mdnaimhasan.official@gmail.com",
      });
    }
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-ink">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-card border border-neon/30 text-neon text-xs font-semibold uppercase tracking-wider">
          <HiOutlineChatAlt2 className="text-neon text-sm" />
          <span>Get In Touch</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-fg tracking-tight">
          Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon to-vio">Connect</span>
        </h2>

        <p className="text-base sm:text-lg text-muted">
          Have an entry-level opening, internship, freelance project, or simply want to chat about tech? My inbox is always open.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Direct Info Cards & Social Links (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-card rounded-3xl border border-line/80 p-6 sm:p-8 shadow-xl space-y-6">
            <h3 className="text-xl font-extrabold text-fg">
              Contact Information
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              I am actively looking for junior frontend, MERN stack, or full-stack opportunities and am available to join immediately.
            </p>

            <div className="space-y-3.5 pt-2">
              {/* Email */}
              <a
                href="mailto:mdnaimhasan.official@gmail.com"
                className="flex items-start gap-4 p-3.5 rounded-2xl bg-ink hover:bg-ink/80 border border-line/80 hover:border-neon/60 transition-all group shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-card text-neon flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <HiOutlineMail className="text-xl" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs text-muted font-bold block uppercase tracking-wider">
                    Email Address
                  </span>
                  <span className="text-sm font-bold text-fg group-hover:text-neon transition-colors break-all">
                    mdnaimhasan.official@gmail.com
                  </span>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+8801616711677"
                className="flex items-start gap-4 p-3.5 rounded-2xl bg-ink hover:bg-ink/80 border border-line/80 hover:border-neon/60 transition-all group shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-card text-neon flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <HiOutlinePhone className="text-xl" />
                </div>
                <div>
                  <span className="text-xs text-muted font-bold block uppercase tracking-wider">
                    Phone / WhatsApp
                  </span>
                  <span className="text-sm font-bold text-fg group-hover:text-neon transition-colors">
                    +880 1616711677
                  </span>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-start gap-4 p-3.5 rounded-2xl bg-ink border border-line/80 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-card text-neon flex items-center justify-center shrink-0">
                  <HiOutlineLocationMarker className="text-xl" />
                </div>
                <div>
                  <span className="text-xs text-muted font-bold block uppercase tracking-wider">
                    Location
                  </span>
                  <span className="text-sm font-bold text-fg">
                    Kishoreganj, Nilphamari, Bangladesh
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links Bar */}
            <div className="pt-4 border-t border-line/70">
              <span className="text-xs font-bold text-muted uppercase tracking-wider block mb-3">
                Social Profiles
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/mdnaimhasanofficial-glitch"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub Profile"
                  className="w-11 h-11 rounded-xl bg-ink hover:bg-neon hover:text-ink border border-line flex items-center justify-center text-fg transition-all shadow-sm"
                >
                  <FaGithub className="text-xl" />
                </a>
                <a
                  href="https://www.linkedin.com/in/naimhasan706016/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn Profile"
                  className="w-11 h-11 rounded-xl bg-ink hover:bg-neon hover:text-ink border border-line flex items-center justify-center text-fg transition-all shadow-sm"
                >
                  <FaLinkedin className="text-xl" />
                </a>
                <a
                  href="https://wa.me/8801616711677"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Chat on WhatsApp"
                  className="w-11 h-11 rounded-xl bg-ink hover:bg-[#25D366] hover:text-ink border border-line flex items-center justify-center text-fg transition-all shadow-sm"
                >
                  <FaWhatsapp className="text-xl" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Contact Form (7 cols) */}
        <div className="lg:col-span-7">
          <div className="bg-card rounded-3xl border border-line/80 p-6 sm:p-10 shadow-xl">
            <h3 className="text-xl font-extrabold text-fg mb-2">
              Send a Direct Message
            </h3>
            <p className="text-sm text-muted mb-6">
              Fill out the form below and I'll respond as soon as possible.
            </p>

            {/* Success Toast */}
            {status.submitted && (
              <div className="mb-6 p-4 rounded-xl bg-ink border border-emerald-500/50 text-emerald-400 flex items-center gap-3">
                <HiOutlineCheckCircle className="text-2xl text-emerald-400 shrink-0" />
                <div>
                  <p className="text-sm font-bold">Message sent successfully!</p>
                  <p className="text-xs text-muted">
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
                  <label htmlFor="name" className="block text-xs font-semibold text-muted uppercase mb-1.5">
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
                    className="w-full px-4 py-3 rounded-xl border border-line bg-ink text-fg placeholder-muted text-sm focus:outline-none focus:ring-2 focus:ring-neon transition"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-muted uppercase mb-1.5">
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
                    className="w-full px-4 py-3 rounded-xl border border-line bg-ink text-fg placeholder-muted text-sm focus:outline-none focus:ring-2 focus:ring-neon transition"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-xs font-semibold text-muted uppercase mb-1.5">
                  Subject / Role
                </label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Job Opportunity / Project Inquiry"
                  className="w-full px-4 py-3 rounded-xl border border-line bg-ink text-fg placeholder-muted text-sm focus:outline-none focus:ring-2 focus:ring-neon transition"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-muted uppercase mb-1.5">
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
                  className="w-full px-4 py-3 rounded-xl border border-line bg-ink text-fg placeholder-muted text-sm focus:outline-none focus:ring-2 focus:ring-neon transition resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status.submitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-neon to-vio hover:from-neon hover:to-vio text-ink font-bold px-8 py-3.5 rounded-xl shadow-md shadow-neon/25 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
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
