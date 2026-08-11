import { Link } from 'react-router-dom'
import { PageHeader } from '../components/PageHeader'
import { InfoCard } from '../components/Card'

export function P6Hub() {
  return (
    <>
      <PageHeader eyebrow="Primary 6" hindi="कक्षा ६ — पीएसएलई की तैयारी" title="Primary 6 (PSLE) Hindi" tone="green">
        P6 materials — composition, comprehension, oral, mock papers and PSLE prep — are being curated and uploaded shortly. In the meantime, Pooja runs personalised P6 PSLE-prep classes.
      </PageHeader>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <InfoCard className="text-center">
          <div className="text-5xl mb-4">📚</div>
          <h2 className="text-2xl font-extrabold text-navy mb-2">Materials being prepared</h2>
          <p className="text-gray-600 mb-6">
            Pooja is finalising P6 resources to match the same depth and structure as the P5 library. Want PSLE-prep guidance now? Reach out directly.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/contact" className="bg-saffron text-white font-bold px-6 py-3 rounded-xl hover:bg-saffron-dark">
              Contact Pooja for P6 classes
            </Link>
            <Link to="/p5" className="bg-white text-navy border-2 border-navy/20 font-bold px-6 py-3 rounded-xl hover:border-navy">
              See P5 resources
            </Link>
          </div>
        </InfoCard>
      </section>
    </>
  )
}
