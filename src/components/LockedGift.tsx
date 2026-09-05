export default function LockedGift() {
  return (
    <section
      style={{
        background: 'var(--cream)',
        padding: '80px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          maxWidth: 380,
          textAlign: 'center',
          padding: '52px 36px',
          background: '#fff',
          borderRadius: 36,
          border: '1.5px solid rgba(22,22,22,0.07)',
          boxShadow: '0 8px 40px rgba(22,22,22,0.06)',
        }}
      >
        <div
          style={{
            fontSize: 44,
            opacity: 0.3,
            marginBottom: 20,
            filter: 'grayscale(1)',
          }}
        >
          🔒
        </div>
        <p
          style={{
            fontSize: 18,
            fontWeight: 800,
            color: 'var(--deep)',
            letterSpacing: '-0.01em',
            marginBottom: 10,
          }}
        >
          Финальная часть пока заблокирована.
        </p>
        <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.6 }}>
          Сначала пройди проверку.
        </p>
      </div>
    </section>
  )
}