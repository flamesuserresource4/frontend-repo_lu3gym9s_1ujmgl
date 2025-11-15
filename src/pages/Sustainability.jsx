export default function Sustainability() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-semibold mb-6">Sustainability</h1>
      <p className="text-gray-700">We prioritize responsible sourcing, renewable energy, and recyclable packaging across our supply chain. Our titanium line is produced with 60% recycled material.</p>
      <div className="mt-8 grid sm:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="font-medium">Materials</h3>
          <p className="text-gray-600 text-sm">Recycled metals and vegan straps.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="font-medium">Energy</h3>
          <p className="text-gray-600 text-sm">Solar-powered operations.</p>
        </div>
      </div>
    </div>
  )
}
