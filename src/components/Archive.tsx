import { useState } from "react"
import RevealEl from "./Reveal"
import { ARCHIVE } from "../data/Archive"

export default function Archive() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section
      style={{
        background: 'var(--cream)',
        padding: 'clamp(60px, 10vw, 120px) clamp(20px, 5vw, 60px)',
      }}
    >
      <div className="max-w-6xl mx-auto">
        <RevealEl>
          <span
            style={{
              fontSize: 11,
              fontWeight: 800,
              letterSpacing: '0.14em',
              color: 'var(--copper)',
              textTransform: 'uppercase' as const,
              display: 'block',
              marginBottom: 14,
            }}
          >
            Архив
          </span>
          <h2
            style={{
              fontSize: 'clamp(40px, 8vw, 100px)',
              fontWeight: 900,
              letterSpacing: '-0.03em',
              lineHeight: 0.92,
              color: 'var(--deep)',
              marginBottom: 16,
            }}
          >
            НАША
            <br />
            КОЛЛЕКЦИЯ
          </h2>
          <p style={{ fontSize: 15, color: 'var(--muted)', maxWidth: 440, lineHeight: 1.6 }}>
            Три года случайных фотографий, разговоров и моментов.
          </p>
        </RevealEl>

        <div
          style={{
            marginTop: 48,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(180px, 100%), 1fr))',
            gap: 14,
          }}
        >
          {ARCHIVE.map((item, i) => (
            <RevealEl key={i} delay={i * 35} scale>
              <div
                className="card-hover"
                style={{
                  background: item.grad,
                  borderRadius: 22,
                  aspectRatio: item.tall ? '3/4' : '1/1',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 8px 28px rgba(22,22,22,0.1)',
                }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Overlay on hover */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(0,0,0,0.2)',
                    opacity: hovered === i ? 1 : 0,
                    transition: 'opacity 0.22s',
                  }}
                />
                {/* Label */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 12,
                    left: 12,
                    right: 12,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                  }}
                >
                  <span
                    style={{
                      background: 'rgba(255,255,255,0.2)',
                      color: '#fff',
                      borderRadius: 100,
                      padding: '4px 12px',
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: '0.06em',
                      backdropFilter: 'blur(8px)',
                      WebkitBackdropFilter: 'blur(8px)',
                    }}
                  >
                    {item.date}
                  </span>
                  {hovered === i && (
                    <span
                      style={{
                        background: 'rgba(255,255,255,0.2)',
                        color: '#fff',
                        borderRadius: 100,
                        padding: '4px 12px',
                        fontSize: 11,
                        fontWeight: 700,
                        backdropFilter: 'blur(8px)',
                        animation: 'fadeIn 0.15s ease both',
                      }}
                    >
                      ФОТО
                    </span>
                  )}
                </div>
              </div>
            </RevealEl>
          ))}
        </div>
      </div>
    </section>
  )
}