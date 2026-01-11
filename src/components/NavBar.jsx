import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu as MenuIcon, X, Languages, ChevronDown } from "lucide-react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { scrollToElement } from "../hooks/useLenis";
import { cn } from "../lib/utils";
import { config } from "../config";
import { useLanguage } from "../contexts/LanguageContext";
import { useTranslation } from "../hooks/useTranslation";

import { useConsultationModal } from "../contexts/ConsultationModalContext";

function NavBar({ className }) {
  const [active, setActive] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation();
  const { openModal } = useConsultationModal();
  const languageDropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target)) {
        setIsLanguageDropdownOpen(false);
      }
    };

    if (isLanguageDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isLanguageDropdownOpen]);

  const scrollToSection = (href) => {
    if (href.startsWith('#')) {
      scrollToElement(href, { offset: -100 });
      setActive(null);
    }
  };

  const handleLinkClick = (path) => {
    navigate(path);
    setActive(null);
    setIsMobileMenuOpen(false);
    // Scroll to top when navigating to a new page
    window.scrollTo(0, 0);
  };

  const handleMobileLinkClick = (action) => {
    action();
    setIsMobileMenuOpen(false);
  };

  return (
    <div
      className={cn(
        "fixed inset-x-0 z-50 px-4 transition-all duration-500 ease-in-out",
        isScrolled ? "top-[15px]" : "top-[52px]",
        className
      )}
    >
      <Menu setActive={setActive} className="w-full justify-between">
        {/* Logo - positioned on the left */}
        <Link to="/" className="flex items-center flex-shrink-0" onClick={() => setIsMobileMenuOpen(false)}>
          {config.LOGO_URL && !config.LOGO_URL.startsWith("{{") ? (
            <img
              src={config.LOGO_URL}
              alt={`${config.BUSINESS_NAME} logo`}
              className="h-8 w-auto"
            />
          ) : (
            <span className="text-base font-bold text-black">
              {config.BUSINESS_NAME}
            </span>
          )}
        </Link>

        {/* Desktop Menu items - centered */}
        <div className="hidden md:flex items-center space-x-6 flex-1 justify-center mx-auto">
          <MenuItem setActive={setActive} active={active} item={t.nav.locations}>
            <div className="text-sm grid grid-cols-2 gap-6 p-4">
              {config.LOCATIONS && config.LOCATIONS.length > 0 ? (
                config.LOCATIONS.map((location, index) => {
                  const locationImages = [
                    "https://images.unsplash.com/photo-1497366216548-37526070297c?w=200&h=120&fit=crop", // Modern Office 1
                    "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=200&h=120&fit=crop", // Modern Office 2
                    "https://images.unsplash.com/photo-1577412647305-991150c7d163?w=200&h=120&fit=crop"  // Modern Office 3
                  ];
                  return (
                    <ProductItem
                      key={index}
                      title={location.name}
                      href={`/locations/${location.slug}`}
                      src={locationImages[index % locationImages.length]}
                      description={`${location.address}, ${location.city}`}
                      onClick={() => handleLinkClick(`/locations/${location.slug}`)}
                    />
                  );
                })
              ) : (
                <div className="text-sm text-gray-600">No locations available</div>
              )}
            </div>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item={t.nav.services}>
            <div className="text-sm grid grid-cols-2 gap-6 p-4">
              <ProductItem
                title="Business Law"
                href="/business-law"
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=200&h=120&fit=crop"
                description="Corporate law, contracts, and business formation"
                onClick={() => handleLinkClick("/business-law")}
              />
              <ProductItem
                title="Personal Injury"
                href="/personal-injury"
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=200&h=120&fit=crop"
                description="Accident claims and injury compensation"
                onClick={() => handleLinkClick("/personal-injury")}
              />
              <ProductItem
                title="Criminal Defense"
                href="/criminal-defense"
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=200&h=120&fit=crop"
                description="Aggressive defense for all criminal charges"
                onClick={() => handleLinkClick("/criminal-defense")}
              />
              <ProductItem
                title="Family Law"
                href="/criminal-defense"
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=200&h=120&fit=crop"
                description="Divorce, custody, and family legal matters"
                onClick={() => handleLinkClick("/criminal-defense")}
              />
              <ProductItem
                title="Estate Planning"
                href="/business-law"
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=200&h=120&fit=crop"
                description="Wills, trusts, and estate administration"
                onClick={() => handleLinkClick("/business-law")}
              />
              <ProductItem
                title="Real Estate Law"
                href="/business-law"
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=200&h=120&fit=crop"
                description="Property transactions and real estate disputes"
                onClick={() => handleLinkClick("/business-law")}
              />
            </div>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item={t.nav.aboutUs}>
            <div className="text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="Our Firm"
                href="#home"
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=280&h=140&fit=crop"
                description="Experienced legal representation with a dedicated team"
                onClick={() => scrollToSection("#home")}
              />
              <ProductItem
                title="Client Reviews"
                href="/reviews"
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=280&h=140&fit=crop"
                description="See what our clients say about their experience"
                onClick={() => handleLinkClick("/reviews")}
              />
              <ProductItem
                title="Location"
                href="#map"
                src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=280&h=140&fit=crop"
                description="Visit us at our convenient location in the city"
                onClick={() => scrollToSection("#map")}
              />
              <ProductItem
                title="FAQ"
                href="#faq"
                src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=280&h=140&fit=crop"
                description="Common questions about our services and policies"
                onClick={() => scrollToSection("#faq")}
              />
            </div>
          </MenuItem>

          <a
            href="/contact"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("/contact");
            }}
            className="cursor-pointer text-black hover:opacity-70 font-medium text-sm transition-opacity duration-200"
          >
            {t.nav.contact}
          </a>
        </div>

        {/* Desktop Language Switcher and Book Now Button - hidden on mobile */}
        <div className="hidden md:flex items-center ml-auto gap-3" style={{ transform: 'translateX(20px)' }}>

          <a
            href="#appointment-form"
            onClick={(e) => {
              e.preventDefault();
              openModal();
            }}
            className="bg-primary text-white px-4 py-1.5 rounded-lg font-semibold hover:bg-opacity-90 transition-colors whitespace-nowrap text-sm"
          >
            {t.nav.bookNow}
          </a>
        </div>

        {/* Mobile Burger Menu Button - positioned on the right */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-gray-800 hover:bg-gray-200 transition-colors ml-auto"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <MenuIcon className="w-6 h-6" />
          )}
        </button>
      </Menu>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className={cn(
          "md:hidden fixed inset-0 bg-white z-40 overflow-y-auto transition-all duration-500 ease-in-out",
          isScrolled ? "top-[63px]" : "top-[100px]"
        )}>
          <div className="px-4 py-6 space-y-4">
            {/* Services Section */}
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">{t.nav.services}</h3>
              <div className="space-y-2">
                <a
                  href="/business-law"
                  onClick={(e) => {
                    e.preventDefault();
                    handleMobileLinkClick(() => handleLinkClick("/business-law"));
                  }}
                  className="block py-2 text-black hover:opacity-70 transition-opacity"
                >
                  Business Law
                </a>
                <a
                  href="/personal-injury"
                  onClick={(e) => {
                    e.preventDefault();
                    handleMobileLinkClick(() => handleLinkClick("/personal-injury"));
                  }}
                  className="block py-2 text-black hover:opacity-70 transition-opacity"
                >
                  Personal Injury
                </a>
                <a
                  href="/criminal-defense"
                  onClick={(e) => {
                    e.preventDefault();
                    handleMobileLinkClick(() => handleLinkClick("/criminal-defense"));
                  }}
                  className="block py-2 text-black hover:opacity-70 transition-opacity"
                >
                  Criminal Defense
                </a>
              </div>
            </div>

            {/* About Section */}
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">{t.nav.aboutUs}</h3>
              <div className="space-y-2">
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    handleMobileLinkClick(() => scrollToSection("#home"));
                  }}
                  className="block py-2 text-black hover:opacity-70 transition-opacity"
                >
                  Our Firm
                </a>
                <a
                  href="/reviews"
                  onClick={(e) => {
                    e.preventDefault();
                    handleMobileLinkClick(() => handleLinkClick("/reviews"));
                  }}
                  className="block py-2 text-black hover:opacity-70 transition-opacity"
                >
                  Client Reviews
                </a>
                <a
                  href="#map"
                  onClick={(e) => {
                    e.preventDefault();
                    handleMobileLinkClick(() => scrollToSection("#map"));
                  }}
                  className="block py-2 text-black hover:opacity-70 transition-opacity"
                >
                  Location
                </a>
                <a
                  href="#faq"
                  onClick={(e) => {
                    e.preventDefault();
                    handleMobileLinkClick(() => scrollToSection("#faq"));
                  }}
                  className="block py-2 text-black hover:opacity-70 transition-opacity"
                >
                  FAQ
                </a>
              </div>
            </div>

            {/* Locations Section */}
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">{t.nav.locations}</h3>
              <div className="space-y-2">
                {config.LOCATIONS && config.LOCATIONS.length > 0 ? (
                  config.LOCATIONS.map((location, index) => (
                    <a
                      key={index}
                      href={`/locations/${location.slug}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleMobileLinkClick(() => handleLinkClick(`/locations/${location.slug}`));
                      }}
                      className="block py-2 text-black hover:opacity-70 transition-opacity"
                    >
                      {location.name}
                    </a>
                  ))
                ) : (
                  <div className="text-sm text-gray-600">No locations available</div>
                )}
              </div>
            </div>

            {/* Contact Section */}
            <div>
              <h3 className="text-lg font-semibold text-black mb-3">{t.nav.contact}</h3>
              <div className="space-y-2">
                <a
                  href="/contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleMobileLinkClick(() => handleLinkClick("/contact"));
                  }}
                  className="block py-2 text-black hover:opacity-70 transition-opacity"
                >
                  Contact Us
                </a>
              </div>
            </div>



            {/* Mobile Book Now Button */}
            <div className="pt-4">
              <a
                href="#appointment-form"
                onClick={(e) => {
                  e.preventDefault();
                  handleMobileLinkClick(() => {
                    openModal();
                  });
                }}
                className="block w-full bg-primary text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-opacity-90 transition-colors"
              >
                {t.nav.bookNow}
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div
          className={cn(
            "md:hidden fixed inset-0 bg-black bg-opacity-50 z-30 transition-all duration-500 ease-in-out",
            isScrolled ? "top-[63px]" : "top-[100px]"
          )}
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
}

export default NavBar;
