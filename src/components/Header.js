import React from 'react'

const Header = ({ theme, handleTheme, text, handleLanguage, auth, handleAuth }) => {
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
          id='light' 
          onClick={handleTheme} 
          value='light'
          />
        <label htmlFor='light'>{text.headerLight}</label>
        <input 
          type='radio' 
          name='dark' 
          id='dark'
          onClick={handleTheme} 
          value='dark'/>
        <label htmlFor='dark'>{text.headerDark}</label>
        <button onClick={handleAuth}>{auth ? text.buttonLogout : text.buttonLogin}</button>
      </header>
    </div>
  )
}

export default Header