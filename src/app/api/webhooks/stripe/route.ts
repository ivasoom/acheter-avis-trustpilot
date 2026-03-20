import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'
import { Resend } from 'resend'
import { VARIANTS } from '@/config/products'

const ADMIN_EMAIL = 'contact@achat-avis-trustpilot.fr'
const FROM_EMAIL = 'noreply@achat-avis-trustpilot.fr'
const SITE_URL = 'https://achat-avis-trustpilot.fr'

// Map Stripe price IDs to product info
function getProductFromPriceId(priceId: string): { qty: number; delivery: string; price: number } | null {
  for (const v of VARIANTS) {
    if (v.stripePriceIdNormal === priceId) {
      return { qty: v.qty, delivery: 'Standard (2-3 jours)', price: v.priceNormal }
    }
    if (v.stripePriceIdExpress === priceId) {
      return { qty: v.qty, delivery: 'Express (moins de 24h)', price: v.priceExpress }
    }
  }
  return null
}

// ─── Email Templates ──────────────────────────────────────────────────────────

function emailAdminHtml(order: {
  customerName: string
  customerEmail: string
  qty: number
  delivery: string
  price: number
  amountPaid: number
  sessionId: string
  orderId: string
}) {
  return `<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f5f5f5;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f5;padding:32px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#0A0A0A;border-radius:12px;overflow:hidden;max-width:600px;">
        <!-- Header -->
        <tr>
          <td style="background:#00D4AA;padding:20px 32px;">
            <h1 style="margin:0;color:#0A0A0A;font-size:20px;font-weight:900;">🛒 Nouvelle commande reçue</h1>
          </td>
        </tr>
        <!-- Body -->
        <tr>
          <td style="padding:32px;">
            <p style="color:#aaa;margin:0 0 24px;font-size:14px;">Commande <strong style="color:#fff;">#${order.orderId}</strong> — ${new Date().toLocaleDateString('fr-FR', { day: '2-digit', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</p>

            <!-- Customer info -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
              <tr><td style="color:#00D4AA;font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;padding-bottom:8px;">CLIENT</td></tr>
              <tr>
                <td style="background:#161616;border-radius:8px;padding:16px;">
                  <p style="margin:0 0 6px;color:#fff;font-size:15px;font-weight:700;">${order.customerName}</p>
                  <p style="margin:0;color:#aaa;font-size:14px;">${order.customerEmail}</p>
                </td>
              </tr>
            </table>

            <!-- Order details -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
              <tr><td style="color:#00D4AA;font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;padding-bottom:8px;">COMMANDE</td></tr>
              <tr>
                <td style="background:#161616;border-radius:8px;padding:16px;">
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td style="color:#aaa;font-size:13px;padding:4px 0;">Nombre d'avis</td>
                      <td align="right" style="color:#fff;font-size:13px;font-weight:700;padding:4px 0;">${order.qty} avis</td>
                    </tr>
                    <tr>
                      <td style="color:#aaa;font-size:13px;padding:4px 0;">Livraison</td>
                      <td align="right" style="color:#fff;font-size:13px;padding:4px 0;">${order.delivery}</td>
                    </tr>
                    <tr>
                      <td colspan="2" style="border-top:1px solid #222;padding-top:12px;margin-top:8px;"></td>
                    </tr>
                    <tr>
                      <td style="color:#aaa;font-size:13px;font-weight:700;padding:4px 0;">Total payé</td>
                      <td align="right" style="color:#00D4AA;font-size:16px;font-weight:900;padding:4px 0;">${(order.amountPaid / 100).toFixed(2).replace('.', ',')} €</td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>

            <!-- Action required -->
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#00D4AA10;border:1px solid #00D4AA40;border-radius:8px;margin-bottom:24px;">
              <tr>
                <td style="padding:16px;">
                  <p style="margin:0 0 8px;color:#00D4AA;font-size:13px;font-weight:700;">⚡ ACTION REQUISE</p>
                  <p style="margin:0;color:#ccc;font-size:13px;line-height:1.6;">
                    Contacter le client à <strong style="color:#fff;">${order.customerEmail}</strong> pour récupérer son URL de profil Trustpilot, puis lancer la publication des ${order.qty} avis en mode <strong style="color:#fff;">${order.delivery}</strong>.
                  </p>
                </td>
              </tr>
            </table>

            <!-- Stripe link -->
            <p style="margin:0;color:#555;font-size:12px;">
              Session Stripe : <a href="https://dashboard.stripe.com/payments/${order.sessionId}" style="color:#00D4AA;">${order.sessionId}</a>
            </p>
          </td>
        </tr>
        <!-- Footer -->
        <tr>
          <td style="background:#111;padding:16px 32px;border-top:1px solid #1E1E1E;">
            <p style="margin:0;color:#555;font-size:12px;">Achat Avis Trustpilot — <a href="${SITE_URL}" style="color:#555;">${SITE_URL}</a></p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`
}

