import type { Metadata } from "next";
import Projects from "@/app/components/Projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected web projects by Hla Hijazi, built with Next.js, React, Node.js, and TypeScript.",
  alternates: {
    canonical: "/projects",
    languages: { en: "/projects", ar: "/ar/projects" },
  },
  openGraph: {
    title: "Projects | Hla Hijazi",
    description:
      "Selected web projects built with Next.js, React, Node.js, and TypeScript.",
    url: "/projects",
  },
};

const ProjectsPage = () => {
  return (
    <section id="projects" className="px-6 pt-28 pb-20">
      <div className="max-w-7xl mx-auto">
        <Projects />
      </div>
    </section>
  );
};

export default ProjectsPage;
