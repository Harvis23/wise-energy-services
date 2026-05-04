import { ShieldCheck, Truck, Package } from 'lucide-react'

const pillars = [
  {
    icon: ShieldCheck,
    title: 'Alianzas Estratégicas',
    description:
      'Trabajamos con las marcas líderes del mercado global, garantizando que cada repuesto o equipo instalado cuente con certificación de origen y garantía de fábrica.',
  },
  {
    icon: Truck,
    title: 'Logística Inteligente',
    description:
      'Cadena de suministro optimizada para la entrega de materiales críticos en tiempos récord, reduciendo tiempos de parada en sus operaciones.',
  },
  {
    icon: Package,
    title: 'Inventario Listo para Entregar',
    description:
      'Stock permanente de equipos reacondicionados certificados. Opciones de alquiler, arrendamiento y compra para adaptarnos a su presupuesto y cronograma.',
  },
]

export default function Brands() {
  return (
    <section id="marcas" className="bg-navy-900 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-brand-orange text-sm font-semibold uppercase tracking-widest mb-3">
            Marcas y Suministros
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Tu Ventaja Competitiva
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            La combinación de alianzas globales, logística optimizada e inventario propio nos permite responder con rapidez ante cualquier necesidad operativa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pillars.map((p) => {
            const Icon = p.icon
            return (
              <div
                key={p.title}
                className="bg-navy-800/40 border border-white/5 rounded-2xl p-8 text-center hover:border-brand-orange/30 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-orange/10 border border-brand-orange/20 text-brand-orange mb-6">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{p.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{p.description}</p>
              </div>
            )
          })}
        </div>

        {/* CTA strip */}
        <div className="rounded-2xl bg-gradient-to-r from-brand-orange/20 via-brand-orange/10 to-transparent border border-brand-orange/30 p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">
              ¿Necesita un equipo o repuesto crítico?
            </h3>
            <p className="text-gray-400 text-sm">
              Contáctenos y le confirmamos disponibilidad y tiempo de entrega en menos de 24 horas.
            </p>
          </div>
          <a
            href="#contacto"
            className="flex-shrink-0 px-7 py-3 bg-brand-orange text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors text-sm whitespace-nowrap"
          >
            Consultar Disponibilidad
          </a>
        </div>
      </div>
    </section>
  )
}
