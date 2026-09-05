import RevealEl from "./Reveal";

export default function Final() {
  return (
    <section
      style={{
        background: 'var(--copper)',
        minHeight: '100svh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '60px 24px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          width: '60vw',
          height: '60vw',
          maxWidth: 500,
          maxHeight: 500,
          background: 'rgba(255,255,255,0.07)',
          borderRadius: '38%',
          top: '-12%',
          right: '-12%',
        }}
      />
      <div
        style={{
          position: 'absolute',
          width: '45vw',
          height: '45vw',
          maxWidth: 380,
          maxHeight: 380,
          background: 'rgba(255,255,255,0.05)',
          borderRadius: '40%',
          bottom: '-8%',
          left: '-8%',
        }}
      />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <RevealEl>
          <h1
            style={{
              fontSize: 'clamp(44px, 12vw, 128px)',
              fontWeight: 900,
              color: '#fff',
              letterSpacing: '-0.03em',
              lineHeight: 0.92,
              marginBottom: 20,
            }}
          >
            С ДНЁМ
            <br />
            РОЖДЕНИЯ!
          </h1>
        </RevealEl>

        <RevealEl delay={100}>
          <div
            style={{
              fontSize: 'clamp(80px, 20vw, 200px)',
              fontWeight: 900,
              color: 'rgba(255,255,255,0.18)',
              letterSpacing: '-0.04em',
              lineHeight: 0.88,
              marginBottom: 24,
            }}
          >
            18
          </div>
        </RevealEl>

        <RevealEl delay={180}>
          <p
            style={{
              fontSize: 'clamp(16px, 2.5vw, 22px)',
              color: 'rgba(255,255,255,0.8)',
              fontWeight: 600,
              marginBottom: 12,
              letterSpacing: '-0.01em',
            }}
          >
            Спасибо за эти три года.
          </p>
        </RevealEl>

        <RevealEl delay={240}>
          <p
            style={{
              fontSize: 15,
              color: 'rgba(255,255,255,0.55)',
              fontWeight: 500,
              marginBottom: 44,
            }}
          >
            Желаю тебе успехов в учебе, в жизни и во всем, что ты делаешь. Пусть каждый день будет наполнен радостью, смехом и новыми открытиями. Счастья тебе, здоровья и исполнения всех твоих мечт!
          </p>
        </RevealEl>

        <RevealEl delay={320}>
          <div
            style={{
              display: 'inline-block',
              background: 'rgba(255,255,255,0.14)',
              color: 'rgba(255,255,255,0.85)',
              borderRadius: 100,
              padding: '10px 28px',
              fontSize: 12,
              fontWeight: 800,
              letterSpacing: '0.12em',
              backdropFilter: 'blur(10px)',
            }}
          >
            2024 — 2026
          </div>
        </RevealEl>
      </div>
    </section>
  )
}