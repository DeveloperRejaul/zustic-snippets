
import { createI18n } from 'zustic/i18n';

import bn from './lang/bn.json' 
import en from './lang/en.json' 


type Language = 'en' | 'bn'

const translations = {
  en,
  bn
};

export const {
  i18n,
  useTranslation
} = createI18n<typeof en, Language>({
  initialLan: 'en',
  resource: (lan) => Promise.resolve(translations[lan]),
});