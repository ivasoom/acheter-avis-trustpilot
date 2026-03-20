import { ProductCard } from '@/components/ui/ProductCard'

export function ServicesGrid() {
  return (
    <section id="services" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">Nos offres</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-4">
            Choisissez votre pack d&apos;avis Trustpilot
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Sélectionnez la quantité d&apos;avis souhaitée et le type de livraison. Paiement sécurisé par Stripe.
          </p>
        </div>
        <ProductCard />
      </div>
    </section>
  )
}
