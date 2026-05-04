import { useState } from 'react'
import { Flame, Zap, Wrench, Cpu, ChevronDown } from 'lucide-react'

const services = [
  {
    id: 'gas',
    icon: Flame,
    title: 'Tratamiento de Gas y Crudo',
    subtitle: 'Soluciones A',
    color: 'from-orange-500/20 to-orange-500/5',
    border: 'border-orange-500/30',
    iconColor: 'text-orange-400',
    items: [
      { heading: 'Equipos de Separación', detail: 'Separadores de 2 y 3 fases, eliminadores de agua libre (FWKO), slug catchers y unidades de producción (GPU).' },
      { heading: 'Tratamiento de Crudo', detail: 'Calentadores tratadores (Heater Treaters), tratadores electrostáticos y deshidratadores.' },
      { heading: 'Manejo de Agua', detail: 'Skimmers de agua, paquetes de filtración y skids para el manejo de agua salada.' },
      { heading: 'Tratamiento y Acondicionamiento de Gas', detail: 'Plantas de amina para la eliminación de gases ácidos, sistemas de deshidratación por glicol (TEG) y sistemas de recuperación de líquidos (NGL).' },
      { heading: 'Filtración y Purificación', detail: 'Separadores de filtro horizontales, filtros coalescentes, filtros de carbón activado y sistemas de acondicionamiento de gas combustible.' },
      { heading: 'Infraestructura de Transporte', detail: 'Lanzadores y receptores de herramientas de limpieza (Pigs), skids de medición (Meter Runs) y estaciones de regulación.' },
      { heading: 'Plantas de Instalación Rápida', detail: 'Unidades de refrigeración criogénica y plantas JT (Joule-Thomson) modulares.' },
      { heading: 'Gestión de Inventario y Alquiler', detail: 'Inventario "listo para entregar" de equipos reacondicionados, con opciones de alquiler o arrendamiento con opción a compra.' },
    ],
  },
  {
    id: 'energia',
    icon: Zap,
    title: 'Soluciones Energéticas',
    subtitle: 'Soluciones B',
    color: 'from-sky-500/20 to-sky-500/5',
    border: 'border-sky-500/30',
    iconColor: 'text-sky-400',
    items: [
      { heading: 'Consultoría y Planificación Estratégica', detail: 'Diagnóstico de instalaciones, planificación de sistemas y asesoría normativa para el cumplimiento de especificaciones técnicas y marcos legales vigentes.' },
      { heading: 'Infraestructura de Potencia', detail: 'Líneas de distribución y transmisión en alta, media y baja tensión. Suministro y diseño de equipamiento para subestaciones.' },
      { heading: 'Control de Distribución', detail: 'Implementación de tecnología avanzada para el monitoreo y gestión de redes eléctricas.' },
      { heading: 'Generación y Respaldo de Energía', detail: 'Instalación de grupos electrógenos para suministro principal y soluciones de energía de emergencia ante fallas de red.' },
    ],
  },
  {
    id: 'mantenimiento',
    icon: Wrench,
    title: 'Mantenimiento Predictivo y Telemática',
    subtitle: 'Soluciones C',
    color: 'from-emerald-500/20 to-emerald-500/5',
    border: 'border-emerald-500/30',
    iconColor: 'text-emerald-400',
    items: [
      { heading: 'Overhaul de Motores', detail: 'Reparación mayor de motores industriales y generadores, con gestión estratégica de repuestos críticos para minimizar tiempos de parada (Downtime).' },
      { heading: 'Mantenimiento Predictivo con Machine Learning', detail: 'Análisis de tendencias históricas de vibración y temperatura para identificar patrones de degradación en rodamientos y bobinados antes de paradas no programadas.' },
      { heading: 'Gestión de Flotas y Activos (GPS/IoT)', detail: 'Sistemas de rastreo satelital con telemetría avanzada para monitorear consumo de combustible, horas de motor y comportamiento del conductor en tiempo real.' },
      { heading: 'Telemetría Avanzada (CAN bus)', detail: 'Extracción de datos directos del motor: consumo de combustible, temperatura del refrigerante, RPM y códigos de falla en tiempo real.' },
      { heading: 'Gestión de Comportamiento del Conductor', detail: 'Algoritmos que detectan frenados bruscos, aceleraciones excesivas y ralentí prolongado para reducir el desgaste mecánico y el gasto de combustible.' },
      { heading: 'Mantenimiento Preventivo Automatizado', detail: 'Alertas basadas en kilometraje real u horas de motor, vinculadas directamente al inventario de repuestos para una gestión Just-in-Time.' },
    ],
  },
  {
    id: 'tech',
    icon: Cpu,
    title: 'Tecnología e Industria 4.0',
    subtitle: 'Soluciones D — Digital Edge',
    color: 'from-purple-500/20 to-purple-500/5',
    border: 'border-purple-500/30',
    iconColor: 'text-purple-400',
    items: [
      { heading: 'Diagnóstico de Madurez Digital', detail: 'Evaluación de la infraestructura actual y hoja de ruta para la adopción de Industria 4.0.' },
      { heading: 'Ciberseguridad Industrial (OT)', detail: 'Protección de redes de control para evitar intrusiones en sistemas críticos de operación.' },
      { heading: 'Optimización de Procesos (ERP)', detail: 'Integración de activos físicos con sistemas de gestión ERP: cada movimiento en planta reflejado en contabilidad y logística.' },
      { heading: 'Video-Telemetría (Dashcams Inteligentes)', detail: 'Integración de cámaras con IA para detección de fatiga, distracciones y evidencia digital en incidentes.' },
      { heading: 'Gestión de Activos Digital', detail: 'Etiquetado con códigos QR vinculados a la plataforma: manuales e historial de mantenimiento desde tablet en sitio.' },
      { heading: 'Control de Acceso y Reconocimiento de Matrículas', detail: 'Plataforma de seguridad unificada para la protección física y operativa en una sola interfaz.' },
      { heading: 'Infraestructura de Datos', detail: 'Servidores, almacenamiento y redes para soportar operaciones conectadas e inteligentes.' },
    ],
  },
]

function ServiceCard({ service }) {
  const [open, setOpen] = useState(false)
  const Icon = service.icon

  return (
    <div className={`rounded-2xl border ${service.border} bg-gradient-to-b ${service.color} overflow-hidden`}>
      <button
        className="w-full flex items-center justify-between p-6 text-left"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center gap-4">
          <div className={`p-3 rounded-xl bg-navy-900/60 ${service.iconColor}`}>
            <Icon size={22} />
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-0.5">
              {service.subtitle}
            </p>
            <h3 className="text-lg font-bold text-white">{service.title}</h3>
          </div>
        </div>
        <ChevronDown
          size={20}
          className={`text-gray-400 transition-transform duration-300 flex-shrink-0 ml-4 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <div className="px-6 pb-6 grid sm:grid-cols-2 gap-4">
          {service.items.map((item) => (
            <div key={item.heading} className="bg-navy-900/50 rounded-xl p-4 border border-white/5">
              <p className={`text-sm font-semibold mb-1 ${service.iconColor}`}>{item.heading}</p>
              <p className="text-sm text-gray-400 leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default function Services() {
  return (
    <section id="soluciones" className="bg-navy-900 py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-brand-orange text-sm font-semibold uppercase tracking-widest mb-3">
            Nuestras Soluciones
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Cobertura Integral para la Industria
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Cuatro áreas de especialización que cubren el ciclo completo de operaciones industriales, desde la extracción hasta la gestión digital de activos.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {services.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>
      </div>
    </section>
  )
}
