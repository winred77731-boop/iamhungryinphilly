"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useReducedMotion } from "framer-motion";

interface BlurredSectionBgProps {
  imageUrl: string;
  blur?: number;
  opacity?: number;
  overlayClass?: string;
}

export function BlurredSectionBg({
  imageUrl,
  blur = 10,
  opacity = 50,
  overlayClass = "bg-base-dark/40",
}: BlurredSectionBgProps) {
  const [mounted, setMounted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const shouldReduceMotion = useReducedMotion();

  // Halved spring values — softer, less motion
  const springX = useSpring(0, { stiffness: 20, damping: 25 });
  const springY = useSpring(0, { stiffness: 20, damping: 25 });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || shouldReduceMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      const normalizedX = (e.clientX / window.innerWidth - 0.5) * 2;
      const normalizedY = (e.clientY / window.innerHeight - 0.5) * 2;
      // Halved move amount: 20px instead of 40px
      const moveAmount = 20;
      springX.set(normalizedX * -moveAmount);
      springY.set(normalizedY * -moveAmount);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mounted, springX, springY, shouldReduceMotion]);

  if (!mounted) return null;

  // If reduced motion, render static background without spring animation
  if (shouldReduceMotion) {
    return (
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-[-5%] w-[110%] h-[110%]">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('${imageUrl}')`,
              filter: `blur(${blur}px) saturate(1.2) brightness(0.8)`,
              opacity: opacity / 100,
            }}
          />
          {/* Dark gradient overlay using site color scheme */}
          <div className={`absolute inset-0 ${overlayClass}`} />
          <div className="absolute inset-0 bg-gradient-to-b from-base-dark/50 via-base-dark/30 to-base-dark/50" />
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      <motion.div
        style={{ x: springX, y: springY }}
        className="absolute inset-[-5%] w-[110%] h-[110%]"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${imageUrl}')`,
            filter: `blur(${blur}px) saturate(1.2) brightness(0.8)`,
            opacity: opacity / 100,
          }}
        />
        {/* Dark gradient overlay using site color scheme */}
        <div className={`absolute inset-0 ${overlayClass}`} />
        <div className="absolute inset-0 bg-gradient-to-b from-base-dark/50 via-base-dark/30 to-base-dark/50" />
      </motion.div>
    </div>
  );
}