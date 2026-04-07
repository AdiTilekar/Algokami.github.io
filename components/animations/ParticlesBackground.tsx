'use client'
import { useEffect, useMemo, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import type { ISourceOptions } from '@tsparticles/engine'

export default function ParticlesBackground() {
  const [init, setInit] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const updateViewport = () => setIsMobile(window.innerWidth <= 768)
    updateViewport()
    window.addEventListener('resize', updateViewport)

    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })

    return () => window.removeEventListener('resize', updateViewport)
  }, [])

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: { value: 'transparent' } },
      fpsLimit: 60,
      particles: {
        number: { value: isMobile ? 28 : 80, density: { enable: true } },
        color: { value: '#ffffff' },
        opacity: {
          value: isMobile ? 0.22 : 0.35,
          animation: { enable: true, speed: 0.5, startValue: 'random', minimumValue: 0.1 },
        },
        size: { value: { min: 1, max: isMobile ? 2 : 3 } },
        links: {
          enable: true,
          distance: isMobile ? 110 : 150,
          color: '#ffffff',
          opacity: isMobile ? 0.10 : 0.15,
          width: 1,
        },
        move: {
          enable: true,
          speed: isMobile ? 0.7 : 1.2,
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
