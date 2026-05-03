"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function Chat() {
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
        body: JSON.stringify({ messages: updatedMessages }),
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
    <div
      className="fixed bottom-6 right-6 z-999 flex flex-col items-end font-sans"
      dir="ltr"
    >
      <AnimatePresence>
        {showTooltip && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="mb-4 bg-white text-blue-600 px-4 py-2 rounded-xl shadow-xl text-[12px] font-bold border border-blue-50"
          >
            👋 Ask my AI about me!
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-4 w-80 h-112.5 bg-white border border-gray-100 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex flex-col overflow-hidden"
          >
            <div className="p-4 bg-white border-b border-gray-50 flex justify-between items-center">
              <div className="flex flex-col">
                <span className="text-sm font-bold text-slate-800">
                  Hla's AI Assistant
                </span>
                <span className="text-[9px] text-green-500 font-bold uppercase tracking-wider">
                  Online
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    router.push("/chat");
                    setIsOpen(false);
                  }}
                  className="text-gray-400 hover:text-blue-600 transition-colors"
                  title="Expand to Full Screen"
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
              className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#FAFAFA] custom-scrollbar"
            >
              {messages.length === 0 && (
                <p className="text-[11px] text-gray-400 text-center mt-10">
                  Hi! Ask me anything about Hla's skills or experience.
                </p>
              )}
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`p-3 rounded-2xl text-[13px] max-w-[85%] leading-relaxed shadow-sm ${
                      m.role === "user"
                        ? "bg-blue-600 text-white rounded-tr-none"
                        : "bg-white text-slate-700 border border-gray-100 rounded-tl-none"
                    }`}
                  >
                    {m.content.split(/(\s+)/).map((part, index, array) => {
                      const isExternalLink = /^(https?:\/\/[^\s]+)/g.test(part);
                      const isInternalLink = part.includes("/projects");

                      if (isExternalLink || isInternalLink) {
                        const cleanLink = part
                          .replace(/[()]/g, "")
                          .replace(/[.,]$/, "");

                        const previousWord =
                          array[index - 1]?.toLowerCase() || "";
                        const isCodeLink = previousWord.includes("code");

                        let linkLabel = "Visit Link";

                        if (cleanLink.includes("github.com")) {
                          linkLabel = isCodeLink ? "View Code" : "GitHub";
                        } else if (cleanLink.includes("docs.google")) {
                          linkLabel = "View CV";
                        } else if (cleanLink.includes("linkedin")) {
                          linkLabel = "LinkedIn";
                        } else if (cleanLink.includes("wa.me")) {
                          linkLabel = "WhatsApp";
                        } else if (isInternalLink) {
                          linkLabel = "Explore All Projects";
                        } else {
                          linkLabel = "Live Demo";
                        }

                        return (
                          <Link
                            key={index}
                            href={cleanLink}
                            target={isInternalLink ? "_self" : "_blank"}
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-blue-400 font-bold underline hover:text-blue-300 transition-colors mx-1 bg-blue-500/5 px-2 py-0.5 rounded-md border border-blue-500/10"
                          >
                            {linkLabel} {isInternalLink ? "🚀" : "🔗"}
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
                  Typing...
                </div>
              )}
            </div>

            <form
              onSubmit={onSubmit}
              className="p-3 bg-white border-t border-gray-50 flex gap-2"
            >
              <input
                className="flex-1 bg-gray-50 border border-gray-100 rounded-xl px-4 py-2 text-[13px] text-slate-800 outline-none focus:border-blue-300 transition-all"
                value={input}
                placeholder="Type a message..."
                onChange={(e) => setInput(e.target.value)}
              />
              <button
                type="submit"
                disabled={isLoading}
                className="bg-blue-600 text-white w-10 h-10 rounded-xl flex items-center justify-center hover:bg-blue-700 shadow-md disabled:bg-gray-200"
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
        className="w-16 h-16 bg-blue-600 rounded-full shadow-[0_10px_30px_rgba(37,99,235,0.4)] flex items-center justify-center text-2xl hover:scale-105 active:scale-95 transition-all text-white"
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
