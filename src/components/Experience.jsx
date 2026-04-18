import React from "react";
import { motion } from "framer-motion";

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
      year: "2022 - 2023",
      role: "Content Creator",
      company: "YouTube / Social Media",
      description: "Produced highly engaging content focused on digital marketing, tech reviews, and programming tutorials resulting in a growing community of engaged learners.",
    },
    {
      year: "2021 - 2022",
      role: "Digital Marketing Specialist",
      company: "Various Agencies",
      description: "Managed SEO optimizations, targeted ad delivery, and comprehensive analytics tracking to boost client visibility and funnel conversions online.",
    },
    {
      year: "Previous",
      role: "Class 12 (Pure Science)",
      company: "Higher Secondary",
      description: "Successfully passed 12th grade with a specialization in Pure Science, securing 69% overall.",
    }
  ];

  return (
    <section id="experience" className="relative min-h-screen bg-transparent pt-32 pb-24 px-6 lg:px-16 pointer-events-auto">
      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: -30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">My <span className="text-blue-400">Experience</span></h2>
          <div className="h-1 w-24 bg-blue-500 rounded-full mx-auto"></div>
        </motion.div>

        <div className="relative w-full">
          {/* Central Vertical Line */}
          <div className="absolute top-0 bottom-0 left-[28px] md:left-1/2 md:-ml-[1px] w-[2px] bg-blue-500/30"></div>
          
          {timeline.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} className="mb-12 relative w-full flex flex-col md:flex-row md:justify-between items-start md:items-center group">
                
                {/* Timeline Dot */}
                <div className="absolute left-[19px] md:left-1/2 md:-ml-[10px] w-5 h-5 bg-blue-500 rounded-full border-4 border-[#020617] shadow-[0_0_10px_#60a5fa] z-10 transition-colors duration-300 group-hover:bg-blue-400 mt-6 md:mt-0"></div>
                
                {/* Content Box */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -50 : 50, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className={`w-full md:w-5/12 pl-16 md:pl-0 ${isEven ? 'md:pr-10 md:text-right' : 'md:ml-auto md:pl-10 md:text-left'}`}
                >
                  <div className="bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-2xl hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 shadow-lg">
                    <span className="text-blue-400 font-bold text-sm tracking-widest uppercase block mb-2">{item.year}</span>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">{item.role}</h3>
                    <h4 className="text-gray-400 font-medium mb-4">{item.company}</h4>
                    <p className="text-gray-300 text-base leading-relaxed">
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
