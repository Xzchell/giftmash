import { useEffect, useRef } from "react"
import RevealEl from "./Reveal"
import MomentCard from "./MomentCard"
import type { YearData } from "../App"

export default function YearSection({
  data,
  onActiveChange,
}: {
  data: YearData
  onActiveChange: (y: string) => void
}) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) onActiveChange(data.year)
      },
      { threshold: 0.25 },
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [data.year, onActiveChange])

  return (
    <section
      id={'y' + data.year}
      ref={ref}
      style={{ background: data.bg }}
      className="relative overflow-hidden"
    >
      {/* Ghost year watermark */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          fontSize: 'clamp(160px, 36vw, 420px)',
          fontWeight: 900,
          color: data.accent,
          opacity: 0.04,
          lineHeight: 1,
          letterSpacing: '-0.04em',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
          userSelect: 'none',
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
        }}
      >
        {data.year}
      </div>

      <div
        className="relative z-10 max-w-6xl mx-auto w-full"
        style={{ padding: 'clamp(64px, 10vw, 120px) clamp(20px, 5vw, 60px)' }}
      >
        {/* Section header */}
        <div style={{ marginBottom: 'clamp(36px, 6vw, 64px)' }}>
          <RevealEl delay={0}>
            <span
              style={{
                fontSize: 11,
                fontWeight: 800,
                letterSpacing: '0.14em',
                color: data.accent,
                textTransform: 'uppercase' as const,
                background: data.accentLight,
                padding: '5px 12px',
                borderRadius: 100,
                display: 'inline-block',
                marginBottom: 16,
              }}
            >
              {data.chapter}
            </span>
          </RevealEl>

          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', gap: '0 20px' }}>
            <RevealEl delay={50}>
              <div
                style={{
                  fontSize: 'clamp(64px, 14vw, 140px)',
                  fontWeight: 900,
                  color: data.accent,
                  lineHeight: 0.88,
                  letterSpacing: '-0.04em',
                }}
              >
                {data.year}
              </div>
            </RevealEl>

            <RevealEl delay={100}>
              <div>
                <p
                  style={{
                    fontSize: 'clamp(16px, 2vw, 22px)',
                    fontWeight: 800,
                    color: 'var(--deep)',
                    letterSpacing: '-0.01em',
                    marginBottom: 4,
                  }}
                >
                  {data.subtitle}
                </p>
                <p style={{ fontSize: 14, color: 'var(--muted)', fontWeight: 500 }}>
                  {data.description}
                </p>
              </div>
            </RevealEl>
          </div>
        </div>

        {/* Moments grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(300px, 100%), 1fr))',
            gap: 16,
          }}
        >
          {data.moments.map((moment, i) => (
            <RevealEl key={i} delay={i * 80} scale>
              <MomentCard moment={moment} accent={data.accent} />
            </RevealEl>
          ))}
        </div>
      </div>
    </section>
  )
}