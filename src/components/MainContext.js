import React from 'react';
import { useContext } from "react";
import LanguageContext from '../context/LanguageContext';
import LoginContext from '../context/LoginContext';
import ThemeContext from "../context/ThemeContext";

const MainContext = () => {
  const {theme} = useContext(ThemeContext);
  const {text} = useContext(LanguageContext);
  const {auth} = useContext(LoginContext);
  return (
    <div className={theme}>
      <main>
        {auth ? <p>{text.mainHello}</p> : <p>{text.mainWelcome}</p>}
        <h4>{text.mainContent}</h4>
      </main>
    </div>
  )
}

export default MainContext