import { Props } from '../types'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }: Props) {
    return (
        <div className='flex flex-col justify-center items-center bg-purple-50 dark:bg-purple-950 text-sky-950 dark:text-white'>
            <Header />
            <main className=''>{children}</main>
            <Footer />
        </div>
    )
}
