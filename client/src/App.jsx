import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Sectors from './components/Sectors'
import Brands from './components/Brands'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-gradient-to-b from-orange-100 via-amber-50 to-white min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Sectors />
      <Brands />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}
