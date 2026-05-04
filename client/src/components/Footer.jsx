export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#060e1c] border-t border-white/5 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <img
            src={`${import.meta.env.BASE_URL}logo-dark.jpg`}
            alt="Wise Energy Services"
            className="h-16 object-contain"
          />
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {['#inicio', '#soluciones', '#sectores', '#marcas', '#nosotros', '#contacto'].map(
              (href) => {
                const label = href.replace('#', '').replace(/^\w/, (c) => c.toUpperCase())
                const labels = {
                  Inicio: 'Inicio',
                  Soluciones: 'Soluciones',
                  Sectores: 'Sectores',
                  Marcas: 'Marcas',
                  Nosotros: 'Nosotros',
                  Contacto: 'Contacto',
                }
                return (
                  <a
                    key={href}
                    href={href}
                    className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
                  >
                    {labels[label] || label}
                  </a>
                )
              }
            )}
          </nav>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            © {year} Wise Energy Services. Todos los derechos reservados.
          </p>
          <p className="text-gray-600 text-sm">info@wiseenergyservices.com</p>
        </div>
      </div>
    </footer>
  )
}
