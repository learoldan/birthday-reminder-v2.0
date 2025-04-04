import logo from './birthdayreminder.svg'

// Menu & Logo Icons
export const Logo = () => {
    return (
        <div className='w-9 h-14 lg:w-10 lg:h-16'>
            <img src={logo} alt='Logo' />
        </div>
    )
}

export const Menu = () => {
    return (
        <svg
            width='35'
            height='24'
            fill='none'
            className='cursor-pointer fill-purple-500 dark:fill-purple-400 hover:fill-purple-300'
        >
            <path d='M0 24h35v-4H0v4Zm0-10h35v-4H0v4ZM0 0v4h35V0H0Z' />
        </svg>
    )
}

export const CloseWindow = () => {
    return (
        <svg
            className='fill-purple-100 h-10 w-10 stroke-purple-100'
            viewBox='0 0 24 24'
        >
            <path d='M5.293 5.293a1 1 0 0 1 1.414 0L12 10.586l5.293-5.293a1 1 0 1 1 1.414 1.414L13.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L10.586 12 5.293 6.707a1 1 0 0 1 0-1.414Z' />
        </svg>
    )
}

// Mode Icons
export const SunIcon = () => {
    return (
        <svg
            className='w-7 md:w-8 h-7 md:h-8 fill-purple-400 hover:fill-purple-300 cursor-pointer transition duration-300'
            viewBox='0 0 24 24'
        >
            <path d='M11.75 5.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h.5a1 1 0 0 1 1 1v2.5a1 1 0 0 1-1 1h-.5ZM16.42 7.227a1 1 0 0 1 0-1.414l1.767-1.768a1 1 0 0 1 1.414 0l.354.354a1 1 0 0 1 0 1.414L18.187 7.58a1 1 0 0 1-1.414 0l-.354-.354ZM18.5 11.75a1 1 0 0 1 1-1H22a1 1 0 0 1 1 1v.5a1 1 0 0 1-1 1h-2.5a1 1 0 0 1-1-1v-.5ZM16.773 16.42a1 1 0 0 1 1.414 0l1.768 1.767a1 1 0 0 1 0 1.414l-.354.354a1 1 0 0 1-1.414 0l-1.768-1.768a1 1 0 0 1 0-1.414l.354-.354ZM12.25 18.5a1 1 0 0 1 1 1V22a1 1 0 0 1-1 1h-.5a1 1 0 0 1-1-1v-2.5a1 1 0 0 1 1-1h.5ZM7.58 16.773a1 1 0 0 1 0 1.414l-1.767 1.768a1 1 0 0 1-1.414 0l-.354-.354a1 1 0 0 1 0-1.414l1.768-1.768a1 1 0 0 1 1.414 0l.354.354ZM5.5 12.25a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-.5a1 1 0 0 1 1-1h2.5a1 1 0 0 1 1 1v.5ZM7.227 7.58a1 1 0 0 1-1.414 0L4.045 5.814a1 1 0 0 1 0-1.414l.354-.354a1 1 0 0 1 1.414 0l1.768 1.768a1 1 0 0 1 0 1.414l-.354.354ZM7 12a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z' />
        </svg>
    )
}

export const MoonIcon = () => {
    return (
        <svg
            className='w-7 md:w-8 h-7 md:h-8 fill-purple-500 hover:fill-purple-300 cursor-pointer transition duration-300'
            viewBox='0 0 24 24'
        >
            <path d='M12.056 3.6a1 1 0 0 0-.908-1.564C6.024 2.469 2 6.764 2 12c0 5.523 4.477 10 10 10 5.236 0 9.531-4.024 9.964-9.148a1 1 0 0 0-1.564-.908A6 6 0 0 1 12.055 3.6Z' />
        </svg>
    )
}

