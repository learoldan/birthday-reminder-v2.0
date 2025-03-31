import type { Birthday } from '../types'

interface Props {
    birthdays: Birthday[]
}

export default function BirthdaysList({ birthdays }: Props) {
    return (
        <div className='p-4 min-h-[calc(100vh-72px)] lg:min-h-[calc(100vh-80px)]'>
            <div className='hidden md:block overflow-x-auto'>
                <table className='w-full border-collapse min-w-[600px]'>
                    <thead>
                        <tr className='bg-pink-400 text-white dark:bg-pink-600'>
                            <th className='px-4 py-3 text-left'>First Name</th>
                            <th className='px-4 py-3 text-left'>Last Name</th>
                            <th className='px-4 py-3 text-left'>Birthday</th>
                            <th className='px-4 py-3 text-left'>Month</th>
                            <th className='px-4 py-3 text-left'>Notes</th>
                            <th className='px-4 py-3 text-left'>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {birthdays.map((b: Birthday, index: number) => (
                            <tr
                                key={b.birthdayId}
                                className={`border-b ${
                                    index % 2 === 0
                                        ? 'bg-purple-200 dark:bg-purple-800'
                                        : 'bg-cyan-100 dark:bg-cyan-800'
                                }`}
                            >
                                <td className='px-4 py-3'>{b.firstName}</td>
                                <td className='px-4 py-3'>{b.lastName}</td>
                                <td className='px-4 py-3'>{b.birthday}</td>
                                <td className='px-4 py-3'>
                                    {b.monthOfBirthday}
                                </td>
                                <td className='px-4 py-3'>{b.notes}</td>
                                <td className='px-4 py-3'>
                                    <button className='bg-red-500 text-white px-3 py-1 rounded-md shadow-md hover:bg-red-600 transition'>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className='md:hidden space-y-4'>
                {birthdays.map((b: Birthday) => (
                    <div
                        key={b.birthdayId}
                        className='bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 border dark:border-gray-700'
                    >
                        <div className='flex justify-between'>
                            <p className='font-semibold text-purple-600 dark:text-purple-300'>
                                {b.firstName} {b.lastName}
                            </p>
                            <p className='text-gray-500 dark:text-gray-400'>
                                {b.birthday}
                            </p>
                        </div>

                        <div className='mt-3 flex justify-between text-sm text-gray-600 dark:text-gray-300'>
                            <p>
                                Month:{' '}
                                <span className='font-medium'>
                                    {b.monthOfBirthday}
                                </span>
                            </p>
                            <p>
                                Notes:{' '}
                                <span className='font-medium'>{b.notes}</span>
                            </p>
                        </div>

                        <button className='mt-4 w-full bg-red-500 text-white py-2 rounded-md shadow-md hover:bg-red-600 transition'>
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}
