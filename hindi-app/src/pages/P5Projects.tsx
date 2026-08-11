import { PageHeader } from '../components/PageHeader'
import { MaterialList } from '../components/MaterialList'

export function P5Projects() {
  return (
    <>
      <PageHeader eyebrow="Projects" hindi="परियोजना" title="P5 Project / WA Assignments" tone="saffron">
        Project-based weighted-assessment work — moral-values stories, community themes, environment topics. Designed to combine writing, vocabulary, and personal voice.
      </PageHeader>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <MaterialList
          items={[
            { hindi: 'मुझे एक नैतिक शिक्षा देने वाली कहानी', title: 'A story that taught me moral values', meta: 'XLSX project' },
            { hindi: 'हमारा पड़ोस', title: 'Our Neighbourhood — Weighted Assessment', meta: 'XLSX project' },
            { hindi: 'पेड़ — हमारे सच्चे मित्र', title: 'Trees — Our True Friends', meta: 'XLSX project' },
            { hindi: 'WA दिशा-निर्देश २०२३', title: 'P5 Weighted Assessment Guidelines (2023)', meta: 'PDF · official guide' },
          ]}
        />
      </section>
    </>
  )
}
