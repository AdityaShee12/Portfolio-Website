import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="relative min-h-screen bg-transparent pt-32 pb-24 px-6 lg:px-16 flex items-center justify-center pointer-events-auto">
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-8 bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-12 shadow-[0_0_50px_rgba(0,0,0,0.5)] backdrop-blur-md">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-5/12 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-blue-500/20 shadow-[0_0_30px_rgba(37,99,235,0.3)] group">
            <div className="absolute inset-0 bg-blue-600/20 group-hover:opacity-0 transition-opacity duration-500 z-10"></div>
            <img src="/Home.jpeg" alt="About Me" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-7/12 flex flex-col"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            About <span className="text-blue-400">Me</span>
          </h2>
          <div className="h-1 w-20 bg-blue-500 rounded-full mb-8"></div>
          
          <div className="text-gray-300 text-lg space-y-6 leading-relaxed">
            <p>
              I am a passionate Full-Stack Developer specializing in the MERN stack with a strong drive to build scalable and high-performance web applications. My journey in technology started with an endless curiosity to understand how the web works.
            </p>
            <p>
              Alongside my programming skills, I am an enthusiastic Digital Marketer and Content Creator. I love exploring the intersection between technical implementation and engaging user experiences. 
            </p>
            <p>
              Whether it's deploying a real-time WebSocket chat app or structuring complex backend APIs, I approach every challenge with dedication and an eagerness to learn. Always looking to create meaningful digital solutions.
            </p>
          </div>

          <div className="mt-10 flex gap-4">
             <div className="bg-blue-950/40 border border-blue-500/30 px-6 py-4 rounded-xl text-center">
               <span className="block text-3xl font-bold text-blue-400">10+</span>
               <span className="text-sm text-gray-400">Projects Completed</span>
             </div>
             <div className="bg-blue-950/40 border border-blue-500/30 px-6 py-4 rounded-xl text-center">
               <span className="block text-3xl font-bold text-blue-400">2+</span>
               <span className="text-sm text-gray-400">Years Learning</span>
             </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
