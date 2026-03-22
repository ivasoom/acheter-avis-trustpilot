import { MetadataRoute } from 'next'
import { SITE } from '@/config/site'

const BLOG_ARTICLES: { slug: string; date: string; priority: number }[] = [
  { slug: 'pourquoi-acheter-avis-trustpilot', date: '2026-03-15', priority: 0.9 },
  { slug: 'acheter-avis-trustpilot-guide-complet', date: '2026-02-20', priority: 0.9 },
  { slug: 'achat-avis-trustpilot-pas-cher', date: '2026-02-22', priority: 0.8 },
  { slug: 'avis-trustpilot-verifies-france', date: '2026-02-25', priority: 0.8 },
  { slug: 'comment-avoir-avis-trustpilot-rapidement', date: '2026-03-01', priority: 0.8 },
  { slug: 'augmenter-note-trustpilot', date: '2026-03-05', priority: 0.8 },
  { slug: 'supprimer-avis-negatif-trustpilot', date: '2026-03-08', priority: 0.7 },
  { slug: 'trustpilot-algorithme-detection-avis', date: '2026-03-10', priority: 0.7 },
  { slug: 'avis-trustpilot-conversion-ventes', date: '2026-03-12', priority: 0.8 },
  { slug: 'reputation-en-ligne-ecommerce', date: '2026-03-14', priority: 0.7 },
  { slug: 'acheter-avis-google-vs-trustpilot', date: '2026-03-17', priority: 0.7 },
  { slug: 'comment-ameliorer-reputation-en-ligne', date: '2026-03-08', priority: 0.7 },
  { slug: 'avis-trustpilot-et-seo', date: '2026-03-01', priority: 0.7 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE.url, lastModified: new Date('2026-03-22'), changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE.url}/pourquoi-nous`, lastModified: new Date('2026-03-01'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE.url}/blog`, lastModified: new Date('2026-03-22'), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE.url}/contact`, lastModified: new Date('2026-03-01'), changeFrequency: 'monthly', priority: 0.6 },
    ...BLOG_ARTICLES.map(({ slug, date, priority }) => ({
      url: `${SITE.url}/blog/${slug}`,
      lastModified: new Date(date),
      changeFrequency: 'monthly' as const,
      priority,
    })),
  ]
}
