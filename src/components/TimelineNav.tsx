export default function TimelineNav({ active }: { active: string }) {
  const years = ['2024', '2025', '2026']

  return (
    <div
      style={{
        position: 'fixed',
        top: 30,
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 100,
        background: 'rgba(250,247,242,0.9)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderRadius: 100,
        padding: '5px 7px',
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        border: '1px solid rgba(22,22,22,0.08)',
        boxShadow: '0 4px 24px rgba(22,22,22,0.08)',
      }}
    >
      {years.map((y, i) => (
        <div key={y} style={{ display: 'flex', alignItems: 'center' }}>
          <button
            onClick={() =>
              document.getElementById('y' + y)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }
            style={{
              background: active === y ? 'var(--deep)' : 'transparent',
              color: active === y ? '#fff' : 'var(--muted)',
              border: 'none',
              borderRadius: 100,
              padding: '6px 16px',
              fontSize: 12,
              fontWeight: 800,
              cursor: 'pointer',
              transition: 'all 0.25s cubic-bezier(0.16,1,0.3,1)',
              letterSpacing: '0.05em',
            }}
          >
            {y}
          </button>
          {i < years.length - 1 && (
            <div
              style={{
                width: 16,
                height: 1,
                background: 'rgba(22,22,22,0.15)',
                margin: '0 2px',
              }}
            />
          )}
        </div>
      ))}
    </div>
  )
}
