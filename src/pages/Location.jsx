import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { config } from '../config'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

const Location = () => {
  const { slug } = useParams()
  const location = config.LOCATIONS?.find(loc => loc.slug === slug)

  if (!location) {
    return (
      <div className="min-h-screen bg-white pt-32 pb-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Location Not Found</h1>
          <Link to="/" className="text-primary hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    )
  }

  const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.184132576894!2d-73.98811768459398!3d40.75889597932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ1JzMyLjAiTiA3M8KwNTknMTQuMiJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus`
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${location.address}, ${location.city}`
  )}`

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Hero Image */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=1200&h=600&fit=crop"
            alt={location.name}
            className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg"
          />
        </motion.div>

        {/* Title */}
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-black mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {location.name}
        </motion.h1>

        {/* Location Details */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="bg-gray-50 rounded-xl p-6 space-y-4">
              <h2 className="text-2xl font-bold text-black mb-4">Contact Information</h2>
              
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Address</h3>
                  <p className="text-gray-600">
                    {location.address}<br />
                    {location.city}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                  <a href={`tel:${location.phone}`} className="text-primary hover:underline">
                    {location.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                  <a href={`mailto:${config.EMAIL}`} className="text-primary hover:underline">
                    {config.EMAIL}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Hours</h3>
                  <div className="text-gray-600 space-y-1 text-sm">
                    <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p>Saturday: 9:00 AM - 2:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gray-50 rounded-xl p-6"
          >
            <h2 className="text-2xl font-bold text-black mb-4">Location</h2>
            <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-lg">
              <iframe
                src={mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Location of ${location.name}`}
              />
            </div>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-primary hover:underline text-sm"
            >
              Open in Google Maps →
            </a>
          </motion.div>
        </div>

        {/* About This Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="prose prose-lg max-w-none"
        >
          <h2 className="text-3xl font-bold text-black mb-4">About {location.name}</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our {location.name} location in {location.city} is equipped with state-of-the-art dental technology 
            and staffed by experienced, caring professionals. We are committed to providing exceptional dental 
            care in a comfortable and welcoming environment.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Whether you need a routine cleaning, cosmetic procedure, or specialized treatment, our team at 
            {location.name} is here to help you achieve optimal oral health and a beautiful smile.
          </p>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 bg-primary text-white rounded-2xl p-8 text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Ready to Schedule an Appointment?</h2>
          <p className="mb-6">Contact us today to book your visit at {location.name}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${location.phone}`}
              className="bg-white text-primary px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-colors"
            >
              Call {location.phone}
            </a>
            <Link
              to="/contact"
              className="bg-white/20 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition-colors border border-white"
            >
              Request Appointment
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Location

