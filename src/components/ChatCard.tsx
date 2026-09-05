import type { ChatMoment } from "../App";

export default function ChatCard({ moment, accent }: { moment: ChatMoment; accent: string }) {
  return (
    <div
      style={{
        background: '#fff',
        borderRadius: 24,
        padding: '20px',
        boxShadow: '0 4px 24px rgba(22,22,22,0.07)',
        border: '1px solid rgba(22,22,22,0.06)',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: '50%',
              background: accent,
              opacity: 0.15,
            }}
          />
          <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--deep)', letterSpacing: '0.02em' }}>
            {moment.title}
          </span>
        </div>
        <span
          style={{
            fontSize: 11,
            fontWeight: 600,
            color: 'var(--muted)',
            background: 'var(--cream)',
            padding: '3px 10px',
            borderRadius: 100,
          }}
        >
          {moment.date}
        </span>
      </div>

      {/* Messages */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 14 }}>
        {moment.messages.map((msg, i) => {
          const isMe = msg.author === 'Я'
          return (
            <div
              key={i}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: isMe ? 'flex-end' : 'flex-start',
              }}
            >
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  color: 'var(--muted)',
                  marginBottom: 3,
                  letterSpacing: '0.04em',
                }}
              >
                {msg.author}
              </span>
              <div
                style={{
                  background: isMe ? accent : 'var(--cream)',
                  color: isMe ? '#fff' : 'var(--deep)',
                  borderRadius: isMe ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                  padding: '9px 14px',
                  fontSize: 13,
                  fontWeight: 500,
                  maxWidth: '85%',
                  lineHeight: 1.45,
                }}
              >
                {msg.text}
              </div>
            </div>
          )
        })}
      </div>

      {moment.caption && (
        <p style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.5, fontStyle: 'italic' }}>
          {moment.caption}
        </p>
      )}
    </div>
  )
}