export const getInitials = (name: string) => {
    if (!name) return 'U' // Default if no name
    const words = name.split(' ')
    const initials = words
        .slice(0, 2) // Taking first words
        .map((word) => word.charAt(0).toUpperCase()) // Taking first character
        .join('') // Joining initials
    return initials
}
