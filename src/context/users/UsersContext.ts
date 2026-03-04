import { createContext } from 'react'
import type { User } from '../../types/user'

export type UsersContextValue = {
  data?: User[]
  isLoading: boolean
  isError: boolean
}

const UsersContext = createContext<UsersContextValue | undefined>(undefined)

export default UsersContext