// Decoratives
export const Balloons = ({ text }: { text: string }) => {
    return (
        <svg
            className='w-44 h-44 md:w-52 md:h-52 xl:w-64 xl:h-64'
            viewBox='0 0 511.986 511.986'
        >
            <path
                fill='#e6e9ed'
                d='M370.348 427.927c-8.828-9.156-11.203-19.187-7.266-30.624 3.297-9.594 9.828-16.516 9.891-16.594l-7.688-7.375-7.656-7.438c-.953 1-9.562 10.094-14.437 23.656-6.905 19.203-2.734 38.093 11.781 53.154 9.077 9.438 11.827 20.375 8.405 33.375-2.172 8.297-6.297 14.937-8.046 17.499a10.59 10.59 0 0 0-3.344 7.75c0 5.875 4.78 10.655 10.671 10.655 3.453 0 6.531-1.656 8.469-4.219l.172.125c.344-.438 8.453-10.905 12.5-25.576 5.658-20.546 1.002-39.358-13.452-54.388z'
            />
            <path
                fill='#37bc9b'
                d='M383.989 362.646h-10.672v-15.249H351.99v15.249h-10.672c-5.89 0-10.655 4.781-10.655 10.688 0 5.875 4.766 10.656 10.655 10.656h42.671c5.891 0 10.672-4.781 10.672-10.656 0-5.906-4.781-10.688-10.672-10.688z'
            />
            <path
                fill='#e6e9ed'
                d='M178.354 408.599c-9.031-9.391-10.969-23.922-5.766-43.203 4.312-16.062 12.094-29.092 12.172-29.232l-9.125-5.516-9.141-5.5c-1.531 2.547-37.437 62.967-3.516 98.231 22.953 23.89-1.562 72.576-1.797 73.045v.016a10.618 10.618 0 0 0-1.188 4.891c0 5.875 4.781 10.655 10.672 10.655 4.125 0 7.703-2.344 9.469-5.78 1.314-2.547 31.751-62.734-1.78-97.607z'
            />
            <path
                fill='#967adc'
                d='M191.995 319.992h-10.672v-12.688h-21.328v12.688h-10.671c-5.891 0-10.656 4.781-10.656 10.656 0 5.906 4.766 10.687 10.656 10.687h42.671c5.89 0 10.671-4.78 10.671-10.687 0-5.875-4.781-10.656-10.671-10.656z'
            />
            <path
                fill='#48cfad'
                d='M479.987 245.33c0 64.787-52.53 117.316-117.326 117.316-64.811 0-117.34-52.529-117.34-117.316 0-64.803 52.529-117.333 117.34-117.333 64.796 0 117.326 52.53 117.326 117.333z'
            />
            <path
                d='M245.321 245.33c0 26.077 8.516 50.162 22.905 69.646 37.608-28.608 62.437-77.787 62.437-133.645 0-16.359-2.141-32.148-6.094-47.007-46.108 15.813-79.248 59.538-79.248 111.006z'
                opacity='.1'
            />
            <path
                fill='#fff'
                d='M362.661 170.66c-41.248 0-74.67 33.429-74.67 74.67 0 5.891 4.781 10.663 10.672 10.663s10.656-4.772 10.656-10.663c0-29.413 23.922-53.335 53.342-53.335 5.891 0 10.656-4.773 10.656-10.663 0-5.891-4.765-10.672-10.656-10.672z'
                opacity='.2'
            />
            <path
                className='fill-purple-400 hover:fill-purple-300'
                d='M309.319 159.996c0 88.365-62.076 159.996-138.652 159.996-76.592 0-138.668-71.631-138.668-159.996C31.999 71.632 94.075 0 170.667 0c76.576 0 138.652 71.632 138.652 159.996z'
            />
            <path
                fill='#fff'
                d='M170.667 42.663c-53.029 0-95.997 52.53-95.997 117.333 0 5.891 4.766 10.664 10.655 10.664 5.891 0 10.672-4.773 10.672-10.664 0-13.461 2.141-26.476 6.375-38.694 4-11.586 9.703-21.937 16.921-30.765 14-17.109 32.25-26.538 51.374-26.538 5.891 0 10.656-4.773 10.656-10.664s-4.766-10.672-10.656-10.672z'
                opacity='.2'
            />
            <text
                fontSize={36}
                fontWeight={600}
                textAnchor='middle'
                x='170'
                y='160'
            >
                {text}
            </text>
        </svg>
    )
}

