import { Shield, Zap, RefreshCw, CreditCard, PenTool, Flag } from 'lucide-react'

const BADGES = [
  {
    icon: Flag,
    title: 'Comptes 100% français',
    description: 'Tous nos profils sont de vrais comptes français avec historique d\'activité. Aucun faux compte étranger.',
  },
  {
    icon: Shield,
    title: 'Indétectable',
    description: 'Publication depuis des IP résidentielles françaises. Comportement naturel simulé pour éviter toute détection.',
  },
  {
    icon: RefreshCw,
    title: 'Garantie 1 an',
    description: 'Si un avis est supprimé dans les 12 mois suivant la commande, nous le remplaçons gratuitement.',
  },
  {
    icon: Zap,
    title: 'Livraison rapide',
    description: 'Option express disponible pour une publication en moins de 24h. Standard en 2-3 jours pour plus de naturel.',
  },
  {
    icon: PenTool,
    title: 'Rédaction offerte',
    description: 'Notre équipe rédige des avis personnalisés pour votre secteur si vous ne souhaitez pas les fournir.',
  },
  {
    icon: CreditCard,
    title: 'Paiement 100% sécurisé',
    description: 'Paiement par carte bancaire via Stripe. Cryptage SSL. Remboursement si non satisfait.',
  },
]

export function TrustBadges() {
  return (
    <section className="py-20 px-4 bg-surface/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">Nos garanties</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-4">
            Pourquoi nous faire confiance ?
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Notre service est conçu pour vous offrir les meilleurs résultats en toute sécurité.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BADGES.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-surface border border-[#1E1E1E] rounded-2xl p-6 hover:border-accent/50 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <Icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
