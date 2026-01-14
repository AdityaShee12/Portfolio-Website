import React from "react";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div>
      {/* Full screen image   */}
      <div
        className="flex justify-between h-screen w-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/Bg-image.jpeg')" }}>
        {/* Left side */}
        <div>
          {/* Welcome to my portfolio */}
          <div className="text-3xl text-white font-bold ml-[5.5rem] mt-[10rem]">
            Hi, I am <p className="my-[0.4rem]"> Aditya Shee</p>
          </div>
          {/* Typewriter Effect */}
          <div className="text-2xl font-bold text-white ml-[5.5rem] ">
            I am a{" "}
            <span className="inline-block text-violet-800">
              <Typewriter
                options={{
                  loop: true,
                  delay: 70,
                  html: true,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Coder")
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString("  Full-stack web developer")
                    .pauseFor(2000)
                    .deleteAll()
                    .start();
                }}
              />
            </span>
          </div>
          <p className="text-slate-400 text-lg font-thin w-[25rem] mt-[2rem] ml-[5.5rem]">
            I am a full-stack developer specializing in the MERN stack. I have
            built several web applications, including a real-time chat
            application, password generator, and a to-do app. Currently, I am
            working on an e-commerce web application.
          </p>
          <div className="bg-violet-800 w-[11rem] h-[2.5rem] text-center text-  rounded-lg pt-[0.4rem] mt-[3rem] cursor-pointer ml-[5.4rem] font-extrabold text-white transition duration-300 ease-in-out hover:scale-110 whitespace-nowrap">
            <a href="/Resume.pdf" download className="text-white">
              Download Resume
            </a>
          </div>
        </div>
      </div>
      {/* Avatar Section */}
      <img
        src="/Home.jpeg"
        alt=""
        className="absolute w-[25rem] h-[25rem] top-[9rem] right-[12rem] rounded-full"
      />
    </div>
  );
};

export default Home;