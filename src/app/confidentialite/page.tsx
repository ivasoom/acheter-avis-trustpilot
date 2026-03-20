import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Politique de confidentialité',
  description: 'Politique de confidentialité et traitement des données personnelles — Achat Avis Trustpilot.',
  robots: { index: false, follow: false },
}

export default function Confidentialite() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-accent transition-colors">Accueil</Link>
        <span>/</span>
        <span className="text-gray-400">Politique de confidentialité</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-10">Politique de confidentialité</h1>

      <div className="space-y-8 text-gray-400 text-sm leading-relaxed">

        <section>
          <h2 className="text-white font-semibold text-lg mb-3">1. Responsable du traitement</h2>
          <p>
            Le responsable du traitement des données personnelles collectées sur le site <strong className="text-white">acheter-avis-trustpilot.fr</strong> est <strong className="text-white">Achat Avis Trustpilot</strong>, joignable à l'adresse : <a href="mailto:contact@acheter-avis-trustpilot.fr" className="text-accent hover:underline">contact@acheter-avis-trustpilot.fr</a>.
          </p>
        </section>

        <section>
          <h2 className="text-white font-semibold text-lg mb-3">2. Données collectées</h2>
          <p>Nous collectons uniquement les données nécessaires à la bonne exécution de nos services :</p>
          <ul className="mt-2 space-y-1 list-disc list-inside">
            <li><strong className="text-white">Lors d'une commande :</strong> nom, adresse email, URL Trustpilot de l'entreprise, instructions sur les avis</li>
            <li><strong className="text-white">Lors d'un contact :</strong> nom, adresse email, contenu du message</li>
            <li><strong className="text-white">Données de navigation :</strong> adresse IP, pages visitées, durée de visite (via cookies analytiques anonymisés)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-white font-semibold text-lg mb-3">3. Finalités du traitement</h2>
          <p>Vos données sont utilisées exclusivement pour :</p>
          <ul className="mt-2 space-y-1 list-disc list-inside">
            <li>Traiter et suivre vos commandes</li>
            <li>Vous envoyer des confirmations de commande et mises à jour par email</li>
            <li>Répondre à vos demandes de contact et de support</li>
            <li>Améliorer nos services et l'expérience utilisateur du site</li>
          </ul>
        </section>

        <section>
          <h2 className="text-white font-semibold text-lg mb-3">4. Base légale</h2>
          <p>
            Le traitement de vos données repose sur l'exécution d'un contrat (traitement de la commande) et, le cas échéant, sur votre consentement (newsletters, cookies analytiques).
          </p>
        </section>

        <section>
          <h2 className="text-white font-semibold text-lg mb-3">5. Durée de conservation</h2>
          <p>
            Vos données sont conservées pendant la durée strictement nécessaire à la réalisation des finalités décrites ci-dessus :
          </p>
          <ul className="mt-2 space-y-1 list-disc list-inside">
            <li>Données de commande : 3 ans à compter de la dernière commande</li>
            <li>Données de contact : 1 an à compter de votre demande</li>
            <li>Données de navigation : 13 mois maximum</li>
          </ul>
        </section>

        <section>
          <h2 className="text-white font-semibold text-lg mb-3">6. Partage des données</h2>
          <p>
            Nous ne vendons, ne louons et ne partageons pas vos données personnelles avec des tiers à des fins commerciales. Vos données peuvent être transmises à nos sous-traitants techniques (hébergement, traitement des paiements) dans le strict cadre de l'exécution du service, sous contrat de confidentialité.
          </p>
          <p className="mt-2">
            Le paiement est traité par un prestataire de paiement sécurisé. Achat Avis Trustpilot ne stocke jamais vos informations bancaires.
          </p>
        </section>

        <section>
          <h2 className="text-white font-semibold text-lg mb-3">7. Vos droits</h2>
          <p>Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :</p>
          <ul className="mt-2 space-y-1 list-disc list-inside">
            <li><strong className="text-white">Droit d'accès</strong> : obtenir une copie de vos données personnelles</li>
            <li><strong className="text-white">Droit de rectification</strong> : corriger des données inexactes</li>
            <li><strong className="text-white">Droit à l'effacement</strong> : demander la suppression de vos données</li>
            <li><strong className="text-white">Droit d'opposition</strong> : vous opposer au traitement de vos données</li>
            <li><strong className="text-white">Droit à la portabilité</strong> : recevoir vos données dans un format structuré</li>
          </ul>
          <p className="mt-2">
            Pour exercer ces droits, contactez-nous à <a href="mailto:contact@acheter-avis-trustpilot.fr" className="text-accent hover:underline">contact@acheter-avis-trustpilot.fr</a>. Nous répondrons dans un délai maximum de 30 jours.
          </p>
        </section>

        <section>
          <h2 className="text-white font-semibold text-lg mb-3">8. Cookies</h2>
          <p>
            Le site utilise des cookies strictement nécessaires au bon fonctionnement (session, préférences) et des cookies analytiques anonymisés pour mesurer l'audience. Aucun cookie publicitaire ou de tracking tiers n'est utilisé.
          </p>
          <p className="mt-2">
            Vous pouvez désactiver les cookies depuis les paramètres de votre navigateur, bien que cela puisse affecter certaines fonctionnalités du site.
          </p>
        </section>

        <section>
          <h2 className="text-white font-semibold text-lg mb-3">9. Sécurité</h2>
          <p>
            Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre tout accès non autorisé, perte ou destruction. Notre site est sécurisé par le protocole HTTPS et les communications sont chiffrées.
          </p>
        </section>

        <section>
          <h2 className="text-white font-semibold text-lg mb-3">10. Réclamation</h2>
          <p>
            Si vous estimez que le traitement de vos données personnelles ne respecte pas la réglementation applicable, vous pouvez introduire une réclamation auprès de la <strong className="text-white">CNIL</strong> (Commission Nationale de l'Informatique et des Libertés) : <span className="text-accent">cnil.fr</span>.
          </p>
        </section>

        <p className="text-gray-600 text-xs pt-4 border-t border-[#1E1E1E]">Dernière mise à jour : mars 2025</p>
      </div>
    </div>
  )
}
