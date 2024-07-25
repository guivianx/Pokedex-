import {  createContext, useState } from "react";

export const themes = {

    light: {
        background: '#fff',
        color: '#777',
    },

    dark: {
        background: '#1f3f57',
        color: '#fff'
    }
} 

export const ThemeContext = createContext()

export const ThemeProvider = ({children}) => {

    const [ theme, setTheme ] = useState(themes.light)

    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}