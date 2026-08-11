import { useState } from 'react'
import { PageHeader } from '../components/PageHeader'
import { InfoCard } from '../components/Card'
import idioms from '../data/idioms.json'

type Item = { n: number; q: string }

export function P5Idioms() {
  const all = idioms as Item[]
  const [filter, setFilter] = useState('')
  const filtered = filter
    ? all.filter(i => i.q.includes(filter))
    : all

  return (
    <>
      <PageHeader
        eyebrow="Practice list"
        hindi="मुहावरे का अभ्यास"
        title="P5 Idioms Practice"
        tone="green"
      >
        50 fill-in-the-blank idiom exercises from Pooja's classroom. Try to complete each idiom — your teacher will check answers in class.
      </PageHeader>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <div className="mb-6">
          <input
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Search Hindi text…"
            lang="hi"
            className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:border-saffron focus:ring-2 focus:ring-saffron/20 outline-none text-lg"
          />
          <p className="text-xs text-gray-500 mt-1">{filtered.length} of {all.length} shown</p>
        </div>

        <div className="space-y-3">
          {filtered.map(it => (
            <InfoCard key={it.n} className="!p-5">
              <div className="flex gap-4">
                <div className="text-saffron-dark font-extrabold text-lg w-8 flex-shrink-0">{it.n}.</div>
                <div lang="hi" className="text-lg text-navy leading-relaxed">{it.q}</div>
              </div>
            </InfoCard>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-600 mb-3">Want to check your answers and learn the meaning of each idiom?</p>
          <a href="/lpu/contact" className="inline-block bg-saffron text-white font-bold px-6 py-3 rounded-xl hover:bg-saffron-dark">
            Book a class with Pooja
          </a>
        </div>
      </section>
    </>
  )
}
