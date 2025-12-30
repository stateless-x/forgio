import { getTranslations } from 'next-intl/server'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle2,
  Eye,
  Layers,
  Sparkles,
  ShoppingCart,
  Factory,
  Users,
  UserCircle,
  DollarSign,
  FileCheck
} from 'lucide-react'

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations()

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 md:pt-40 pb-20 sm:pb-28 md:pb-36 px-4 sm:px-6 overflow-hidden">
        {/* Enhanced gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gold-500/10 via-gold-600/5 to-transparent" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold-500/5 to-transparent transform translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2 animate-pulse" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-gold-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        <div className="relative max-w-6xl mx-auto text-center">
          <div className="w-32 h-1.5 bg-gradient-to-r from-gold-500 to-gold-600 mx-auto mb-10 sm:mb-14 rounded-full" />

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.05] mb-8 sm:mb-10 text-neutral-900 tracking-tighter px-2">
            {t('hero.title')}
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-neutral-600 leading-relaxed max-w-4xl mx-auto font-normal px-2 mb-12 sm:mb-16">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-stretch sm:items-center w-full sm:w-auto px-4 sm:px-0">
            <Link
              href={`/${locale}/product`}
              className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 py-4 sm:px-10 sm:py-5 text-base sm:text-lg bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 hover:scale-105 active:scale-95 text-white font-bold transition-all duration-300 shadow-xl sm:shadow-2xl hover:shadow-gold-500/50 group rounded-lg w-full sm:w-auto"
            >
              {t('hero.cta')}
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 py-4 sm:px-10 sm:py-5 text-base sm:text-lg border-2 border-neutral-900 hover:bg-neutral-900 hover:text-white text-neutral-900 font-bold transition-all duration-300 hover:shadow-xl rounded-lg hover:scale-105 active:scale-95 w-full sm:w-auto"
            >
              {t('hero.contact')}
            </Link>
          </div>

          {/* Social Proof */}
          {/* <div className="mt-12 sm:mt-16 md:mt-20 pt-6 sm:pt-8 border-t border-neutral-200/50 px-4">
            <p className="text-xs sm:text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-4 sm:mb-6 animate-pulse">
              Trusted by Thai Manufacturers
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 md:gap-12 opacity-40 grayscale hover:opacity-60 transition-opacity duration-500">
              <div className="w-20 h-10 sm:w-24 sm:h-12 bg-neutral-300 rounded hover:bg-neutral-400 hover:scale-110 transition-all duration-300 cursor-pointer"></div>
              <div className="w-20 h-10 sm:w-24 sm:h-12 bg-neutral-300 rounded hover:bg-neutral-400 hover:scale-110 transition-all duration-300 cursor-pointer" style={{ transitionDelay: '50ms' }}></div>
              <div className="w-20 h-10 sm:w-24 sm:h-12 bg-neutral-300 rounded hover:bg-neutral-400 hover:scale-110 transition-all duration-300 cursor-pointer" style={{ transitionDelay: '100ms' }}></div>
              <div className="w-20 h-10 sm:w-24 sm:h-12 bg-neutral-300 rounded hover:bg-neutral-400 hover:scale-110 transition-all duration-300 cursor-pointer" style={{ transitionDelay: '150ms' }}></div>
            </div>
          </div> */}
        </div>
      </section>

      {/* Value Proposition - 3 key points */}
      <section className="py-20 sm:py-28 md:py-36 px-4 sm:px-6 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24 px-4">
            <div className="w-24 sm:w-32 h-1 sm:h-1.5 bg-gradient-to-r from-gold-500 to-gold-600 mx-auto mb-6 sm:mb-10 md:mb-12 rounded-full animate-pulse" />
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 sm:mb-6 text-neutral-900 tracking-tight leading-[1.05]">
              {t('home.value.title')}
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              {t('home.value.subtitle', { default: 'Built for Thai manufacturers who demand excellence' })}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
            {[
              { key: 'clarity', icon: Eye },
              { key: 'unified', icon: Layers },
              { key: 'smart', icon: Sparkles }
            ].map(({ key, icon: Icon }) => (
              <div
                key={key}
                className="group text-center p-6 sm:p-8 md:p-10 bg-white border-2 border-neutral-200 hover:border-gold-500 hover:shadow-2xl hover:shadow-gold-500/20 transition-all duration-300 hover:-translate-y-2 rounded-xl"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 sm:mb-8 bg-gradient-to-br from-gold-500/20 to-gold-600/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-gold-600" />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 md:mb-5 text-neutral-900 group-hover:text-gold-600 transition-colors duration-300">
                  {t(`home.value.${key}.title`)}
                </h3>
                <p className="text-base sm:text-lg md:text-xl text-neutral-600 leading-relaxed">
                  {t(`home.value.${key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Section - Philosophy */}
      <section className="relative py-16 sm:py-20 md:py-28 lg:py-36 px-4 sm:px-6 bg-white overflow-hidden">
        {/* Multiple animated background orbs */}
        <div className="absolute top-1/4 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-gold-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-0 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-gold-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

        <div className="relative max-w-5xl mx-auto text-center">
          <div className="w-24 sm:w-32 h-1 sm:h-1.5 bg-gradient-to-r from-gold-500 to-gold-600 mx-auto mb-6 sm:mb-10 md:mb-14 rounded-full" />

          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 sm:mb-8 md:mb-12 text-neutral-900 tracking-tight leading-[1.05] px-2">
            {t('what.title')}
          </h2>

          <div className="space-y-4 sm:space-y-6 md:space-y-8 text-base sm:text-lg md:text-2xl lg:text-3xl text-neutral-700 leading-relaxed max-w-4xl mx-auto font-light px-4">
            <p className="transform hover:scale-[1.02] transition-transform duration-300">{t('what.intro')}</p>
            <p className="transform hover:scale-[1.02] transition-transform duration-300">{t('what.description')}</p>
          </div>

          {/* Enhanced Philosophy Callout */}
          <div className="relative mt-10 sm:mt-14 md:mt-20 p-6 sm:p-10 md:p-14 bg-gradient-to-br from-gold-500 to-gold-600 text-neutral-900 max-w-4xl mx-auto shadow-xl sm:shadow-2xl shadow-gold-500/30 hover:shadow-gold-500/50 transition-all duration-500 hover:scale-[1.02] rounded-xl sm:rounded-2xl group overflow-hidden">
            {/* Animated corner accents */}
            <div className="absolute top-0 left-0 w-0 h-0.5 sm:h-1 bg-neutral-900/20 group-hover:w-16 sm:group-hover:w-24 transition-all duration-500" />
            <div className="absolute top-0 left-0 w-0.5 sm:w-1 h-0 bg-neutral-900/20 group-hover:h-16 sm:group-hover:h-24 transition-all duration-500" />
            <div className="absolute bottom-0 right-0 w-0 h-0.5 sm:h-1 bg-neutral-900/20 group-hover:w-16 sm:group-hover:w-24 transition-all duration-500" />
            <div className="absolute bottom-0 right-0 w-0.5 sm:w-1 h-0 bg-neutral-900/20 group-hover:h-16 sm:group-hover:h-24 transition-all duration-500" />

            {/* Sparkle effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

            <p className="relative text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-relaxed tracking-tight">
              {t('what.philosophy')}
            </p>
          </div>
        </div>
      </section>

      {/* Quick Scope Overview - DARK SECTION */}
      <section className="relative py-16 sm:py-20 md:py-28 lg:py-36 px-4 sm:px-6 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djItMnptMC0ydi0yIDJ6bS0yIDB2LTItMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>
        <div className="absolute top-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-gold-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-gold-600/5 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto">
          <div className="max-w-3xl mb-10 sm:mb-14 md:mb-16 lg:mb-20 text-center mx-auto px-4">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black mb-4 sm:mb-6 md:mb-8 text-white tracking-tight">
              {t('scope.title')}
            </h2>
            <p className="text-base sm:text-lg md:text-2xl text-neutral-300 leading-relaxed">
              {t('scope.intro')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              { key: 'sales', icon: ShoppingCart },
              { key: 'operations', icon: Factory },
              { key: 'customers', icon: Users },
              { key: 'people', icon: UserCircle },
              { key: 'finance', icon: DollarSign },
              { key: 'approvals', icon: FileCheck }
            ].map(({ key: area, icon: Icon }) => (
              <div
                key={area}
                className="group relative bg-white/5 backdrop-blur-sm p-6 sm:p-8 md:p-10 border-2 border-white/10 hover:border-gold-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-gold-500/20 hover:-translate-y-2 rounded-xl hover:bg-white/10"
              >
                <div className="absolute top-0 left-0 w-0 h-1 sm:h-1.5 bg-gradient-to-r from-gold-500 to-gold-600 group-hover:w-full transition-all duration-500 rounded-full" />
                <div className="w-12 h-12 sm:w-14 sm:h-14 mb-4 sm:mb-6 bg-gold-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-gold-500/20">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-gold-400" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 text-white group-hover:text-gold-400 transition-colors duration-300">
                  {t(`scope.areas.${area}.title`)}
                </h3>
                <p className="text-sm sm:text-base md:text-lg text-neutral-300 leading-relaxed">
                  {t(`scope.areas.${area}.description`)}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 sm:mt-12 md:mt-16 text-center px-4">
            <Link
              href={`/${locale}/product`}
              className="inline-flex items-center gap-2 sm:gap-3 px-8 py-4 sm:px-10 sm:py-5 text-base sm:text-lg bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white font-bold rounded-lg shadow-2xl hover:shadow-gold-500/50 hover:scale-105 active:scale-95 transition-all duration-300 group w-full sm:w-auto"
            >
              {t('home.learnMore')}
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section - ENHANCED */}
      <section className="relative py-16 sm:py-24 md:py-32 lg:py-40 px-4 sm:px-6 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 text-white overflow-hidden">
        {/* Dramatic background effects */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMSI+PHBhdGggZD0iTTM2IDM0djItMnptMC0ydi0yIDJ6bS0yIDB2LTItMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50\"></div>
        <div className="absolute top-0 right-0 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-gold-500/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-gold-600/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-gold-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />

        {/* Top gradient accent */}
        <div className="absolute top-0 left-0 w-full h-1 sm:h-2 bg-gradient-to-r from-transparent via-gold-500 to-transparent animate-pulse" />

        <div className="relative max-w-5xl mx-auto text-center">
          {/* Premium badge */}
          <div className="inline-block mb-6 sm:mb-8 px-4 py-1.5 sm:px-6 sm:py-2 border-2 border-gold-500/30 text-gold-400 text-xs sm:text-sm font-bold uppercase tracking-widest hover:border-gold-500 hover:bg-gold-500/10 transition-all duration-300 rounded-full">
            {t('cta.badge', { default: 'Get Started Today' })}
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 sm:mb-6 md:mb-8 tracking-tight leading-[1.05] text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-neutral-300 px-2">
            {t('cta.title')}
          </h2>

          <p className="text-base sm:text-lg md:text-2xl lg:text-3xl text-neutral-300 leading-relaxed mb-10 sm:mb-14 md:mb-16 max-w-3xl mx-auto font-light px-4">
            {t('cta.description')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 md:gap-6 justify-center items-stretch sm:items-center px-4">
            <Link
              href={`/${locale}/contact`}
              className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 px-8 py-4 sm:px-12 sm:py-6 text-base sm:text-xl bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-neutral-900 font-black transition-all duration-300 shadow-2xl hover:shadow-gold-500/50 rounded-xl overflow-hidden hover:scale-110 active:scale-95 w-full sm:w-auto"
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <span className="relative">{t('cta.getStarted')}</span>
              <ArrowRight className="relative w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>

            <a
              href="https://line.me/ti/p/~bobroach"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 sm:gap-3 px-8 py-4 sm:px-12 sm:py-6 text-base sm:text-xl bg-[#06C755] hover:bg-[#05b34d] active:bg-[#04a246] text-white font-bold transition-all duration-300 shadow-2xl hover:shadow-green-500/40 rounded-xl hover:scale-110 active:scale-95 w-full sm:w-auto"
            >
              <span>{t('cta.line')}</span>
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 sm:mt-16 md:mt-20 pt-6 sm:pt-8 border-t border-neutral-700/50 px-4">
            <p className="text-xs sm:text-sm text-neutral-400 uppercase tracking-wider mb-3 sm:mb-4">
              {t('cta.trust', { default: 'Trusted by manufacturing leaders across Thailand' })}
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 text-neutral-500">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-gold-500 flex-shrink-0" />
                <span className="text-xs sm:text-sm">{t('cta.secure', { default: 'Secure' })}</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-neutral-700" />
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-gold-500 flex-shrink-0" />
                <span className="text-xs sm:text-sm">{t('cta.support', { default: '24/7 Support' })}</span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-neutral-700" />
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-gold-500 flex-shrink-0" />
                <span className="text-xs sm:text-sm">{t('cta.implementation', { default: 'Fast Setup' })}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
