import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { CardRing } from '../components/CardRing'
import { useUsers } from '../context'

export const MainScene: React.FC = () => {
    const { data, isError, isLoading, reload } = useUsers()
    
    if (isError) { return <div>An error occurred while fatching data. <button onClick={() => { reload() }}>Retry</button> </div> }
    if (isLoading) { return <p> Loading...</p> }

    return (
        <Canvas style={{ width: '100vw', height: '100vh' }} camera={{ position: [0, 0, 30], fov: 80 }}>
            <OrbitControls />
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />

            <CardRing users={data ?? []} />
        </Canvas>
    )
}