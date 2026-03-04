import React from "react"
import type { User } from '../types/user'
import { Text } from "@react-three/drei"
import { getUserColor } from "../utils/userColor"

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

                return (
                    <>
                        <mesh key={user.id} position={[x, y, z]} rotation={[0, radians, 0]}>
                            <boxGeometry args={[5, 5, 1]} />
                            <meshStandardMaterial color={getUserColor(user.username)} />
                            <Text position={[0, 2, 0.6]} fontSize={0.4} color="black">{user.name}</Text>
                            <Text position={[0, 1.6, 0.6]} fontSize={0.2} color="black">@{user.username}</Text>

                            <Text position={[0, 1.2, 0.6]} fontSize={0.15} color="black">Email:  {user.email} </Text>
                            <Text position={[0, 0.9, 0.6]} fontSize={0.15} color="black">Phone: {user.phone}</Text>
                            <Text position={[0, 0.6, 0.6]} fontSize={0.15} color="black">Website: {user.website}</Text>

                            <Text position={[0, 0.2, 0.6]} fontSize={0.15} color="black">
                                Address:
                            </Text>
                            <Text position={[0, 0, 0.6]} fontSize={0.15} color="black">
                                {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
                            </Text>
                            <Text position={[0, -0.7, 0.6]} fontSize={0.2} color="black"> Company: {user.company.name} </Text>
                            <Text position={[0, -1, 0.6]} fontSize={0.2} color="black"> Business: {user.company.bs} </Text>
                            <Text position={[0, -1.3, 0.6]} fontSize={0.18} color="black"> {user.company.catchPhrase} </Text>
                        </mesh>
                    </>
                );
            })}
        </group>
    )
}