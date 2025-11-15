import '../styles/brand.css'

export default function Collections() {
  const collections = [
    { title: 'Classic', desc: 'Timeless silhouettes refined for modern life.' },
    { title: 'Aero', desc: 'Lightweight performance built for everyday adventure.' },
    { title: 'Noir', desc: 'Monochrome pieces with bold contrast and clarity.' },
    { title: 'Titan', desc: 'Engineered in titanium for unmatched strength.' },
  ]
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="rw-title text-3xl font-semibold mb-8">Collections</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {collections.map((c) => (
          <div key={c.title} className="rw-card p-6">
            <div className="aspect-square rounded-lg bg-gradient-to-br from-neutral-200 to-neutral-100" />
            <h3 className="mt-4 font-medium">{c.title}</h3>
            <p className="text-gray-600 text-sm">{c.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
