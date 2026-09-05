import type { QuoteMoment } from "../App";

export default function QuoteCard({ moment, accent }: { moment: QuoteMoment; accent: string }) {
  return (
    <div
      style={{
        background: accent,
        borderRadius: 24,
        padding: '24px 22px',
        boxShadow: `0 8px 32px ${accent}44`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative large quote mark */}
      <div
        style={{
          position: 'absolute',
          top: -8,
          right: 16,
          fontSize: 100,
          fontWeight: 900,
          color: 'rgba(255,255,255,0.1)',
          lineHeight: 1,
          userSelect: 'none',
          pointerEvents: 'none',
          fontFamily: 'Georgia, serif',
        }}
      >
        "
      </div>

      <div style={{ position: 'relative' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 16,
          }}
        >
          <span style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.65)', letterSpacing: '0.1em', textTransform: 'uppercase' as const }}>
            {moment.title}
          </span>
          <span
            style={{
              fontSize: 11,
              fontWeight: 600,
              color: 'rgba(255,255,255,0.5)',
              background: 'rgba(255,255,255,0.12)',
              padding: '3px 10px',
              borderRadius: 100,
            }}
          >
            {moment.date}
          </span>
        </div>

        <p
          style={{
            fontSize: 'clamp(16px, 2.5vw, 20px)',
            fontWeight: 700,
            color: '#fff',
            lineHeight: 1.4,
            letterSpacing: '-0.01em',
            marginBottom: moment.caption ? 14 : 0,
          }}
        >
          {moment.quote}
        </p>

        {moment.caption && (
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.65)', lineHeight: 1.5, fontStyle: 'italic' }}>
            {moment.caption}
          </p>
        )}
      </div>
    </div>
  )
}