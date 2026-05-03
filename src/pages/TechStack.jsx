import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Matter from "matter-js";

const TechStack = () => {
  const categories = [
    {
      title: "Programming Language",
      items: [
        { name: "HTML", img: "/HTML.png" },
        { name: "CSS", img: "/CSS.png" },
        { name: "JavaScript", img: "/Js.png" },
        { name: "C++", img: "/CPP.png" },
      ],
    },
    {
      title: "Library",
      items: [{ name: "React.js", img: "/React.png" }],
    },
    {
      title: "Framework",
      items: [
        { name: "Express.js", img: "/Express.png" },
        { name: "Tailwind CSS", img: "/Tailwind.png" },
        { name: "Next.js", img: "/Next.js.png" },
      ],
    },
    {
      title: "Database",
      items: [{ name: "MongoDB", img: "/MongoDB.png" }],
    },
    {
      title: "Runtime Environment",
      items: [{ name: "Node.js", img: "/Node.png" }],
    },
    {
      title: "Tools",
      items: [
        { name: "Git", img: "/Git.png" },
        { name: "Github", img: "/Github.png" },
        { name: "VS Code", img: "/Vs.png" },
      ],
    },
  ];

  const sceneRef = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  useEffect(() => {
    if (!isInView || !sceneRef.current) return;

    const Engine = Matter.Engine,
          Render = Matter.Render,
          Runner = Matter.Runner,
          Bodies = Matter.Bodies,
          Composite = Matter.Composite,
          Mouse = Matter.Mouse,
          MouseConstraint = Matter.MouseConstraint;

    const engine = Engine.create({ gravity: { x: 0, y: 0.5, scale: 0.001 } });
    const world = engine.world;
    
    const width = sceneRef.current.clientWidth;
    const height = 400;

    const render = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width,
        height,
        wireframes: false,
        background: 'transparent'
      }
    });

    const ground = Bodies.rectangle(width / 2, height + 25, width, 50, { isStatic: true, render: { visible: false } });
    const leftWall = Bodies.rectangle(-25, height / 2, 50, height, { isStatic: true, render: { visible: false } });
    const rightWall = Bodies.rectangle(width + 25, height / 2, 50, height, { isStatic: true, render: { visible: false } });
    
    Composite.add(world, [ground, leftWall, rightWall]);

    const allItems = categories.flatMap(c => c.items);
    const bodies = allItems.map((item) => {
      const radius = window.innerWidth < 768 ? 25 : 35;
      const x = Math.random() * (width - 100) + 50;
      const y = -Math.random() * 500 - 50;
      
      return Bodies.circle(x, y, radius, {
        restitution: 0.8,
        friction: 0.1,
        render: {
          sprite: {
            texture: item.img,
            xScale: window.innerWidth < 768 ? 0.35 : 0.5,
            yScale: window.innerWidth < 768 ? 0.35 : 0.5
          }
        }
      });
    });

    Composite.add(world, bodies);

    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: { stiffness: 0.2, render: { visible: false } }
    });
    
    // Fix scroll jumping issue with matter.js mouse
    mouseConstraint.mouse.element.removeEventListener("mousewheel", mouseConstraint.mouse.mousewheel);
    mouseConstraint.mouse.element.removeEventListener("DOMMouseScroll", mouseConstraint.mouse.mousewheel);
    
    Composite.add(world, mouseConstraint);

    Render.run(render);
    const runner = Runner.create();
    Runner.run(runner, engine);

    return () => {
      Render.stop(render);
      Runner.stop(runner);
      Composite.clear(world);
      Engine.clear(engine);
      if(render.canvas) render.canvas.remove();
    };
  }, [isInView]);

  return (
    <section id="techstack" className="relative min-h-screen pt-32 pb-24 px-6 lg:px-16 pointer-events-auto">
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center" ref={containerRef}>
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-heading font-bold text-white mb-4">
            Digital <span className="text-gradient-aurora">Arsenal</span>
          </h2>
          <p className="text-gray-400 font-body text-lg max-w-2xl mx-auto">The tools and technologies I use to bring ideas to life.</p>
        </motion.div>

        {/* Matter JS Physics Container */}
        <motion.div 
          className="w-full h-[400px] glass-panel rounded-3xl overflow-hidden relative cursor-grab active:cursor-grabbing mb-16 border-t border-aurora-teal/30 shadow-[0_0_40px_rgba(0,245,212,0.1)]"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-transparent to-aurora-purple/5"></div>
          <div ref={sceneRef} className="w-full h-full relative z-10"></div>
          <div className="absolute bottom-6 left-0 w-full text-center text-gray-400 font-syne text-sm md:text-base pointer-events-none z-20 uppercase tracking-[0.3em] opacity-50">
            Interact with the ecosystem
          </div>
        </motion.div>
        
        {/* Bento Grid for Tech Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="glass-panel p-6 rounded-3xl flex flex-col group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-aurora-teal/10 blur-[50px] rounded-full group-hover:bg-aurora-purple/20 transition-colors duration-500"></div>
              
              <h3 className="text-xl font-syne font-semibold text-white mb-6 relative z-10">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-4 relative z-10">
                {category.items.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center gap-2 px-4 py-2 bg-obsidian/50 rounded-full border border-white/5 hover:border-aurora-teal/50 transition-colors"
                  >
                    <img
                      src={skill.img}
                      alt={skill.name}
                      className="w-5 h-5 object-contain"
                      onError={(e) => { e.target.src = "/Vs.png"; e.target.style.display = "none" }}
                    />
                    <span className="text-sm font-body text-gray-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechStack;
