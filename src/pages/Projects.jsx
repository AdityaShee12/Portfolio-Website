import React from "react";
import { useInView } from "react-intersection-observer";

const Projects = () => {
  const projects = [
    {
      title: "Password Generator",
      description:
        "A password generator is a web application built with React.js that allows users to generate unique passwords.",
      techStack: "React, Tailwind CSS",
    },
    {
      title: "Currency Converter",
      description:
        "Currency Converter is a web application built with React.js that allows users to convert between various currencies.",
      techStack: "React, Tailwind CSS",
    },
    {
      title: "TODO",
      description:
        "A simple and intuitive To-Do list application built with React.js. This project allows users to add, edit, and delete tasks, helping them stay organized and manage their daily activities efficiently.",
      techStack: "React, Tailwind CSS",
    },
    {
      title: "Calculator",
      description: "A basic calculator built with HTML, CSS, and JavaScript.",
      techStack: "React, Tailwind CSS",
    },
  ];

  return (
    <div
      style={{ backgroundImage: "url('/Bg-image.jpeg')" }}
      className="bg-cover bg-center min-h-screen py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-10 text-white">My Projects</h1>
        <div className="flex flex-col gap-20">
          {projects.map((project, index) => {
            const { ref, inView } = useInView({
              triggerOnce: false,
              threshold: 0.2,
            });

            const isEven = index % 2 === 0;

            return (
              <div
                ref={ref}
                key={index}
                className={`w-full flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-1000 ${
                  inView
                    ? "opacity-100 translate-x-0"
                    : isEven
                    ? "opacity-0 -translate-x-20"
                    : "opacity-0 translate-x-20"
                } ${isEven ? "" : "md:flex-row-reverse"}`}>
                {/* Image Placeholder */}
                <div>
                  <img src="/MockUp_Laptop.png" alt="" className="w-[70rem]"/>
<img src="" alt="" />
                </div>

                {/* Description */}
                <div className="w-full text-white text-left">
                  <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                  <p className="mb-2">{project.description}</p>
                  <p className="italic text-sm text-gray-300">
                    Tech Stack: {project.techStack}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
