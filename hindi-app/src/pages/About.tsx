import { Link } from 'react-router-dom'
import { PageHeader } from '../components/PageHeader'
import { InfoCard } from '../components/Card'

export function About() {
  return (
    <>
      <PageHeader
        eyebrow="About the teacher"
        hindi="डॉ. पूजा चंद्रा"
        title="Dr. Pooja Chandra"
        tone="navy"
      >
        Educator, researcher, and lifelong advocate for the Hindi language. Helping Singapore students from Primary 1 to A-Level enjoy and excel at Hindi for over 17 years.
      </PageHeader>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12 grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <InfoCard>
            <h2 className="text-xl font-extrabold text-navy mb-3">A teacher's story</h2>
            <div className="prose text-gray-700 space-y-3">
              <p>
                For 17 years, Pooja has been teaching Hindi to students across Singapore — from young learners in Primary 1 just discovering the अक्षर (alphabet), through PSLE preparation, all the way to A-Level candidates building command of advanced grammar and literature.
              </p>
              <p>
                Her teaching is shaped by a strong academic foundation — a PhD with four first-class degrees — combined with hands-on Singapore classroom experience and a Singapore Teaching Certificate. Every lesson is mapped to the Singapore MOE Hindi syllabus and grounded in the rhythms and demands of local exams (PSLE, GCE O-Level, A-Level).
              </p>
              <p>
                What students and parents notice most: lessons that feel warm, structured and confidence-building. The goal is not just marks — it is to make Hindi a language students are <em>proud</em> to use.
              </p>
            </div>
          </InfoCard>

          <InfoCard>
            <h2 className="text-xl font-extrabold text-navy mb-3">Teaching focus</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              <Pill>Composition (निबंध)</Pill>
              <Pill>Comprehension (बोधन)</Pill>
              <Pill>Oral practice (मौखिक)</Pill>
              <Pill>Listening (श्रवण)</Pill>
              <Pill>Grammar (व्याकरण)</Pill>
              <Pill>Vocabulary &amp; Idioms</Pill>
              <Pill>Mock &amp; WA papers</Pill>
              <Pill>Exam strategy</Pill>
            </div>
          </InfoCard>
        </div>

        <aside className="space-y-4">
          <InfoCard>
            <div className="text-xs font-bold uppercase tracking-wider text-saffron mb-2">Credentials</div>
            <ul className="space-y-3 text-sm">
              <Detail label="Highest qualification" value="PhD (Doctorate)" />
              <Detail label="First-class degrees" value="4" />
              <Detail label="Singapore certification" value="Singapore Teaching Certificate" />
              <Detail label="Experience" value="17+ years" />
              <Detail label="Levels" value="Primary 1 → A-Level" />
              <Detail label="Mode" value="Online (1:1 and small group)" />
              <Detail label="Fee" value="Mutually discussed" />
            </ul>
          </InfoCard>

          <InfoCard>
            <div className="text-xs font-bold uppercase tracking-wider text-saffron mb-2">Connect</div>
            <div className="space-y-2 text-sm">
              <a href="https://www.linkedin.com/in/dr-pooja-chandra-9452a1251/" target="_blank" rel="noopener" className="block text-navy font-semibold hover:text-saffron-dark">
                LinkedIn profile →
              </a>
              <a href="mailto:hindifunlearn@gmail.com" className="block text-navy font-semibold hover:text-saffron-dark">
                hindifunlearn@gmail.com
              </a>
              <a href="https://wa.me/6588849220" className="block text-navy font-semibold hover:text-saffron-dark">
                WhatsApp +65 8884 9220
              </a>
            </div>
            <Link to="/contact" className="mt-4 block text-center w-full bg-saffron text-white font-bold py-3 rounded-xl hover:bg-saffron-dark transition">
              Book a class
            </Link>
          </InfoCard>
        </aside>
      </section>
    </>
  )
}

function Pill({ children }: { children: React.ReactNode }) {
  return <div className="bg-cream border border-saffron/20 rounded-lg px-4 py-3 text-sm font-semibold text-navy">{children}</div>
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <li className="flex justify-between gap-3">
      <span className="text-gray-500">{label}</span>
      <span className="font-semibold text-gray-900 text-right">{value}</span>
    </li>
  )
}
