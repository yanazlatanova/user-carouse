export function getUserColor(username: string): string {
  if (!username) return '#cccccc'
  
  let hash = 0
  for (let i = 1; i < username.length; i++) {
    hash += username.charCodeAt(i) * (i + 1) // add position to create variation for similar usernames
  }

  return `hsl(${(hash) % 360}, 70%, 55%)`
}