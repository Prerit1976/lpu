import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { PageHeader } from '../components/PageHeader'
import cosData from '../data/cos.json'

type Item = { q: string; a: string; en: string }

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function makeOptions(correct: string, all: string[]): string[] {
  const distractors = shuffle(all.filter(x => x !== correct)).slice(0, 3)
  return shuffle([correct, ...distractors])
}

export function P5Quiz() {
  const items = cosData as Item[]
  const allAnswers = useMemo(() => Array.from(new Set(items.map(i => i.a))), [items])
  const [seed, setSeed] = useState(0)
  const questions = useMemo(() => {
    void seed
    return shuffle(items).map(it => ({ ...it, options: makeOptions(it.a, allAnswers) }))
  }, [items, allAnswers, seed])
  const [idx, setIdx] = useState(0)
  const [picked, setPicked] = useState<string | null>(null)
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)

  const q = questions[idx]
  const total = questions.length

  function pick(opt: string) {
    if (picked) return
    setPicked(opt)
    if (opt === q.a) setScore(s => s + 1)
  }

  function next() {
    setPicked(null)
    if (idx + 1 >= total) setDone(true)
    else setIdx(i => i + 1)
  }

  function restart() {
    setSeed(s => s + 1)
    setIdx(0)
    setPicked(null)
    setScore(0)
    setDone(false)
  }

  return (
    <>
      <PageHeader
        eyebrow="Free practice"
        hindi="वाक्य पूर्ति"
        title="P5 Sentence Completion Quiz"
        tone="saffron"
      >
        Pick the right Hindi word that completes each sentence. Instant feedback with English meaning.
      </PageHeader>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        {!done ? (
          <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
            <div className="flex items-center justify-between mb-4">
              <div className="text-sm font-bold text-saffron-dark">Question {idx + 1} / {total}</div>
              <div className="text-sm font-bold text-india-green">Score: {score}</div>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden mb-6">
              <div className="h-full bg-gradient-to-r from-saffron to-saffron-dark transition-all" style={{ width: `${((idx) / total) * 100}%` }} />
            </div>

            <div lang="hi" className="text-xl sm:text-2xl text-navy leading-relaxed mb-6 font-medium">
              {q.q}
            </div>

            <div className="grid sm:grid-cols-2 gap-3 mb-6">
              {q.options.map(opt => {
                const isCorrect = picked && opt === q.a
                const isWrongPick = picked === opt && opt !== q.a
                const base = 'p-4 rounded-xl text-left font-semibold transition border-2'
                const cls = !picked
                  ? 'bg-cream border-transparent hover:border-saffron hover:bg-orange-50'
                  : isCorrect
                  ? 'bg-india-green/10 border-india-green text-india-green-dark'
                  : isWrongPick
                  ? 'bg-red-50 border-red-400 text-red-700'
                  : 'bg-gray-50 border-transparent text-gray-400'
                return (
                  <button key={opt} onClick={() => pick(opt)} className={`${base} ${cls}`} disabled={!!picked}>
                    <span lang="hi" className="text-lg">{opt}</span>
                  </button>
                )
              })}
            </div>

            {picked && (
              <div className={`rounded-xl p-4 mb-4 ${picked === q.a ? 'bg-india-green/10 border border-india-green/30' : 'bg-red-50 border border-red-200'}`}>
                <div className="font-bold mb-1">
                  {picked === q.a ? '✅ शाबाश! (Well done!)' : '❌ Correct answer:'}{' '}
                  <span lang="hi" className="font-extrabold">{q.a}</span>
                </div>
                {q.en && <div className="text-sm text-gray-700">English meaning: <strong>{q.en}</strong></div>}
              </div>
            )}

            <button
              onClick={next}
              disabled={!picked}
              className="w-full bg-saffron text-white font-bold py-4 rounded-xl hover:bg-saffron-dark transition disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {idx + 1 >= total ? 'See result' : 'Next question →'}
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="text-6xl mb-4">{score >= total * 0.8 ? '🏆' : score >= total * 0.5 ? '👏' : '💪'}</div>
            <div lang="hi" className="text-2xl text-saffron font-bold mb-2">अच्छा प्रयास!</div>
            <h2 className="text-2xl font-extrabold text-navy mb-2">You scored {score} / {total}</h2>
            <p className="text-gray-600 mb-6">
              {score >= total * 0.8
                ? 'Excellent! You have a strong grasp of P5 vocabulary.'
                : score >= total * 0.5
                ? 'Good job — keep practising to build your vocabulary.'
                : 'Practice makes perfect. Try again, or book a class with Pooja.'}
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <button onClick={restart} className="bg-saffron text-white font-bold px-6 py-3 rounded-xl hover:bg-saffron-dark">
                Try again
              </button>
              <Link to="/p5" className="bg-white text-navy border-2 border-navy/20 font-bold px-6 py-3 rounded-xl hover:border-navy">
                Back to P5
              </Link>
              <Link to="/contact" className="bg-india-green text-white font-bold px-6 py-3 rounded-xl hover:bg-india-green-dark">
                Book a class
              </Link>
            </div>
          </div>
        )}
      </section>
    </>
  )
}
