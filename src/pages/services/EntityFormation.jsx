import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { InteractiveHoverButton } from '../../components/ui/interactive-hover-button'
import { scrollToElement } from '../../hooks/useLenis'
import { config } from '../../config'
import { useTranslation } from '../../hooks/useTranslation'

const EntityFormation = () => {
  const { t } = useTranslation();
  const content = t.servicesContent.entityFormation;

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=600&fit=crop"
            alt={content.title}
            className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
          />
        </motion.div>

        <motion.h1
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {content.title}
        </motion.h1>

        <motion.div
          className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {content.content.map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph.replace('{{businessName}}', config.BUSINESS_NAME)}
            </p>
          ))}
        </motion.div>

        <motion.div
          className="mt-8 flex gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              scrollToElement('#contact', { offset: -100 })
            }}
            className="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors"
          >
            {t.nav.bookNow}
          </a>
          <Link
            to="/business-law"
            className="inline-block bg-gray-200 text-gray-800 px-8 py-3 rounded-full font-semibold hover:bg-gray-300 transition-colors"
          >
            ← {content.backLink}
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default EntityFormation
