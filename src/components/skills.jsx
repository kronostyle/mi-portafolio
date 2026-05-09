import { motion } from "framer-motion";

const skills = [
  { name: "React.js", category: "Frontend", color: "from-blue-400 to-cyan-500" },
  { name: "Next.js", category: "Frontend", color: "from-white to-gray-400" },
  { name: "TypeScript", category: "Frontend", color: "from-blue-500 to-indigo-600" },
  { name: "WordPress", category: "CMS", color: "from-blue-600 to-sky-500" },
  { name: "PHP", category: "Backend", color: "from-indigo-400 to-purple-500" },
  { name: "Tailwind CSS", category: "Design", color: "from-cyan-400 to-teal-500" },
  { name: "MongoDB", category: "Database", color: "from-green-500 to-emerald-600" },
  { name: "Jest", category: "Testing", color: "from-red-500 to-orange-600" },
  { name: "Figma", category: "Design", color: "from-purple-500 to-pink-500" },
];

// Configuración del rebote característico
const bounceTransition = {
  type: "spring",
  stiffness: 260,
  damping: 20
};

export default function TechStack() {
  return (
    <section className="py-24 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-white mb-16">
          Ecosistema <span className="text-accent-cian">Tecnológico</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
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
              {/* Glow effect detrás del tag */}
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