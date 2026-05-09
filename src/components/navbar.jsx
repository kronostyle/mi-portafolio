export default function Navbar() {
  const navLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Proyectos", href: "#proyectos" },
    { name: "Habilidades", href: "#skills" }, // Asegúrate de que tu componente Skills tenga id="skills"
    { name: "Contacto", href: "#contacto" },
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
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-accent-cian transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* BOTÓN CV */}
        <a 
          href="/CV_Antonio_R_Azaf:N.pdf" 
          download="CV_Antonio_Azaf.pdf"
          className="px-6 py-2 bg-gradient-to-r from-accent-cian to-accent-violet rounded-full text-white font-bold shadow-lg hover:shadow-accent-cian/20 transition-all text-sm"
        >
         Descargar CV
        </a>
      </div>
    </nav>
  );
}