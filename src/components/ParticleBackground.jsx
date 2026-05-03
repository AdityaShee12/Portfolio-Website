import React, { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    let particles = [];
    const particleCount = 150; // Increased count for better trailing

    let mouse = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      vx: 0,
      vy: 0,
      isMoving: false
    };

    let prevMouse = { x: mouse.x, y: mouse.y };
    let mouseTimeout;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
      mouse.isMoving = true;

      // Detect when mouse stops moving
      clearTimeout(mouseTimeout);
      mouseTimeout = setTimeout(() => {
        mouse.isMoving = false;
      }, 100); // 100ms without movement is considered stopped
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    
    handleResize();

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.size = Math.random() * 2 + 0.5; // Tiny radius particles
        this.baseVelocity = Math.random() * 0.05 + 0.02; // Trailing speed
        this.opacity = Math.random() * 0.6 + 0.2;
        
        // Random properties for hovering/orbiting
        this.orbitRadius = Math.random() * 150 + 50; 
        this.orbitSpeed = (Math.random() - 0.5) * 0.05;
        this.orbitAngle = Math.random() * Math.PI * 2;
        this.noiseOffsetX = Math.random() * 1000;
        this.noiseOffsetY = Math.random() * 1000;
      }

      draw() {
        ctx.fillStyle = `rgba(0, 245, 212, ${this.opacity})`; // aurora-teal
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }

      update() {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (mouse.isMoving) {
          // Trailing state: Attract to cursor
          let forceX = dx / distance;
          let forceY = dy / distance;
          
          // Easing towards the cursor based on distance
          this.vx += forceX * this.baseVelocity * 0.8;
          this.vy += forceY * this.baseVelocity * 0.8;

          // Add heavy friction for smooth trailing ribbon effect
          this.vx *= 0.92;
          this.vy *= 0.92;
          
          this.x += this.vx;
          this.y += this.vy;
          
          // Reset orbit angle relative to where it arrives at cursor
          if (distance > 10) {
            this.orbitAngle = Math.atan2(-dy, -dx); 
          }
        } else {
          // Anti-gravity floating/orbiting state
          
          // Update orbital angle
          this.orbitAngle += this.orbitSpeed;
          
          // Target position is around the cursor
          let targetX = mouse.x + Math.cos(this.orbitAngle) * this.orbitRadius;
          let targetY = mouse.y + Math.sin(this.orbitAngle) * this.orbitRadius;

          // Add gentle pseudo-random motion (anti-gravity drift)
          this.noiseOffsetX += 0.01;
          this.noiseOffsetY += 0.01;
          targetX += Math.sin(this.noiseOffsetX) * 30;
          targetY += Math.cos(this.noiseOffsetY) * 30;

          // Gently drift towards the target
          let tx = targetX - this.x;
          let ty = targetY - this.y;
          
          this.vx += tx * 0.001; // extremely weak pull for slow float
          this.vy += ty * 0.001;
          
          // Lower friction in float mode to preserve some buoyancy 
          this.vx *= 0.95;
          this.vy *= 0.95;

          this.x += this.vx;
          this.y += this.vy;
        }

        // Keep inside bounds roughly (if mouse is offscreen and they float away)
        if (this.x < -100) this.x = canvas.width + 100;
        if (this.x > canvas.width + 100) this.x = -100;
        if (this.y < -100) this.y = canvas.height + 100;
        if (this.y > canvas.height + 100) this.y = -100;
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      // Clear with slight opacity to create motion trails
      ctx.fillStyle = 'rgba(5, 5, 5, 0.3)'; // Dark background matching obsidian
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].draw();
        particles[i].update();
      }
      requestAnimationFrame(animate);
    };

    init();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(mouseTimeout);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 z-0 pointer-events-none"
      // Remove mix-blend-mode screen to allow standard alpha composition since we do trail fills
    />
  );
};

export default ParticleBackground;
