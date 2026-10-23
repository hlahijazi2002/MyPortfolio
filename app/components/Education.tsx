"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education, type EducationData } from "../data";
import { useLang } from "../i18n/LanguageProvider";

const text = {
  title: { en: "Education", ar: "التعليم" },
  subtitle: {
    en: "The academic path behind how I build and think.",
    ar: "المسار الأكاديمي وراء طريقتي في البناء والتفكير.",
  },
  inProgress: { en: "In progress", ar: "قيد الدراسة" },
  completed: { en: "Completed", ar: "مكتمل" },
};

const Tag = ({ text }: { text: string }) => (
  // me-2 بدل mr-2 عشان يشتغل صح بالعربي
  <span className="me-2 whitespace-nowrap rounded-full border border-neon-blue/20 bg-neon-blue/10 px-3 py-1 text-[11px] font-medium text-neon-blue">
    {text}
  </span>
);

const EducationCard = ({
  item,
  index,
}: {
  item: EducationData;
  index: number;
}) => {
  const { t, lang } = useLang();
  const isPresent = !!item.inProgress;
  const outerRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);
  const [overflow, setOverflow] = useState(false);

  useEffect(() => {
    const check = () => {
      if (outerRef.current && measureRef.current) {
        const next =
          measureRef.current.scrollWidth > outerRef.current.clientWidth;
        setOverflow((prev) => (prev === next ? prev : next));
      }
    };
    check();
    document.fonts?.ready.then(check);
    const ro = new ResizeObserver(check);
    if (outerRef.current) ro.observe(outerRef.current);
    return () => ro.disconnect();
    // بنعيد القياس لما تتغير اللغة (الخط وعرض النص بيتغيروا)
  }, [item.tech, lang]);

  const maskStyle = overflow
    ? {
        maskImage:
          "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
      }
    : undefined;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      // min-w-0: lets the grid column shrink instead of growing with the marquee
      className="group relative h-full min-w-0"
    >
      <div className="absolute -inset-px rounded-3xl bg-linear-to-br from-neon-blue/40 via-transparent to-green-500/40 opacity-0 blur-sm transition-opacity duration-500 group-hover:opacity-100" />

      <div className="glassmorphism relative flex h-full min-w-0 flex-col overflow-hidden rounded-3xl border border-white/10 p-7 transition-transform duration-500 group-hover:-translate-y-1">
        {/* -end-4 بدل -right-4 عشان تروح للزاوية الصح بالعربي */}
        <GraduationCap
          size={120}
          strokeWidth={1}
          className="pointer-events-none absolute -end-4 -top-4 text-neon-blue/10"
        />

        <div className="relative mb-6 flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-neon-blue/20 bg-neon-blue/10 px-3 py-1 font-mono text-xs text-neon-blue">
            {t(item.duration)}
          </span>
          <span
            className={`flex items-center gap-2 text-xs font-semibold ${
              isPresent
                ? "text-green-700 dark:text-green-400"
                : "text-slate-500"
            }`}
          >
            <span className="relative flex h-2 w-2">
              {isPresent && (
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
              )}
              <span
                className={`relative inline-flex h-2 w-2 rounded-full ${
                  isPresent ? "bg-green-500" : "bg-slate-400"
                }`}
              />
            </span>
            {t(isPresent ? text.inProgress : text.completed)}
          </span>
        </div>

        <h3 className="relative mb-2 text-2xl font-bold leading-tight text-white">
          {t(item.degree)}
        </h3>
        <p className="relative mb-4 font-semibold text-green-700 dark:text-green-400">
          {t(item.institution)}
        </p>
        <p className="relative mb-6 text-sm leading-relaxed text-slate-400">
          {t(item.description)}
        </p>

        {/*
          w-full + min-w-0 + contain:inline-size => this box's width never depends
          on its content, which breaks the measure -> resize -> measure loop.
          dir="ltr": صف التاغات والـ marquee بيتصرفوا نفس الشي بالعربي والإنجليزي.
        */}
        <div
          ref={outerRef}
          dir="ltr"
          className="relative mt-auto w-full min-w-0 overflow-hidden border-t border-white/10 pt-5 [contain:inline-size]"
          style={maskStyle}
        >
          {/* hidden row used only to measure the real width of the tags */}
          <div
            ref={measureRef}
            aria-hidden
            className="pointer-events-none invisible absolute left-0 top-0 flex w-max"
          >
            {item.tech.map((skill, i) => (
              <Tag key={i} text={skill} />
            ))}
          </div>

          {/* fixed height: same card height in both states (no layout jump) */}
          <div className="flex h-8 items-center overflow-hidden">
            {overflow ? (
              <motion.div
                animate={{ x: ["-25%", "0%"] }}
                transition={{
                  ease: "linear",
                  duration: Math.max(15, item.tech.length * 4),
                  repeat: Infinity,
                }}
                className="flex w-max"
              >
                {[...item.tech, ...item.tech, ...item.tech, ...item.tech].map(
                  (skill, i) => (
                    <Tag key={i} text={skill} />
                  ),
                )}
              </motion.div>
            ) : (
              <div className="flex w-max">
                {item.tech.map((skill, i) => (
                  <Tag key={i} text={skill} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Education = () => {
  const { t } = useLang();
  return (
    <section className="mx-auto max-w-7xl px-6">
      <div className="mb-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-3 text-3xl font-bold text-white md:text-4xl"
        >
          <span className="text-green-500">{t(text.title)}</span>
        </motion.h2>
        <p className="mx-auto max-w-md text-slate-400">{t(text.subtitle)}</p>
      </div>

      {/* grid-cols-1: explicit single column on mobile, items can't push it wider */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {education.map((item, index) => (
          <EducationCard key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Education;
