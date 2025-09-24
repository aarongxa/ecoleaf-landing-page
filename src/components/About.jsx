import React from 'react'
import { motion } from 'framer-motion'
import { Button } from './ui/button'
import ImageGallery from './ImageGallery'
import { useContent } from '../contexts/ContentContext'

const About = () => {
  const { content, loading } = useContent()
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  // Show loading state if content isn't ready
  if (loading || !content) {
    return (
      <section id="about" className="py-20 bg-pastel-green-25">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-200 rounded-2xl shadow-lg w-full h-64 animate-pulse"></div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-pastel-green-500">Loading...</h2>
            </div>
          </div>
        </div>
      </section>
    )
  }

  const { about } = content

  return (
    <section id="about" className="py-20 bg-pastel-green-25">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Gallery */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <ImageGallery
              images={about.images}
              autoRotateInterval={5000}
              className="w-full h-80 md:h-96"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.h2
              className="text-4xl font-bold mb-6 text-pastel-green-500"
              variants={childVariants}
            >
              {about.title}
            </motion.h2>
            
            {about.paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                className="text-lg text-gray-600 mb-6 leading-relaxed"
                variants={childVariants}
              >
                {paragraph}
              </motion.p>
            ))}
            
            <motion.div variants={childVariants}>
  <motion.div
    whileHover={{ scale: 1.01 }}
    whileTap={{ scale: 0.95 }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
  >
    <Button
      variant="eco"
      size="lg"
      className="bg-pastel-green-200 hover:bg-pastel-green-300 text-pastel-green-800 font-semibold rounded-full"
    >
      {about.cta_button}
    </Button>
  </motion.div>
</motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
