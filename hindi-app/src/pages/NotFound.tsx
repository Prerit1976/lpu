import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <section className="max-w-2xl mx-auto px-4 sm:px-6 py-24 text-center">
      <div lang="hi" className="text-7xl text-saffron font-bold mb-4">४०४</div>
      <h1 className="text-3xl font-extrabold text-navy mb-2">Page not found</h1>
      <p className="text-gray-600 mb-8">The page you are looking for does not exist or has been moved.</p>
      <Link to="/" className="inline-block bg-saffron text-white font-bold px-6 py-3 rounded-xl hover:bg-saffron-dark">
        Back to home
      </Link>
    </section>
  )
}