function emailClientHtml(order: {
  customerName: string
  qty: number
  delivery: string
  amountPaid: number
  orderId: string
}) {
  const firstName = order.customerName.split(' ')[0]
  return `<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f5f5f5;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f5;padding:32px 0;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#0A0A0A;border-radius:12px;overflow:hidden;max-width:600px;">
        <!-- Header -->
        <tr>
          <td style="background:#00D4AA;padding:28px 32px;text-align:center;">
            <p style="margin:0 0 4px;color:#0A0A0A;font-size:13px;font-weight:700;letter-spacing:2px;text-transform:uppercase;">Achat Avis Trustpilot</p>
            <h1 style="margin:0;color:#0A0A0A;font-size:26px;font-weight:900;">Commande confirmée ✓</h1>
          </td>
        </tr>
        <!-- Body -->
        <tr>
          <td style="padding:32px;">
            <p style="color:#ddd;font-size:15px;line-height:1.7;margin:0 0 24px;">
              Bonjour <strong style="color:#fff;">${firstName}</strong>,
            </p>
            <p style="color:#ddd;font-size:15px;line-height:1.7;margin:0 0 24px;">
              Votre commande a bien été reçue et votre paiement confirmé. Notre équipe la traite dès maintenant.
            </p>

            <!-- Order summary -->
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#161616;border-radius:10px;margin-bottom:28px;">
              <tr>
                <td style="padding:20px 20px 16px;border-bottom:1px solid #222;">
                  <p style="margin:0;color:#00D4AA;font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;">Récapitulatif de commande</p>
                </td>
              </tr>
              <tr>
                <td style="padding:16px 20px;">
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td style="color:#aaa;font-size:13px;padding:5px 0;">Référence</td>
                      <td align="right" style="color:#fff;font-size:13px;padding:5px 0;">#${order.orderId}</td>
                    </tr>
                    <tr>
                      <td style="color:#aaa;font-size:13px;padding:5px 0;">Avis Trustpilot</td>
                      <td align="right" style="color:#fff;font-size:13px;font-weight:700;padding:5px 0;">${order.qty} avis 5 étoiles</td>
                    </tr>
                    <tr>
                      <td style="color:#aaa;font-size:13px;padding:5px 0;">Mode de livraison</td>
                      <td align="right" style="color:#fff;font-size:13px;padding:5px 0;">${order.delivery}</td>
                    </tr>
                    <tr>
                      <td colspan="2" style="border-top:1px solid #222;padding:8px 0 0;"></td>
                    </tr>
                    <tr>
                      <td style="color:#aaa;font-size:14px;font-weight:700;padding:4px 0;">Total payé</td>
                      <td align="right" style="color:#00D4AA;font-size:18px;font-weight:900;padding:4px 0;">${(order.amountPaid / 100).toFixed(2).replace('.', ',')} €</td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>

            <!-- Next steps -->
            <p style="color:#00D4AA;font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;margin:0 0 12px;">Prochaines étapes</p>

            <!-- Step 1 -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:10px;">
              <tr>
                <td width="40" valign="top" style="padding-top:2px;">
                  <div style="width:28px;height:28px;background:#00D4AA;border-radius:50%;text-align:center;line-height:28px;font-size:13px;font-weight:900;color:#0A0A0A;">1</div>
                </td>
                <td style="padding-left:12px;">
                  <p style="margin:0 0 2px;color:#fff;font-size:14px;font-weight:700;">Envoyez votre URL Trustpilot</p>
                  <p style="margin:0;color:#aaa;font-size:13px;line-height:1.5;">Répondez à cet email ou écrivez-nous à <a href="mailto:${ADMIN_EMAIL}" style="color:#00D4AA;">${ADMIN_EMAIL}</a> en indiquant l'URL de votre profil Trustpilot (ex : trustpilot.com/review/votresite.fr).</p>
                </td>
              </tr>
            </table>

            <!-- Step 2 -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:10px;">
              <tr>
                <td width="40" valign="top" style="padding-top:2px;">
                  <div style="width:28px;height:28px;background:#00D4AA;border-radius:50%;text-align:center;line-height:28px;font-size:13px;font-weight:900;color:#0A0A0A;">2</div>
                </td>
                <td style="padding-left:12px;">
                  <p style="margin:0 0 2px;color:#fff;font-size:14px;font-weight:700;">Notre équipe traite votre commande</p>
                  <p style="margin:0;color:#aaa;font-size:13px;line-height:1.5;">Dès réception de votre URL, nous préparons la rédaction et la publication de vos avis depuis des comptes 100% français.</p>
                </td>
              </tr>
            </table>

            <!-- Step 3 -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
              <tr>
                <td width="40" valign="top" style="padding-top:2px;">
                  <div style="width:28px;height:28px;background:#00D4AA;border-radius:50%;text-align:center;line-height:28px;font-size:13px;font-weight:900;color:#0A0A0A;">3</div>
                </td>
                <td style="padding-left:12px;">
                  <p style="margin:0 0 2px;color:#fff;font-size:14px;font-weight:700;">Publication de vos avis</p>
                  <p style="margin:0;color:#aaa;font-size:13px;line-height:1.5;">Les avis sont publiés progressivement en <strong style="color:#fff;">${order.delivery}</strong>. Vous recevrez une notification à chaque publication.</p>
                </td>
              </tr>
            </table>

            <!-- Guarantee reminder -->
            <table width="100%" cellpadding="0" cellspacing="0" style="background:#00D4AA0D;border:1px solid #00D4AA30;border-radius:8px;margin-bottom:28px;">
              <tr>
                <td style="padding:16px 20px;">
                  <p style="margin:0 0 8px;color:#00D4AA;font-size:13px;font-weight:700;">🛡️ Votre garantie 12 mois</p>
                  <p style="margin:0;color:#bbb;font-size:13px;line-height:1.6;">Si l'un de vos avis est supprimé dans les 12 mois suivant votre commande, nous le remplaçons gratuitement et sans délai. Aucune démarche de votre part.</p>
                </td>
              </tr>
            </table>

            <!-- CTA -->
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td align="center">
                  <a href="mailto:${ADMIN_EMAIL}?subject=URL Trustpilot - Commande %23${order.orderId}" style="display:inline-block;background:#00D4AA;color:#0A0A0A;font-weight:900;font-size:15px;padding:14px 32px;border-radius:10px;text-decoration:none;">
                    Envoyer mon URL Trustpilot →
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <!-- Footer -->
        <tr>
          <td style="background:#111;padding:20px 32px;border-top:1px solid #1E1E1E;text-align:center;">
            <p style="margin:0 0 6px;color:#555;font-size:12px;">
              Une question ? <a href="mailto:${ADMIN_EMAIL}" style="color:#00D4AA;">${ADMIN_EMAIL}</a>
            </p>
            <p style="margin:0;color:#444;font-size:11px;">
              <a href="${SITE_URL}/cgv" style="color:#444;text-decoration:none;">CGV</a> &nbsp;·&nbsp;
              <a href="${SITE_URL}/confidentialite" style="color:#444;text-decoration:none;">Confidentialité</a> &nbsp;·&nbsp;
              <a href="${SITE_URL}" style="color:#444;text-decoration:none;">achat-avis-trustpilot.fr</a>
            </p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`
}

