export default function Craftsmanship() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-semibold mb-6">Craftsmanship</h1>
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        <div className="prose prose-neutral max-w-none">
          <p>Each Royal Wrist timepiece begins with a single idea: purposeful design. From raw materials to final assembly, our artisans focus on precision, durability, and beauty.</p>
          <ul>
            <li>316L stainless steel or grade 5 titanium</li>
            <li>Sapphire crystal with anti-reflective coating</li>
            <li>Automatic and solar movements</li>
            <li>Water resistance up to 200m</li>
          </ul>
        </div>
        <div>
          <img src="https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=1200&auto=format&fit=crop" className="rounded-2xl shadow" alt="craft" />
        </div>
      </div>
    </div>
  )
}
