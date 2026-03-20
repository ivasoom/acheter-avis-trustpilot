import Link from 'next/link'
import React from 'react'

// Callout / Info box
export function Callout({ type = 'tip', children }: { type?: 'tip' | 'warning' | 'info' | 'success'; children: React.ReactNode }) {
  const styles = {
    tip:     { border: 'border-accent/40',     bg: 'bg-accent/5',      icon: '💡', label: 'Conseil',      color: 'text-accent' },
    warning: { border: 'border-yellow-500/40', bg: 'bg-yellow-500/5',  icon: '⚠️', label: 'Attention',    color: 'text-yellow-400' },
    info:    { border: 'border-blue-500/40',   bg: 'bg-blue-500/5',    icon: 'ℹ️', label: 'À savoir',     color: 'text-blue-400' },
    success: { border: 'border-green-500/40',  bg: 'bg-green-500/5',   icon: '✅', label: 'Bon à savoir', color: 'text-green-400' },
  }
  const s = styles[type]
  return (
    <div className={`my-6 rounded-xl border ${s.border} ${s.bg} p-4 not-prose`}>
      <p className={`font-semibold text-sm mb-1 ${s.color}`}>{s.icon} {s.label}</p>
      <div className="text-gray-300 text-sm leading-relaxed">{children}</div>
    </div>
  )
}

// Stat card row
export function StatRow({ stats = [] }: { stats?: { value: string; label: string; source?: string }[] }) {
  return (
    <div className="my-8 grid grid-cols-2 sm:grid-cols-4 gap-3 not-prose">
      {stats.map((s, i) => (
        <div key={i} className="bg-surface border border-[#1E1E1E] rounded-xl p-4 text-center">
          <p className="text-2xl sm:text-3xl font-black text-accent mb-1">{s.value}</p>
          <p className="text-gray-400 text-xs leading-snug">{s.label}</p>
          {s.source && <p className="text-gray-600 text-xs mt-1 italic">{s.source}</p>}
        </div>
      ))}
    </div>
  )
}

