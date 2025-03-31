import { createContext, useEffect, useState } from 'react'
import { Theme, ThemeContextType, Props } from '../types'

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext<ThemeContextType | undefined>(
    undefined
)

export const ThemeProvider = ({ children }: Props) => {
    const storedTheme = localStorage.getItem('theme') as Theme | null
    const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
    ).matches
    const initialTheme = storedTheme || (prefersDark ? 'dark' : 'light')

    const [theme, setTheme] = useState<Theme>(initialTheme)

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
        localStorage.setItem('theme', theme)
    }, [theme])

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}
