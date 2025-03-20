import { Logo } from '../ui/Icons'
import { Link } from 'react-router'
import { useAuth0 } from '@auth0/auth0-react'
import { getInitials } from '../utils'
import { BeatLoader } from 'react-spinners'

export default function Header() {
    const { loginWithRedirect, user, logout, isAuthenticated, isLoading } =
        useAuth0()
    const initials = getInitials(user?.name || user?.nickname || 'User')

    const handleLogin = () => {
        loginWithRedirect()
    }
    const handleLogout = () => {
        logout()
    }

    return (
        <header className='sticky top-0 backdrop-blur-sm bg-sky-50 text-lg h-16 p-4 w-full flex items-center justify-between'>
            <Link to='/'>
                <Logo />
            </Link>
            <div className='flex items-center justify-around gap-2'>
                {!isAuthenticated ? (
                    isLoading ? (
                        <BeatLoader color='#ad46ff' />
                    ) : (
                        <button
                            onClick={handleLogin}
                            className='cursor-pointer bg-transparent hover:bg-purple-500 text-sm text-purple-500 hover:text-white font-semibold py-2 px-4 border border-purple-500 hover:border-transparent rounded-lg'
                        >
                            Login
                        </button>
                    )
                ) : (
                    <>
                        <button
                            onClick={handleLogout}
                            className='cursor-pointer bg-purple-400 hover:bg-purple-500 py-2 px-4 text-sm font-medium text-white border border-transparent rounded-lg focus:outline-none'
                        >
                            Sing up
                        </button>
                        <Link to='/profile'>
                            {user?.picture ? (
                                <img
                                    className='inline-block rounded-full ring ring-white w-12 h-12'
                                    src={user?.picture}
                                />
                            ) : (
                                <div className='inline-flex items-center justify-center w-12 h-12 text-xl text-white bg-indigo-500 rounded-full'>
                                    {initials}
                                </div>
                            )}
                        </Link>
                    </>
                )}
            </div>
        </header>
    )
}
