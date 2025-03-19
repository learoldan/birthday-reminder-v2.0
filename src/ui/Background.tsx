import { motion } from 'framer-motion'

export default function Background() {
    const numElements = 20
    const colors = ['#E45A84', '#FFACAC', '#583C87']

    return (
        <div className='fixed top-0 left-0 w-screen h-screen overflow-hidden bg-sky-200'>
            {Array.from({ length: numElements }).map((_, i) => {
                const size = '20vmin'
                const color = colors[i % colors.length]
                const duration = Math.random() * 40 + 10
                const delay = Math.random() * -50
                const top = Math.random() * 100
                const left = Math.random() * 100
                const transformOrigin = `${Math.random() * 50 - 25}vw ${
                    Math.random() * 50 - 25
                }vh`
                const boxShadow = `40vmin 0 ${
                    Math.random() * 3 + 3
                }vmin ${color}`

                return (
                    <motion.span
                        key={i}
                        className='absolute rounded-full'
                        style={{
                            width: size,
                            height: size,
                            top: `${top}%`,
                            left: `${left}%`,
                            backgroundColor: color,
                            transformOrigin,
                            boxShadow,
                            filter: 'blur(10px)',
                        }}
                        animate={{ rotate: 360 }}
                        transition={{
                            duration,
                            ease: 'linear',
                            repeat: Infinity,
                            delay,
                        }}
                    />
                )
            })}
        </div>
    )
}
