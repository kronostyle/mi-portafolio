import { useLanguage } from '../LanguageContext';

export default function Navbar() {
  const { language, t, toggleLanguage } = useLanguage();

  const navlinks = [
    { name: t.nav_home || "Inicio", href: "#inicio" },
    { name: t.nav_projects, href: "#proyectos" },
    { name: t.nav_skills, href: "#skills" },
    { name: t.nav_contact || "Contacto", href: "#contacto" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-white/10 bg-dark-bg/80">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* LOGO */}
        <span className="text-2xl font-bold bg-gradient-to-r from-accent-cian to-accent-violet bg-clip-text text-transparent">
          Antonio.dev
        </span>

        {/* LINKS DINÁMICOS */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          {navlinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-gray-300 hover:text-accent-cian transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* BOTONES LADO DERECHO */}
        <div className="flex items-center gap-4">
          {/* BOTÓN DE IDIOMA */}
          <button 
            onClick={toggleLanguage}
            className="bg-white/5 border border-white/10 px-3 py-1 rounded-md text-xs font-bold hover:bg-white/10 transition-all text-white"
          >
            {language === 'es' ? 'EN' : 'ES'}
          </button>

          {/* BOTÓN CV */}
          <a 
            href="/CV_Antonio_R_Azaf_N.pdf" 
            download 
            className="px-4 py-2 bg-gradient-to-r from-accent-cian to-accent-violet rounded-full text-white font-bold text-xs shadow-lg hover:shadow-accent-cian/20 transition-all"
          >
            {t.download_cv}
          </a>
        </div>
      </div>
    </nav>
  );
}