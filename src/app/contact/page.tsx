import type { Metadata } from 'next'
import { SITE } from '@/config/site'
import { ContactForm } from './ContactForm'

export const metadata: Metadata = {
  title: 'Contact - AvisExpert',
  description: 'Contactez notre équipe pour toute question sur nos offres d\'avis Trustpilot. Réponse sous 2h, support 7j/7.',
  alternates: {
    canonical: `${SITE.url}/contact`,
  },
}

export default function ContactPage() {
  return <ContactForm />
}
