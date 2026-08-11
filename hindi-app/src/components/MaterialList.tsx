import { LockedItem } from './LockedItem'

export type Material = { title: string; meta?: string; hindi?: string }

export function MaterialList({ items, intro }: { items: Material[]; intro?: string }) {
  return (
    <div>
      {intro && (
        <div className="bg-saffron/10 border border-saffron/25 rounded-xl p-4 mb-5 text-sm text-gray-700">
          {intro}
        </div>
      )}
      <div className="space-y-3">
        {items.map((m, i) => (
          <LockedItem key={i} title={m.title} meta={m.meta} hindi={m.hindi} />
        ))}
      </div>
    </div>
  )
}
