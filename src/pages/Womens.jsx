export default function Womens() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-semibold mb-8">Women's Watches</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-xl p-4">
            <div className="aspect-square rounded-lg bg-gradient-to-br from-neutral-200 to-neutral-100" />
            <div className="mt-4 flex items-center justify-between">
              <p className="font-medium">Royal Wrist W{i + 1}</p>
              <span className="text-gray-600">$ {279 + i * 25}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
