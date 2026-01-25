import React from 'react'
import { Link } from 'react-router-dom'
import { scrollToElement } from '../../hooks/useLenis'
import { config } from '../../config'
import { useTranslation } from '../../hooks/useTranslation'

const EmploymentLaw = () => {
  const { t } = useTranslation();
  const content = t.servicesContent.employmentLaw;

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <img
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=600&fit=crop"
            alt={content.title}
            className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          {content.title}
        </h1>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
          {content.content.map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph.replace('{{businessName}}', config.BUSINESS_NAME)}
            </p>
          ))}
        </div>

        <div className="mt-8 flex gap-4">
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
        </div>
      </div>
    </div>
  )
}

export default EmploymentLaw

