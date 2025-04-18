import { useAuth0 } from '@auth0/auth0-react'
import { getInitials } from '../utils'
import { useNavigate } from 'react-router'
import { useEffect, useRef, useState } from 'react'

export default function ProfileMenu() {
    const { user, logout } = useAuth0()
    const initials = getInitials(user?.name || user?.nickname || 'User')
    const [open, setOpen] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null)
    const navigate = useNavigate()

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (
                menuRef.current &&
                !menuRef.current.contains(e.target as Node)
            ) {
                setOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    const handleLogout = () => {
        logout({
            logoutParams: {
                returnTo: window.location.origin,
            },
        })
    }

    return (
        <div className='relative inline-block text-left' ref={menuRef}>
            <button onClick={() => setOpen(!open)}>
                {user?.picture ? (
                    <img
                        className='inline-block rounded-full ring ring-white w-12 h-12 cursor-pointer'
                        src={user?.picture}
                        alt='User'
                    />
                ) : (
                    <div className='inline-flex items-center justify-center w-12 h-12 text-xl text-white bg-indigo-500 rounded-full cursor-pointer'>
                        {initials}
                    </div>
                )}
            </button>

            <div
                className={`absolute right-0 mt-2 w-40 bg-white dark:bg-cyan-950 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-[9999] transform transition-all duration-200 origin-top-right ${
                    open
                        ? 'opacity-100 scale-100 visible'
                        : 'opacity-0 scale-95 invisible pointer-events-none'
                }`}
            >
                <div className='py-1'>
                    <button
                        onClick={() => {
                            navigate('/profile')
                            setOpen(false)
                        }}
                        className='block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-400 cursor-pointer'
                    >
                        My Account
                    </button>
                    <button
                        onClick={handleLogout}
                        className='block w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-500 hover:bg-gray-100 dark:hover:bg-gray-400 cursor-pointer'
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    )
}
