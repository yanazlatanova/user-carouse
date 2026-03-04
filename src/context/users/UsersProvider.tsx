import React, { useState, useEffect, useCallback} from 'react'
import { fetchUsers } from '../../api/users'
import type { User } from '../../types/user'
import UsersContext from './UsersContext'

export const UsersProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    const [data, setData] = useState<User[] | undefined>()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isError, setIsError] = useState<boolean>(false)

    const loadUsers = useCallback(async () => {
        setIsLoading(true)
        setIsError(false)   
        try {
            const users = await fetchUsers()
            setData(users)
        }   
        catch (error) {
            console.error('Error fetching users:', error)
            setIsError(true)
        } finally {
            setIsLoading(false)
        }
    }, [])

    useEffect(() => {
        loadUsers()
    }, [loadUsers])

  return (
    <UsersContext.Provider value={{ data, isLoading, isError }}>
      {children}
    </UsersContext.Provider>
  )
}
