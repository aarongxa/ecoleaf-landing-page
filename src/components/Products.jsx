import React from 'react'
import { motion } from 'framer-motion'
import { Star, ShoppingCart } from 'lucide-react'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'
import { useContent } from '../contexts/ContentContext'

const Products = () => {
  const { content, loading } = useContent()

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

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  // Show loading state if content isn't ready
  if (loading || !content) {
    return (
      <section id="products" className="py-20 bg-pastel-green-25">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl font-bold text-center mb-16 text-pastel-green-500"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            Loading Products...
          </motion.h2>
        </div>
      </section>
    )
  }

  const { products } = content

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-pastel-green-25 to-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-4xl font-bold mb-4 text-pastel-green-500">
            {products.section_title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {products.subtitle}
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {products.items.map((product, index) => (
            <motion.div
              key={product.name}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { type: 'spring', stiffness: 300 }
              }}
            >
              <Card className="h-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border-none overflow-hidden">
                <div className="relative">
                  {product.bestseller && (
                    <motion.div
                      className="absolute top-3 right-3 z-10 bg-pastel-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: index * 0.1 + 0.5, type: 'spring', stiffness: 200 }}
                    >
                      <Star size={12} fill="currentColor" />
                      Bestseller
                    </motion.div>
                  )}
                  
                  <motion.div
                    className="relative overflow-hidden"
                    variants={imageVariants}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                </div>

                <CardContent className="p-6">
                  <motion.h3
                    className="text-xl font-semibold mb-2 text-pastel-green-700"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                  >
                    {product.name}
                  </motion.h3>
                  
                  <motion.p
                    className="text-gray-600 mb-4 text-sm leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.5, duration: 0.6 }}
                  >
                    {product.description}
                  </motion.p>
                  
                  <motion.div
                    className="flex items-center justify-between"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.7, duration: 0.6 }}
                  >
                    <span className="text-2xl font-bold text-pastel-green-600">
                      {product.price}
                    </span>
                    
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        variant="eco"
                        size="sm"
                        className="bg-pastel-green-500 hover:bg-pastel-green-600 text-white"
                      >
                        <ShoppingCart size={16} className="mr-2" />
                        Add to Cart
                      </Button>
                    </motion.div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="eco-outline"
              size="lg"
              className="border-2 border-pastel-green-500 text-pastel-green-600 hover:bg-pastel-green-500 hover:text-white font-semibold"
            >
              {products.cta_button}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Products
