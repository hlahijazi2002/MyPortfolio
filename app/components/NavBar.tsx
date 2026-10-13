"use client";
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

const navLinks = [
  { name: "Home", href: "/#home" },
  { name: "Skills", href: "/#skills" },
  { name: "Projects", href: "/projects" },
  { name: "Education", href: "/#education" },
  { name: "Contact", href: "/#contact" },
];

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDark = resolvedTheme === "dark";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "py-4 glassmorphism" : "py-6 bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="text-xl font-bold tracking-tighter">
          {/* <span className="text-white">Eng. </span> */}
          <span className="text-white">Hla Hijazi</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative group text-slate-300 hover:text-white transition-colors text-sm font-medium"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-neon-blue transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label="Toggle theme"
            className="w-9 h-9 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-slate-300 hover:text-neon-blue hover:border-neon-blue/50 transition-all"
          >
            {mounted && (isDark ? <Sun size={16} /> : <Moon size={16} />)}
          </button>
        </div>

        <motion.a
          href="https://docs.google.com/document/d/1c2qDqvsiPYWwoJap_tFQmo7vPB2au0ADKcmCAu_cW28/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-neon-blue/10 border border-neon-blue/50 text-neon-blue px-5 py-2 rounded-full text-sm font-semibold hover:bg-neon-blue hover:text-black transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Resume
        </motion.a>
      </div>
    </nav>
  );
};

export default NavBar;
