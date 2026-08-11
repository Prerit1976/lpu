import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/p5', label: 'Primary 5' },
  { to: '/p6', label: 'Primary 6' },
  { to: '/about', label: 'About Pooja' },
  { to: '/contact', label: 'Contact' },
]

export function Layout() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  useEffect(() => setOpen(false), [location.pathname])
  useEffect(() => { window.scrollTo(0, 0) }, [location.pathname])

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-gradient-to-r from-saffron to-saffron-dark text-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-extrabold text-lg sm:text-xl tracking-tight">
            <span className="hindi text-2xl">हिं</span>
            <span>Hindi <span className="text-navy">Fun Learn</span></span>
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map(n => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.end}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-semibold transition ${
                    isActive ? 'bg-white/20 text-white' : 'text-white/90 hover:bg-white/15'
                  }`
                }
              >
                {n.label}
              </NavLink>
            ))}
          </nav>
          <button
            onClick={() => setOpen(o => !o)}
            className="md:hidden p-2 rounded-md hover:bg-white/15"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
        {open && (
          <nav className="md:hidden bg-saffron-dark border-t border-white/20">
            <div className="max-w-6xl mx-auto px-4 py-2 flex flex-col">
              {navItems.map(n => (
                <NavLink
                  key={n.to}
                  to={n.to}
                  end={n.end}
                  className={({ isActive }) =>
                    `px-3 py-3 rounded-md text-base font-semibold ${
                      isActive ? 'bg-white/20' : 'hover:bg-white/15'
                    }`
                  }
                >
                  {n.label}
                </NavLink>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-navy text-white/80 mt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 grid sm:grid-cols-3 gap-8">
          <div>
            <div className="font-extrabold text-white text-lg mb-2">Hindi Fun Learn</div>
            <p className="text-sm">Singapore MOE Hindi tuition for Primary 1 to A-Level. Personalised online classes with Dr. Pooja Chandra.</p>
          </div>
          <div>
            <div className="font-bold text-white mb-2">Explore</div>
            <ul className="text-sm space-y-1">
              <li><Link className="hover:text-white" to="/p5">Primary 5 Resources</Link></li>
              <li><Link className="hover:text-white" to="/p6">Primary 6 (coming soon)</Link></li>
              <li><Link className="hover:text-white" to="/p5/quiz">Free Practice Quiz</Link></li>
              <li><Link className="hover:text-white" to="/about">About the Teacher</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-bold text-white mb-2">Contact</div>
            <ul className="text-sm space-y-1">
              <li><a className="hover:text-white" href="mailto:hindifunlearn@gmail.com">hindifunlearn@gmail.com</a></li>
              <li><a className="hover:text-white" href="https://wa.me/6588849220">WhatsApp: +65 8884 9220</a></li>
              <li><a className="hover:text-white" target="_blank" rel="noopener" href="https://www.linkedin.com/in/dr-pooja-chandra-9452a1251/">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 py-4 text-center text-xs">
          © {new Date().getFullYear()} Hindi Fun Learn. Built with care for Singapore students.
        </div>
      </footer>
    </div>
  )
}
