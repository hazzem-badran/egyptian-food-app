import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';

import en from './en.json';
import ar from './ar.json';


const deviceLocale = Localization.getLocales()[0]?.languageCode;

// eslint-disable-next-line import/no-named-as-default-member
i18n
  .use(initReactI18next) 
  .init({
    compatibilityJSON: 'v3', // حل لمشاكل التنسيق
    lng: deviceLocale === 'ar' ? 'ar' : 'en',
    fallbackLng: 'en',

    resources: {
      en: { translation: en },
      ar: { translation: ar },
    },

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
