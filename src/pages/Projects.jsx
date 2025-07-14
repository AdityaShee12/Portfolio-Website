import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

const Projects = () => {
  const projects = [
    {
      img: "",
      title: "Password Generator",
      description:
        "A password generator is a web application built with React.js that allows users to generate unique passwords.",
      techStack: ["React", "Tailwind CSS"],
    },
    {
      img: "/currency-converter.png",
      title: "Currency Converter",
      description:
        "Currency Converter is a web application built with React.js that allows users to convert between various currencies.",
      techStack: ["React", "Tailwind CSS"],
    },
    {
      img: "",
      title: "TODO",
      description:
        "A simple and intuitive To-Do list application built with React.js. This project allows users to add, edit, and delete tasks, helping them stay organized and manage their daily activities efficiently.",
      techStack: ["React", "Tailwind CSS"],
    },
    {
      img: "",
      title: "Calculator",
      description: "A basic calculator built with HTML, CSS, and JavaScript.",
      techStack: ["React", "Tailwind CSS"],
    },
  ];

  return (
    <div
      style={{ backgroundImage: "url('/Bg-image.jpeg')" }}
      className="bg-cover bg-center p-[1.5rem]">
      {" "}
      <div className="text-white text-3xl pt-[5rem] pl-[4rem]">My Project</div>
      {projects.map((project, index) => {
        const { ref, inView } = useInView({
          triggerOnce: false,
          threshold: 0.6,
        });

        const isEven = index % 2 === 0;

        return (
          <div className="flex mt-[0.5rem] justify-start">
            {" "}
            <div
              key={index}
              ref={ref}
              className={`flex ${isEven ? "flex-row" : "flex-row-reverse "}`}>
              {/* Image */}
              <div
                className={`${
                  inView
                    ? "opacity-100 translate-x-0"
                    : isEven
                    ? "-translate-x-20 opacity-0"
                    : "translate-x-20 opacity-0"
                } transition-all duration-1000 w-[33rem]`}>
                <img
                  src={project.img}
                  alt=""
                  className="absolute flex w-[19.7rem] h-[12.65rem] left-[6.7rem] rounded-md top-[3.4rem]"
                />
                <img src="/MockUp_Laptop.png" alt="" />
              </div>
              {/* Description */}
              <div
                className={`${
                  inView
                    ? "opacity-100 translate-x-0"
                    : isEven
                    ? "opacity-0 translate-x-20"
                    : "opacity-0 -translate-x-20"
                } transition-all duration-1000 text-white w-[25rem] flex
              flex-col justify-center gap-2 mr-[3rem] ml-[3.7rem]`}>
                <div>{project.title}</div>
                <div>{project.description}</div>
                <div className="flex gap-3 py-2">
                  {" "}
                  {project.techStack.map((tech, index) => (
                    <div
                      key={index}
                      className="bg-white text-black h-[1.5rem] w-[4.5rem] text-center rounded-full transition duration-150 hover:-translate-y-1 hover:scale-100">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
