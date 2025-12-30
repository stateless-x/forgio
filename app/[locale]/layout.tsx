import { notFound } from 'next/navigation'
import { Noto_Sans_Thai, Noto_Sans } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { locales } from '@/i18n'
import type { Metadata } from 'next'

const notoSansThai = Noto_Sans_Thai({
  subsets: ['thai', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-noto-sans-thai',
  display: 'swap',
})

const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-noto-sans',
  display: 'swap',
})

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params

  const siteUrl = 'https://forgio.co'

  const metadata: Record<string, { title: string; description: string; keywords: string }> = {
    en: {
      title: 'Forgio - ERP & CRM for Manufacturing | Real-World Business Management',
      description: 'Forgio is the ERP & CRM system built for Thai manufacturers. Sync sales, inventory, and production in one dashboard. Make confident decisions with real-time data. Powered by Brainfried.co',
      keywords: 'ERP Thailand, CRM Thailand, manufacturing ERP, inventory management, production management, Thai manufacturing software, business management system, Brainfried, SME software Thailand'
    },
    th: {
      title: 'Forgio - ระบบ ERP & CRM สำหรับโรงงาน | จัดการธุรกิจแบบมืออาชีพ',
      description: 'Forgio คือระบบ ERP & CRM ที่สร้างมาเพื่อโรงงานไทย รวมการขาย สต๊อก และการผลิตไว้ในที่เดียว ตัดสินใจด้วยข้อมูลแบบเรียลไทม์ Powered by Brainfried.co',
      keywords: 'ERP ไทย, CRM ไทย, ระบบโรงงาน, บริหารสต๊อก, จัดการการผลิต, โปรแกรมโรงงาน, ระบบจัดการธุรกิจ, Brainfried, โปรแกรม SME'
    }
  }

  const currentMeta = metadata[locale] || metadata.en

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: currentMeta.title,
      template: `%s | Forgio`
    },
    description: currentMeta.description,
    keywords: currentMeta.keywords,
    authors: [{ name: 'Brainfried.co', url: 'https://brainfried.co' }],
    creator: 'Brainfried.co',
    publisher: 'Brainfried.co',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: `${siteUrl}/${locale}`,
      languages: {
        'en': `${siteUrl}/en`,
        'th': `${siteUrl}/th`,
      },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'th' ? 'th_TH' : 'en_US',
      url: `${siteUrl}/${locale}`,
      siteName: 'Forgio',
      title: currentMeta.title,
      description: currentMeta.description,
      images: [
        {
          url: `${siteUrl}/og-image.png`,
          width: 1200,
          height: 630,
          alt: 'Forgio - ERP & CRM for Manufacturing',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: currentMeta.title,
      description: currentMeta.description,
      images: [`${siteUrl}/og-image.png`],
    },
    verification: {
      // Add Google Search Console verification when available
      // google: 'your-google-verification-code',
    },
    other: {
      'application-name': 'Forgio',
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'default',
      'apple-mobile-web-app-title': 'Forgio',
      'format-detection': 'telephone=no',
      'mobile-web-app-capable': 'yes',
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params

  if (!locales.includes(locale as any)) {
    notFound()
  }

  const messages = await getMessages()

  return (
    <html lang={locale} className={`${notoSansThai.variable} ${notoSans.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans">
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
