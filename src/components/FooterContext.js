import React from 'react';
import { useContext } from "react";
import LanguageContext from '../context/LanguageContext';
import ThemeContext from "../context/ThemeContext";

const FooterContext = () => {
  const {theme} = useContext(ThemeContext);
  const {text} = useContext(LanguageContext);
  return (
    <div className={theme}>
      <footer>
        <h4>{text.footerTitle}</h4>
      </footer>
    </div>
  )
}

export default FooterContext