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

export interface Birthday {
    userId: string
    birthdayId: string
    firstName: string
    lastName: string
    birthDay: string
    notes: string
}
