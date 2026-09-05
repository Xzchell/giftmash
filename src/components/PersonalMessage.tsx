import RevealEl from "./Reveal"

export default function PersonalMessage() {
  const words = ['ночные разговоры', 'фотографии', 'кружочки', 'мемы', 'случайные истории']

  return (
    <section
      style={{
        background: '#fff',
        padding: 'clamp(80px, 12vw, 140px) clamp(24px, 6vw, 80px)',
      }}
    >
      <div className="max-w-4xl mx-auto">
        <RevealEl>
          <p
            style={{
              fontSize: 'clamp(28px, 5vw, 58px)',
              fontWeight: 800,
              letterSpacing: '-0.025em',
              lineHeight: 1.1,
              color: 'var(--deep)',
              marginBottom: 48,
            }}
          >
            За эти три года
            <br />
            произошло{' '}
            <span style={{ color: 'var(--copper)' }}>довольно много.</span>
          </p>
        </RevealEl>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 2, marginBottom: 56 }}>
          {words.map((w, i) => (
            <RevealEl key={w} delay={i * 70}>
              <p
                style={{
                  fontSize: 'clamp(22px, 4vw, 42px)',
                  fontWeight: 700,
                  color: i % 2 === 0 ? 'var(--deep)' : 'var(--muted)',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.2,
                }}
              >
                {w}
              </p>
            </RevealEl>
          ))}
        </div>

        <RevealEl delay={360}>
          <div
            style={{
              padding: '28px 32px',
              background: 'var(--cream)',
              borderRadius: 28,
              borderLeft: '4px solid var(--copper)',
              marginBottom: 24,
            }}
          >
            <p
              style={{
                fontSize: 'clamp(17px, 2.5vw, 24px)',
                fontWeight: 700,
                color: 'var(--deep)',
                lineHeight: 1.4,
                letterSpacing: '-0.01em',
                marginBottom: 12,
              }}
            >
              Я правда рад, что когда-то мы познакомились.
            </p>
            <p style={{ fontSize: 15, color: 'var(--muted)', fontWeight: 500 }}>
              Да, наша дружба чисто интернетная, но я всё равно рад, что мы познакомились. Мы все равно делимся друг с другом своми мыслями, переживаниями и радостями. И это здорово. Я надеюсь, что мы ещё не раз будем делиться друг с другом своими историями и переживаниями. Эта открытка - способ не только поздарвить тебя с др, но и сказать тебе спасибо за эти 3 потрясающих года. Я не стал вставлять прям все наши разговоры, ведь тогда это был бы сплошной поток сообщений, но я постарался выбрать самые интересные моменты, которые мы смогли пережить в переписке.
            </p>
          </div>
        </RevealEl>
      </div>
    </section>
  )
}