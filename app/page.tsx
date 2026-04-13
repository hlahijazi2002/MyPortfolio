import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 md:gap-20 ">
      <section id="home">
        <Hero />
      </section>
      <section id="aducation" className="px-6">
        <Education />
      </section>
      <section id="skills" className="px-6">
        <Skills />
      </section>
      <section id="projects" className="px-6">
        <Projects />
      </section>
      <section id="contact" className="px-6">
        <Contact />
      </section>
      <footer className="w-full py-8 border-t border-white/5 text-center text-slate-500 text-sm">
        <p>
          {" "}
          © {new Date().getFullYear()} Hla Hijazi Portfolio. Build with Next.js
          & Framer Motion.
        </p>
      </footer>
    </div>
  );
}
