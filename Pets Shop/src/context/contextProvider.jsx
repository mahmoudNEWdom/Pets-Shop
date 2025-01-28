import React, { useState } from 'react'
import { ThemeContext } from './ThemeContext'
export default function ContextProvider(props) {

const [theme, setTheme] = useState("light")
const toggleTheme = () => {
  setTheme(theme === "light" ? "dark" : "light")

}


  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
}
