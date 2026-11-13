"use client";
import { motion } from "framer-motion";
import {
  Bot,
  Layers,
  Languages,
  Search,
  Palette,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import { useLang, type L10n } from "../i18n/LanguageProvider";

const strengths: {
  icon: React.ElementType;
  title: L10n;
  text: L10n;
}[] = [
  {
    icon: Bot,
    title: { en: "AI Integration", ar: "دمج الذكاء الاصطناعي" },
    text: {
      en: "Chat assistants and AI features built into real products.",
      ar: "مساعدات محادثة وميزات ذكاء اصطناعي مدمجة داخل منتجات حقيقية.",
    },
  },
  {
    icon: Layers,
    title: { en: "Full-Stack", ar: "Full-Stack" },
    text: {
      en: "Interface, API, and database handled end to end.",
      ar: "من الواجهة للـ API لقاعدة البيانات، كل شي بشتغل عليه من الألف للياء.",
    },
  },
  {
    icon: Languages,
    title: { en: "Arabic & English", ar: "عربي وإنجليزي" },
    text: {
      en: "RTL and LTR support from day one.",
      ar: "دعم كامل للاتجاهين RTL وLTR",
    },
  },
  {
    icon: Search,
    title: { en: "SEO Specialist", ar: "متخصصة SEO" },
    text: {
      en: "Technical audits, fixes, and bilingual content that ranks.",
      ar: "فحص تقني وإصلاحات ومحتوى بلغتين يتصدر نتائج البحث.",
    },
  },
  {
    icon: Palette,
    title: { en: "UI/UX Design", ar: "تصميم UI/UX" },
    text: {
      en: "Clear, consistent interfaces designed around how people actually use them.",
      ar: "واجهات واضحة ومتناسقة مصممة حسب طريقة استخدام الناس الفعلية.",
    },
  },
  {
    icon: ShieldCheck,
    title: { en: "Secure & Real-Time", ar: "أمان ومراسلة فورية" },
    text: {
      en: "Authentication, live messaging, and background jobs that just work.",
      ar: "تسجيل دخول ومراسلة فورية ومهام خلفية تعمل بثبات.",
    },
  },
];

const text = {
  heading: {
    en: { parts: ["Who's", "Hla", "?"], hl: 1, joiner: " " },
    ar: { parts: ["مين", "هلا", "؟"], hl: 1, joiner: " " },
  },
  subtitle: {
    en: "Turning ideas into high-performance web platforms.",
    ar: "بحوّل الأفكار إلى منصات ويب سريعة وعالية الأداء.",
  },
  name: { en: "Eng. Hla Hijazi", ar: "م. هلا حجازي" },
  photoAlt: { en: "Hla Hijazi", ar: "هلا حجازي" },
  available: { en: "Available for work", ar: "متاحة للعمل" },

  p1: {
    en: "I'm a Software Engineer and Full-Stack Web Developer with a background in Computer Systems Engineering. I enjoy building modern web applications and work across both frontend and backend development using React.js, Next.js, JavaScript, TypeScript, Node.js, and Express.js. I also work with MongoDB and PostgreSQL, develop RESTful APIs, manage application state with Redux Toolkit, and integrate third-party services to build complete solutions. Beyond functionality, I care about writing clean, maintainable code and creating applications that are reliable and easy to use. My knowledge of UI/UX design also helps me bring together good engineering and thoughtful user experiences. I've worked on features such as authentication, real-time messaging, media uploads, and background processing using tools like Clerk, Socket.IO, ImageKit, and Inngest.",
    ar: "أنا مهندسة برمجيات ومطورة ويب Full-Stack، حاصلة على درجة البكالوريوس في هندسة أنظمة الحاسوب. أعمل على تطوير تطبيقات ويب حديثة، وأجمع بين تطوير الواجهات الأمامية والخلفية باستخدام React.js وNext.js وJavaScript وTypeScript وNode.js وExpress.js. كما أتعامل مع قواعد بيانات MongoDB وPostgreSQL، وتطوير RESTful APIs، وإدارة حالة التطبيقات باستخدام Redux Toolkit، ودمج الخدمات الخارجية لبناء حلول متكاملة. أهتم بكتابة كود منظم وقابل للصيانة، وتطوير تطبيقات تجمع بين الأداء الجيد وسهولة الاستخدام. كما تساعدني معرفتي بتصميم UI/UX على تحقيق التوازن بين جودة التطوير وتجربة المستخدم. عملت على تطوير خصائص مثل تسجيل الدخول والمصادقة، والمراسلة الفورية، ورفع الملفات، والمهام الخلفية باستخدام أدوات مثل Clerk وSocket.IO وImageKit وInngest.",
  },
  p2: {
    en: "I'm always looking to learn, explore new technologies, and turn ideas into practical solutions. I aim to build meaningful digital products that are well-engineered, easy to use, and genuinely useful.",
    ar: "أحرص دائماً على تطوير مهاراتي واستكشاف التقنيات الحديثة وتحويل الأفكار إلى حلول عملية. وأسعى إلى بناء منتجات رقمية متقنة، سهلة الاستخدام، وتقدم قيمة حقيقية لمستخدميها.",
  },
};

const About = () => {
  const { t, lang, dir } = useLang();
  const isAr = lang === "ar";
  const slide = dir === "rtl" ? -1 : 1;
  const heading = t(text.heading);

  return (
    <section className="max-w-7xl mx-auto py-5 relative">
      <div className="text-center mb-12">
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
              {/* بدون مسافة قبل علامة الاستفهام */}
              {i < heading.parts.length - 2 && heading.joiner}
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
        <motion.div
          initial={{ opacity: 0, x: -40 * slide }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="glassmorphism rounded-3xl border border-white/10 p-8 md:p-10 flex flex-col gap-5"
        >
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 shrink-0 rounded-full overflow-hidden border border-white/20">
              <Image
                src="/profile.png"
                alt={t(text.photoAlt)}
                fill
                sizes="64px"
                className="object-cover object-top"
              />
            </div>
            <div>
              <p className="text-white font-bold text-lg leading-tight">
                {t(text.name)}
              </p>
              <div className="mt-1 flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500 shadow-[0_0_6px_rgba(34,197,94,0.8)]" />
                </span>
                <span className="text-xs font-semibold text-green-700 dark:text-green-400">
                  {t(text.available)}
                </span>
              </div>
            </div>
          </div>

          <p className="text-slate-300 leading-relaxed">{t(text.p1)}</p>

          <p className="font-medium leading-relaxed text-green-700 dark:text-green-400">
            {t(text.p2)}
          </p>
        </motion.div>

        <div className="flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 auto-rows-fr flex-1">
            {strengths.map(({ icon: Icon, title, text: body }, i) => (
              <motion.div
                key={title.en}
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
                <h3 className="text-white font-bold mb-1">{t(title)}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {t(body)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
