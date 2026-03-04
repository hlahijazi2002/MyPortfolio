"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";
import { skills, techSkills } from "../data";
import Image from "next/image";

interface SkillCircleProps {
  percentage: number;
  title: string;
  icon: React.ElementType;
  index: number;
}

const SkillCircle = ({
  percentage,
  title,
  icon: Icon,
  index,
}: SkillCircleProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, percentage, {
        duration: 2,
        onUpdate: (value) => setCount(Math.floor(value)),
        ease: "easeInOut",
      });
      return () => controls.stop();
    }
  }, [isInView, percentage]);
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (count / 100) * circumference;
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5, scale: 1.05 }}
      className="flex flex-col items-center gap-4 group "
    >
      <div className="relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center ">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="50%"
            cy="50%"
            r={radius}
            fill="transparent"
            stroke="currentColor"
            strokeWidth="6"
            className="text-white/5"
          />
          <motion.circle
            cx="50%"
            cy="50%"
            r={radius}
            fill="transparent"
            stroke="currentColor"
            strokeWidth="6"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={isInView ? { strokeDashoffset: offset } : {}}
            transition={{ duration: 2, ease: "easeOut" }}
            className="text-neon-blue drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]"
          />
        </svg>
        <div className="absolute flex flex-col items-center justify-center text-white p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 2 }}
            className="group-hover:text-neon-blue transition-colors"
          >
            <Icon size={20} />
          </motion.div>
          <span className="text-xl font-bold">{count}%</span>
        </div>
      </div>
      <h3 className="text-slate-300 font-medium group-hover:text-white transition-colors">
        {title}
      </h3>
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
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, type: "spring", stiffness: 100 }}
      whileHover={{ y: -10, backgroundColor: "rgba(255,255,255,0.1)" }}
      className="flex flex-col items-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-neon-blue/50 transition-all group"
    >
      <Image src={src} width={width} height={height} alt="skill image" />
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section className="max-w-7xl mx-auto py-5 relative">
      <div className="mb-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl text-green-400  md:text-5xl font-bold mb-4"
        >
          My Specialized <span className="text-gradient">Skillset</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-slate-400 max-w-2xl mx-auto"
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla,
          ratione?
        </motion.p>
      </div>
      <div className="glassmorphism rounded-4xl p-10 md:p-16 overflow-hidden relative flex flex-col gap-24">
        {" "}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 relative z-10 justify-center ">
          {techSkills.map((tech, i) => (
            <TechCard
              key={i}
              src={tech.Image}
              width={tech.width}
              height={tech.height}
              index={i}
            />
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-12 gap-x-6 relative z-10">
          {skills.map((skill, i) => (
            <SkillCircle key={i} {...skill} index={i} />
          ))}
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-neon-blue/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-500/10 blur-[100px] rounded-full" />
      </div>
    </section>
  );
};
export default Skills;
