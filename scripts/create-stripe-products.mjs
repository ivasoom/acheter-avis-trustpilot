/**
 * Script de création des produits Stripe
 * Usage: node scripts/create-stripe-products.mjs
 *
 * Crée tous les produits + prix et met à jour products.ts automatiquement
 */

import Stripe from 'stripe'
import fs from 'fs'
import path from 'path'

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY
if (!STRIPE_SECRET_KEY) {
  console.error('❌ STRIPE_SECRET_KEY manquante. Lance avec :')
  console.error('   STRIPE_SECRET_KEY=sk_live_xxx node scripts/create-stripe-products.mjs')
  process.exit(1)
}

const stripe = new Stripe(STRIPE_SECRET_KEY, { apiVersion: '2024-06-20' })

const VARIANTS = [
  { qty: 1,   priceNormal: 12.90,  priceExpress: 14.90  },
  { qty: 5,   priceNormal: 59.90,  priceExpress: 64.90  },
  { qty: 10,  priceNormal: 109.90, priceExpress: 129.90 },
  { qty: 25,  priceNormal: 259.90, priceExpress: 274.90 },
  { qty: 50,  priceNormal: 499.00, priceExpress: 539.00 },
  { qty: 100, priceNormal: 875.00, priceExpress: 919.00 },
]

async function createProducts() {
  console.log('🚀 Création des produits Stripe...\n')

  const results = []

  for (const variant of VARIANTS) {
    console.log(`📦 Création du pack ${variant.qty} avis...`)

    // Produit Normal
    const productNormal = await stripe.products.create({
      name: `${variant.qty} Avis Trustpilot — Standard (3 jours)`,
      description: `Pack de ${variant.qty} avis Trustpilot depuis de vrais comptes français. Livraison sous 3 jours. Garantie 1 an.`,
      metadata: { qty: String(variant.qty), type: 'normal' },
    })

    const priceNormal = await stripe.prices.create({
      product: productNormal.id,
      unit_amount: Math.round(variant.priceNormal * 100),
      currency: 'eur',
      metadata: { qty: String(variant.qty), type: 'normal' },
    })

    // Produit Express
    const productExpress = await stripe.products.create({
      name: `${variant.qty} Avis Trustpilot — Express (24h)`,
      description: `Pack de ${variant.qty} avis Trustpilot depuis de vrais comptes français. Livraison sous 24h. Garantie 1 an.`,
      metadata: { qty: String(variant.qty), type: 'express' },
    })

    const priceExpress = await stripe.prices.create({
      product: productExpress.id,
      unit_amount: Math.round(variant.priceExpress * 100),
      currency: 'eur',
      metadata: { qty: String(variant.qty), type: 'express' },
    })

    results.push({
      qty: variant.qty,
      priceNormal: variant.priceNormal,
      priceExpress: variant.priceExpress,
      stripePriceIdNormal: priceNormal.id,
      stripePriceIdExpress: priceExpress.id,
    })

    console.log(`  ✅ Normal  : ${priceNormal.id}`)
    console.log(`  ✅ Express : ${priceExpress.id}\n`)
  }

  // Génère le nouveau contenu de products.ts
  const variantsCode = results.map(r => (
    `  { qty: ${String(r.qty).padEnd(3)}, priceNormal: ${r.priceNormal.toFixed(2).padEnd(7)}, priceExpress: ${r.priceExpress.toFixed(2).padEnd(7)}, stripePriceIdNormal: '${r.stripePriceIdNormal}', stripePriceIdExpress: '${r.stripePriceIdExpress}' },`
  )).join('\n')

  const newContent = `export interface ProductVariant {
  qty: number
  priceNormal: number
  priceExpress: number
  stripePriceIdNormal: string
  stripePriceIdExpress: string
}

export const VARIANTS: ProductVariant[] = [
${variantsCode}
]

export const INCLUDES = [
  'Comptes français vérifiés',
  'Avis permanents garantis',
  'Rédaction offerte si besoin',
  'Remplacement garanti 1 an',
  'Satisfait ou remboursé',
]
`

  const outputPath = path.join(process.cwd(), 'src/config/products.ts')
  fs.writeFileSync(outputPath, newContent, 'utf-8')

  console.log('✅ src/config/products.ts mis à jour avec les vrais Price IDs !')
  console.log('\n📋 Récapitulatif des Price IDs créés :')
  console.log('─'.repeat(60))
  results.forEach(r => {
    console.log(`${r.qty} avis — Normal: ${r.stripePriceIdNormal}`)
    console.log(`${r.qty} avis — Express: ${r.stripePriceIdExpress}`)
  })
  console.log('─'.repeat(60))
  console.log('\n🎉 Terminé ! Lance maintenant :')
  console.log('  git add src/config/products.ts && git commit -m "feat: add real Stripe Price IDs" && git push')
}

createProducts().catch(err => {
  console.error('❌ Erreur:', err.message)
  process.exit(1)
})
