import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: '#0A0A0A',
        surface: '#111111',
        border: '#1E1E1E',
        accent: '#00D4AA',
        'accent-hover': '#00B894',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': '#9CA3AF',
            '--tw-prose-headings': '#FFFFFF',
            '--tw-prose-bold': '#FFFFFF',
            '--tw-prose-links': '#00D4AA',
            '--tw-prose-quotes': '#9CA3AF',
            '--tw-prose-quote-borders': '#00D4AA',
            '--tw-prose-code': '#00D4AA',
            '--tw-prose-pre-bg': '#111111',
            '--tw-prose-counters': '#6B7280',
            '--tw-prose-bullets': '#6B7280',
            '--tw-prose-hr': '#1E1E1E',
            '--tw-prose-th-borders': '#1E1E1E',
            '--tw-prose-td-borders': '#1E1E1E',
            'h2': { marginTop: '2.5rem', marginBottom: '1rem' },
            'h3': { marginTop: '2rem', marginBottom: '0.75rem' },
            'p': { marginBottom: '1.25rem', lineHeight: '1.8' },
            'li': { marginBottom: '0.4rem' },
            'table': { fontSize: '0.875rem' },
            'blockquote p': { fontStyle: 'normal' },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
export default config
