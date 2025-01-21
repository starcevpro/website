import { createI18n } from 'vue-i18n'

import en from '../locales/en.json'
import ru from '../locales/ru.json'
import de from '../locales/de.json'

const savedLocale = localStorage.getItem('user-locale') || 'ru'

export const i18n = createI18n({
  legacy: false,
  locale: savedLocale,
  fallbackLocale: 'en',
  messages: {
    ru,
    en,
    de
  }
})
