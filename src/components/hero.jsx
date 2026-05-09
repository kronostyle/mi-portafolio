import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen pt-20 flex items-center bg-[#0a0a0a] overflow-hidden">
      
      {/* Fondo: Gradientes de profundidad */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#111] via-transparent to-[#0a0a0a]" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent-cian/10 rounded-full blur-[120px]" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent-violet/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* TEXTO (Izquierda) */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-sm font-bold text-accent-cian uppercase tracking-widest bg-accent-cian/10 px-4 py-1 rounded-full border border-accent-cian/20 inline-block mb-6">
            Systems Engineer & Web Specialist
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            Ingeniería
 <br />
            <span className="bg-gradient-to-r from-accent-cian to-accent-violet bg-clip-text text-transparent">
             Pixel-Perfect
            </span>
          </h1>
          <p className="text-lg text-gray-400 mb-10 max-w-lg leading-relaxed">
           Transformo ideas complejas en arquitecturas de alto rendimiento. Experto en React, Next.js y WordPress Avanzado.
           </p>
<p className="text-md text-gray-400 mb-10 max-w-lg leading-relaxed border-l-2 border-accent-cian/30 pl-4">
            Casi 6 años de experiencia liderando equipos multidisciplinarios y optimizando el Core Web Vitals para productos digitales de escala internacional.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#proyectos" className="px-8 py-4 bg-gradient-to-r from-accent-cian to-accent-violet rounded-full text-white font-bold shadow-lg shadow-accent-cian/20 hover:scale-105 transition-all">
              Ver Proyectos
            </a>
            <a href="#contacto" className="px-8 py-4 bg-white/5 border border-white/10 rounded-full text-white font-bold hover:bg-white/10 transition-all">
              Hablemos
            </a>
          </div>
        </motion.div>

        {/* IMAGEN DEL ASTRONAUTA (Derecha) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >
          {/* Animación de Flotación */}
          <motion.div
            animate={{
              y: [0, -30, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-72 md:w-full max-w-[450px]"
          >
            {/* Resplandor detrás de la imagen */}
            <div className="absolute inset-0 bg-accent-cian/20 blur-[80px] rounded-full animate-pulse" />
            
            {/* IMPORTANTE: La ruta lleva "/" al inicio para leer desde la carpeta public */}
            <img 
              src="/astronauta-removebg-preview.png" 
              alt="" 
              className="relative z-10 w-full h-auto drop-shadow-[0_35px_35px_rgba(34,211,238,0.3)]"
            />

            {/* Elemento Decorativo: "Badge" Flotante */}
            <motion.div
              animate={{ x: [0, 10, 0], y: [0, 15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-5 -right-5 bg-[#1a1a1a]/80 backdrop-blur-md border border-white/10 p-4 rounded-2xl hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-ping" />
                <span className="text-xs font-mono text-gray-300">Status: Coding...</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Indicador de Scroll */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">Deslizar</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent-cian to-transparent" />
      </motion.div>
    </section>
  );
}