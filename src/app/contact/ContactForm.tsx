'use client'
import { useState } from 'react'
import { Mail, Clock, Shield } from 'lucide-react'

type FormState = 'idle' | 'loading' | 'success' | 'error'

export function ContactForm() {
  const [state, setState] = useState<FormState>('idle')
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setState('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setState('success')
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        setState('error')
      }
    } catch {
      setState('error')
    }
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <span className="text-accent text-sm font-semibold uppercase tracking-wider">Contact</span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mt-3 mb-4">
          Contactez-nous
        </h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">
          Une question sur nos offres ou votre commande ? Notre équipe vous répond sous 2 heures.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Info cards */}
        <div className="space-y-4">
          <div className="bg-surface border border-[#1E1E1E] rounded-2xl p-6">
            <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center mb-3">
              <Mail className="w-5 h-5 text-accent" />
            </div>
            <h3 className="text-white font-semibold mb-1">Email</h3>
            <a href="mailto:contact@acheter-avis-trustpilot.fr" className="text-gray-400 text-sm hover:text-accent transition-colors">
              contact@acheter-avis-trustpilot.fr
            </a>
          </div>

          <div className="bg-surface border border-[#1E1E1E] rounded-2xl p-6">
            <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center mb-3">
              <Clock className="w-5 h-5 text-accent" />
            </div>
            <h3 className="text-white font-semibold mb-1">Disponibilité</h3>
            <p className="text-gray-400 text-sm">Support 7j/7<br />Réponse sous 2h en journée</p>
          </div>

          <div className="bg-surface border border-[#1E1E1E] rounded-2xl p-6">
            <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center mb-3">
              <Shield className="w-5 h-5 text-accent" />
            </div>
            <h3 className="text-white font-semibold mb-1">Confidentialité</h3>
            <p className="text-gray-400 text-sm">Vos données sont traitées avec la plus grande discrétion. Aucune information partagée.</p>
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-2">
          <div className="bg-surface border border-[#1E1E1E] rounded-2xl p-8">
            {state === 'success' ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-white font-bold text-2xl mb-2">Message envoyé !</h2>
                <p className="text-gray-400">Nous vous répondrons dans les plus brefs délais (sous 2h en journée).</p>
                <button
                  onClick={() => setState('idle')}
                  className="mt-6 text-accent hover:text-accent-hover font-medium text-sm transition-colors"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-gray-400 text-sm font-medium mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full bg-background border border-[#1E1E1E] rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-accent transition-colors"
                      placeholder="Jean Dupont"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-400 text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full bg-background border border-[#1E1E1E] rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-accent transition-colors"
                      placeholder="jean@monentreprise.fr"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-400 text-sm font-medium mb-2">
                    Sujet *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full bg-background border border-[#1E1E1E] rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-accent transition-colors"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="Question avant commande">Question avant commande</option>
                    <option value="Suivi de commande">Suivi de commande</option>
                    <option value="Garantie / Remplacement">Garantie / Remplacement</option>
                    <option value="Devis grande quantité">Devis grande quantité</option>
                    <option value="Problème technique">Problème technique</option>
                    <option value="Autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-400 text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full bg-background border border-[#1E1E1E] rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-accent transition-colors resize-none"
                    placeholder="Décrivez votre demande..."
                  />
                </div>

                {state === 'error' && (
                  <div className="bg-red-900/20 border border-red-800 rounded-lg px-4 py-3 text-red-400 text-sm">
                    Une erreur est survenue. Veuillez réessayer ou nous contacter directement par email.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={state === 'loading'}
                  className="w-full flex items-center justify-center gap-2 bg-accent text-black font-bold py-4 rounded-xl hover:bg-accent-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {state === 'loading' ? (
                    <>
                      <span className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    'Envoyer le message →'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
