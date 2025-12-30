import { getTranslations } from 'next-intl/server'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations()

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 md:pt-40 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gold-500/10 via-gold-600/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="w-24 h-1 bg-gradient-to-r from-gold-500 to-gold-600 mx-auto mb-8" />
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-[1.1] mb-6 text-neutral-900 tracking-tight">
            {t('about.hero.title')}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-neutral-700 leading-relaxed max-w-3xl mx-auto font-light">
            {t('about.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-neutral-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-neutral-900 tracking-tight">
            {t('about.story.title')}
          </h2>

          <div className="space-y-6 sm:space-y-8 text-base sm:text-lg text-neutral-700 leading-relaxed">
            <p>{t('about.story.p1')}</p>
            <p>{t('about.story.p2')}</p>
            <p>{t('about.story.p3')}</p>
            <p>{t('about.story.p4')}</p>
          </div>

          <div className="mt-10 sm:mt-12 p-6 sm:p-8 bg-gradient-to-br from-gold-500 to-gold-600 text-neutral-900 shadow-xl shadow-gold-500/20">
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-neutral-900/10" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-neutral-900/10" />
            <p className="relative text-lg sm:text-xl font-medium leading-relaxed italic">
              {t('about.story.quote')}
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-neutral-900 tracking-tight">
            {t('about.philosophy.title')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
            {['simplicity', 'trust', 'clarity', 'longterm'].map((principle) => (
              <div
                key={principle}
                className="group p-6 sm:p-8 bg-neutral-50 border border-neutral-200 hover:border-gold-500 hover:shadow-xl hover:shadow-gold-500/10 transition-all duration-300"
              >
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-neutral-900 group-hover:text-gold-600 transition-colors duration-300">
                  {t(`about.philosophy.${principle}.title`)}
                </h3>
                <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
                  {t(`about.philosophy.${principle}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brainfried Section */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-neutral-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-neutral-900 tracking-tight">
            {t('about.brainfried.title')}
          </h2>

          <div className="space-y-6 sm:space-y-8 text-base sm:text-lg text-neutral-700 leading-relaxed">
            <p>{t('about.brainfried.p1')}</p>
            <p>{t('about.brainfried.p2')}</p>
            <p>{t('about.brainfried.p3')}</p>
          </div>

          <div className="mt-10 sm:mt-12 p-6 sm:p-8 bg-white border-l-4 border-gold-500">
            <p className="text-lg sm:text-xl text-neutral-900 font-medium">
              {t('about.brainfried.mission')}
            </p>
          </div>
        </div>
      </section>

      {/* The Name Section */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-neutral-900 tracking-tight">
            {t('about.name.title')}
          </h2>

          <div className="space-y-6 sm:space-y-8 text-base sm:text-lg text-neutral-700 leading-relaxed">
            <p>{t('about.name.p1')}</p>
            <p>{t('about.name.p2')}</p>
          </div>

          <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {['heat', 'pressure', 'time'].map((element) => (
              <div
                key={element}
                className="text-center p-6 bg-neutral-50 border border-neutral-200"
              >
                <h3 className="text-lg font-bold mb-2 text-neutral-900">
                  {t(`about.name.${element}.title`)}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {t(`about.name.${element}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-neutral-900 text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-600/10 rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold-500 via-gold-600 to-transparent" />

        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 tracking-tight">
            {t('about.cta.title')}
          </h2>
          <p className="text-base sm:text-xl text-neutral-300 leading-relaxed mb-10 sm:mb-12 max-w-2xl mx-auto">
            {t('about.cta.description')}
          </p>

          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 hover:scale-105 active:scale-95 text-neutral-900 font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-gold-500/30 group"
          >
            {t('about.cta.button')}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
