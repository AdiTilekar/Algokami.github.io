'use client'
import { useRef, useCallback } from 'react'

interface Scene3DHeroProps {
  /** extra class names to merge */
  className?: string
}

/**
 * Scene3DHero — a purely CSS/DOM 3D scene for the hero right column.
 * Uses mouse-tracking via CSS custom properties + CSS animations for:
 *   - Perspective-tilting card panel
 *   - Glowing orbital rings (CSS @keyframes)
 *   - Floating satellite orbs
 *   - Animated scan line
 * Zero canvas / Zero WebGL — runs on all browsers.
 */
export default function Scene3DHero({ className = '' }: Scene3DHeroProps) {
  const sceneRef = useRef<HTMLDivElement>(null)

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!sceneRef.current) return
    const rect = sceneRef.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = (e.clientX - cx) / (rect.width / 2)
    const dy = (e.clientY - cy) / (rect.height / 2)
    sceneRef.current.style.setProperty('--scene-rx', `${(-dy * 8).toFixed(2)}deg`)
    sceneRef.current.style.setProperty('--scene-ry', `${(dx * 12).toFixed(2)}deg`)
  }, [])

  const onMouseLeave = useCallback(() => {
    if (!sceneRef.current) return
    sceneRef.current.style.setProperty('--scene-rx', '-4deg')
    sceneRef.current.style.setProperty('--scene-ry', '-8deg')
  }, [])

  return (
    <div
      className={`scene3d-outer ${className}`}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      aria-hidden="true"
    >
      {/* Perspective container */}
      <div className="scene3d-perspective">
        <div
          ref={sceneRef}
          className="scene3d-stage"
          style={{ '--scene-rx': '-4deg', '--scene-ry': '-8deg' } as React.CSSProperties}
        >
          {/* Orbital ring 1 */}
          <div className="scene3d-ring scene3d-ring-1" />
          {/* Orbital ring 2 */}
          <div className="scene3d-ring scene3d-ring-2" />
          {/* Orbital ring 3 — innermost */}
          <div className="scene3d-ring scene3d-ring-3" />

          {/* Satellite orbs on ring 1 */}
          <div className="scene3d-orb-track scene3d-orb-track-1">
            <div className="scene3d-orb scene3d-orb-blue" />
          </div>
          <div className="scene3d-orb-track scene3d-orb-track-2">
            <div className="scene3d-orb scene3d-orb-cyan" />
          </div>
          <div className="scene3d-orb-track scene3d-orb-track-3">
            <div className="scene3d-orb scene3d-orb-purple" />
          </div>

          {/* Central glowing core */}
          <div className="scene3d-core">
            <div className="scene3d-core-inner" />
          </div>

          {/* Scan line */}
          <div className="scene3d-scan" />
        </div>
      </div>

      {/* Info chip strip floating above the scene */}
      <div className="scene3d-chip-row">
        <span className="scene3d-chip">Next.js 14</span>
        <span className="scene3d-chip scene3d-chip-cyan">Conversion UX</span>
        <span className="scene3d-chip">Automation</span>
      </div>

      {/* Metric cards floating in front */}
      <div className="scene3d-metrics">
        <div className="scene3d-metric">
          <strong>2-Week</strong>
          <span>Sprint cadence</span>
        </div>
        <div className="scene3d-metric">
          <strong>A+</strong>
          <span>Core Web Vitals</span>
        </div>
        <div className="scene3d-metric">
          <strong>1 Team</strong>
          <span>Design+Dev+QA</span>
        </div>
      </div>
    </div>
  )
}
