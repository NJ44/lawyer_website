import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import FeatureDemo from './pages/FeatureDemo'
import NavBar from './components/NavBar'
import TopBanner from './components/TopBanner'
import Hero from './components/Hero'
import Services from './components/Services'
import MapEmbed from './components/MapEmbed'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import SEO from './components/SEO'
import VoiceWidget from './components/VoiceWidget'
import { LetsWorkTogether } from '@/components/ui/lets-work-section'
import TeamSection from '@/components/ui/team-section'
import BusinessLaw from './pages/BusinessLaw'
import PersonalInjury from './pages/PersonalInjury'
import CriminalDefense from './pages/CriminalDefense'
import Blog from './pages/Blog'
import OurPractice from './pages/OurPractice'
import Reviews from './pages/Reviews'
import Contact from './pages/Contact'
import Location from './pages/Location'
import EntityFormation from './pages/services/EntityFormation'
import ContractServices from './pages/services/ContractServices'
import EmploymentLaw from './pages/services/EmploymentLaw'
import IntellectualProperty from './pages/services/IntellectualProperty'
import MotorVehicleAccidents from './pages/services/MotorVehicleAccidents'
import SlipAndFall from './pages/services/SlipAndFall'
import WorkplaceInjuries from './pages/services/WorkplaceInjuries'
import WrongfulDeath from './pages/services/WrongfulDeath'
import DuiDefense from './pages/services/DuiDefense'
import DrugCrimes from './pages/services/DrugCrimes'
import ViolentCrimes from './pages/services/ViolentCrimes'
import WhiteCollarCrimes from './pages/services/WhiteCollarCrimes'
import { useLenis } from './hooks/useLenis'
import { scrollToTop } from './hooks/useLenis'
import { ConsultationModalProvider } from './contexts/ConsultationModalContext'
import ConsultationModal from './components/ConsultationModal'

import { config } from './config'

function HomePage() {
  // Add smooth-scroll class to body for CSS support
  useEffect(() => {
    document.body.classList.add('smooth-scroll')
    return () => {
      document.body.classList.remove('smooth-scroll')
    }
  }, [])

  return (
    <>
      <Hero />
      <Services />
      <MapEmbed />
      <TeamSection />
      <Testimonials />
      <FAQ />
      <LetsWorkTogether />
    </>
  )
}

function App() {
  const location = useLocation()

  useEffect(() => {
    // Set CSS custom properties from config
    if (config.PRIMARY_COLOR && !config.PRIMARY_COLOR.startsWith('{{')) {
      document.documentElement.style.setProperty('--primary-color', config.PRIMARY_COLOR)
    }
    if (config.ACCENT_COLOR && !config.ACCENT_COLOR.startsWith('{{')) {
      document.documentElement.style.setProperty('--accent-color', config.ACCENT_COLOR)
    }
  }, [])

  // Initialize Lenis smooth scrolling for all pages
  useLenis()

  // Scroll to top on route change
  useEffect(() => {
    // Small delay to ensure page has rendered
    const timer = setTimeout(() => {
      scrollToTop(true) // Instant scroll on route change
      // Backup: Also use native scrollTo for immediate effect
      window.scrollTo(0, 0)
    }, 0)

    return () => clearTimeout(timer)
  }, [location.pathname])

  return (
    <ConsultationModalProvider>
      <SEO />
      <TopBanner />
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/feature-demo" element={<FeatureDemo />} />
          <Route path="/business-law" element={<BusinessLaw />} />
          <Route path="/personal-injury" element={<PersonalInjury />} />
          <Route path="/criminal-defense" element={<CriminalDefense />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/our-practice" element={<OurPractice />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/locations/:slug" element={<Location />} />
          {/* Business Law Services */}
          <Route path="/business-law/entity-formation" element={<EntityFormation />} />
          <Route path="/business-law/contract-services" element={<ContractServices />} />
          <Route path="/business-law/employment-law" element={<EmploymentLaw />} />
          <Route path="/business-law/intellectual-property" element={<IntellectualProperty />} />
          {/* Personal Injury Services */}
          <Route path="/personal-injury/motor-vehicle-accidents" element={<MotorVehicleAccidents />} />
          <Route path="/personal-injury/slip-and-fall" element={<SlipAndFall />} />
          <Route path="/personal-injury/workplace-injuries" element={<WorkplaceInjuries />} />
          <Route path="/personal-injury/wrongful-death" element={<WrongfulDeath />} />
          {/* Criminal Defense Services */}
          <Route path="/criminal-defense/dui-defense" element={<DuiDefense />} />
          <Route path="/criminal-defense/drug-crimes" element={<DrugCrimes />} />
          <Route path="/criminal-defense/violent-crimes" element={<ViolentCrimes />} />
          <Route path="/criminal-defense/white-collar-crimes" element={<WhiteCollarCrimes />} />
        </Routes>
      </main>
      <Footer />
      <VoiceWidget />
      <ConsultationModal />
    </ConsultationModalProvider>
  )
}

export default App
