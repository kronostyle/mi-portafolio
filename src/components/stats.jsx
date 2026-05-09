import { motion } from "framer-motion";

const stats = [
  { 
    label: "Años de Experiencia", 
    value: "6+", 
    description: "Desarrollando arquitecturas de alto rendimiento." 
  },
  { 
    label: "Proyectos Mensuales", 
    value: "60+", 
    description: "Entregados bajo estándares de calidad senior." 
  },
  { 
    label: "Liderazgo Técnico", 
    value: "18", 
    description: "Especialistas coordinados en equipos multidisciplinarios." 
  },
  { 
    label: "Nivel de Inglés", 
    value: "B2", 
    description: "Competencia profesional completa para entornos remotos." 
  }
];

export default function Stats() {
  return (
    <section className="relative z-10 py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-accent-cian/50 transition-all duration-500 overflow-hidden"
            >
              {/* Efecto de brillo al pasar el mouse */}
              <div className="absolute -inset-1 bg-gradient-to-r from-accent-cian to-accent-violet rounded-3xl blur opacity-0 group-hover:opacity-10 transition duration-500" />
              
              <div className="relative">
                <h3 className="text-5xl font-extrabold bg-gradient-to-r from-accent-cian to-accent-violet bg-clip-text text-transparent mb-2">
                  {stat.value}
                </h3>
                <p className="text-white font-bold text-lg mb-2">
                  {stat.label}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}