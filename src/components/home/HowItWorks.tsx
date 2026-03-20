const STEPS = [
  {
    number: '01',
    title: 'Choisissez votre pack',
    description: 'Sélectionnez la quantité d\'avis souhaitée et le mode de livraison (standard ou express 24h). Personnalisez selon vos besoins.',
  },
  {
    number: '02',
    title: 'Effectuez votre paiement',
    description: 'Payez en toute sécurité via Stripe (CB, Apple Pay). Vous recevez immédiatement une confirmation par email.',
  },
  {
    number: '03',
    title: 'Recevez vos avis',
    description: 'Notre équipe publie vos avis depuis de vrais comptes français. Vous êtes notifié à chaque publication. Suivi en temps réel.',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">Processus</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-4">
            Comment ça marche ?
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            En 3 étapes simples, boostez votre réputation Trustpilot en moins de 24 heures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-12 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px bg-gradient-to-r from-transparent via-[#1E1E1E] to-transparent" />

          {STEPS.map((step, index) => (
            <div key={step.number} className="relative flex flex-col items-center text-center">
              {/* Number circle */}
              <div className="relative z-10 w-24 h-24 rounded-full border-2 border-accent/30 bg-background flex items-center justify-center mb-6">
                <span className="text-4xl font-black text-accent">{step.number}</span>
              </div>

              {/* Arrow (mobile) */}
              {index < STEPS.length - 1 && (
                <div className="md:hidden text-accent text-2xl mb-4 rotate-90">→</div>
              )}

              <h3 className="text-white font-bold text-xl mb-3">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
