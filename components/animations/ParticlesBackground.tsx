'use client'
import { useEffect, useMemo, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import type { ISourceOptions } from '@tsparticles/engine'

export default function ParticlesBackground() {
  const [init, setInit] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const updateViewport = () => setIsMobile(window.innerWidth <= 600)
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updateReducedMotion = () => setPrefersReducedMotion(mediaQuery.matches)

    updateViewport()
    updateReducedMotion()

    window.addEventListener('resize', updateViewport, { passive: true })
    mediaQuery.addEventListener('change', updateReducedMotion)

    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })

    return () => {
      window.removeEventListener('resize', updateViewport)
      mediaQuery.removeEventListener('change', updateReducedMotion)
    }
  }, [])

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: { value: 'transparent' } },
      fpsLimit: isMobile ? 24 : 45,
      pauseOnBlur: true,
      pauseOnOutsideViewport: true,
      particles: {
        number: { value: isMobile ? 24 : 56, density: { enable: true } },
        color: {
          value: ['#1f8cff', '#00d4ff', '#ffffff', '#7c3aed'],
        },
        opacity: {
          value: isMobile ? 0.25 : 0.45,
          animation: {
            enable: true,
            speed: 0.5,
            startValue: 'random',
            minimumValue: 0.05,
          },
        },
        size: { value: { min: 1, max: isMobile ? 2.5 : 4 } },
        links: {
          enable: !isMobile,
          distance: 150,
          color: '#1f8cff',
          opacity: 0.18,
          width: 1,
          triangles: {
            enable: false,
          },
        },
        move: {
          enable: true,
          speed: isMobile ? 0.4 : 0.7,
          direction: 'none' as const,
          random: true,
          straight: false,
          outModes: { default: 'bounce' as const },
          attract: { enable: false },
        },
        // Depth-sorted layers — lighter particles float in foreground
        zIndex: {
          value: { min: 1, max: 5 },
          opacityRate: 0.5,
          sizeRate: 1,
          velocityRate: 1,
        },
      },
      interactivity: {
        detectsOn: 'window' as const,
        events: {
          onHover: {
            enable: true,
            mode: 'parallax',
          },
          onClick: { enable: false, mode: 'push' as const },
          resize: { enable: true },
        },
        modes: {
          parallax: {
            enable: true,
            force: 18,
            smooth: 10,
          },
          repulse: { distance: 120, duration: 0.4 },
          push: { quantity: 3 },
        },
      },
      detectRetina: true,
    }),
    [isMobile]
  )

  if (!init || prefersReducedMotion) return null

  return <Particles id="tsparticles" options={options} />
}
