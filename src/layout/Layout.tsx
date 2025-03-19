import Background from '../ui/Background'
import { LayoutProps } from '../types'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }: LayoutProps) {
    return (
        <div className='min-h-screen flex flex-col'>
            <Background />
            <Header />
            <main className='flex-1'>{children}</main>
            <Footer />
        </div>
    )
}
