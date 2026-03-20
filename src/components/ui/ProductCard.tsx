'use client'
import { useState } from 'react'
import { VARIANTS, INCLUDES } from '@/config/products'
import { Check, Zap, Clock } from 'lucide-react'

const EXPRESS_AVAILABLE_QTY = [1, 5]

export function ProductCard() {
  const [selectedQty, setSelectedQty] = useState(10)
  const [deliveryType, setDeliveryType] = useState<'normal' | 'express'>('normal')
  const [loading, setLoading] = useState(false)

  const expressAvailable = EXPRESS_AVAILABLE_QTY.includes(selectedQty)
  const effectiveDelivery = expressAvailable ? deliveryType : 'normal'

  const variant = VARIANTS.find((v) => v.qty === selectedQty) ?? VARIANTS[2]
  const price = effectiveDelivery === 'express' ? variant.priceExpress : variant.priceNormal
  const priceId = effectiveDelivery === 'express' ? variant.stripePriceIdExpress : variant.stripePriceIdNormal
  const pricePerUnit = (price / selectedQty).toFixed(2)

  const handleCheckout = async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId }),
      })
      const data = await res.json()
      if (data.url) {
        window.location.href = data.url
      }
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Quantity selector */}
      <div className="mb-8">
        <p className="text-gray-400 text-sm font-medium mb-3 uppercase tracking-wider">Choisissez la quantité</p>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
          {VARIANTS.map((v) => (
            <button
              key={v.qty}
              onClick={() => setSelectedQty(v.qty)}
              className={`py-3 rounded-lg text-sm font-semibold border transition-all duration-200 ${
                selectedQty === v.qty
                  ? 'border-accent bg-accent/10 text-accent'
                  : 'border-[#1E1E1E] bg-surface text-gray-400 hover:border-gray-600'
              }`}
            >
              {v.qty} avis
            </button>
          ))}
        </div>
      </div>

      {/* Delivery type selector */}
      <div className="mb-8">
        <p className="text-gray-400 text-sm font-medium mb-3 uppercase tracking-wider">Type de livraison</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button
            onClick={() => setDeliveryType('normal')}
            className={`p-5 rounded-xl border text-left transition-all duration-200 ${
              effectiveDelivery === 'normal'
                ? 'border-accent bg-accent/10'
                : 'border-[#1E1E1E] bg-surface hover:border-gray-600'
            }`}
          >
            <div className="flex items-center gap-3 mb-2">
              <Clock className={`w-5 h-5 ${effectiveDelivery === 'normal' ? 'text-accent' : 'text-gray-500'}`} />
              <span className={`font-semibold ${effectiveDelivery === 'normal' ? 'text-white' : 'text-gray-300'}`}>
                Livraison Standard
              </span>
            </div>
            <p className="text-gray-500 text-sm">Publication progressive sur 3 jours</p>
            <p className={`text-xl font-bold mt-3 ${effectiveDelivery === 'normal' ? 'text-accent' : 'text-white'}`}>
              {variant.priceNormal.toFixed(2)} €
            </p>
          </button>

          <button
            onClick={() => expressAvailable && setDeliveryType('express')}
            disabled={!expressAvailable}
            className={`p-5 rounded-xl border text-left relative transition-all duration-200 ${
              !expressAvailable
                ? 'border-[#1E1E1E] bg-surface opacity-40 cursor-not-allowed'
                : effectiveDelivery === 'express'
                ? 'border-accent bg-accent/10'
                : 'border-[#1E1E1E] bg-surface hover:border-gray-600'
            }`}
          >
            {expressAvailable && (
              <div className="absolute -top-3 right-4">
                <span className="bg-accent text-black text-xs font-bold px-2.5 py-1 rounded-full">POPULAIRE</span>
              </div>
            )}
            <div className="flex items-center gap-3 mb-2">
              <Zap className={`w-5 h-5 ${effectiveDelivery === 'express' ? 'text-accent' : 'text-gray-500'}`} />
              <span className={`font-semibold ${effectiveDelivery === 'express' ? 'text-white' : 'text-gray-300'}`}>
                Livraison Express
              </span>
            </div>
            <p className="text-gray-500 text-sm">
              {expressAvailable ? 'Publication en moins de 24 heures' : 'Disponible uniquement pour 1 et 5 avis'}
            </p>
            {expressAvailable && (
              <p className={`text-xl font-bold mt-3 ${effectiveDelivery === 'express' ? 'text-accent' : 'text-white'}`}>
                {variant.priceExpress.toFixed(2)} €
              </p>
            )}
          </button>
        </div>
      </div>

      {/* Summary + CTA */}
      <div className="bg-surface border border-[#1E1E1E] rounded-2xl p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <p className="text-gray-400 text-sm mb-1">
              {selectedQty} avis Trustpilot — {effectiveDelivery === 'express' ? 'Express 24h' : 'Standard 3 jours'}
            </p>
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-bold text-white">{price.toFixed(2)} €</span>
              <span className="text-gray-500 text-sm">({pricePerUnit} €/avis)</span>
            </div>
          </div>
          <button
            onClick={handleCheckout}
            disabled={loading}
            className="flex items-center justify-center gap-2 bg-accent text-black font-bold text-lg px-10 py-4 rounded-xl hover:bg-accent-hover transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
          >
            {loading ? (
              <>
                <span className="inline-block w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                Chargement...
              </>
            ) : (
              <>Commander →</>
            )}
          </button>
        </div>

        {/* Includes */}
        <div className="mt-6 pt-6 border-t border-[#1E1E1E]">
          <p className="text-gray-400 text-xs uppercase tracking-wider mb-3 font-medium">Inclus dans votre commande</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {INCLUDES.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-accent flex-shrink-0" />
                <span className="text-gray-300 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
