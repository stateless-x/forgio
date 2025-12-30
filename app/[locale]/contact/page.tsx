import { getTranslations } from 'next-intl/server'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { ContactForm } from '@/components/ContactForm'
import { ArrowRight } from 'lucide-react'

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
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
            {t('contact.hero.title')}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-neutral-700 leading-relaxed max-w-3xl mx-auto font-light">
            {t('contact.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-neutral-50">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="bg-white p-8 sm:p-10 lg:p-12 border border-neutral-200 shadow-lg">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-neutral-900">
                {t('contact.form.heading')}
              </h2>
              <p className="text-base sm:text-lg text-neutral-600 mb-8">
                {t('contact.form.description')}
              </p>

              {/* Use dark variant for standalone page */}
              <div className="bg-neutral-900 p-6 sm:p-8 -mx-8 sm:-mx-10 lg:-mx-12 -mb-8 sm:-mb-10 lg:-mb-12">
                <ContactForm />
              </div>
            </div>

            {/* Alternative Methods */}
            <div className="space-y-8">
              {/* LINE Contact */}
              <div className="bg-white p-8 sm:p-10 border border-neutral-200 shadow-lg">
                <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-neutral-900">
                  {t('contact.line.heading')}
                </h2>
                <p className="text-base sm:text-lg text-neutral-600 mb-8">
                  {t('contact.line.description')}
                </p>
                <a
                  href="https://line.me/ti/p/~bobroach"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#06C755] hover:bg-[#05b34d] hover:scale-105 active:bg-[#04a246] text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-green-500/20 w-full sm:w-auto group"
                >
                  {t('contact.line.button')}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Info Box */}
              <div className="bg-gradient-to-br from-gold-500 to-gold-600 p-8 sm:p-10 shadow-xl shadow-gold-500/20">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-neutral-900">
                  {t('contact.info.heading')}
                </h3>
                <div className="space-y-3 text-base sm:text-lg text-neutral-900 leading-relaxed">
                  <p>{t('contact.info.response')}</p>
                  <p>{t('contact.info.consultation')}</p>
                </div>
              </div>

              {/* Email Contact */}
              <div className="bg-white p-8 sm:p-10 border border-neutral-200">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-neutral-900">
                  {t('contact.email.heading')}
                </h3>
                <div className="space-y-3">
                  <p className="text-base text-neutral-600">{t('contact.email.description')}</p>
                  <a
                    href="mailto:askpurin@pm.me"
                    className="inline-flex items-center gap-2 text-lg font-semibold text-gold-600 hover:text-gold-700 transition-colors"
                  >
                    askpurin@pm.me
                  </a>
                </div>
              </div>

              {/* Location/Details */}
              <div className="bg-white p-8 sm:p-10 border border-neutral-200">
                <h3 className="text-xl sm:text-2xl font-bold mb-4 text-neutral-900">
                  {t('contact.details.heading')}
                </h3>
                <div className="space-y-2 text-base text-neutral-600">
                  <p className="font-medium text-neutral-900">{t('contact.details.company')}</p>
                  <p>{t('contact.details.location')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-12 sm:mb-16 text-neutral-900 tracking-tight text-center">
            {t('contact.faq.title')}
          </h2>

          <div className="space-y-6 sm:space-y-8">
            {['pricing', 'demo', 'implementation', 'support'].map((item) => (
              <div
                key={item}
                className="p-6 sm:p-8 bg-neutral-50 border border-neutral-200 hover:border-gold-500/50 transition-all duration-300"
              >
                <h3 className="text-lg sm:text-xl font-bold mb-3 text-neutral-900">
                  {t(`contact.faq.${item}.question`)}
                </h3>
                <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
                  {t(`contact.faq.${item}.answer`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
