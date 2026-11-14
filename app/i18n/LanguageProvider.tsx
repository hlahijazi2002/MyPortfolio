"use client";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  type ReactNode,
} from "react";
import { usePathname, useRouter } from "next/navigation";

export type Lang = "en" | "ar";

/** A piece of content that exists in both languages. */
export type L10n<T = string> = Record<Lang, T>;

interface LangCtx {
  lang: Lang;
  dir: "ltr" | "rtl";
  setLang: (l: Lang) => void;
  toggle: () => void;
  /** Pick the right language from a { en, ar } object. */
  t: <T>(value: L10n<T>) => T;
  /** Add the /ar prefix to an internal link when the page is Arabic. */
  l: (path: string) => string;
}

const LanguageContext = createContext<LangCtx | null>(null);

const isArPath = (p: string) => p === "/ar" || p.startsWith("/ar/");
const stripAr = (p: string) => p.replace(/^\/ar(?=\/|$)/, "") || "/";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname() ?? "/";
  const router = useRouter();

  const lang: Lang = isArPath(pathname) ? "ar" : "en";
  const dir = lang === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang, dir]);

  const setLang = useCallback(
    (next: Lang) => {
      if (next === lang) return;
      const target =
        next === "ar"
          ? "/ar" + (pathname === "/" ? "" : pathname)
          : stripAr(pathname);
      router.push(target + window.location.hash);
    },
    [lang, pathname, router],
  );

  const toggle = useCallback(
    () => setLang(lang === "en" ? "ar" : "en"),
    [lang, setLang],
  );

  const l = useCallback(
    (path: string) => {
      if (lang !== "ar") return path;
      if (path === "/") return "/ar";
      if (path.startsWith("/#")) return "/ar" + path.slice(1);
      return "/ar" + path;
    },
    [lang],
  );

  const value = useMemo<LangCtx>(
    () => ({ lang, dir, setLang, toggle, t: (v) => v[lang], l }),
    [lang, dir, setLang, toggle, l],
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
      className={`relative flex h-8 w-18 *:shrink-0 items-center rounded-full border border-white/10 bg-white/5 backdrop-blur-sm transition-colors hover:border-neon-blue/50 ${className}`}
    >
      <span
        aria-hidden
        className={`absolute left-0.5 top-0.5 h-6.5 w-8.5 rounded-full bg-neon-blue shadow-[0_0_12px_rgba(59,130,246,0.6)] transition-transform duration-300 ease-out ${
          isEn ? "translate-x-8.5" : "translate-x-0"
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