// Step list
export function Steps({ steps = [] }: { steps?: { title: string; description: string }[] }) {
  return (
    <div className="my-8 space-y-4 not-prose">
      {steps.map((step, i) => (
        <div key={i} className="flex gap-4 bg-surface border border-[#1E1E1E] rounded-xl p-4">
          <div className="flex-shrink-0 w-8 h-8 bg-accent text-black rounded-full flex items-center justify-center font-bold text-sm">
            {i + 1}
          </div>
          <div>
            <p className="text-white font-semibold text-sm mb-1">{step.title}</p>
            <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

// Comparison table — supports two APIs:
// 1. headers={["col1","col2"]} rows={[["val1","val2"], ...]}  (simple array format)
// 2. col1="..." col2="..." rows={[{criterion, col1, col2}]}   (object format)
export function CompareTable({ rows = [], col1, col2, headers }: {
  rows?: ({ criterion: string; col1: string | boolean; col2: string | boolean } | string[])[]
  col1?: string
  col2?: string
  headers?: string[]
}) {
  const cell = (v: string | boolean | undefined) => {
    if (v === true)  return <span className="text-accent font-bold text-base">✓</span>
    if (v === false) return <span className="text-red-400 font-bold text-base">✗</span>
    return <span className="text-gray-300 text-sm">{v as string}</span>
  }
  // Detect format: headers array = simple format
  const isSimple = Array.isArray(headers) && headers.length > 0
  const hdrs = isSimple ? headers! : [col1 || 'Critère', col2 || '']
  return (
    <div className="my-8 overflow-hidden rounded-xl border border-[#1E1E1E] not-prose">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-[#1E1E1E] bg-surface">
            {hdrs.map((h, i) => (
              <th key={i} className={`p-3 ${i === 0 ? 'text-left' : 'text-center'} ${i === 1 ? 'text-accent font-bold' : 'text-gray-400 font-medium'}`}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i < rows.length - 1 ? 'border-b border-[#1E1E1E]' : ''}>
              {isSimple
                ? (row as string[]).map((cell_val, j) => (
                    <td key={j} className={`p-3 ${j === 0 ? 'text-gray-300' : 'text-center text-gray-300'}`}>{cell_val}</td>
                  ))
                : (() => { const r = row as { criterion: string; col1: string | boolean; col2: string | boolean }; return [
                    <td key={0} className="p-3 text-gray-300">{r.criterion}</td>,
                    <td key={1} className="p-3 text-center">{cell(r.col1)}</td>,
                    <td key={2} className="p-3 text-center">{cell(r.col2)}</td>
                  ]})()
              }
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// Pro/Con box
export function ProCon({ pros = [], cons = [] }: { pros?: string[]; cons?: string[] }) {
  return (
    <div className="my-8 grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose">
      <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-4">
        <p className="text-green-400 font-bold text-sm mb-3">✓ Avantages</p>
        <ul className="space-y-2">
          {pros.map((p, i) => (
            <li key={i} className="text-gray-300 text-sm flex gap-2">
              <span className="text-green-400 flex-shrink-0">+</span>{p}
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-4">
        <p className="text-red-400 font-bold text-sm mb-3">✗ Inconvénients</p>
        <ul className="space-y-2">
          {cons.map((c, i) => (
            <li key={i} className="text-gray-300 text-sm flex gap-2">
              <span className="text-red-400 flex-shrink-0">−</span>{c}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

// Highlight quote
export function Quote({ children, author }: { children: React.ReactNode; author?: string }) {
  return (
    <div className="my-8 border-l-4 border-accent bg-accent/5 rounded-r-xl p-5 not-prose">
      <p className="text-white text-lg font-medium leading-relaxed italic">{children as string}</p>
      {author && <p className="text-accent text-sm mt-2 font-semibold">— {author}</p>}
    </div>
  )
}

// Checklist
export function Checklist({ items = [], title }: { items?: string[]; title?: string }) {
  return (
    <div className="my-6 bg-surface border border-[#1E1E1E] rounded-xl p-5 not-prose">
      {title && <p className="text-white font-bold text-sm mb-3">{title}</p>}
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
            <span className="text-accent flex-shrink-0 mt-0.5">✓</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

// Warning box
export function Warning({ children, title }: { children?: React.ReactNode; title?: string }) {
  return (
    <div className="my-6 border border-red-500/30 bg-red-500/5 rounded-xl p-4 not-prose">
      <p className="text-red-400 font-bold text-sm mb-1">⚠️ {title || 'À éviter'}</p>
      {children && <div className="text-gray-300 text-sm leading-relaxed">{children}</div>}
    </div>
  )
}

// ROI Calculator display — supports items[] format AND investment/gain/roi props
export function RoiBox({ items, investment, investmentLabel, gain, gainLabel, roi, note }: {
  items?: { label: string; value: string; highlight?: boolean }[]
  investment?: number; investmentLabel?: string
  gain?: number; gainLabel?: string
  roi?: string; note?: string
}) {
  const rows = items || [
    ...(investment !== undefined ? [{ label: investmentLabel || 'Investissement', value: `${investment}€` }] : []),
    ...(gain !== undefined ? [{ label: gainLabel || 'Gain estimé', value: `${gain.toLocaleString('fr-FR')}€`, highlight: true }] : []),
    ...(roi ? [{ label: 'ROI', value: roi, highlight: true }] : []),
  ]
  return (
    <div className="my-8 bg-surface border border-accent/30 rounded-xl overflow-hidden not-prose">
      <div className="bg-accent/10 px-5 py-3 border-b border-accent/20">
        <p className="text-accent font-bold text-sm">📊 Calcul ROI</p>
      </div>
      <div className="divide-y divide-[#1E1E1E]">
        {rows.map((item, i) => (
          <div key={i} className={`flex justify-between items-center px-5 py-3 ${item.highlight ? 'bg-accent/5' : ''}`}>
            <span className="text-gray-400 text-sm">{item.label}</span>
            <span className={`font-bold text-sm ${item.highlight ? 'text-accent text-base' : 'text-white'}`}>{item.value}</span>
          </div>
        ))}
      </div>
      {note && <p className="text-gray-500 text-xs px-5 py-3 border-t border-[#1E1E1E] italic">{note}</p>}
    </div>
  )
}

// Internal links block
export function RelatedArticles({ articles = [] }: { articles?: { title: string; href: string; category: string }[] }) {
  return (
    <div className="my-10 bg-surface border border-[#1E1E1E] rounded-xl p-5 not-prose">
      <p className="text-white font-bold text-sm mb-4">📚 Articles liés</p>
      <ul className="space-y-3">
        {articles.map((a, i) => (
          <li key={i}>
            <Link href={a.href} className="flex items-start gap-3 group">
              <span className="bg-accent/10 text-accent text-xs font-semibold px-2 py-0.5 rounded-full flex-shrink-0 mt-0.5">{a.category}</span>
              <span className="text-gray-300 text-sm group-hover:text-accent transition-colors">{a.title} →</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

// CTA inline — supports href/cta AND buttonHref/buttonText aliases
export function CtaInline({ title, description, href, cta, buttonHref, buttonText }: {
  title: string; description?: string; href?: string; cta?: string; buttonHref?: string; buttonText?: string
}) {
  const link = href || buttonHref || '/#services'
  const label = cta || buttonText || 'Voir nos offres →'
  return (
    <div className="my-10 bg-accent/10 border border-accent/30 rounded-xl p-6 text-center not-prose">
      <p className="text-white font-bold text-lg mb-2">{title}</p>
      {description && <p className="text-gray-400 text-sm mb-4">{description}</p>}
      <Link
        href={link}
        className="inline-flex items-center gap-2 bg-accent text-black font-bold px-6 py-2.5 rounded-xl hover:bg-accent-hover transition-colors text-sm"
      >
        {label}
      </Link>
    </div>
  )
}

// Summary box
export function Summary({ points = [], title }: { points?: string[]; title?: string }) {
  return (
    <div className="my-6 bg-accent/5 border border-accent/20 rounded-xl p-5 not-prose">
      <p className="text-accent font-bold text-sm mb-3">📋 {title || 'Ce que vous allez apprendre'}</p>
      <ul className="space-y-1.5">
        {points.map((p, i) => (
          <li key={i} className="text-gray-300 text-sm flex gap-2">
            <span className="text-accent flex-shrink-0">→</span>{p}
          </li>
        ))}
      </ul>
    </div>
  )
}

// Section divider
export function SectionDivider({ label }: { label: string }) {
  return (
    <div className="my-10 flex items-center gap-4 not-prose">
      <div className="flex-1 h-px bg-[#1E1E1E]" />
      <span className="text-accent text-xs font-bold uppercase tracking-widest">{label}</span>
      <div className="flex-1 h-px bg-[#1E1E1E]" />
    </div>
  )
}

// Score / Rating visual
export function ScoreBar({ label, score, max = 5 }: { label: string; score: number; max?: number }) {
  const pct = (score / max) * 100
  return (
    <div className="my-2 not-prose">
      <div className="flex justify-between mb-1">
        <span className="text-gray-300 text-sm">{label}</span>
        <span className="text-accent text-sm font-bold">{score}/{max}</span>
      </div>
      <div className="w-full bg-[#1E1E1E] rounded-full h-2">
        <div className="bg-accent h-2 rounded-full transition-all" style={{ width: `${pct}%` }} />
      </div>
    </div>
  )
}

export function ScoreGroup({ title, scores = [] }: { title?: string; scores?: { label: string; score: number; max?: number }[] }) {
  return (
    <div className="my-8 bg-surface border border-[#1E1E1E] rounded-xl p-5 not-prose">
      {title && <p className="text-white font-bold text-sm mb-4">{title}</p>}
      <div className="space-y-3">
        {scores.map((s, i) => <ScoreBar key={i} {...s} />)}
      </div>
    </div>
  )
}

// Timeline
export function Timeline({ events = [] }: { events?: { date: string; title: string; description?: string }[] }) {
  return (
    <div className="my-8 space-y-0 not-prose">
      {events.map((e, i) => (
        <div key={i} className="flex gap-4">
          <div className="flex flex-col items-center">
            <div className="w-3 h-3 bg-accent rounded-full flex-shrink-0 mt-1" />
            {i < events.length - 1 && <div className="w-0.5 bg-[#1E1E1E] flex-1 mt-1" />}
          </div>
          <div className="pb-6">
            <p className="text-accent text-xs font-bold mb-0.5">{e.date}</p>
            <p className="text-white font-semibold text-sm">{e.title}</p>
            {e.description && <p className="text-gray-400 text-sm mt-1">{e.description}</p>}
          </div>
        </div>
      ))}
    </div>
  )
}

// Pricing mini table
export function PriceTable({ rows = [] }: { rows?: { tier: string; price: string; quality: string; survival: string; highlight?: boolean }[] }) {
  return (
    <div className="my-8 overflow-hidden rounded-xl border border-[#1E1E1E] not-prose">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-[#1E1E1E] bg-surface">
            <th className="text-left p-3 text-gray-400 font-medium">Niveau</th>
            <th className="p-3 text-center text-gray-400 font-medium">Prix/avis</th>
            <th className="p-3 text-center text-gray-400 font-medium">Qualité</th>
            <th className="p-3 text-center text-gray-400 font-medium">Survie 12 mois</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={`${i < rows.length - 1 ? 'border-b border-[#1E1E1E]' : ''} ${row.highlight ? 'bg-accent/5' : ''}`}>
              <td className={`p-3 font-semibold ${row.highlight ? 'text-accent' : 'text-gray-300'}`}>{row.tier}</td>
              <td className="p-3 text-center text-gray-300">{row.price}</td>
              <td className="p-3 text-center text-gray-300">{row.quality}</td>
              <td className={`p-3 text-center font-bold ${row.highlight ? 'text-accent' : 'text-gray-300'}`}>{row.survival}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export const mdxComponents = {
  Callout,
  StatRow,
  Steps,
  CompareTable,
  ProCon,
  Quote,
  Checklist,
  Warning,
  RoiBox,
  RelatedArticles,
  CtaInline,
  Summary,
  SectionDivider,
  ScoreBar,
  ScoreGroup,
  Timeline,
  PriceTable,
}
