import { PageHeader } from '../components/PageHeader'
import { MaterialList } from '../components/MaterialList'

export function P5Composition() {
  return (
    <>
      <PageHeader eyebrow="Composition" hindi="रचना अभ्यास" title="P5 Composition Practice" tone="saffron">
        Composition writing guidance, model essays, and topic-based prompts. Pooja teaches structure, opening lines, vocabulary, and finishing with impact.
      </PageHeader>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <MaterialList
          intro="These resources are released to enrolled students alongside live composition feedback."
          items={[
            { hindi: 'रचना लेखन सहायता', title: 'Composition Writing Help (guide)', meta: 'PDF · structure, openings, transitions' },
            { hindi: 'रचना अभ्यास संग्रह', title: 'Composition Practice Workbook', meta: 'XLSX · classroom prompts and models' },
            { hindi: 'पाठ्यपुस्तक कार्य', title: 'P5 School Book Composition Work', meta: 'XLSX · school-aligned exercises' },
          ]}
        />
      </section>
    </>
  )
}
