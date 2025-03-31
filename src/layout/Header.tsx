import { Logo } from '../ui/Icons'
import { Link } from 'react-router'
import { useAuth0 } from '@auth0/auth0-react'
import { BeatLoader } from 'react-spinners'
import LoginButton from '../components/LoginButton'
import ProfileMenu from '../components/ProfileMenu'
import ThemeToggle from '../components/ThemeToggle'

export default function Header() {
    const { logout, isAuthenticated, isLoading } = useAuth0()

    const handleLogout = () => {
        logout()
    }

    return (
        <header className='sticky top-0 w-full flex justify-between items-center py-2 px-4 bg-purple-200/50 backdrop-blur-md'>
            <Link to='/'>
                <Logo />
            </Link>
            <nav className='flex items-center justify-around gap-2'>
                {!isAuthenticated ? (
                    isLoading ? (
                        <BeatLoader color='#ad46ff' />
                    ) : (
                        <LoginButton variant='inverted'>Login</LoginButton>
                    )
                ) : (
                    <>
                        <button
                            onClick={handleLogout}
                            className='cursor-pointer bg-purple-400 hover:bg-purple-500 py-2 px-4 text-sm font-medium text-white border border-transparent rounded-lg focus:outline-none'
                        >
                            Sing up
                        </button>
                        <ProfileMenu />
                    </>
                )}
                <ThemeToggle />
            </nav>
        </header>
    )
}
