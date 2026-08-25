'use client'
import React, { useEffect, useCallback } from 'react'
import Link from 'next/link'
import { designStyles, DesignStyle } from '@/data/designStyles'

interface Props {
  activeStyle: DesignStyle | null
  compareStyles: DesignStyle[]
  onClose: () => void
  onSelectStyle: (style: DesignStyle) => void
}

export default function DesignStylePreviewModal({
  activeStyle,
  compareStyles,
  onClose,
  onSelectStyle,
}: Props) {
  const isCompareMode = compareStyles.length === 2

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    },
    [onClose]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = prevOverflow
    }
  }, [handleKeyDown])

  const renderMockPageContent = (style: DesignStyle) => {
    switch (style.demo) {
      case 'glassmorphism':
        return (
          <div className="mock-page-shell mock-glass">
            <div className="mock-hero">
              <span className="glass-pill" style={{ display: 'inline-block', marginBottom: '12px' }}>
                Next-Gen Fintech
              </span>
              <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '12px', letterSpacing: '-0.02em' }}>
                Frosted Clarity for High-Yield Capital
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.85)', maxWidth: '580px', lineHeight: 1.6, marginBottom: '20px' }}>
                Translucent, multi-layered depth designed to organize complex real-time liquidity streams and institutional assets.
              </p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <button type="button" className="glass-pill" style={{ padding: '8px 18px', fontSize: '0.85rem' }}>
                  Launch Dashboard
                </button>
                <button type="button" className="glass-pill" style={{ padding: '8px 18px', fontSize: '0.85rem', background: 'transparent' }}>
                  Explore Protocol
                </button>
              </div>
            </div>

            <div className="mock-grid">
              <div className="mock-card">
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase' }}>Daily Volume</div>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, margin: '8px 0', color: '#38bdf8' }}>$482.9M</div>
                <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.75)' }}>+24.8% growth vs prior 24-hour cycle.</p>
              </div>
              <div className="mock-card">
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase' }}>Latency</div>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, margin: '8px 0', color: '#c084fc' }}>1.2 ms</div>
                <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.75)' }}>Zero-loss execution on distributed mesh.</p>
              </div>
              <div className="mock-card">
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase' }}>Security</div>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, margin: '8px 0', color: '#34d399' }}>AAA Grade</div>
                <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.75)' }}>Audited smart routing contracts.</p>
              </div>
            </div>
          </div>
        )

      case 'neumorphism':
        return (
          <div className="mock-page-shell mock-neu">
            <div className="mock-hero">
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }} />
                <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: '#64748b' }}>
                  Smart Home Central
                </span>
              </div>
              <h2 style={{ fontSize: '1.9rem', fontWeight: 800, marginBottom: '12px', color: '#0f172a' }}>
                Tactile Control at Your Fingertips
              </h2>
              <p style={{ color: '#475569', maxWidth: '560px', lineHeight: 1.6, marginBottom: '20px' }}>
                Soft volumetric surfaces that feel physical, calming, and deeply grounded in organic interaction design.
              </p>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <button type="button" className="neu-button is-pressed" style={{ width: 'auto', padding: '0 20px', borderRadius: '24px', height: '42px' }}>
                  Eco Mode: Active
                </button>
              </div>
            </div>

            <div className="mock-grid">
              <div className="mock-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <strong>Climate</strong>
                  <i className="fa-solid fa-temperature-half" style={{ color: '#3b82f6' }} />
                </div>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#1e293b' }}>22.5°C</div>
                <p style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '6px' }}>Optimal living humidity 48%</p>
              </div>
              <div className="mock-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <strong>Lighting</strong>
                  <i className="fa-solid fa-lightbulb" style={{ color: '#f59e0b' }} />
                </div>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#1e293b' }}>Warm 2700K</div>
                <p style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '6px' }}>Adaptive circadian rhythm</p>
              </div>
              <div className="mock-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <strong>Energy</strong>
                  <i className="fa-solid fa-bolt" style={{ color: '#10b981' }} />
                </div>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#1e293b' }}>1.4 kW/h</div>
                <p style={{ fontSize: '0.8rem', color: '#64748b', marginTop: '6px' }}>Solar net-positive flow</p>
              </div>
            </div>
          </div>
        )

      case 'cyber-neon':
        return (
          <div className="mock-page-shell mock-cyber">
            <div className="mock-hero">
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                <span className="cyber-pulse-dot" />
                <span style={{ fontFamily: 'monospace', fontSize: '0.75rem', color: '#00d4ff', letterSpacing: '0.1em' }}>
                  GRID_OS // ACTIVE NODE
                </span>
              </div>
              <h2 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '12px', textShadow: '0 0 20px #00d4ff', letterSpacing: '-0.01em' }}>
                High-Voltage Web Intelligence
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.85)', maxWidth: '580px', lineHeight: 1.6, marginBottom: '20px' }}>
                Ultra-dark palettes engineered with laser-precision glow accents for developer tools and decentralized protocols.
              </p>
              <div style={{ display: 'flex', gap: '12px' }}>
                <button type="button" style={{ background: '#00d4ff', color: '#030814', border: 'none', padding: '9px 20px', borderRadius: '6px', fontWeight: 800, cursor: 'pointer', boxShadow: '0 0 16px rgba(0,212,255,0.6)' }}>
                  INITIALIZE_CORE
                </button>
              </div>
            </div>

            <div className="mock-grid">
              <div className="mock-card">
                <div style={{ fontFamily: 'monospace', fontSize: '0.72rem', color: '#00d4ff' }}>HASH_RATE</div>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, margin: '8px 0', textShadow: '0 0 10px #00d4ff' }}>1.42 TH/s</div>
                <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)' }}>Zero node dropouts recorded.</p>
              </div>
              <div className="mock-card">
                <div style={{ fontFamily: 'monospace', fontSize: '0.72rem', color: '#a855f7' }}>NEURAL_SYNC</div>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, margin: '8px 0', textShadow: '0 0 10px #a855f7' }}>99.98%</div>
                <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)' }}>Real-time vector consensus.</p>
              </div>
              <div className="mock-card">
                <div style={{ fontFamily: 'monospace', fontSize: '0.72rem', color: '#38bdf8' }}>ENCRYPTION</div>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, margin: '8px 0', textShadow: '0 0 10px #38bdf8' }}>QUANTUM</div>
                <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)' }}>Post-quantum lattice protection.</p>
              </div>
            </div>
          </div>
        )

      case 'bento-grid':
        return (
          <div className="mock-page-shell mock-bento">
            <div className="mock-hero">
              <span className="bento-badge" style={{ display: 'inline-flex', marginBottom: '12px' }}>
                <i className="fa-solid fa-table-cells-large" /> Modular Architecture
              </span>
              <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '12px' }}>
                Engineered for Dense, Effortless Scannability
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '580px', lineHeight: 1.6 }}>
                Compartmentalize features, metrics, and workflows into harmonic tiles with perfect visual balance.
              </p>
            </div>

            <div className="mock-grid">
              <div className="mock-card">
                <span className="bento-badge"><i className="fa-solid fa-arrow-trend-up" /> Conversion</span>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, margin: '8px 0' }}>+214%</div>
                <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)' }}>Bento layouts increase dwell time by 3.2x.</p>
              </div>
              <div className="mock-card">
                <span style={{ color: 'var(--color-cyan)', fontSize: '0.75rem', fontWeight: 700 }}>Telemetry</span>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, margin: '8px 0' }}>0.04s</div>
                <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)' }}>Instant dynamic updates.</p>
              </div>
              <div className="mock-card">
                <span style={{ color: '#f59e0b', fontSize: '0.75rem', fontWeight: 700 }}>CSAT Rating</span>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, margin: '8px 0' }}>4.99 / 5.0</div>
                <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)' }}>Loved by product teams worldwide.</p>
              </div>
            </div>
          </div>
        )

      case 'neo-brutalism':
        return (
          <div className="mock-page-shell mock-brutal">
            <div className="mock-hero">
              <span className="brutal-tag" style={{ display: 'inline-block', marginBottom: '12px' }}>
                DIRECT ACTION
              </span>
              <h2 style={{ fontSize: '2.1rem', fontWeight: 900, marginBottom: '12px', textTransform: 'uppercase' }}>
                BOLD CONTRAST. ZERO BULLSH*T.
              </h2>
              <p style={{ fontSize: '0.95rem', fontWeight: 700, maxWidth: '580px', lineHeight: 1.5, marginBottom: '20px' }}>
                Raw black outlines, unblurred shadows, and vivid colors that cut straight through the noise.
              </p>
              <button type="button" className="brutal-btn" style={{ fontSize: '0.95rem', padding: '10px 24px' }}>
                CLAIM YOUR FREE TRIAL <i className="fa-solid fa-arrow-right" />
              </button>
            </div>

            <div className="mock-grid">
              <div className="mock-card">
                <span className="brutal-tag" style={{ background: '#a3e635' }}>SPEED</span>
                <div style={{ fontSize: '1.8rem', fontWeight: 900, margin: '8px 0' }}>100/100</div>
                <p style={{ fontSize: '0.85rem', fontWeight: 700 }}>Google Lighthouse perfection across all audits.</p>
              </div>
              <div className="mock-card">
                <span className="brutal-tag" style={{ background: '#38bdf8' }}>CLARITY</span>
                <div style={{ fontSize: '1.8rem', fontWeight: 900, margin: '8px 0' }}>ZERO FLUFF</div>
                <p style={{ fontSize: '0.85rem', fontWeight: 700 }}>Instant message comprehension for buyers.</p>
              </div>
              <div className="mock-card">
                <span className="brutal-tag" style={{ background: '#ff5277' }}>VIRALITY</span>
                <div style={{ fontSize: '1.8rem', fontWeight: 900, margin: '8px 0' }}>TOP 1%</div>
                <p style={{ fontSize: '0.85rem', fontWeight: 700 }}>Unforgettable brand recognition.</p>
              </div>
            </div>
          </div>
        )

      case 'swiss-minimalism':
        return (
          <div className="mock-page-shell mock-swiss">
            <div className="mock-hero">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '2.5rem', fontWeight: 900, lineHeight: 1 }}>01.</span>
                <div style={{ width: '28px', height: '28px', background: '#dc2626' }} />
              </div>
              <h2 style={{ fontSize: '2rem', fontWeight: 900, margin: '16px 0 12px 0', textTransform: 'uppercase', letterSpacing: '-0.02em' }}>
                Rigor, Order, &amp; Typographic Purity
              </h2>
              <p style={{ color: '#475569', maxWidth: '580px', lineHeight: 1.6, fontSize: '0.95rem' }}>
                The International Typographic Style: ruthless elimination of superfluous decoration to champion absolute clarity.
              </p>
            </div>

            <div className="mock-grid">
              <div className="mock-card">
                <div style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: '#dc2626' }}>Grid Precision</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 900, margin: '8px 0' }}>12-Column System</div>
                <p style={{ fontSize: '0.82rem', color: '#64748b' }}>Mathematical proportion in every layout module.</p>
              </div>
              <div className="mock-card">
                <div style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: '#dc2626' }}>Whitespace</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 900, margin: '8px 0' }}>Negative Ratio 60%</div>
                <p style={{ fontSize: '0.82rem', color: '#64748b' }}>Deliberate breathing room for content digestion.</p>
              </div>
              <div className="mock-card">
                <div style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', color: '#dc2626' }}>Typography</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 900, margin: '8px 0' }}>Pure Grotesque</div>
                <p style={{ fontSize: '0.82rem', color: '#64748b' }}>Uncompromising editorial legibility.</p>
              </div>
            </div>
          </div>
        )

      case 'claymorphism':
        return (
          <div className="mock-page-shell mock-clay">
            <div className="mock-hero">
              <span className="clay-pill" style={{ display: 'inline-block', marginBottom: '12px' }}>
                Friendly Interaction
              </span>
              <h2 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '12px', color: '#1e1b4b' }}>
                Tactile, Inflatable 3D Experiences
              </h2>
              <p style={{ color: '#3730a3', maxWidth: '580px', lineHeight: 1.6, marginBottom: '20px' }}>
                Soft pastel hues with puffy inset and outset lighting designed to make interfaces delightful and approachable.
              </p>
              <button type="button" className="clay-button">
                Start Exploring Now <i className="fa-solid fa-sparkles" />
              </button>
            </div>

            <div className="mock-grid">
              <div className="mock-card">
                <div style={{ fontWeight: 800, color: '#4338ca' }}>Onboarding Rate</div>
                <div style={{ fontSize: '1.6rem', fontWeight: 900, margin: '8px 0', color: '#312e81' }}>98.4%</div>
                <p style={{ fontSize: '0.82rem', color: '#4f46e5' }}>Friendly 3D reduces user hesitation.</p>
              </div>
              <div className="mock-card">
                <div style={{ fontWeight: 800, color: '#4338ca' }}>Retention</div>
                <div style={{ fontSize: '1.6rem', fontWeight: 900, margin: '8px 0', color: '#312e81' }}>+85%</div>
                <p style={{ fontSize: '0.82rem', color: '#4f46e5' }}>Playful micro-rewards boost engagement.</p>
              </div>
              <div className="mock-card">
                <div style={{ fontWeight: 800, color: '#4338ca' }}>Accessibility</div>
                <div style={{ fontSize: '1.6rem', fontWeight: 900, margin: '8px 0', color: '#312e81' }}>WCAG AA</div>
                <p style={{ fontSize: '0.82rem', color: '#4f46e5' }}>Inclusive contrast & touch targets.</p>
              </div>
            </div>
          </div>
        )

      case 'retro-futurism':
        return (
          <div className="mock-page-shell mock-retro">
            <div className="mock-hero">
              <span style={{ fontFamily: 'monospace', fontSize: '0.75rem', color: '#f43f5e', letterSpacing: '0.12em', display: 'inline-block', marginBottom: '12px' }}>
                SYNTH // 1984
              </span>
              <h2 style={{ fontSize: '2rem', fontWeight: 900, fontStyle: 'italic', marginBottom: '12px', textShadow: '0 0 15px #f43f5e' }}>
                CYBER-SUNSET SPEED &amp; POWER
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.85)', maxWidth: '580px', lineHeight: 1.6, marginBottom: '20px' }}>
                Wireframe horizons, neon magenta gradients, and 80s arcade adrenaline rebuilt for high-speed modern platforms.
              </p>
              <button type="button" style={{ background: 'linear-gradient(90deg, #f43f5e, #fb923c)', color: '#ffffff', border: 'none', padding: '10px 24px', borderRadius: '8px', fontWeight: 900, cursor: 'pointer', boxShadow: '0 0 20px rgba(244,63,94,0.6)' }}>
                ENTER CYBERSPACE
              </button>
            </div>

            <div className="mock-grid">
              <div className="mock-card">
                <div style={{ color: '#f43f5e', fontSize: '0.75rem', fontWeight: 700 }}>VELOCITY</div>
                <div style={{ fontSize: '1.6rem', fontWeight: 900, margin: '8px 0' }}>88 MPH</div>
                <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)' }}>Maximum warp-drive throughput.</p>
              </div>
              <div className="mock-card">
                <div style={{ color: '#38bdf8', fontSize: '0.75rem', fontWeight: 700 }}>SYNTH FREQ</div>
                <div style={{ fontSize: '1.6rem', fontWeight: 900, margin: '8px 0' }}>44.1 kHz</div>
                <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)' }}>Pure analog warmth reproduction.</p>
              </div>
              <div className="mock-card">
                <div style={{ color: '#fbbf24', fontSize: '0.75rem', fontWeight: 700 }}>STEEZ RATING</div>
                <div style={{ fontSize: '1.6rem', fontWeight: 900, margin: '8px 0' }}>MAXIMUM</div>
                <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.7)' }}>Unrivaled visual stage presence.</p>
              </div>
            </div>
          </div>
        )

      case 'editorial':
        return (
          <div className="mock-page-shell mock-editorial">
            <div className="mock-hero">
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #1c1917', paddingBottom: '8px', marginBottom: '16px' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
                  QUARTERLY FOLIO — ISSUE VIII
                </span>
                <span style={{ fontSize: '0.75rem', fontStyle: 'italic' }}>OCTOBER EDITION</span>
              </div>
              <h2 style={{ fontSize: '2.2rem', fontWeight: 700, lineHeight: 1.2, marginBottom: '14px', color: '#0c0a09' }}>
                The Architecture of Lasting Substance
              </h2>
              <p style={{ fontSize: '1rem', lineHeight: 1.7, color: '#44403c', maxWidth: '620px' }}>
                <span className="editorial-dropcap">W</span>
                hen digital interfaces honor literary tradition, information ceases to be merely consumed—it becomes thoroughly understood and deeply retained.
              </p>
            </div>

            <div className="mock-grid">
              <div className="mock-card">
                <div style={{ fontSize: '0.75rem', fontStyle: 'italic', color: '#78716c' }}>Section I</div>
                <div style={{ fontSize: '1.2rem', fontWeight: 700, margin: '6px 0' }}>Curated Portfolios</div>
                <p style={{ fontSize: '0.82rem', lineHeight: 1.5, color: '#57534e' }}>Tailored layout rhythm for luxury and investment firms.</p>
              </div>
              <div className="mock-card">
                <div style={{ fontSize: '0.75rem', fontStyle: 'italic', color: '#78716c' }}>Section II</div>
                <div style={{ fontSize: '1.2rem', fontWeight: 700, margin: '6px 0' }}>Editorial Flow</div>
                <p style={{ fontSize: '0.82rem', lineHeight: 1.5, color: '#57534e' }}>Generous column proportions designed for sustained reading.</p>
              </div>
              <div className="mock-card">
                <div style={{ fontSize: '0.75rem', fontStyle: 'italic', color: '#78716c' }}>Section III</div>
                <div style={{ fontSize: '1.2rem', fontWeight: 700, margin: '6px 0' }}>Literary Prestige</div>
                <p style={{ fontSize: '0.82rem', lineHeight: 1.5, color: '#57534e' }}>Distinction in an era of generic web design templates.</p>
              </div>
            </div>
          </div>
        )

      case 'illustration-led':
        return (
          <div className="mock-page-shell mock-illus">
            <div className="mock-hero">
              <span style={{ background: '#d1fae5', color: '#065f46', padding: '4px 12px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 700, display: 'inline-block', marginBottom: '12px' }}>
                Human-First Storytelling
              </span>
              <h2 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '12px', color: '#064e3b' }}>
                Warm, Expressive &amp; Full of Life
              </h2>
              <p style={{ color: '#047857', maxWidth: '580px', lineHeight: 1.6, marginBottom: '20px' }}>
                Custom vector-like organic geometry that builds empathy, builds rapport, and delights visitors at every interaction.
              </p>
              <button type="button" style={{ background: '#10b981', color: '#ffffff', border: 'none', padding: '10px 22px', borderRadius: '20px', fontWeight: 800, cursor: 'pointer', boxShadow: '0 8px 20px rgba(16,185,129,0.3)' }}>
                Start Your Journey <i className="fa-solid fa-arrow-right" />
              </button>
            </div>

            <div className="mock-grid">
              <div className="mock-card">
                <div style={{ fontWeight: 800, color: '#059669' }}>Emotional Connection</div>
                <div style={{ fontSize: '1.6rem', fontWeight: 900, margin: '8px 0', color: '#064e3b' }}>3.8x</div>
                <p style={{ fontSize: '0.82rem', color: '#047857' }}>Higher brand recall than stock imagery.</p>
              </div>
              <div className="mock-card">
                <div style={{ fontWeight: 800, color: '#059669' }}>User Trust</div>
                <div style={{ fontSize: '1.6rem', fontWeight: 900, margin: '8px 0', color: '#064e3b' }}>+92%</div>
                <p style={{ fontSize: '0.82rem', color: '#047857' }}>Approachable aesthetics invite client confidence.</p>
              </div>
              <div className="mock-card">
                <div style={{ fontWeight: 800, color: '#059669' }}>Uniqueness</div>
                <div style={{ fontSize: '1.6rem', fontWeight: 900, margin: '8px 0', color: '#064e3b' }}>100% Custom</div>
                <p style={{ fontSize: '0.82rem', color: '#047857' }}>Handcrafted aesthetic unique to your brand.</p>
              </div>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  const primaryStyle = activeStyle || compareStyles[0] || designStyles[0]

  return (
    <div
      className="style-modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-style-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="style-modal-container">
        <div className="style-modal-header">
          <div className="style-modal-title" id="modal-style-title">
            <i className={`fa-solid ${isCompareMode ? 'fa-code-compare' : primaryStyle.icon}`} style={{ color: 'var(--color-cyan)' }} />
            {isCompareMode ? (
              <span>Comparing: {compareStyles[0].name} vs {compareStyles[1].name}</span>
            ) : (
              <span>Full Page Preview: {primaryStyle.name}</span>
            )}
          </div>

          <div className="style-modal-controls">
            {!isCompareMode && (
              <select
                aria-label="Switch Design Style"
                value={primaryStyle.slug}
                onChange={(e) => {
                  const s = designStyles.find((st) => st.slug === e.target.value)
                  if (s) onSelectStyle(s)
                }}
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  color: '#ffffff',
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: '6px',
                  padding: '6px 12px',
                  fontSize: '0.82rem',
                }}
              >
                {designStyles.map((s) => (
                  <option key={s.id} value={s.slug} style={{ background: '#09132c', color: '#ffffff' }}>
                    {s.name}
                  </option>
                ))}
              </select>
            )}

            <button
              type="button"
              className="style-modal-close-btn"
              onClick={onClose}
              aria-label="Close modal (Escape)"
            >
              <i className="fa-solid fa-xmark" />
            </button>
          </div>
        </div>

        <div className="style-modal-body">
          {isCompareMode ? (
            <div className="compare-split-grid">
              <div className="compare-split-pane">
                <div className="compare-pane-header">
                  <strong>{compareStyles[0].name}</strong>
                  <span style={{ fontSize: '0.75rem', color: 'var(--color-cyan)' }}>Style A</span>
                </div>
                {renderMockPageContent(compareStyles[0])}
              </div>
              <div className="compare-split-pane">
                <div className="compare-pane-header">
                  <strong>{compareStyles[1].name}</strong>
                  <span style={{ fontSize: '0.75rem', color: '#f59e0b' }}>Style B</span>
                </div>
                {renderMockPageContent(compareStyles[1])}
              </div>
            </div>
          ) : (
            <div>
              {renderMockPageContent(primaryStyle)}
              <div style={{ padding: '24px 32px', background: 'rgba(6, 13, 32, 0.95)', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                <div>
                  <strong style={{ display: 'block', color: '#ffffff' }}>Ready to engineer your website in this style?</strong>
                  <span style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)' }}>We develop custom Next.js web platforms with precision execution.</span>
                </div>
                <Link
                  href={`/get-quote?style=${encodeURIComponent(primaryStyle.name)}`}
                  className="btn btn-primary"
                  onClick={onClose}
                >
                  Request {primaryStyle.name} Proposal <i className="fa-solid fa-arrow-right" />
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
