import LoginButton from './LoginButton'

export default function HeroOne() {
    return (
        <section className='flex flex-col lg:flex-row-reverse items-center justify-center px-2 md:px-6 h-[calc(100vh-72px)] lg:h-[calc(100vh-80px)] gap-6'>
            <img
                className='h-64 lg:h-80 w-64 lg:w-80 rounded-full border-2 border-pink-400 object-contain bg-pink-200'
                src='./birthday-girl.png'
                alt='A girl with a birthday cake in her hands'
            />

            <div className='max-w-lg flex flex-col gap-2 md:gap-4 items-center text-center lg:items-start lg:text-left'>
                <h1 className='text-4xl md:text-5xl xl:text-6xl font-bold leading-9 md:leading-12 xl:leading-15'>
                    Don't Worry, We've Got You Covered
                </h1>
                <p className='text-lg text-cyan-700 dark:text-cyan-200 animate-pulse'>
                    You'll never forget another birthday again.
                </p>
                <LoginButton variant='primary'>Get Started Now</LoginButton>
            </div>
        </section>
    )
}
