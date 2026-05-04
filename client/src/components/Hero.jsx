import { ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-900"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #e8821a 1px, transparent 0)`,
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900/60 via-navy-900/40 to-navy-900" />

      {/* Glowing orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-orange/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-orange/40 bg-brand-orange/10 text-brand-orange text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
          Oil & Gas · Energía Eléctrica · Minería · Industria 4.0
        </div>

        <h1 className="font-display text-4xl md:text-6xl font-light text-white leading-tight tracking-wide mb-6">
          Ingeniería de Vanguardia y{' '}
          <span className="text-brand-orange font-light italic">Soluciones Tecnológicas</span>{' '}
          para la Industria Energética
        </h1>

        <p className="font-body text-base md:text-lg text-gray-400 font-light max-w-3xl mx-auto mb-6 leading-loose tracking-wide">
          Fusionamos servicios técnicos especializados con herramientas de IoT,
          Análisis de Datos y Monitoreo Remoto para garantizar la continuidad
          operativa de sus activos.
        </p>

        <div className="inline-block bg-navy-800/80 border border-brand-orange/30 rounded-xl px-6 py-4 mb-12">
          <p className="text-brand-orangeLight text-sm font-medium italic">
            "No solo mantenemos equipos; digitalizamos su rendimiento para predecir fallas antes de que ocurran."
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#soluciones"
            className="px-8 py-3.5 bg-brand-orange text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors text-sm"
          >
            Ver Soluciones
          </a>
          <a
            href="#contacto"
            className="px-8 py-3.5 border border-gray-500 text-gray-200 font-semibold rounded-lg hover:border-brand-orange hover:text-brand-orange transition-colors text-sm"
          >
            Solicitar Evaluación Técnica
          </a>
        </div>
      </div>

      <a
        href="#soluciones"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400 hover:text-brand-orange transition-colors animate-bounce"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  )
}
