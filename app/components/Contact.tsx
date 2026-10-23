"use client";
import { motion } from "framer-motion";
import {
  Send,
  CheckCircle2,
  Download,
  MessageCircle,
  Linkedin,
  Github,
} from "lucide-react";
import { useForm } from "@formspree/react";
import { contactInfo } from "../data";
import { useLang } from "../i18n/LanguageProvider";

const text = {
  title: { en: "Let's Contact", ar: "لنتواصل" },
  subtitle: {
    en: "Let's bridge the gap between imagination and reality. Whether you have a question or a brilliant project idea, my inbox is always open for innovation.",
    ar: "سواء عندك سؤال أو فكرة مشروع مميزة، بريدي مفتوح دائماً لأي فكرة جديدة.",
  },
  available: { en: "Available for work", ar: "متاحة للعمل" },
  availableDesc: {
    en: "Open to full-time roles, freelance projects, and collaborations. Usually replies within 24 hours.",
    ar: "منفتحة على الوظائف بدوام كامل، والمشاريع الحرة، والتعاون. عادةً بردّ خلال 24 ساعة.",
  },
  downloadCv: { en: "Download CV", ar: "تحميل السيرة الذاتية" },
  name: { en: "Your Name", ar: "اسمك" },
  namePh: { en: "Hla Hijazi", ar: "هلا حجازي" },
  email: { en: "Your Email", ar: "بريدك الإلكتروني" },
  subject: { en: "Subject", ar: "الموضوع" },
  subjectPh: { en: "Project Inquiry", ar: "استفسار عن مشروع" },
  message: { en: "Message", ar: "الرسالة" },
  messagePh: {
    en: "Tell me about your vision...",
    ar: "احكيلي عن فكرتك...",
  },
  sent: { en: "Message Sent!", ar: "تم إرسال الرسالة!" },
  send: { en: "Transmit Message", ar: "إرسال الرسالة" },
};

const inputClass =
  "bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-neon-blue focus:ring-1 focus:ring-neon-blue/50 transition-all";

const Contact = () => {
  const [state, handleSubmit] = useForm("xeonadnq");
  const { t, lang, dir } = useLang();
  const isAr = lang === "ar";
  // اتجاه دخول العناصر بالأنيميشن بينعكس بالعربي
  const slide = dir === "rtl" ? 1 : -1;

  return (
    <section className="max-w-7xl mx-auto py-5 relative">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl text-green-500 md:text-4xl font-bold mb-5"
        >
          {t(text.title)}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-slate-400 text-md max-w-md mx-auto"
        >
          {t(text.subtitle)}
        </motion.p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-6">
            {contactInfo.map((info, i) => {
              // نعتمد على النسخة الإنجليزية للتعرف على نوع الحقل
              const type = info.label.en.toLowerCase();
              const rawValue = info.value.en;
              const href = type.includes("email")
                ? `mailto:${rawValue}`
                : type.includes("phone")
                  ? `https://wa.me/${rawValue.replace(/\D/g, "").replace(/^00/, "")}`
                  : null;

              // الإيميل والهاتف لازم يضلوا LTR حتى بالعربي
              const isLtrValue =
                type.includes("email") || type.includes("phone");

              const content = (
                <>
                  <div className="w-12 h-12 rounded-xl glassmorphism flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    {info.icon}
                  </div>
                  <div>
                    <p
                      className={`text-xs text-slate-500 font-bold ${
                        isAr ? "text-sm" : "uppercase tracking-widest"
                      }`}
                    >
                      {t(info.label)}
                    </p>
                    <p
                      dir={isLtrValue ? "ltr" : undefined}
                      className={`text-white font-medium transition-colors ${
                        isLtrValue && isAr ? "text-end" : ""
                      } ${href ? "group-hover:text-neon-blue" : ""}`}
                    >
                      {t(info.value)}
                    </p>
                  </div>
                </>
              );

              return (
                <motion.div
                  key={info.label.en}
                  initial={{ opacity: 0, x: 20 * slide }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="group"
                >
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="flex items-center gap-6"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="flex items-center gap-6">{content}</div>
                  )}
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full rounded-3xl glassmorphism border border-white/5 p-6 flex flex-col gap-4"
          >
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]"></span>
              </span>
              <h3 className="text-white font-bold">{t(text.available)}</h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              {t(text.availableDesc)}
            </p>
            <a
              href="/Hla-Hijazi-CV.pdf"
              download="Hla-Hijazi-CV.pdf"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-neon-blue/10 border border-neon-blue/50 text-neon-blue text-sm font-semibold hover:bg-neon-blue hover:text-[#ffffff] transition-all"
            >
              <Download size={16} />
              {t(text.downloadCv)}
            </a>
          </motion.div>

          <div className="flex justify-center gap-5">
            {[
              {
                icon: <Github size={20} />,
                href: "https://github.com/hlahijazi2002",
                label: "GitHub",
              },
              {
                icon: <Linkedin size={20} />,
                href: "https://www.linkedin.com/in/hla-hijazi-a86a57369/",
                label: "LinkedIn",
              },
              {
                icon: <MessageCircle size={20} />,
                href: "https://wa.me/970594814452",
                label: "WhatsApp",
              },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                whileHover={{
                  y: -5,
                  backgroundColor: "rgba(59, 130, 246, 0.1)",
                  borderColor: "rgba(59, 130, 246, 0.5)",
                }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-2xl glassmorphism flex items-center justify-center text-slate-400 hover:text-neon-blue border border-white/5 transition-all duration-300"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -20 * slide }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glassmorphism p-8 md:p-12 rounded-4xl border-white/5 relative overflow-hidden"
        >
          <div className="absolute -top-24 -end-24 w-48 h-48 bg-neon-blue/10 blur-[80px] rounded-full" />

          <form
            onSubmit={handleSubmit}
            className="relative z-10 flex flex-col gap-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="flex flex-col gap-2"
              >
                <label className="text-sm font-medium text-slate-300 ms-1">
                  {t(text.name)}
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder={t(text.namePh)}
                  className={inputClass}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="flex flex-col gap-2"
              >
                <label className="text-sm font-medium text-slate-300 ms-1">
                  {t(text.email)}
                </label>
                {/* الإيميل دايماً LTR */}
                <input
                  name="email"
                  type="email"
                  required
                  dir="ltr"
                  placeholder="hlahijazi22@gmail.com"
                  className={`${inputClass} ${isAr ? "text-end" : ""}`}
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex flex-col gap-2"
            >
              <label className="text-sm font-medium text-slate-300 ms-1">
                {t(text.subject)}
              </label>
              <input
                name="subject"
                type="text"
                required
                placeholder={t(text.subjectPh)}
                className={inputClass}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex flex-col gap-2"
            >
              <label className="text-sm font-medium text-slate-300 ms-1">
                {t(text.message)}
              </label>
              <textarea
                name="message"
                rows={4}
                required
                placeholder={t(text.messagePh)}
                className={inputClass}
              />
            </motion.div>

            <motion.button
              type="submit"
              disabled={state.submitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`mt-2 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(59,130,246,0.2)] ${state.succeeded ? "bg-green-500 text-[#ffffff] shadow-[0_0_20px_rgba(34,197,94,0.4)]" : "bg-neon-blue text-[#ffffff] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"}`}
            >
              {state.succeeded ? (
                <>
                  <CheckCircle2 size={20} />
                  {t(text.sent)}
                </>
              ) : state.submitting ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <Send size={18} className="rtl:-scale-x-100" />
                  {t(text.send)}
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
