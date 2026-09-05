import { useState } from "react"

export default function Gift() {
  const [opened, setOpened] = useState(false)
  const [revealed, setRevealed] = useState(false)

  function open() {
    setOpened(true)
    setTimeout(() => setRevealed(true), 700)
  }

  return (
    <section
      id="gift"
      style={{
        background: 'var(--cream)',
        minHeight: '100svh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 24px',
      }}
    >
      <div style={{ maxWidth: 520, width: '100%', textAlign: 'center' }}>
        {!revealed ? (
          <div style={{ animation: 'scaleIn 0.5s cubic-bezier(0.16,1,0.3,1) both' }}>
            <p
              style={{
                fontSize: 11,
                fontWeight: 800,
                letterSpacing: '0.14em',
                color: 'var(--copper)',
                textTransform: 'uppercase' as const,
                marginBottom: 28,
              }}
            >
              Разблокировано
            </p>

            <div
              style={{
                width: 'min(300px, 80vw)',
                margin: '0 auto',
                background: '#fff',
                borderRadius: 40,
                padding: '52px 36px',
                boxShadow: '0 28px 80px rgba(22,22,22,0.13)',
                cursor: opened ? 'default' : 'pointer',
                animation: opened ? 'giftReveal 0.6s cubic-bezier(0.16,1,0.3,1) both' : undefined,
                transition: 'box-shadow 0.3s',
              }}
              onClick={!opened ? open : undefined}
              onMouseEnter={e => {
                if (!opened) (e.currentTarget as HTMLDivElement).style.boxShadow = '0 36px 100px rgba(22,22,22,0.18)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = '0 28px 80px rgba(22,22,22,0.13)'
              }}
            >
              {/* "18" as the gift icon */}
              <div
                style={{
                  fontSize: opened ? 48 : 80,
                  fontWeight: 900,
                  color: opened ? 'var(--copper)' : 'var(--deep)',
                  letterSpacing: '-0.04em',
                  lineHeight: 1,
                  marginBottom: 20,
                  transition: 'all 0.4s',
                }}
              >
                {opened ? '…' : '🎁'}
              </div>

              {!opened ? (
                <>
                  <p
                    style={{
                      fontSize: 17,
                      fontWeight: 800,
                      color: 'var(--deep)',
                      letterSpacing: '-0.01em',
                      marginBottom: 8,
                    }}
                  >
                    Открыть подарок
                  </p>
                  <p style={{ fontSize: 13, color: 'var(--muted)' }}>Нажми, чтобы открыть</p>
                </>
              ) : (
                <p style={{ fontSize: 16, fontWeight: 700, color: 'var(--copper)' }}>Открываю…</p>
              )}
            </div>
          </div>
        ) : (
          <div style={{ animation: 'scaleIn 0.6s cubic-bezier(0.16,1,0.3,1) both' }}>
            <p
              style={{
                fontSize: 'clamp(28px, 6vw, 52px)',
                fontWeight: 900,
                letterSpacing: '-0.03em',
                color: 'var(--deep)',
                marginBottom: 32,
              }}
            >
              ЭТО ТЕБЕ
            </p>

            {/* Certificate placeholder */}
            <div
              style={{
                background: '#fff',
                borderRadius: 36,
                padding: '44px 36px',
                border: '2px dashed rgba(201,84,26,0.25)',
                boxShadow: '0 20px 64px rgba(22,22,22,0.1)',
                marginBottom: 24,
              }}
            >
              <div
                style={{
                  fontSize: 'clamp(48px, 12vw, 96px)',
                  fontWeight: 900,
                  color: 'var(--copper)',
                  letterSpacing: '-0.04em',
                  lineHeight: 1,
                  marginBottom: 16,
                }}
              >
                18
              </div>
              <p
                style={{
                  fontSize: 16,
                  fontWeight: 800,
                  color: 'var(--deep)',
                  letterSpacing: '-0.01em',
                  marginBottom: 10,
                }}
              >
                СЕРТИФИКАТ
              </p>
              <p
                style={{
                  fontSize: 14,
                  color: 'var(--muted)',
                  lineHeight: 1.6,
                  maxWidth: 300,
                  margin: '0 auto 20px',
                }}
              >
                И да.. Это сертификат на 2000 рублей в зя. Лучше не смог придумать, но надеюсь, что тебе понравится. Ты можешь потратить его на что угодно, что тебе захочется. Главное — чтобы это было полезно и радовало тебя.
              </p>
              <div
                style={{
                  display: 'inline-block',
                  padding: '8px 20px',
                  background: 'var(--cream)',
                  borderRadius: 100,
                  fontSize: 11,
                  fontWeight: 700,
                  color: 'var(--copper)',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase' as const,
                }}
              >
                <a href="https://goldapple.ru/cards/receive/6c8c9cd4b1ec0160c6bd346327cca80cef704f78?from=email" target="_blank" rel="noopener noreferrer">
                  Забрать сертификат
                </a>
              </div>
            </div>

            <p style={{ fontSize: 14, color: 'var(--muted)' }}>МОЕ ПОЗДРАВЛЕНИЕ НИЖЕ</p>
          </div>
        )}
      </div>
    </section>
  )
}