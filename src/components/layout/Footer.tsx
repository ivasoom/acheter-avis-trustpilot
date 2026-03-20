import Link from 'next/link'
import { Star, Lock } from 'lucide-react'
import { SITE } from '@/config/site'

export function Footer() {
  return (
    <footer className="bg-surface border-t border-[#1E1E1E] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo + Tagline */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl text-white mb-3">
              <Star className="w-5 h-5 text-accent fill-accent" />
              AvisExpert
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed">
              Le service #1 en France pour acheter des avis Trustpilot vérifiés. Livraison rapide, garantie 1 an.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Services</h3>
            <ul className="space-y-2.5">
              {[
                { label: '1 avis Trustpilot', href: '/#services' },
                { label: '5 avis Trustpilot', href: '/#services' },
                { label: '10 avis Trustpilot', href: '/#services' },
                { label: '25 avis Trustpilot', href: '/#services' },
                { label: '50 avis Trustpilot', href: '/#services' },
                { label: '100 avis Trustpilot', href: '/#services' },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-gray-500 hover:text-accent text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Informations */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Informations</h3>
            <ul className="space-y-2.5">
              {[
                { label: 'Pourquoi nous choisir', href: '/pourquoi-nous' },
                { label: 'Blog & Conseils', href: '/blog' },
                { label: 'Comment ça marche', href: '/#how-it-works' },
                { label: 'FAQ', href: '/#faq' },
                { label: 'Contact', href: '/contact' },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-gray-500 hover:text-accent text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Légal + Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Légal</h3>
            <ul className="space-y-2.5 mb-6">
              {[
                { label: 'Mentions légales', href: '/mentions-legales' },
                { label: 'CGV', href: '/cgv' },
                { label: 'Politique de confidentialité', href: '/confidentialite' },
                { label: 'Remboursements', href: '/remboursements' },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-gray-500 hover:text-accent text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div>
              <h4 className="text-white font-semibold text-sm mb-2">Contact</h4>
              <a href={`mailto:${SITE.email}`} className="text-gray-500 hover:text-accent text-sm transition-colors">
                {SITE.email}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#1E1E1E] mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} AvisExpert — Tous droits réservés.
          </p>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <Lock className="w-4 h-4 text-accent" />
            <span>Paiement sécurisé par Stripe</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
