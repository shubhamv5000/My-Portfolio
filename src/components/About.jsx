import React from "react";
import SectionTitle from "./SectionTitle";

export default function About() {
  return (
    <section id="about" className="relative bg-[#080808] px-5 sm:px-8 py-28 sm:py-36 overflow-hidden">
      <div className="absolute left-0 top-20 w-1 h-72 bg-gradient-to-b from-transparent via-amber-400 to-transparent blur-sm opacity-70 shadow-[0_0_20px_rgba(245,158,11,0.6)]" />
      <div className="absolute right-0 bottom-10 w-1 h-60 bg-gradient-to-b from-transparent via-orange-400 to-transparent blur-sm opacity-50" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionTitle number="01" subtitle="About Me" title="I turn ideas into digital experiences." />

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 relative p-8 sm:p-10 rounded-3xl border border-white/10 bg-[#0d0d0d] overflow-hidden group hover:border-amber-400/30 transition">
            <div className="absolute left-0 top-10 bottom-10 w-1 bg-gradient-to-b from-amber-400 via-orange-500 to-transparent shadow-[0_0_25px_rgba(245,158,11,0.6)]" />
            <div className="absolute right-0 top-0 w-40 h-40 bg-amber-400/5 blur-3xl rounded-full" />
            <p className="text-neutral-400 text-base md:text-lg leading-8">
              I'm a frontend developer focused on building clean, responsive
              and visually engaging websites. I enjoy transforming ideas and
              designs into functional React applications.
            </p>
            <p className="mt-6 text-neutral-500 leading-8">
              My focus is on creating interfaces that are not only attractive
              but also fast, responsive and easy to use across different devices.
            </p>
          </div>

          <div className="relative p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-[#151515] to-[#0c0c0c] overflow-hidden hover:border-amber-400/30 transition">
            <div className="absolute right-0 top-10 bottom-10 w-1 bg-gradient-to-b from-amber-400 via-orange-500 to-transparent shadow-[0_0_25px_rgba(245,158,11,0.6)]" />
            <p className="text-amber-400 text-xs uppercase tracking-widest font-bold">Current Focus</p>
            <h3 className="mt-5 text-3xl font-black text-white"> Modern Web Development </h3>
            <p className="mt-5 text-sm leading-7 text-neutral-400">
              React components, responsive layouts, animations, reusable UI
              systems and performance-focused frontend development.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-5 mt-8">
          {[["20+", "Projects"], ["100%", "Responsive"], ["24/7", "Learning"]].map(([number, label]) => (
            <div key={label} className="relative overflow-hidden p-7 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-amber-400/30 hover:shadow-[0_0_35px_rgba(245,158,11,0.08)] transition group">
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-amber-400 to-transparent opacity-70 group-hover:shadow-[0_0_20px_5px_rgba(245,158,11,0.5)]" />
              <h3 className="text-5xl font-black text-amber-400 group-hover:scale-105 origin-left transition drop-shadow-[0_0_12px_rgba(245,158,11,0.3)]">{number}</h3>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-neutral-500">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
