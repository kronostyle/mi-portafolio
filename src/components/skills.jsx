import { motion } from "framer-motion";
import { useLanguage } from "../LanguageContext"; 
import { useMemo } from "react";

const bounceTransition = {
  type: "spring",
  stiffness: 260,
  damping: 20
};

export default function TechStack() {
  const { t, language } = useLanguage(); 

  // Usamos las nuevas claves del Contexto para las categorías
  const skills = useMemo(() => [
    { name: "React.js", category: t.skill_frontend, color: "from-blue-400 to-cyan-500" },
    { name: "Next.js", category: t.skill_frontend, color: "from-white to-gray-400" },
    { name: "TypeScript", category: t.skill_frontend, color: "from-blue-500 to-indigo-600" },
    { name: "WordPress", category: t.skill_cms, color: "from-blue-600 to-sky-500" },
    { name: "PHP", category: t.skill_backend, color: "from-indigo-400 to-purple-500" },
    { name: "Tailwind CSS", category: t.skill_design, color: "from-cyan-400 to-teal-500" },
    { name: "MongoDB", category: t.skill_database, color: "from-green-500 to-emerald-600" },
    { name: "Jest", category: t.skill_testing, color: "from-red-500 to-orange-600" },
    { name: "Figma", category: t.skill_design, color: "from-purple-500 to-pink-500" },
  ], [t]); // Se actualiza cuando cambia el objeto de traducción 't'

  return (
    <section className="py-24 bg-[#0a0a0a] overflow-hidden" id="skills">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-16">
          {/* Usamos la clave que ya tienes en el contexto */}
          {language === 'es' ? 'Ecosistema ' : 'Tech '}
          <span className="text-accent-cian">
            {language === 'es' ? 'Tecnológico' : 'Ecosystem'}
          </span>
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={`${language}-${skill.name}`} // Forzar re-render al cambiar idioma
              initial={{ opacity: 0, scale: 0.3 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ 
                scale: 1.1, 
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.3 } 
              }}
              viewport={{ once: true }}
              transition={{ 
                ...bounceTransition,
                delay: index * 0.05 
              }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} blur-xl opacity-20 group-hover:opacity-40 transition-opacity rounded-full`} />
              
              <div className="relative px-8 py-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md flex flex-col items-center gap-1 group-hover:border-white/20 transition-colors">
                <span className="text-white font-bold text-lg">{skill.name}</span>
                <span className="text-[10px] uppercase tracking-widest text-gray-500 font-mono">
                  {skill.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}