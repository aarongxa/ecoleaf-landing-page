import React from 'react'
import { motion } from 'framer-motion'

// Sparkle/Clean particle component
const Sparkle = ({ className, delay = 0 }) => (
  <motion.div
    className={`absolute w-1 h-1 bg-white rounded-full ${className}`}
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0, 1, 0],
      scale: [0, 1, 0],
      y: [0, -20, -40],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      delay,
      ease: "easeOut"
    }}
  />
)

// Bubble component for clean feeling
const Bubble = ({ className, delay = 0, size = "w-2 h-2" }) => (
  <motion.div
    className={`absolute ${size} bg-white/20 rounded-full backdrop-blur-sm ${className}`}
    initial={{ opacity: 0, scale: 0, y: 0 }}
    animate={{
      opacity: [0, 0.6, 0],
      scale: [0, 1, 0.8],
      y: [0, -100, -200],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      delay,
      ease: "easeOut"
    }}
  />
)

const CleanParticles = () => {
  // Generate positions once to avoid re-rendering
  const sparklePositions = [...Array(15)].map(() => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
  }))
  
  const bubblePositions = [...Array(8)].map(() => ({
    left: `${Math.random() * 100}%`,
  }))

  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Floating sparkles for cleanliness */}
      {sparklePositions.map((position, i) => (
        <div
          key={`sparkle-${i}`}
          className="absolute"
          style={position}
        >
          <Sparkle delay={i * 0.5} />
        </div>
      ))}
      
      {/* Floating bubbles */}
      {bubblePositions.map((position, i) => (
        <div
          key={`bubble-${i}`}
          className="absolute bottom-0"
          style={position}
        >
          <Bubble
            delay={i * 0.8}
            size={i % 2 === 0 ? "w-3 h-3" : "w-2 h-2"}
          />
        </div>
      ))}
      
      {/* Gentle breeze lines */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`breeze-${i}`}
          className="absolute w-8 h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          style={{
            left: `${i * 30 + 10}%`,
            top: `${i * 25 + 20}%`,
          }}
          animate={{
            x: [0, 200, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: i * 2,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  )
}

export default CleanParticles
