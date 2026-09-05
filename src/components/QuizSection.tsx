import Quiz from "./Quiz";
import RevealEl from "./Reveal";

export default function QuizSection({ onComplete }: { onComplete: () => void }) {
  return (
    <>
      <section
        style={{
          background: '#FAF5F0',
          padding: '72px 24px 0',
        }}
      >
        <div className="max-w-xl mx-auto text-center">
          <RevealEl>
            <span
              style={{
                fontSize: 11,
                fontWeight: 800,
                letterSpacing: '0.14em',
                color: 'var(--copper)',
                textTransform: 'uppercase' as const,
                display: 'block',
                marginBottom: 16,
              }}
            >
              Мини-тест
            </span>
            <h2
              style={{
                fontSize: 'clamp(36px, 8vw, 80px)',
                fontWeight: 900,
                letterSpacing: '-0.03em',
                color: 'var(--deep)',
                lineHeight: 0.92,
                marginBottom: 16,
              }}
            >
              Решишь небольшой quiz?
            </h2>
            <p style={{ fontSize: 16, color: 'var(--muted)', marginBottom: 48, lineHeight: 1.6 }}>
              Посмотрим, насколько хорошо ты помнишь эти три года. Обещаю, что это будет несложно. В конце тебя ждет сюрприз!
            </p>
          </RevealEl>
        </div>
      </section>
      <Quiz onComplete={onComplete} />
    </>
  )
}