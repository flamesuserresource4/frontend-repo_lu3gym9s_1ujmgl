import { Link } from 'react-router-dom'
import '../styles/brand.css'

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden rw-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="rw-title text-5xl sm:text-6xl font-bold tracking-tight leading-[1.1]">Royal Wrist</h1>
            <p className="mt-6 text-lg text-gray-700 max-w-xl">A modern, minimal collection of precision timepieces. Designed for the moments that matter.</p>
            <div className="mt-8 flex gap-4">
              <Link to="/collections" className="rw-button inline-flex items-center justify-center">Explore Collections</Link>
              <Link to="/craftsmanship" className="px-6 py-3 rounded border border-black">Our Craft</Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-neutral-200 to-neutral-100" />
            <div className="absolute inset-0 flex items-center justify-center">
              <video src="https://cdn.coverr.co/videos/coverr-a-watch-2550/1080p.mp4" className="rounded-2xl shadow-xl w-4/5" autoPlay muted loop playsInline />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold mb-6">Featured</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3,4,5,6].map((i) => (
              <Link key={i} to={`/product/${i}`} className="group block rw-card p-4 hover:shadow-md transition">
                <div className="aspect-square rounded-lg bg-gradient-to-br from-neutral-200 to-neutral-100" />
                <div className="mt-4 flex items-center justify-between">
                  <p className="font-medium">Royal Wrist {i}</p>
                  <span className="text-gray-600">$ {199 + i*50}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <img src="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHx3YXRjaHxlbnwwfDB8fHwxNzYzMjMxMzI5fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="watch" className="rounded-2xl shadow-md" />
          </div>
          <div>
            <h3 className="text-2xl font-semibold">Listen to the craft</h3>
            <p className="text-gray-700 mt-3">Hear the subtle rhythm of precision engineering.</p>
            <audio controls className="mt-4 w-full">
              <source src="https://cdn.pixabay.com/download/audio/2021/11/06/audio_0d0d8b2b75.mp3?filename=clock-ticking-107577.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      </section>
    </div>
  )
}
