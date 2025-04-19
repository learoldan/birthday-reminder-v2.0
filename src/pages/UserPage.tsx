import BirthdaysList from '../components/BirthdaysList'
import { useAuth0 } from '@auth0/auth0-react'
// import { birthdays } from '../utils'
import { useUserBirthdays } from '../hooks/useUserBirthdays'

export default function UserPage() {
    const { user } = useAuth0()
    const { birthdays, loading, error } = useUserBirthdays()

    if (loading) return <p>Loading birthdays...</p>
    if (error) return <p>Error: {error}</p>

    return (
        <div className='flex flex-col items-center'>
            <div className='max-w-lg flex flex-col gap-2 md:gap-4 items-center text-center'>
                <h2 className='text-4xl md:text-5xl xl:text-6xl font-bold leading-9 md:leading-12 xl:leading-15'>
                    {user?.name ? user.name : 'Hey You!'}
                </h2>
                <p className='text-lg text-cyan-700 dark:text-cyan-200 animate-pulse'>
                    Add your loved ones' birthdays and then receive an email
                    reminder{' '}
                </p>
            </div>
            <BirthdaysList birthdays={birthdays} />
        </div>
    )
}
