import React from 'react'
import { motion } from 'framer-motion'
import { Leaf, Recycle, Heart } from 'lucide-react'
import { Card, CardContent } from './ui/card'
import { useContent } from '../contexts/ContentContext'

const Features = () => {
  const { content, loading } = useContent()

  // Icon mapping
  const iconMap = {
    leaf: Leaf,
    recycle: Recycle,
    heart: Heart,
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const cardVariants = {
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

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 15,
      },
    },
  }

  // Show loading state if content isn't ready
  if (loading || !content) {
    return (
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl font-bold text-center mb-16 text-pastel-green-500"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            Loading Features...
          </motion.h2>
        </div>
      </section>
    )
  }

  const { features } = content

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center mb-16 text-pastel-green-500"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {features.section_title}
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {features.items.map((feature, index) => {
            const IconComponent = iconMap[feature.icon] || Leaf
            return (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                whileHover={{ 
                  y: -10,
                  transition: { type: 'spring', stiffness: 300 }
                }}
              >
                <Card className="feature-card bg-pastel-green-50 p-8 rounded-2xl shadow-lg border-none h-full">
                  <CardContent className="p-0 text-center">
                    <motion.div
                      className="w-16 h-16 bg-pastel-green-200 rounded-full flex items-center justify-center mb-6 mx-auto"
                      variants={iconVariants}
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 360,
                        transition: { duration: 0.6 }
                      }}
                    >
                      <IconComponent className="text-pastel-green-800 w-8 h-8" />
                    </motion.div>
                    
                    <motion.h3
                      className="text-2xl font-semibold mb-4 text-pastel-green-500"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                    >
                      {feature.title}
                    </motion.h3>
                    
                    <motion.p
                      className="text-gray-600"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.5, duration: 0.6 }}
                    >
                      {feature.description}
                    </motion.p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Features
