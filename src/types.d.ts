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
