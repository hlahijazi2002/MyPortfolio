"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data";
import { useLang } from "../i18n/LanguageProvider";

const text = {
  tagline: {
    en: "Engineer • Developer • Builder",
    ar: "مهندسة • مطورة • مبتكرة",
  },
  paragraph: {
    en: "Full-Stack Developer working with Next.js and the MERN stack. Clean code, reliable systems, fast interfaces.",
    ar: "مطورة Full-Stack أعمل بـ Next.js وحزمة MERN. بقدم  كود نظيف، أنظمة موثوقة، وواجهات سريعة.",
  },
  viewWork: { en: "View My Work", ar: "شاهد أعمالي" },
  talk: { en: "Let's Talk", ar: "لنتحدث" },
  mainStack: { en: "Main stack", ar: "التقنيات الأساسية" },
  basedIn: { en: "Based in", ar: "مقيمة في" },
  location: { en: "Palestine · Remote", ar: "فلسطين · عن بُعد" },
  name: { en: "Hla Hijazi", ar: "هلا حجازي" },
  subRole: {
    en: "Systems Engineering • Full-Stack",
    ar: " مهندسة أنظمة حاسوب • Full-Stack",
  },
};

// عنوان الهيرو مقسوم لأجزاء: الجزء الملوّن بالأخضر له className
const headline = {
  en: [
    { text: "I build scalable " },
    { text: "web products", className: "text-green-600 dark:text-green-400" },
    { text: " people love to use." },
  ],
  ar: [
    { text: "أبني " },
    { text: "منتجات ويب", className: "text-green-600 dark:text-green-400" },
    { text: " قابلة للتوسع، يحب الناس استخدامها." },
  ],
};

type Segment = { text: string; className?: string };

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

/**
 * تأثير الكتابة:
 * - إنجليزي: حرف حرف
 * - عربي: كلمة كلمة (لأن تقطيع الحرف بيفصل الحروف العربية عن بعضها)
 * بترجع العناصر + وقت انتهاء الأنيميشن عشان باقي العناصر تظهر بعده.
 */
const typedSequence = (segments: Segment[], isAr: boolean) => {
  const step = isAr ? 0.3 : 0.07;
  let n = 0;

  const nodes = segments.map((seg, s) => {
    const parts = isAr
      ? seg.text.split(/(\s+)/).filter(Boolean)
      : Array.from(seg.text);

    const children = parts.map((part, i) => {
      if (isAr && /^\s+$/.test(part)) return part;
      const delay = n * step;
      n++;
      return (
        <motion.span
          key={`${s}-${i}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: isAr ? 0.25 : 0.1, delay }}
          className={isAr ? "inline-block" : undefined}
        >
          {part}
        </motion.span>
      );
    });

    return (
      <span key={s} className={seg.className}>
        {children}
      </span>
    );
  });

  return { nodes, end: n * step };
};

const Hero = () => {
  const { t, lang } = useLang();
  const isAr = lang === "ar";
  const bgProjects = projects.slice(0, 9);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [btnPos, setBtnPos] = useState({ x: 0, y: 0 });

  const { nodes: headlineNodes, end } = typedSequence(headline[lang], isAr);
  // uppercase و letter-spacing بيخرّبوا شكل الحروف العربية
  const caps = isAr ? "" : "uppercase";

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
        <div className="absolute -end-20 -top-10 w-[110%] md:w-[75%] grid grid-cols-3 gap-4 -rotate-6 rtl:rotate-6 scale-110 opacity-30">
          {bgProjects.map((p, i) => (
            <div
              key={i}
              className="aspect-4/3 rounded-xl bg-cover bg-center shadow-xl"
              style={{ backgroundImage: `url(${p.image})` }}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-linear-to-r rtl:bg-linear-to-l from-(--background) via-(--background)/85 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-(--background) to-transparent" />
        <div className="absolute -top-24 end-1/4 w-96 h-96 bg-green-500/15 blur-[120px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-6 lg:gap-14 items-center">
        <div className="flex flex-col gap-5 md:gap-6">
          <motion.div
            {...fadeUp(0)}
            className={`flex items-center gap-2 text-[10px] sm:text-xs font-semibold text-green-600 dark:text-green-400 ${
              isAr
                ? "sm:text-sm"
                : "tracking-[0.2em] sm:tracking-[0.25em] uppercase"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-green-500" />
            {t(text.tagline)}
          </motion.div>

          <h1
            key={lang}
            className={`text-3xl sm:text-4xl xl:text-5xl font-extrabold text-white ${
              isAr ? "leading-[1.4]" : "leading-[1.15] tracking-tight"
            }`}
          >
            {headlineNodes}
          </h1>

          <motion.p
            key={`p-${lang}`}
            {...fadeUp(end + 0.2)}
            className="text-slate-400 text-sm md:text-base max-w-md leading-relaxed"
          >
            {t(text.paragraph)}
          </motion.p>

          <motion.div
            key={`btns-${lang}`}
            {...fadeUp(end + 0.5)}
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
              <span className="relative z-10">{t(text.viewWork)}</span>
              <ArrowUpRight
                size={18}
                className="relative z-10 rtl:-scale-x-100"
              />
              <div className="absolute inset-0 bg-linear-to-r from-blue-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>
            <Link
              href="/#contact"
              className="px-7 py-3.5 rounded-full font-semibold text-white glassmorphism border border-white/20 hover:border-neon-blue/50 transition-colors"
            >
              {t(text.talk)}
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
                alt={t(text.name)}
                fill
                priority
                sizes="(max-width: 1024px) 240px, 416px"
                className="object-cover object-top"
              />
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="hidden sm:block absolute -start-4 sm:-start-12 top-8 px-4 py-3 rounded-2xl glassmorphism border border-white/10 shadow-xl"
            >
              <p
                className={`text-[10px] text-slate-500 ${
                  isAr ? "text-xs" : "uppercase tracking-wider"
                }`}
              >
                {t(text.mainStack)}
              </p>
              <p dir="ltr" className="text-sm font-bold text-white">
                Next.js · TypeScript
              </p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="hidden sm:block absolute -end-4 sm:-end-10 bottom-8 px-4 py-3 rounded-2xl glassmorphism border border-white/10 shadow-xl"
            >
              <p
                className={`text-[10px] text-slate-500 ${
                  isAr ? "text-xs" : "uppercase tracking-wider"
                }`}
              >
                {t(text.basedIn)}
              </p>
              <p className="text-sm font-bold text-white">{t(text.location)}</p>
            </motion.div>
          </div>

          <div className="hidden lg:block text-center">
            <p className="text-2xl font-extrabold text-white">{t(text.name)}</p>
            <p
              className={`text-xs text-green-600 dark:text-green-400 mt-1 ${
                isAr ? "text-sm" : `tracking-[0.2em] ${caps}`
              }`}
            >
              {t(text.subRole)}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
