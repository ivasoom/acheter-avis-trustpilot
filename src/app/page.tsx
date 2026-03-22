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
  contactPoint: {
    '@type': 'ContactPoint',
    email: SITE.email,
    contactType: 'customer service',
    availableLanguage: 'French',
    areaServed: 'FR',
  },
  sameAs: [
    'https://www.facebook.com/achat-avis-trustpilot',
    'https://www.linkedin.com/company/achat-avis-trustpilot',
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Achat Avis Trustpilot',
  provider: { '@type': 'Organization', name: SITE.name, url: SITE.url },
  areaServed: { '@type': 'Country', name: 'France' },
  description: 'Service d\'achat d\'avis Trustpilot depuis de vrais comptes français avec garantie 12 mois.',
  serviceType: 'Réputation en ligne',
  termsOfService: `${SITE.url}/cgv`,
  offers: {
    '@type': 'AggregateOffer',
    availability: 'https://schema.org/InStock',
    priceCurrency: 'EUR',
    lowPrice: '12.90',
    highPrice: '919.00',
    offerCount: '12',
    offers: [
      { '@type': 'Offer', name: '1 avis Trustpilot Standard', price: '12.90', priceCurrency: 'EUR' },
      { '@type': 'Offer', name: '5 avis Trustpilot Standard', price: '59.90', priceCurrency: 'EUR' },
      { '@type': 'Offer', name: '10 avis Trustpilot Standard', price: '109.90', priceCurrency: 'EUR' },
      { '@type': 'Offer', name: '25 avis Trustpilot Standard', price: '259.90', priceCurrency: 'EUR' },
      { '@type': 'Offer', name: '50 avis Trustpilot Standard', price: '499.00', priceCurrency: 'EUR' },
      { '@type': 'Offer', name: '100 avis Trustpilot Standard', price: '875.00', priceCurrency: 'EUR' },
      { '@type': 'Offer', name: '1 avis Trustpilot Express', price: '14.90', priceCurrency: 'EUR' },
      { '@type': 'Offer', name: '5 avis Trustpilot Express', price: '64.90', priceCurrency: 'EUR' },
      { '@type': 'Offer', name: '10 avis Trustpilot Express', price: '129.90', priceCurrency: 'EUR' },
      { '@type': 'Offer', name: '25 avis Trustpilot Express', price: '274.90', priceCurrency: 'EUR' },
      { '@type': 'Offer', name: '50 avis Trustpilot Express', price: '539.00', priceCurrency: 'EUR' },
      { '@type': 'Offer', name: '100 avis Trustpilot Express', price: '919.00', priceCurrency: 'EUR' },
    ],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Vos avis sont-ils détectables par Trustpilot ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Non. Nous utilisons de vrais comptes français avec un historique d\'activité, des IP résidentielles françaises, et publions les avis de manière progressive et naturelle. Notre méthode est conçue pour être indétectable et pérenne.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quel est le délai de livraison des avis Trustpilot ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Avec la livraison Standard, vos avis sont publiés progressivement sur 2 à 3 jours. Avec la livraison Express, la publication commence en moins de 24 heures. Vous êtes notifié par email à chaque publication.',
      },
    },
    {
      '@type': 'Question',
      name: 'Que se passe-t-il si un avis est supprimé ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nous offrons une garantie de remplacement de 12 mois. Si l\'un de vos avis est supprimé dans l\'année suivant votre commande, nous le remplaçons gratuitement, sans aucune démarche de votre part.',
      },
    },
    {
      '@type': 'Question',
      name: 'Dois-je fournir le contenu des avis ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'C\'est fortement conseillé, car vous connaissez mieux que quiconque votre activité et vos points forts. Cela dit, si vous ne souhaitez pas vous en occuper, notre équipe prend tout en charge et rédige des avis adaptés à votre secteur d\'activité.',
      },
    },
    {
      '@type': 'Question',
      name: 'Comment vous contacter après la commande ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Notre support est disponible 7j/7 par email à contact@achat-avis-trustpilot.fr. Nous répondons généralement sous 2 heures en journée. Vous pouvez également utiliser notre formulaire de contact.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quels sont les modes de paiement acceptés ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nous acceptons toutes les cartes bancaires (Visa, Mastercard, American Express). Le paiement est 100% sécurisé et chiffré. Apple Pay et Google Pay sont également disponibles.',
      },
    },
    {
      '@type': 'Question',
      name: 'Puis-je passer plusieurs commandes pour le même profil ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, absolument. Vous pouvez passer plusieurs commandes espacées dans le temps. Nous recommandons un délai d\'au moins 1 à 2 semaines entre chaque commande pour maintenir un rythme de publication naturel.',
      },
    },
  ],
}

export default function HomePage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

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
