import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className="flex justify-between absolute">
      <h2 className="text-white font-semibold font-serif ml-[5.3rem] mt-[1.5rem] whitespace-nowrap">
        Aditya Shee
      </h2>
      <div className="flex">
        {/* Nav Section */}
        <div className="flex gap-[2rem] ml-[19.4rem] mt-[1.4rem] mr-[28.3rem] cursor-pointer text-white text-lg whitespace-nowrap">
          <div
            onClick={() => {
              navigate("/");
            }}>
            About Me
          </div>
          <div>Resume</div>
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
          <div
            onClick={() => {
              navigate("/contact");
            }}>
            Contact
          </div>
        </div>{" "}
      </div>
    </nav>
  );
};

export default Navbar;
