import React from "react";
import SectionTitle from "./SectionTitle";

const educationData = [
  {
    year: "2022",
    title: "Bachelor of Computer Applications",
    institute: "Dr. Ram Manohar Lohia Awadh University",
  },
  {
    year: "2019",
    title: "Intermediate",
    institute: "CBSE Board",
  },
  {
    year: "2017",
    title: "High School",
    institute: "CBSE Board",
  },
];

export default function Education() {
  return (
    <section id="education" className="relative bg-[#050505] px-5 sm:px-8 py-28 sm:py-36 overflow-hidden">
      <div className="absolute right-0 top-20 w-1 h-80 bg-gradient-to-b from-transparent via-amber-400 to-transparent blur-sm opacity-70" />
      <div className="max-w-5xl mx-auto relative z-10">
        <SectionTitle number="04" subtitle="Education" title="Academic Journey" />
        
        <div className="relative mt-16">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-amber-400 via-amber-400/30 to-transparent shadow-[0_0_15px_rgba(245,158,11,0.3)]" />

          <div className="space-y-12">
            {educationData.map((item, index) => (
              <div key={item.year} className={`relative flex ${index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"}`}>
                <div className="absolute left-[9px] sm:left-1/2 sm:-translate-x-1/2 top-7 w-3 h-3 rounded-full bg-amber-400 shadow-[0_0_25px_8px_rgba(245,158,11,0.25)] z-10" />

                <div className="ml-12 sm:ml-0 sm:w-[44%] relative group p-7 rounded-2xl border border-white/10 bg-[#0d0d0d] hover:border-amber-400/40 hover:shadow-[0_0_35px_rgba(245,158,11,0.08)] transition-all duration-500 overflow-hidden">
                  <div className={`absolute ${index % 2 === 0 ? "left-0" : "right-0"} top-6 bottom-6 w-[2px] bg-gradient-to-b from-transparent via-amber-400 to-transparent group-hover:shadow-[0_0_25px_6px_rgba(245,158,11,0.45)] transition`} />
                  <span className="text-amber-400 text-xs font-black drop-shadow-[0_0_8px_rgba(245,158,11,0.4)]">{item.year}</span>
                  <h3 className="mt-3 text-xl font-black text-white group-hover:text-amber-400 transition">{item.title}</h3>
                  <p className="mt-3 text-sm text-neutral-500 leading-6">{item.institute}</p>
                  <div className="absolute -right-10 -bottom-10 w-28 h-28 rounded-full bg-amber-400/5 blur-3xl" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
