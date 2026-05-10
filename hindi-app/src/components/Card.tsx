import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

export function CategoryCard({
  to, title, hindi, description, emoji, accent = 'saffron', badge,
}: {
  to: string
  title: string
  hindi?: string
  description: string
  emoji: string
  accent?: 'saffron' | 'green' | 'navy'
  badge?: string
}) {
  const border =
    accent === 'green' ? 'border-t-india-green' :
    accent === 'navy' ? 'border-t-navy' :
    'border-t-saffron'
  return (
    <Link
      to={to}
      className={`group block bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 border-t-4 ${border}`}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="text-4xl">{emoji}</div>
        {badge && (
          <span className="text-xs font-bold px-2 py-1 rounded-full bg-saffron/10 text-saffron-dark uppercase tracking-wide">
            {badge}
          </span>
        )}
      </div>
      {hindi && <div lang="hi" className="text-xl font-semibold text-navy mb-1">{hindi}</div>}
      <div className="font-bold text-lg text-gray-900 mb-1">{title}</div>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      <div className="mt-4 text-saffron-dark font-semibold text-sm flex items-center gap-1">
        Open <span className="transition-transform group-hover:translate-x-1">→</span>
      </div>
    </Link>
  )
}

export function InfoCard({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`bg-white rounded-2xl p-6 shadow-sm border border-gray-100 ${className}`}>
      {children}
    </div>
  )
}
