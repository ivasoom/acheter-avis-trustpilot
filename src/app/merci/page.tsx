import Link from 'next/link'
import type { Metadata } from 'next'
import { CheckCircle, Clock, Mail, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Merci pour votre commande !',
  description: 'Votre commande d\'avis Trustpilot a bien été reçue. Nous la traitons dès maintenant.',
  robots: { index: false, follow: false },
}

const NEXT_STEPS = [
  {
    icon: Mail,
    title: 'Confirmation email',
    description: 'Vous allez recevoir un email de confirmation avec le récapitulatif de votre commande dans les prochaines minutes.',
  },
  {
    icon: Clock,
    title: 'Traitement sous 2h',
    description: 'Notre équipe prend en charge votre commande. Vous serez notifié par email dès que la publication commence.',
  },
  {
    icon: Zap,
    title: 'Publication des avis',
    description: 'Vos avis seront publiés selon le mode de livraison choisi : sous 24h (Express) ou sur 2-3 jours (Standard).',
  },
]

export default function MerciPage() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-2xl w-full text-center">
        {/* Success icon */}
        <div className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle className="w-14 h-14 text-accent" />
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
          Merci pour votre commande !
        </h1>
        <p className="text-gray-400 text-lg mb-12 leading-relaxed">
          Votre paiement a bien été reçu. Notre équipe traite votre commande et vous contactera par email très prochainement.
        </p>

        {/* Next steps */}
        <div className="bg-surface border border-[#1E1E1E] rounded-2xl p-8 mb-10 text-left">
          <h2 className="text-white font-bold text-xl mb-6 text-center">Prochaines étapes</h2>
          <div className="space-y-6">
            {NEXT_STEPS.map(({ icon: Icon, title, description }, i) => (
              <div key={title} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm mb-1">
                    <span className="text-accent mr-2">{String(i + 1).padStart(2, '0')}.</span>
                    {title}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Important info */}
        <div className="bg-accent/10 border border-accent/30 rounded-xl p-5 mb-10 text-left">
          <p className="text-accent font-semibold text-sm mb-2">Information importante</p>
          <p className="text-gray-400 text-sm leading-relaxed">
            Pour accélérer le traitement, envoyez l&apos;URL de votre profil Trustpilot à{' '}
            <a href="mailto:contact@acheter-avis-trustpilot.fr" className="text-accent hover:underline">
              contact@acheter-avis-trustpilot.fr
            </a>{' '}
            si vous ne l&apos;avez pas encore fournie. Précisez également le contenu des avis souhaités si vous en avez.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-accent text-black font-bold px-8 py-3 rounded-xl hover:bg-accent-hover transition-colors"
          >
            Retour à l&apos;accueil
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-surface border border-[#1E1E1E] text-white font-semibold px-8 py-3 rounded-xl hover:border-accent transition-colors"
          >
            Contacter le support
          </Link>
        </div>
      </div>
    </div>
  )
}
