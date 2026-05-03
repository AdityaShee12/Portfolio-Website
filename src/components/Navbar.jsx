import React, { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "#hero" },
    { name: "About", path: "#about" },
    { name: "Tech", path: "#techstack" },
    { name: "Projects", path: "#projects" },
    { name: "Experience", path: "#experience" },
    { name: "Contact", path: "#contact" },
  ];

  const scrollToSection = (e, path) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(path);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-4 left-0 w-full z-50 flex justify-center px-4 pointer-events-auto transition-all duration-500`}
    >
      <div className={`flex items-center justify-between w-full max-w-5xl px-6 py-3 rounded-full transition-all duration-500 ${scrolled ? 'bg-obsidian/70 backdrop-blur-xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]' : 'bg-transparent'}`}>
        
        {/* Logo */}
        <a href="#hero" onClick={(e) => scrollToSection(e, '#hero')} className="font-heading font-black text-xl tracking-wider uppercase cursor-none text-white hover:text-aurora-teal transition-colors">
          ADITYA<span className="text-aurora-teal">.</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.path} onClick={(e) => scrollToSection(e, link.path)} className="text-gray-300 hover:text-white font-syne text-sm font-semibold cursor-none relative group transition-colors">
              {link.name}
              <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-aurora-teal group-hover:w-1/2 transition-all duration-300"></span>
              <span className="absolute -bottom-1 right-1/2 w-0 h-0.5 bg-aurora-teal group-hover:w-1/2 transition-all duration-300"></span>
            </a>
          ))}
        </div>

        {/* Resume Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a href="/Resume.pdf" download className="hidden md:block px-6 py-2 rounded-full border border-aurora-purple/50 text-white font-syne text-sm font-bold hover:bg-aurora-purple/20 transition-all cursor-none shadow-[0_0_15px_rgba(123,44,191,0.2)]">
            Resume
          </a>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white cursor-none p-2 focus:outline-none">
            {isOpen ? <HiX size={26} /> : <HiMenu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-20 left-4 right-4 bg-obsidian/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 flex flex-col gap-4 shadow-2xl md:hidden"
          >
            {navLinks.map((link) => (
              <a key={link.name} href={link.path} onClick={(e) => scrollToSection(e, link.path)} className="text-gray-300 hover:text-white font-syne text-lg font-semibold py-3 border-b border-white/5 cursor-none">
                {link.name}
              </a>
            ))}
            <a href="/Resume.pdf" download className="mt-4 w-full text-center py-4 rounded-full bg-gradient-to-r from-aurora-purple to-aurora-teal text-white font-syne font-bold cursor-none">
              Download Resume
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
