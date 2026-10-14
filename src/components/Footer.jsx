import React from "react";

export default function Footer() {
  return (
    <footer className="relative bg-[#050505] border-t border-white/5 px-5 py-12 text-center overflow-hidden">
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-80 h-20 bg-amber-400/10 blur-[70px]" />
      <h3 className="relative text-2xl font-black text-white">
        SHUBHAM<span className="text-amber-400">.</span>
      </h3>
      <p className="mt-3 text-xs text-neutral-600">React Frontend Developer</p>

      <div className="mt-5 flex justify-center gap-5 text-xs text-neutral-600">
        <a href="#profile" className="hover:text-amber-400 transition">Home</a>
        <a href="#projects" className="hover:text-amber-400 transition">Projects</a>
        <a href="#contact" className="hover:text-amber-400 transition">Contact</a>
      </div>

      <p className="mt-7 text-[10px] uppercase tracking-widest text-neutral-700">
        © 2026 Shubham Verma — All Rights Reserved
      </p>
    </footer>
  );
}
