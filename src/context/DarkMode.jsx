import { createContext, useState } from "react";

export const DarkModeContext = createContext();

const DarkModeProvider = ({children}) => {
    const [dark, setDark] = useState(false);    
     const switchToDark= () => {
        setDark(true) ;     
    }
    const switchToLight= () => {
        setDark(false) ;     
    }

    const switchToggle= () => {
      setDark(!dark) ;     
  }
    
  return <DarkModeContext.Provider value={{ dark, setDark, switchToDark, switchToLight, switchToggle }}>{children}</DarkModeContext.Provider>
}

export default DarkModeProvider
