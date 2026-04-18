import React from "react";
import { motion } from "framer-motion";

const TechStack = () => {
  const categories = [
    {
      title: "Programming Language",
      items: [
        { name: "HTML", img: "/HTML.png" },
        { name: "CSS", img: "/CSS.png" },
        { name: "JavaScript", img: "/Js.png" },
        { name: "C++", img: "/CPP.png" },
      ],
    },
    {
      title: "Library",
      items: [{ name: "React.js", img: "/React.png" }],
    },
    {
      title: "Framework",
      items: [
        { name: "Express.js", img: "/Express.png" },
        { name: "Tailwind CSS", img: "/Tailwind.png" },
      ],
    },
    {
      title: "Database",
      items: [{ name: "MongoDB", img: "/MongoDB.png" }],
    },
    {
      title: "Runtime Environment",
      items: [{ name: "Node.js", img: "/Node.png" }],
    },
    {
      title: "Tools",
      items: [
        { name: "Git", img: "/Git.png" },
        { name: "Github", img: "/Github.png" },
        { name: "VS Code", img: "/Vs.png" },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 120 } },
  };

  return (
    <section
      id="techstack"
      className="relative min-h-screen bg-transparent pt-24 pb-12 px-6 lg:px-24 pointer-events-auto"
    >
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">My <span className="text-blue-400">Tech Stack</span></h2>
          <div className="h-1 w-24 bg-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col gap-10">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-blue-900/10 transition-colors duration-300"
            >
              <h3 className="text-2xl font-semibold text-gray-200 mb-6 drop-shadow-md">
                {category.title}
              </h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="flex flex-wrap gap-6 md:gap-10 items-center justify-start"
              >
                {category.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    variants={itemVariants}
                    whileHover={{ scale: 1.15, rotate: 2 }}
                    className="flex flex-col items-center justify-center p-4 bg-black/20 rounded-xl border border-white/5 shadow-lg w-[100px] md:w-[120px] aspect-square"
                  >
                    <motion.img
                      animate={{
                        y: [-skillIndex % 2 === 0 ? 5 : -5, skillIndex % 2 === 0 ? -5 : 5]
                      }}
                       transition={{
                         duration: 2 + (skillIndex % 3) * 0.5,
                         repeat: Infinity,
                         repeatType: "reverse",
                         ease: "easeInOut",
                       }}
                      src={skill.img}
                      alt={skill.name}
                      className="w-12 h-12 md:w-16 md:h-16 object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                      onError={(e) => { e.target.src = "/Vs.png"; e.target.style.display="none" }}
                    />
                    <span className="mt-3 text-xs md:text-sm font-medium text-gray-300 text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
