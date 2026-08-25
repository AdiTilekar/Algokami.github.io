'use client'
import React, { useState, useEffect, useRef } from 'react'
import TiltCard from '@/components/animations/TiltCard'
import DesignStyleCard from '@/components/sections/DesignStyleCard'
import DesignStylePreviewModal from '@/components/sections/DesignStylePreviewModal'
import { designStyles, DesignStyle } from '@/data/designStyles'

const getRevealClass = (demo: string) => {
  switch (demo) {
    case 'glassmorphism':     return 'reveal-glass'
    case 'neumorphism':      return 'reveal-neu'
    case 'cyber-neon':        return 'reveal-cyber'
    case 'bento-grid':        return 'reveal-bento'
    case 'neo-brutalism':     return 'reveal-brutal'
    case 'swiss-minimalism':  return 'reveal-swiss'
    case 'claymorphism':      return 'reveal-clay'
    case 'retro-futurism':    return 'reveal-retro'
    case 'editorial':         return 'reveal-editorial'
    case 'illustration-led':  return 'reveal-illus'
    default:                  return 'reveal-glass'
  }
}

export default function DesignStylesShowcase() {
  const [activePreviewStyle, setActivePreviewStyle] = useState<DesignStyle | null>(null)
  const [compareList, setCompareList] = useState<DesignStyle[]>([])
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false)
  const [visibleCards, setVisibleCards] = useState<{ [key: number]: boolean }>({})

  const cardRefs = useRef<{ [key: number]: HTMLElement | null }>({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = Number(entry.target.getAttribute('data-style-id'))
            if (id) {
              setVisibleCards((prev) => ({ ...prev, [id]: true }))
              observer.unobserve(entry.target)
            }
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    )

    Object.values(cardRefs.current).forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const handleToggleCompare = (style: DesignStyle) => {
    setCompareList((prev) => {
      const exists = prev.some((s) => s.id === style.id)
      if (exists) {
        return prev.filter((s) => s.id !== style.id)
      }
      if (prev.length >= 2) {
        // Replace oldest selection
        return [prev[1], style]
      }
      return [...prev, style]
    })
  }

  const handleRemoveFromCompare = (styleId: number) => {
    setCompareList((prev) => prev.filter((s) => s.id !== styleId))
  }

  const handleOpenCompareModal = () => {
    if (compareList.length === 2) {
      setIsCompareModalOpen(true)
    }
  }

  return (
    <>
      <div className="design-styles-grid">
        {designStyles.map((style) => {
          const isVisible = visibleCards[style.id]
          const revealClass = getRevealClass(style.demo)
          const isSelected = compareList.some((s) => s.id === style.id)

          return (
            <div
              key={style.id}
              ref={(el) => { cardRefs.current[style.id] = el }}
              data-style-id={style.id}
              className={`${isVisible ? revealClass : 'reveal-init'}`}
            >
              <TiltCard maxTilt={6}>
                <DesignStyleCard
                  style={style}
                  isSelectedForCompare={isSelected}
                  onToggleCompare={handleToggleCompare}
                  onOpenPreview={(s) => setActivePreviewStyle(s)}
                />
              </TiltCard>
            </div>
          )
        })}
      </div>

      {/* Floating Bottom Comparison Dock */}
      {compareList.length > 0 && (
        <div className="compare-dock" role="region" aria-label="Style Comparison Dock">
          <div className="compare-dock-pill">
            <i className="fa-solid fa-code-compare" />
            <span>Compare Styles ({compareList.length}/2):</span>
          </div>

          <div className="compare-dock-pills">
            {compareList.map((item) => (
              <span key={item.id} className="compare-dock-tag">
                {item.name}
                <button
                  type="button"
                  className="compare-dock-tag-remove"
                  onClick={() => handleRemoveFromCompare(item.id)}
                  aria-label={`Remove ${item.name} from comparison`}
                  style={{ background: 'none', border: 'none', padding: 0 }}
                >
                  <i className="fa-solid fa-xmark" />
                </button>
              </span>
            ))}
          </div>

          {compareList.length === 1 && (
            <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.7)' }}>
              Select 1 more style on any card to compare side-by-side
            </span>
          )}

          {compareList.length === 2 && (
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleOpenCompareModal}
              style={{ padding: '6px 16px', fontSize: '0.82rem', borderRadius: 'var(--radius-full)' }}
            >
              Compare Side-by-Side <i className="fa-solid fa-arrow-right" />
            </button>
          )}

          <button
            type="button"
            onClick={() => setCompareList([])}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'rgba(255,255,255,0.5)',
              fontSize: '0.75rem',
              cursor: 'pointer',
              textDecoration: 'underline',
            }}
          >
            Clear
          </button>
        </div>
      )}

      {/* Preview Full Page Modal (Single style preview OR side-by-side comparison) */}
      {(activePreviewStyle !== null || isCompareModalOpen) && (
        <DesignStylePreviewModal
          activeStyle={isCompareModalOpen ? null : activePreviewStyle}
          compareStyles={isCompareModalOpen ? compareList : []}
          onClose={() => {
            setActivePreviewStyle(null)
            setIsCompareModalOpen(false)
          }}
          onSelectStyle={(s) => setActivePreviewStyle(s)}
        />
      )}
    </>
  )
}
