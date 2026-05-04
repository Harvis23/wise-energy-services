import { ShieldCheck, Users, RefreshCw } from 'lucide-react'

const values = [
  {
    icon: ShieldCheck,
    title: 'Compromiso HSEQ',
    description:
      'La seguridad de nuestro personal y el respeto al medio ambiente son pilares innegociables en cada proyecto que ejecutamos.',
  },
  {
    icon: Users,
    title: 'Brazo Ejecutor',
    description:
      'Nos enfocamos en ser el brazo ejecutor de nuestros clientes, permitiéndoles concentrarse en su operación principal mientras nosotros cuidamos su infraestructura.',
  },
  {
    icon: RefreshCw,
    title: 'Industria Conectada',
    description:
      'Modernización de plantas antiguas mediante la adición de capas tecnológicas (Retrofitting), adaptando sus activos a la era digital sin detener operaciones.',
  },
]

export default function About() {
  return (
    <section id="nosotros" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <div>
            <p className="text-brand-orange text-sm font-semibold uppercase tracking-widest mb-3">
              Quiénes Somos
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6 leading-tight">
              Ingeniería con Visión Estratégica
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Somos una empresa dedicada a la prestación de servicios industriales que combina experiencia técnica con una gestión de procesos eficiente. Nuestro modelo de trabajo integra tecnología de punta con talento humano especializado para garantizar resultados medibles en cada proyecto.
            </p>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-7 py-3 bg-brand-orange text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors text-sm"
            >
              Trabajemos Juntos
            </a>
          </div>

          {/* Right — values */}
          <div className="flex flex-col gap-6">
            {values.map((v) => {
              const Icon = v.icon
              return (
                <div key={v.title} className="flex gap-5 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-orange/10 border border-brand-orange/20 text-brand-orange flex items-center justify-center">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h4 className="text-gray-800 font-bold mb-1">{v.title}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{v.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
