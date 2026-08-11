import { PageHeader } from '../components/PageHeader'
import { MaterialList } from '../components/MaterialList'

export function P5Oral() {
  return (
    <>
      <PageHeader eyebrow="Oral" hindi="मौखिक अभ्यास" title="P5 Oral Practice" tone="green">
        Picture-discussion sets with helping vocabulary and conversation prompts. Pooja runs live oral simulations to build fluency and confidence.
      </PageHeader>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <MaterialList
          intro="Oral practice works best with live feedback. These materials are paired with one-to-one speaking sessions."
          items={[
            { hindi: 'मौखिक चित्र सेट', title: 'P5 Oral Picture Sets', meta: 'PDF · curated picture prompts' },
            { hindi: 'कठिन शब्द सूची', title: 'P5 Oral Pictures — Hard Words', meta: 'XLSX · vocabulary glossary' },
            { hindi: 'OPD संग्रह', title: 'P5 Oral Picture Discussion (OPD)', meta: 'XLSX · structured discussion frames' },
            { hindi: 'मौखिक अभ्यास शब्दावली', title: 'EP Oral Vocabulary', meta: 'XLSX · vocabulary list' },
            { hindi: 'सभी सेट के मौखिक', title: 'EP Oral — All Sets Combined', meta: 'PDF · comprehensive picture book' },
            { hindi: 'मॉक मौखिक परीक्षा', title: 'P5 Mock Oral Test (2012)', meta: 'PDF · timed simulation' },
          ]}
        />
      </section>
    </>
  )
}
