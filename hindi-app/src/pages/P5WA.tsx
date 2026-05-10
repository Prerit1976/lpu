import { PageHeader } from '../components/PageHeader'
import { MaterialList } from '../components/MaterialList'

export function P5WA() {
  return (
    <>
      <PageHeader eyebrow="Weighted Assessment" hindi="भारित मूल्यांकन" title="P5 WA Papers (BTTSAL Paper 2)" tone="navy">
        Recent Weighted Assessment Paper 2 papers (Bilingual Themes / Targeted Skills format) used in Singapore schools.
      </PageHeader>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <MaterialList
          items={[
            { hindi: '२०२४ WA पेपर २', title: '2024 WA Paper 2', meta: 'PDF · BTTSAL format' },
            { hindi: '२०२५ WA पेपर २', title: '2025 WA Paper 2', meta: 'PDF · BTTSAL format' },
            { hindi: 'P5 WA उत्तर पत्र', title: 'P5 WA Answer Sheet', meta: 'XLSX' },
          ]}
        />
      </section>
    </>
  )
}
