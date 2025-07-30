import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Lenis from "@studio-freight/lenis";

const Projects = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
  const projects = [
    {
      img: "/ChatBook.png",
      title: "ChatBook",
      description:
        "A real time chat application using MERN stack with Tailwind CSS and WebSocket.",
      DeployLink: "https://real-time-chat-application-eta.vercel.app/",
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
      img: "/currency-converter.png",
      title: "Currency Converter",
      description:
        "Currency Converter is a web application built with React.js that allows users to convert between various currencies.",
        DeployLink: "https://vercel.com/aditya-shees-projects/currency-converter",
      techStack: ["React", "Tailwind CSS"],
    },
    {
      img: "/PasswordGenarator.png",
      title: "Password Generator",
      description:
        "A password generator is a web application built with React.js that allows users to generate unique passwords.",
        DeployLink: "",
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
          <div key={index} className="flex mt-[0.5rem] justify-start">
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
                <a
                  href={project.DeployLink}
                  target="_blank"
                  rel="noopener noreferrer">
                  Live Link
                </a>

                <div className="flex gap-3 py-2">
                  {" "}
                  {project.techStack.map((tech, index) => (
                    <div
                      key={index}
                      className="bg-white text-black h-[1.6rem] w-[6rem] px-[1rem] text-center rounded-full transition duration-150 hover:-translate-y-1 hover:scale-100">
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
