import { Link } from 'react-router-dom'

export function LockedItem({ title, meta, hindi }: { title: string; meta?: string; hindi?: string }) {
  return (
    <div className="bg-white rounded-xl p-4 sm:p-5 border border-gray-200 flex items-center gap-4">
      <div className="w-10 h-10 rounded-lg bg-saffron/10 text-saffron-dark flex items-center justify-center flex-shrink-0">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      </div>
      <div className="flex-1 min-w-0">
        {hindi && <div lang="hi" className="text-sm text-navy font-semibold truncate">{hindi}</div>}
        <div className="font-medium text-gray-900 truncate">{title}</div>
        {meta && <div className="text-xs text-gray-500">{meta}</div>}
      </div>
      <Link
        to="/contact"
        className="text-xs sm:text-sm font-semibold text-white bg-saffron hover:bg-saffron-dark px-3 py-2 rounded-lg whitespace-nowrap"
      >
        Request access
      </Link>
    </div>
  )
}
