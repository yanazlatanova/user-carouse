import React from "react"
import type { User } from '../types/user'
import { Text } from "@react-three/drei"
import { getUserColor } from "../utils/userColor"
import { getTextFields } from "../utils/userTextFields"

interface Props {
    users: User[]
}

export const CardRing: React.FC<Props> = ({ users }) => {
    if (users.length === 0) return null
    const userCount = users.length

    const ring_length = userCount * 6
    // ring_length = R * 2 * PI
    const R = ring_length / (Math.PI * 2) // Adjust the radius based on the number of users

    return (
        <group>
            {users.map((user, i) => {
                const radians = (i / userCount) * (Math.PI * 2)  // angle in radians not degrees       
                const x = R * Math.sin(radians)
                const z = R * Math.cos(radians)
                const y = 0 // rotate on the XZ plane only

                const fields = getTextFields(user)

                return (
                    <mesh key={user.id} position={[x, y, z]} rotation={[0, radians, 0]}>
                        <boxGeometry args={[5, 5, 1]} />
                        <meshStandardMaterial color={getUserColor(user.username)} />

                        {fields.map(({ text, y, size }) => (
                            <Text key={y} position={[0, y, 0.6]} fontSize={size} color="black">
                                {text}
                            </Text>
                        ))}
                    </mesh>

                );
            })}
        </group>
    )
}