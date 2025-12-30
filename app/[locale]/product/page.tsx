import { getTranslations } from 'next-intl/server'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle2,
  ShoppingCart,
  Factory,
  Users,
  UserCircle,
  DollarSign,
  FileCheck,
  Lightbulb,
  TrendingUp,
  Bell,
  Target
} from 'lucide-react'

export default async function ProductPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations()

  const areas = [
    { key: 'sales', icon: ShoppingCart },
    { key: 'operations', icon: Factory },
    { key: 'customers', icon: Users },
    { key: 'people', icon: UserCircle },
    { key: 'finance', icon: DollarSign },
    { key: 'approvals', icon: FileCheck }
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 md:pt-40 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gold-500/10 via-gold-600/5 to-transparent" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="w-24 h-1 bg-gradient-to-r from-gold-500 to-gold-600 mx-auto mb-8" />
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-[1.1] mb-6 text-neutral-900 tracking-tight">
            {t('product.hero.title')}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-neutral-700 leading-relaxed max-w-3xl mx-auto font-light">
            {t('product.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Feature Areas */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-neutral-50">
        <div className="max-w-7xl mx-auto space-y-20 sm:space-y-24 md:space-y-32">
          {areas.map(({ key: area, icon: Icon }, index) => (
            <div
              key={area}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gold-500/10 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-gold-600" />
                  </div>
                  <div className="px-4 py-1 bg-gold-500/10 border border-gold-500/30 text-gold-700 text-sm font-semibold">
                    {t(`product.areas.${area}.label`)}
                  </div>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-neutral-900">
                  {t(`product.areas.${area}.title`)}
                </h2>
                <p className="text-base sm:text-lg text-neutral-600 leading-relaxed mb-6 sm:mb-8">
                  {t(`product.areas.${area}.description`)}
                </p>

                {/* Features list */}
                <ul className="space-y-3 sm:space-y-4">
                  {['feature1', 'feature2', 'feature3', 'feature4'].map((feature) => (
                    <li key={feature} className="flex gap-3 items-start">
                      <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-gold-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                        {t(`product.areas.${area}.${feature}`)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Visual placeholder - You can replace this with actual images/screenshots later */}
              <div
                className={`relative h-64 sm:h-80 lg:h-96 bg-gradient-to-br from-neutral-100 to-neutral-200 border border-neutral-300 flex items-center justify-center ${
                  index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent" />
                <div className="relative text-center p-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gold-500/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gold-500/40 rounded-full" />
                  </div>
                  <p className="text-sm text-neutral-500">
                    {t('product.visual.placeholder')}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Assistant Feature Highlight */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block px-4 py-1 bg-gold-500/10 border border-gold-500/30 text-gold-700 text-sm font-semibold mb-4">
              {t('product.assistant.label')}
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-6 text-neutral-900">
              {t('product.assistant.title')}
            </h2>
            <p className="text-base sm:text-xl text-neutral-600 leading-relaxed max-w-3xl mx-auto">
              {t('product.assistant.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {[
              { key: 'insights', icon: Lightbulb },
              { key: 'patterns', icon: TrendingUp },
              { key: 'alerts', icon: Bell },
              { key: 'recommendations', icon: Target }
            ].map(({ key: feature, icon: Icon }) => (
              <div
                key={feature}
                className="p-6 sm:p-8 bg-neutral-50 border border-neutral-200 hover:border-gold-500/50 hover:shadow-lg hover:shadow-gold-500/5 transition-all duration-300"
              >
                <div className="w-12 h-12 mb-4 bg-gold-500/10 rounded-lg flex items-center justify-center">
                  <Icon className="w-6 h-6 text-gold-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 text-neutral-900">
                  {t(`product.assistant.features.${feature}.title`)}
                </h3>
                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                  {t(`product.assistant.features.${feature}.description`)}
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
            {t('product.cta.title')}
          </h2>
          <p className="text-base sm:text-xl text-neutral-300 leading-relaxed mb-10 sm:mb-12 max-w-2xl mx-auto">
            {t('product.cta.description')}
          </p>

          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 hover:scale-105 active:scale-95 text-neutral-900 font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-gold-500/30 group"
          >
            {t('product.cta.button')}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
