import { Metadata } from 'next'
import Link from 'next/link'
import { SITE } from '@/config/site'

export const metadata: Metadata = {
  title: 'Blog - Conseils réputation en ligne et avis Trustpilot',
  description: 'Découvrez nos conseils pour améliorer votre réputation en ligne, booster votre note Trustpilot et augmenter vos conversions.',
  alternates: {
    canonical: `${SITE.url}/blog`,
  },
}

const POSTS = [
  {
    slug: 'pourquoi-acheter-avis-trustpilot',
    title: 'Pourquoi acheter des avis Trustpilot en 2025 ?',
    excerpt: '93% des consommateurs lisent les avis en ligne avant d\'acheter. Découvrez pourquoi Trustpilot est devenu incontournable pour les entreprises françaises et comment l\'achat d\'avis peut transformer votre acquisition client.',
    date: '15 mars 2025',
    readTime: '8 min',
    category: 'Stratégie',
  },
  {
    slug: 'acheter-avis-trustpilot-guide-complet',
    title: 'Guide complet pour acheter des avis Trustpilot en 2025',
    excerpt: 'Tout ce qu\'il faut savoir avant d\'acheter des avis Trustpilot : comment ça fonctionne, comment choisir un prestataire fiable, les risques à éviter et comment maximiser votre retour sur investissement.',
    date: '20 février 2025',
    readTime: '12 min',
    category: 'Guide',
  },
  {
    slug: 'achat-avis-trustpilot-pas-cher',
    title: 'Achat d\'avis Trustpilot pas cher : comment ne pas se faire piéger',
    excerpt: 'Cherchez-vous des avis Trustpilot pas chers ? Attention aux pièges. Découvrez pourquoi le prix bas n\'est pas toujours un avantage et comment trouver le meilleur rapport qualité-prix.',
    date: '22 février 2025',
    readTime: '9 min',
    category: 'Prix & Offres',
  },
  {
    slug: 'avis-trustpilot-verifies-france',
    title: 'Avis Trustpilot vérifiés en France : pourquoi les comptes français font toute la différence',
    excerpt: 'Tous les avis Trustpilot ne se valent pas. Découvrez pourquoi les comptes français vérifiés avec historique sont la seule garantie d\'avis durables.',
    date: '25 février 2025',
    readTime: '10 min',
    category: 'Qualité',
  },
  {
    slug: 'comment-avoir-avis-trustpilot-rapidement',
    title: 'Comment avoir des avis Trustpilot rapidement : toutes les méthodes comparées',
    excerpt: 'Emails de relance, QR codes, achat d\'avis, campagnes SMS... Découvrez toutes les méthodes pour obtenir rapidement des avis Trustpilot et quelle stratégie adopter selon votre situation.',
    date: '1 mars 2025',
    readTime: '11 min',
    category: 'Stratégie',
  },
  {
    slug: 'augmenter-note-trustpilot',
    title: 'Augmenter sa note Trustpilot : stratégies efficaces en 2025',
    excerpt: 'Note Trustpilot trop basse ? Découvrez toutes les stratégies pour augmenter votre score, comment Trustpilot calcule les notes et pourquoi certaines actions sont plus efficaces que d\'autres.',
    date: '5 mars 2025',
    readTime: '10 min',
    category: 'Réputation',
  },
  {
    slug: 'supprimer-avis-negatif-trustpilot',
    title: 'Supprimer un avis négatif Trustpilot : ce qui est possible (et ce qui ne l\'est pas)',
    excerpt: 'Avis négatif injuste sur Trustpilot ? Découvrez comment signaler un avis frauduleux, les procédures officielles de contestation et les stratégies alternatives.',
    date: '8 mars 2025',
    readTime: '11 min',
    category: 'Gestion des avis',
  },
  {
    slug: 'trustpilot-algorithme-detection-avis',
    title: 'Comment fonctionne l\'algorithme de détection des faux avis Trustpilot',
    excerpt: 'Trustpilot détecte-t-il les avis achetés ? Comprendre l\'algorithme Fraud Detection, les signaux analysés et pourquoi certains prestataires résistent bien mieux que d\'autres.',
    date: '10 mars 2025',
    readTime: '10 min',
    category: 'Technique',
  },
  {
    slug: 'avis-trustpilot-conversion-ventes',
    title: 'Avis Trustpilot et taux de conversion : l\'impact réel sur vos ventes',
    excerpt: 'Quelle est l\'impact réel des avis Trustpilot sur votre taux de conversion ? Chiffres, études, A/B tests et stratégies pour transformer votre réputation en machine à vendre.',
    date: '12 mars 2025',
    readTime: '9 min',
    category: 'Conversion',
  },
  {
    slug: 'reputation-en-ligne-ecommerce',
    title: 'Réputation en ligne e-commerce : guide complet pour construire la confiance en 2025',
    excerpt: 'Comment construire une réputation en ligne solide pour votre e-commerce ? Plateformes d\'avis, stratégies de contenu, gestion des crises et outils pour transformer votre réputation en avantage compétitif.',
    date: '14 mars 2025',
    readTime: '12 min',
    category: 'E-commerce',
  },
  {
    slug: 'acheter-avis-google-vs-trustpilot',
    title: 'Avis Google vs Trustpilot : lequel choisir pour votre réputation en ligne ?',
    excerpt: 'Google Reviews ou Trustpilot ? Découvrez les différences, les avantages de chaque plateforme et comment prioriser votre stratégie d\'avis selon votre activité.',
    date: '17 mars 2025',
    readTime: '10 min',
    category: 'Comparatif',
  },
  {
    slug: 'comment-ameliorer-reputation-en-ligne',
    title: 'Comment améliorer votre réputation en ligne en 2025 : le guide complet',
    excerpt: 'La réputation en ligne est l\'actif le plus précieux de votre entreprise. Découvrez 5 stratégies éprouvées pour améliorer votre image digitale, gérer les avis négatifs et convertir plus de visiteurs.',
    date: '8 mars 2025',
    readTime: '10 min',
    category: 'Réputation',
  },
  {
    slug: 'avis-trustpilot-et-seo',
    title: 'Avis Trustpilot et SEO : comment booster votre référencement',
    excerpt: 'Les avis Trustpilot apparaissent directement dans les résultats Google avec des étoiles. Voici comment exploiter ce puissant levier SEO pour augmenter votre CTR et doubler vos conversions.',
    date: '1 mars 2025',
    readTime: '7 min',
    category: 'SEO',
  },
]

export default function BlogPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <span className="text-accent text-sm font-semibold uppercase tracking-wider">Blog</span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mt-3 mb-4">
          Conseils & Stratégies
        </h1>
        <p className="text-gray-400 text-lg">
          Tout ce que vous devez savoir sur la réputation en ligne, les avis Trustpilot et le référencement local.
        </p>
      </div>

      {/* Articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {POSTS.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group bg-surface border border-[#1E1E1E] rounded-2xl overflow-hidden hover:border-accent/40 transition-all duration-300 flex flex-col"
          >
            {/* Article image placeholder */}
            <div className="h-48 bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center">
              <span className="text-4xl font-black text-accent/30">{post.category}</span>
            </div>

            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-accent/10 text-accent text-xs font-semibold px-2.5 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-gray-500 text-xs">{post.readTime} de lecture</span>
              </div>

              <h2 className="text-white font-bold text-xl mb-3 group-hover:text-accent transition-colors leading-snug">
                {post.title}
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-gray-600 text-xs">{post.date}</span>
                <span className="text-accent text-sm font-medium flex items-center gap-1">
                  Lire la suite →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
