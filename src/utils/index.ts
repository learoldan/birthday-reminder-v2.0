export const getInitials = (name: string) => {
    if (!name) return 'U' // Default if no name
    const words = name.split(' ')
    const initials = words
        .slice(0, 2) // Taking first words
        .map((word) => word.charAt(0).toUpperCase()) // Taking first character
        .join('') // Joining initials
    return initials
}

export const birthdays = [
    {
        birthdayId: '123aaa',
        firstName: 'Paola',
        lastName: 'Lorenzo',
        birthday: '23-05',
        monthOfBirthday: 'May',
        notes: 'cumple Pao',
    },
    {
        birthdayId: '123bbb',
        firstName: 'Sirius',
        lastName: 'Porchi',
        birthday: '12-04',
        monthOfBirthday: 'Apr',
        notes: 'cumple Serampi',
    },
    {
        birthdayId: '123ccc',
        firstName: 'Orion',
        lastName: 'Negrito',
        birthday: '11-04',
        monthOfBirthday: 'Apr',
        notes: 'cumple Orioncete',
    },
    {
        birthdayId: '123ddd',
        firstName: 'Silvia',
        lastName: 'Medina',
        birthday: '27-10',
        monthOfBirthday: 'Oct',
        notes: 'cumple Mami',
    },
    {
        birthdayId: '123eee',
        firstName: 'Martin',
        lastName: 'Roldan',
        birthday: '11-11',
        monthOfBirthday: 'Nov',
        notes: 'cumple Papi',
    },
]
