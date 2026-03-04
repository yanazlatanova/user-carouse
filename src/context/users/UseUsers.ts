import React from 'react'
import UsersContext, { type UsersContextValue } from './UsersContext'

export const useUsers = (): UsersContextValue => {
    const context = React.useContext(UsersContext)
    if(!context) {
        throw new Error('useUsers must be used within a UsersProvider')
    }
    return context
}

export default UsersContext
