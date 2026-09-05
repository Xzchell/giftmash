import RevealEl from "./Reveal";

export default function ThreeYearsBridge () {
    return(
        <section
      style={{
        background: 'var(--deep)',
        minHeight: '80svh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(60px, 12vw, 120px) clamp(24px, 6vw, 80px)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background texture */}
      <div
        style={{
          position: 'absolute',
          width: '50vw',
          height: '50vw',
          maxWidth: 400,
          maxHeight: 400,
          background: 'var(--copper)',
          borderRadius: '40%',
          top: '-10%',
          right: '-8%',
          opacity: 0.08,
        }}
      />
      <div
        style={{
          position: 'absolute',
          width: '40vw',
          height: '40vw',
          maxWidth: 320,
          maxHeight: 320,
          background: 'var(--copper)',
          borderRadius: '40%',
          bottom: '-8%',
          left: '-6%',
          opacity: 0.06,
        }}
      />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <RevealEl>
          <p
            style={{
              fontSize: 'clamp(24px, 5vw, 48px)',
              fontWeight: 800,
              color: 'rgba(255,255,255,0.5)',
              letterSpacing: '-0.02em',
              marginBottom: 16,
            }}
          >
            ТРИ ГОДА
          </p>
        </RevealEl>

        <RevealEl delay={120}>
          <div
            style={{
              fontSize: 'clamp(100px, 26vw, 260px)',
              fontWeight: 900,
              color: 'var(--copper)',
              lineHeight: 0.88,
              letterSpacing: '-0.04em',
              marginBottom: 24,
            }}
          >
            18
          </div>
        </RevealEl>

        <RevealEl delay={220}>
          <p
            style={{
              fontSize: 'clamp(16px, 2.5vw, 22px)',
              color: 'rgba(255,255,255,0.55)',
              fontWeight: 500,
              letterSpacing: '0.01em',
            }}
          >
            Кажется, начинается новая глава.
          </p>
        </RevealEl>
      </div>
    </section>
    );
}