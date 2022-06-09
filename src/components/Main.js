import React from 'react'

const Main = ({ theme, text, auth }) => {
  return (
    <div className={theme}>
      <main>
        {auth ? <p>{text.mainHello}</p> : <p>{text.mainWelcome}</p>}
        <h4>{text.mainContent}</h4>
      </main>
    </div>
  )
}

export default Main