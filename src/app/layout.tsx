import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { GoogleAnalytics } from '@/components/analytics/GoogleAnalytics'
import { SITE } from '@/config/site'

export const viewport: Viewport = {
  themeColor: '#00D4AA',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: {
    default: 'Acheter des Avis Trustpilot | Livraison 24h | Achat Avis Trustpilot',
    template: '%s | Achat Avis Trustpilot',
  },
  description: 'Achetez des avis Trustpilot depuis de vrais comptes français. Livraison en 24h. Garantie 1 an. Indétectable. +2000 clients satisfaits. Satisfait ou remboursé.',
  keywords: SITE.keywords,
  authors: [{ name: 'Achat Avis Trustpilot' }],
  creator: 'Achat Avis Trustpilot',
  publisher: 'Achat Avis Trustpilot',
  metadataBase: new URL(SITE.url),
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: SITE.url,
    siteName: SITE.name,
    title: 'Acheter des Avis Trustpilot | Achat Avis Trustpilot',
    description: SITE.description,
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Achat Avis Trustpilot — Vrais comptes français, livraison 24h',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Acheter des Avis Trustpilot | Achat Avis Trustpilot',
    description: SITE.description,
    images: ['/opengraph-image'],
  },
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
    canonical: SITE.url,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16 32x32' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <GoogleAnalytics />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
