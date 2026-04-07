'use client'
import { useEffect, useMemo, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import type { ISourceOptions } from '@tsparticles/engine'

export default function ParticlesBackground() {
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: { value: 'transparent' } },
      fpsLimit: 60,
      particles: {
        number: { value: 80, density: { enable: true } },
        color: { value: '#ffffff' },
        opacity: {
          value: 0.35,
          animation: { enable: true, speed: 0.5, startValue: 'random', minimumValue: 0.1 },
        },
        size: { value: { min: 1, max: 3 } },
        links: {
          enable: true,
          distance: 150,
          color: '#ffffff',
          opacity: 0.15,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1.2,
          direction: 'none',
          random: true,
          straight: false,
          outModes: { default: 'bounce' },
        },
      },
      interactivity: {
        detectsOn: 'window',
        events: {
          onHover: { enable: false, mode: 'repulse' },
          onClick: { enable: false, mode: 'push' },
          resize: { enable: true },
        },
        modes: {
          repulse: { distance: 120, duration: 0.4 },
          push: { quantity: 3 },
        },
      },
      detectRetina: true,
    }),
    []
  )

  if (!init) return null

  return <Particles id="tsparticles" options={options} />
}
