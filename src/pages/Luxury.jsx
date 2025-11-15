export default function Luxury() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-semibold mb-6">Luxury</h1>
      <p className="text-gray-700 max-w-3xl">Our pinnacle pieces feature hand-finished details, premium materials, and precision movements. Each timepiece is inspected by master horologists.</p>
      <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="aspect-square rounded-lg bg-gradient-to-br from-yellow-100 to-yellow-50" />
            <h3 className="mt-4 font-medium">Royal Wrist Luxe {i + 1}</h3>
            <p className="text-gray-600 text-sm">18k details, sapphire crystal, Swiss movement.</p>
          </div>
        ))}
      </div>
    </div>
  )
}
