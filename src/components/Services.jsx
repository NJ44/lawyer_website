import React from "react";
import { useNavigate } from "react-router-dom";
import { FeaturedSpotlight } from "./ui/feature-spotlight";
import { useTranslation } from "../hooks/useTranslation";

const Services = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const services = [
    {
      titlePrefix: t.services.businessLaw.prefix,
      titleSuffix: t.services.businessLaw.suffix,
      description: t.services.businessLaw.description,
      imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop",
      index: "01",
      link: "/business-law",
      label: t.services.businessLaw.label
    },
    {
      titlePrefix: t.services.personalInjury.prefix,
      titleSuffix: t.services.personalInjury.suffix,
      description: t.services.personalInjury.description,
      imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop",
      index: "02",
      link: "/personal-injury",
      label: t.services.personalInjury.label
    },
    {
      titlePrefix: t.services.criminalDefense.prefix,
      titleSuffix: t.services.criminalDefense.suffix,
      description: t.services.criminalDefense.description,
      // Using an alternative legal/courtroom image
      imageUrl: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=800&h=600&fit=crop",
      index: "03",
      link: "/criminal-defense",
      label: t.services.criminalDefense.label
    }
  ];

  return (
    <section id="services" className="w-full bg-white py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            {t.services.title}
          </h2>

        </div>


        {services.map((service) => (
          <div key={service.index} className="flex justify-center">
            <FeaturedSpotlight
              titlePrefix={service.titlePrefix}
              titleSuffix={service.titleSuffix}
              description={service.description}
              imageUrl={service.imageUrl}
              index={service.index}
              label={service.label}
              onLearnMore={() => navigate(service.link)}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
