import { Link } from 'react-router-dom'
import { PageHeader } from '../components/PageHeader'
import { CategoryCard } from '../components/Card'

export function P5Hub() {
  return (
    <>
      <PageHeader
        eyebrow="Primary 5"
        hindi="कक्षा ५ — हिंदी अभ्यास"
        title="Primary 5 Hindi Resources"
        tone="saffron"
      >
        Categories below cover everything a Singapore P5 student needs — composition, comprehension, oral, mock papers, weighted assessments, vocabulary, and more. Free practice quizzes are available without login. Full materials are released to enrolled students.
      </PageHeader>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="bg-saffron/10 border border-saffron/30 rounded-2xl p-5 sm:p-6 mb-8 flex items-start gap-4">
          <div className="text-3xl">⚡</div>
          <div>
            <div className="font-bold text-navy text-lg mb-1">Try a free practice quiz</div>
            <p className="text-sm text-gray-700 mb-3">
              15 sentence-completion questions (वाक्य पूर्ति) drawn from Pooja's real classroom material. Instant feedback, English meanings included.
            </p>
            <Link to="/p5/quiz" className="inline-block bg-saffron text-white font-bold px-5 py-2.5 rounded-lg hover:bg-saffron-dark transition">
              Start free quiz →
            </Link>
          </div>
        </div>

        <h2 className="text-xl sm:text-2xl font-extrabold text-navy mb-4">All P5 categories</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <CategoryCard to="/p5/quiz" title="Sentence Completion" hindi="वाक्य पूर्ति" description="Interactive fill-in-the-blank quiz with 15 questions and English meanings. Free to play." emoji="✍️" accent="saffron" badge="Free" />
          <CategoryCard to="/p5/idioms" title="Idioms Practice" hindi="मुहावरे" description="50 classroom idiom exercises. Read, attempt, and discuss with your teacher." emoji="💡" accent="green" badge="Free" />
          <CategoryCard to="/p5/vocabulary" title="Vocabulary by Scenario" hindi="शब्द भंडार" description="Theme-based word lists (Beach, and more) with Hindi-English translations." emoji="📚" accent="navy" badge="Free" />
          <CategoryCard to="/p5/composition" title="Composition (निबंध)" hindi="रचना अभ्यास" description="Composition writing guidance, model essays, and topic prompts." emoji="📝" accent="saffron" />
          <CategoryCard to="/p5/oral" title="Oral Practice" hindi="मौखिक अभ्यास" description="Picture-discussion practice with helping vocabulary and conversation prompts." emoji="🗣️" accent="green" />
          <CategoryCard to="/p5/listening" title="Listening Comprehension" hindi="श्रवण" description="Practice passages and exercises for the listening component." emoji="🎧" accent="navy" />
          <CategoryCard to="/p5/exam-practice" title="Examination Practice (EP)" hindi="परीक्षा अभ्यास" description="Multiple sets of structured exam practice papers covering all components." emoji="📄" accent="saffron" />
          <CategoryCard to="/p5/mock" title="Mock Exam Papers" hindi="मॉक परीक्षा" description="Full-length mock papers (Sem 1, Sem 2, Term 3) to simulate the real exam." emoji="🎯" accent="green" />
          <CategoryCard to="/p5/wa" title="Weighted Assessment Papers" hindi="भारित मूल्यांकन" description="Recent WA Paper 2 papers (BTTSAL format) for in-school assessment prep." emoji="📊" accent="navy" />
          <CategoryCard to="/p5/projects" title="Projects (WA assignments)" hindi="परियोजना" description="Project-based weighted-assessment material — moral stories, neighbourhood, environment." emoji="🌱" accent="saffron" />
        </div>

        <div className="mt-10 bg-white rounded-2xl p-6 border border-gray-200">
          <h3 className="font-bold text-navy mb-2">A note on materials</h3>
          <p className="text-sm text-gray-600">
            Free practice quizzes use Pooja's own original content. Full PDFs and worksheets — including third-party publications — are shared directly with enrolled students to respect copyright and ensure appropriate context.{' '}
            <Link to="/contact" className="text-saffron-dark font-semibold hover:underline">Contact Pooja</Link> for access.
          </p>
        </div>
      </section>
    </>
  )
}
