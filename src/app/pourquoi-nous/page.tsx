import type { Metadata } from 'next'
import Link from 'next/link'
import { Shield, Zap, Star, Users, Clock, PenTool, RefreshCw, Flag, Check, X } from 'lucide-react'
import { SITE } from '@/config/site'

export const metadata: Metadata = {
  title: 'Pourquoi choisir Achat Avis Trustpilot pour acheter vos avis Trustpilot ?',
  description: 'Découvrez pourquoi Achat Avis Trustpilot est le service #1 en France pour acheter des avis Trustpilot. Comptes vérifiés, garantie 1 an, livraison 24h.',
  alternates: {
    canonical: `${SITE.url}/pourquoi-nous`,
  },
}

const ARGUMENTS = [
  {
    icon: Flag,
    title: 'Vrais comptes français vérifiés',
    description: 'Contrairement à nos concurrents qui utilisent des comptes étrangers ou des bots, tous nos profils sont de vrais Français avec un historique d\'activité authentique sur Trustpilot. Chaque compte a été créé et entretenu pendant plusieurs mois avant d\'être utilisé pour vos avis. Cela garantit une crédibilité maximale et une résistance aux détections algorithmiques.',
  },
  {
    icon: Shield,
    title: 'Méthode indétectable garantie',
    description: 'Nous publions depuis des IP résidentielles françaises — jamais depuis des serveurs ou des VPN. Chaque avis est publié à des horaires aléatoires, depuis des appareils différents, avec des comportements de navigation naturels simulés. Notre taux de survie des avis dépasse 97% sur 12 mois, bien au-dessus de la moyenne du marché.',
  },
  {
    icon: Clock,
    title: 'Livraison en 24h ou 3 jours',
    description: 'Vous avez le choix entre deux modes de livraison. La livraison Express publie vos avis en moins de 24 heures, idéale pour les situations urgentes. La livraison Standard étale la publication sur 2-3 jours pour un rendu encore plus naturel et un meilleur ancrage dans le temps. Dans les deux cas, vous êtes notifié par email à chaque publication.',
  },
  {
    icon: PenTool,
    title: 'Rédaction professionnelle offerte',
    description: 'Notre équipe de rédacteurs spécialisés peut créer des avis sur mesure pour votre secteur d\'activité. Que vous soyez dans la restauration, l\'immobilier, l\'e-commerce, les services B2B ou tout autre domaine, nous rédigeons des avis crédibles qui valorisent vos points forts. Si vous préférez fournir vos propres textes, nous les publions tels quels.',
  },
  {
    icon: RefreshCw,
    title: 'Garantie remplacement 12 mois',
    description: 'Nous sommes tellement confiants dans la qualité de notre service que nous offrons une garantie de remplacement sur 12 mois entiers. Si l\'un de vos avis venait à être supprimé pour quelque raison que ce soit dans l\'année suivant votre commande, nous le remplaçons gratuitement et sans délai, sans qu\'aucune démarche ne soit nécessaire de votre côté.',
  },
  {
    icon: Zap,
    title: 'Support réactif 7j/7',
    description: 'Notre équipe est disponible 7 jours sur 7 pour répondre à toutes vos questions, avant, pendant et après votre commande. Nous répondons généralement sous 2 heures en journée. Pour les commandes importantes, vous bénéficiez d\'un suivi personnalisé avec un interlocuteur dédié. Nous sommes là pour assurer le succès de votre projet.',
  },
]

const STATS = [
  { value: '2 000+', label: 'Clients satisfaits' },
  { value: '50 000+', label: 'Avis publiés' },
  { value: '98%', label: 'Taux de satisfaction' },
  { value: '5 ans', label: 'D\'expérience' },
]

const COMPARISON = [
  {
    criterion: 'Comptes 100% français',
    avisExpert: true,
    competitors: false,
  },
  {
    criterion: 'IP résidentielles françaises',
    avisExpert: true,
    competitors: false,
  },
  {
    criterion: 'Garantie remplacement 1 an',
    avisExpert: true,
    competitors: false,
  },
  {
    criterion: 'Rédaction offerte',
    avisExpert: true,
    competitors: false,
  },
  {
    criterion: 'Support 7j/7',
    avisExpert: true,
    competitors: false,
  },
]

const FAQ_SHORT = [
  {
    q: 'Depuis combien de temps Achat Avis Trustpilot existe-t-il ?',
    a: 'Achat Avis Trustpilot est actif depuis 2020. En 5 ans, nous avons livré plus de 50 000 avis Trustpilot à plus de 2 000 entreprises françaises.',
  },
  {
    q: 'Êtes-vous basés en France ?',
    a: 'Oui, notre équipe est entièrement basée en France. Nos rédacteurs, nos opérateurs et notre support sont tous francophones et connaissent parfaitement le marché français.',
  },
  {
    q: 'Proposez-vous des devis sur mesure pour les grandes quantités ?',
    a: 'Absolument. Pour des commandes supérieures à 100 avis ou des projets récurrents, nous proposons des tarifs dégressifs sur mesure. Contactez-nous pour obtenir un devis personnalisé.',
  },
  {
    q: 'Puis-je avoir une facture pour ma comptabilité ?',
    a: 'Oui, une facture est automatiquement générée et envoyée par email après chaque paiement. Toutes nos transactions sont légalement enregistrées.',
  },
]

