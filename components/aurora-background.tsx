"use client"
import React, { useEffect, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"

export interface AuroraBackgroundProps {
  /** Extra wrapper classes */
  className?: string
  /** Content to render on top of the background */
  children?: React.ReactNode
  /** Number of “star” points */
  starCount?: number
  /** Two CSS-variable backed colors for the radial overlays */
  gradientColors?: [string, string]
  /** Pulse animation duration in seconds */
  pulseDuration?: number
  /** ARIA label for the animated background */
  ariaLabel?: string
}

interface Star {
  x: number
  y: number
  duration: number
  delay: number
  opacity: number
}

const AuroraBackground: React.FC<AuroraBackgroundProps> = ({
  className = "",
  children,
  starCount = 50,
  gradientColors = [
    "var(--aurora-color1, rgba(232, 163, 23, 0.15))",
    "var(--aurora-color2, rgba(244, 185, 66, 0.1))",
  ],
  pulseDuration = 10,
  ariaLabel = "Animated aurora background",
}) => {
  const [colorA, colorB] = gradientColors
  const shouldReduceMotion = useReducedMotion()
  const [stars, setStars] = useState<Star[]>([])
  const [mounted, setMounted] = useState(false)

  // Generate deterministic star data on client mount only
  useEffect(() => {
    setMounted(true)
    const newStars: Star[] = Array.from({ length: starCount }).map((_, i) => {
      // Deterministic pseudo-random based on index for consistent SSR/client
      const seed = (i + 1) * 1234567 % 1000000
      const rand = (offset: number) => {
        const x = Math.sin(seed + offset) * 10000
        return x - Math.floor(x)
      }
      return {
        x: rand(1) * 100,
        y: rand(2) * 100,
        duration: 2 + rand(3) * 3,
        delay: rand(4) * 5,
        opacity: 0.3 + rand(5) * 0.6,
      }
    })
    setStars(newStars)
  }, [starCount])

  // If reduced motion, render static background without animations
  if (shouldReduceMotion || !mounted) {
    return (
      <div
        role="img"
        aria-label={ariaLabel}
        className={`relative flex flex-col w-screen h-screen items-center justify-center bg-black text-slate-50 overflow-hidden ${className}`}
      >
        {/* Static background layers */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          {/* Static radial gradients */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `
                radial-gradient(circle, ${colorA} 0%, transparent 80%),
                radial-gradient(circle, ${colorB} 0%, transparent 80%)
              `,
              backgroundSize: "100% 100%",
            }}
          />
          {/* Static color blobs - no animation */}
          <div className="absolute inset-0 mix-blend-screen">
            <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-yellow-600/20 rounded-full filter blur-3xl" />
            <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-amber-600/20 rounded-full filter blur-3xl" />
            <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 bg-yellow-700/10 rounded-full filter blur-3xl" />
          </div>
          {/* Static stars */}
          {stars.map((star, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-0.5 bg-white/30 rounded-full"
              style={{
                left: `${star.x}vw`,
                top: `${star.y}vh`,
              }}
            />
          ))}
        </div>

        {/* Foreground content */}
        <div className="relative z-10">{children}</div>
      </div>
    )
  }

  return (
    <div
      role="img"
      aria-label={ariaLabel}
      className={`relative flex flex-col w-screen h-screen items-center justify-center bg-black text-slate-50 overflow-hidden ${className}`}
    >
      {/* Background layers (hidden from screen readers) */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Pulsing radial gradients */}
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `
              radial-gradient(circle, ${colorA} 0%, transparent 80%),
              radial-gradient(circle, ${colorB} 0%, transparent 80%)
            `,
            backgroundSize: "100% 100%",
            animation: `pulse ${pulseDuration}s infinite`,
          }}
        />

        {/* Blurred color blobs - using site gold/amber palette */}
        <motion.div
          className="absolute inset-0 mix-blend-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <motion.div
            className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-yellow-600/30 rounded-full filter blur-3xl opacity-40"
            animate={{
              x: [-50, 50, -50],
              y: [-20, 20, -20],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-amber-600/30 rounded-full filter blur-3xl opacity-40"
            animate={{
              x: [50, -50, 50],
              y: [20, -20, 20],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-1/3 left-1/3 w-1/3 h-1/3 bg-yellow-700/20 rounded-full filter blur-3xl opacity-30"
            animate={{
              x: [20, -20, 20],
              y: [-30, 30, -30],
              rotate: [0, 360, 0],
            }}
            transition={{
              duration: 50,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Twinkling stars - using pre-generated deterministic data */}
        {stars.map((star, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white rounded-full"
            initial={{
              x: `${star.x}vw`,
              y: `${star.y}vh`,
              opacity: 0,
            }}
            animate={{
              opacity: [0, star.opacity, 0],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              delay: star.delay,
            }}
          />
        ))}
      </div>

      {/* Foreground content */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}

export default AuroraBackground
