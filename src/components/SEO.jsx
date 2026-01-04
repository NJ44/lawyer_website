import React from 'react'
import { useLocation } from 'react-router-dom'
import { config } from '../config'

// SEO metadata for each route
const getPageMetadata = (pathname) => {
  const baseTitle = config.BUSINESS_NAME
  const city = config.CITY

  const metadataMap = {
    '/': {
      title: `${baseTitle}`,
      description: `Professional dental services in ${city}. Comprehensive general dentistry, cosmetic treatments, and specialized care. Same-week appointments available.`
    },
    '/general-dentistry': {
      title: `General Dentistry Services in ${city} | ${baseTitle}`,
      description: `Complete general dentistry services in ${city}. Routine cleanings, fillings, root canals, and preventive care. Expert dental team accepting new patients.`
    },
    '/cosmetic-whitening': {
      title: `Cosmetic Dentistry & Teeth Whitening in ${city} | ${baseTitle}`,
      description: `Transform your smile with professional cosmetic dentistry in ${city}. Teeth whitening, veneers, bonding, and smile makeovers. Book your consultation today.`
    },
    '/specialized-care': {
      title: `Specialized Dental Care in ${city} | Implants, Orthodontics & More | ${baseTitle}`,
      description: `Advanced specialized dental services in ${city}. Dental implants, orthodontics, emergency care, and periodontal treatment. Expert care for complex dental needs.`
    },
    '/general-dentistry/routine-cleanings-exams': {
      title: `Routine Dental Cleanings & Exams in ${city} | ${baseTitle}`,
      description: `Professional dental cleanings and comprehensive exams in ${city}. Preventive care to maintain healthy teeth and gums. Book your routine checkup today.`
    },
    '/general-dentistry/fillings-restorations': {
      title: `Dental Fillings & Restorations in ${city} | ${baseTitle}`,
      description: `Quality dental fillings and tooth restorations in ${city}. Natural-looking composite fillings and restoration services. Restore your smile with expert care.`
    },
    '/general-dentistry/root-canal-therapy': {
      title: `Root Canal Therapy in ${city} | Pain-Free Treatment | ${baseTitle}`,
      description: `Expert root canal therapy in ${city}. Comfortable, pain-free treatment to save infected teeth. Advanced technology and gentle approach.`
    },
    '/general-dentistry/gum-disease-treatment': {
      title: `Gum Disease Treatment in ${city} | Periodontal Care | ${baseTitle}`,
      description: `Comprehensive gum disease treatment and periodontal care in ${city}. Prevent and treat gingivitis and periodontitis. Restore your gum health.`
    },
    '/cosmetic-whitening/teeth-whitening': {
      title: `Professional Teeth Whitening in ${city} | Brighten Your Smile | ${baseTitle}`,
      description: `Safe and effective teeth whitening in ${city}. Professional in-office and take-home whitening options. Get a brighter smile in just one visit.`
    },
    '/cosmetic-whitening/dental-veneers': {
      title: `Dental Veneers in ${city} | Porcelain & Composite Veneers | ${baseTitle}`,
      description: `Transform your smile with dental veneers in ${city}. Porcelain and composite veneers to correct chips, gaps, and discoloration. Natural-looking results.`
    },
    '/cosmetic-whitening/dental-bonding': {
      title: `Dental Bonding in ${city} | Cosmetic Tooth Repair | ${baseTitle}`,
      description: `Affordable dental bonding in ${city}. Quick cosmetic repair for chipped, cracked, or discolored teeth. Same-day results.`
    },
    '/cosmetic-whitening/smile-makeover': {
      title: `Complete Smile Makeover in ${city} | Transform Your Smile | ${baseTitle}`,
      description: `Complete smile makeover consultation in ${city}. Custom treatment plans combining whitening, veneers, and cosmetic procedures for your perfect smile.`
    },
    '/specialized-care/dental-implants': {
      title: `Dental Implants in ${city} | Permanent Tooth Replacement | ${baseTitle}`,
      description: `Premium dental implants in ${city}. Permanent solution for missing teeth with natural-looking results. Expert implant placement and restoration.`
    },
    '/specialized-care/emergency-care': {
      title: `Emergency Dental Care in ${city} | Same-Day Appointments | ${baseTitle}`,
      description: `Emergency dental services in ${city}. Same-day appointments for dental emergencies. Pain relief, tooth repair, and urgent dental care available.`
    },
    '/specialized-care/orthodontics': {
      title: `Orthodontic Treatment in ${city} | Braces & Invisalign | ${baseTitle}`,
      description: `Modern orthodontic treatment in ${city}. Traditional braces, Invisalign, and clear aligners to straighten teeth. Free consultation available.`
    },
    '/specialized-care/periodontal-treatment': {
      title: `Periodontal Treatment in ${city} | Advanced Gum Care | ${baseTitle}`,
      description: `Expert periodontal treatment in ${city}. Advanced procedures for gum disease, scaling, root planing, and gum surgery. Restore your oral health.`
    },
    '/our-practice': {
      title: `About Our Practice | ${baseTitle} — ${city} Dentist`,
      description: `Learn about ${baseTitle} in ${city}. Our modern facility, experienced team, and commitment to providing exceptional dental care in a comfortable environment.`
    },
    '/reviews': {
      title: `Patient Reviews & Testimonials | ${baseTitle} — ${city}`,
      description: `Read real patient reviews and testimonials about ${baseTitle} in ${city}. See why our patients trust us with their dental care needs.`
    },
    '/contact': {
      title: `Contact Us | ${baseTitle} — ${city} Dental Office`,
      description: `Contact ${baseTitle} in ${city}. Schedule an appointment, ask questions, or visit our office. We're here to help with all your dental care needs.`
    },
    '/blog': {
      title: `Dental Health Blog & Tips | ${baseTitle} — ${city}`,
      description: `Dental health tips, oral care advice, and latest updates from ${baseTitle} in ${city}. Learn how to maintain a healthy, beautiful smile.`
    }
  }

  // Check for location pages
  if (pathname.startsWith('/locations/')) {
    const slug = pathname.split('/locations/')[1]
    const location = config.LOCATIONS?.find(loc => loc.slug === slug)
    if (location) {
      return {
        title: `${location.name} | ${baseTitle} — ${location.city}`,
        description: `Visit ${baseTitle} at ${location.name} in ${location.city}. ${location.address}, ${location.city}. Contact us at ${location.phone} to schedule your appointment.`
      }
    }
  }

  // Return metadata for the current path or default
  return metadataMap[pathname] || metadataMap['/']
}

