import { getRequestConfig } from 'next-intl/server'

export const locales = ['th', 'en'] as const
export type Locale = (typeof locales)[number]

export default getRequestConfig(async ({ requestLocale }) => {
  // Get the locale from the request
  let locale = await requestLocale

  // Ensure it's a valid locale
  if (!locale || !locales.includes(locale as Locale)) {
    locale = 'th'
  }

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default
  }
})
