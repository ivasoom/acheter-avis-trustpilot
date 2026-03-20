import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mentions légales',
  description: 'Mentions légales du site Achat Avis Trustpilot.',
  robots: { index: false, follow: false },
}

export default function MentionsLegales() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-accent transition-colors">Accueil</Link>
        <span>/</span>
        <span className="text-gray-400">Mentions légales</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-10">Mentions légales</h1>

      <div className="space-y-8 text-gray-400 text-sm leading-relaxed">

        <section>
          <h2 className="text-white font-semibold text-lg mb-3">1. Éditeur du site</h2>
          <p>Le site <strong className="text-white">acheter-avis-trustpilot.fr</strong> est édité par :</p>
          <p className="mt-2">
            <strong className="text-white">Achat Avis Trustpilot</strong><br />
            Email : <a href="mailto:contact@acheter-avis-trustpilot.fr" className="text-accent hover:underline">contact@acheter-avis-trustpilot.fr</a>
          </p>
        </section>

        <section>
          <h2 className="text-white font-semibold text-lg mb-3">2. Hébergement</h2>
          <p>
            Ce site est hébergé sur des serveurs situés aux <strong className="text-white">Pays-Bas (Amsterdam, Europe)</strong>, garantissant une conformité avec la réglementation européenne en matière de données personnelles (RGPD).
          </p>
        </section>

        <section>
          <h2 className="text-white font-semibold text-lg mb-3">3. Propriété intellectuelle</h2>
          <p>
            L'ensemble des contenus présents sur le site acheter-avis-trustpilot.fr (textes, images, logos, structure) est protégé par le droit d'auteur et appartient à Achat Avis Trustpilot ou à ses partenaires. Toute reproduction, même partielle, est interdite sans autorisation préalable écrite.
          </p>
        </section>

        <section>
          <h2 className="text-white font-semibold text-lg mb-3">4. Responsabilité</h2>
          <p>
            Achat Avis Trustpilot s'efforce de maintenir les informations publiées sur ce site à jour et exactes. Cependant, nous ne pouvons garantir l'exactitude, la complétude ou l'actualité des informations diffusées. L'utilisation des informations et contenus disponibles sur ce site se fait sous l'entière responsabilité de l'utilisateur.
          </p>
        </section>

        <section>
          <h2 className="text-white font-semibold text-lg mb-3">5. Liens hypertextes</h2>
          <p>
            Le site peut contenir des liens vers des sites tiers. Achat Avis Trustpilot n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu ou à leurs pratiques en matière de données personnelles.
          </p>
        </section>

        <section>
          <h2 className="text-white font-semibold text-lg mb-3">6. Droit applicable</h2>
          <p>
            Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux français seront seuls compétents.
          </p>
        </section>

        <p className="text-gray-600 text-xs pt-4 border-t border-[#1E1E1E]">Dernière mise à jour : mars 2025</p>
      </div>
    </div>
  )
}
