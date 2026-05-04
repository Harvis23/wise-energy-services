const sectors = [
  {
    title: 'Oil & Gas',
    description:
      'Soporte especializado en campos de extracción, refinerías y estaciones de bombeo. Soluciones de separación, tratamiento y transporte para maximizar la producción.',
    icon: '🛢️',
    tags: ['Extracción', 'Refinería', 'Estaciones de Bombeo'],
  },
  {
    title: 'Generación Eléctrica',
    description:
      'Servicios integrales para plantas hidroeléctricas, térmicas y renovables. Infraestructura de potencia, mantenimiento predictivo y gestión de flotas de generadores.',
    icon: '⚡',
    tags: ['Hidráulica', 'Térmica', 'Renovables'],
  },
  {
    title: 'Minería e Industria Pesada',
    description:
      'Soluciones robustas diseñadas para los entornos de mayor exigencia. Equipos certificados, gestión predictiva de activos críticos y conectividad en campo.',
    icon: '⛏️',
    tags: ['Minería', 'Industria Pesada', 'Entornos Extremos'],
  },
]

export default function Sectors() {
  return (
    <section id="sectores" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-brand-orange text-sm font-semibold uppercase tracking-widest mb-3">
            Sectores de Atención
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
            ¿En qué industria opera?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nuestras soluciones están diseñadas y probadas en los sectores industriales de mayor exigencia operativa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {sectors.map((s) => (
            <div
              key={s.title}
              className="group bg-white/50 border border-orange-100 rounded-2xl p-8 hover:border-brand-orange/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-5xl mb-6">{s.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{s.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">{s.description}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
