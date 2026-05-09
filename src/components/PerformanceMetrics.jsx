import { motion } from "framer-motion";

const metrics = [
  { label: "Performance", value: 99, color: "text-green-500" },
  { label: "Accessibility", value: 100, color: "text-green-500" },
  { label: "Best Practices", value: 100, color: "text-green-500" },
  { label: "SEO", value: 98, color: "text-green-500" },
];

export default function PerformanceMetrics() {
  return (
    <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Visualización en Cuadrícula Simétrica (2x2) */}
          <div className="grid grid-cols-2 gap-8 md:gap-12 justify-items-center">
            {metrics.map((metric, index) => (
              <motion.div 
                key={index}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, type: "spring" }}
                className="flex flex-col items-center gap-4 w-full"
              >
                <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-gray-800 flex items-center justify-center bg-white/5">
                  {/* Círculo de progreso animado */}
                  <svg className="absolute inset-0 w-full h-full -rotate-90">
                    <circle
                      cx="50%"
                      cy="50%"
                      r="45%"
                      className="fill-none stroke-green-500 stroke-[4] transition-all duration-1000"
                      strokeDasharray="283"
                      strokeDashoffset={283 - (283 * metric.value) / 100}
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className={`text-2xl md:text-3xl font-bold ${metric.color}`}>
                    {metric.value}
                  </span>
                </div>
                <span className="text-gray-400 font-bold text-xs md:text-sm uppercase tracking-[0.2em] text-center">
                  {metric.label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Texto Explicativo Técnico */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Optimización <span className="text-accent-cian underline decoration-accent-violet/30">sin compromisos</span>.
            </h2>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              Como Ingeniero de Sistemas con experiencia en <strong>liderazgo técnico</strong>, implemento arquitecturas que garantizan que cada proyecto cumpla con los estándares más estrictos de Google.
            </p>
            {/* Texto Explicativo Técnico Corregido */}
<ul className="space-y-4">
  <li className="flex items-start gap-3 text-gray-300">
    <span className="text-accent-cian mt-1">▹</span> 
    <p>
      Reducción de carga en servidor mediante refinamiento de routing y endpoints eficientes.
    </p>
  </li>
  <li className="flex items-start gap-3 text-gray-300">
    <span className="text-accent-cian mt-1">▹</span> 
    <p>
      Aseguramiento de métricas <span className="text-white font-bold whitespace-nowrap">Core Web Vitals</span> para mejorar el posicionamiento orgánico.
    </p>
  </li>
  <li className="flex items-start gap-3 text-gray-300">
    <span className="text-accent-cian mt-1">▹</span> 
    <p>
      Uso de <span className="text-white font-bold whitespace-nowrap">Jest</span> para garantizar la integridad de los componentes en producción.
    </p>
  </li>
  <li className="flex items-start gap-3 text-gray-300">
    <span className="text-accent-cian mt-1">▹</span> 
    <p>
      Desarrollo de funcionalidades personalizadas extendiendo las capacidades de WordPress.
    </p>
  </li>
</ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}