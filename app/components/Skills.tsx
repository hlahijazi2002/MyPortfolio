"use client";
import { motion } from "framer-motion";
import { skills, techSkills } from "../data";
import Image from "next/image";

interface SkillCardProps {
  title: string;
  icon: React.ElementType;
  index: number;
}

const SkillCard = ({ title, icon: Icon, index }: SkillCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="relative px-3 py-2 w-fit shrink-0 rounded-2xl border border-white/5 bg-white/2 backdrop-blur-sm hover:border-neon-blue/50 transition-all duration-300 group overflow-hidden"
    >
      <div className="absolute inset-0 bg-neon-blue/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative z-10 flex gap-3 items-center">
        <div className="p-2 rounded-lg w-fit bg-neon-blue/10 text-neon-blue group-hover:scale-110 transition-transform">
          <Icon size={18} />
        </div>
        <h3 className="text-slate-200 text-sm">{title}</h3>
      </div>
    </motion.div>
  );
};

const TechCard = ({
  src,
  width,
  height,
  index,
}: {
  src: string;
  width: number;
  height: number;
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.05 }}
    className="flex overflow-hidden backdrop-blur-xl shrink-0  items-center justify-center p-4 rounded-xl border border-white/5 bg-white/1 hover:bg-white/5 transition-all duration-300"
  >
    <Image
      src={src}
      width={width}
      height={height}
      alt="skill"
      className="opacity-70 hover:opacity-100 transition-opacity"
    />
  </motion.div>
);

const Skills = () => {
  const dublicatedTech = [...techSkills, ...techSkills];
  const dublicatedSkills = [...skills, ...skills];
  return (
    <section className="max-w-7xl mx-auto relative py-6">
      <div className="flex flex-row md:flex-col justify-between items-center mb-14 gap-6">
        <div className="max-w-xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Technical <span className="text-green-400">Expertise</span>
          </motion.h2>
          <p className="text-slate-400 text-md">
            A specialized collection of technologies and tools I use to bring
            high-performance web applications to life.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-12 relative overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
          className="flex gap-3"
        >
          {dublicatedTech.map((tech, i) => (
            <TechCard
              key={i}
              src={tech.Image}
              width={tech.width}
              height={tech.height}
              index={i}
            />
          ))}
        </motion.div>

        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{ ease: "linear", duration: 35, repeat: Infinity }}
          className="gap-3 flex"
        >
          {dublicatedSkills.map((skill, i) => (
            <SkillCard key={i} {...skill} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default Skills;
