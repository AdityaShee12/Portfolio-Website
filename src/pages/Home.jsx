import React, { useEffect, useRef } from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import Matter from "matter-js";

const Home = () => {
  const sceneRef = useRef(null);
  const engineRef = useRef(null);
  const renderRef = useRef(null);

  useEffect(() => {
    // Setup Matter.js engine and world
    const engine = Matter.Engine.create({
      gravity: { x: 0, y: 0, scale: 0.001 } // Setting gravity.y = 0
    });
    const world = engine.world;
    engineRef.current = engine;

    const render = Matter.Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        wireframes: false,
        background: 'transparent',
      }
    });
    renderRef.current = render;

    // Create floating bodies
    const bodies = [];
    const colors = ['#1e40af', '#2563eb', '#60a5fa', '#3b82f6']; // Blue palette
    
    for (let i = 0; i < 30; i++) {
      const radius = Math.random() * 20 + 10;
      const x = Math.random() * window.innerWidth;
      const y = Math.random() * window.innerHeight;
      const isCircle = Math.random() > 0.5;
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      let body;
      if (isCircle) {
        body = Matter.Bodies.circle(x, y, radius, {
          frictionAir: 0.01,
          render: {
            fillStyle: color,
            opacity: 0.5 + Math.random() * 0.3
          }
        });
      } else {
        body = Matter.Bodies.rectangle(x, y, radius * 2, radius * 2, {
          frictionAir: 0.01,
          render: {
            fillStyle: color,
            opacity: 0.5 + Math.random() * 0.3
          }
        });
      }
      
      // Apply initial random velocity to float around
      Matter.Body.setVelocity(body, {
        x: (Math.random() - 0.5) * 2,
        y: (Math.random() - 0.5) * 2
      });
      
      bodies.push(body);
    }
    
    Matter.World.add(world, bodies);

    // Mouse interaction
    const mouse = Matter.Mouse.create(render.canvas);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false
        }
      }
    });

    Matter.World.add(world, mouseConstraint);
    
    // Add custom interaction to slighty push shapes away from mouse without dragging
    sceneRef.current.addEventListener('mousemove', (e) => {
      const mousePos = { x: e.clientX, y: e.clientY };
      bodies.forEach(body => {
        const dist = Matter.Vector.magnitude(Matter.Vector.sub(body.position, mousePos));
        if (dist < 150) {
          const force = Matter.Vector.normalise(Matter.Vector.sub(body.position, mousePos));
          Matter.Body.applyForce(body, body.position, {
            x: force.x * 0.005, // Slight push
            y: force.y * 0.005
          });
        }
      });
    });

    // Run engine and renderer
    Matter.Runner.run(engine);
    Matter.Render.run(render);

    // Bounding walls to keep objects on screen
    const ground = Matter.Bodies.rectangle(window.innerWidth/2, window.innerHeight + 50, window.innerWidth, 100, { isStatic: true });
    const ceiling = Matter.Bodies.rectangle(window.innerWidth/2, -50, window.innerWidth, 100, { isStatic: true });
    const leftWall = Matter.Bodies.rectangle(-50, window.innerHeight/2, 100, window.innerHeight, { isStatic: true });
    const rightWall = Matter.Bodies.rectangle(window.innerWidth + 50, window.innerHeight/2, 100, window.innerHeight, { isStatic: true });
    Matter.World.add(world, [ground, ceiling, leftWall, rightWall]);

    // Cleanup
    return () => {
      Matter.Render.stop(render);
      Matter.World.clear(world);
      Matter.Engine.clear(engine);
      if (render.canvas) {
        render.canvas.remove();
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center pt-20 overflow-hidden bg-transparent">
      
      {/* Matter.js Canvas Background */}
      <div 
        ref={sceneRef} 
        className="absolute inset-0 z-0 pointer-events-auto"
        style={{ mixBlendMode: 'screen' }} 
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full flex flex-col items-center justify-center min-h-[calc(100vh-5rem)] py-12 text-center pointer-events-none">
        
        {/* Centered Avatar Section */}
        <motion.div
           initial={{ opacity: 0, scale: 0.5, y: -20 }}
           animate={{ opacity: 1, scale: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="relative mb-8"
        >
          <div className="absolute inset-0 rounded-full bg-blue-500 blur-[60px] opacity-40"></div>
          <div className="relative w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full p-1.5 bg-gradient-to-tr from-blue-700 to-blue-300 shadow-[0_0_40px_rgba(37,99,235,0.6)]">
            <img
              src="/Home.jpeg"
              alt="Aditya Shee"
              className="w-full h-full object-cover rounded-full border-4 border-[#020617]"
            />
          </div>
        </motion.div>

        {/* Small Intro Text */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6, delay: 0.2 }}
           className="text-blue-300 font-medium tracking-widest uppercase text-sm md:text-base mb-4 drop-shadow-md"
        >
          Welcome to my digital universe
        </motion.div>

        {/* Main Heading Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-5xl md:text-6xl lg:text-7xl text-white font-extrabold leading-tight mb-4"
        >
          Hi, I'm <span className="text-blue-500">Aditya</span>
        </motion.div>

        {/* Roles/Typewriter */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold mt-2 mb-6 h-[40px] bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-200 to-white"
        >
          <Typewriter
            options={{
              strings: ['MERN Stack Developer', 'Freelancer', 'Digital Marketer', 'Content Creator'],
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 30,
            }}
          />
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-gray-400 text-base md:text-lg lg:text-xl font-light mb-10 tracking-wide max-w-2xl"
        >
          Freelancer | Digital Marketer | Content Creator
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pointer-events-auto"
        >
          <a
            href="/projects"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold py-3.5 px-8 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] cursor-none hover:-translate-y-1"
          >
            View Projects
          </a>
          
          <a
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-white/5 hover:bg-blue-900/40 border border-white/10 hover:border-blue-500/50 backdrop-blur-md text-white font-bold py-3.5 px-8 rounded-full transition-all duration-300 shadow-lg cursor-none hover:-translate-y-1"
          >
            Contact Me
          </a>
          
          <a
            href="/Resume.pdf"
            download
            className="w-full sm:w-auto inline-flex items-center justify-center bg-white hover:bg-gray-100 text-blue-950 font-bold py-3.5 px-8 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.5)] hover:shadow-[0_0_25px_rgba(255,255,255,0.7)] transition-all duration-300 cursor-none hover:-translate-y-1"
          >
            Download Resume
          </a>
        </motion.div>

      </div>
    </div>
  );
};

export default Home;