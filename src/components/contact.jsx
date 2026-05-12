import { motion } from "framer-motion";
import { FaPaperPlane, FaEnvelope, FaUser, FaMessage } from "react-icons/fa6";
import { useState } from "react";
import { useLanguage } from "../LanguageContext"; // Importar hook

export default function Contact() {
  const { t } = useLanguage(); // Extraer traducciones
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult(t.contact_status_sending || "Enviando..."); // Texto dinámico
    const formData = new FormData(event.target);

    formData.append("access_key", "10566ae3-4c3b-4aed-bb7d-983768af90c7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult(t.contact_status_success || "¡Mensaje enviado con éxito!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(t.contact_status_error || "Error al enviar.");
    }
  };

  return (
    <section id="contacto" className="py-20 px-6 max-w-4xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-[2rem] backdrop-blur-xl shadow-2xl"
      >
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-accent-cian to-accent-violet bg-clip-text text-transparent inline-block">
            {t.contact_title}
          </h2>
          <p className="text-gray-400 mt-4 text-lg">
            {t.contact_subtitle}
          </p>
        </div>

        <form className="space-y-6" onSubmit={onSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Nombre */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                <FaUser className="text-accent-cian" /> {t.contact_label_name}
              </label>
              <input 
                name="name" 
                required
                type="text" 
                placeholder={t.contact_placeholder_name}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-accent-cian/50 focus:ring-1 focus:ring-accent-cian/50 transition-all"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
                <FaEnvelope className="text-accent-cian" /> {t.contact_label_email}
              </label>
              <input 
                name="email" 
                required
                type="email" 
                placeholder={t.contact_placeholder_email}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-accent-cian/50 focus:ring-1 focus:ring-accent-cian/50 transition-all"
              />
            </div>
          </div>

          {/* Mensaje */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300 flex items-center gap-2">
              <FaMessage className="text-accent-cian" /> {t.contact_label_message}
            </label>
            <textarea 
              name="message" 
              required
              rows="5"
              placeholder={t.contact_placeholder_message}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-accent-cian/50 focus:ring-1 focus:ring-accent-cian/50 transition-all resize-none"
            ></textarea>
          </div>

          {/* Botón de Envío */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-gradient-to-r from-accent-cian to-accent-violet text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 shadow-lg shadow-accent-cian/20 hover:shadow-accent-cian/40 transition-all"
          >
            {t.contact_btn_send} <FaPaperPlane />
          </motion.button>

          {/* Estado del envío */}
          {result && (
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center mt-4 text-accent-cian font-medium"
            >
              {result}
            </motion.p>
          )}
        </form>
      </motion.div>
    </section>
  );
}