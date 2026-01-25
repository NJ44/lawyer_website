import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { scrollToElement } from '../hooks/useLenis'
import { config } from '../config'
import { useTranslation } from '../hooks/useTranslation'

const BusinessLaw = () => {
  const { t } = useTranslation()

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
            alt="Business Law"
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
          Business Law
        </motion.h1>

        <motion.div
          className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="mb-4">
            At {config.BUSINESS_NAME}, we understand that navigating the complex world of business law requires expert guidance and strategic counsel. Our comprehensive business law services are designed to provide your company with the highest quality legal representation in a professional, results-driven environment. Whether you're starting a new business, navigating complex contracts, addressing corporate compliance issues, or facing business disputes, our experienced attorneys are committed to delivering strategic solutions that protect your interests and support your growth.
          </p>

          <p className="mb-4">
            Our business law practice encompasses a wide range of services aimed at helping businesses of all sizes succeed while minimizing legal risk. We understand that every business faces unique challenges, which is why we emphasize personalized service and proactive legal strategies as the cornerstone of our practice. During your initial consultation, our skilled attorneys will thoroughly assess your business needs, identify potential legal issues, and develop a comprehensive strategy to protect your interests and support your business objectives.
          </p>

          <p className="mb-4">
            Entity formation is one of the most critical decisions for any new business, and choosing the right business structure can have significant implications for liability, taxation, and operational flexibility. Our attorneys guide clients through the process of forming corporations, limited liability companies (LLCs), partnerships, and other business entities, ensuring proper documentation and compliance with state and federal regulations. We help you understand the advantages and disadvantages of each structure and select the one that best fits your business goals and circumstances.
          </p>

          <p className="mb-4">
            Contract negotiation and drafting are essential components of successful business operations. Our attorneys have extensive experience drafting and reviewing a wide variety of business contracts, including employment agreements, vendor contracts, service agreements, non-disclosure agreements, licensing agreements, and more. We work to ensure that contracts protect your interests, clearly define rights and obligations, and minimize potential disputes. When disputes arise, we provide aggressive representation to enforce your rights and protect your business.
          </p>

          <p className="mb-4">
            Employment law is another critical area where businesses need expert guidance. We assist clients with employment contracts, employee handbooks, workplace policies, discrimination and harassment issues, wage and hour compliance, and termination matters. Our goal is to help you maintain a compliant workplace while protecting your business from potential employment-related claims. We also provide training and guidance to help prevent employment disputes before they arise.
          </p>

          <p className="mb-6">
            We understand that legal issues can be complex and stressful for business owners, which is why we've created a client-centered approach that emphasizes clear communication, strategic thinking, and practical solutions. Our team takes the time to understand your business, explain all legal options clearly, and ensure you feel confident in your decisions. We're committed to providing exceptional legal service that helps your business thrive while minimizing legal risk. Contact us today to schedule a consultation and discover how our business law services can support your company's success.
          </p>
        </motion.div>

        <div className="mt-8">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              scrollToElement('#contact', { offset: -100 })
            }}
            className="inline-block bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors"
          >
            Schedule a Consultation
          </a>
        </div>

        {/* Services Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our Business Law Services
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Service 1 */}
            <motion.div
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <img
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=300&fit=crop"
                alt="Entity Formation"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Entity Formation</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Choosing the right business structure is one of the most important decisions you'll make as a business owner. Our attorneys guide clients through the process of forming corporations, limited liability companies (LLCs), partnerships, and other business entities, ensuring proper documentation and compliance with state and federal regulations. We help you understand the advantages and disadvantages of each structure, including liability protection, tax implications, and operational flexibility. Our comprehensive entity formation services include preparation of all necessary documents, filing with appropriate state agencies, obtaining required licenses and permits, and establishing proper corporate governance structures. We work closely with you to select the entity type that best fits your business goals, whether you're a sole proprietor looking to limit personal liability or a growing company planning for future expansion. Proper entity formation from the start can save you significant time and money down the road and protect your personal assets from business liabilities.
                </p>
                <Link
                  to="/business-law/entity-formation"
                  className="inline-block bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
                >
                  {t.general.learnMore}
                </Link>
              </div>
            </motion.div>

            {/* Service 2 */}
            <motion.div
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <img
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=300&fit=crop"
                alt="Contract Services"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Contract Services</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Well-drafted contracts are the foundation of successful business relationships. Our attorneys have extensive experience drafting and reviewing a wide variety of business contracts, including employment agreements, vendor contracts, service agreements, non-disclosure agreements, licensing agreements, purchase agreements, and partnership agreements. We work to ensure that contracts protect your interests, clearly define rights and obligations, minimize potential disputes, and comply with applicable laws and regulations. Our contract services include initial drafting, review and revision of existing contracts, negotiation support, and contract dispute resolution. We understand that every contract is unique and requires careful consideration of your specific business needs and industry requirements. When disputes arise, we provide aggressive representation to enforce your rights and protect your business interests. Our goal is to help you enter into contracts with confidence, knowing that your interests are protected and your obligations are clearly defined.
                </p>
                <Link
                  to="/business-law/contract-services"
                  className="inline-block bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
                >
                  {t.general.learnMore}
                </Link>
              </div>
            </motion.div>

            {/* Service 3 */}
            <motion.div
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <img
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=300&fit=crop"
                alt="Employment Law"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Employment Law</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Employment law compliance is essential for protecting your business from costly disputes and legal claims. Our employment law services include assistance with employment contracts, employee handbooks, workplace policies, discrimination and harassment prevention, wage and hour compliance, family and medical leave matters, and termination procedures. We help you maintain a compliant workplace while protecting your business from potential employment-related claims. Our services include drafting employment agreements that protect your business interests, developing comprehensive employee handbooks that clearly communicate workplace policies, providing guidance on hiring and termination procedures, and representing your business in employment disputes. We also provide training and guidance to help prevent employment disputes before they arise, including sexual harassment prevention training and compliance audits. When employment disputes do occur, we provide aggressive representation to defend your business and minimize liability. Our goal is to help you create a positive, compliant workplace that supports your business objectives while minimizing legal risk.
                </p>
                <Link
                  to="/business-law/employment-law"
                  className="inline-block bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
                >
                  {t.general.learnMore}
                </Link>
              </div>
            </motion.div>

            {/* Service 4 */}
            <motion.div
              className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=300&fit=crop"
                alt="Intellectual Property"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Protecting your intellectual property is crucial for maintaining your competitive advantage and business value. Our intellectual property services include trademark registration and protection, copyright registration, trade secret protection, licensing agreements, and intellectual property dispute resolution. We help you identify and protect your valuable intellectual property assets, including business names, logos, product designs, proprietary information, and creative works. Our services include conducting trademark searches to ensure your marks are available, filing trademark and copyright applications with the appropriate government agencies, drafting licensing agreements that protect your rights while generating revenue, and enforcing your intellectual property rights against infringement. We also provide guidance on avoiding infringement of others' intellectual property rights, which is essential for protecting your business from costly disputes. Whether you're a startup with a new product or an established business looking to expand your intellectual property portfolio, we can help you develop a comprehensive strategy to protect and leverage your intellectual property assets.
                </p>
                <Link
                  to="/business-law/intellectual-property"
                  className="inline-block bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
                >
                  {t.general.learnMore}
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default BusinessLaw
