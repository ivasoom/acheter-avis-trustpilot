import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { SITE } from '@/config/site'

export const metadata: Metadata = {
  title: {
    default: 'Acheter des Avis Trustpilot | Livraison 24h | AvisExpert',
    template: '%s | AvisExpert'
  },
  description: 'Achetez des avis Trustpilot depuis de vrais comptes français. Livraison en 24h. Garantie 1 an. Indétectable. +2000 clients satisfaits. Satisfait ou remboursé.',
  keywords: SITE.keywords,
  authors: [{ name: 'AvisExpert' }],
  creator: 'AvisExpert',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: SITE.url,
    siteName: SITE.name,
    title: 'Acheter des Avis Trustpilot | AvisExpert',
    description: SITE.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Acheter des Avis Trustpilot | AvisExpert',
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: SITE.url,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
