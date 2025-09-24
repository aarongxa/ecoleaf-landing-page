import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ImageGallery = ({ images, autoRotateInterval = 4000, className = "" }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-rotate images
  useEffect(() => {
    if (images.length <= 1) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, autoRotateInterval)

    return () => clearInterval(interval)
  }, [images.length, autoRotateInterval])

  // Animation variants for smooth fade transitions
  const imageVariants = {
    enter: {
      opacity: 0,
      scale: 1.05,
    },
    center: {
      opacity: 1,
      scale: 1,
    },
    exit: {
      opacity: 0,
      scale: 0.95,
    },
  }

  if (!images || images.length === 0) {
    return (
      <div className={`bg-gray-200 rounded-2xl shadow-lg ${className}`}>
        <div className="flex items-center justify-center h-full text-gray-500">
          No images available
        </div>
      </div>
    )
  }

  return (
    <div className={`relative overflow-hidden rounded-2xl shadow-lg ${className}`}>
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="w-full h-full object-cover"
          variants={imageVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            duration: 0.8,
            ease: "easeInOut"
          }}
          loading="lazy"
        />
      </AnimatePresence>

      {/* Image indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-white shadow-lg'
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default ImageGallery
