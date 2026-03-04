import type { User } from '../types/user'

export async function fetchUsers(): Promise<User[]> {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')

  if (!response.ok) {
    throw new Error(`Failed to fetch users: ${response.status} ${response.statusText}`)
  }
  const data = (await response.json()) as User[]
  return data
}
