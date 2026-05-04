import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Soluciones', href: '#soluciones' },
  { label: 'Sectores', href: '#sectores' },
  { label: 'Marcas', href: '#marcas' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-orange-50/80 backdrop-blur-sm border-b border-orange-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        <a href="#inicio">
          <img
            src={`${import.meta.env.BASE_URL}logo.jpg`}
            alt="Wise Energy Services"
            className="h-20 object-contain"
            style={{ mixBlendMode: 'multiply' }}
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-gray-600 hover:text-brand-orange transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="ml-2 px-5 py-2.5 bg-brand-orange text-white text-sm font-semibold rounded-lg hover:bg-orange-600 transition-colors"
          >
            Solicitar Cotización
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-navy-900 border-t border-navy-700 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-gray-600 hover:text-brand-orange transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            className="mt-2 px-5 py-2.5 bg-brand-orange text-white text-sm font-semibold rounded-lg text-center hover:bg-orange-600 transition-colors"
            onClick={() => setOpen(false)}
          >
            Solicitar Cotización
          </a>
        </div>
      )}
    </header>
  )
}
