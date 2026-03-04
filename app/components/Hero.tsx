"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLAnchorElement | HTMLButtonElement | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 30 });
  const rotateX = useTransform(mouseXSpring, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseYSpring, [-300, 300], [-10, 10]);
  const [orbCircles, setOrbCircles] = useState<
    { size: string; top: string; left: string }[]
  >([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      x.set(clientX - innerWidth / 2);
      y.set(clientY - innerHeight / 2);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]);

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
  const headline = "Crafting Seamless Digital Experiences with Code.";
  const words = headline.split(" ");

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex items-center justify-center pt-24 md:pt-0 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6 z-10">
          <div className="overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-neon-blue font-semibold tracking-widest text-sm uppercase flex items-center gap-2 "
            >
              <span className="w-8 h-[1px] bg-neon-blue" />
              Creative Web Developer
            </motion.div>
          </div>
          <h1 className="text-3xl md:text-5xl text-green-500 font-bold leading-[1.1] md:leading[1.1] tracking-tight ">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.1,
                  ease: [0.2, 0.65, 0.3, 0.9],
                }}
                className="inline-block mr-[0.2em]"
              >
                {word}
              </motion.span>
            ))}
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-slate-400 text-lg md:text-xl max-w-xl leading-relaxed"
          >
            I specialize in building high-performance, interactive web
            applications using React & Next.js. Turning complex ideas into
            elegant, user-centric solutions.
          </motion.p>
          <div className="flex gap-4 mt-4">
            <motion.a
              href="#projects"
              ref={buttonRef as any}
              onMouseMove={handleBtnMouseMove}
              onMouseLeave={handleBtnMouseLeave}
              animate={{ x: btnPos.x, y: btnPos.y }}
              transition={{ type: "spring", stiffness: 150, damping: 15 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-8 py-4 bg-neon-blue rounded-full font-bold text-white shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:shadow-[0_0_30px_rgba(59,130,246,0.7)] transition-shadow overflow-hidden group"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
            <motion.a
              href="#contact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="px-8 py-4 border border-white/10 rounded-full font-bold text-white hover:bg-white/5 transition-colors"
            >
              Let&apos;s Talk
            </motion.a>
          </div>
        </div>
        <motion.div
          style={{ rotateX, rotateY, perspective: 1000 }}
          className="relative flex justify-center items-center "
        >
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 2, -2, 0] }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-64 h-64 md:w-96 md:h-96 rounded-full relative "
          >
            <div className="absolute inset-0 bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-full opacity-40 blur-3xl animate-pulse" />
            <div className="absolute inset-4 bg-cosmic-blue/80 backdrop-blur-3xl rounded-full border border-white/10 shadow-[inner_0_0_50px_rgba(255,255,255,0.1)] overflow-hidden">
              {orbCircles.map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full bg-white/20 "
                  style={{
                    width: Math.random() * 20 + 5 + "px",
                    height: Math.random() * 20 + 5 + "px",
                    top: Math.random() * 100 + "%",
                    left: Math.random() * 100 + "%",
                  }}
                ></div>
              ))}
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/profile.png"
                alt="Hla Hijazi"
                fill
                className="object-contain bg-contain bg-center bg-no-repeat drop-shadow-[0_0_30px_rgba(59,130,246,0.5)]"
                priority
              />
            </div>
          </motion.div>
          <div className="absolute inset-0 pointer-events-none ">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 10 + i * 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-[50px] rounded-full border border-white/5"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
