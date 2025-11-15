import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/collections', label: 'Collections' },
  { to: '/mens', label: "Men's" },
  { to: '/womens', label: "Women's" },
  { to: '/luxury', label: 'Luxury' },
  { to: '/craftsmanship', label: 'Craftsmanship' },
  { to: '/journal', label: 'Journal' },
  { to: '/sustainability', label: 'Sustainability' },
  { to: '/stores', label: 'Stores' },
  { to: '/support', label: 'Support' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-black" />
            <span className="font-semibold tracking-wide uppercase">Royal Wrist</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm transition-colors hover:text-black ${isActive ? 'text-black' : 'text-gray-600'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
