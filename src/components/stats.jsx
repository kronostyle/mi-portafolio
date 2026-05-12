import { motion } from "framer-motion";
import { useLanguage } from "../LanguageContext"; // 1. Importamos el hook

export default function Stats() {
  const { t } = useLanguage(); // 2. Extraemos las traducciones

  // 3. Movemos el array dentro para que sea dinámico
  const stats = [
    { 
      label: t.stats_exp_title, 
      value: t.stats_exp_years, 
      description: t.stats_exp_desc 
    },
    { 
      label: t.stats_projects_title, 
      value: t.stats_projects_count, 
      description: t.stats_projects_desc 
    },
    { 
      label: t.stats_leadership_title || "Liderazgo Técnico", 
      value: "18", 
      description: t.stats_leadership_desc || "Especialistas coordinados en equipos multidisciplinarios." 
    },
    { 
      label: t.stats_english_title || "Nivel de Inglés", 
      value: "B2", 
      description: t.stats_english_desc || "Competencia profesional completa para entornos remotos." 
    }
  ];

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