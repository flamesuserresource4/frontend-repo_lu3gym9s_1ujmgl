export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h4 className="font-semibold mb-3">Royal Wrist</h4>
          <p className="text-sm text-gray-600">Modern timepieces that blend precision engineering with timeless design.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Explore</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="/collections" className="hover:text-black">Collections</a></li>
            <li><a href="/luxury" className="hover:text-black">Luxury</a></li>
            <li><a href="/craftsmanship" className="hover:text-black">Craftsmanship</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="/sustainability" className="hover:text-black">Sustainability</a></li>
            <li><a href="/stores" className="hover:text-black">Stores</a></li>
            <li><a href="/support" className="hover:text-black">Support</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Newsletter</h4>
          <form className="flex gap-2">
            <input type="email" placeholder="Your email" className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-black" />
            <button className="bg-black text-white px-4 rounded">Join</button>
          </form>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 pb-6">© {new Date().getFullYear()} Royal Wrist. All rights reserved.</div>
    </footer>
  )
}
