import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="relative min-h-screen bg-transparent pt-32 pb-24 px-6 lg:px-16 flex items-center justify-center pointer-events-auto">
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-heading font-bold text-white mb-4">
            Beyond the <span className="text-gradient-aurora">Code</span>
          </h2>
          <p className="text-gray-400 font-body text-lg max-w-2xl mx-auto">Discover my journey, expertise, and what drives my passion for web development.</p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          
          {/* Main Bio Card - Spans 2 cols */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2 glass-panel p-8 md:p-10 rounded-3xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-aurora-purple/20 blur-[80px] rounded-full group-hover:bg-aurora-teal/20 transition-colors duration-700"></div>
            <h3 className="text-2xl font-syne font-bold text-white mb-6 relative z-10">My Story</h3>
            <div className="text-gray-300 font-body text-lg space-y-4 leading-relaxed relative z-10">
              <p>
                I am a passionate Full-Stack Developer specializing in the MERN stack with a strong drive to build scalable and high-performance web applications. My journey in technology started with an endless curiosity to understand how the web works.
              </p>
              <p>
                Alongside my programming skills, I am an enthusiastic Digital Marketer and Content Creator. I love exploring the intersection between technical implementation and engaging user experiences. 
              </p>
            </div>
          </motion.div>

          {/* Image Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-panel p-2 rounded-3xl aspect-square md:aspect-auto flex items-center justify-center overflow-hidden relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-aurora-purple/20 to-aurora-teal/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
            <img src="/Home.jpeg" alt="About Me" className="w-full h-full object-cover rounded-2xl filter grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
          </motion.div>

          {/* Stats Card 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-panel p-8 rounded-3xl flex flex-col items-center justify-center text-center group overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-aurora-teal/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="block text-6xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 mb-2">10+</span>
            <span className="text-sm font-syne font-semibold text-aurora-teal uppercase tracking-widest">Projects Completed</span>
          </motion.div>

          {/* Stats Card 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-panel p-8 rounded-3xl flex flex-col items-center justify-center text-center group overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-aurora-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="block text-6xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 mb-2">2+</span>
            <span className="text-sm font-syne font-semibold text-aurora-purple uppercase tracking-widest">Years Learning</span>
          </motion.div>

          {/* Mission Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="glass-panel p-8 rounded-3xl flex flex-col justify-center relative overflow-hidden"
          >
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-aurora-purple to-aurora-orange"></div>
            <h3 className="text-xl font-syne font-bold text-white mb-3">The Mission</h3>
            <p className="text-gray-400 font-body text-sm leading-relaxed">
              Whether it's deploying a real-time WebSocket chat app or structuring complex backend APIs, I approach every challenge with dedication and an eagerness to learn. Always looking to create meaningful digital solutions that leave a lasting impact.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
