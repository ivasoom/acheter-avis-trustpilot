'use client'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const FAQS = [
  {
    question: 'Vos avis sont-ils détectables par Trustpilot ?',
    answer: 'Non. Nous utilisons de vrais comptes français avec un historique d\'activité, des IP résidentielles françaises, et publions les avis de manière progressive et naturelle. Notre méthode est conçue pour être indétectable et pérenne.',
  },
  {
    question: 'Quel est le délai de livraison ?',
    answer: 'Avec la livraison Standard, vos avis sont publiés progressivement sur 2 à 3 jours. Avec la livraison Express, la publication commence en moins de 24 heures. Vous êtes notifié par email à chaque publication.',
  },
  {
    question: 'Que se passe-t-il si un avis est supprimé ?',
    answer: 'Nous offrons une garantie de remplacement de 12 mois. Si l\'un de vos avis est supprimé dans l\'année suivant votre commande, nous le remplaçons gratuitement, sans aucune démarche de votre part.',
  },
  {
    question: 'Dois-je fournir le contenu des avis ?',
    answer: 'C\'est fortement conseillé, car vous connaissez mieux que quiconque votre activité, vos points forts et ce que vos clients apprécient. Des avis rédigés avec vos propres éléments seront plus précis et plus crédibles. Cela dit, si vous ne souhaitez pas vous en occuper, aucun problème : notre équipe prend tout en charge et rédige des avis adaptés à votre secteur d\'activité.',
  },
  {
    question: 'Comment vous contacter après la commande ?',
    answer: 'Notre support est disponible 7j/7 par email à contact@acheter-avis-trustpilot.fr. Nous répondons généralement sous 2 heures en journée. Vous pouvez également utiliser notre formulaire de contact.',
  },
  {
    question: 'Quels sont les modes de paiement acceptés ?',
    answer: 'Nous acceptons toutes les cartes bancaires (Visa, Mastercard, American Express). Le paiement est 100% sécurisé et chiffré. Apple Pay et Google Pay sont également disponibles.',
  },
  {
    question: 'Puis-je passer plusieurs commandes pour le même profil ?',
    answer: 'Oui, absolument. Vous pouvez passer plusieurs commandes espacées dans le temps. Nous recommandons un délai d\'au moins 1 à 2 semaines entre chaque commande pour maintenir un rythme de publication naturel.',
  },
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`border rounded-xl transition-all duration-200 ${open ? 'border-accent/50 bg-accent/5' : 'border-[#1E1E1E] bg-surface'}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left gap-4"
        aria-expanded={open}
      >
        <span className={`font-medium text-sm sm:text-base ${open ? 'text-white' : 'text-gray-300'}`}>
          {question}
        </span>
        <ChevronDown
          className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180 text-accent' : 'text-gray-500'}`}
        />
      </button>
      {open && (
        <div className="px-5 pb-5">
          <p className="text-gray-400 text-sm leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  )
}

export function FAQ() {
  return (
    <section id="faq" className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">FAQ</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2 mb-4">
            Questions fréquentes
          </h2>
          <p className="text-gray-400">
            Tout ce que vous devez savoir avant de commander vos avis Trustpilot.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq) => (
            <FAQItem key={faq.question} {...faq} />
          ))}
        </div>
      </div>
    </section>
  )
}
