import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Conditions Générales de Vente',
  description: 'Conditions générales de vente du site Achat Avis Trustpilot.',
  robots: { index: false, follow: false },
}

export default function CGV() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-accent transition-colors">Accueil</Link>
        <span>/</span>
        <span className="text-gray-400">CGV</span>
      </nav>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-10">Conditions Générales de Vente</h1>

      <div className="space-y-8 text-gray-400 text-sm leading-relaxed">

        <section>
          <h2 className="text-white font-semibold text-lg mb-3">1. Objet</h2>
          <p>
            Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre <strong className="text-white">Achat Avis Trustpilot</strong> (ci-après « le Prestataire ») et tout client (ci-après « le Client ») passant commande via le site <strong className="text-white">acheter-avis-trustpilot.fr</strong>.
          </p>
          <p className="mt-2">Toute commande implique l'acceptation sans réserve des présentes CGV.</p>
        </section>

        <section>
          <h2 className="text-white font-semibold text-lg mb-3">2. Services proposés</h2>
          <p>Le Prestataire propose des services de publication d'avis sur la plateforme Trustpilot, à destination des entreprises souhaitant améliorer leur réputation en ligne. Les services comprennent :</p>
          <ul className="mt-2 space-y-1 list-disc list-inside">
            <li>La publication d'avis depuis des comptes vérifiés</li>
            <li>La rédaction optionnelle des avis</li>
            <li>La garantie de remplacement pendant 12 mois</li>
          </ul>
        </section>

        <section>
          <h2 className="text-white font-semibold text-lg mb-3">3. Tarifs et paiement</h2>
          <p>
            Les prix sont indiqués en euros TTC sur le site. Le paiement s'effectue en ligne par carte bancaire (Visa, Mastercard, American Express) via un système de paiement sécurisé. Le paiement est exigible immédiatement à la commande.
          </p>
          <p className="mt-2">
            Le Prestataire se réserve le droit de modifier ses tarifs à tout moment. Les commandes sont facturées au tarif en vigueur au moment de la validation.
          </p>
        </section>

        <section>
          <h2 className="text-white font-semibold text-lg mb-3">4. Délais de livraison</h2>
          <p>
            Les délais de livraison sont indiqués à titre indicatif lors de la commande :
          </p>
          <ul className="mt-2 space-y-1 list-disc list-inside">
            <li><strong className="text-white">Livraison Standard :</strong> publication sous 2 à 3 jours ouvrés</li>
            <li><strong className="text-white">Livraison Express :</strong> publication sous 24 heures (disponible pour les packs 1 et 5 avis)</li>
          </ul>
          <p className="mt-2">
            La publication est réalisée de manière progressive et naturelle afin de garantir la pérennité des avis.
          </p>
        </section>

        <section>
          <h2 className="text-white font-semibold text-lg mb-3">5. Garantie et remplacement</h2>
          <p>
            Le Prestataire offre une garantie de remplacement de <strong className="text-white">12 mois</strong> à compter de la date de livraison. En cas de suppression d'un avis par la plateforme Trustpilot dans ce délai, le Prestataire s'engage à le remplacer gratuitement et sans démarche supplémentaire de la part du Client.
          </p>
        </section>

        <section>
          <h2 className="text-white font-semibold text-lg mb-3">6. Obligations du client</h2>
          <p>Le Client s'engage à :</p>
          <ul className="mt-2 space-y-1 list-disc list-inside">
            <li>Fournir des informations exactes lors de la commande (URL Trustpilot, instructions)</li>
            <li>Utiliser le service dans le respect des lois en vigueur dans son pays</li>
            <li>Ne pas utiliser le service à des fins frauduleuses ou contraires à l'éthique</li>
          </ul>
        </section>

        <section>
          <h2 className="text-white font-semibold text-lg mb-3">7. Responsabilité</h2>
          <p>
            Le Prestataire s'engage à mettre en œuvre tous les moyens nécessaires pour assurer la bonne exécution de ses services. Cependant, il ne saurait être tenu responsable des décisions de la plateforme Trustpilot relatives à la modération des avis, dans la mesure où ces décisions relèvent de la politique interne de ladite plateforme.
          </p>
        </section>

        <section>
          <h2 className="text-white font-semibold text-lg mb-3">8. Remboursement</h2>
          <p>
            En raison de la nature des services numériques fournis, toute commande validée et en cours de traitement n'est pas remboursable, sauf en cas de manquement avéré du Prestataire à ses obligations. Dans ce cas, le Client peut contacter notre support à <a href="mailto:contact@acheter-avis-trustpilot.fr" className="text-accent hover:underline">contact@acheter-avis-trustpilot.fr</a> pour étudier sa demande.
          </p>
        </section>

        <section>
          <h2 className="text-white font-semibold text-lg mb-3">9. Données personnelles</h2>
          <p>
            Les données personnelles collectées lors de la commande sont utilisées uniquement pour le traitement et le suivi de celle-ci. Elles ne sont pas revendues à des tiers. Pour plus d'informations, consultez notre <Link href="/confidentialite" className="text-accent hover:underline">Politique de confidentialité</Link>.
          </p>
        </section>

        <section>
          <h2 className="text-white font-semibold text-lg mb-3">10. Droit applicable et litiges</h2>
          <p>
            Les présentes CGV sont soumises au droit français. En cas de litige, une solution amiable sera recherchée en priorité. À défaut, les tribunaux compétents du ressort du siège du Prestataire seront seuls habilités à statuer.
          </p>
        </section>

        <p className="text-gray-600 text-xs pt-4 border-t border-[#1E1E1E]">Dernière mise à jour : mars 2025</p>
      </div>
    </div>
  )
}
