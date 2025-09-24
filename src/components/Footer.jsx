import React from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faXTwitter, faTiktok } from '@fortawesome/free-brands-svg-icons'
import { useContent } from '../contexts/ContentContext'

const Footer = () => {
  const { content, loading } = useContent()

  // Icon mapping for social media
  const socialIconMap = {
    facebook: faFacebook,
    instagram: faInstagram,
    twitter: faXTwitter,
    x: faXTwitter,
    tiktok: faTiktok,
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
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

  const socialVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
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
      <footer className="bg-pastel-green-200 text-pastel-green-800 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Loading...</h3>
            </div>
          </div>
        </div>
      </footer>
    )
  }

  const { footer, brand } = content

  return (
    <footer className="bg-pastel-green-200 text-pastel-green-800 py-12">
      <div className="container mx-auto px-6">
        <motion.div
          className="grid md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants}>
            <motion.h3
              className="text-2xl font-bold mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {brand.name}
            </motion.h3>
            <p className="text-pastel-green-600">
              {brand.tagline}
            </p>
          </motion.div>

          {/* Footer Sections */}
          {footer.sections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              variants={itemVariants}
              className="space-y-4"
            >
              <h4 className="font-semibold mb-4 text-pastel-green-700">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: sectionIndex * 0.1 + linkIndex * 0.05,
                      duration: 0.4,
                    }}
                  >
                    <motion.a
                      href={link.href}
                      className="text-pastel-green-600 hover:text-pastel-green-800 transition-colors cursor-pointer"
                      whileHover={{ x: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      {link.name}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Social Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4 text-pastel-green-700">Connect</h4>
            <div className="flex space-x-4">
              {footer.social.map((social, index) => {
                const iconComponent = socialIconMap[social.icon] || faFacebook
                return (
                  <motion.a
                    key={social.platform}
                    href={social.href}
                    className="text-pastel-green-600 hover:text-pastel-green-800 transition-colors"
                    variants={socialVariants}
                    whileHover={{
                      scale: 1.1,
                      y: -2,
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{
                      type: 'spring',
                      stiffness: 400,
                      damping: 15,
                    }}
                    aria-label={social.platform}
                  >
                    <FontAwesomeIcon icon={iconComponent} size="lg" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="border-t border-pastel-green-300 mt-8 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <p className="text-pastel-green-600">
            {footer.copyright}
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
