import { PageHeader } from '../components/PageHeader'
import { MaterialList } from '../components/MaterialList'

export function P5Mock() {
  return (
    <>
      <PageHeader eyebrow="Mock papers" hindi="मॉक परीक्षा" title="P5 Mock Exam Papers" tone="green">
        Full-length mock papers across recent years. Use them under timed conditions to simulate the real Singapore MOE Hindi exam.
      </PageHeader>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <MaterialList
          intro="Mock papers are most useful when reviewed afterwards with a teacher. Pooja annotates each script with personal feedback."
          items={[
            { hindi: '२०२३ मॉक — सेमेस्टर १', title: '2023 Mock Paper — Sem 1', meta: 'PDF' },
            { hindi: '२०२३ मॉक — सेमेस्टर २', title: '2023 Mock Paper — Sem 2', meta: 'PDF' },
            { hindi: 'मॉक टेस्ट — टर्म ३', title: 'Mock Test Paper — Term 3', meta: 'PDF' },
            { hindi: 'मॉक उत्तर पत्र', title: 'Mock Papers — Answer Sheet', meta: 'XLSX' },
            { hindi: 'P5 मॉक पेपर १ और २ (२०१२)', title: 'P5 Mock Paper 1 & 2 (2012)', meta: 'PDF · archive' },
            { hindi: 'P5 मॉक टेस्ट पेपर १ और २ (२०११)', title: 'P5 Mock Test Paper 1 & 2 (2011)', meta: 'PDF · archive' },
            { hindi: 'P5 टर्म ४ (२००८)', title: 'P5 Term 4 Paper (2008)', meta: 'PDF · archive' },
            { hindi: 'P5 / P6 शब्द सूची', title: 'P5 / P6 Word List', meta: 'PDF · combined vocabulary reference' },
          ]}
        />
      </section>
    </>
  )
}
