import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project, index }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 150, mass: 0.5 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  const rotateX = useTransform(smoothY, [-1, 1], [5, -5]);
  const rotateY = useTransform(smoothX, [-1, 1], [-5, 5]);

  const handlePointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const offsetX = event.clientX - centerX;
    const offsetY = event.clientY - centerY;
    x.set(offsetX / 30); 
    y.set(offsetY / 30);
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
      className="w-full perspective-[1500px] pointer-events-auto cursor-none group"
      style={{ perspective: 1500 }}
    >
      <motion.div
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="w-full glass-panel rounded-3xl overflow-hidden relative flex flex-col md:flex-row touch-none"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-aurora-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0"></div>

        {/* Image Section */}
        {project.img && (
          <div className="w-full md:w-1/2 h-64 md:h-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-obsidian/40 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-110"
            />
          </div>
        )}

        {/* Content Section */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative z-10 bg-obsidian/40 backdrop-blur-sm">
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4 group-hover:text-gradient-aurora transition-all duration-300">
            {project.title}
          </h3>
          <p className="text-gray-400 font-body text-base md:text-lg leading-relaxed mb-8">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-10">
            {project.techStack.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-4 py-1.5 text-xs font-syne font-semibold bg-white/5 text-aurora-teal rounded-full border border-aurora-teal/20"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-6 mt-auto">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-white text-gray-400 transition-colors cursor-none text-sm font-syne uppercase tracking-wider font-bold"
            >
              <FaGithub size={20} /> Code
            </a>
            <a
              href={project.DeployLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-aurora-teal hover:text-aurora-orange transition-colors cursor-none text-sm font-syne uppercase tracking-wider font-bold"
            >
              Live Demo <FaExternalLinkAlt size={16} />
            </a>
          </div>
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
      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* Header */}
        <motion.div
           initial={{ opacity: 0, y: -30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="mb-20 text-center"
        >
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-white mb-4">
            Selected <span className="text-gradient-aurora">Works</span>
          </h2>
          <p className="text-gray-400 font-body text-lg max-w-2xl mx-auto">Explore some of my recent projects, showcasing my expertise in web development.</p>
        </motion.div>

        {/* Projects List */}
        <div className="flex flex-col gap-16">
          {projects.map((project, index) => (
             <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;