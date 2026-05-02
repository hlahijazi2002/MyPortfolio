"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function FullChatPage() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>(
    [],
  );
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const suggestions = [
    "What are Hla's main technical skills in software engineering?",
    "Which programming languages and web tools does Hla use?",
    "Tell me about Hla's educational background and academic journey.",
    "How can I contact Hla for professional opportunities?",
    "Can I see Hla's CV / Resume?",
  ];

  useEffect(() => {
    const loadHistory = () => {
      const saved = localStorage.getItem("hla_chat_history");
      if (saved) {
        try {
          setMessages(JSON.parse(saved));
        } catch (e) {
          console.error("Failed to parse chat history", e);
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
  }, []);

  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem("hla_chat_history", JSON.stringify(messages));
    }
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMsg = { role: "user", content: text };
    const updatedMessages = [...messages, userMsg];
    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages }),
      });
      const data = await res.json();
      if (data.content) {
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

  return (
    <div
      className="flex h-screen font-sans overflow-hidden bg-transparent text-white relative"
      dir="ltr"
    >
      <Link
        href="/"
        className="absolute top-6 left-6 z-50 flex items-center gap-2 text-gray-400 hover:text-white transition-all group bg-white/5 backdrop-blur-md p-2 px-3 rounded-xl border border-white/10 shadow-lg"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="group-hover:-translate-x-1 transition-transform"
        >
          <line x1="19" y1="12" x2="5" y2="12"></line>
          <polyline points="12 19 5 12 12 5"></polyline>
        </svg>
        <span className="text-sm font-medium">Home</span>
      </Link>

      <aside className="w-80 border-r border-white/10 hidden md:flex flex-col z-20 bg-white/5 backdrop-blur-md pt-15">
        <div className="p-6 border-b border-white/10">
          <h2 className="text-lg font-bold text-blue-400 tracking-tight">
            Quick Topics
          </h2>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar">
          {suggestions.map((s, i) => (
            <button
              key={i}
              onClick={() => handleSend(s)}
              className="w-full text-left p-4 text-[13px] bg-white/5 border border-white/10 hover:border-blue-500/50 rounded-xl transition-all text-gray-300 shadow-sm active:scale-95 hover:bg-white/10"
            >
              {s}
            </button>
          ))}
        </div>
      </aside>

      <main className="flex-1 flex flex-col relative overflow-hidden bg-transparent">
        <header className="py-3 flex-col justify-center items-center md:pl-14 border-b border-white/10 shrink-0 z-10 bg-white/5 backdrop-blur-lg">
          <div className="flex flex-col">
            <h1 className="font-bold text-gray-100 text-md ">
              Hla's AI Assistant
            </h1>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">
              Active
            </span>
          </div>
        </header>

        <div
          ref={scrollRef}
          className="flex-1 overflow-y-auto p-8 space-y-6 w-full max-w-4xl mx-auto custom-scrollbar bg-transparent pt-10"
        >
          {messages.length === 0 && (
            <div className="h-full flex flex-col items-center justify-center text-center opacity-40">
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mb-4 text-2xl border border-blue-500/20">
                🤖
              </div>
              <p className="text-gray-300 font-medium">
                How can I assist you today?
              </p>
            </div>
          )}

          {messages.map((m, i) => (
            <div
              key={i}
              className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`p-4 rounded-2xl max-w-[85%] text-[14.5px] shadow-xl leading-relaxed ${
                  m.role === "user"
                    ? "bg-blue-600/90 text-white rounded-tr-none border border-white/10"
                    : "bg-white/10 backdrop-blur-md border border-white/10 text-gray-100 rounded-tl-none"
                }`}
              >
                {m.content}
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex items-center gap-2 text-blue-400 text-xs font-medium animate-pulse bg-white/5 px-3 py-1 rounded-full w-fit">
              Typing...
            </div>
          )}
        </div>

        <div className="p-4 md:p-6 bg-transparent backdrop-blur-xl  border-white/10 shrink-0">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend(input);
            }}
            className="max-w-4xl mx-auto flex gap-2 md:gap-3 relative"
          >
            <input
              className="flex-1 bg-white/10 border border-white/20 rounded-2xl px-4 md:px-6 py-3 md:py-4 outline-none focus:border-blue-500/50 text-white text-sm"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Message Hla's Assistant..."
            />
            <button
              disabled={isLoading}
              className="bg-blue-600 text-white px-5 md:px-8 rounded-xl font-bold hover:bg-blue-700 shadow-lg transition-all active:scale-95 shrink-0"
            >
              <span className="hidden md:inline">Send</span>
              <span className="md:hidden">➤</span>
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
