import React from "react";
import SectionTitle from "./SectionTitle";

const skillsData = [
  { name: "React.js", level: 85, icon: "⚛" },
  { name: "JavaScript", level: 90, icon: "JS" },
  { name: "Tailwind CSS", level: 91, icon: "◆" },
  { name: "HTML5", level: 94, icon: "◇" },
  { name: "CSS3", level: 90, icon: "◈" },
  { name: "Git & GitHub", level: 88, icon: "⌘" },
];

export default function Skills() {
  return (
    <section id="skills" className="relative bg-[#050505] px-5 sm:px-8 py-28 sm:py-36 overflow-hidden">
      <div className="absolute left-0 top-1/3 w-1 h-72 bg-gradient-to-b from-transparent via-amber-400 to-transparent blur-sm opacity-70" />
      <div className="absolute right-0 bottom-20 w-1 h-72 bg-gradient-to-b from-transparent via-orange-400 to-transparent blur-sm opacity-60" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionTitle number="02" subtitle="Skills" title="My Toolkit" />
        <p className="max-w-2xl text-neutral-500 text-sm md:text-base leading-7 mb-12">
          Technologies and tools I use to create modern, responsive and interactive frontend applications.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {skillsData.map((skill) => (
            <div key={skill.name} className="relative overflow-hidden group p-7 rounded-2xl border border-white/10 bg-[#0d0d0d] hover:border-amber-400/40 hover:shadow-[0_0_40px_rgba(245,158,11,0.08)] transition-all duration-500">
              <div className="absolute left-0 top-5 bottom-5 w-[2px] bg-gradient-to-b from-transparent via-amber-400 to-transparent opacity-70 group-hover:opacity-100 group-hover:shadow-[0_0_20px_5px_rgba(245,158,11,0.5)] transition" />
              <div className="absolute right-0 top-1/2 w-20 h-20 bg-amber-400/5 blur-3xl rounded-full" />

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-amber-400 font-black group-hover:border-amber-400/40 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.15)] transition">
                    {skill.icon}
                  </div>
                  <h3 className="font-bold text-white text-lg"> {skill.name}</h3>
                </div>
                <span className="text-amber-400 font-black drop-shadow-[0_0_10px_rgba(245,158,11,0.35)]">{skill.level}%</span>
              </div>

              <div className="mt-6 h-2 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full rounded-full bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-500 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.6)] transition"
                  style={{ width: `${skill.level}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
