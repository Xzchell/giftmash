/* ─── Types ─────────────────────────────────────────────────────────────────── */

export interface MusicPlayerProps {
  src: string
  title: string
  artist: string
  cover?: string
}

/* ─── Equalizer bars ────────────────────────────────────────────────────────── */

function EqBars({ accent }: { accent: string }) {
  return (
    <div
      aria-hidden
      style={{
        display: 'flex',
        alignItems: 'flex-end',
        gap: 2,
        height: 16,
        opacity: 0.3,
      }}
    >
      {[0, 1, 2, 3].map(i => (
        <div
          key={i}
          style={{
            width: 3,
            height: 6,
            borderRadius: 2,
            background: accent,
          }}
        />
      ))}
    </div>
  )
}

/* ─── MusicPlayer ───────────────────────────────────────────────────────────── */

export default function MusicPlayer({
  src: _src,
  title,
  artist,
  cover,
}: MusicPlayerProps) {
  const hasCover = Boolean(cover)

  return (
    <div
      style={{
        background: '#fff',
        borderRadius: 24,
        padding: '18px 18px 16px',
        boxShadow: '0 4px 24px rgba(22,22,22,0.07)',
        border: '1px solid rgba(22,22,22,0.06)',
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
      }}
    >
      {/* Top row: cover + info + eq */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        {/* Cover */}
        <div
          style={{
            width: 52,
            height: 52,
            borderRadius: 14,
            flexShrink: 0,
            overflow: 'hidden',
            background: 'linear-gradient(135deg, #C9541A, #E8904A)',
            position: 'relative',
          }}
        >
          {hasCover ? (
            <img
              src={cover}
              alt={`Обложка — ${title}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          ) : (
            <div
              aria-hidden
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path
                  d="M9 16V6l9-2v10"
                  stroke="rgba(255,255,255,0.7)"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle
                  cx="7"
                  cy="16"
                  r="2.2"
                  stroke="rgba(255,255,255,0.7)"
                  strokeWidth="1.8"
                />
                <circle
                  cx="16"
                  cy="14"
                  r="2.2"
                  stroke="rgba(255,255,255,0.7)"
                  strokeWidth="1.8"
                />
              </svg>
            </div>
          )}
        </div>

        {/* Title + artist */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <p
            style={{
              fontSize: 14,
              fontWeight: 700,
              color: '#161616',
              letterSpacing: '-0.01em',
              lineHeight: 1.3,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              marginBottom: 3,
            }}
          >
            {title}
          </p>

          <p
            style={{
              fontSize: 12,
              fontWeight: 500,
              color: '#8A857F',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            {artist}
          </p>
        </div>

        <EqBars accent="#C9541A" />
      </div>
    </div>
  )
}