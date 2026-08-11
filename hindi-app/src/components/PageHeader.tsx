import type { ReactNode } from 'react'

export function PageHeader({ eyebrow, title, hindi, children, tone = 'navy' }: {
  eyebrow?: string
  title: string
  hindi?: string
  children?: ReactNode
  tone?: 'navy' | 'saffron' | 'green'
}) {
  const bg =
    tone === 'navy' ? 'from-navy to-navy-dark' :
    tone === 'green' ? 'from-india-green to-india-green-dark' :
    'from-saffron to-saffron-dark'
  return (
    <header className={`bg-gradient-to-br ${bg} text-white`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {eyebrow && <div className="text-sm font-semibold tracking-wide uppercase text-white/80 mb-2">{eyebrow}</div>}
        {hindi && <div lang="hi" className="text-3xl sm:text-4xl font-bold mb-2">{hindi}</div>}
        <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">{title}</h1>
        {children && <div className="mt-3 text-white/90 max-w-3xl">{children}</div>}
      </div>
    </header>
  )
}
