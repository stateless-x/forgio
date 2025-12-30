import { useTranslations } from 'next-intl'
import Link from 'next/link'

export function Footer() {
  const t = useTranslations('footer')

  return (
    <footer className="py-12 sm:py-16 px-4 sm:px-6 bg-black text-neutral-400">
      <div className="max-w-5xl mx-auto space-y-4 sm:space-y-6">
        <div className="text-sm leading-relaxed max-w-2xl">
          {t('forgio')}
        </div>
        <div className="text-xs sm:text-sm text-neutral-600">
          {t('brainfried')}{' '}
          <Link
            href="https://brainfried.co"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="text-gold-500 hover:text-gold-400 transition-colors underline decoration-gold-500/30 hover:decoration-gold-400 underline-offset-2"
          >
            Brainfried.co
          </Link>
        </div>
      </div>
    </footer>
  )
}
