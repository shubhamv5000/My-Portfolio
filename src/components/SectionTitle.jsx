import React from "react";

export default function SectionTitle({ number, title, subtitle }) {
  return (
    <div className="mb-14">
      <div className="relative inline-flex items-center">
        <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-20 h-10 bg-amber-400/20 blur-2xl rounded-full" />
        <p className="relative text-amber-400 text-base sm:text-lg md:text-xl font-black uppercase tracking-[0.22em] drop-shadow-[0_0_14px_rgba(245,158,11,0.55)]">
          <span className="text-amber-300">{number}</span>
          <span className="text-amber-400/40 mx-2">—</span>
          <span>{subtitle}</span>
        </p>
      </div>
      <h2 className="mt-5 text-5xl sm:text-6xl md:text-7xl font-black tracking-[-0.05em] text-white leading-[0.95]">
        {title}
      </h2>
      <div className="relative mt-6 w-32 h-1.5 rounded-full bg-gradient-to-r from-amber-300 via-amber-400 to-orange-500 shadow-[0_0_25px_rgba(245,158,11,0.7)]">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-48 h-8 bg-amber-400/15 blur-xl rounded-full" />
      </div>
    </div>
  );
}
