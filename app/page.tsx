import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import EducationalBackground from "./components/EducationalBackground";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <EducationalBackground />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
