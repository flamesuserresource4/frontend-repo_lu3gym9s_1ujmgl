import { useParams } from 'react-router-dom'

export default function Product() {
  const { id } = useParams()
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        <div className="aspect-square rounded-2xl bg-gradient-to-br from-neutral-200 to-neutral-100" />
        <div>
          <h1 className="text-3xl font-semibold mb-2">Royal Wrist {id}</h1>
          <p className="text-gray-700">Minimal, precise, and built to last. 42mm case, sapphire crystal, 200m water resistance.</p>
          <div className="mt-6">
            <button className="bg-black text-white px-6 py-3 rounded">Add to Bag</button>
          </div>
        </div>
      </div>
    </div>
  )
}