const SEO = () => {
  const location = useLocation()
  const { title, description } = getPageMetadata(location.pathname)
  const canonicalUrl = typeof window !== 'undefined' ? window.location.href : 'https://yourdomain.com'

  return (
    <>
      {/* Update meta tags dynamically */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            document.title = ${JSON.stringify(title)};
            const metaDescription = document.querySelector('meta[name="description"]');
            if (metaDescription) metaDescription.content = ${JSON.stringify(description)};
            const canonical = document.querySelector('link[rel="canonical"]');
            if (canonical) canonical.href = ${JSON.stringify(canonicalUrl)};
            
            // Update Open Graph tags
            const ogTitle = document.querySelector('meta[property="og:title"]');
            if (ogTitle) ogTitle.content = ${JSON.stringify(title)};
            const ogDescription = document.querySelector('meta[property="og:description"]');
            if (ogDescription) ogDescription.content = ${JSON.stringify(description)};
            const ogUrl = document.querySelector('meta[property="og:url"]');
            if (ogUrl) ogUrl.content = ${JSON.stringify(canonicalUrl)};
            
            // Update Twitter tags
            const twitterTitle = document.querySelector('meta[name="twitter:title"]');
            if (twitterTitle) twitterTitle.content = ${JSON.stringify(title)};
            const twitterDescription = document.querySelector('meta[name="twitter:description"]');
            if (twitterDescription) twitterDescription.content = ${JSON.stringify(description)};
          `,
        }}
      />

      {/* LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            '@id': canonicalUrl,
            name: config.BUSINESS_NAME,
            description: description,
            image: config.LOGO_URL && !config.LOGO_URL.startsWith('{{') ? config.LOGO_URL : undefined,
            telephone: config.PHONE,
            email: config.EMAIL,
            address: {
              '@type': 'PostalAddress',
              streetAddress: config.ADDRESS_LINE,
              addressLocality: config.CITY,
            },
            geo: {
              '@type': 'GeoCoordinates',
              // Add coordinates if available
            },
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '08:00',
                closes: '18:00',
              },
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: 'Saturday',
                opens: '09:00',
                closes: '14:00',
              },
            ],
            priceRange: '$$',
            areaServed: {
              '@type': 'City',
              name: config.CITY,
            },
            // Add services schema
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Dental Services',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'General Dentistry',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Teeth Whitening',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Cosmetic Dentistry',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Dental Implants',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Emergency Care',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Orthodontics',
                  },
                },
              ],
            },
          }),
        }}
      />
    </>
  )
}

export default SEO

