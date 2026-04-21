import Link from 'next/link'

interface PageHeroProps {
  label: string
  title: string
  subtitle: string
  /** Optional badge strip items with icon + text */
  badges?: { icon: string; text: string }[]
  /** Optional CTA button */
  cta?: { href: string; label: string; icon?: string }
  /** Optional secondary notice (urgency banner, etc.) */
  notice?: React.ReactNode
}

/**
 * PageHero — reusable inner-page hero section.
 * Matches the homepage 3D dark-space theme with a perspective grid floor,
 * neon glow effects, and animated particles-style orbs.
 */
export default function PageHero({ label, title, subtitle, badges, cta, notice }: PageHeroProps) {
  return (
    <section className="page-hero-3d">
      {/* Decorative orbs */}
      <span className="ph-orb ph-orb-1" aria-hidden="true" />
      <span className="ph-orb ph-orb-2" aria-hidden="true" />
      <span className="ph-orb ph-orb-3" aria-hidden="true" />

      <div className="container ph-inner">
        <span className="section-label ph-label">{label}</span>
        <h1 className="ph-title">{title}</h1>
        <p className="ph-subtitle">{subtitle}</p>

        {badges && badges.length > 0 && (
          <div className="ph-badges">
            {badges.map((b, i) => (
              <span key={i} className="ph-badge">
                <i className={`fa-solid ${b.icon}`} aria-hidden="true" />
                {b.text}
              </span>
            ))}
          </div>
        )}

        {notice && <div className="ph-notice">{notice}</div>}

        {cta && (
          <Link href={cta.href} className="btn btn-primary ph-cta">
            {cta.label}
            {cta.icon && <i className={`fa-solid ${cta.icon}`} aria-hidden="true" />}
          </Link>
        )}
      </div>
    </section>
  )
}
