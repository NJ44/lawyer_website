import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { config } from '../config';
import { useTranslation } from '../hooks/useTranslation';

function TopBanner() {
  const { t, language } = useTranslation();
  const isRtl = language === 'he';

  const displayEmail = config.EMAIL && !config.EMAIL.startsWith('{{')
    ? config.EMAIL
    : 'info@lawfirm.com';
  const displayPhone = config.PHONE || '0546728171';

  return (
    <div className="bg-primary text-white py-2 px-4 text-sm">
      <div className={`max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-6 ${isRtl ? 'flex-row-reverse' : ''}`}>
        <a
          href={`mailto:${displayEmail}`}
          className={`flex items-center gap-2 hover:opacity-80 transition-opacity ${isRtl ? 'flex-row-reverse' : ''}`}
        >
          <Mail className="w-4 h-4" />
          <span>{isRtl ? 'שלחו לנו אימייל:' : 'Email us:'}</span>
          <span>{displayEmail}</span>
        </a>
        <a
          href={`tel:${displayPhone}`}
          className={`flex items-center gap-2 hover:opacity-80 transition-opacity ${isRtl ? 'flex-row-reverse' : ''}`}
        >
          <Phone className="w-4 h-4" />
          <span>{isRtl ? 'התקשרו אלינו:' : 'Call us:'}</span>
          <span>{displayPhone}</span>
        </a>
      </div>
    </div>
  );
}

export default TopBanner;