export default function PourquoiNousPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Hero */}
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <span className="text-accent text-sm font-semibold uppercase tracking-wider">À propos</span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mt-3 mb-6 leading-tight">
          Pourquoi choisir Achat Avis Trustpilot pour acheter vos avis Trustpilot ?
        </h1>
        <p className="text-gray-400 text-lg leading-relaxed">
          Depuis 2020, Achat Avis Trustpilot aide les entreprises françaises à construire et renforcer leur réputation en ligne.
          Notre mission : vous fournir des avis Trustpilot de haute qualité, durables et indétectables.
        </p>
      </div>

      {/* Storytelling */}
      <div className="bg-surface border border-[#1E1E1E] rounded-2xl p-8 sm:p-12 mb-16 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-4">Notre histoire</h2>
        <div className="space-y-4 text-gray-400 leading-relaxed">
          <p>
            Notre service est né d&apos;un constat simple : des milliers d&apos;excellentes entreprises françaises perdent des clients
            chaque jour à cause d&apos;une mauvaise note Trustpilot — souvent due à quelques avis négatifs injustes ou au simple
            manque d&apos;avis.
          </p>
          <p>
            Nos fondateurs, issus du monde du marketing digital, ont constaté que des concurrents moins compétents mais mieux notés
            captaient des parts de marché considérables. La réputation en ligne était devenue un facteur aussi important que la qualité
            du produit lui-même.
          </p>
          <p>
            Nous avons alors développé une méthode unique : utiliser de vrais comptes français, des IP résidentielles, et une publication
            progressive pour créer des avis qui semblent — et sont — authentiques dans leur forme. Aujourd&apos;hui, plus de 2 000 entreprises
            nous font confiance pour gérer leur réputation Trustpilot.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-16">
        {STATS.map((stat) => (
          <div key={stat.label} className="bg-surface border border-[#1E1E1E] rounded-2xl p-6 text-center">
            <p className="text-4xl font-black text-accent mb-2">{stat.value}</p>
            <p className="text-gray-400 text-sm">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Arguments */}
      <div className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white">6 raisons de nous choisir</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ARGUMENTS.map(({ icon: Icon, title, description }) => (
            <div key={title} className="bg-surface border border-[#1E1E1E] rounded-2xl p-6 hover:border-accent/40 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Comparison Table */}
      <div className="mb-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white">Achat Avis Trustpilot vs la concurrence</h2>
          <p className="text-gray-400 mt-2">Ce qui nous distingue réellement des autres prestataires</p>
        </div>
        <div className="bg-surface border border-[#1E1E1E] rounded-2xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#1E1E1E]">
                <th className="text-left p-5 text-gray-400 font-medium text-sm">Critère</th>
                <th className="p-5 text-center">
                  <span className="inline-flex items-center gap-1.5 text-accent font-bold text-sm">
                    <Star className="w-4 h-4 fill-accent" /> Achat Avis Trustpilot
                  </span>
                </th>
                <th className="p-5 text-center text-gray-500 font-medium text-sm">Concurrents</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map((row, i) => (
                <tr key={row.criterion} className={i < COMPARISON.length - 1 ? 'border-b border-[#1E1E1E]' : ''}>
                  <td className="p-5 text-gray-300 text-sm">{row.criterion}</td>
                  <td className="p-5 text-center">
                    {row.avisExpert ? (
                      <Check className="w-5 h-5 text-accent mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-red-500 mx-auto" />
                    )}
                  </td>
                  <td className="p-5 text-center">
                    {row.competitors ? (
                      <Check className="w-5 h-5 text-accent mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-red-500 mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Short FAQ */}
      <div className="mb-16 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Questions courantes</h2>
        <div className="space-y-4">
          {FAQ_SHORT.map((item) => (
            <div key={item.q} className="bg-surface border border-[#1E1E1E] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Prêt à commencer ?</h2>
        <p className="text-gray-400 mb-8">Rejoignez +2 000 entreprises qui font confiance à Achat Avis Trustpilot.</p>
        <Link
          href="/#services"
          className="inline-flex items-center gap-2 bg-accent text-black font-bold text-lg px-10 py-4 rounded-xl hover:bg-accent-hover transition-all duration-200 shadow-lg shadow-accent/20"
        >
          Voir nos offres →
        </Link>
      </div>
    </div>
  )
}
