import React, { useState } from 'react'
import { scrollToElement } from '../hooks/useLenis'
import { config } from '../config'
import { useTranslation } from '../hooks/useTranslation'

import { useConsultationModal } from '../contexts/ConsultationModalContext'

const Hero = () => {
  const { t } = useTranslation();
  const { openModal } = useConsultationModal();

  return (
    <section
      id="home"
      className="relative flex items-center pt-20 pb-12 lg:min-h-[600px]"
      style={{
        backgroundImage: 'url(/lawyer_office_hero_standing_v2.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay - lighter for black text visibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Text Content */}
          <div className="text-black space-y-3 animate-fade-in">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-black">
              Experienced Legal Representation for Your Rights
            </h1>
            <h2 className="text-lg md:text-xl text-black font-normal max-w-2xl">
              Proven results, dedicated advocacy, and a team that fights for you.
            </h2>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <a
                href="#contact"
                className="bg-primary text-white px-6 py-3 rounded-full font-semibold text-base hover:bg-opacity-90 transition-colors text-center shadow-lg"
                onClick={(e) => {
                  e.preventDefault();
                  openModal();
                }}
              >
                {t.hero.requestAppointment}
              </a>
              <a
                href="#services"
                className="bg-transparent text-black px-6 py-3 rounded-full font-semibold text-base hover:bg-black/5 transition-colors text-center shadow-md border border-black"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToElement('#services', { offset: -100 });
                }}
              >
                Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

