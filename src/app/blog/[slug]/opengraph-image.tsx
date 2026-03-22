import { ImageResponse } from 'next/og'
import matter from 'gray-matter'
import fs from 'fs'
import path from 'path'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const BLOG_DIR = path.join(process.cwd(), 'src/content/blog')

function getPost(slug: string) {
  try {
    const raw = fs.readFileSync(path.join(BLOG_DIR, `${slug}.mdx`), 'utf-8')
    return matter(raw).data
  } catch {
    return null
  }
}

export async function generateImageMetadata({ params }: { params: { slug: string } }) {
  const fm = getPost(params.slug)
  return [{ id: params.slug, alt: fm?.title ?? 'Blog — Achat Avis Trustpilot' }]
}

export default async function OGImage({ params }: { params: { slug: string } }) {
  const fm = getPost(params.slug)
  const title = fm?.title ?? 'Blog'
  const category = fm?.category ?? 'Guide'
  const readTime = fm?.readTime ?? ''

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

        {/* Category + read time */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '32px' }}>
          <div
            style={{
              background: 'rgba(0,212,170,0.1)',
              border: '1px solid rgba(0,212,170,0.3)',
              borderRadius: '100px',
              padding: '8px 20px',
              color: '#00D4AA',
              fontSize: '14px',
              fontWeight: 600,
            }}
          >
            {category}
          </div>
          {readTime ? (
            <div
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '100px',
                padding: '8px 20px',
                color: '#9CA3AF',
                fontSize: '14px',
              }}
            >
              {readTime} de lecture
            </div>
          ) : null}
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: title.length > 60 ? '44px' : '54px',
            fontWeight: 800,
            color: '#FFFFFF',
            lineHeight: 1.2,
            marginBottom: '40px',
            maxWidth: '950px',
          }}
        >
          {title}
        </div>

        {/* Branding */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div
            style={{
              background: '#00D4AA',
              borderRadius: '8px',
              padding: '6px 14px',
              color: '#0A0A0A',
              fontSize: '15px',
              fontWeight: 700,
            }}
          >
            Blog
          </div>
          <span style={{ color: '#6B7280', fontSize: '16px' }}>achat-avis-trustpilot.fr</span>
        </div>

        {/* Domain bottom right */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            right: '80px',
            color: '#4B5563',
            fontSize: '16px',
          }}
        >
          achat-avis-trustpilot.fr
        </div>
      </div>
    ),
    { ...size }
  )
}
