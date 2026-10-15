"use client";
import { motion } from "framer-motion";
import { Bot, Layers, Languages, Search } from "lucide-react";
import Image from "next/image";

const strengths = [
  {
    icon: Bot,
    title: "AI Integration",
    text: "Chat assistants and AI features built into real products.",
  },
  {
    icon: Layers,
    title: "Full-Stack",
    text: "Interface, API, and database handled end to end.",
  },
  {
    icon: Languages,
    title: "Arabic & English",
    text: "RTL and LTR support from day one.",
  },
  {
    icon: Search,
    title: "SEO Specialist",
    text: "Technical audits, fixes, and bilingual content that ranks.",
  },
];

const About = () => {
  return (
    <section className="max-w-7xl mx-auto py-5 relative">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-4 text-white"
        >
          Who&apos;s <span className="text-green-500">Hla</span> ?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-slate-400 max-w-lg mx-auto"
        >
          Turning ideas into high-performance web platforms.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="glassmorphism rounded-3xl border border-white/10 p-8 md:p-10 flex flex-col gap-5"
        >
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 shrink-0 rounded-full overflow-hidden border border-white/20">
              <Image
                src="/profile.png"
                alt="Hla Hijazi"
                fill
                sizes="64px"
                className="object-cover object-top"
              />
            </div>
            <div>
              <p className="text-white font-bold text-lg leading-tight">
                Eng. Hla Hijazi
              </p>
              <div className="mt-1 flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500 shadow-[0_0_6px_rgba(34,197,94,0.8)]" />
                </span>
                <span className="text-xs font-semibold text-green-700 dark:text-green-400">
                  Available for work
                </span>
              </div>
            </div>
          </div>

          <p className="text-slate-300 leading-relaxed">
            Hi, I&apos;m Hla, a software engineer with 3+ years of experience
            building scalable web applications, from enterprise dashboards to
            AI-integrated platforms.
          </p>

          <p className="text-slate-400 leading-relaxed">
            I work across the stack with Next.js, React, Node.js, and
            TypeScript, backed by PostgreSQL, MongoDB, and Prisma. I&apos;m also
            pursuing an MBA in Artificial Intelligence, so I can take a feature
            from the interface to the data to the AI layer.
          </p>
        </motion.div>

        <div className="flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 text-[12px] font-semibold tracking-[0.25em] uppercase text-white mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              How I Can Help?
            </div>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 auto-rows-fr flex-1">
            {strengths.map(({ icon: Icon, title, text }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{
                  duration: 0.6,
                  delay: 0.15 + i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group glassmorphism rounded-2xl border border-white/10 p-5 hover:border-neon-blue/40 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-neon-blue/10 text-neon-blue flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Icon size={18} />
                </div>
                <h3 className="text-white font-bold mb-1">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
