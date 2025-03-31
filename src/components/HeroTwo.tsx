import LoginButton from './LoginButton'

export default function HeroTwo() {
    return (
        <section className='flex flex-col lg:flex-row-reverse items-center justify-center px-2 md:px-6 h-[calc(100vh-72px)] lg:h-[calc(100vh-80px)] gap-6'>
            <div className='max-w-lg flex flex-col gap-2 md:gap-4 items-center text-center lg:items-start lg:text-left'>
                <h2 className='text-4xl md:text-5xl xl:text-6xl font-bold leading-9 md:leading-12 xl:leading-15'>
                    Start saving those birthdays right now
                </h2>
                <p className='text-lg text-cyan-700 dark:text-cyan-200 animate-pulse'>
                    And receive a reminder email on each date.
                </p>
                <LoginButton variant='secondary'>Get Started Now</LoginButton>
            </div>

            <img
                className='h-64 lg:h-80 w-64 lg:w-80 rounded-full border-2 border-cyan-300 object-contain bg-cyan-100'
                src='./email.png'
                alt='A girl with a birthday cake in her hands'
            />
        </section>
    )
}
