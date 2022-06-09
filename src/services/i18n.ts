import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import commonEn from '../lang/en/common_en.json'

i18n.use(initReactI18next).init({
  interpolation: { escapeValue: false },
  resources: {
    en: {
      translation: commonEn,
    },
  },
  lng: 'en',
  debug: true,
})

export default i18n