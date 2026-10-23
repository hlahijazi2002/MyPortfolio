"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "../data";
import { useLang, type L10n } from "../i18n/LanguageProvider";

interface ProjectCardProps {
  index: number;
  title: L10n;
  image: string;
  category: string;
  status?: "in-progress" | "completed";
  siteLink: string;
  gitHubLink: string;
}

const text = {
  heading: {
    en: { parts: ["All", "Projects"], hl: 1 },
    ar: { parts: ["كل", "المشاريع"], hl: 1 },
  },
  subtitle: {
    en: "A curated collection of digital experiences, where structural engineering meets modern web development",
    ar: "مجموعة مختارة من التجارب الرقمية، حيث تلتقي الهندسة بتطوير الويب الحديث.",
  },
  inDevelopment: { en: "In Development", ar: "قيد التطوير" },
  all: { en: "All", ar: "الكل" },
};

// value = القيمة المستخدمة بالفلترة (لازم تطابق category بالداتا)
const categories: { value: string; label: L10n }[] = [
  { value: "All", label: text.all },
  { value: "Next.JS", label: { en: "Next.JS", ar: "Next.JS" } },
  { value: "React", label: { en: "React", ar: "React" } },
  { value: "JS", label: { en: "JS", ar: "JS" } },
  { value: "HTML & CSS", label: { en: "HTML & CSS", ar: "HTML & CSS" } },
];

export const ProjectCard = ({
  index,
  title,
  image,
  category,
  status,
  siteLink,
  gitHubLink,
}: ProjectCardProps) => {
  const { t, lang } = useLang();
  const isAr = lang === "ar";
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
      <div className="relative overflow-hidden rounded-2xl glassmorphism aspect-4/3 border border-white/5 shadow-md transition-colors group-hover:border-neon-blue/40">
        {status === "in-progress" && (
          // end-4 بدل right-4 عشان يروح للزاوية الصح بالعربي
          <div className="absolute top-4 end-4 z-30 px-3 py-1 bg-emerald-500/10 border border-emerald-500/40 rounded-full backdrop-blur-md shadow-[0_0_10px_rgba(16,185,129,0.1)]">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span
                className={`text-[10px] font-bold text-emerald-400 ${
                  isAr ? "text-xs" : "uppercase tracking-wider"
                }`}
              >
                {t(text.inDevelopment)}
              </span>
            </div>
          </div>
        )}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="absolute inset-0 bg-[#000000]/10 group-hover:bg-[#000000]/20 transition-colors" />
        </div>

        <div className="absolute inset-0 flex flex-col justify-end p-8 translate-z-20 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 bg-linear-to-t from-[#000000]/90 via-[#000000]/60 to-transparent">
          <div className="transform md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-300">
            {/* الفئة اسم تقنية بالإنجليزي، فبتضل uppercase وبتنعرض LTR */}
            <span
              dir="ltr"
              className="inline-block text-[#60a5fa] text-xs font-bold uppercase tracking-wider"
            >
              {category}
            </span>
            <h3 className="text-2xl font-bold mb-2 text-[#ffffff]">
              {t(title)}
            </h3>

            <div className="flex gap-4">
              <a
                href={siteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#ffffff]/15 hover:bg-neon-blue rounded-full transition-colors text-[#ffffff]"
              >
                <ExternalLink size={18} />
              </a>
              <a
                href={gitHubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#ffffff]/15 hover:bg-neon-blue rounded-full transition-colors text-[#ffffff]"
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
  const { t } = useLang();
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  const heading = t(text.heading);

  return (
    <section className="relative pt-6">
      <div className="flex flex-col items-center text-center gap-6 mb-10">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
          >
            {heading.parts.map((word, i) => (
              <span key={i}>
                {i === heading.hl ? (
                  <span className="text-green-500">{word}</span>
                ) : (
                  word
                )}
                {i < heading.parts.length - 1 && " "}
              </span>
            ))}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-lg mx-auto"
          >
            {t(text.subtitle)}
          </motion.p>
        </div>
        <div className="flex bg-white/5 p-1 rounded-full border border-white/10 self-center overflow-x-auto no-scrollbar">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setActiveTab(category.value)}
              className={`relative px-6 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${activeTab === category.value ? "text-[#ffffff]" : "text-slate-400 hover:text-cosmic-blue dark:hover:text-[#ffffff]"}`}
            >
              {activeTab === category.value && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-neon-blue rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{t(category.label)}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
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
