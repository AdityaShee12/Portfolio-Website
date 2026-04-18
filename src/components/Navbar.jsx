import React, { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "#hero" },
    { name: "About", path: "#about" },
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
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 pointer-events-auto ${
        scrolled ? "bg-[#020617]/80 backdrop-blur-lg border-b border-white/5 shadow-[0_0_15px_rgba(37,99,235,0.1)] py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#hero"
              onClick={(e) => scrollToSection(e, '#hero')}
              className="font-black text-xl md:text-2xl tracking-widest uppercase cursor-none transition-transform hover:scale-105"
            >
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                ADITYA SHEE
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                onClick={(e) => scrollToSection(e, link.path)}
                className="text-gray-300 hover:text-white text-sm font-medium transition-colors duration-200 cursor-none relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}

            <a
              href="/Resume.pdf"
              download
              className="ml-4 px-6 py-2 rounded-full border border-blue-500/50 text-blue-400 text-sm font-semibold hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-300 cursor-none shadow-[0_0_10px_rgba(37,99,235,0.1)] hover:shadow-[0_0_15px_rgba(37,99,235,0.2)]"
            >
              Resume
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white focus:outline-none transition-colors"
            >
              {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-[#020617]/95 backdrop-blur-xl border-t border-white/5 transition-all duration-300 overflow-hidden ${isOpen ? "max-h-96 py-4 opacity-100" : "max-h-0 py-0 opacity-0"
          }`}
      >
        <div className="px-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              onClick={(e) => scrollToSection(e, link.path)}
              className="text-gray-300 hover:text-blue-400 text-base font-medium transition-colors block"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-white/10 w-full">
            <a
              href="/Resume.pdf"
              download
              className="inline-block w-full text-center px-6 py-3 rounded-full border border-blue-500/50 text-blue-400 text-base font-semibold hover:bg-blue-500/10 transition-all duration-300"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
