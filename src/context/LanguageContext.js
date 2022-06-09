import { createContext, useState } from "react";

const LanguageContext = createContext();

const initialLanguage = "en";

const traslations = {
  es:{
    headerTitle: "Mi aplicacion CON Context API",
    headerSubtitle: "Cabecera",
    headerLight: "Claro",
    headerDark: "Oscuro",
    buttonLogin: "Iniciar sesion",
    buttonLogout: "Cerrar sesion",
    mainWelcome: "Bienvenido Usuario",
    mainHello: "Hola Usuario",
    mainContext: "Mi contenido Principal",
    footerTitle: "Pie de pagina"
  },
  en: {
    headerTitle: "My application with Context API",
    headerSubtitle: "Header",
    headerLight: "Light",
    headerDark: "Dark",
    buttonLogin: "Login",
    buttonLogout: "Logout",
    mainWelcome: "Welcome User",
    mainHello: "Hello User",
    mainContext: "My main Content",
    footerTitle: "Footer"
  }
}

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(initialLanguage);
  const [text, setText] = useState(traslations[language]);


    const handleLanguage = (e) => {
    //console.log(e.target.value);
    if(e.target.value === "es"){
      setLanguage("es");
      setText(traslations.es);
    } else {
      setLanguage("en");
      setText(traslations.en);
    }
  };

  const data = {handleLanguage, text};

  return (
    <LanguageContext.Provider value={data}>{children}</LanguageContext.Provider>
  );
};
export { LanguageProvider }
export default LanguageContext