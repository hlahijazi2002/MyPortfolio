"use client";
import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { LanguageSwitcher, useLang, type L10n } from "../i18n/LanguageProvider";

const navLinks: { name: L10n; href: string }[] = [
  { name: { en: "Home", ar: "الرئيسية" }, href: "/#home" },
  { name: { en: "About", ar: "نبذة عني" }, href: "/#about" },
  { name: { en: "Skills", ar: "المهارات" }, href: "/#skills" },
  { name: { en: "Projects", ar: "المشاريع" }, href: "/projects" },
  { name: { en: "Education", ar: "التعليم" }, href: "/#education" },
  { name: { en: "Contact", ar: "تواصل معي" }, href: "/#contact" },
];

const text = {
  name: { en: "Hla Hijazi", ar: "هلا حجازي" },
  role: { en: "Software Engineer", ar: "مهندسة برمجيات" },
  resume: { en: "Explore Resume", ar: "عرض السيرة الذاتية" },
  toggleTheme: { en: "Toggle theme", ar: "تغيير المظهر" },
  toggleMenu: { en: "Toggle menu", ar: "فتح القائمة" },
};

const RESUME_URL =
  "https://docs.google.com/document/d/1c2qDqvsiPYWwoJap_tFQmo7vPB2au0ADKcmCAu_cW28/edit?usp=sharing";

const NavBar = () => {
  const { lang, dir, t } = useLang();
  const isAr = lang === "ar";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const pathname = usePathname();
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);
  const isActive = (href: string) =>
    href === "/projects"
      ? pathname === "/projects" || (pathname === "/" && active === "projects")
      : pathname === "/" && active === href.replace("/#", "");
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
  });
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const ids = ["home", "about", "skills", "projects", "education", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -50% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const isDark = resolvedTheme === "dark";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "py-4 glassmorphism" : "py-6 bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/#home" className="leading-tight">
          <p className="text-lg md:text-xl font-bold tracking-tight text-white">
            {t(text.name)}
          </p>
          <p
            className={`text-[11px] font-semibold text-slate-400 ${
              isAr ? "text-xs" : "tracking-[0.2em] uppercase"
            }`}
          >
            {t(text.role)}
          </p>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`group text-sm font-medium ${
                isActive(link.href) ? "text-neon-blue" : "text-slate-300"
              }`}
            >
              {isAr ? (
                <span className="transition-colors duration-500 group-hover:text-neon-blue">
                  {t(link.name)}
                </span>
              ) : (
                Array.from(t(link.name)).map((ch, i) => (
                  <span
                    key={i}
                    className="inline-block transition-colors duration-500 group-hover:text-neon-blue group-hover:[transition-delay:var(--d)]"
                    style={{ "--d": `${i * 70}ms` } as React.CSSProperties}
                  >
                    {ch}
                  </span>
                ))
              )}
            </a>
          ))}
        </div>

        <div className="flex md:hidden items-center gap-3">
          <LanguageSwitcher />
          <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label={t(text.toggleTheme)}
            className="w-9 h-9 flex items-center justify-center text-slate-300"
          >
            {mounted && (isDark ? <Sun size={16} /> : <Moon size={16} />)}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={t(text.toggleMenu)}
            className="w-9 h-9 flex items-center justify-center text-slate-300"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <LanguageSwitcher />
          <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label={t(text.toggleTheme)}
            className="w-9 h-9 flex items-center justify-center text-slate-300 hover:text-neon-blue transition-colors"
          >
            {mounted && (isDark ? <Sun size={16} /> : <Moon size={16} />)}
          </button>
          <motion.a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-neon-blue/10 border border-neon-blue/50 text-neon-blue px-5 py-2 rounded-full text-sm font-semibold hover:bg-neon-blue hover:text-[#ffffff] transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t(text.resume)}
          </motion.a>
        </div>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden glassmorphism mx-4 mt-3 rounded-2xl p-4 flex flex-col gap-1"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "text-neon-blue bg-neon-blue/10"
                    : "text-slate-300 hover:bg-white/5"
                }`}
              >
                {t(link.name)}
              </a>
            ))}
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 px-4 py-3 rounded-xl text-center text-sm font-semibold bg-neon-blue text-[#ffffff]"
            >
              {t(text.resume)}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
      {/* شريط التقدم: بيبدأ من اليمين بالعربي */}
      <motion.div
        style={{
          scaleX: progress,
          transformOrigin: dir === "rtl" ? "100% 50%" : "0% 50%",
        }}
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-neon-blue"
      />
    </nav>
  );
};

export default NavBar;
