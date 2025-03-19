import { Logo } from '../ui/Icons'
import { Link } from 'react-router'

export default function Header() {
    return (
        <header className='sticky top-0 backdrop-blur-sm bg-sky-50 text-lg h-16 p-4 w-full flex items-center justify-between'>
            <Link to='/'>
                <Logo />
            </Link>
            <div className='flex items-center justify-around gap-2'>
                <button className='cursor-pointer bg-transparent hover:bg-purple-500 text-sm text-purple-500 hover:text-white font-semibold py-2 px-4 border border-purple-500 hover:border-transparent rounded-lg'>
                    Login
                </button>
                <button className='cursor-pointer bg-purple-400 hover:bg-purple-500 py-2 px-4 text-sm font-medium text-white border border-transparent rounded-lg focus:outline-none'>
                    Sing up
                </button>
                <Link to='/profile'>
                    <img
                        className='inline-block rounded-full ring ring-white w-12 h-12'
                        src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                    />
                </Link>
            </div>
        </header>
    )
}
