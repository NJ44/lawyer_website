import React from "react";
import { TestimonialsColumn } from "./ui/testimonials-columns-1";
import { motion } from "motion/react";
import { config } from "../config";

// Testimonials data with Unsplash images (Google Reviews style)
const testimonials = [
  {
    text: "Excellent service! The team made me feel comfortable and the cleaning was thorough. Highly recommend!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces",
    name: "Sarah Johnson",
    role: "Patient",
    rating: 5,
    date: "2 weeks ago",
  },
  {
    text: "Best dentist I've been to. Modern equipment, friendly staff, and they accept my insurance. Very satisfied.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
    name: "Michael Chen",
    role: "Patient",
    rating: 5,
    date: "1 month ago",
  },
  {
    text: "Emergency appointment was available same day. Professional and caring. Thank you for the quick help!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces",
    name: "Emily Rodriguez",
    role: "Patient",
    rating: 5,
    date: "3 weeks ago",
  },
  {
    text: "Great experience from start to finish. The office is clean, staff is welcoming, and the dentist explained everything clearly.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces",
    name: "David Thompson",
    role: "Patient",
    rating: 5,
    date: "1 month ago",
  },
  {
    text: "The whitening treatment exceeded my expectations. My smile looks amazing and the process was painless!",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces",
    name: "Jessica Martinez",
    role: "Patient",
    rating: 5,
    date: "2 months ago",
  },
  {
    text: "I was nervous about getting a root canal, but the team made me feel at ease. The procedure was smooth and recovery was quick.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=faces",
    name: "Amanda Wilson",
    role: "Patient",
    rating: 5,
    date: "3 weeks ago",
  },
  {
    text: "The cosmetic dentistry work I had done looks natural and beautiful. I couldn't be happier with the results!",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=faces",
    name: "Rachel Brown",
    role: "Patient",
    rating: 5,
    date: "1 month ago",
  },
  {
    text: "Professional, friendly, and efficient. They got me in quickly for my dental emergency and fixed the issue perfectly.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=faces",
    name: "James Anderson",
    role: "Patient",
    rating: 5,
    date: "2 weeks ago",
  },
  {
    text: "My dental implants look and feel amazing. The entire process was well explained and the care was exceptional.",
    image: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=100&h=100&fit=crop&crop=faces",
    name: "Lisa Garcia",
    role: "Patient",
    rating: 5,
    date: "2 months ago",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const Testimonials = () => {
  return (
    <section id="reviews" className="bg-background my-20 relative py-20">
      <div className="container z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border py-1 px-4 rounded-lg text-sm">
              Testimonials
            </div>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5 text-center">
            What our patients say
          </h2>
          <p className="text-center mt-5 opacity-75">
            See what our patients have to say about us.
          </p>
        </motion.div>
        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
        {/* CTA Link */}
        <div className="text-center mt-8">
          {config.GOOGLE_BUSINESS_PROFILE_URL &&
          !config.GOOGLE_BUSINESS_PROFILE_URL.startsWith("{{") ? (
            <a
              href={config.GOOGLE_BUSINESS_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary hover:underline font-semibold"
            >
              Read more reviews
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          ) : (
            <a
              href={`https://www.google.com/search?q=${encodeURIComponent(
                config.BUSINESS_NAME + " " + config.CITY
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary hover:underline font-semibold"
            >
              Read more reviews
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

