export default function Stores() {
  const stores = [
    { city: 'New York', address: '123 Fifth Ave, NY' },
    { city: 'London', address: '42 Regent St, London' },
    { city: 'Tokyo', address: '2-11-3 Ginza, Tokyo' },
  ]
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-semibold mb-6">Stores</h1>
      <div className="space-y-4">
        {stores.map((s) => (
          <div key={s.city} className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="font-medium">{s.city}</h3>
            <p className="text-gray-600 text-sm">{s.address}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
