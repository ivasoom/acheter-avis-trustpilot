import { MetadataRoute } from 'next'
import { SITE } from '@/config/site'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE.url, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE.url}/pourquoi-nous`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE.url}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE.url}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE.url}/blog/pourquoi-acheter-avis-trustpilot`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE.url}/blog/comment-ameliorer-reputation-en-ligne`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE.url}/blog/avis-trustpilot-et-seo`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  ]
}
