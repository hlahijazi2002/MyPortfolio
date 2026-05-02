"use client";
import { motion } from "framer-motion";
import { education } from "../data";

interface EducationItem {
  degree: string;
  institution: string;
  duration: string;
  description: string;
  tech: string[];
}
const EducationCard = ({
  item,
  index,
}: {
  item: EducationItem;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative glassmorphism p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/7 transition-all duration-300 h-full flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <span className="px-3 py-1 rounded-full bg-neon-blue/10 border border-neon-blue/20 text-neon-blue font-mono text-xs">
            {item.duration}
          </span>
        </div>

        <h3 className="text-2xl font-medium text-white mb-2 group-hover:text-neon-blue transition-colors">
          {item.degree}
        </h3>

        <p className="text-green-400 font-medium mb-4 flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-green-400"></span>
          {item.institution}
        </p>

        <p className="text-slate-400 text-sm mb-8 leading-relaxed grow">
          {item.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {item.tech.map((skill: string, i: number) => (
            <span
              key={i}
              className="px-3 py-1 text-[11px]  rounded-lg bg-slate-800/50 border border-white/5 text-slate-300 group-hover:border-neon-blue/30 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Education = () => {
  return (
    <section className="max-w-7xl mx-auto mb-10 px-6 mt-20">
      <div className="mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-bold text-center text-white mb-3"
        >
          <span className="text-green-400">Education</span>
        </motion.h2>
      </div>

      <div className="relative grid md:grid-cols-2 gap-10">
        {education.map((item, index) => (
          <EducationCard key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Education;
