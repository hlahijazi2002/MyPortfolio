import Hero from "./components/Hero";
import Skills from "./components/Skills";
import FeaturedProjects from "./components/FeaturedProjects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import About from "./components/About";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-24 pb-20">
      <section id="home">
        <Hero />
      </section>
      <section id="about" className="px-6 scroll-mt-24">
        <About />
      </section>
      <section id="skills" className="px-6 scroll-mt-24">
        <Skills />
      </section>
      <section id="projects" className="px-6 scroll-mt-24">
        <FeaturedProjects />
      </section>
      <section id="education" className="px-6 scroll-mt-24">
        <Education />
      </section>
      <section id="contact" className="px-6 scroll-mt-24">
        <Contact />
      </section>
    </div>
  );
}
