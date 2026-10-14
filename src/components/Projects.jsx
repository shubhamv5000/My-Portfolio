import React from "react";
import SectionTitle from "./SectionTitle";

const projectData = [
  {
    number: "01",
    title: "Luxury Experience",
    image: "/project1_luxury_hotel.jpg",
    category: "Frontend",
    description: "A modern premium interface created with React and responsive design principles.",
    tech: ["React", "Tailwind", "JavaScript"],
  },
  {
    number: "02",
    title: "E-Commerce Platform",
    image: "/project2_ecommerce.jpg",
    category: "Web App",
    description: "Responsive shopping interface with product layouts, search functionality and modern interactions.",
    tech: ["React", "REST API", "CSS"],
  },
  {
    number: "03",
    title: "Analytics Dashboard",
    image: "/project3_dashboard.jpg",
    category: "Dashboard",
    description: "A clean analytics dashboard designed to present complex data through a simple and interactive interface.",
    tech: ["React", "Charts", "Tailwind"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative bg-[#080808] px-5 sm:px-8 py-28 sm:py-36 overflow-hidden">
      <div className="absolute left-0 top-20 w-1 h-80 bg-gradient-to-b from-transparent via-amber-400 to-transparent blur-sm opacity-60" />
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionTitle number="03" subtitle="Selected Work" title="Featured Projects" />

        <div className="grid lg:grid-cols-3 gap-7">
          {projectData.map((project) => (
            <article key={project.number} className="relative group rounded-3xl border border-white/10 bg-[#101010] overflow-hidden hover:border-amber-400/40 hover:-translate-y-2 hover:shadow-[0_25px_70px_rgba(245,158,11,0.08)] transition-all duration-500">
              <div className="absolute left-0 top-8 bottom-8 w-[2px] bg-gradient-to-b from-transparent via-amber-400 to-transparent opacity-0 group-hover:opacity-100 group-hover:shadow-[0_0_25px_6px_rgba(245,158,11,0.5)] transition z-20" />
              
              <div className="relative h-64 overflow-hidden bg-[#151515]">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />
                <span className="absolute top-5 left-5 text-5xl font-black text-white/20">{project.number}</span>
                <span className="absolute top-5 right-5 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white group-hover:bg-amber-400 group-hover:text-black transition">↗</span>
                <span className="absolute bottom-5 left-5 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-[9px] uppercase tracking-widest text-amber-400 font-bold">{project.category}</span>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-black text-white group-hover:text-amber-400 transition">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-neutral-400">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[10px] text-neutral-400">{tech}</span>
                  ))}
                </div>

                <div className="mt-6 pt-5 border-t border-white/5 flex justify-between">
                  <a href="#" className="text-xs font-bold uppercase tracking-wider text-white hover:text-amber-400 transition">Live Demo →</a>
                  <a href="#" className="text-xs font-bold uppercase tracking-wider text-neutral-500 hover:text-white transition">GitHub ↗</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
