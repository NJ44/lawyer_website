import React, { useState } from "react";
import { TestimonialsColumn } from "./ui/testimonials-columns-1";
import { motion } from "motion/react";
import { config } from "../config";
import ReviewModal from "./ReviewModal";
import CommentModal from "./CommentModal";
import { useTranslation } from "../hooks/useTranslation";

// Testimonials data - translated
const testimonialsHe = [
  {
    text: "ייצוג משפטי מעולה! הצוות היה מקצועי, קשוב ועזר לי לנצח בתיק. ממליצה בחום!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces",
    name: "שרה ג'ונסון",
    role: "לקוחה",
    rating: 5,
    date: "לפני שבועיים",
  },
  {
    text: "משרד עורכי הדין הטוב ביותר שעבדתי איתו. הם הסבירו הכל בצורה ברורה, עדכנו אותי לאורך כל התהליך והגיעו לתוצאות מצוינות.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
    name: "מיכאל חן",
    role: "לקוח",
    rating: 5,
    date: "לפני חודש",
  },
  {
    text: "ייעוץ חירום היה זמין באותו יום. מקצועי ואכפתי. תודה על העזרה המהירה בזמן קשה!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces",
    name: "אמילי רודריגז",
    role: "לקוחה",
    rating: 5,
    date: "לפני שלושה שבועות",
  },
  {
    text: "חוויה נהדרת מתחילה ועד סוף. עורכי הדין בקיאים, הצוות מסביר פנים, והם הסבירו הכל בצורה ברורה.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces",
    name: "דוד תומפסון",
    role: "לקוח",
    rating: 5,
    date: "לפני חודש",
  },
];

const testimonialsEn = [
  {
    text: "Excellent legal representation! The team was professional, responsive, and helped me win my case. Highly recommend!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces",
    name: "Sarah Johnson",
    role: "Client",
    rating: 5,
    date: "2 weeks ago",
  },
  {
    text: "Best law firm I've worked with. They explained everything clearly, kept me informed throughout the process, and achieved great results.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces",
    name: "Michael Chen",
    role: "Client",
    rating: 5,
    date: "1 month ago",
  },
  {
    text: "Emergency consultation was available same day. Professional and caring. Thank you for the quick help during a difficult time!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces",
    name: "Emily Rodriguez",
    role: "Client",
    rating: 5,
    date: "3 weeks ago",
  },
  {
    text: "Great experience from start to finish. The attorneys are knowledgeable, the staff is welcoming, and they explained everything clearly.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces",
    name: "David Thompson",
    role: "Client",
    rating: 5,
    date: "1 month ago",
  },
];

const Testimonials = () => {
  const { t, language } = useTranslation()
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
  const [selectedRating, setSelectedRating] = useState(0);

  const testimonials = language === 'he' ? testimonialsHe : testimonialsEn;
  const firstColumn = testimonials.slice(0, 2);
  const secondColumn = testimonials.slice(2, 4);
  const thirdColumn = testimonials.slice(0, 3); // Duplicate or add more if needed

  const isRtl = language === 'he';

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
              {language === 'he' ? "ביקורות" : "Testimonials"}
            </div>
          </div>
          <h2 className="text-4xl font-bold tracking-tighter mt-5 text-center">
            {t.testimonials.title}
          </h2>
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
        <div className={`text-center mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 ${isRtl ? 'flex-row-reverse' : ''}`}>
          {config.GOOGLE_BUSINESS_PROFILE_URL &&
            !config.GOOGLE_BUSINESS_PROFILE_URL.startsWith("{{") ? (
            <>
              <a
                href={config.GOOGLE_BUSINESS_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:underline font-semibold"
              >
                {isRtl && <svg className="w-5 h-5 mr-2 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>}
                {t.testimonials.readMore}
                {!isRtl && <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>}
              </a>
              <button
                onClick={() => setIsReviewModalOpen(true)}
                className="inline-flex items-center bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
              >
                {t.testimonials.writeReview}
                <svg
                  className={`w-5 h-5 ${isRtl ? 'mr-2' : 'ml-2'}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              </button>
            </>
          ) : (
            <>
              <a
                href={`https://www.google.com/search?q=${encodeURIComponent(
                  config.BUSINESS_NAME + " " + config.CITY
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:underline font-semibold"
              >
                {isRtl && <svg className="w-5 h-5 mr-2 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>}
                {t.testimonials.readMore}
                {!isRtl && <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>}
              </a>
              <button
                onClick={() => setIsReviewModalOpen(true)}
                className="inline-flex items-center bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
              >
                {t.testimonials.writeReview}
                <svg
                  className={`w-5 h-5 ${isRtl ? 'mr-2' : 'ml-2'}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              </button>
            </>
          )}
        </div>
      </div>

      <ReviewModal
        isOpen={isReviewModalOpen}
        onClose={() => setIsReviewModalOpen(false)}
        onLowRating={(rating) => {
          setSelectedRating(rating);
          setIsReviewModalOpen(false);
          setIsCommentModalOpen(true);
        }}
      />

      <CommentModal
        isOpen={isCommentModalOpen}
        onClose={() => {
          setIsCommentModalOpen(false);
          setSelectedRating(0);
        }}
        rating={selectedRating}
      />
    </section>
  );
};

export default Testimonials;

