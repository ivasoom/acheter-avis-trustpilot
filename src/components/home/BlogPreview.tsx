import Link from 'next/link'

const POSTS = [
  {
    slug: 'pourquoi-acheter-avis-trustpilot',
    title: 'Pourquoi acheter des avis Trustpilot en 2025 ?',
    excerpt: '93% des consommateurs lisent les avis en ligne avant d\'acheter. Découvrez pourquoi Trustpilot est devenu incontournable et comment l\'achat d\'avis peut transformer votre business.',
    date: '15 mars 2025',
    readTime: '8 min',
  },
  {
    slug: 'comment-ameliorer-reputation-en-ligne',
    title: 'Comment améliorer votre réputation en ligne en 2025',
    excerpt: 'La réputation en ligne est l\'actif le plus précieux de votre entreprise. Découvrez 5 stratégies éprouvées pour améliorer votre image digitale et convertir plus de visiteurs.',
    date: '8 mars 2025',
    readTime: '10 min',
  },
  {
    slug: 'avis-trustpilot-et-seo',
    title: 'Avis Trustpilot et SEO : le combo gagnant',
    excerpt: 'Les avis Trustpilot apparaissent directement dans les résultats Google avec des étoiles. Voici comment exploiter ce levier SEO pour augmenter votre CTR et vos conversions.',
    date: '1 mars 2025',
    readTime: '7 min',
  },
]

export function BlogPreview() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-accent text-sm font-semibold uppercase tracking-wider">Blog</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
              Conseils & Stratégies
            </h2>
          </div>
          <Link
            href="/blog"
            className="text-accent hover:text-accent-hover font-medium text-sm flex items-center gap-1 transition-colors"
          >
            Tous les articles <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-surface border border-[#1E1E1E] rounded-2xl p-6 hover:border-accent/40 transition-all duration-300 flex flex-col"
            >
              <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.readTime} de lecture</span>
              </div>
              <h3 className="text-white font-bold text-lg mb-3 group-hover:text-accent transition-colors leading-snug">
                {post.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">
                {post.excerpt}
              </p>
              <span className="text-accent text-sm font-medium group-hover:gap-2 flex items-center gap-1 transition-all">
                Lire la suite <span aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
