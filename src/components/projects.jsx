import { motion } from "framer-motion";

const projects = [
  {
    title: "VS One Corporation",
    company: "Air Quality & Inspections",
    size: "md:col-span-2 md:row-span-2", // Destacado (Grande)
    tags: ["React", "Custom CMS", "SEO"],
    description: "Plataforma corporativa enfocada en servicios de inspección y remediación. Implementación de una arquitectura limpia para mejorar la confianza del usuario y la conversión de leads.",
    metrics: "High Conversion UI",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop" // Imagen de ingeniería/inspección
  },
  {
    title: "Geomar Chile",
    company: "E-commerce Marítimo",
    size: "md:col-span-1",
    tags: ["Shopify", "UX Strategy", "Performance"],
    description: "Optimización de flujo de compra para productos marinos gourmet. Enfoque en navegación intuitiva y tiempos de carga mínimos para mercado internacional.",
    metrics: "Core Web Vitals Pass",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=1000&auto=format&fit=crop" // Imagen de productos gourmet/mar
  },
 {
  title: "Loss Reckon Services",
    company: "Claims & Adjusting Tech",
    size: "md:col-span-1",
    tags: ["Systems Architecture", "Data Flow"],
    description: "Digitalización de procesos de gestión de reclamos y seguros. Arquitectura robusta para el manejo de reportes técnicos y evidencias de campo.",
    metrics: "Data-Driven Process",
    image: "https://images.unsplash.com/photo-1507206130118-b5907f817163?q=80&w=1000&auto=format&fit=crop"},
  {
    title: "HealthConnect AI",
    company: "Sector Salud",
    size: "md:col-span-1",
    tags: ["Next.js", "TypeScript", "HIPAA"],
    description: "Sistema de gestión hospitalaria con dashboard interactivo para monitoreo de pacientes y telemedicina segura.",
    metrics: "99.9% Uptime",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000&auto=format&fit=crop" // Imagen de tecnología médica
  },
  {
    title: "Creative Studio Portfolio",
    company: "Freelance Designer",
    size: "md:col-span-2",
    tags: ["Framer Motion", "GSAP", "Tailwind"],
    description: "Experiencia visual inmersiva para creativos. Animaciones pixel-perfect y carga optimizada de activos de alta resolución.",
    metrics: "Ultra Smooth FPS",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000&auto=format&fit=crop" // Imagen de diseño/creatividad
  }
];

export default function ProjectsBento() {
  return (
    <section id="proyectos" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-12">
          Proyectos de <span className="text-accent-cian">Impacto</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 0.99 }}
              className={`relative rounded-[2rem] overflow-hidden border border-white/10 group ${project.size}`}
            >
              {/* Imagen de fondo con Overlay Gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
              <img 
                src={project.image} 
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Contenido */}
              <div className="relative z-20 h-full p-8 flex flex-col justify-end">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] font-bold bg-white/10 text-white px-2 py-1 rounded-full backdrop-blur-md border border-white/20">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <span className="text-accent-cian text-[10px] font-bold uppercase tracking-[0.2em] mb-1">
                  {project.company}
                </span>
                <h3 className="text-2xl font-bold text-white mb-2 leading-tight">{project.title}</h3>
                <p className="text-gray-300 text-xs line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                  {project.description}
                </p>
                
                <div className="mt-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[10px] font-mono text-accent-violet uppercase">
                    {project.metrics}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}