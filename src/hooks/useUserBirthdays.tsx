import { useEffect, useState, useCallback } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Birthday } from '../types'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL as string

export function useUserBirthdays() {
    const { getAccessTokenSilently, isAuthenticated, user } = useAuth0()
    const [birthdays, setBirthdays] = useState<Birthday[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    const fetchBirthdays = useCallback(async () => {
        if (!isAuthenticated) return

        setLoading(true)
        setError(null)

        try {
            const token = await getAccessTokenSilently()
            const response = await fetch(
                `${API_BASE_URL}/birthdays?userId=${user?.sub}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )

            if (!response.ok) {
                throw new Error(
                    `Error ${response.status}: ${response.statusText}`
                )
            }

            const data = await response.json()
            setBirthdays(data.birthdays || [])
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
            console.error('Error fetching birthdays:', err)
            setError(err.message || 'Unknown error')
        } finally {
            setLoading(false)
        }
    }, [getAccessTokenSilently, isAuthenticated, user])

    useEffect(() => {
        fetchBirthdays()
    }, [fetchBirthdays])

    return { birthdays, loading, error, refetch: fetchBirthdays }
}
