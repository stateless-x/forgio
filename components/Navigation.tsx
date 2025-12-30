'use client'

import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { LanguageToggle } from './LanguageToggle'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Navigation() {
  const t = useTranslations()
  const params = useParams()
  const locale = params.locale as string
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const links = [
    { href: `/${locale}`, label: t('nav.home') },
    { href: `/${locale}/product`, label: t('nav.product') },
    { href: `/${locale}/about`, label: t('nav.about') },
    { href: `/${locale}/contact`, label: t('nav.contact') },
  ]

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-neutral-200 shadow-sm">
      {/* Gold accent line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-5 flex justify-between items-center">
        <Link href={`/${locale}`}>
          <Image
            src="/forgio.png"
            alt="Forgio"
            width={180}
            height={60}
            className="h-12 sm:h-14 md:h-16 w-auto transition-transform duration-300 hover:scale-105"
            priority
          />
        </Link>

        <div className="flex items-center gap-4 sm:gap-6">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 lg:gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-neutral-600 hover:text-gold-600 transition-colors text-sm font-semibold"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Language Toggle - Desktop */}
          <div className="hidden lg:block">
            <LanguageToggle />
          </div>

          {/* Mobile/Tablet Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-neutral-700 hover:text-gold-600 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Dropdown Menu */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="lg:hidden fixed inset-0 bg-black/5 backdrop-blur-[2px] z-40 top-[73px]"
            onClick={closeMenu}
          />

          {/* Menu Panel */}
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-2xl z-50 animate-in slide-in-from-top duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 space-y-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="block px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg text-neutral-700 hover:text-gold-600 hover:bg-gold-50 transition-all duration-200 font-semibold border-l-4 border-transparent hover:border-gold-500 rounded-r-md"
                >
                  {link.label}
                </Link>
              ))}

              {/* Language Toggle in Mobile/Tablet Menu */}
              <div className="pt-4 sm:pt-6 px-4 sm:px-6 border-t border-neutral-200">
                <LanguageToggle />
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  )
}
