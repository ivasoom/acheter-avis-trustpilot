const TESTIMONIALS = [
  {
    name: 'Thomas Marchand',
    role: 'Directeur commercial',
    company: 'AgenceWeb Paris',
    text: 'Nous avions besoin d\'améliorer rapidement notre note Trustpilot avant un gros appel d\'offres. Achat Avis Trustpilot nous a livré 25 avis en 3 jours. Tout s\'est passé parfaitement, aucun problème. Notre note est passée de 3,8 à 4,6 étoiles.',
    stars: 5,
  },
  {
    name: 'Sophie Blanchard',
    role: 'Fondatrice',
    company: 'Boutique Mode Lyon',
    text: 'J\'étais sceptique au départ, mais les avis sont vraiment convaincants et semblent authentiques. Livraison en 24h comme promis. Le service client répond très rapidement. Je recommande vivement pour toute boutique e-commerce.',
    stars: 5,
  },
  {
    name: 'Karim Benzara',
    role: 'CEO',
    company: 'ImmoSud Immobilier',
    text: 'Excellent service. Nous avons commandé 50 avis pour notre agence immobilière. Publication très progressive et naturelle sur 4 jours. Notre taux de conversion a augmenté de 23% depuis. Un investissement rentable.',
    stars: 5,
  },
  {
    name: 'Marie-Claire Dubois',
    role: 'Responsable marketing',
    company: 'Clinique Esthétique Bordeaux',
    text: 'Service impeccable de A à Z. La rédaction offerte était parfaite pour notre secteur de la beauté. Les avis s\'intègrent parfaitement à notre profil Trustpilot. Garantie sérieuse et équipe réactive. 10/10.',
    stars: 5,
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export function Testimonials() {
  return (
    <section className="py-20 px-4 bg-surface/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">Témoignages</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-4">
            Ce que disent nos clients
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Plus de 2 000 entreprises françaises nous font confiance pour booster leur réputation Trustpilot.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="bg-surface border border-[#1E1E1E] rounded-2xl p-6 hover:border-accent/30 transition-all duration-300"
            >
              <StarRating count={t.stars} />
              <p className="text-gray-300 italic text-sm leading-relaxed mt-4 mb-6">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center text-accent font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.role} — {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
