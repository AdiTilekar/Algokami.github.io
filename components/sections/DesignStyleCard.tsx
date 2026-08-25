'use client'
import React, { useState, useRef, useCallback } from 'react'
import Link from 'next/link'
import type { DesignStyle } from '@/data/designStyles'

interface Props {
  style: DesignStyle
  isSelectedForCompare: boolean
  onToggleCompare: (style: DesignStyle) => void
  onOpenPreview: (style: DesignStyle) => void
}

export default function DesignStyleCard({
  style,
  isSelectedForCompare,
  onToggleCompare,
  onOpenPreview,
}: Props) {
  // Neumorphism states
  const [neuPressed, setNeuPressed] = useState(false)
  const [neuToggleActive, setNeuToggleActive] = useState(true)
  const [neuSliderVal, setNeuSliderVal] = useState(68)

  // Bento state
  const [bentoTab, setBentoTab] = useState<'growth' | 'retention' | 'speed'>('growth')

  // Claymorphism state
  const [isClaySquished, setIsClaySquished] = useState(false)

  // Touch tap toggle state
  const [isTouchActive, setIsTouchActive] = useState(false)

  // Glass card ref for local tilt and refraction shine
  const previewRef = useRef<HTMLDivElement>(null)

  const handleGlassMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!previewRef.current) return
    const rect = previewRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width // 0 -> 1
    const y = (e.clientY - rect.top) / rect.height // 0 -> 1
    const rx = (-(y - 0.5) * 14).toFixed(2)
    const ry = ((x - 0.5) * 14).toFixed(2)

    previewRef.current.style.setProperty('--glass-rx', `${rx}deg`)
    previewRef.current.style.setProperty('--glass-ry', `${ry}deg`)
    previewRef.current.style.setProperty('--glass-shine-x', `${(x * 100).toFixed(0)}%`)
    previewRef.current.style.setProperty('--glass-shine-y', `${(y * 100).toFixed(0)}%`)
  }, [])

  const handleGlassMouseLeave = useCallback(() => {
    if (!previewRef.current) return
    previewRef.current.style.setProperty('--glass-rx', '0deg')
    previewRef.current.style.setProperty('--glass-ry', '0deg')
    previewRef.current.style.setProperty('--glass-shine-x', '50%')
    previewRef.current.style.setProperty('--glass-shine-y', '50%')
  }, [])

  const triggerClaySquish = () => {
    setIsClaySquished(true)
    setTimeout(() => setIsClaySquished(false), 600)
  }

  const renderVisualDemo = () => {
    switch (style.demo) {
      case 'glassmorphism':
        return (
          <div
            className="demo-glassmorphism"
            onMouseMove={handleGlassMouseMove}
            onMouseLeave={handleGlassMouseLeave}
            aria-label="Glassmorphism interactive demo"
          >
            <div className="glass-orb glass-orb-1" aria-hidden="true" />
            <div className="glass-orb glass-orb-2" aria-hidden="true" />
            <div className="glass-card">
              <div className="glass-card-header">
                <span className="glass-pill">PRO PLAN</span>
                <div className="glass-card-chip" aria-hidden="true" />
              </div>
              <div className="glass-card-balance">$24,850.00</div>
              <div className="glass-card-footer">
                <span>•••• 8841</span>
                <span>08/28</span>
              </div>
            </div>
          </div>
        )

      case 'neumorphism':
        return (
          <div className="demo-neumorphism" aria-label="Neumorphism interactive demo">
            <div className="neu-panel">
              <button
                className={`neu-button ${neuPressed ? 'is-pressed' : ''}`}
                type="button"
                onClick={() => setNeuPressed((prev) => !prev)}
                aria-label="Toggle Power Soft UI"
              >
                <i className="fa-solid fa-power-off" />
              </button>
              <button
                className="neu-button"
                type="button"
                onClick={() => setNeuPressed((prev) => !prev)}
                aria-label="Tactile Action Button"
              >
                <i className="fa-solid fa-sliders" />
              </button>
            </div>
            <div className="neu-toggle-wrap">
              <div
                className={`neu-toggle ${neuToggleActive ? 'is-active' : ''}`}
                role="switch"
                tabIndex={0}
                aria-checked={neuToggleActive}
                onClick={() => setNeuToggleActive((prev) => !prev)}
                onKeyDown={(e) => {
                  if (e.key === ' ' || e.key === 'Enter') {
                    e.preventDefault()
                    setNeuToggleActive((prev) => !prev)
                  }
                }}
                aria-label="Interactive soft switch"
              >
                <div className="neu-toggle-handle">
                  <i className={`fa-solid ${neuToggleActive ? 'fa-check' : 'fa-xmark'}`} />
                </div>
              </div>
              <div
                className="neu-slider"
                role="slider"
                tabIndex={0}
                aria-valuenow={neuSliderVal}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label="Tactile level slider"
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect()
                  const pct = Math.round(((e.clientX - rect.left) / rect.width) * 100)
                  setNeuSliderVal(Math.max(10, Math.min(100, pct)))
                }}
              >
                <div className="neu-slider-fill" style={{ width: `${neuSliderVal}%` }} />
              </div>
            </div>
          </div>
        )

      case 'cyber-neon':
        return (
          <div className={`demo-cyber-neon ${isTouchActive ? 'is-active' : ''}`} aria-label="Cyber Dark / Neon interactive demo">
            <div className="cyber-scanline" aria-hidden="true" />
            <div className="cyber-card">
              <div className="cyber-header">
                <div className="cyber-status">
                  <span className="cyber-pulse-dot" />
                  <span>GRID // ONLINE</span>
                </div>
                <span className="cyber-badge">SECURE</span>
              </div>
              <div className="cyber-stat">99.98% SPEED</div>
              <div className="cyber-bar" aria-hidden="true">
                <div className="cyber-bar-fill" />
              </div>
            </div>
          </div>
        )

      case 'bento-grid':
        return (
          <div className="demo-bento-grid" aria-label="Bento Grid interactive demo">
            <div className="bento-container">
              <div className="bento-tile bento-tile-main">
                <div>
                  <div className="bento-tabs">
                    <button
                      type="button"
                      className={`bento-tab-chip ${bentoTab === 'growth' ? 'active' : ''}`}
                      onClick={(e) => {
                        e.stopPropagation()
                        setBentoTab('growth')
                      }}
                    >
                      Growth
                    </button>
                    <button
                      type="button"
                      className={`bento-tab-chip ${bentoTab === 'retention' ? 'active' : ''}`}
                      onClick={(e) => {
                        e.stopPropagation()
                        setBentoTab('retention')
                      }}
                    >
                      CSAT
                    </button>
                    <button
                      type="button"
                      className={`bento-tab-chip ${bentoTab === 'speed' ? 'active' : ''}`}
                      onClick={(e) => {
                        e.stopPropagation()
                        setBentoTab('speed')
                      }}
                    >
                      Ping
                    </button>
                  </div>
                  <div className="bento-metric">
                    {bentoTab === 'growth' && '$84.2K'}
                    {bentoTab === 'retention' && '99.4%'}
                    {bentoTab === 'speed' && '1.2ms'}
                  </div>
                </div>
                <div className="bento-sparklines" aria-hidden="true">
                  <span className="bento-bar" />
                  <span className="bento-bar" />
                  <span className="bento-bar" />
                  <span className="bento-bar" />
                  <span className="bento-bar" />
                </div>
              </div>
              <div className="bento-tile bento-tile-sm">
                <span style={{ color: 'var(--color-cyan)', fontWeight: 700 }}>
                  <i className="fa-solid fa-shield-halved" /> AES-256
                </span>
                <span style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.7)' }}>Zero-Trust</span>
              </div>
              <div className="bento-tile bento-tile-sm">
                <span style={{ color: '#f59e0b', fontWeight: 800 }}>★ 4.98</span>
                <span style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.7)' }}>500+ Reviews</span>
              </div>
            </div>
          </div>
        )

      case 'neo-brutalism':
        return (
          <div className={`demo-neo-brutalism ${isTouchActive ? 'is-active' : ''}`} aria-label="Neo-Brutalism interactive demo">
            <div className="brutal-card">
              <div className="brutal-header">
                <span className="brutal-tag">NEW LAUNCH</span>
                <span style={{ fontWeight: 900, fontSize: '0.8rem', color: '#000000' }}>★ 100%</span>
              </div>
              <div className="brutal-title">HIGH IMPACT. ZERO FLUFF.</div>
              <div className="brutal-btn" role="button" tabIndex={0}>
                <span>EXPLORE NOW</span>
                <i className="fa-solid fa-arrow-right" />
              </div>
            </div>
          </div>
        )

      case 'swiss-minimalism':
        return (
          <div className={`demo-swiss-minimalism ${isTouchActive ? 'is-active' : ''}`} aria-label="Swiss Minimalism interactive demo">
            <div className="swiss-canvas">
              <div className="swiss-top-row">
                <div className="swiss-number">06.</div>
                <div className="swiss-accent-box" aria-hidden="true" />
              </div>
              <div className="swiss-rule" aria-hidden="true" />
              <div className="swiss-secondary-rule" aria-hidden="true" />
              <div className="swiss-copy-grid">
                <div className="swiss-lead">PRECISION &amp; ORDER</div>
                <div>Form follows rigorous typographic clarity and pure function.</div>
              </div>
            </div>
          </div>
        )

      case 'claymorphism':
        return (
          <div
            className={`demo-claymorphism ${isClaySquished ? 'is-squished' : ''}`}
            onClick={triggerClaySquish}
            aria-label="Claymorphism interactive demo"
          >
            <div className="clay-card">
              <div className="clay-header">
                <span className="clay-pill">Tap to Squish</span>
                <i className="fa-solid fa-shapes" style={{ color: '#4338ca' }} />
              </div>
              <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#1e1b4b' }}>
                Soft Inflatable UI
              </div>
              <div className="clay-button" role="button" tabIndex={0}>
                <span>Get Started</span>
                <i className="fa-solid fa-sparkles" />
              </div>
            </div>
          </div>
        )

      case 'retro-futurism':
        return (
          <div className={`demo-retro-futurism ${isTouchActive ? 'is-active' : ''}`} aria-label="Retro-Futurism interactive demo">
            <div className="retro-sky">
              <div className="retro-sun" />
            </div>
            <div className="retro-grid-plane" aria-hidden="true" />
            <div className="retro-title">SYNTH // 84</div>
          </div>
        )

      case 'editorial':
        return (
          <div className={`demo-editorial ${isTouchActive ? 'is-active' : ''}`} aria-label="Editorial typography interactive demo">
            <div className="editorial-page">
              <div className="editorial-header">
                <span>VOL. IX — NO. 4</span>
                <span>CURATED ESSAY</span>
              </div>
              <div className="editorial-headline">The Quiet Power of Thoughtful Design</div>
              <div className="editorial-body">
                <div className="editorial-lead-wrap">
                  <span className="editorial-dropcap">A</span>
                  <span className="editorial-lead-text">
                    esthetic harmony emerges when typography, proportion, and whitespace coalesce into narrative rhythm.
                  </span>
                </div>
                <div className="editorial-extra-line">
                  &ldquo;Simplicity is the ultimate sophistication of enduring digital prestige.&rdquo;
                </div>
              </div>
            </div>
          </div>
        )

      case 'illustration-led':
        return (
          <div className={`demo-illustration-led ${isTouchActive ? 'is-active' : ''}`} aria-label="Illustration-Led interactive demo">
            <div className="illus-blob-1" aria-hidden="true" />
            <div className="illus-blob-2" aria-hidden="true" />
            <div className="illus-badge-float">
              <i className="fa-solid fa-wand-magic-sparkles" /> Creative
            </div>
            <div className="illus-character" aria-hidden="true">
              <div className="illus-eyes">
                <span className="illus-eye" />
                <span className="illus-eye" />
              </div>
              <div className="illus-smile" />
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <article className={`design-style-card ${isSelectedForCompare ? 'is-selected-for-compare' : ''}`}>
      <div
        ref={previewRef}
        className="style-card-preview"
        tabIndex={0}
        onClick={() => setIsTouchActive((prev) => !prev)}
        onKeyDown={(e) => {
          if (e.key === ' ' || e.key === 'Enter') {
            setIsTouchActive((prev) => !prev)
          }
        }}
      >
        <span className="style-card-preview-badge">
          <i className="fa-solid fa-hand-pointer" /> Interactive Demo
        </span>
        <span className="style-card-preview-hint">
          Hover or tap to interact
        </span>
        {renderVisualDemo()}
      </div>

      <div className="style-card-body">
        <div className="style-card-header">
          <div className="style-card-title-group">
            <div className="style-card-icon">
              <i className={`fa-solid ${style.icon}`} aria-hidden="true" />
            </div>
            <h2 className="style-card-title">{style.name}</h2>
          </div>
          <span className="style-card-number">#{String(style.id).padStart(2, '0')}</span>
        </div>

        <p className="style-card-tagline">{style.tagline}</p>
        <p className="style-card-description">{style.description}</p>

        <div className="style-card-bestfor">
          <span className="style-card-bestfor-label">
            <i className="fa-solid fa-bullseye" aria-hidden="true" /> Recommended For
          </span>
          <p className="style-card-bestfor-text">{style.bestFor}</p>
        </div>

        <div className="style-card-actions">
          <button
            type="button"
            className="btn-preview-modal"
            onClick={() => onOpenPreview(style)}
          >
            <i className="fa-solid fa-expand" /> Try Full Page
          </button>

          <button
            type="button"
            className={`btn-compare-toggle ${isSelectedForCompare ? 'active' : ''}`}
            onClick={() => onToggleCompare(style)}
            aria-pressed={isSelectedForCompare}
          >
            <i className={`fa-solid ${isSelectedForCompare ? 'fa-check' : 'fa-code-compare'}`} />
            {isSelectedForCompare ? 'Selected' : 'Compare'}
          </button>

          <Link
            href={`/get-quote?style=${encodeURIComponent(style.name)}`}
            className="style-card-link"
          >
            Request Quote <i className="fa-solid fa-arrow-right" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  )
}
