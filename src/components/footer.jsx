import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { useLanguage } from "../LanguageContext";

export default function Footer() {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0a0a0a] pt-20 pb-10 overflow-hidden">
      {/* Línea divisoria con gradiente */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          
          {/* Lado Izquierdo: Marca Personal */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-white mb-2">
              Antonio R. <span className="text-accent-cian">Azaf N.</span>
            </h2>
            <p className="text-gray-500 text-sm tracking-widest uppercase font-mono">
              {t.contact_footer_lead}
            </p>
          </div>

          {/* Centro: Enlaces Sociales */}
          <div className="flex gap-6">
            <motion.a
              href="https://www.linkedin.com/in/antonio-azaf-679222355"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, color: "#22d3ee" }}
              className="text-gray-400 text-3xl transition-colors"
              title="LinkedIn"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://github.com/kronostyle"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, color: "#a855f7" }}
              className="text-gray-400 text-3xl transition-colors"
              title="GitHub"
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="mailto:rafaazaf93@gmail.com"
              whileHover={{ y: -5, color: "#ffffff" }}
              className="text-gray-400 text-3xl transition-colors"
              title="Email"
            >
              <FaEnvelope />
            </motion.a>
          </div>
        </div>

        {/* Mensaje de Cierre y Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
          <p className="text-gray-600 text-xs">
            © {currentYear} — {language === 'es' 
              ? 'Diseñado con precisión para el futuro digital.' 
              : 'Precisely designed for the digital future.'}
          </p>
          
          <div className="flex gap-4">
            <span className="flex items-center gap-2 text-gray-500 text-xs">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              {t.contact_availability}
            </span>
          </div>
        </div>
      </div>

      {/* Sutil brillo de fondo */}
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-full max-w-4xl h-48 bg-accent-cian/5 blur-[120px] rounded-full" />
    </footer>
  );
}