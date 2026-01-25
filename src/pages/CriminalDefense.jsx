import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { scrollToElement } from '../hooks/useLenis'
import { config } from '../config'
import { useTranslation } from '../hooks/useTranslation'

const SpecializedCare = () => {
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
            alt="Criminal Defense"
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
          Criminal Defense
        </motion.h1>

        <motion.div
          className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="mb-4">
            Facing criminal charges is one of the most serious and stressful situations you can encounter. The consequences of a criminal conviction can be life-altering, affecting your freedom, your career, your relationships, and your future. At {config.BUSINESS_NAME}, our criminal defense practice provides aggressive, experienced representation for individuals facing criminal charges at both state and federal levels. From misdemeanors to serious felonies, our experienced criminal defense attorneys are equipped with extensive trial experience, in-depth knowledge of criminal law, and a proven track record of achieving favorable outcomes for our clients.
          </p>

          <p className="mb-4">
            Our criminal defense practice encompasses a comprehensive range of services designed to protect your rights, freedom, and future. We understand that every criminal case is unique and requires a strategic, personalized approach. During your initial consultation, our attorneys will thoroughly review the charges against you, explain your rights, discuss potential defenses, and develop a comprehensive strategy to achieve the best possible outcome. We believe in aggressive advocacy and thorough case preparation, leaving no stone unturned in our defense of your rights.
          </p>

          <p className="mb-4">
            We handle all types of criminal cases, including DUI/DWI offenses, drug crimes, assault and battery, theft and property crimes, white-collar crimes, violent crimes, sex crimes, domestic violence, weapons charges, and federal crimes. Our criminal defense attorneys have extensive experience in both state and federal courts, and we understand the different procedures, strategies, and challenges involved in each type of case. We work closely with investigators, expert witnesses, and other professionals to build strong defenses and challenge the prosecution's case at every opportunity.
          </p>

          <p className="mb-4">
            The criminal justice system can be complex and intimidating, and the stakes are incredibly high. That's why it's essential to have experienced criminal defense representation from the moment you're charged or even before charges are filed. Early intervention can make a significant difference in the outcome of your case, as we can work to prevent charges from being filed, negotiate favorable plea agreements, or build a strong defense from the start. We understand the tactics prosecutors use and know how to effectively challenge evidence, question witnesses, and present compelling defenses on your behalf.
          </p>

          <p className="mb-4">
            We understand that being charged with a crime can be overwhelming and frightening. Our criminal defense attorneys provide compassionate support while aggressively fighting for your rights. We take the time to explain the legal process, answer your questions, and ensure you understand your options at every stage of your case. We believe in open communication and will keep you informed about developments in your case and what to expect next. Our goal is to minimize the impact of criminal charges on your life while working to achieve the best possible outcome.
          </p>

          <p className="mb-6">
            At {config.BUSINESS_NAME}, we believe that everyone deserves a strong defense, regardless of the charges they face. Our criminal defense attorneys combine extensive legal knowledge with aggressive advocacy and genuine care for our clients. We fight tirelessly to protect your rights, challenge the prosecution's case, and achieve favorable outcomes through negotiation or trial. If you or a loved one is facing criminal charges, don't wait—contact us immediately for a confidential consultation. The sooner we can begin working on your defense, the better positioned we'll be to protect your rights and achieve a favorable outcome.
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
            Our Criminal Defense Services
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
                alt="DUI/DWI Defense"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">DUI/DWI Defense</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  DUI and DWI charges can have serious consequences, including license suspension, fines, jail time, and a permanent criminal record. Our attorneys have extensive experience defending clients against DUI/DWI charges and understand the complex laws and procedures involved in these cases. We challenge the prosecution's case by examining the validity of traffic stops, the accuracy of field sobriety tests, the reliability of breathalyzer and blood test results, and the procedures used by law enforcement. We work with expert witnesses including toxicologists and accident reconstruction specialists to build strong defenses. Our goal is to minimize the impact of DUI/DWI charges on your life, whether through dismissal of charges, reduction of charges, or negotiation of favorable plea agreements. We also help clients navigate the administrative process of license suspension and work to protect their driving privileges whenever possible.
                </p>
                <Link
                  to="/criminal-defense/dui-defense"
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
                alt="Drug Crimes"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Drug Crimes</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Drug crime charges can range from simple possession to serious trafficking offenses, and the penalties can be severe, including lengthy prison sentences and substantial fines. Our criminal defense attorneys have extensive experience defending clients against all types of drug charges, including possession, distribution, manufacturing, and trafficking. We understand the complex laws surrounding drug crimes and know how to challenge the prosecution's case effectively. We examine the legality of searches and seizures, challenge the chain of custody of evidence, question the reliability of drug testing, and explore alternative sentencing options including drug court and treatment programs. Our goal is to protect your rights, minimize the consequences of drug charges, and achieve the best possible outcome for your case. We work to have charges dismissed, reduced, or negotiate favorable plea agreements when appropriate, and we're prepared to take your case to trial when necessary to protect your rights and freedom.
                </p>
                <Link
                  to="/criminal-defense/drug-crimes"
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
                alt="Assault and Violent Crimes"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Assault and Violent Crimes</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Assault and violent crime charges are among the most serious criminal offenses, carrying severe penalties including lengthy prison sentences. Our criminal defense attorneys have extensive experience defending clients against assault, battery, domestic violence, robbery, and other violent crime charges. We understand that these cases often involve complex issues including self-defense, defense of others, mistaken identity, and false accusations. We conduct thorough investigations, work with expert witnesses, and build strong defenses that challenge the prosecution's case. Our goal is to protect your rights, minimize the consequences of violent crime charges, and achieve the best possible outcome. We work to have charges dismissed or reduced, negotiate favorable plea agreements when appropriate, and we're prepared to take your case to trial when necessary. We understand the serious nature of these charges and the impact they can have on your life, and we fight aggressively to protect your rights and freedom.
                </p>
                <Link
                  to="/criminal-defense/violent-crimes"
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
                alt="White-Collar Crimes"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">White-Collar Crimes</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  White-collar crimes including fraud, embezzlement, money laundering, and other financial crimes are complex cases that require specialized knowledge and experience. Our criminal defense attorneys have extensive experience defending clients against white-collar crime charges in both state and federal courts. We understand the complex financial and legal issues involved in these cases and know how to effectively challenge the prosecution's evidence and theories. We work with forensic accountants, financial experts, and other professionals to build strong defenses. Our goal is to protect your rights, reputation, and future while working to achieve the best possible outcome. White-collar crime cases often involve extensive investigations and complex evidence, and we're prepared to invest the time and resources necessary to build a strong defense. We work to have charges dismissed, reduced, or negotiate favorable plea agreements, and we're prepared to take your case to trial when necessary to protect your rights and achieve justice.
                </p>
                <Link
                  to="/criminal-defense/white-collar-crimes"
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

export default SpecializedCare
