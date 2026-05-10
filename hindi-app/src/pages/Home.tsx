import { Link } from 'react-router-dom'
import { CategoryCard } from '../components/Card'

export function Home() {
  return (
    <>
      <section className="bg-gradient-to-b from-orange-50 via-cream to-cream pt-12 sm:pt-20 pb-16 sm:pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div lang="hi" className="text-5xl sm:text-7xl font-bold text-saffron mb-3 leading-none">हिंदी सीखें, हिंदी जानें</div>
          <p className="text-saffron-dark font-bold tracking-wider text-sm sm:text-base mb-4 uppercase">Hindi Fun Learn</p>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-navy tracking-tight mb-5 leading-tight">
            Singapore MOE Hindi Tuition,<br className="hidden sm:block" /> Built for Confidence
          </h1>
          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            Personalised online Hindi classes for Singapore students from <strong>Primary 1 to A-Level</strong>. Taught by{' '}
            <strong>Dr. Pooja Chandra</strong> — PhD, 17 years of teaching experience, Singapore Teaching Certificate.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link to="/p5" className="px-6 py-3 rounded-full bg-saffron text-white font-bold shadow-lg shadow-saffron/30 hover:bg-saffron-dark transition">
              Explore P5 Resources
            </Link>
            <Link to="/p5/quiz" className="px-6 py-3 rounded-full bg-white text-navy font-bold border-2 border-navy/10 hover:border-navy hover:bg-navy hover:text-white transition">
              Try a Free Quiz
            </Link>
            <Link to="/contact" className="px-6 py-3 rounded-full bg-india-green text-white font-bold hover:bg-india-green-dark transition">
              Book a Class
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 -mt-8 sm:-mt-12">
        <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 grid sm:grid-cols-3 gap-6 text-center">
          <Stat hindi="१७+" en="Years of teaching experience" />
          <Stat hindi="P1 → A" en="Levels covered (P1 to A-Level)" />
          <Stat hindi="MOE" en="Singapore syllabus aligned" />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="text-center mb-10">
          <div className="text-saffron font-bold uppercase tracking-wider text-sm mb-2">Choose your level</div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy">Where would you like to start?</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">We are launching with rich Primary 5 content first. Primary 6 and other levels are being curated next.</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          <CategoryCard
            to="/p5"
            title="Primary 5 Hindi"
            hindi="कक्षा ५"
            description="Composition, comprehension, oral practice, mock papers, weighted assessments, vocabulary and idioms."
            emoji="📘"
            accent="saffron"
            badge="Available now"
          />
          <CategoryCard
            to="/p6"
            title="Primary 6 Hindi"
            hindi="कक्षा ६"
            description="Materials are being curated and will be added shortly. Contact Pooja for personalised P6 classes."
            emoji="📗"
            accent="green"
            badge="Coming soon"
          />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-gradient-to-br from-navy to-navy-dark rounded-3xl p-8 sm:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-saffron font-bold uppercase tracking-wider text-sm mb-2">Meet your teacher</div>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">Dr. Pooja Chandra</h2>
              <p className="text-white/80 mb-4 leading-relaxed">
                PhD with four first-class degrees and a Singapore Teaching Certificate. 17 years of helping Singapore students discover, enjoy and excel at Hindi — from Primary 1 right through to A-Level.
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 font-bold text-saffron hover:text-white transition">
                Read full profile <span>→</span>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <Cred label="Doctorate" value="PhD" />
              <Cred label="First-class degrees" value="4" />
              <Cred label="Years teaching" value="17+" />
              <Cred label="Mode" value="Online" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function Stat({ hindi, en }: { hindi: string; en: string }) {
  return (
    <div>
      <div lang="hi" className="text-3xl sm:text-4xl font-extrabold text-saffron">{hindi}</div>
      <div className="text-sm text-gray-600 mt-1">{en}</div>
    </div>
  )
}

function Cred({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white/10 backdrop-blur rounded-xl p-4">
      <div className="text-2xl font-extrabold text-saffron">{value}</div>
      <div className="text-xs text-white/70 uppercase tracking-wide mt-1">{label}</div>
    </div>
  )
}
