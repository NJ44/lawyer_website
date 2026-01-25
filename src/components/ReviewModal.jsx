import React, { useState } from 'react';
import { X } from 'lucide-react';
import { config } from '../config';
import { useTranslation } from '../hooks/useTranslation';

const ReviewModal = ({ isOpen, onClose, onLowRating }) => {
  const { t } = useTranslation()
  const [selectedRating, setSelectedRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  if (!isOpen) return null;

  const handleStarClick = (rating) => {
    setSelectedRating(rating);

    if (rating >= 4) {
      // Redirect to Google review
      const reviewUrl = config.GOOGLE_BUSINESS_PROFILE_URL && !config.GOOGLE_BUSINESS_PROFILE_URL.startsWith('{{')
        ? `${config.GOOGLE_BUSINESS_PROFILE_URL.replace(/\/$/, '')}/review`
        : `https://www.google.com/search?q=${encodeURIComponent(config.BUSINESS_NAME + ' ' + config.CITY + ' Google Review')}`;

      window.open(reviewUrl, '_blank', 'noopener,noreferrer');
      onClose();
    } else {
      // Show comment form for low ratings
      onLowRating(rating);
    }
  };

  const renderStar = (index) => {
    const rating = index + 1;
    const isSelected = rating <= selectedRating;
    const isHovered = rating <= hoveredRating;
    const isActive = isSelected || (hoveredRating > 0 && isHovered);

    return (
      <button
        key={index}
        type="button"
        onClick={() => handleStarClick(rating)}
        onMouseEnter={() => setHoveredRating(rating)}
        onMouseLeave={() => setHoveredRating(0)}
        className="focus:outline-none transition-transform hover:scale-110"
        aria-label={`${rating} star${rating !== 1 ? 's' : ''}`}
      >
        <svg
          className={`w-12 h-12 transition-colors ${isActive ? 'text-yellow-400' : 'text-gray-300'
            }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      </button>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 md:p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            {t.reviewModal.starsQuestion}
          </h2>

          <div className="flex justify-center gap-2 mb-6">
            {Array.from({ length: 5 }, (_, i) => renderStar(i))}
          </div>

          {selectedRating > 0 && selectedRating < 4 && (
            <p className="text-sm text-gray-600 mb-4">
              {t.reviewModal.improvePlea}
            </p>
          )}

          {selectedRating >= 4 && (
            <p className="text-sm text-gray-600">
              {t.reviewModal.redirecting}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewModal;

