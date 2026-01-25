import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { scrollToElement } from '../hooks/useLenis'
import { config } from '../config'
import { useTranslation } from '../hooks/useTranslation'

const CosmeticWhitening = () => {
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
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&h=600&fit=crop"
            alt="Personal Injury"
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
          Personal Injury
        </motion.h1>

        <motion.div
          className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="mb-4">
            When you've been injured due to someone else's negligence, you deserve experienced legal representation that will fight aggressively for your rights and help you recover the full compensation you're entitled to. At {config.BUSINESS_NAME}, our personal injury practice is dedicated to helping accident victims navigate the complex legal process while focusing on their recovery. Whether you've been injured in a car accident, workplace incident, slip and fall, or due to medical malpractice, our experienced personal injury attorneys have the expertise, resources, and proven track record to build strong cases and achieve maximum settlements.
          </p>

          <p className="mb-4">
            Our personal injury practice encompasses a comprehensive range of services designed to help injured individuals recover physically, emotionally, and financially. We understand that being injured in an accident can be a life-changing experience, affecting not only your physical health but also your ability to work, your relationships, and your overall quality of life. That's why we take a client-centered approach, providing compassionate support while aggressively pursuing your case to ensure you receive full and fair compensation for your injuries, medical expenses, lost wages, pain and suffering, and other damages.
          </p>

          <p className="mb-4">
            We handle all types of personal injury cases, including motor vehicle accidents, truck accidents, motorcycle accidents, pedestrian accidents, bicycle accidents, workplace injuries, slip and fall incidents, product liability cases, medical malpractice, wrongful death, and catastrophic injuries. Our team conducts thorough investigations, works with expert witnesses including medical professionals, accident reconstruction specialists, and economists, and negotiates aggressively with insurance companies to ensure you receive the compensation you deserve. We understand the tactics insurance companies use to minimize payouts, and we're prepared to fight for your rights every step of the way.
          </p>

          <p className="mb-4">
            The personal injury claims process can be complex and overwhelming, especially when you're dealing with injuries and medical treatment. Our attorneys handle all aspects of your case, from initial investigation and evidence gathering to negotiation and, when necessary, trial representation. We work on a contingency fee basis, which means you don't pay any attorney fees unless we successfully recover compensation for you. This allows you to focus on your recovery while we handle the legal complexities of your case.
          </p>

          <p className="mb-4">
            Time is critical in personal injury cases, as there are strict deadlines for filing claims and preserving evidence. We recommend contacting us as soon as possible after your accident so we can begin investigating your case immediately, gathering evidence while it's still fresh, interviewing witnesses, and taking steps to protect your rights. Early intervention can make a significant difference in the outcome of your case, as evidence can disappear, witnesses' memories can fade, and important deadlines can be missed if action isn't taken promptly.
          </p>

          <p className="mb-6">
            At {config.BUSINESS_NAME}, we believe that every injured person deserves access to quality legal representation, regardless of their financial situation. Our personal injury attorneys combine extensive legal knowledge with genuine compassion for our clients, ensuring you receive both aggressive advocacy and supportive guidance throughout your case. We take the time to understand your unique situation, explain all legal options clearly, and fight tirelessly to achieve the best possible outcome for you and your family. Contact us today for a free consultation to discuss your case and learn how we can help you recover the compensation you deserve.
          </p>
        </motion.div>

        <motion.div
          className="mt-8"
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
            Free Consultation
          </a>
        </motion.div>

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
            Our Personal Injury Services
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
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=300&fit=crop"
                alt="Motor Vehicle Accidents"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Motor Vehicle Accidents</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Motor vehicle accidents are among the most common causes of personal injury, and they can result in serious injuries, significant medical expenses, and long-term disability. Our attorneys have extensive experience representing clients injured in car accidents, truck accidents, motorcycle accidents, and other motor vehicle collisions. We understand the complexities of motor vehicle accident cases, including insurance coverage issues, comparative negligence laws, and the importance of thorough accident reconstruction. We work with expert witnesses including accident reconstruction specialists, medical professionals, and economists to build strong cases that demonstrate the full extent of your injuries and damages. Our goal is to recover maximum compensation for your medical expenses, lost wages, pain and suffering, property damage, and other losses. We handle all aspects of your case, from investigating the accident and gathering evidence to negotiating with insurance companies and, when necessary, taking your case to trial.
                </p>
                <Link
                  to="/personal-injury/motor-vehicle-accidents"
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
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=300&fit=crop"
                alt="Slip and Fall Accidents"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Slip and Fall Accidents</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Property owners have a legal duty to maintain safe premises and warn visitors of known hazards. When they fail to meet this duty and you're injured as a result, you may be entitled to compensation for your injuries. Slip and fall accidents can occur due to wet floors, uneven surfaces, inadequate lighting, missing handrails, or other hazardous conditions. Our attorneys have extensive experience representing clients injured in slip and fall accidents at stores, restaurants, hotels, apartment buildings, and other properties. We understand the legal standards for premises liability cases and know how to investigate these cases effectively, including preserving evidence, documenting the hazardous condition, and establishing that the property owner knew or should have known about the dangerous condition. We work to recover compensation for your medical expenses, lost wages, pain and suffering, and other damages resulting from your slip and fall accident.
                </p>
                <Link
                  to="/personal-injury/slip-and-fall"
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
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=300&fit=crop"
                alt="Workplace Injuries"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Workplace Injuries</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Workplace injuries can have devastating consequences, affecting your ability to work, your income, and your quality of life. While workers' compensation may provide some benefits, it often doesn't cover the full extent of your losses, especially if your injury was caused by a third party's negligence. Our attorneys represent workers injured on the job, including construction accidents, industrial accidents, and other workplace injuries. We understand both workers' compensation claims and third-party liability claims, and we work to ensure you receive all the benefits and compensation you're entitled to. We also represent workers who have been injured due to unsafe working conditions, defective equipment, or employer negligence. Our goal is to help you recover maximum compensation for your medical expenses, lost wages, disability, pain and suffering, and other damages, while ensuring you receive proper medical care and support throughout your recovery.
                </p>
                <Link
                  to="/personal-injury/workplace-injuries"
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
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=300&fit=crop"
                alt="Wrongful Death"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Wrongful Death</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Losing a loved one due to someone else's negligence is one of the most devastating experiences a family can face. While no amount of money can replace your loved one, a wrongful death claim can provide financial support for your family and hold the responsible party accountable. Our attorneys provide compassionate representation for families who have lost loved ones due to accidents, medical malpractice, defective products, or other forms of negligence. We understand the emotional and financial impact of wrongful death, and we work to recover compensation for funeral expenses, lost income, loss of companionship, and other damages. Wrongful death cases are complex and require thorough investigation, expert testimony, and aggressive advocacy. We handle all aspects of your case with sensitivity and professionalism, allowing you to focus on grieving and healing while we fight for justice on behalf of your loved one.
                </p>
                <Link
                  to="/personal-injury/wrongful-death"
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

export default CosmeticWhitening
