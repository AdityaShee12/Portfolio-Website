import React from "react";
import Typewriter from "typewriter-effect";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      {/* Full screen image */}
      <div
        className="flex justify-between h-screen w-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/Bg-image.jpeg')" }}>
        {/* Left side */}
        <div>
          {/* Name */}
          <h2 className="text-white font-semibold font-serif ml-[5.3rem] mt-[1.4rem]">
            Aditya Shee
          </h2>
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
          <p className="text-slate-400 font-thin mt-[2rem] ml-[5.5rem]">
            I am a full-stack developer specializing in the MERN stack. I have
            built several web applications, including a real-time chat
            application, password generator, and a to-do app. Currently, I am
            working on an e-commerce web application.
          </p>
          <div className="bg-violet-800 w-[7rem] h-[2rem] text-center rounded-lg pt-[0.2rem] mt-[3rem] cursor-pointer ml-[5.4rem] font-extrabold text-white">
            Contact Me
          </div>
        </div>
        {/* Right side */}
        <div className="flex">
          {/* Nav Section */}
          <div className="flex gap-[2rem] mt-[1.4rem] mr-[29rem] cursor-pointer text-white text-lg whitespace-nowrap">
            <div>About Me</div>
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
          {/* Github and LinkedfIn */}
          <a href="https://github.com/AdityaShee12">
            {" "}
            <img
              src="/Github.png"
              alt=""
              className="absolute w-[2.5rem]  right-[17rem] top-[1.6rem] cursor-pointer"
            />
          </a>
          <a href="https://www.linkedin.com/in/aditya-shee-b742a9322/">
            <img
              src="/LinkedIn.png"
              alt=""
              className="absolute w-[2.2rem] right-[14rem] top-[1.4rem] cursor-pointer"
            />
          </a>
        </div>
      </div>
      {/* Avatar Section */}
      <img
        src="/Avatar.jpeg"
        alt=""
        className="absolute w-[25rem] top-[9rem] right-[12rem] rounded-full"
      />
    </div>
  );
};

export default Home;

// import React from "react";
// import Typewriter from "typewriter-effect";
// import { useNavigate } from "react-router-dom";

// const Home = () => {
//   const navigate = useNavigate();
//   return (
//     <div>
//       {/* Full screen image */}
//       <div
//         className="flex justify-between h-screen bg-cover bg-center bg-no-repeat"
//         style={{ backgroundImage: "url('/Bg-image.jpeg')" }}>
//         {/* Left side */}
//         <div>
//           {/* Name */}
//           <h2 className="text-white font-semibold font-serif ml-[5rem] mt-[1rem]">
//             Aditya Shee
//           </h2>
//           {/* Welcome to my portfolio */}
//           <div className="text-3xl text-white font-bold ml-[5.5rem] mt-[10rem]">
//             Hi, I am <p className="my-[0.4rem]"> Aditya Shee</p>
//           </div>
//           {/* Typewriter Effect */}
//           <div className="text-2xl font-bold text-white ml-[5.5rem] ">
//             I am a{" "}
//             <span className="inline-block text-violet-800">
//               <Typewriter
//                 options={{
//                   loop: true,
//                   delay: 70,
//                   html: true,
//                 }}
//                 onInit={(typewriter) => {
//                   typewriter
//                     .typeString("Coder")
//                     .pauseFor(2000)
//                     .deleteAll()
//                     .typeString("  Full-stack web developer")
//                     .pauseFor(2000)
//                     .deleteAll()
//                     .start();
//                 }}
//               />
//             </span>
//           </div>
//           <p className="text-slate-400 font-thin mt-[2rem] ml-[5.5rem]">
//             I am a full-stack developer specializing in the MERN stack. I have
//             built several web applications, including a real-time chat
//             application, password generator, and a to-do app. Currently, I am
//             working on an e-commerce web application.
//           </p>
//           <div className="bg-violet-800 w-[7rem] h-[2rem] text-center rounded-lg pt-[0.2rem] mt-[3rem] cursor-pointer ml-[5.4rem] font-extrabold text-white">
//             Contact Me
//           </div>
//         </div>
//         {/* Right side */}
//         <div className="flex">
//           {/* Nav Section */}
//           <div className="flex gap-[2rem] mt-[1rem] mr-[30rem] cursor-pointer text-white text-lg">
//             <div>Home</div>
//             <div>Resume</div>
//             <div
//               onClick={() => {
//                 navigate("/skills");
//               }}>
//               Skills
//             </div>
//             <div
//               onClick={() => {
//                 navigate("/projects");
//               }}>
//               Projects
//             </div>
//             <div
//               onClick={() => {
//                 navigate("/contact");
//               }}>
//               Contact
//             </div>
//           </div>{" "}
//           {/* Github and LinkedIN */}
//           <div className="flex mr-[3rem]">
//             <img src="/Github.png" alt="" className="w-[3rem] h-[3rem]" />
//             <img src="/LinkedIn.png" alt="" className="w-[3rem] h-[3rem]" />
//           </div>
//         </div>
//       </div>
//       {/* Avatar Section */}
//       <img
//         src="/Avatar.jpeg"
//         alt=""
//         className="absolute w-[25rem] top-[9rem] right-[12rem] rounded-full"
//       />
//     </div>
//   );
// };

// export default Home;
