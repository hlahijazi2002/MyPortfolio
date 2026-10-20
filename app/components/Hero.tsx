"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

const typed = (text: string, start: number) =>
  Array.from(text).map((ch, i) => (
    <motion.span
      key={i}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.1, delay: (start + i) * 0.07 }}
    >
      {ch}
    </motion.span>
  ));

const Hero = () => {
  const bgProjects = projects.slice(0, 9);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [btnPos, setBtnPos] = useState({ x: 0, y: 0 });

  const handleBtnMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (buttonRef.current) {
      const { clientX, clientY } = e;
      const { left, top, width, height } =
        buttonRef.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      setBtnPos({ x: (clientX - centerX) * 0.4, y: (clientY - centerY) * 0.4 });
    }
  };

  const handleBtnMouseLeave = () => {
    setBtnPos({ x: 0, y: 0 });
  };

  return (
    <section className="relative overflow-hidden pt-24 pb-6 md:pt-32 md:pb-10">
      {/* Background: tilted project screenshots */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -right-20 -top-10 w-[110%] md:w-[75%] grid grid-cols-3 gap-4 -rotate-6 scale-110 opacity-30">
          {bgProjects.map((p, i) => (
            <div
              key={i}
              className="aspect-4/3 rounded-xl bg-cover bg-center shadow-xl"
              style={{ backgroundImage: `url(${p.image})` }}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-linear-to-r from-(--background) via-(--background)/85 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-(--background) to-transparent" />
        <div className="absolute -top-24 right-1/4 w-96 h-96 bg-green-500/15 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-6 lg:gap-14 items-center">
        <div className="flex flex-col gap-5 md:gap-6">
          <motion.div
            {...fadeUp(0)}
            className="flex items-center gap-2 text-[10px] sm:text-xs font-semibold tracking-[0.2em] sm:tracking-[0.25em] uppercase text-green-600 dark:text-green-400"
          >
            <span className="w-2 h-2 rounded-full bg-green-500" />
            Engineer • Developer • Builder
          </motion.div>

          <h1 className="text-3xl sm:text-4xl xl:text-5xl font-extrabold leading-[1.15] tracking-tight text-white">
            {typed("I build scalable ", 0)}
            <span className="text-green-600 dark:text-green-400">
              {typed("web products", 17)}
            </span>
            {typed(" people love to use.", 29)}
          </h1>

          <motion.p
            {...fadeUp(3.6)}
            className="text-slate-400 text-sm md:text-base max-w-md leading-relaxed"
          >
            Full-Stack Developer working with Next.js and the MERN stack. Clean
            code, reliable systems, fast interfaces.
          </motion.p>

          <motion.div
            {...fadeUp(3.9)}
            className="flex flex-wrap gap-3 sm:gap-4 mt-1"
          >
            <motion.a
              href="/#projects"
              ref={buttonRef}
              onMouseMove={handleBtnMouseMove}
              onMouseLeave={handleBtnMouseLeave}
              animate={{ x: btnPos.x, y: btnPos.y }}
              transition={{ type: "spring", stiffness: 150, damping: 15 }}
              whileTap={{ scale: 0.95 }}
              className="relative inline-flex items-center gap-2 px-7 py-3.5 sm:px-8 sm:py-4 bg-neon-blue rounded-full font-semibold text-[#ffffff] shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.7)] transition-shadow overflow-hidden group"
            >
              <span className="relative z-10">View My Work</span>
              <ArrowUpRight size={18} className="relative z-10" />
              <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
            <Link
              href="/#contact"
              className="px-7 py-3.5 rounded-full font-semibold text-white glassmorphism border border-white/20 hover:border-neon-blue/50 transition-colors"
            >
              Let&apos;s Talk
            </Link>
          </motion.div>
        </div>

        {/* Photo + name */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-first lg:order-last flex flex-col items-center gap-4"
        >
          <div className="relative w-44 h-44 sm:w-60 sm:h-60 lg:w-[26rem] lg:h-[26rem]">
            <div className="relative w-full h-full rounded-full overflow-hidden">
              <Image
                src="/profile.png"
                alt="Hla Hijazi"
                fill
                priority
                sizes="(max-width: 1024px) 240px, 416px"
                className="object-cover object-top"
              />
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="hidden sm:block absolute -left-4 sm:-left-12 top-8 px-4 py-3 rounded-2xl glassmorphism border border-white/10 shadow-xl"
            >
              <p className="text-[10px] uppercase tracking-wider text-slate-500">
                Main stack
              </p>
              <p className="text-sm font-bold text-white">
                Next.js · TypeScript
              </p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="hidden sm:block absolute -right-4 sm:-right-10 bottom-8 px-4 py-3 rounded-2xl glassmorphism border border-white/10 shadow-xl"
            >
              <p className="text-[10px] uppercase tracking-wider text-slate-500">
                Based in
              </p>
              <p className="text-sm font-bold text-white">Palestine · Remote</p>
            </motion.div>
          </div>

          <div className="hidden lg:block text-center">
            <p className="text-2xl font-extrabold text-white">Hla Hijazi</p>
            <p className="text-xs tracking-[0.2em] uppercase text-green-600 dark:text-green-400 mt-1">
              Systems Engineering • Full-Stack
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
