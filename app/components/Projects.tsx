"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "../data";
interface ProjectCardProps {
  index: number;
  title: string;

  image: string;
  category: string;
  status?: "in-progress" | "completed";
  siteLink: string;
  gitHubLink: string;
}

const ProjectCard = ({
  index,
  title,

  image,
  category,
  status,
  siteLink,
  gitHubLink,
}: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const { left, top, width, height } =
      cardRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    setRotate({ x: y * -20, y: x * 20 });
  };
  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1000,
        rotateX: rotate.x,
        rotateY: rotate.y,
      }}
      className="relative group cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-2xl glassmorphism aspect-4/3 border border-white/5 transition-colors group-hover:border-neon-blue/40">
        {status === "in-progress" && (
          <div className="absolute top-4 right-4 z-30 px-3 py-1 bg-emerald-500/10 border border-emerald-500/40 rounded-full backdrop-blur-md shadow-[0_0_10px_rgba(16,185,129,0.1)]">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">
                In Development
              </span>
            </div>
          </div>
        )}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="absolute inset-0 bg-cosmic-black/40 group-hover:bg-cosmic-black/20 transition-colors" />
        </div>

        <div className="absolute inset-0 flex flex-col justify-end p-8 translate-z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-linear-to-t from-cosmic-black via-cosmic-black/60 to-transparent">
          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ">
            <span className="text-neon-blue text-xs font-bold uppercase tracking-wider">
              {category}
            </span>
            <h3 className="text-2xl font-bold mb-2 text-white">{title}</h3>

            <div className="flex gap-4">
              <a
                href={siteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 hover:bg-neon-blue rounded-full transition-colors text-white"
              >
                <ExternalLink size={18} />
              </a>
              <a
                href={gitHubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 hover:bg-neon-blue rounded-full transition-colors text-white"
              >
                <Github size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [activeTab, setActiveTab] = useState("All");
  const categories = ["All", "Next.JS", "React", "JS", "HTML & CSS"];

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((p) => p.category === activeTab);
  return (
    <section className="max-w-7xl mx-auto py-5 relative ">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-3xl md:tex-5xl font-bold mb-4 text-green-500"
          >
            Featured <span className="text-gradient">Creations</span>
          </motion.h2>

          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-lg"
          >
            Acurated selection of my most Lorem ipsum dolor sit.
          </motion.h2>
        </div>
        <div className="flex bg-white/5 p-1 rounded-full border border-white/10 self-sart md:self-auto overflow-x-auto no-scrollbar">
          {categories.map((category, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(category)}
              className={`relative px-6 py-2 rounded-full text-sm font-meduim transition-colors whitespace-nowrap ${activeTab === category ? "text-white" : "text-slate-400  hover:text-white"}`}
            >
              {activeTab === category && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-neon-blue rounded-full shadow-[0_0_15px_rgba(59, 130, 246, 0.5)]"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10 ">{category}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {" "}
          {filteredProjects.map((project, i) => {
            const { key, ...projectProps } = project;
            return <ProjectCard key={key} {...projectProps} index={i} />;
          })}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;