export const Balloon = ({ text }: { text: string }) => {
    return (
        <svg
            className='w-40 h-40 md:w-48 md:h-48 xl:w-60 xl:h-60 flex justify-center'
            viewBox='0 0 340 511.986'
        >
            <path
                fill='#e6e9ed'
                d='M178.354 408.599c-9.031-9.391-10.969-23.922-5.766-43.203 4.312-16.062 12.094-29.092 12.172-29.232l-9.125-5.516-9.141-5.5c-1.531 2.547-37.437 62.967-3.516 98.231 22.953 23.89-1.562 72.576-1.797 73.045v.016a10.618 10.618 0 0 0-1.188 4.891c0 5.875 4.781 10.655 10.672 10.655 4.125 0 7.703-2.344 9.469-5.78 1.314-2.547 31.751-62.734-1.78-97.607z'
            />
            <path
                fill='#dc7adc'
                d='M191.995 319.992h-10.672v-12.688h-21.328v12.688h-10.671c-5.891 0-10.656 4.781-10.656 10.656 0 5.906 4.766 10.687 10.656 10.687h42.671c5.89 0 10.671-4.78 10.671-10.687 0-5.875-4.781-10.656-10.671-10.656z'
            />
            <path
                className='fill-fuchsia-400 hover:fill-fuchsia-300'
                d='M309.319 159.996c0 88.365-62.076 159.996-138.652 159.996-76.592 0-138.668-71.631-138.668-159.996C31.999 71.632 94.075 0 170.667 0c76.576 0 138.652 71.632 138.652 159.996z'
            />
            <path
                fill='#fff'
                d='M170.667 42.663c-53.029 0-95.997 52.53-95.997 117.333 0 5.891 4.766 10.664 10.655 10.664 5.891 0 10.672-4.773 10.672-10.664 0-13.461 2.141-26.476 6.375-38.694 4-11.586 9.703-21.937 16.921-30.765 14-17.109 32.25-26.538 51.374-26.538 5.891 0 10.656-4.773 10.656-10.664s-4.766-10.672-10.656-10.672z'
                opacity='.2'
            />
            <text
                fontSize={36}
                fontWeight={600}
                textAnchor='middle'
                x='170'
                y='160'
            >
                {text}
            </text>
        </svg>
    )
}

