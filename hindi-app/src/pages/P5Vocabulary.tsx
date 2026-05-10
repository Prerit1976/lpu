import { PageHeader } from '../components/PageHeader'
import { InfoCard } from '../components/Card'
import wordlist from '../data/wordlist.json'

export function P5Vocabulary() {
  const data = wordlist as { scenario: string; words: { hi: string; en: string }[]; scenario_idioms: string[] }

  return (
    <>
      <PageHeader
        eyebrow="Theme vocabulary"
        hindi="शब्द भंडार"
        title="P5 Vocabulary by Scenario"
        tone="navy"
      >
        Theme-based vocabulary for oral and composition. Each scenario lists the key Hindi words your child should know, with English meanings.
      </PageHeader>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
        <InfoCard>
          <div className="flex items-center gap-3 mb-5">
            <div className="text-3xl">🏖️</div>
            <h2 lang="hi" className="text-2xl font-extrabold text-navy">{data.scenario}</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
            {data.words.map((w, i) => (
              <div key={i} className="bg-cream rounded-lg p-3 flex items-baseline justify-between border border-saffron/15">
                <span lang="hi" className="text-lg font-semibold text-navy">{w.hi}</span>
                <span className="text-sm text-gray-600 ml-3">{w.en}</span>
              </div>
            ))}
          </div>

          {data.scenario_idioms.length > 0 && (
            <>
              <h3 className="font-bold text-navy mb-3">Useful idioms for this scenario</h3>
              <div className="flex flex-wrap gap-2">
                {data.scenario_idioms.map((id, i) => (
                  <div key={i} lang="hi" className="bg-india-green/10 text-india-green-dark px-3 py-2 rounded-lg text-sm font-medium">
                    {id}
                  </div>
                ))}
              </div>
            </>
          )}
        </InfoCard>

        <div className="mt-8 bg-saffron/10 border border-saffron/30 rounded-2xl p-6 text-center">
          <div className="text-2xl mb-2">📋</div>
          <p className="text-gray-700">
            More scenarios (Park, Market, School, Festival, Restaurant…) are being added.{' '}
            <a href="/lpu/contact" className="font-bold text-saffron-dark hover:underline">Get the full list</a>.
          </p>
        </div>
      </section>
    </>
  )
}
