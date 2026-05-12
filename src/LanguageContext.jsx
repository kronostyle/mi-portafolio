import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

const translations = {
  es: {
    // Navbar
    nav_home: "Inicio",
    nav_projects: "Proyectos",
    nav_skills: "Habilidades",
    nav_contact: "Contacto",
    nav_cv: "Descargar CV",

    // Hero Section
    hero_badge: "Ingeniería + Pixel-Perfect",
    hero_title: "Antonio.dev",
    hero_subtitle: "Systems Engineer & Web Specialist",
    hero_description: "Transformo ideas complejas en arquitecturas de alto rendimiento. Experto en React, Next.js y WordPress Avanzado.",
    hero_subdescription: "Casi 6 años de experiencia liderando equipos multidisciplinarios y optimizando el Core Web Vitals para productos digitales de escala internacional.",
    hero_cta_projects: "Ver Proyectos",
    hero_cta_talk: "Hablemos",
    scroll_text: "Deslizar",

    // Stats Section
    stats_exp_years: "6+",
    stats_exp_title: "Años de Experiencia",
    stats_exp_desc: "Desarrollando arquitecturas de alto rendimiento",
    stats_projects_count: "60+",
    stats_projects_title: "Proyectos Mensuales",
    stats_projects_desc: "Entregados con estándares de calidad",
    stats_performance: "PERFORMANCE",
    stats_accessibility: "ACCESSIBILITY",
    stats_seo: "SEO",
    stats_best_practices: "BEST PRACTICES",
    stats_leadership_title: "Liderazgo Técnico",
stats_leadership_desc: "Especialistas coordinados en equipos multidisciplinarios.",
stats_english_title: "Nivel de Inglés",
stats_english_desc: "Competencia profesional completa para entornos remotos.",

    // About/Impact Section
    impact_title: "Proyectos de Impacto",
    impact_status: "Status: Coding...",
    impact_subtitle: "Optimización sin compromisos.",
    impact_desc: "Como Ingeniero de Sistemas con experiencia en liderazgo técnico, implemento arquitecturas que garantizan que cada proyecto cumpla con los estándares más estrictos de Google.",
    impact_point1: "Reducción de carga en servidor mediante refinamiento de routing y endpoints eficientes.",
    impact_point2: "Aseguramiento de métricas Core Web Vitals para mejorar el posicionamiento orgánico.",
    impact_point3: "Uso de Jest para garantizar la integridad de los componentes en producción.",
    impact_point4: "Desarrollo de funcionalidades personalizadas extendiendo las capacidades de WordPress.",

    // Projects Section
    projects_title: "Proyectos",
    project_geomar_title: "Geomar Chile",
    project_geomar_tag: "E-COMMERCE MARÍTIMO",
    project_geomar_desc: "Optimización de flujo de compra para productos marinos gourmet. Enfoque en navegación intuitiva.",
    project_vsone_title: "VS One Corporation",
    project_vsone_tag: "AIR QUALITY & INSPECTIONS",
    project_vsone_desc: "Plataforma corporativa enfocada en servicios de inspección y remediación. Implementación de arquitectura limpia.",
    project_loss_title: "Loss Reckon Services",
    project_loss_desc: "Digitalización de procesos de gestión de reclamos y seguros. Arquitectura robusta para el manejo de reportes.",
    project_health_title: "HealthConnect AI",
    project_health_tag: "SECTOR SALUD",
    project_health_desc: "Sistema de gestión hospitalaria con dashboard interactivo para monitoreo de pacientes y telemedicina segura.",
    project_studio_title: "Creative Studio Portfolio",
    project_studio_tag: "FREELANCE DESIGNER",
    project_studio_desc: "Experiencia visual inmersiva para creativos. Animaciones pixel-perfect y carga optimizada de activos.",

    // Education Section
    edu_title: "Educación",
    edu_subtitle: "Formación & Especializaciones",
    edu_degree: "Ingeniero de Sistemas",
    edu_uni: "Universidad de Oriente",
    edu_date: "2019 - 2025",
    edu_desc: "Formación integral en ingeniería, algoritmos, arquitectura de software y gestión de proyectos tecnológicos.",

    // Skills Section
    skills_title: "Ecosistema Tecnológico",
    skills_visual_id: "Visual Identity",
    skills_visual_desc: "BRAND MANUALS & COLOR THEORY",
    skills_wp_spec: "WordPress Specialist",
    skills_wp_desc: "CUSTOM PLUGINS & THEME DEVELOPMENT",
  skill_frontend: "Frontend",
  skill_backend: "Backend",
  skill_cms: "CMS",
  skill_design: "Diseño",
  skill_database: "Base de Datos",
  skill_testing: "Pruebas",

    // Contact Section
    contact_title: "¿Tienes un proyecto en mente?",
    contact_subtitle: "Escríbeme y hagamos algo increíble juntos.",
    contact_label_name: "Nombre",
    contact_placeholder_name: "Tu nombre",
    contact_label_email: "Email",
    contact_placeholder_email: "tu@email.com",
    contact_label_message: "Mensaje",
    contact_placeholder_message: "Cuéntame sobre tu proyecto...",
    contact_btn_send: "Enviar Mensaje",
    contact_footer_lead: "SYSTEMS ENGINEER | FRONT-END LEAD",
    contact_availability: "Disponible para nuevos retos"
  },
  en: {
    // Navbar
    nav_home: "Home",
    nav_projects: "Projects",
    nav_skills: "Skills",
    nav_contact: "Contact",
    nav_cv: "Download CV",

    // Hero Section
    hero_badge: "Engineering + Pixel-Perfect",
    hero_title: "Antonio.dev",
    hero_subtitle: "Systems Engineer & Web Specialist",
    hero_description: "I transform complex ideas into high-performance architectures. Expert in React, Next.js, and Advanced WordPress.",
    hero_subdescription: "Nearly 6 years of experience leading multidisciplinary teams and optimizing Core Web Vitals for international digital products.",
    hero_cta_projects: "View Projects",
    hero_cta_talk: "Let's Talk",
    scroll_text: "Scroll",
    

    // Stats Section
    stats_exp_years: "6+",
    stats_exp_title: "Years of Experience",
    stats_exp_desc: "Developing high-performance architectures",
    stats_projects_count: "60+",
    stats_projects_title: "Monthly Projects",
    stats_projects_desc: "Delivered with quality standards",
    stats_performance: "PERFORMANCE",
    stats_accessibility: "ACCESSIBILITY",
    stats_seo: "SEO",
    stats_best_practices: "BEST PRACTICES",
    stats_leadership_title: "Technical Leadership",
stats_leadership_desc: "Specialists coordinated in multidisciplinary teams.",
stats_english_title: "English Level",
stats_english_desc: "Full professional proficiency for remote environments.",

    // About/Impact Section
    impact_title: "Impact Projects",
    impact_status: "Status: Coding...",
    impact_subtitle: "Uncompromising optimization.",
    impact_desc: "As a Systems Engineer with technical leadership experience, I implement architectures that ensure every project meets the strictest Google standards.",
    impact_point1: "Reduced server load through refined routing and efficient endpoints.",
    impact_point2: "Core Web Vitals metrics assurance to improve organic positioning.",
    impact_point3: "Use of Jest to ensure component integrity in production.",
    impact_point4: "Development of custom features extending WordPress capabilities.",

    // Projects Section
    projects_title: "Projects",
    project_geomar_title: "Geomar Chile",
    project_geomar_tag: "MARITIME E-COMMERCE",
    project_geomar_desc: "Optimization of the purchasing flow for gourmet marine products. Focus on intuitive navigation.",
    project_vsone_title: "VS One Corporation",
    project_vsone_tag: "AIR QUALITY & INSPECTIONS",
    project_vsone_desc: "Corporate platform focused on inspection and remediation services. Implementation of clean architecture.",
    project_loss_title: "Loss Reckon Services",
    project_loss_desc: "Digitalization of claim and insurance management processes. Robust architecture for report handling.",
    project_health_title: "HealthConnect AI",
    project_health_tag: "HEALTH SECTOR",
    project_health_desc: "Hospital management system with an interactive dashboard for patient monitoring and secure telemedicine.",
    project_studio_title: "Creative Studio Portfolio",
    project_studio_tag: "FREELANCE DESIGNER",
    project_studio_desc: "Immersive visual experience for creatives. Pixel-perfect animations and optimized high-resolution asset loading.",

    // Education Section
    edu_title: "Education",
    edu_subtitle: "Training & Specializations",
    edu_degree: "Systems Engineer",
    edu_uni: "Universidad de Oriente",
    edu_date: "2019 - 2025",
    edu_desc: "Comprehensive training in engineering, algorithms, software architecture, and technology project management.",

    // Skills Section
    skills_title: "Tech Ecosystem",
    skills_visual_id: "Visual Identity",
    skills_visual_desc: "BRAND MANUALS & COLOR THEORY",
    skills_wp_spec: "WordPress Specialist",
    skills_wp_desc: "CUSTOM PLUGINS & THEME DEVELOPMENT",
  skill_frontend: "Frontend",
  skill_backend: "Backend",
  skill_cms: "CMS",
  skill_design: "Design",
  skill_database: "Database",
  skill_testing: "Testing",

    // Contact Section
    contact_title: "Have a project in mind?",
    contact_subtitle: "Write to me and let's make something amazing together.",
    contact_label_name: "Name",
    contact_placeholder_name: "Your name",
    contact_label_email: "Email",
    contact_placeholder_email: "you@email.com",
    contact_label_message: "Message",
    contact_placeholder_message: "Tell me about your project...",
    contact_btn_send: "Send Message",
    contact_footer_lead: "SYSTEMS ENGINEER | FRONT-END LEAD",
    contact_availability: "Available for new challenges"
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'es' ? 'en' : 'es'));
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage debe usarse dentro de un LanguageProvider');
  }
  return context;
};