import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Button } from './ui/button'
import CleanParticles from './CleanParticles'
import LeafIcon from './icons/LeafIcon'
import { useContent } from '../contexts/ContentContext'

const Hero = () => {
  const { content, loading } = useContent()

  const scrollToFeatures = () => {
    const element = document.getElementById('features')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const scrollToProducts = () => {
    const element = document.getElementById('products')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  // Show loading state if content isn't ready
  if (loading || !content) {
    return (
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pastel-green-50 via-white to-pastel-green-100 -z-10"></div>
        <motion.div
          className="relative z-10 container mx-auto px-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-pastel-green-500">
            Loading...
          </h1>
        </motion.div>
      </section>
    )
  }

  const { hero } = content

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Clean Animated Leaf Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pastel-green-50 via-white to-pastel-green-100 -z-10">
        {/* Large decorative leaves */}
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 text-pastel-green-200"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <LeafIcon className="w-full h-full" />
        </motion.div>

        <motion.div
          className="absolute top-20 right-20 w-24 h-24 text-pastel-green-300"
          animate={{
            rotate: [360, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <LeafIcon className="w-full h-full" />
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-20 w-40 h-40 text-pastel-green-100"
          animate={{
            rotate: [0, 180, 360],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <LeafIcon className="w-full h-full" />
        </motion.div>

        <motion.div
          className="absolute bottom-20 right-10 w-28 h-28 text-pastel-green-200"
          animate={{
            rotate: [180, 540],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <LeafIcon className="w-full h-full" />
        </motion.div>

        {/* Floating small leaves */}
        {[...Array(6)].map((_, i) => {
          const leafColors = ['text-pastel-green-200', 'text-pastel-green-300', 'text-pastel-green-100']
          return (
            <motion.div
              key={i}
              className={`absolute w-8 h-8 ${leafColors[i % 3]}`}
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + (i % 4) * 20}%`,
              }}
              animate={{
                y: [0, -50, 0],
                rotate: [0, 360],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            >
              <LeafIcon className="w-full h-full" />
            </motion.div>
          )
        })}

        {/* Subtle wind effect with particles */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(circle at 30% 40%, rgba(168, 213, 186, 0.1) 0%, transparent 50%),
                        radial-gradient(circle at 70% 80%, rgba(168, 213, 186, 0.1) 0%, transparent 50%)`,
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Clean particles overlay */}
        <CleanParticles />
      </div>

      <motion.div
        className="relative z-10 container mx-auto px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 text-pastel-green-500"
          variants={itemVariants}
        >
          {hero.title.line1}<br />
          <span className="bg-gradient-to-r from-pastel-green-400 to-pastel-green-600 bg-clip-text text-transparent">
            {hero.title.line2}
          </span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl mb-8 text-gray-600 max-w-3xl mx-auto"
          variants={itemVariants}
        >
          {hero.subtitle}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={buttonVariants}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="eco" 
              size="xl"
              className="bg-pastel-green-200 hover:bg-pastel-green-300 text-pastel-green-800"
              onClick={scrollToProducts}
            >
              {hero.buttons.primary}
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="eco-outline" 
              size="xl"
              onClick={scrollToFeatures}
            >
              {hero.buttons.secondary}
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.button
          onClick={scrollToFeatures}
          className="text-pastel-green-500 p-2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          whileHover={{ scale: 1.1 }}
        >
          <ChevronDown size={32} />
        </motion.button>
      </motion.div>
    </section>
  )
}

export default Hero
