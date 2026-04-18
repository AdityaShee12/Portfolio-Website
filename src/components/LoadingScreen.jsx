import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const duration = 1500;
    const intervalTime = 30;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      setProgress(Math.min((currentStep / steps) * 100, 100));

      if (currentStep >= steps) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 300); // give a little time before triggering exit
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#020617]"
    >
      <div className="relative w-64 h-2 bg-blue-950 rounded-full overflow-hidden mb-6 shadow-[0_0_15px_rgba(37,99,235,0.4)]">
        <motion.div
          className="absolute top-0 left-0 h-full bg-blue-500 shadow-[0_0_10px_#60a5fa]"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: "linear", duration: 0.05 }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-blue-300 font-mono tracking-widest text-sm"
      >
        INITIALIZING... {Math.round(progress)}%
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen;
