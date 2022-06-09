import { createContext, useState } from "react";

const LoginContext = createContext();

const initialAuth = null;

const LoginProvider = ({children}) => {
    const [auth, setAuth] = useState(initialAuth);

    const handleAuth = (e) => {
      if(auth){
        setAuth(null);
      } else {
        setAuth(true);
      }
  };

  
    const data = {handleAuth, auth};

    return(
      <LoginContext.Provider value={data}>{children}</LoginContext.Provider>
    );
};
export { LoginProvider }
export default LoginContext