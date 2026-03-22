import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { VARIANTS } from '@/config/products'

const VALID_PRICE_IDS = new Set(
  VARIANTS.flatMap((v) => [v.stripePriceIdNormal, v.stripePriceIdExpress])
)

export async function POST(req: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

  try {
    const { priceId } = await req.json()

    if (!priceId || !VALID_PRICE_IDS.has(priceId)) {
      return NextResponse.json({ error: 'Invalid priceId' }, { status: 400 })
    }

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/merci?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/#services`,
      locale: 'fr',
      payment_method_types: ['card'],
      billing_address_collection: 'required',
      metadata: { source: 'achat-avis-trustpilot.fr' },
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error('Stripe checkout error:', error)
    return NextResponse.json({ error: 'Failed to create checkout session' }, { status: 500 })
  }
}
