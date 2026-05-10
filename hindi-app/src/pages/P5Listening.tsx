import { PageHeader } from '../components/PageHeader'
import { MaterialList } from '../components/MaterialList'

export function P5Listening() {
  return (
    <>
      <PageHeader eyebrow="Listening" hindi="श्रवण" title="P5 Listening Comprehension" tone="green">
        Targeted practice for the listening component — passages, questions, and follow-up exercises.
      </PageHeader>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <MaterialList
          intro="Listening practice runs alongside live audio sessions in class for accent, pace and comprehension training."
          items={[
            { hindi: 'EN श्रवण अभ्यास', title: 'EN Listening Practice', meta: 'PDF · passages and questions' },
            { hindi: 'EP पुस्तक — ६ श्रवण अंश', title: 'EP Book — Assessment Paper 6 Passages', meta: 'PDF' },
            { hindi: 'श्रवण अंश संग्रह', title: 'Listening Passages', meta: 'XLSX · transcripts and vocabulary' },
          ]}
        />
      </section>
    </>
  )
}
