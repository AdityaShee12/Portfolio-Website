import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import Lenis from "@studio-freight/lenis";

import Navbar from "./components/Navbar.jsx";
import LoadingScreen from "./components/LoadingScreen.jsx";
import ParticleBackground from "./components/ParticleBackground.jsx";

// Pages / Sections
import Hero from "./pages/Hero.jsx";
import About from "./components/About.jsx";
import TechStack from "./pages/TechStack.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import Footer from "./components/Footer.jsx";

const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-blue-500 rounded-full pointer-events-none z-[9999] shadow-[0_0_10px_#3b82f6]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          mixBlendMode: "difference"
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-blue-400 pointer-events-none z-[9998] shadow-[0_0_20px_rgba(96,165,250,0.5)] bg-blue-500/10 backdrop-blur-[1px]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
          mixBlendMode: "difference"
        }}
      />
    </>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Global smooth scrolling with Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-[#020617] text-white selection:bg-blue-500/30 font-sans">
      <CustomCursor />
      <ParticleBackground />

      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loading" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow flex flex-col relative z-0">
            <Hero />
            <About />
            <TechStack />
            <Experience />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;