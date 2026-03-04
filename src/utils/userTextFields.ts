import type { User } from "../types/user"

export const getTextFields = (user: User) => [
  { text: user.name, y: 2.0, size: 0.4},
  { text: `@${user.username}`, y: 1.6, size: 0.2},
  { text: `Email: ${user.email}`, y: 1.2, size: 0.15 },
  { text: `Phone: ${user.phone}`, y: 0.9, size: 0.15 },
  { text: `Website: ${user.website}`, y: 0.6, size: 0.15 },
  { text: `Address:`, y: 0.2, size: 0.15 },
  { text: `${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`, y: 0.0, size: 0.15 },
  { text: `Company: ${user.company.name}`, y: -0.7, size: 0.2, bold: true },
  { text: `Business: ${user.company.bs}`, y: -1.0, size: 0.2 },
  { text: user.company.catchPhrase, y: -1.3, size: 0.18 },
]