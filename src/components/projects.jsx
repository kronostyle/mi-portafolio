import { motion } from "framer-motion";
import { useLanguage } from "../LanguageContext";
import { useMemo } from "react";

export default function ProjectsBento() {
  const { t, language } = useLanguage();

  const projects = useMemo(() => [
    {
      title: t.project_vsone_title,
      company: 'AIR QUALITY & INSPECTIONS',
      size: "md:col-span-2 md:row-span-2",
      tags: ["React", "Custom CMS", "SEO"],
      description: t.project_vsone_desc,
      metrics: "High Conversion UI",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop",
      url: "https://www.vsonecorporation.com"
    },
    {
      title: t.project_geomar_title,
      company: t.project_geomar_tag,
      size: "md:col-span-1",
      tags: ["Shopify", "UX Strategy", "Performance"],
      description: t.project_geomar_desc,
      metrics: "Core Web Vitals Pass",
      image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=1000&auto=format&fit=crop",
      url: "https://www.geomar.cl"
    },
    {
      title: t.project_loss_title,
      company: 'Claims & Adjusting Tech',
      size: "md:col-span-1",
      tags: ["Systems Architecture", "Data Flow"],
      description: t.project_loss_desc,
      metrics: "Data-Driven Process",
      image: "https://images.unsplash.com/photo-1507206130118-b5907f817163?q=80&w=1000&auto=format&fit=crop",
      url: "https://www.lossreckonservices.com"
    },
    {
      title: t.project_health_title,
      company: t.project_health_tag,
      size: "md:col-span-1",
      tags: ["Next.js", "TypeScript", "HIPAA"],
      description: t.project_health_desc,
      metrics: "99.9% Uptime",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000&auto=format&fit=crop",
      url: "https://www.healthconect.com"
    },
    {
      title: t.project_studio_title,
      company: t.project_studio_tag,
      size: "md:col-span-2",
      tags: ["Framer Motion", "GSAP", "Tailwind"],
      description: t.project_studio_desc,
      metrics: "Ultra Smooth FPS",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000&auto=format&fit=crop",
      url: "https://www.recreate.com"
    }
  ], [t, language]);

  return (
    <section id="proyectos" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-12">
          {language === 'es' ? 'Proyectos de ' : 'Impact '}
          <span className="text-accent-cian">
            {language === 'es' ? 'Impacto' : 'Projects'}
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
          {projects.map((project, index) => (
            <motion.a
              key={`${language}-${index}`}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 0.98 }}
              whileTap={{ scale: 0.97 }}
              className={`relative block rounded-[2rem] overflow-hidden border border-white/10 group cursor-pointer ${project.size}`}
            >
              {/* Overlay y Gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-90" />
              
              <img 
                src={project.image} 
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

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
                <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-xs line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                  {project.description}
                </p>
                
                <div className="mt-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[10px] font-mono text-accent-violet uppercase">
                    {project.metrics}
                  </span>
                  <span className="text-white text-xs font-bold underline decoration-accent-cian decoration-2 underline-offset-4">
                    {language === 'es' ? 'Ver Proyecto ↗' : 'View Project ↗'}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}