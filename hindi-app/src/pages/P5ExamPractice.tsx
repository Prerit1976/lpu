import { PageHeader } from '../components/PageHeader'
import { MaterialList } from '../components/MaterialList'

export function P5ExamPractice() {
  return (
    <>
      <PageHeader eyebrow="Examination Practice" hindi="परीक्षा अभ्यास" title="P5 Examination Practice (EP) Sets" tone="saffron">
        Four full sets of structured exam practice covering all paper components. Used to build pace and confidence before mock exams.
      </PageHeader>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <MaterialList
          items={[
            { hindi: 'EP सेट १', title: 'EP Set 1', meta: 'PDF' },
            { hindi: 'EP सेट २', title: 'EP Set 2', meta: 'PDF' },
            { hindi: 'EP सेट ३', title: 'EP Set 3', meta: 'PDF' },
            { hindi: 'EP सेट ४', title: 'EP Set 4', meta: 'PDF' },
            { hindi: 'EP उत्तर पत्र', title: 'EP Answer Sheet', meta: 'XLSX · marked answers' },
            { hindi: 'EP मौखिक संग्रह', title: 'EP Oral — All Sets', meta: 'PDF · oral picture set' },
            { hindi: 'EP मौखिक शब्दावली', title: 'EP Oral Vocabulary', meta: 'XLSX' },
          ]}
        />
      </section>
    </>
  )
}
