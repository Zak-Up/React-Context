import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'

const initialTheme = "light";
const initialLanguage = "en";

const traslations = {
  es:{
    headerTitle: "Mi aplicacion SIN Context API",
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
    headerTitle: "My application without Context API",
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

const initialAuth = null;

const MyPage = () => {
  const [theme, setTheme] = React.useState(initialTheme);
  const [language, setLanguage] = React.useState(initialLanguage);
  const [text, setText] = React.useState(traslations[language]);
  const [auth, setAuth] = React.useState(initialAuth);

  const handleTheme = (e) => {
    //console.log(e.target.value);
    if(e.target.value === "light"){
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

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

  const handleAuth = (e) => {
    if(auth){
      setAuth(null);
    } else {
      setAuth(true);
    }
  };

  return (
    <div className='my-page'>
      <Header 
        theme={theme} 
        handleTheme={handleTheme} 
        text={text} 
        handleLanguage={handleLanguage}
        aut={auth}
        handleAuth={handleAuth}
        />
      <Main 
        theme={theme} 
        text={text}
        auth={auth}
        />
      <Footer 
        theme={theme} 
        text={text}/>
    </div>
  )
}

export default MyPage