import Hero from "./components/Hero";
import Skills from "./components/Skills";
export default function Home() {
  return (
    <div className="flex flex-col gap-10 md:gap-20 pb-20 ">
      <section id="home">
        <Hero />
      </section>
      <section id="skills" className="px-6">
        <Skills />
      </section>
    </div>
  );
}
