import React from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen w-full flex flex-col items-center justify-center pt-20 overflow-hidden bg-transparent">

      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full flex flex-col items-center justify-center min-h-[calc(100vh-5rem)] py-12 text-center pointer-events-none">

        {/* Centered Avatar Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mb-6 md:mb-8"
        >
          <div className="absolute inset-0 rounded-full bg-blue-500 blur-[50px] opacity-30"></div>
          <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full p-1 bg-gradient-to-tr from-blue-700 to-blue-300 shadow-[0_0_30px_rgba(37,99,235,0.4)]">
            <img
              src="/Home.jpeg"
              alt="Aditya Shee"
              className="w-full h-full object-cover rounded-full border-[3px] border-[#020617]"
            />
          </div>
        </motion.div>

        {/* Small Intro Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-blue-400 font-semibold tracking-widest text-xs md:text-sm mb-4 drop-shadow-md"
        >
          Welcome to my digital universe
        </motion.div>

        {/* Main Heading Text Inline with Typewriter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight mb-8 flex flex-col md:flex-row items-center justify-center gap-x-4 flex-wrap"
        >
          <span className="text-white">Hi, I'm Aditya,</span>
          <span className="text-blue-500 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400 min-w-[200px] md:min-w-[350px] text-center md:text-left">
            <Typewriter
              options={{
                strings: ['Full Stack Developer', 'MERN Stack Developer', 'Next.js Developer'],
                autoStart: true,
                loop: true,
                delay: 50,
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
          className="text-gray-400 text-base md:text-lg lg:text-xl font-light mb-10 tracking-wide max-w-2xl"
        >
          Full Stack Developer | MERN Stack Developer | Next.js Developer
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pointer-events-auto"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold py-3.5 px-8 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] cursor-none hover:-translate-y-1"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-white/5 hover:bg-blue-900/40 border border-white/10 hover:border-blue-500/50 backdrop-blur-md text-white font-bold py-3.5 px-8 rounded-full transition-all duration-300 shadow-lg cursor-none hover:-translate-y-1"
          >
            Contact Me
          </a>

          <a
            href="/Resume.pdf"
            download
            className="w-full sm:w-auto inline-flex items-center justify-center bg-white hover:bg-gray-100 text-blue-950 font-bold py-3.5 px-8 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.5)] hover:shadow-[0_0_25px_rgba(255,255,255,0.7)] transition-all duration-300 cursor-none hover:-translate-y-1"
          >
            Download Resume
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
