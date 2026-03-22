import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  try {
    const { name, email, subject, message } = await req.json()

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 })
    }

    if (String(name).length > 100 || String(subject).length > 200 || String(message).length > 5000) {
      return NextResponse.json({ error: 'Input too long' }, { status: 400 })
    }

    const safe = (s: string) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

    await resend.emails.send({
      from: 'noreply@achat-avis-trustpilot.fr',
      to: 'contact@achat-avis-trustpilot.fr',
      subject: `[Contact] ${safe(subject)} - ${safe(name)}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #00D4AA;">Nouveau message de contact</h2>
          <p><strong>Nom:</strong> ${safe(name)}</p>
          <p><strong>Email:</strong> ${safe(email)}</p>
          <p><strong>Sujet:</strong> ${safe(subject)}</p>
          <hr style="border-color: #eee; margin: 20px 0;" />
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${safe(message)}</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact email error:', error)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
