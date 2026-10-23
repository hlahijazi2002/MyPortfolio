"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { useLang } from "../i18n/LanguageProvider";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const text = {
  tooltip: {
    en: "👋 Ask my AI about me!",
    ar: "👋 اسأل مساعدي الذكي عني!",
  },
  title: { en: "Hla's AI Assistant", ar: "المساعد الذكي لهلا" },
  online: { en: "Online", ar: "متصل" },
  expand: { en: "Expand to Full Screen", ar: "عرض بالشاشة الكاملة" },
  empty: {
    en: "Hi! Ask me anything about Hla's skills or experience.",
    ar: "أهلاً! اسألني أي شي عن مهارات هلا أو خبرتها.",
  },
  typing: { en: "Typing...", ar: "عم بكتب..." },
  placeholder: { en: "Type a message...", ar: "اكتب رسالة..." },
};

const linkLabels = {
  viewCode: { en: "View Code", ar: "عرض الكود" },
  github: { en: "GitHub", ar: "GitHub" },
  cv: { en: "View CV", ar: "عرض السيرة الذاتية" },
  linkedin: { en: "LinkedIn", ar: "LinkedIn" },
  whatsapp: { en: "WhatsApp", ar: "واتساب" },
  allProjects: { en: "Explore All Projects", ar: "استكشف كل المشاريع" },
  demo: { en: "Live Demo", ar: "عرض مباشر" },
};

export default function Chat() {
  const { t, lang, dir } = useLang();
  const isAr = lang === "ar";
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const loadHistory = () => {
      const saved = localStorage.getItem("hla_chat_history");
      if (saved) {
        try {
          setMessages(JSON.parse(saved));
        } catch (e) {
          console.error("Failed to parse history", e);
        }
      }
    };

    loadHistory();

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "hla_chat_history" || e.key === null) {
        loadHistory();
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [isOpen]);

  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem("hla_chat_history", JSON.stringify(messages));
      window.dispatchEvent(new Event("storage"));
    }

    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) setShowTooltip(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, [isOpen]);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg: Message = { role: "user", content: input };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);
    setShowTooltip(false);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // بنبعت اللغة الحالية عشان الـ API يرد فيها
        body: JSON.stringify({ messages: updatedMessages, lang }),
      });

      const data = await response.json();
      if (response.ok && data.content) {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data.content },
        ]);
      }
    } catch (error) {
      console.error("Chat Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (pathname === "/chat") return null;

  return (
    // الحاوية الخارجية ثابتة LTR وعلى اليمين دايماً (عشان زر الواتساب على اليسار دايماً)
    <div
      className="fixed bottom-6 right-6 z-999 flex flex-col items-end font-sans"
      dir="ltr"
    >
      <AnimatePresence>
        {showTooltip && !isOpen && (
          <motion.div
            dir={dir}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="mb-4 bg-[#ffffff] text-blue-600 px-4 py-2 rounded-xl shadow-xl text-[12px] font-bold border border-blue-50"
          >
            {t(text.tooltip)}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            dir={dir}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-4 w-80 h-112.5 bg-[#ffffff] border border-gray-100 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex flex-col overflow-hidden"
          >
            <div className="p-4 bg-[#ffffff] border-b border-gray-50 flex justify-between items-center">
              <div className="flex flex-col">
                <span className="text-sm font-bold text-[#1e293b]">
                  {t(text.title)}
                </span>
                <span
                  className={`text-[9px] text-green-500 font-bold ${
                    isAr ? "text-[10px]" : "uppercase tracking-wider"
                  }`}
                >
                  {t(text.online)}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    router.push("/chat");
                    setIsOpen(false);
                  }}
                  className="text-gray-400 hover:text-blue-600 transition-colors"
                  title={t(text.expand)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-red-500"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
            </div>

            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto overflow-x-hidden p-4 space-y-4 bg-[#FAFAFA] custom-scrollbar"
            >
              {messages.length === 0 && (
                <p className="text-[11px] text-gray-400 text-center mt-10">
                  {t(text.empty)}
                </p>
              )}
              {messages.map((m, i) => (
                // الصف LTR: رسالة المستخدم دايماً يمين ورسالة المساعد يسار.
                // اتجاه النص جوا الفقاعة حسب اللغة.
                <div
                  key={i}
                  dir="ltr"
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    dir={dir}
                    className={`p-3 rounded-2xl text-[13px] max-w-[85%] leading-relaxed shadow-sm break-words ${
                      m.role === "user"
                        ? "bg-blue-600 text-[#ffffff] rounded-tr-none"
                        : "bg-[#ffffff] text-[#334155] border border-gray-100 rounded-tl-none"
                    }`}
                  >
                    {m.content.split(/(\s+)/).map((part, index, array) => {
                      const isExternalLink = /^(https?:\/\/[^\s]+)/.test(part);
                      const isInternalLink = part.includes("/projects");

                      if (isExternalLink || isInternalLink) {
                        const cleanLink = part
                          .replace(/[()]/g, "")
                          .replace(/[.,،]$/, "");

                        const previousWord =
                          array[index - 1]?.toLowerCase() || "";
                        const isCodeLink =
                          previousWord.includes("code") ||
                          previousWord.includes("كود");

                        let label = linkLabels.demo;

                        if (cleanLink.includes("github.com")) {
                          label = isCodeLink
                            ? linkLabels.viewCode
                            : linkLabels.github;
                        } else if (cleanLink.includes("docs.google")) {
                          label = linkLabels.cv;
                        } else if (cleanLink.includes("linkedin")) {
                          label = linkLabels.linkedin;
                        } else if (cleanLink.includes("wa.me")) {
                          label = linkLabels.whatsapp;
                        } else if (isInternalLink) {
                          label = linkLabels.allProjects;
                        }

                        return (
                          <Link
                            key={index}
                            href={cleanLink}
                            target={isInternalLink ? "_self" : "_blank"}
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-blue-600 font-bold underline hover:text-blue-700 transition-colors mx-1 bg-blue-500/10 px-2 py-0.5 rounded-md border border-blue-500/20"
                          >
                            {t(label)} {isInternalLink ? "🚀" : "🔗"}
                          </Link>
                        );
                      }
                      return part;
                    })}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="text-blue-500 text-[10px] animate-pulse font-medium">
                  {t(text.typing)}
                </div>
              )}
            </div>

            <form
              onSubmit={onSubmit}
              className="p-3 bg-[#ffffff] border-t border-gray-50 flex gap-2"
            >
              <input
                className="flex-1 bg-gray-50 border border-gray-100 rounded-xl px-4 py-2 text-[13px] text-[#1e293b] outline-none focus:border-blue-300 transition-all"
                value={input}
                placeholder={t(text.placeholder)}
                onChange={(e) => setInput(e.target.value)}
              />
              <button
                type="submit"
                disabled={isLoading}
                className="bg-blue-600 text-[#ffffff] w-10 h-10 rounded-xl flex items-center justify-center hover:bg-blue-700 shadow-md disabled:bg-gray-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={isAr ? "-scale-x-100" : ""}
                >
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <path d="m22 2-7 20-4-9-9-4Z" />
                </svg>
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setShowTooltip(false);
        }}
        className="w-16 h-16 bg-blue-600 rounded-full shadow-[0_10px_30px_rgba(37,99,235,0.4)] flex items-center justify-center text-2xl hover:scale-105 active:scale-95 transition-all text-[#ffffff]"
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        )}
      </button>
    </div>
  );
}
