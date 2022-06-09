import React from 'react'
import { LanguageProvider } from '../context/LanguageContext';
import { LoginProvider } from '../context/LoginContext';
import { ThemeProvider } from '../context/ThemeContext';
import FooterContext from './FooterContext'
import HeaderContext from './HeaderContext'
import MainContext from './MainContext'


const MyPageContext = () => {

  return (
    <div className='my-page'>
      <ThemeProvider>
        <LanguageProvider>
           <LoginProvider>
              <HeaderContext/>
              <MainContext/>
              <FooterContext/>
           </LoginProvider>
        </LanguageProvider>
      </ThemeProvider>
      
    </div>
  )
}

export default MyPageContext