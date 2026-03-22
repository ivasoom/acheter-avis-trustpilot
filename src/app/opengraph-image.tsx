import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Achat Avis Trustpilot — Vrais comptes français, livraison 24h'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0A0A0A',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Accent gradient blob */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,212,170,0.15) 0%, transparent 70%)',
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(0,212,170,0.1)',
            border: '1px solid rgba(0,212,170,0.3)',
            borderRadius: '100px',
            padding: '8px 20px',
            marginBottom: '32px',
          }}
        >
          <span style={{ color: '#00D4AA', fontSize: '14px', fontWeight: 600 }}>
            ★ +2000 clients satisfaits
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: '64px',
            fontWeight: 800,
            color: '#FFFFFF',
            lineHeight: 1.1,
            marginBottom: '24px',
            maxWidth: '800px',
          }}
        >
          Achetez des avis{' '}
          <span style={{ color: '#00D4AA' }}>Trustpilot</span>
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: '24px',
            color: '#9CA3AF',
            marginBottom: '48px',
            maxWidth: '700px',
            lineHeight: 1.5,
          }}
        >
          Vrais comptes français · Livraison 24h · Garantie 12 mois
        </div>

        {/* Pills */}
        <div style={{ display: 'flex', gap: '16px' }}>
          {['✓ Indétectable', '✓ Satisfait ou remboursé', '✓ Support 7j/7'].map((text) => (
            <div
              key={text}
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '8px',
                padding: '10px 20px',
                color: '#D1D5DB',
                fontSize: '16px',
              }}
            >
              {text}
            </div>
          ))}
        </div>

        {/* Domain bottom right */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            right: '80px',
            color: '#4B5563',
            fontSize: '18px',
          }}
        >
          achat-avis-trustpilot.fr
        </div>
      </div>
    ),
    { ...size }
  )
}
