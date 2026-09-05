import type { PhotoMoment } from "../App";

export default function PhotoCard({ moment, accent }: { moment: PhotoMoment; accent: string }) {
  return (
    <div
      style={{
        background: '#fff',
        borderRadius: 24,
        overflow: 'hidden',
        boxShadow: '0 4px 24px rgba(22,22,22,0.07)',
        border: '1px solid rgba(22,22,22,0.06)',
      }}
    >
      {/* Photo area */}
      <div
        style={{
          
          background: moment.image
            ? undefined
            : `linear-gradient(135deg, ${accent} 0%, ${accent}99 100%)`,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {moment.image ? (
          <img
            src={moment.image}
            alt={moment.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        ) : (
          <div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 6,
            }}
          >
            <span
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: '0.12em',
                color: 'rgba(255,255,255,0.6)',
                textTransform: 'uppercase' as const,
              }}
            >
              ФОТО
            </span>
            <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.35)', fontWeight: 600 }}>
              {moment.date}
            </span>
          </div>
        )}
        {/* Date badge */}
        <div
          style={{
            position: 'absolute',
            bottom: 12,
            right: 12,
            background: 'rgba(0,0,0,0.4)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            color: '#fff',
            borderRadius: 100,
            padding: '4px 12px',
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: '0.04em',
          }}
        >
          {moment.date}
        </div>
      </div>

      {/* Footer */}
      <div style={{ padding: '14px 18px' }}>
        <p style={{ fontSize: 13, fontWeight: 700, color: 'var(--deep)', marginBottom: 4 }}>
          {moment.title}
        </p>
        {moment.caption && (
          <p style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.5 }}>{moment.caption}</p>
        )}
      </div>
    </div>
  )
}