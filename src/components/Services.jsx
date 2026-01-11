import React from "react";
import { useNavigate } from "react-router-dom";
import { FeaturedSpotlight } from "./ui/feature-spotlight";

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      titlePrefix: "Business",
      titleSuffix: "Law",
      description: "Comprehensive legal guidance for your company. From entity formation to complex contracts and compliance, we protect your interests and support your growth.",
      imageUrl: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop",
      index: "01",
      link: "/business-law"
    },
    {
      titlePrefix: "Personal",
      titleSuffix: "Injury",
      description: "Aggressive representation for accident victims. We fight for the compensation you deserve, handling everything from motor vehicle accidents to workplace injuries.",
      imageUrl: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop",
      index: "02",
      link: "/personal-injury"
    },
    {
      titlePrefix: "Criminal",
      titleSuffix: "Defense",
      description: "Experienced defense for state and federal charges. We provide a thorough investigation and vigorous representation to protect your rights and freedom.",
      // Using an alternative legal/courtroom image
      imageUrl: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=800&h=600&fit=crop",
      index: "03",
      link: "/criminal-defense"
    }
  ];

  return (
    <section id="services" className="w-full bg-white py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Services
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
              label="Practice Area"
              onLearnMore={() => navigate(service.link)}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
