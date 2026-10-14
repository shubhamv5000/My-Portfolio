import React, { useState } from "react";

export default function Profile() {
  const [isProfileHover, setIsProfileHover] = useState(false);

  return (
    <section id="profile" className="relative min-h-screen flex items-center overflow-hidden bg-[#050505] px-5 sm:px-8 pt-32 pb-20">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-amber-500/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-500/10 blur-[140px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-yellow-500/5 blur-[130px] rounded-full" />
        <div className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }} />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-400/20 bg-amber-400/5 text-amber-300 text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] shadow-[0_0_30px_rgba(245,158,11,0.08)]">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />Available for work
          </div>

          <p className="mt-7 text-neutral-500 text-sm uppercase tracking-[0.3em] font-semibold"> Hello, I'm</p>
          <h1 className="mt-3 text-6xl sm:text-7xl md:text-8xl lg:text-[110px] font-black tracking-[-0.07em] leading-[0.88] text-white">
            Shubham<br />
            <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(245,158,11,0.25)]">
              Verma.</span>
          </h1>

          <h2 className="mt-8 text-xl sm:text-2xl md:text-3xl font-bold text-neutral-200">React{" "}
            <span className="text-amber-400 drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]">Frontend Developer</span>
          </h2>

          <p className="mt-5 max-w-xl mx-auto lg:mx-0 text-sm sm:text-base md:text-lg leading-8 text-neutral-400">
            I build modern, responsive and interactive web experiences using
            React, JavaScript and modern CSS technologies.
          </p>

          <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
            <a href="#projects" className="group px-7 py-4 rounded-xl bg-amber-400 text-black font-black text-xs uppercase tracking-wider hover:bg-amber-300 hover:-translate-y-1 transition shadow-[0_15px_50px_rgba(245,158,11,0.25)]">
              Explore Projects
              <span className="ml-2 group-hover:translate-x-1 inline-block transition"> →</span>
            </a>
            <a href="/Resume.pdf" download className="px-7 py-4 rounded-xl border border-white/10 bg-white/[0.03] text-white font-bold text-xs uppercase tracking-wider hover:border-amber-400/40 hover:bg-white/[0.06] hover:-translate-y-1 transition">
              Download CV
            </a>
          </div>

          <div className="mt-9 flex justify-center lg:justify-start gap-5">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-neutral-500 hover:text-amber-400 transition"> GitHub ↗ </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-neutral-500 hover:text-amber-400 transition"> LinkedIn ↗ </a>
          </div>
        </div>

        <div className="relative flex justify-center items-center min-h-[500px]" style={{ perspective: "1200px" }}>
          <div className="absolute w-[350px] sm:w-[470px] h-[400px] sm:h-[520px] rounded-[60px] bg-amber-400/10 blur-[100px] animate-pulse" />
          <div className={`absolute w-[320px] sm:w-[410px] h-[380px] sm:h-[480px] rounded-[55px] border transition-all duration-1000 ${isProfileHover ? "border-amber-400/50 rotate-180 shadow-[0_0_80px_rgba(245,158,11,0.15)]" : "border-amber-400/10 rotate-0"}`} />
          <div className="absolute w-[370px] sm:w-[470px] h-[430px] sm:h-[520px] rounded-[65px] border border-dashed border-white/5 animate-[spin_25s_linear_infinite]" />
          
          <div onMouseEnter={() => setIsProfileHover(true)} onMouseLeave={() => setIsProfileHover(false)} className="relative z-10">
            <div className={`absolute -right-3 top-8 bottom-8 w-2 rounded-full bg-gradient-to-b from-transparent via-amber-400 to-transparent blur-md transition-all duration-500 ${isProfileHover ? "opacity-100 shadow-[0_0_40px_15px_rgba(245,158,11,0.45)]" : "opacity-50"}`} />
            <div className={`absolute -left-3 top-16 bottom-16 w-1 rounded-full bg-gradient-to-b from-transparent via-orange-400 to-transparent blur-sm transition-all duration-500 ${isProfileHover ? "opacity-90" : "opacity-30"}`} />

            <div className={`relative w-[280px] sm:w-[360px] h-[370px] sm:h-[450px] rounded-[40px] border bg-gradient-to-br from-[#181818] via-[#101010] to-[#070707] p-3 shadow-[0_40px_100px_rgba(0,0,0,0.8)] transition-all duration-[1200ms] ${isProfileHover ? "border-amber-400/50 shadow-[0_40px_120px_rgba(245,158,11,0.20)]" : "border-white/10"}`}
              style={{
                transform: isProfileHover ? "rotateX(360deg)" : "rotateX(0deg)",
                transformStyle: "preserve-3d",
              }}>
              <div className={`relative h-full rounded-[32px] border bg-[#0b0b0b] flex flex-col items-center justify-center overflow-hidden transition-all duration-700 ${isProfileHover ? "border-amber-400/30" : "border-white/5"}`}>
                <div className={`absolute -top-40 -left-20 w-[450px] h-[200px] bg-gradient-to-r from-transparent via-amber-400/10 to-transparent rotate-[-25deg] blur-xl transition-all duration-1000 ${isProfileHover ? "translate-y-[500px]" : "translate-y-0"}`} />
                <div className={`absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-amber-500/15 via-transparent to-transparent transition-opacity duration-500 ${isProfileHover ? "opacity-100" : "opacity-60"}`} />

                <div className={`relative w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 flex items-center justify-center overflow-hidden bg-[#151515] transition-all duration-700 ${isProfileHover ? "border-amber-400/70 scale-110 shadow-[0_0_100px_rgba(245,158,11,0.35)]" : "border-amber-400/30 shadow-[0_0_80px_rgba(245,158,11,0.12)]"}`}>
                  <img src="/Profil.jpg" alt="Shubham Verma" className={`w-full h-full object-cover transition-transform duration-700 ${isProfileHover ? "scale-110" : "scale-100"}`} />
                </div>

                <h3 className={`relative mt-8 text-xl font-black transition-all duration-500 ${isProfileHover ? "text-amber-400" : "text-white"}`}> Shubham Verma </h3>
                <p className="relative mt-2 text-xs uppercase tracking-[0.25em] text-amber-400">React Developer</p>

                <div className="relative mt-7 flex gap-2">
                  {["React", "JS", "CSS"].map((item) => (
                    <span key={item} className={`px-3 py-1.5 rounded-lg border text-[10px] transition-all duration-500 ${isProfileHover ? "border-amber-400/30 bg-amber-400/10 text-amber-300" : "border-white/10 bg-white/5 text-neutral-300"}`}>{item}</span>
                  ))}
                </div>

                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                  <span className="text-[8px] uppercase tracking-[0.2em] text-neutral-600">Frontend System </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.5)]" />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -left-2 sm:left-0 top-10 px-4 py-3 rounded-xl border border-amber-400/20 bg-[#111]/80 backdrop-blur-xl shadow-[0_0_30px_rgba(245,158,11,0.08)] animate-bounce">
            <p className="text-[9px] uppercase tracking-widest text-neutral-500">Experience </p>
            <p className="text-sm font-black text-white">Frontend</p>
          </div>
          <div className="absolute -right-2 sm:right-0 bottom-14 px-4 py-3 rounded-xl border border-amber-400/20 bg-[#111]/80 backdrop-blur-xl shadow-[0_0_30px_rgba(245,158,11,0.08)]">
            <p className="text-[9px] uppercase tracking-widest text-neutral-500">Projects</p>
            <p className="text-sm font-black text-amber-400">20+</p>
          </div>
        </div>
      </div>
    </section>
  );
}
