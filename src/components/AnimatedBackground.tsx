import { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as random from 'maath/random'

function Stars(props: any) {
  const ref = useRef<any>(null)
  const { mouse } = useThree()
  const [sphere] = useState(() => random.inSphere(new Float32Array(50000), { radius: 1.5 }))

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x = -mouse.y * 0.2
      ref.current.rotation.y = mouse.x * 0.2
      ref.current.rotation.z += delta / 10
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}
        {...props}
      >
        <PointMaterial
          transparent
          color="#ffffff"  // White stars
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

export function AnimatedBackground() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        style={{ background: '#000000' }} // Black background
      >
        <Stars />
      </Canvas>
    </div>
  )
}
