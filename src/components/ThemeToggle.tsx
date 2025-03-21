import { useTheme } from '../hooks/useTheme.'
import { MoonIcon, SunIcon } from '../ui/Icons'

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme()

    return (
        <button onClick={toggleTheme}>
            {theme === 'light' ? <MoonIcon /> : <SunIcon />}
        </button>
    )
}
