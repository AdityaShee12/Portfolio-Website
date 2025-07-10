import React from "react";

const Skills = () => {
  const programming_language = [
    { name: "HTML", img: "/HTML.png" },
    { name: "CSS", img: "/CSS.png" },
    { name: "JavaScript", img: "/Js.png" },
    { name: "C++", img: "/CPP.png" },
  ];
  const library = [{ name: "React.js", img: "/React.png" }];
  const framework = [
    { name: "Express.js", img: "Express.png" },
    { name: "Tailwind CSS", img: "Tailwind.png" },
  ];
  const database = [{ name: "MongoDB", img: "/MongoDB.png" }];
  const runtime_enviroment = [{ name: "Node.js", img: "/Node.png" }];
  const tools = [
    { name: "Git", img: "Git.png" },
    { name: "Github", img: "/Github.png" },
    { name: "VS Code", img: "Vs.png" },
  ];

  const zigzagClass = (index) =>
    `${index % 2 === 0 ? "float-down-up" : "float-up-down"} mx-[1rem] w-[6rem]`;

  return (
    <section
      className="min-h-screen bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: "url('/Bg-image.jpeg')" }}>
      <div className="text-[2.3rem] mt-[1rem] ml-[2rem]">My Skills</div>

      <div className="text-[1.7rem] font-semibold mt-[0.5rem] ml-[2rem]">
        Programming Language :
      </div>
      <div className="mt-[1.7rem] ml-[1rem] flex flex-wrap">
        {programming_language.map((event, index) => (
          <div key={index} className={zigzagClass(index)}>
            <img
              src={event.img}
              alt={event.name}
              className="h-[5rem] w-[4rem]"
            />
          </div>
        ))}
      </div>

      <div className="text-[1.7rem] font-semibold mt-[1.5rem] ml-[2rem]">
        Library :
      </div>
      <div className="mt-[1.7rem] ml-[1rem] flex flex-wrap">
        {library.map((event, index) => (
          <div key={index} className={zigzagClass(index)}>
            <img
              src={event.img}
              alt={event.name}
              className="h-[5rem] w-[4.9rem]"
            />
          </div>
        ))}
      </div>

      <div className="text-[1.7rem] font-semibold mt-[1.5rem] ml-[2rem]">
        Framework :
      </div>
      <div className="mt-[1.7rem] ml-[1rem] flex flex-wrap">
        {framework.map((event, index) => (
          <div key={index} className={zigzagClass(index)}>
            <img
              src={event.img}
              alt={event.name}
              className="h-[5rem] w-[5rem]"
            />
          </div>
        ))}
      </div>

      <div className="text-[1.7rem] font-semibold mt-[1.5rem] ml-[2rem]">
        Database :
      </div>
      <div className="ml-[1rem] flex flex-wrap">
        {database.map((event, index) => (
          <div key={index} className={zigzagClass(index)}>
            <img
              src={event.img}
              alt={event.name}
              className="h-[7rem] w-[9rem]"
            />
          </div>
        ))}
      </div>

      <div className="text-[1.7rem] font-semibold mt-[1.5rem] ml-[2rem]">
        Runtime Enviroment :
      </div>
      <div className="ml-[1rem] flex flex-wrap">
        {runtime_enviroment.map((event, index) => (
          <div key={index} className={zigzagClass(index)}>
            <img
              src={event.img}
              alt={event.name}
              className="h-[8rem] w-[9rem]"
            />
          </div>
        ))}
      </div>

      <div className="text-[1.7rem] font-semibold mt-[1.5rem] ml-[2rem]">
        Tools :
      </div>
      <div className="ml-[1rem] pt-[1rem] pb-[3rem] flex flex-wrap">
        {tools.map((event, index) => (
          <div key={index} className={zigzagClass(index)}>
            <img
              src={event.img}
              alt={event.name}
              className="h-[4rem] w-[5rem]"
            />
          </div>
        ))}
      </div>

      {/* Embedded style tag for custom animations */}
      <style>
        {`
          @keyframes floatUpDown {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
          }
          @keyframes floatDownUp {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(15px); }
          }
          .float-up-down {
            animation: floatUpDown 2s ease-in-out infinite;
          }
          .float-down-up {
            animation: floatDownUp 2s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Skills;

// import React from "react";

// const Skills = () => {
//   const programming_language = [
//     {
//       name: "HTML",
//       img: "/HTML.png",
//     },
//     { name: "CSS", img: "/CSS.png" },
//     { name: "JavaScript", img: "/Js.png" },
//     { name: "C++", img: "/CPP.png" },
//   ];
//   const library = [{ name: "React.js", img: "/React.png" }];
//   const framework = [
//     { name: "Express.js", img: "Express.png" },
//     { name: "Tailwind CSS", img: "Tailwind.png" },
//   ];
//   const database = [{ name: "MongoDB", img: "/MongoDB.png" }];
//   const runtime_enviroment = [{ name: "Node.js", img: "/Node.png" }];
//   const tools = [
//     { name: "Git", img: "Git.png" },
//     { name: "Github", img: "/Github.png" },
//     { name: "VS Code", img: "Vs.png" },
//   ];
//   //
//   return (
//     <section
//       className="min-h-screen bg-cover bg-center bg-no-repeat text-white"
//       style={{ backgroundImage: "url('/download (6).jpeg')" }}>
//       <div className="text-[2.3rem] mt-[1rem] ml-[2rem]">My Skills</div>
//       <div className="text-[1.7rem] font-semibold mt-[0.5rem] ml-[2rem]">
//         Programming Language :
//       </div>
//       <div className="mt-[1.7rem] ml-[1rem] flex">
//         {" "}
//         {programming_language.map((event, index) => {
//           return (
//             <div key={index} className="">
//               <img
//                 src={event.img}
//                 alt=""
//                 className="h-[5rem] w-[4rem] mx-[1rem]"
//               />
//             </div>
//           );
//         })}
//       </div>
//       <div className="text-[1.7rem] font-semibold mt-[0.5rem] ml-[2rem]">
//         Library :
//       </div>
//       <div className="mt-[1.7rem] ml-[1rem] flex">
//         {library.map((event, index) => {
//           return (
//             <div key={index} className="">
//               <img
//                 src={event.img}
//                 alt=""
//                 className="h-[5rem] w-[4.9rem] mx-[1rem]"
//               />
//             </div>
//           );
//         })}
//       </div>
//       <div className="text-[1.7rem] font-semibold mt-[0.5rem] ml-[2rem]">
//         Framework :
//       </div>
//       <div className="mt-[1.7rem] ml-[1rem] flex">
//         {framework.map((event, index) => {
//           return (
//             <div key={index} className="">
//               <img
//                 src={event.img}
//                 alt=""
//                 className="h-[5rem] w-[5rem] mx-[1rem]"
//               />
//             </div>
//           );
//         })}
//       </div>
//       <div className="text-[1.7rem] font-semibold mt-[0.5rem] ml-[2rem]">
//         Database :
//       </div>
//       <div className="ml-[1rem] flex">
//         {database.map((event, index) => {
//           return (
//             <div key={index} className="">
//               <img
//                 src={event.img}
//                 alt=""
//                 className="h-[7rem] w-[9rem] mx-[1rem]"
//               />
//             </div>
//           );
//         })}
//       </div>
//       <div className="text-[1.7rem] font-semibold mt-[0.5rem] ml-[2rem]">
//         Runtime Enviroment :
//       </div>
//       <div className="ml-[1rem] flex">
//         {runtime_enviroment.map((event, index) => {
//           return (
//             <div key={index} className="">
//               <img
//                 src={event.img}
//                 alt=""
//                 className="h-[8rem] w-[9rem] mx-[1rem]"
//               />
//             </div>
//           );
//         })}
//       </div>
//       <div className="text-[1.7rem] font-semibold mt-[0.5rem] ml-[2rem]">
//         Tools :
//       </div>
//       <div className="ml-[1rem] flex">
//         {tools.map((event, index) => {
//           return (
//             <div key={index} className="">
//               <img
//                 src={event.img}
//                 alt=""
//                 className="h-[4rem] w-[5rem] mx-[1rem]"
//               />
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default Skills;
