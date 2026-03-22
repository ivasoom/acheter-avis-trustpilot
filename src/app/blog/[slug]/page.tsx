import { MDXRemote } from 'next-mdx-remote/rsc'
import matter from 'gray-matter'
import fs from 'fs'
import path from 'path'
import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE } from '@/config/site'
import { mdxComponents } from '@/components/mdx/MdxComponents'

const BLOG_DIR = path.join(process.cwd(), 'src/content/blog')

// All blog slugs
const SLUGS = [
  'pourquoi-acheter-avis-trustpilot',
  'acheter-avis-trustpilot-guide-complet',
  'achat-avis-trustpilot-pas-cher',
  'avis-trustpilot-verifies-france',
  'comment-avoir-avis-trustpilot-rapidement',
  'augmenter-note-trustpilot',
  'supprimer-avis-negatif-trustpilot',
  'trustpilot-algorithme-detection-avis',
  'avis-trustpilot-conversion-ventes',
  'reputation-en-ligne-ecommerce',
  'acheter-avis-google-vs-trustpilot',
  'comment-ameliorer-reputation-en-ligne',
  'avis-trustpilot-et-seo',
]

function getBlogPost(slug: string) {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`)
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  return { frontmatter: data, content }
}

export async function generateStaticParams() {
  return SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const { frontmatter } = getBlogPost(slug)
  return {
    title: frontmatter.title as string,
    description: frontmatter.description as string,
    alternates: {
      canonical: `${SITE.url}/blog/${slug}`,
    },
    openGraph: {
      title: frontmatter.title as string,
      description: frontmatter.description as string,
      type: 'article',
      publishedTime: frontmatter.date as string,
      url: `${SITE.url}/blog/${slug}`,
      siteName: SITE.name,
      locale: 'fr_FR',
    },
    twitter: {
      card: 'summary_large_image',
      title: frontmatter.title as string,
      description: frontmatter.description as string,
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const { frontmatter, content } = getBlogPost(slug)

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: frontmatter.title,
    description: frontmatter.description,
    author: { '@type': 'Organization', name: SITE.name, url: SITE.url },
    publisher: { '@type': 'Organization', name: SITE.name, url: SITE.url },
    datePublished: frontmatter.date,
    dateModified: frontmatter.date,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE.url}/blog/${slug}` },
    url: `${SITE.url}/blog/${slug}`,
    inLanguage: 'fr-FR',
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE.url },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE.url}/blog` },
      { '@type': 'ListItem', position: 3, name: frontmatter.title, item: `${SITE.url}/blog/${slug}` },
    ],
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-accent transition-colors">Accueil</Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-accent transition-colors">Blog</Link>
        <span>/</span>
        <span className="text-gray-400 truncate">{frontmatter.title as string}</span>
      </nav>

      {/* Article Header */}
      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          {frontmatter.category && (
            <span className="bg-accent/10 text-accent text-xs font-semibold px-2.5 py-1 rounded-full">
              {frontmatter.category as string}
            </span>
          )}
          <span className="text-gray-500 text-sm">{frontmatter.readTime as string} de lecture</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-5">
          {frontmatter.title as string}
        </h1>
        <p className="text-gray-400 text-lg leading-relaxed mb-8">
          {frontmatter.description as string}
        </p>
        <div className="flex items-center gap-3 pb-8 border-b border-[#1E1E1E]">
          <div className="w-9 h-9 bg-accent/20 rounded-full flex items-center justify-center text-accent text-sm font-bold flex-shrink-0">
            A
          </div>
          <div>
            <p className="text-white text-sm font-medium">Équipe Achat Avis Trustpilot</p>
            <p className="text-gray-500 text-xs">{frontmatter.date as string}</p>
          </div>
        </div>
      </header>

      {/* MDX Content */}
      <article className="
        prose prose-invert max-w-none
        prose-headings:font-bold prose-headings:text-white
        prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-5 prose-h2:pb-3 prose-h2:border-b prose-h2:border-[#1E1E1E]
        prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-gray-100
        prose-p:text-gray-400 prose-p:leading-[1.85] prose-p:mb-5
        prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-a:font-medium
        prose-strong:text-white prose-strong:font-semibold
        prose-ul:text-gray-400 prose-ul:my-4 prose-li:mb-2 prose-li:leading-relaxed
        prose-ol:text-gray-400 prose-ol:my-4
        prose-blockquote:border-l-4 prose-blockquote:border-accent prose-blockquote:bg-accent/5
        prose-blockquote:rounded-r-xl prose-blockquote:py-2 prose-blockquote:px-4
        prose-blockquote:text-gray-300 prose-blockquote:not-italic
        prose-code:text-accent prose-code:bg-surface prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
        prose-pre:bg-surface prose-pre:border prose-pre:border-[#1E1E1E]
        prose-table:text-sm
        prose-thead:border-b prose-thead:border-[#1E1E1E]
        prose-th:text-gray-400 prose-th:font-medium prose-th:p-3
        prose-td:text-gray-300 prose-td:p-3
        prose-tr:border-b prose-tr:border-[#1E1E1E]
        prose-hr:border-[#1E1E1E] prose-hr:my-10
      ">
        <MDXRemote source={content} components={mdxComponents} />
      </article>

      {/* CTA bottom */}
      <div className="mt-16 bg-accent/10 border border-accent/30 rounded-2xl p-8 text-center">
        <h2 className="text-white font-bold text-2xl mb-3">Prêt à booster votre réputation Trustpilot ?</h2>
        <p className="text-gray-400 mb-6">Commandez vos avis Trustpilot depuis de vrais comptes français. Livraison en 24h. Garantie 12 mois.</p>
        <Link
          href="/#services"
          className="inline-flex items-center gap-2 bg-accent text-black font-bold px-8 py-3 rounded-xl hover:bg-accent-hover transition-colors"
        >
          Voir les offres →
        </Link>
      </div>

      {/* Back to blog */}
      <div className="mt-8 text-center">
        <Link href="/blog" className="text-gray-500 hover:text-accent text-sm transition-colors">
          ← Retour au blog
        </Link>
      </div>
    </div>
  )
}
