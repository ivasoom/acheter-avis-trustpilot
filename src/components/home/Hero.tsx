import Link from 'next/link'
import { Star, Shield, Zap, Users } from 'lucide-react'

const STATS = [
  { icon: Users, value: '2 000+', label: 'Clients satisfaits' },
  { icon: Star, value: '98%', label: 'Taux de satisfaction' },
  { icon: Shield, value: '1 an', label: 'Garantie remplacement' },
  { icon: Zap, value: '7j/7', label: 'Support disponible' },
]

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Trust badge */}
        <div className="inline-flex items-center gap-2 bg-surface border border-[#1E1E1E] rounded-full px-4 py-2 mb-8 text-sm">
          <Star className="w-4 h-4 text-accent fill-accent" />
          <span className="text-gray-300">+2 000 entreprises nous font confiance</span>
        </div>

        {/* H1 */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
          Achetez des avis{' '}
          <span className="text-accent">Trustpilot</span>{' '}
          depuis de vrais comptes français
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Boostez votre réputation en ligne avec des avis authentiques, publiés depuis de vrais profils français.
          Livraison en 24h, garantie 1 an, indétectable.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            href="/#services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-accent text-black font-bold text-lg px-8 py-4 rounded-xl hover:bg-accent-hover transition-all duration-200 shadow-lg shadow-accent/20"
          >
            Voir les offres <span aria-hidden="true">→</span>
          </Link>
          <Link
            href="/#how-it-works"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-surface border border-[#1E1E1E] text-white font-semibold text-lg px-8 py-4 rounded-xl hover:border-accent transition-all duration-200"
          >
            Comment ça marche ?
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {STATS.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center">
                <Icon className="w-5 h-5 text-accent" />
              </div>
              <span className="text-2xl font-bold text-white">{value}</span>
              <span className="text-gray-500 text-sm">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
