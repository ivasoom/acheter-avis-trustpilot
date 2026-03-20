import { MDXRemote } from 'next-mdx-remote/rsc'
import matter from 'gray-matter'
import fs from 'fs'
import path from 'path'
import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE } from '@/config/site'

const BLOG_DIR = path.join(process.cwd(), 'src/content/blog')

const SLUGS = [
  'pourquoi-acheter-avis-trustpilot',
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
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const { frontmatter, content } = getBlogPost(slug)

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-accent transition-colors">Accueil</Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-accent transition-colors">Blog</Link>
        <span>/</span>
        <span className="text-gray-400 truncate">{frontmatter.title as string}</span>
      </nav>

      {/* Article Header */}
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          {frontmatter.category && (
            <span className="bg-accent/10 text-accent text-xs font-semibold px-2.5 py-1 rounded-full">
              {frontmatter.category as string}
            </span>
          )}
          <span className="text-gray-500 text-sm">{frontmatter.readTime as string} de lecture</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
          {frontmatter.title as string}
        </h1>
        <p className="text-gray-400 text-lg leading-relaxed mb-6">
          {frontmatter.description as string}
        </p>
        <div className="flex items-center gap-3 pb-8 border-b border-[#1E1E1E]">
          <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center text-accent text-sm font-bold">
            A
          </div>
          <div>
            <p className="text-white text-sm font-medium">Équipe AvisExpert</p>
            <p className="text-gray-500 text-xs">{frontmatter.date as string}</p>
          </div>
        </div>
      </header>

      {/* MDX Content */}
      <article className="prose prose-invert prose-sm sm:prose-base max-w-none
        prose-headings:text-white prose-headings:font-bold
        prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
        prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
        prose-p:text-gray-400 prose-p:leading-relaxed prose-p:mb-4
        prose-a:text-accent prose-a:no-underline hover:prose-a:underline
        prose-strong:text-white
        prose-ul:text-gray-400 prose-li:mb-1
        prose-ol:text-gray-400
        prose-blockquote:border-accent prose-blockquote:text-gray-400
        prose-code:text-accent prose-code:bg-surface prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded">
        <MDXRemote source={content} />
      </article>

      {/* CTA */}
      <div className="mt-16 bg-accent/10 border border-accent/30 rounded-2xl p-8 text-center">
        <h2 className="text-white font-bold text-2xl mb-3">Prêt à booster votre réputation Trustpilot ?</h2>
        <p className="text-gray-400 mb-6">Commandez vos avis Trustpilot depuis de vrais comptes français. Livraison en 24h.</p>
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
