import React from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

const MagneticButton = ({ children, className, href, download }) => {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = e.currentTarget.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.a
      href={href}
      download={download}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      className={`relative inline-flex items-center justify-center cursor-none transition-shadow ${className}`}
    >
      {children}
    </motion.a>
  );
};

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen w-full flex flex-col items-center justify-center pt-20 overflow-hidden bg-transparent">
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full flex flex-col items-center justify-center min-h-[calc(100vh-5rem)] py-12 text-center pointer-events-none">

        {/* Centered Avatar Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative mb-8 md:mb-10 group pointer-events-auto"
        >
          <div className="absolute inset-0 rounded-full bg-aurora-purple blur-[60px] opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
          <div className="relative w-36 h-36 md:w-52 md:h-52 rounded-full p-1 bg-gradient-to-tr from-aurora-purple via-aurora-teal to-aurora-orange shadow-[0_0_40px_rgba(123,44,191,0.5)]">
            <img
              src="/Home.jpeg"
              alt="Aditya Shee"
              className="w-full h-full object-cover rounded-full border-4 border-obsidian"
            />
          </div>
        </motion.div>

        {/* Small Intro Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-aurora-teal font-syne font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-6 drop-shadow-md"
        >
          Welcome to my digital universe
        </motion.div>

        {/* Main Heading Text Inline with Typewriter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-black leading-[1.1] mb-8 flex flex-col items-center justify-center gap-y-2 flex-wrap"
        >
          <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">Hi, I'm Aditya,</span>
          <span className="text-gradient-aurora min-w-[280px] md:min-w-[500px] text-center pb-2">
            <Typewriter
              options={{
                strings: ['Full Stack Developer', 'MERN Specialist', 'Next.js Expert'],
                autoStart: true,
                loop: true,
                delay: 60,
                deleteSpeed: 30,
              }}
            />
          </span>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-gray-400 text-lg md:text-xl lg:text-2xl font-light mb-12 tracking-wide max-w-3xl font-body"
        >
          Building premium, scalable, and beautifully animated web applications.
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-8 pointer-events-auto w-full sm:w-auto px-4"
        >
          <MagneticButton
            href="#projects"
            className="w-full sm:w-auto bg-white text-obsidian font-bold py-4 px-10 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.6)] font-syne text-lg"
          >
            View Projects
          </MagneticButton>

          <MagneticButton
            href="#contact"
            className="w-full sm:w-auto glass-panel hover:bg-white/10 text-white font-bold py-4 px-10 rounded-full font-syne text-lg"
          >
            Contact Me
          </MagneticButton>

          <MagneticButton
            href="/Resume.pdf"
            download
            className="w-full sm:w-auto relative group py-4 px-10 rounded-full font-syne text-lg font-bold overflow-hidden"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-aurora-purple to-aurora-teal opacity-70 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute inset-[2px] bg-obsidian rounded-full"></div>
            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-aurora-purple to-aurora-teal group-hover:text-white transition-colors duration-300">
              Download Resume
            </span>
          </MagneticButton>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
