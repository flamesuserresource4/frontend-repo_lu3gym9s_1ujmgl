export default function Journal() {
  const posts = [
    { title: 'The Evolution of Dive Watches', date: 'Aug 24' },
    { title: 'Titanium vs. Stainless Steel', date: 'Aug 12' },
    { title: 'How to Care for Your Automatic Watch', date: 'Jul 30' },
  ]
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl font-semibold mb-8">Journal</h1>
      <div className="space-y-6">
        {posts.map((p) => (
          <article key={p.title} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow transition">
            <h3 className="font-medium">{p.title}</h3>
            <p className="text-gray-500 text-sm">{p.date}</p>
          </article>
        ))}
      </div>
    </div>
  )
}
