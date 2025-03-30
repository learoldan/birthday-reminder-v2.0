import { useAuth0 } from '@auth0/auth0-react'
import { ButtonProps } from '../types'

const variantStyles: Record<'primary' | 'secondary' | 'inverted', string> = {
    primary:
        'max-w-40 cursor-pointer bg-pink-400 hover:bg-pink-600 py-2 px-4 text-sm font-medium text-white border border-transparent rounded-lg focus:outline-none transition duration-300',
    secondary:
        'max-w-40 cursor-pointer bg-cyan-300 hover:bg-cyan-500 py-2 px-4 text-sm font-medium text-white border border-transparent rounded-lg focus:outline-none transition duration-300',
    inverted:
        'cursor-pointer bg-transparent hover:bg-purple-500 text-sm text-purple-500 dark:text-purple-50 hover:text-white font-semibold py-2 px-4 border border-purple-500 dark:border-purple-50 hover:border-transparent rounded-lg transition duration-300',
}

export default function LoginButton({
    children,
    variant = 'primary',
}: ButtonProps) {
    const { loginWithRedirect } = useAuth0()
    const handleLogin = () => {
        loginWithRedirect()
    }
    return (
        <button onClick={handleLogin} className={variantStyles[variant]}>
            {children}
        </button>
    )
}
