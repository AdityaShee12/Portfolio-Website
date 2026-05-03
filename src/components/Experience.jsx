import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Experience = () => {
  const timeline = [
    {
      year: "2023 - Present",
      role: "Freelance Full-Stack Developer",
      company: "Self-Employed",
      description: "Developing scalable responsive web applications for various clients using React, Express, MongoDB, and Tailwind CSS. Setting up real-time websocket connections and integrating third-party APIs.",
    },
    {
      year: "Present (Final Year)",
      role: "Bachelor of Technology (B.Tech)",
      company: "Undergraduate Program",
      description: "Currently pursuing the final year of B.Tech. Actively applying engineering principles and maintaining an average of 7 CGPA.",
    },
    {
      year: "Previous",
      role: "Class 12 (Pure Science)",
      company: "Higher Secondary",
      description: "Successfully passed 12th grade with a specialization in Pure Science, securing 69% overall.",
    }
  ];

  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="relative min-h-screen bg-transparent pt-32 pb-24 px-6 lg:px-16 pointer-events-auto">
      <div className="relative z-10 max-w-5xl mx-auto" ref={ref}>
        
        <motion.div
           initial={{ opacity: 0, y: -30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="mb-20 text-center"
        >
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-white mb-4">
            My <span className="text-gradient-aurora">Journey</span>
          </h2>
          <p className="text-gray-400 font-body text-lg max-w-2xl mx-auto">The path I've taken to get to where I am today.</p>
        </motion.div>

        <div className="relative w-full">
          {/* Central Vertical Line Background */}
          <div className="absolute top-0 bottom-0 left-[28px] md:left-1/2 md:-ml-[1px] w-[2px] bg-white/10"></div>
          
          {/* Animated Glowing Line */}
          <motion.div 
            style={{ height: lineHeight }}
            className="absolute top-0 left-[28px] md:left-1/2 md:-ml-[1px] w-[2px] bg-gradient-to-b from-aurora-purple via-aurora-teal to-aurora-orange origin-top shadow-[0_0_20px_#00F5D4]"
          ></motion.div>
          
          {timeline.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} className="mb-16 relative w-full flex flex-col md:flex-row md:justify-between items-start md:items-center group">
                
                {/* Timeline Dot */}
                <div className="absolute left-[19px] md:left-1/2 md:-ml-[10px] w-5 h-5 bg-obsidian rounded-full border-2 border-aurora-teal shadow-[0_0_15px_#00F5D4] z-10 transition-colors duration-500 group-hover:bg-aurora-teal mt-8 md:mt-0"></div>
                
                {/* Content Box */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -50 : 50, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className={`w-full md:w-5/12 pl-16 md:pl-0 ${isEven ? 'md:pr-12 md:text-right' : 'md:ml-auto md:pl-12 md:text-left'}`}
                >
                  <div className="glass-panel p-8 rounded-3xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden group/card">
                    <div className="absolute inset-0 bg-gradient-to-br from-aurora-purple/10 to-aurora-teal/10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
                    <span className="text-aurora-teal font-syne font-bold text-sm tracking-widest uppercase block mb-3">{item.year}</span>
                    <h3 className="text-2xl font-heading font-bold text-white mb-2 group-hover/card:text-gradient-aurora transition-colors duration-300">{item.role}</h3>
                    <h4 className="text-gray-300 font-syne font-semibold mb-5">{item.company}</h4>
                    <p className="text-gray-400 font-body text-base leading-relaxed relative z-10">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
                
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Experience;
