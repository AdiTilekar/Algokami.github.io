'use client'
import { useRef, useCallback } from 'react'

interface TiltCardProps {
  children: React.ReactNode
  className?: string
  maxTilt?: number
  /** If true the card just floats (no tilt), useful for featured cards */
  floatOnly?: boolean
}

/**
 * TiltCard — wraps any card and applies a real-time CSS 3D perspective tilt
 * on mouse-move AND touch-move via CSS custom properties (--rx, --ry).
 * Zero JS animation frame loops — uses CSS `transform` directly on pointer events.
 * Touch support: drag finger across the card to tilt it.
 */
export default function TiltCard({
  children,
  className = '',
  maxTilt = 10,
  floatOnly = false,
}: TiltCardProps) {
  const ref         = useRef<HTMLDivElement>(null)
  const touchOrigin = useRef<{ x: number; y: number } | null>(null)

  const applyTilt = useCallback(
    (dx: number, dy: number) => {
      if (floatOnly || !ref.current) return
      const rx = (-dy * maxTilt).toFixed(2)
      const ry = ( dx * maxTilt).toFixed(2)
      ref.current.style.setProperty('--rx', `${rx}deg`)
      ref.current.style.setProperty('--ry', `${ry}deg`)
      ref.current.style.setProperty('--card-shine-x', `${((dx + 1) / 2 * 100).toFixed(0)}%`)
      ref.current.style.setProperty('--card-shine-y', `${((dy + 1) / 2 * 100).toFixed(0)}%`)
    },
    [maxTilt, floatOnly]
  )

  const resetTilt = useCallback(() => {
    if (!ref.current) return
    ref.current.style.setProperty('--rx', '0deg')
    ref.current.style.setProperty('--ry', '0deg')
  }, [])

  /* ── Mouse handlers ── */
  const onMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (floatOnly || !ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const cx = rect.left + rect.width  / 2
      const cy = rect.top  + rect.height / 2
      const dx = (e.clientX - cx) / (rect.width  / 2)   // -1 → 1
      const dy = (e.clientY - cy) / (rect.height / 2)   // -1 → 1
      applyTilt(dx, dy)
    },
    [applyTilt, floatOnly]
  )

  const onMouseLeave = useCallback(() => { resetTilt() }, [resetTilt])

  /* ── Touch handlers ── */
  const onTouchStart = useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    if (floatOnly) return
    const t = e.touches[0]
    touchOrigin.current = { x: t.clientX, y: t.clientY }
  }, [floatOnly])

  const onTouchMove = useCallback(
    (e: React.TouchEvent<HTMLDivElement>) => {
      if (floatOnly || !touchOrigin.current || !ref.current) return
      const t  = e.touches[0]
      const rect = ref.current.getBoundingClientRect()
      // Calculate normalised -1→1 position from touch point relative to card centre
      const cx = rect.left + rect.width  / 2
      const cy = rect.top  + rect.height / 2
      const dx = Math.max(-1, Math.min(1, (t.clientX - cx) / (rect.width  / 2)))
      const dy = Math.max(-1, Math.min(1, (t.clientY - cy) / (rect.height / 2)))
      applyTilt(dx, dy)
    },
    [applyTilt, floatOnly]
  )

  const onTouchEnd = useCallback(() => {
    touchOrigin.current = null
    resetTilt()
  }, [resetTilt])

  return (
    <div
      ref={ref}
      className={`tilt-card-wrapper ${className}`}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onTouchCancel={onTouchEnd}
      style={{ '--rx': '0deg', '--ry': '0deg' } as React.CSSProperties}
    >
      {children}
    </div>
  )
}
