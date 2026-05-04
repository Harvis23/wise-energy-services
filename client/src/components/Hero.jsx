import { ChevronDown } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-start justify-center overflow-hidden"
    >
      {/* Soft glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-orange-200/40 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-36 pb-24">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-orange/30 bg-white/70 text-brand-orange text-sm font-medium mb-10 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
          Oil & Gas · Energía Eléctrica · Minería · Industria 4.0
        </div>

        <h1 className="font-display text-4xl md:text-6xl font-light text-gray-800 leading-tight tracking-wide mb-6">
          Ingeniería de Vanguardia y{' '}
          <span className="text-brand-orange font-light italic">Soluciones Tecnológicas</span>{' '}
          para la Industria Energética
        </h1>

        <p className="font-body text-base md:text-lg text-gray-500 font-light max-w-2xl mx-auto mb-8 leading-loose tracking-wide">
          Fusionamos servicios técnicos especializados con herramientas de IoT,
          Análisis de Datos y Monitoreo Remoto para garantizar la continuidad
          operativa de sus activos.
        </p>

        <div className="inline-block bg-white/60 border border-orange-200 rounded-2xl px-6 py-4 mb-12 shadow-sm">
          <p className="text-gray-600 text-sm font-light italic">
            "No solo mantenemos equipos; digitalizamos su rendimiento para predecir fallas antes de que ocurran."
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#soluciones"
            className="px-8 py-3.5 bg-brand-orange text-white font-semibold rounded-full hover:bg-orange-600 transition-colors text-sm shadow-md"
          >
            Ver Soluciones
          </a>
          <a
            href="#contacto"
            className="px-8 py-3.5 border border-gray-300 text-gray-600 font-semibold rounded-full hover:border-brand-orange hover:text-brand-orange transition-colors text-sm"
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