// ─── Webhook Handler ──────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  // Instanciate inside handler so env vars are available at runtime, not build time
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
  const resend = new Resend(process.env.RESEND_API_KEY)

  const body = await req.text()
  const sig = req.headers.get('stripe-signature')
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

  if (!sig || !webhookSecret) {
    return NextResponse.json({ error: 'Missing signature or webhook secret' }, { status: 400 })
  }

  let event: Stripe.Event
  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret)
  } catch (err) {
    console.error('Webhook signature verification failed:', err)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session

    // Only process paid sessions
    if (session.payment_status !== 'paid') {
      return NextResponse.json({ received: true })
    }

    // Retrieve session with line items to get the price ID
    const fullSession = await stripe.checkout.sessions.retrieve(session.id, {
      expand: ['line_items'],
    })

    const priceId = fullSession.line_items?.data[0]?.price?.id
    const product = priceId ? getProductFromPriceId(priceId) : null

    const customerName = session.customer_details?.name || 'Client'
    const customerEmail = session.customer_details?.email || ''
    const amountPaid = session.amount_total || 0
    const orderId = session.id.slice(-8).toUpperCase()

    const orderInfo = {
      customerName,
      customerEmail,
      qty: product?.qty || 0,
      delivery: product?.delivery || 'Standard',
      price: product?.price || amountPaid / 100,
      amountPaid,
      sessionId: session.id,
      orderId,
    }

    // Send both emails in parallel
    const emailPromises = [
      // Admin notification
      resend.emails.send({
        from: FROM_EMAIL,
        to: ADMIN_EMAIL,
        subject: `🛒 Nouvelle commande #${orderId} — ${product?.qty || '?'} avis (${product?.delivery || 'Standard'}) — ${(amountPaid / 100).toFixed(2)}€`,
        html: emailAdminHtml(orderInfo),
      }),
    ]

    // Client confirmation (only if we have their email)
    if (customerEmail) {
      emailPromises.push(
        resend.emails.send({
          from: `Achat Avis Trustpilot <${FROM_EMAIL}>`,
          to: customerEmail,
          replyTo: ADMIN_EMAIL,
          subject: `Confirmation de commande #${orderId} — ${product?.qty || ''} avis Trustpilot`,
          html: emailClientHtml(orderInfo),
        })
      )
    }

    try {
      await Promise.all(emailPromises)
      console.log(`Emails sent for order ${orderId}`)
    } catch (emailErr) {
      // Don't fail the webhook if email fails
      console.error('Email sending failed:', emailErr)
    }
  }

  return NextResponse.json({ received: true })
}
