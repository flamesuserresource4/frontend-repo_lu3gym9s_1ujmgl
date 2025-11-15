import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Collections from './pages/Collections'
import Mens from './pages/Mens'
import Womens from './pages/Womens'
import Luxury from './pages/Luxury'
import Craftsmanship from './pages/Craftsmanship'
import Journal from './pages/Journal'
import Sustainability from './pages/Sustainability'
import Stores from './pages/Stores'
import Support from './pages/Support'
import Contact from './pages/Contact'
import Product from './pages/Product'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/mens" element={<Mens />} />
        <Route path="/womens" element={<Womens />} />
        <Route path="/luxury" element={<Luxury />} />
        <Route path="/craftsmanship" element={<Craftsmanship />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/stores" element={<Stores />} />
        <Route path="/support" element={<Support />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </Layout>
  )
}

export default App
