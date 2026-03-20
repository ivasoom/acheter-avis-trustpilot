import { Hero } from '@/components/home/Hero'
import { ServicesGrid } from '@/components/home/ServicesGrid'
import { TrustBadges } from '@/components/home/TrustBadges'
import { HowItWorks } from '@/components/home/HowItWorks'
import { Testimonials } from '@/components/home/Testimonials'
import { FAQ } from '@/components/home/FAQ'
import { BlogPreview } from '@/components/home/BlogPreview'
import Link from 'next/link'
import { SITE } from '@/config/site'

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE.name,
  url: SITE.url,
  description: SITE.description,
  email: SITE.email,
  areaServed: 'FR',
  serviceType: 'Achat avis Trustpilot',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Est-ce que l\'achat d\'avis Trustpilot est légal ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'L\'achat d\'avis en lui-même n\'est pas interdit par la loi française. Nous utilisons de vrais comptes et rédigeons des avis authentiques.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quel est le délai de livraison des avis Trustpilot ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'La livraison standard prend 2-3 jours. La livraison express est réalisée en moins de 24 heures.',
      },
    },
    {
      '@type': 'Question',
      name: 'Proposez-vous une garantie sur les avis Trustpilot achetés ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, nous offrons une garantie de remplacement de 12 mois sur tous nos avis Trustpilot.',
      },
    },
  ],
}

export default function HomePage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Hero />
      <ServicesGrid />
      <TrustBadges />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <BlogPreview />

      {/* Final CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-accent rounded-3xl p-10 sm:p-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-black mb-4">
              Prêt à booster votre réputation Trustpilot ?
            </h2>
            <p className="text-black/70 text-lg mb-8 max-w-xl mx-auto">
              Rejoignez +2 000 entreprises françaises qui nous font confiance. Commandez maintenant et recevez vos avis dès demain.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#services"
                className="inline-flex items-center justify-center gap-2 bg-black text-white font-bold text-lg px-10 py-4 rounded-xl hover:bg-black/80 transition-all duration-200"
              >
                Commander maintenant →
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-black text-black font-semibold text-lg px-10 py-4 rounded-xl hover:bg-black/10 transition-all duration-200"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
