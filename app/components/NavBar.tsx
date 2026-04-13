"use client";
import { useState, useEffect, JSX } from "react";
import { Rocket, User, Briefcase, Mail } from "lucide-react";
import { motion } from "framer-motion";

interface NavLink {
  name: string;
  href: string;
  icon: JSX.Element;
}

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks: NavLink[] = [
    { name: "Home", href: "#home", icon: <Rocket size={18} /> },
    { name: "Skills", href: "#skills", icon: <User size={18} /> },
    { name: "Projects", href: "#projects", icon: <Briefcase size={18} /> },
    { name: "Contact", href: "#contact", icon: <Mail size={18} /> },
  ];
  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "py-4 glassmorphism" : "py-6 bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold tracking-tighter"
        >
          <span className="text-white">Hla-</span>
          <span className="text-neon-blue">Portfolio</span>
        </motion.div>

        <div className="hidden md:flex gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative group text-slate-300 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium "
            >
              {link.icon}
              {link.name}

              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-neon-blue transition-all duration-300 group-hover:w-full " />
            </motion.a>
          ))}
        </div>
        <motion.a
          href="https://docs.google.com/document/d/1c2qDqvsiPYWwoJap_tFQmo7vPB2au0ADKcmCAu_cW28/edit?usp=sharing"
          target="_blank"
          className="bg-neon-blue/10 border border-neon-blue/50 text-neon-blue px-5 py-2 rounded-full text-sm font-semibold hover:bg-neon-blue hover:text-black transition-all shadow-[0_0_15px_rgba(59, 130, 246, 0.3)]"
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
