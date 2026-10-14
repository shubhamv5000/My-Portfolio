import React, { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = ["About", "Skills", "Projects", "Education", "Contact"];

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 pt-4">
      <div className="max-w-7xl mx-auto">
        <nav className="relative flex items-center justify-between px-5 sm:px-7 py-4 rounded-2xl border border-white/10 bg-black/75 backdrop-blur-xl shadow-2xl overflow-hidden">
          <div className="absolute -left-16 top-1/2 -translate-y-1/2 w-36 h-36 bg-amber-400/25 blur-[65px] rounded-full pointer-events-none" />
          <div className="absolute -right-16 top-1/2 -translate-y-1/2 w-36 h-36 bg-yellow-400/25 blur-[65px] rounded-full pointer-events-none" />
          <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-amber-400/70 to-transparent shadow-[0_0_15px_rgba(245,158,11,0.7)]" />
          <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-orange-400/50 to-transparent" />

          <a href="#profile" className="group relative z-10">
            <div className="text-lg sm:text-xl font-black text-white">
              SHUBHAM<span className="text-amber-400">.</span>
            </div>
            <div className="text-[8px] sm:text-[9px] uppercase tracking-[0.25em] text-neutral-500 group-hover:text-amber-400 transition">
              Frontend Developer
            </div>
          </a>

          <div className="hidden md:flex items-center gap-7 relative z-10">
            {links.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`}
                className="relative text-sm font-medium text-neutral-400 hover:text-white transition group">{link}
                <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-amber-400 group-hover:w-full transition-all duration-300 shadow-[0_0_10px_rgba(245,158,11,0.9)]" />
              </a>
            ))}
          </div>

          <div className="hidden md:block relative z-10">
            <a href="#contact" className="px-5 py-2.5 rounded-xl bg-amber-400 text-black text-xs font-black uppercase tracking-wider hover:bg-amber-300 hover:-translate-y-0.5 transition shadow-[0_0_30px_rgba(245,158,11,0.35)]" >
              Let's Talk
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden relative z-10 text-white border border-white/10 px-3 py-2 rounded-lg hover:border-amber-400 hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] transition" >
            {open ? "✕" : "☰"}
          </button>

          {open && (
            <div className="absolute top-full left-0 mt-2 w-full p-5 rounded-2xl border border-amber-400/20 bg-[#0c0c0c]/95 backdrop-blur-xl md:hidden shadow-[0_0_50px_rgba(245,158,11,0.15)] z-50">
              <div className="flex flex-col gap-4">
                {links.map((link) => (
                  <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)}
                    className="text-neutral-300 hover:text-amber-400 transition"> {link}
                  </a>
                ))}
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
