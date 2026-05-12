import { motion } from "framer-motion";
import { useLanguage } from "../LanguageContext";
import { useMemo } from "react";

export default function Education() {
  const { t, language } = useLanguage();

  // Memorizamos las certificaciones para traducir los títulos dinámicamente
  const certifications = useMemo(() => [
    { 
      title: language === 'es' ? "Estrategia de Negocios" : "Business Strategy", 
      issuer: "Market Trends & Models", 
      year: "2022" 
    },
    { 
      title: language === 'es' ? "Identidad Visual" : "Visual Identity", 
      issuer: "Brand Manuals & Color Theory", 
      year: "2021" 
    },
    { 
      title: language === 'es' ? "Especialista en WordPress" : "WordPress Specialist", 
      issuer: "Custom Plugins & Theme Development", 
      year: "2019" 
    },
    { 
      title: language === 'es' ? "Desarrollo Front-End" : "Front-End Development", 
      issuer: "React, Next.js & Tailwind", 
      year: "2018" 
    },
    { 
      title: "Back-End & DB", 
      issuer: "PHP & MySQL", 
      year: "2019" 
    }
  ], [language]);

  return (
    <section className="py-24 bg-[#0a0a0a] relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-white mb-16 text-center"
        >
          {language === 'es' ? 'Formación ' : 'Training '}
          <span className="text-accent-cian">&</span> 
          {language === 'es' ? ' Especializaciones' : ' Specializations'}
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* COLUMNA IZQUIERDA: Educación + Idiomas */}
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-accent-violet mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-accent-violet"></span> {t.edu_title}
              </h3>
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 relative overflow-hidden group">
                <span className="text-accent-cian font-mono text-sm">2019 - 2025</span>
                <h4 className="text-2xl font-bold text-white mt-2">{t.edu_degree}</h4>
                <p className="text-gray-300 mt-2 font-medium">{t.edu_uni}</p>
                <p className="text-gray-400 mt-4 text-sm leading-relaxed">
                  {t.edu_desc}
                </p>
              </div>
            </div>

            {/* Bloque de Idiomas */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-white/20"></span> {language === 'es' ? 'Idiomas' : 'Languages'}
              </h3>
              <div className="p-8 rounded-3xl bg-gradient-to-br from-accent-violet/5 to-transparent border border-white/5">
                <div className="space-y-6">
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-200 font-bold">{language === 'es' ? 'Inglés' : 'English'}</span>
                      <span className="text-accent-cian font-mono text-sm">
                        {language === 'es' ? 'B2 - Profesional' : 'B2 - Professional'}
                      </span>
                    </div>
                    <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                      <div className="bg-accent-cian h-full w-[75%] shadow-[0_0_15px_rgba(34,211,238,0.4)]"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-200 font-bold">{language === 'es' ? 'Español' : 'Spanish'}</span>
                    <span className="text-accent-violet font-mono text-sm">
                      {language === 'es' ? 'Nativo' : 'Native'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: Certificaciones */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-accent-cian mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-accent-cian"></span> {language === 'es' ? 'Certificaciones' : 'Certifications'}
            </h3>
            <div className="grid gap-4">
              {certifications.map((cert, index) => (
                <motion.div 
                  key={`${language}-${index}`}
                  whileHover={{ x: 10, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                  className="flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/5 transition-all cursor-default"
                >
                  <div>
                    <h4 className="text-white font-bold">{cert.title}</h4>
                    <p className="text-gray-500 text-xs uppercase tracking-wider">{cert.issuer}</p>
                  </div>
                  <span className="text-accent-violet font-mono text-sm">{cert.year}</span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}