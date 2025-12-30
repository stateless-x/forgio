'use client'

import { useLocale } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'
import { Globe } from 'lucide-react'

export function LanguageToggle() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const toggleLanguage = () => {
    const newLocale = locale === 'th' ? 'en' : 'th'
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`)
    router.push(newPath)
  }

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-4 py-2 text-neutral-700 hover:text-gold-600 transition-all duration-300 text-sm font-semibold border-2 border-neutral-300 hover:border-gold-500 hover:bg-gold-50 rounded-md"
      aria-label="Toggle language"
    >
      <Globe size={18} />
      <span>{locale === 'th' ? 'EN' : 'TH'}</span>
    </button>
  )
}
