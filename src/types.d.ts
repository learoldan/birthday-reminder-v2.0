import React from 'react'

type ButtonProps = {
    variant?: 'primary' | 'secondary' | 'inverted'
    onClick?: () => void
    className?: string
    type?: 'button' | 'submit' | 'reset'
    children: React.ReactNode
}

export interface Props {
    children: ReactNode
}

export type Theme = 'light' | 'dark'

export interface ThemeContextType {
    theme: Theme
    toggleTheme: () => void
}

export type Birthday = {
    birthdayId: string
    firstName: string
    lastName: string
    birthday: string
    monthOfBirthday: string
    notes: string
}
