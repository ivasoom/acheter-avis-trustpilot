'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Star } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Nos offres', href: '/#services' },
  { label: 'Pourquoi nous', href: '/pourquoi-nous' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-[#1E1E1E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-white hover:text-accent transition-colors">
            <Star className="w-5 h-5 text-accent fill-accent" />
            AvisExpert
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-gray-400 hover:text-white transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/#services"
              className="hidden md:inline-flex items-center gap-1 bg-accent text-black font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-accent-hover transition-colors"
            >
              Commander <span aria-hidden="true">→</span>
            </Link>

            <button
              className="md:hidden text-gray-400 hover:text-white transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-[#1E1E1E] py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-2 py-3 text-gray-400 hover:text-white hover:bg-surface rounded-lg transition-colors font-medium"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href="/#services"
                className="block text-center bg-accent text-black font-semibold text-sm px-5 py-3 rounded-lg hover:bg-accent-hover transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Commander →
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
