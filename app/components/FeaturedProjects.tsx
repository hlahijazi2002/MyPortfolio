"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { projects } from "../data";
import { ProjectCard } from "./Projects";

const FeaturedProjects = () => {
  const featured = projects.slice(0, 3);

  return (
    <section className="max-w-7xl mx-auto py-5 relative">
      <div className="mb-12 text-center">
        <motion.h2
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-4 text-white"
        >
          Featured <span className="text-green-500">Creations</span>
        </motion.h2>
        <p className="text-slate-400 max-w-lg mx-auto">
          A curated collection of digital experiences, where structural
          engineering meets modern web development
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featured.map((project, i) => {
          const { key, ...projectProps } = project;
          return <ProjectCard key={key} {...projectProps} index={i} />;
        })}
      </div>

      <div className="flex justify-center mt-12">
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 px-8 py-3 rounded-full bg-neon-blue text-white font-medium hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-shadow"
        >
          View All Projects
          <ArrowRight
            size={18}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>
    </section>
  );
};

export default FeaturedProjects;
