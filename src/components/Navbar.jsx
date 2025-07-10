import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="flex justify-between"
      style={{ backgroundImage: "url('/Bg-image.jpeg')" }}>
      <h2 className="text-white font-semibold font-serif ml-[5.3rem] mt-[1.5rem]">
        Aditya Shee
      </h2>
      <div className="flex gap-[1rem] mt-[1.4rem] mr-[29rem] cursor-pointer text-white text-lg whitespace-nowrap">
        <div>About Me</div>
        <div
          onClick={() => {
            navigate("/skills");
          }}>
          Skills
        </div>
        <div
          onClick={() => {
            navigate("/projects");
          }}>
          Projects
        </div>
        <div>Resume</div>
        <div
          onClick={() => {
            navigate("/contact");
          }}>
          Contact
        </div>
      </div>
       {/* Github and LinkedfIn */}
       <a href="https://github.com/AdityaShee12">
          {" "}
          <img
            src="/Github.png"
            alt=""
            className="absolute w-[2.5rem]  right-[15rem] top-[1.6rem] cursor-pointer"
          />
        </a>
        <a href="https://www.linkedin.com/in/aditya-shee-b742a9322/">
          <img
            src="/LinkedIn.png"
            alt=""
            className="absolute w-[2.2rem] right-[12rem] top-[1.4rem] cursor-pointer"
          />
        </a>
    </nav>
  );
};

export default Navbar;
