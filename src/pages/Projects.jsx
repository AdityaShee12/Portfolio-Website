import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project, index }) => {
  // 3D Tilt Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 150, mass: 0.5 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  const rotateX = useTransform(smoothY, [-1, 1], [10, -10]);
  const rotateY = useTransform(smoothX, [-1, 1], [-10, 10]);

  const handlePointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const offsetX = event.clientX - centerX;
    const offsetY = event.clientY - centerY;

    x.set(offsetX / 20); // Sensitivity applied based on cursor
    y.set(offsetY / 20);
  };

  const handlePointerLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="w-full h-full perspective-[1000px] pointer-events-auto cursor-none group"
      style={{ perspective: 1000 }}
    >
      <motion.div
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="w-full h-full flex flex-col justify-between bg-[#111827] rounded-2xl overflow-hidden border border-white/5 relative shadow-lg hover:shadow-[0_0_30px_rgba(37,99,235,0.15)] transition-shadow duration-300 touch-none"
      >
        {/* Glow Line Top */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>

        <div className="flex flex-col flex-grow z-10" style={{ transform: "translateZ(30px)" }}>
          {/* Image */}
          {project.img && (
            <div className="w-full h-48 sm:h-56 overflow-hidden border-b border-white/5">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
              />
            </div>
          )}

          {/* Texts */}
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
              {project.description}
            </p>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.techStack.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 text-xs font-semibold bg-[#1e293b] text-blue-400 rounded-md border border-blue-500/10 shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Actions Link Section */}
        <div 
          className="w-full border-t border-white/10 px-6 py-4 flex items-center justify-between text-gray-400 bg-[#0f172a]/50"
          style={{ transform: "translateZ(40px)" }} // Links float further out
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition-colors cursor-none text-sm font-medium"
          >
            <FaGithub size={18} /> Code
          </a>
          
          <a
            href={project.DeployLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-400 transition-colors cursor-none text-sm font-medium"
          >
            Live <FaExternalLinkAlt size={14} />
          </a>
        </div>
        
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      img: "/LetterBee.png",
      title: "LetterBee",
      description:
        "A real time chat application using MERN stack with Tailwind CSS and WebSocket.",
      DeployLink: "http://43.204.215.142:3000",
      techStack: [
        "Express.js",
        "Node.js",
        "MongoDB",
        "React",
        "Tailwind CSS",
        "WebSocket",
      ],
    },
    {
      img: "/ClimaSphere.png",
      title: "ClimaSphere",
      description:
        "Climasphere is a MERN Stack web application focused on environmental data, analysis, and education. The platform allows users to view weather and air pollution data based on their location, download datasets, access analytical insights, and learn from environment-related knowledge.",
      DeployLink: "http://52.66.188.192:3000",
      techStack: [
        "Express.js",
        "Node.js",
        "MongoDB",
        "React",
        "Tailwind CSS",
      ],
    },
    {
      img: "/currency-converter.png",
      title: "Currency Converter",
      description:
        "Currency Converter is a web application built with React.js that allows users to convert between various currencies.",
      DeployLink: "https://vercel.com/aditya-shees-projects/currency-converter",
      techStack: ["React", "Tailwind CSS"],
    },
  ];

  return (
    <section id="projects" className="relative min-h-screen bg-transparent pt-32 pb-24 px-6 lg:px-16 overflow-hidden pointer-events-auto">
      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Header */}
        <motion.div
           initial={{ opacity: 0, y: -30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured <span className="text-blue-500">Projects</span></h2>
          <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mx-auto"></div>
        </motion.div>

        {/* CSS Grid for Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch pt-4">
          {projects.map((project, index) => (
             <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;