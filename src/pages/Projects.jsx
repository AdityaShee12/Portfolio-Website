// src/pages/Projects.js
import React from "react";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Password Generator",
      description:
        "A password generator is a web application built with React.js that allows users to generate unique passwords.",
      techStack: "React, Tailwind CSS",
      image: "", // Update with your image path
    },
    {
      title: "Currency Converter",
      description:
        "Currency Converter is a web application built with React.js that allows users to convert between various currencies.",
      techStack: "React, Tailwind CSS",
      image: "", // Update with your image path
    },
    {
      title: "TODO",
      description:
        "A simple and intuitive To-Do list application built with React.js. This project allows users to add, edit, and delete tasks, helping them stay organized and manage their daily activities efficiently.",
      techStack: "React, Tailwind CSS",
      image: "", // Update with your image path
    },
    {
      title: "Calculator",
      description: "A basic calculator built with HTML, CSS, and JavaScript.",
      techStack: "React, Tailwind CSS",
      image: "", // Update with your image path
    },
    // Add more projects here
  ];

  return (
    <div  style={{ backgroundImage: "url('/Bg-image.jpeg')" }}>
      {" "}
      <div className="container mx-auto mt-10">
        <h1 className="text-4xl font-bold mb-6">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
