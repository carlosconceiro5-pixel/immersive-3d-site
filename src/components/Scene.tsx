import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import type { Mesh } from 'three'
import { MathUtils } from 'three'

function getScrollProgress() {
  const max = document.documentElement.scrollHeight - window.innerHeight
  return max > 0 ? window.scrollY / max : 0
}

function HeroObject() {
  const ref = useRef<Mesh>(null)

  useFrame((_, delta) => {
    const mesh = ref.current
    if (!mesh) return

    const progress = getScrollProgress()

    mesh.rotation.y += delta * 0.25
    mesh.rotation.x = MathUtils.lerp(mesh.rotation.x, progress * Math.PI * 1.2, 0.05)
    mesh.rotation.z = MathUtils.lerp(mesh.rotation.z, progress * Math.PI * 0.35, 0.05)
    mesh.position.y = MathUtils.lerp(mesh.position.y, 0.25 - progress * 1.2, 0.05)
  })

  return (
    <mesh ref={ref} position={[2.15, 0.1, 0]} scale={1.15}>
      <icosahedronGeometry args={[1.8, 1]} />
      <meshStandardMaterial
        color="#6c8cff"
        emissive="#6c8cff"
        emissiveIntensity={0.28}
        metalness={0.55}
        roughness={0.22}
        flatShading
      />
    </mesh>
  )
}

export function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.4], fov: 45 }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
      }}
    >
      <ambientLight intensity={0.65} />
      <directionalLight position={[3, 4, 5]} intensity={2.2} />
      <pointLight position={[-3, 2, 3]} intensity={35} color="#a06bff" />
      <HeroObject />
    </Canvas>
  )
}
