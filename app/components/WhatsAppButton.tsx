"use client";
import { motion } from "framer-motion";
import { useLang } from "../i18n/LanguageProvider";

const PHONE = "970594814452";

const text = {
  message: {
    en: "Hi Hla, I saw your portfolio and I'd like to discuss a project / opportunity.",
    ar: "مرحباً هلا، شفت البورتفوليو تبعك وحابب أحكي معك عن مشروع أو فرصة عمل.",
  },
  label: { en: "Chat on WhatsApp", ar: "تواصل عبر واتساب" },
};

const WhatsAppButton = () => {
  const { t, dir } = useLang();

  return (
    <motion.a
      dir="ltr"
      href={`https://wa.me/${PHONE}?text=${encodeURIComponent(t(text.message))}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t(text.label)}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
      transition={{
        opacity: { delay: 1.5, duration: 0.5 },
        scale: { delay: 1.5, type: "spring", stiffness: 200, damping: 14 },
        y: { delay: 2, duration: 3, repeat: Infinity, ease: "easeInOut" },
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="group fixed bottom-5 left-5 z-999 flex items-center"
    >
      <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] shadow-[0_8px_20px_rgba(37,211,102,0.4)]">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-40" />
        <svg
          viewBox="0 0 24 24"
          width="22"
          height="22"
          fill="#ffffff"
          className="relative"
          aria-hidden
        >
          <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35zM12.04 21.8a9.9 9.9 0 0 1-5.05-1.38l-.36-.21-3.75.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88a9.82 9.82 0 0 1 7 2.9 9.8 9.8 0 0 1 2.9 6.99c0 5.45-4.44 9.88-9.89 9.88zM20.52 3.45A11.8 11.8 0 0 0 12.04 0C5.5 0 .16 5.33.16 11.88c0 2.09.55 4.14 1.59 5.95L0 24l6.34-1.66a11.87 11.87 0 0 0 5.7 1.45h.01c6.54 0 11.88-5.33 11.88-11.88 0-3.17-1.23-6.15-3.41-8.46z" />
        </svg>
      </span>

      <span
        dir={dir}
        className="pointer-events-none ml-3 hidden whitespace-nowrap rounded-xl bg-[#ffffff] px-3 py-2 text-xs font-bold text-[#1e293b] opacity-0 shadow-xl transition-opacity duration-300 group-hover:opacity-100 md:block"
      >
        {t(text.label)}
      </span>
    </motion.a>
  );
};

export default WhatsAppButton;