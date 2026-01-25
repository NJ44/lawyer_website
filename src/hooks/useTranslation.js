import { useLanguage } from '../contexts/LanguageContext';
import { translations as enTranslations } from '../translations/en';
import { translations as esTranslations } from '../translations/es';
import { translations as heTranslations } from '../translations/he.jsx';

const translationMap = {
  en: enTranslations,
  es: esTranslations,
  he: heTranslations,
};

export const useTranslation = () => {
  const { language } = useLanguage();
  const t = translationMap[language] || enTranslations;

  return { t, language };
};

