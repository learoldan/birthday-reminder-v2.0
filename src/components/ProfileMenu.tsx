import { useAuth0 } from '@auth0/auth0-react'
import { getInitials } from '../utils'
import { Link } from 'react-router'

export default function ProfileMenu() {
    const { user } = useAuth0()
    const initials = getInitials(user?.name || user?.nickname || 'User')

    return (
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
    )
}
