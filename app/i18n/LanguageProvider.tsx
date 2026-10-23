"use client";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "en" | "ar";

/** A piece of content that exists in both languages. */
export type L10n<T = string> = Record<Lang, T>;

/* ---------- Context ---------- */
interface LangCtx {
  lang: Lang;
  dir: "ltr" | "rtl";
  setLang: (l: Lang) => void;
  toggle: () => void;
  /** Pick the right language from a { en, ar } object. */
  t: <T>(value: L10n<T>) => T;
}

const LanguageContext = createContext<LangCtx | null>(null);
const STORAGE_KEY = "lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
      if (saved === "en" || saved === "ar") {
        setLangState(saved);
      } else if (navigator.language?.toLowerCase().startsWith("ar")) {
        setLangState("ar");
      }
    } catch {
      /* storage blocked — ignore */
    }
  }, []);

  const dir = lang === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
  }, [lang, dir]);

  const setLang = useCallback((l: Lang) => setLangState(l), []);
  const toggle = useCallback(
    () => setLangState((p) => (p === "en" ? "ar" : "en")),
    [],
  );

  const value = useMemo<LangCtx>(
    () => ({
      lang,
      dir,
      setLang,
      toggle,
      t: (v) => v[lang],
    }),
    [lang, dir, setLang, toggle],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used inside <LanguageProvider>");
  return ctx;
}

/* ---------- Switcher: مفتاح تبديل عصري AR | EN ---------- */
export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { lang, toggle } = useLang();
  const isEn = lang === "en";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isEn}
      aria-label="Switch language / تغيير اللغة"
      onClick={toggle}
      dir="ltr"
      className={`relative flex h-8 w-[72px] shrink-0 items-center rounded-full border border-white/10 bg-white/5 backdrop-blur-sm transition-colors hover:border-neon-blue/50 ${className}`}
    >
      {/* الدائرة المتحركة */}
      <span
        aria-hidden
        className={`absolute left-0.5 top-0.5 h-[26px] w-[34px] rounded-full bg-neon-blue shadow-[0_0_12px_rgba(59,130,246,0.6)] transition-transform duration-300 ease-out ${
          isEn ? "translate-x-[34px]" : "translate-x-0"
        }`}
      />

      <span
        className={`relative z-10 flex-1 text-center text-[11px] font-bold transition-colors duration-300 ${
          !isEn ? "text-white" : "text-slate-400"
        }`}
      >
        AR
      </span>
      <span
        className={`relative z-10 flex-1 text-center text-[11px] font-bold transition-colors duration-300 ${
          isEn ? "text-white" : "text-slate-400"
        }`}
      >
        EN
      </span>
    </button>
  );
}