export const Cake = () => {
    return (
        <svg
            className='w-44 h-44 md:w-48 md:h-48 xl:w-60 xl:h-60'
            viewBox='0 0 64 64'
        >
            <ellipse cx='32' cy='49.4' fill='#d0d0d0' rx='30' ry='12.6' />
            <path
                fill='#d3976e'
                d='M7.7 24.8v22.5C7.7 53 18.6 57.6 32 57.6S56.3 53 56.3 47.4V24.8H7.7z'
            />
            <g fill='#ffdd7d'>
                <path d='M56.3 31.4c-.1 4-15.4 8.4-24.3 8.4S7.8 35.4 7.7 31.4v6.1c12.5 9 36.1 9 48.6 0v-6.1' />
                <path d='M56.3 41c-.1 4-15.4 8.4-24.3 8.4S7.8 45 7.7 41v6.1c12.5 9 36.1 9 48.6 0V41' />
            </g>
            <path
                fill='#a80038'
                d='M7.7 24.8v16.9c0 .9.8 1.7 1.9 1.7 1 0 1.9-.7 1.9-1.7v-3.9c0-1.2 1.1-2.2 2.5-2.2s2.5 1 2.5 2.2v4.8c0 1.4 1.3 2.6 2.9 2.6s2.9-1.1 2.9-2.6v-4.9c0-1.3 1.2-2.3 2.6-2.3 1.4 0 2.6 1 2.6 2.3v3.1c0 .7.6 1.3 1.5 1.3.8 0 1.5-.6 1.5-1.3v-2.5c0-.9.8-1.7 1.9-1.7 1 0 1.9.7 1.9 1.7v4.2c0 1.4 1.3 2.6 2.9 2.6 1.6 0 2.9-1.1 2.9-2.6v-4.7c0-1.2 1.1-2.2 2.5-2.2s2.5 1 2.5 2.2v3.5c0 .7.7 1.3 1.5 1.3s1.5-.6 1.5-1.3v-2.4c0-.6.6-1.1 1.3-1.1.7 0 1.3.5 1.3 1.1v3.7c0 1.4 1.3 2.6 2.9 2.6 1.6 0 2.9-1.1 2.9-2.6V24.9l-48.8-.1'
            />
            <ellipse cx='32' cy='24.8' fill='#ff2c68' rx='24.3' ry='10.2' />
            <path
                fill='#ffa4a4'
                d='M14.4 23.8c-.1-6.5 28.7-7.4 28.8-1.6.1 4.3-18.3 4.5-18.4 1.1-.1-2.4 11.4-2.5 11.4-.7s-9.3 2.1-7.1-.2c-3.7 2.8 8.1 2.9 8 .3-.1-3-13.9-2.6-13.9.5.1 4.6 21.4 4.1 21.3-1.1-.1-6.8-32-6.5-31.8 1.6.2 8.9 31.2 12.1 41.3.8-13.7 10.4-39.5 5.4-39.6-.7'
            />
            <path
                fill='#42ade2'
                d='M11.8 11.6v10.8c0 1.5 3.2 1.3 3.2 0V11.6c0-1.5-3.2-1.5-3.2 0'
            />
            <g fill='#428bc1'>
                <path d='m15 12.6-3.2 1.7v1.9l3.2-1.6zM11.8 19.5v1.8l3.2-1.6v-1.9z' />
            </g>
            <path
                fill='#ff8b00'
                d='M15.1 9.2c0 2.5-3.3 2.5-3.3 0 0-.8 1.7-3.4 1.7-3.4s1.6 2.6 1.6 3.4'
            />
            <path
                fill='#fff033'
                d='M14.3 10c0 1.4-1.7 1.4-1.7 0 0-.4.8-1.7.8-1.7s.9 1.3.9 1.7'
            />
            <path
                fill='#42ade2'
                d='M30.6 7.2v9.4c0 1.5 2.8 1.2 2.8 0V7.2c0-1.5-2.8-1.5-2.8 0'
            />
            <g fill='#428bc1'>
                <path d='m33.4 8-2.8 1.5v1.7l2.8-1.5zM30.6 14v1.6l2.8-1.4v-1.6z' />
            </g>
            <path
                fill='#ff8b00'
                d='M33.4 5c0 2.3-2.9 2.3-2.9 0 0-.7 1.4-3 1.4-3s1.5 2.3 1.5 3'
            />
            <path
                fill='#fff033'
                d='M32.7 5.7c0 1.4-1.4 1.4-1.4 0 0-.4.7-1.5.7-1.5s.7 1.1.7 1.5'
            />
            <path
                fill='#42ade2'
                d='M48.9 11.6v10.8c0 1.5 3.2 1.3 3.2 0V11.6c0-1.5-3.2-1.5-3.2 0'
            />
            <g fill='#428bc1'>
                <path d='m52.1 12.6-3.2 1.7v1.9l3.2-1.7zM48.9 19.5v1.8l3.2-1.7v-1.8z' />
            </g>
            <path
                fill='#ff8b00'
                d='M52.2 9.2c0 2.5-3.3 2.5-3.3 0 0-.8 1.7-3.4 1.7-3.4s1.6 2.5 1.6 3.4'
            />
            <path
                fill='#fff033'
                d='M51.4 9.9c0 1.4-1.7 1.4-1.7 0 0-.4.8-1.7.8-1.7s.9 1.3.9 1.7'
            />
            <path
                fill='#9fe4ff'
                d='M20 18.3v13.1c0 1.7 3.9 1.3 3.9 0V18.3c0-1.6-3.9-1.6-3.9 0'
            />
            <g fill='#42ade2'>
                <path d='M23.9 19.6 20 21.5v2.4l3.9-2zM20 27.8V30l3.9-1.9v-2.2z' />
            </g>
            <path
                fill='#ff8b00'
                d='M24 15.4c0 2.7-4 2.7-4 0 0-1 2-4.2 2-4.2s2 3.2 2 4.2'
            />
            <path
                fill='#fff033'
                d='M23 16.3c0 1.5-2 1.5-2 0 0-.5 1-2.1 1-2.1s1 1.6 1 2.1'
            />
            <path
                fill='#9fe4ff'
                d='M40 18.3v13.1c0 1.7 3.9 1.3 3.9 0V18.3c0-1.7-3.9-1.7-3.9 0'
            />
            <g fill='#42ade2'>
                <path d='m43.9 19.5-3.9 2v2.3l3.9-1.9zM40 27.8V30l3.9-2v-2.2z' />
            </g>
            <path
                fill='#ff8b00'
                d='M44 15.3c0 2.7-4 2.7-4 0 0-1 2-4.2 2-4.2s2 3.3 2 4.2'
            />
            <path
                fill='#fff033'
                d='M43 16.3c0 1.5-2 1.5-2 0 0-.5 1-2.1 1-2.1s1 1.6 1 2.1'
            />
        </svg>
    )
}
