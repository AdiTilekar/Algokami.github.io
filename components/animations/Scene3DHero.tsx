'use client'
import { useRef, useCallback, useEffect, useState } from 'react'

interface Scene3DHeroProps {
  /** extra class names to merge */
  className?: string
}

/**
 * Scene3DHero — a purely CSS/DOM 3D scene for the hero right column.
 * Uses mouse-tracking AND touch-tracking via CSS custom properties + CSS animations for:
 *   - Perspective-tilting card panel
 *   - Glowing orbital rings (CSS @keyframes)
 *   - Floating satellite orbs
 *   - Animated scan line
 * Zero canvas / Zero WebGL — runs on all browsers.
 *
 * Touch support: drag finger to tilt the 3D scene on mobile.
 */
export default function Scene3DHero({ className = '' }: Scene3DHeroProps) {
  const sceneRef  = useRef<HTMLDivElement>(null)
  const outerRef  = useRef<HTMLDivElement>(null)
  const touchOrigin = useRef<{ x: number; y: number } | null>(null)

  // Default resting angles
  const REST_RX = -4
  const REST_RY = -8

  const setAngles = useCallback((rx: number, ry: number) => {
    if (!sceneRef.current) return
    sceneRef.current.style.setProperty('--scene-rx', `${rx.toFixed(2)}deg`)
    sceneRef.current.style.setProperty('--scene-ry', `${ry.toFixed(2)}deg`)
  }, [])

  /* ── Mouse handlers ── */
  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!sceneRef.current) return
    const rect = sceneRef.current.getBoundingClientRect()
    const cx = rect.left + rect.width  / 2
    const cy = rect.top  + rect.height / 2
    const dx = (e.clientX - cx) / (rect.width  / 2)
    const dy = (e.clientY - cy) / (rect.height / 2)
    setAngles(-dy * 8, dx * 12)
  }, [setAngles])

  const onMouseLeave = useCallback(() => {
    setAngles(REST_RX, REST_RY)
  }, [setAngles])

  /* ── Touch handlers ── */
  const onTouchStart = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    const t = e.touches[0]
    touchOrigin.current = { x: t.clientX, y: t.clientY }
  }, [])

  const onTouchMove = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    if (!touchOrigin.current || !sceneRef.current) return
    // Prevent page scroll while tilting
    e.preventDefault()
    const t     = e.touches[0]
    const dx    = (t.clientX - touchOrigin.current.x) / 60   // normalise sensitivity
    const dy    = (t.clientY - touchOrigin.current.y) / 60
    const rx    = Math.max(-14, Math.min(14, REST_RX + (-dy * 14)))
    const ry    = Math.max(-16, Math.min(16, REST_RY + ( dx * 16)))
    setAngles(rx, ry)
  }, [setAngles])

  const onTouchEnd = useCallback(() => {
    touchOrigin.current = null
    setAngles(REST_RX, REST_RY)
  }, [setAngles])

  return (
    <div
      ref={outerRef}
      className={`scene3d-outer ${className}`}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onTouchCancel={onTouchEnd}
      aria-hidden="true"
      style={{ touchAction: 'none', userSelect: 'none' }}
    >
      {/* Perspective container */}
      <div className="scene3d-perspective">
        <div
          ref={sceneRef}
          className="scene3d-stage"
          style={{ '--scene-rx': `${REST_RX}deg`, '--scene-ry': `${REST_RY}deg` } as React.CSSProperties}
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
