import { useState } from 'react'
import { Send, MapPin, Phone, Mail } from 'lucide-react'

const serviceOptions = [
  'Tratamiento de Gas y Crudo',
  'Soluciones Energéticas (Subestaciones / Generación)',
  'Mantenimiento Predictivo y Telemática',
  'Tecnología e Industria 4.0',
  'Gestión de Inventario / Alquiler de Equipos',
  'Otro',
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: POST to /api/contact
    setSubmitted(true)
  }

  return (
    <section id="contacto" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-brand-orange text-sm font-semibold uppercase tracking-widest mb-3">
            Contacto
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Solicite una Evaluación Técnica
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            ¿Tiene un proyecto en mente o necesita un plan de mantenimiento? Cuéntenos y nuestro equipo lo contactará a la brevedad.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="md:col-span-2 flex flex-col gap-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-6">Información de Contacto</h3>
              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-brand-orange flex-shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">Oficinas</p>
                    <p className="text-gray-400 text-sm">Caracas, Venezuela</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-brand-orange flex-shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">Teléfono</p>
                    <p className="text-gray-400 text-sm">Venezuela & USA</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-brand-orange flex-shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">Email</p>
                    <p className="text-gray-400 text-sm">info@wiseenergyservices.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-brand-orange/10 border border-brand-orange/20 rounded-2xl p-6">
              <p className="text-brand-orange font-semibold text-sm mb-2">Respuesta en 24 horas</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Nuestro equipo técnico revisará su solicitud y le enviará una propuesta preliminar dentro de las próximas 24 horas hábiles.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-3">
            {submitted ? (
              <div className="h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto mb-4">
                    <Send size={24} />
                  </div>
                  <h3 className="text-white text-xl font-bold mb-2">¡Solicitud Enviada!</h3>
                  <p className="text-gray-400 text-sm">
                    Nos pondremos en contacto con usted en las próximas 24 horas.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm text-gray-400 mb-1.5">Nombre *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full bg-navy-800/60 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-brand-orange transition-colors"
                      placeholder="Su nombre completo"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1.5">Empresa *</label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={form.company}
                      onChange={handleChange}
                      className="w-full bg-navy-800/60 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-brand-orange transition-colors"
                      placeholder="Nombre de su empresa"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm text-gray-400 mb-1.5">Correo Electrónico *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full bg-navy-800/60 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-brand-orange transition-colors"
                      placeholder="correo@empresa.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-1.5">Teléfono</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full bg-navy-800/60 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-brand-orange transition-colors"
                      placeholder="+1 (000) 000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-1.5">Servicio de Interés *</label>
                  <select
                    name="service"
                    required
                    value={form.service}
                    onChange={handleChange}
                    className="w-full bg-navy-800/60 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-orange transition-colors text-white"
                  >
                    <option value="" className="bg-navy-900 text-gray-400">Seleccione una opción</option>
                    {serviceOptions.map((o) => (
                      <option key={o} value={o} className="bg-navy-900">{o}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-1.5">Descripción del Proyecto o Necesidad *</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full bg-navy-800/60 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-brand-orange transition-colors resize-none"
                    placeholder="Describa brevemente su proyecto, equipo, o el plan de servicio que necesita..."
                  />
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 px-8 py-3.5 bg-brand-orange text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors text-sm"
                >
                  <Send size={16} />
                  Enviar Solicitud
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
