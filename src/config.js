// CLIENT VARIABLES - Replace these with actual values
export const config = {
  BUSINESS_NAME: "Dental Care",
  TAGLINE: "{{TAGLINE}}", // e.g., "Gentle dental care near you"
  PRIMARY_COLOR: "{{PRIMARY_COLOR}}", // hex color, e.g., "#0066CC"
  ACCENT_COLOR: "{{ACCENT_COLOR}}", // hex color, e.g., "#FF6B6B"
  ADDRESS_LINE: "123 Main Street",
  CITY: "California",
  PHONE: "0546728171",
  EMAIL: "info@dentalcare.com",
  LOGO_URL: "{{LOGO_URL}}", // optional
  GOOGLE_MAP_EMBED_SRC: "{{GOOGLE_MAP_IFRAME_SRC}}",
  GOOGLE_REVIEWS_DATA: null, // Will be set from {{REVIEWS_JSON}} or use sample data
  FORM_WEBHOOK_URL: "{{FORM_WEBHOOK_URL}}",
  GOOGLE_BUSINESS_PROFILE_URL: "{{GOOGLE_BUSINESS_PROFILE_URL}}", // optional
  LOCATIONS: [
    { name: "Main Office", slug: "main-office", address: "123 Main Street", city: "Los Angeles", phone: "0546728171" },
    { name: "Downtown Branch", slug: "downtown-branch", address: "456 Oak Avenue", city: "San Francisco", phone: "0546728172" },
    { name: "Westside Clinic", slug: "westside-clinic", address: "789 Beach Boulevard", city: "San Diego", phone: "0546728173" }
  ]
};

// Sample reviews data (used if GOOGLE_REVIEWS_DATA is not provided)
export const sampleReviews = [
  {
    author: "Sarah Johnson",
    rating: 5,
    date: "2024-01-15",
    text: "Excellent service! The team made me feel comfortable and the cleaning was thorough. Highly recommend!",
  },
  {
    author: "Michael Chen",
    rating: 5,
    date: "2024-01-10",
    text: "Best dentist I've been to. Modern equipment, friendly staff, and they accept my insurance. Very satisfied.",
  },
  {
    author: "Emily Rodriguez",
    rating: 5,
    date: "2024-01-05",
    text: "Emergency appointment was available same day. Professional and caring. Thank you for the quick help!",
  },
  {
    author: "David Thompson",
    rating: 5,
    date: "2023-12-28",
    text: "Great experience from start to finish. The office is clean, staff is welcoming, and the dentist explained everything clearly.",
  },
];

