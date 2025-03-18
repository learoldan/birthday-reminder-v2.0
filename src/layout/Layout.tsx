import Background from '../ui/Background'
import { LayoutProps } from '../types'
import { useEffect, useState } from 'react'

export default function Layout({ children }: LayoutProps) {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div>
            <Background />
            <header
                className={`sticky top-0 backdrop-blur-sm transition-all duration-300 ease-in-out p-4 w-full ${
                    scrolled
                        ? 'bg-black/30 text-sm h-8'
                        : 'bg-blue-500 text-lg h-16'
                }`}
            >
                Mi Header Animado
            </header>
            <div className='h-[200vh] p-8 relative z-10'>{children}</div>
        </div>
    )
}
