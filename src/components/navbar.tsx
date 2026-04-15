"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mail, Sun, Moon } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import { useTheme } from "./theme-provider";

const NAV_ITEMS = [
  { name: "Home", href: "#hero" },
  { name: "Expertise", href: "#expertise" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        scrolled ? "top-4" : "top-0"
      )}
    >
      <nav className={cn(
        "max-w-7xl mx-auto flex items-center justify-between transition-all duration-500 rounded-full",
        scrolled ? "glass-dark py-2 px-6" : "bg-transparent py-4 px-0"
      )}>
        {/* Logo */}
        <motion.a 
          suppressHydrationWarning
          href="#hero"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-outfit font-bold tracking-tighter flex items-center gap-2"
        >
          <span className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white text-sm">SP</span>
          <span className={cn("hidden sm:block", scrolled ? "text-foreground" : "text-foreground/90")}>Seth Phinehas</span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item, i) => (
            <motion.a
              suppressHydrationWarning
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
          
          <div className="h-4 w-px bg-white/10 mx-2" />
          
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a href="https://github.com/sethphiny" suppressHydrationWarning target="_blank" className="p-2 glass rounded-full hover:bg-white/10 transition-all">
              <FaGithub size={16} />
            </a>
            <a href="https://linkedin.com/in/sethphiny" suppressHydrationWarning target="_blank" className="p-2 glass rounded-full hover:bg-white/10 transition-all">
              <FaLinkedin size={16} />
            </a>
            <a href="mailto:seth@example.com" suppressHydrationWarning className="p-2 glass rounded-full text-primary hover:bg-primary hover:text-primary-foreground transition-all">
              <Mail size={16} />
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-6 right-6 glass-dark rounded-2xl p-6 md:hidden flex flex-col gap-6"
          >
            {NAV_ITEMS.map((item) => (
              <a 
                suppressHydrationWarning
                key={item.name} 
                href={item.href} 
                className="text-lg font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="h-px w-full bg-white/10" />
            <div className="flex gap-6 justify-center">
              <FaGithub size={24} />
              <FaLinkedin size={24} />
              <Mail size={24} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
