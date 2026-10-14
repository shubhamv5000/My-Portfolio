import React from "react";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-amber-400 selection:text-black">
      <Navbar />
      <main>
        <Profile />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
