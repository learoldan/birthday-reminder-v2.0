import { Logo } from '../ui/Icons'
import { Link } from 'react-router'
import { useAuth0 } from '@auth0/auth0-react'
import { BeatLoader } from 'react-spinners'
import LoginButton from '../components/LoginButton'
import ProfileMenu from '../components/ProfileMenu'
import ThemeToggle from '../components/ThemeToggle'

export default function Header() {
    const { isAuthenticated, isLoading } = useAuth0()

    return (
        <header className='sticky z-10 top-0 w-full flex justify-between items-center py-2 px-4 bg-purple-200/50 backdrop-blur-md'>
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
                    <ProfileMenu />
                )}
                <ThemeToggle />
            </nav>
        </header>
    )
}
