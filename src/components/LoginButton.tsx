import { useAuth0 } from '@auth0/auth0-react'

export default function LoginButton() {
    const { loginWithRedirect } = useAuth0()
    const handleLogin = () => {
        loginWithRedirect()
    }
    return (
        <button
            onClick={handleLogin}
            className='cursor-pointer bg-transparent hover:bg-purple-500 text-sm text-purple-500 hover:text-white font-semibold py-2 px-4 border border-purple-500 hover:border-transparent rounded-lg'
        >
            Login
        </button>
    )
}
