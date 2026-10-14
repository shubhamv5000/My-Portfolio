import React, { useState } from "react";
import SectionTitle from "./SectionTitle";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage("");

    try {
      const response = await fetch(
        "https://brevo-email-backend.onrender.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,       // Fixed: changed form.name to formData.name
            email: formData.email,     // Fixed: changed form.email to formData.email
            message: formData.message, // Fixed: changed form.message to formData.message
          }),
        }
      );

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          data.message || data.error || "Failed to send your message."
        );
      }

      setStatusMessage("Message sent successfully!"); // Fixed: Using existing statusMessage state
      
      // Clear the form after successful submission
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      console.error("Contact form error:", err);
      setStatusMessage(
        err.message || "Unable to send your message. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  }; // Fixed: Properly closed the sendEmail function

  return (
    <section id="contact" className="relative bg-[#080808] px-5 sm:px-8 py-28 sm:py-36 overflow-hidden">
      <div className="absolute left-0 top-20 w-1 h-80 bg-gradient-to-b from-transparent via-amber-400 to-transparent blur-sm opacity-70" />
      <div className="absolute right-0 bottom-20 w-1 h-72 bg-gradient-to-b from-transparent via-orange-400 to-transparent blur-sm opacity-60" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <SectionTitle number="05" subtitle="Contact" title="Let's build something great." />
        
        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          <div className="relative p-8 sm:p-10 rounded-3xl border border-white/10 bg-[#0d0d0d] overflow-hidden hover:border-amber-400/20 transition">
            <div className="absolute left-0 top-8 bottom-8 w-[2px] bg-gradient-to-b from-transparent via-amber-400 to-transparent shadow-[0_0_25px_rgba(245,158,11,0.4)]" />
            <p className="text-neutral-400 leading-8 max-w-lg">
              Have a project, idea or opportunity? Send me a message and let's discuss how we can turn it into reality.
            </p>
            
            <div className="mt-10 space-y-5">
              <div className="relative p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-amber-400/30 hover:shadow-[0_0_30px_rgba(245,158,11,0.07)] transition group">
                <div className="absolute left-0 top-5 bottom-5 w-[2px] bg-amber-400 opacity-60 group-hover:shadow-[0_0_15px_5px_rgba(245,158,11,0.4)]" />
                <p className="text-[10px] uppercase tracking-widest text-neutral-500">Email</p>
                <p className="mt-2 font-bold text-white">shubhamv52500@gmail.com</p>
              </div>
              
              <div className="relative p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-amber-400/30 hover:shadow-[0_0_30px_rgba(245,158,11,0.07)] transition group">
                <div className="absolute left-0 top-5 bottom-5 w-[2px] bg-amber-400 opacity-60 group-hover:shadow-[0_0_15px_5px_rgba(245,158,11,0.4)]" />
                <p className="text-[10px] uppercase tracking-widest text-neutral-500">Phone</p>
                <p className="mt-2 font-bold text-white">+91 9264945150</p>
              </div>
            </div>
          </div>

          <form onSubmit={sendEmail} className="relative p-7 sm:p-9 rounded-3xl border border-white/10 bg-[#101010] overflow-hidden hover:border-amber-400/20 transition">
            <div className="absolute right-0 top-8 bottom-8 w-[2px] bg-gradient-to-b from-transparent via-amber-400 to-transparent shadow-[0_0_25px_rgba(245,158,11,0.35)]" />
            
            <div className="space-y-5">
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required className="w-full px-5 py-4 rounded-xl bg-black border border-white/10 text-white placeholder:text-neutral-600 outline-none focus:border-amber-400 focus:shadow-[0_0_20px_rgba(245,158,11,0.08)] transition" />
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required className="w-full px-5 py-4 rounded-xl bg-black border border-white/10 text-white placeholder:text-neutral-600 outline-none focus:border-amber-400 focus:shadow-[0_0_20px_rgba(245,158,11,0.08)] transition" />
              <textarea rows="6" name="message" value={formData.message} onChange={handleChange} placeholder="Tell me about your project..." required className="w-full px-5 py-4 rounded-xl bg-black border border-white/10 text-white placeholder:text-neutral-600 outline-none focus:border-amber-400 focus:shadow-[0_0_20px_rgba(245,158,11,0.08)] transition resize-none" />
              
              <button type="submit" disabled={loading} className="w-full py-4 rounded-xl bg-amber-400 text-black font-black uppercase tracking-wider text-xs hover:bg-amber-300 hover:-translate-y-1 transition disabled:bg-neutral-600 disabled:cursor-not-allowed shadow-[0_15px_40px_rgba(245,158,11,0.15)]">
                {loading ? "Sending..." : "Send Message →"}
              </button>
              
              {statusMessage && (
                <p className="text-center text-sm font-semibold mt-3 text-neutral-200">
                  {statusMessage}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
