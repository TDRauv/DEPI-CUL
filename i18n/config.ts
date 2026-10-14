import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Diccionarios base (puedes moverlos a archivos JSON separados en /locales/es.json y /locales/en.json)
export const resources = {
  es: {
    translation: {
      nav: {
        home: "Inicio",
        ecosystem: "Ecosistema CUL Global",
        interPrograms: "Programas Inter",
        articulated: "Internacionalización Articulada",
        contact: "Contacto e Interacción",
        barranquilla: "Bienvenidos a Barranquilla",
        virtual: "CUL Global Virtual",
      },
      common: {
        backToHome: "Volver al inicio",
        moreInfo: "Conoce más",
        seeCall: "Ver convocatoria",
        completed: "Finalizada",
        active: "Vigente",
      },
      hero: {
        tagline: "Ecosistema CUL Global",
        title: "Internacionalización CUL",
      },
    },
  },
  en: {
    translation: {
      nav: {
        home: "Home",
        ecosystem: "CUL Global Ecosystem",
        interPrograms: "Inter Programs",
        articulated: "Articulated Internationalization",
        contact: "Contact & Interaction",
        barranquilla: "Welcome to Barranquilla",
        virtual: "CUL Global Virtual",
      },
      common: {
        backToHome: "Back to home",
        moreInfo: "Learn more",
        seeCall: "View call",
        completed: "Finished",
        active: "Active",
      },
      hero: {
        tagline: "CUL Global Ecosystem",
        title: "CUL Internationalization",
      },
    },
  },
};

// Evita reinicializaciones múltiples en hot-reload
if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources,
    lng: "es", // Idioma por defecto
    fallbackLng: "es",
    interpolation: {
      escapeValue: false, // React ya se encarga de sanitizar
    },
  });
}

export default i18n;