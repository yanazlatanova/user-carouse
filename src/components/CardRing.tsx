import React from "react"
import type { User } from '../types/user'
import { Html } from "@react-three/drei"
import { UserCard } from "./UserCard"

interface Props {
    users: User[]
}

export const CardRing: React.FC<Props> = ({ users }) => {
    if (users.length === 0) return null
    const userCount = users.length

    const ring_length = userCount * 9
    // ring_length = R * 2 * PI
    const R = ring_length / (Math.PI * 2) // Adjust the radius based on the number of users

    return (
        <group>
            {users.map((user, i) => {
                const radians = (i / userCount) * (Math.PI * 2)  // angle in radians not degrees       
                const x = R * Math.sin(radians)
                const z = R * Math.cos(radians)
                const y = 0 // spin on the XZ, rotate on the y and position on the same y ring position

                return (
                    <mesh key={user.id} position={[x, y, z]} rotation={[0, radians, 0]}>
                        <Html transform>
                            <UserCard user={user} />
                        </Html>
                    </mesh>

                );
            })}
        </group>
    )
}