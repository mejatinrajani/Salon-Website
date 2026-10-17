import React, { useEffect, useRef, useState } from 'react';
import AboutSection from './About';
import LandingAboutSection from './LandingAboutSection';

const textOptions = [
  ["GLOW", "FLOW", "YOGA"],
  ["REST", "HEAL", "GROW"],
  ["DEEP", "CALM", "SOUL"],
  ["PURE", "ZEN", "LIFE"]
];

const animationDirections = [
  'translate-y-6', 
  'translate-x-6', 
  '-translate-y-6', 
  '-translate-x-6'
];

const Hero = () => {
  const orb1Ref = useRef(null);
  const orb2Ref = useRef(null);
  
  const mousePos = useRef({ x: 0, y: 0 });
  const orb1Pos = useRef({ x: 0, y: 0 });
  const orb2Pos = useRef({ x: 0, y: 0 });

  const [textIndex, setTextIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const cycleInterval = setInterval(() => {
      setIsFading(true); 
      
      setTimeout(() => {
        setTextIndex((prev) => (prev + 1) % textOptions.length); 
        setIsFading(false); 
      }, 700); 
      
    }, 3000); 

    return () => clearInterval(cycleInterval);
  }, []);

  useEffect(() => {
    mousePos.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    orb1Pos.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    orb2Pos.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    const updateMousePosition = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', updateMousePosition);

    let animationFrameId;

    const render = () => {
      // Position tracking
      orb1Pos.current.x += (mousePos.current.x - orb1Pos.current.x) * 0.15;
      orb1Pos.current.y += (mousePos.current.y - orb1Pos.current.y) * 0.15;

      const mirroredX = window.innerWidth - mousePos.current.x;
      const mirroredY = window.innerHeight - mousePos.current.y;
      
      const time = Date.now() / 1000;
      const offsetX = Math.sin(time * 1.5) * 80;
      const offsetY = Math.cos(time * 2.0) * 80; 

      orb2Pos.current.x += ((mirroredX + offsetX) - orb2Pos.current.x) * 0.08;
      orb2Pos.current.y += ((mirroredY + offsetY) - orb2Pos.current.y) * 0.08;

      // --- NEW: PULSATING SCALE LOGIC ---
      // Math.sin() goes from -1 to 1. 
      // Base scale 0.45 + (1 * 0.15) = 0.60 (60%)
      // Base scale 0.45 + (-1 * 0.15) = 0.30 (30%)
      const scale1 = 0.45 + Math.sin(time * 2.5) * 0.15; // Orb 1 breathing speed
      const scale2 = 0.45 + Math.cos(time * 2.0) * 0.15; // Orb 2 breathing speed (slightly offset)

      // Apply positions AND dynamic scales to the DOM elements
      if (orb1Ref.current) {
        orb1Ref.current.style.transform = `translate(${orb1Pos.current.x}px, ${orb1Pos.current.y}px) translate(-50%, -50%) scale(${scale1})`;
      }
      if (orb2Ref.current) {
        orb2Ref.current.style.transform = `translate(${orb2Pos.current.x}px, ${orb2Pos.current.y}px) translate(-50%, -50%) scale(${scale2})`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const currentDirection = animationDirections[textIndex % animationDirections.length];
  
  const fadeClass = `transition-all duration-700 ease-in-out ${
    isFading 
      ? `opacity-0 blur-sm ${currentDirection}` 
      : 'opacity-100 blur-0 translate-x-0 translate-y-0'
  }`;

  return (
    <>
      <style>{`
        @keyframes blob-morph {
          0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
          100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
        }
        .organic-blob {
          animation: blob-morph 8s ease-in-out infinite;
        }
        .organic-blob-reverse {
          animation: blob-morph 10s ease-in-out infinite reverse;
        }
      `}</style>

      <div className="relative w-screen h-screen bg-[#ece8e1] overflow-hidden font-serif flex flex-col text-[#111]">
        
        {/* Orb 1 (Increased base size slightly to account for the scale reduction) */}
        <div 
          ref={orb1Ref}
          className="fixed top-0 left-0 w-[1200px] h-[1200px] organic-blob pointer-events-none z-0"
          style={{
            background: 'radial-gradient(circle, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0) 70%)'
          }}
        />

        {/* Orb 2 */}
        <div 
          ref={orb2Ref}
          className="fixed top-0 left-0 w-[1100px] h-[1100px] organic-blob-reverse pointer-events-none z-0"
          style={{
            background: 'radial-gradient(circle, rgba(204, 187, 153, 1.9) 0%, rgba(204, 187, 153, 0) 70%)'
          }}
        />

        {/* Navigation */}
        <nav className="relative z-10 flex justify-between items-center p-8">
          <div className="w-16 h-16 rounded-full bg-[#d5cec4] flex items-center justify-center text-3xl">
            ✿
          </div>
          <div className="cursor-pointer space-y-2">
            <div className="w-8 h-[2px] bg-[#111]"></div>
            <div className="w-8 h-[2px] bg-[#111]"></div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="relative z-10 flex-grow flex flex-col items-center justify-center pb-20">
          <h1 className="flex flex-col text-7xl md:text-[9rem] lg:text-[11rem] font-normal leading-[0.9] tracking-wider mb- w-full max-w-6xl">
            
            <span className={`self-start ml-[15%] ${fadeClass}`}>
              {textOptions[textIndex][0]}
            </span>
            
            <span className={`self-center ml-[10%] ${fadeClass}`} style={{ transitionDelay: '100ms' }}>
              {textOptions[textIndex][1]}
            </span>
            
            <span className="self-end mr-[15%] flex items-baseline">
              <span className={fadeClass} style={{ transitionDelay: '200ms' }}>
                {textOptions[textIndex][2]}
              </span>
              
              <span className="relative group text-2xl md:text-4xl ml-8 font-sans tracking-normal pb-1 cursor-pointer">
                by Arohi Singh
                <span className="absolute left-0 bottom-0 w-full h-[1px] bg-[#111] origin-right transition-transform duration-300 ease-out group-hover:scale-x-0"></span>
              </span>
              
            </span>
          </h1>
          
          <button className="px-14 py-4 border border-gray-400 rounded-full bg-transparent text-[#111] text-5xl font-sans hover:bg-black hover:text-[#CCBB99] transition-colors duration-300 cursor-pointer">
            Yoga by Arohi
          </button>
        </main>
      </div>
    </>
  );
};

export default Hero;