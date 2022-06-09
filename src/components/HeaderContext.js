import { useContext } from "react"
import React from 'react'
import ThemeContext from "../context/ThemeContext";
import LanguageContext from "../context/LanguageContext";
import LoginContext from "../context/LoginContext";

const HeaderContext = () => {
  const { theme, handleTheme} = useContext(ThemeContext);
  const { text, handleLanguage } = useContext(LanguageContext);
  const { auth, handleAuth } = useContext(LoginContext);
  return (
    <div className={theme}>
      <header>
        <h2>{text.headerTitle}</h2>
        <h3>{text.headerSubtitle}</h3>
        <select name='language' onChange={handleLanguage}>
          <option value='es'>ES</option>
          <option value='en'>EN</option>
        </select>
        <input 
          type='radio' 
          name='theme' 
          id='light-context' 
          onClick={handleTheme} 
          value='light'
          />
        <label htmlFor='light'>{text.headerLight}</label>
        <input 
          type='radio' 
          name='dark' 
          id='dark-context'
          onClick={handleTheme} 
          value='dark'/>
        <label htmlFor='dark-context'>{text.headerDark}</label>
        <button onClick={handleAuth}>{auth ? text.buttonLogout : text.buttonLogin}</button>
      </header>
    </div>
  )
}

export default HeaderContext