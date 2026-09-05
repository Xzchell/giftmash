import { useState } from "react"
import { QUESTIONS } from "../data/Questions"
import OrangeButton from "./OrangeButton"

export default function Quiz({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [answered, setAnswered] = useState(false)
  const [score, setScore] = useState(0)
  const [done, setDone] = useState(false)

  const q = QUESTIONS[step]
  const letters = ['A', 'B', 'C', 'D']

  function choose(idx: number) {
    if (answered) return
    setSelected(idx)
    setAnswered(true)
    if (idx === q.correct) setScore(s => s + 1)
  }

  function next() {
    if (step < QUESTIONS.length - 1) {
      setStep(s => s + 1)
      setSelected(null)
      setAnswered(false)
    } else {
      setDone(true)
    }
  }

  function unlock() {
    onComplete()
    setTimeout(() => {
      document.getElementById('gift')?.scrollIntoView({ behavior: 'smooth' })
    }, 50)
  }

  if (done) {
    return (
      <section
        style={{
          background: '#FAF5F0',
          minHeight: '100svh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px 24px',
        }}
      >
        <div style={{ maxWidth: 480, width: '100%', textAlign: 'center' }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: '50%',
              background: 'var(--copper)',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 24,
              fontWeight: 800,
              margin: '0 auto 24px',
              animation: 'unlockBounce 0.7s cubic-bezier(0.16,1,0.3,1) both',
            }}
          >
            ✓
          </div>
          <h2
            style={{
              fontSize: 'clamp(32px, 7vw, 56px)',
              fontWeight: 900,
              color: 'var(--deep)',
              letterSpacing: '-0.03em',
              marginBottom: 12,
            }}
          >
            Готово.
          </h2>
          <p style={{ fontSize: 17, color: 'var(--muted)', marginBottom: 8 }}>
            {score} из {QUESTIONS.length} правильно
          </p>
          <p style={{ fontSize: 15, color: 'var(--deep)', fontWeight: 600, marginBottom: 36 }}>
            {
              score == 3
              ? "Как ты умудрилась на все ответить правильно? Я в шоке 😭 А теперь подарок)"
              : "Так сделаем вид, что ты ответила на все правильно, и я дам тебе подарок"
            }
          </p>
          <OrangeButton
            label="Забрать подарок"
            onClick={unlock}
          />
        </div>
      </section>
    )
  }

  return (
    <section
      style={{
        background: '#FAF5F0',
        minHeight: '100svh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 24px',
      }}
    >
      <div style={{ maxWidth: 580, width: '100%' }}>
        {/* Header */}
        <div style={{ marginBottom: 36 }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 20,
            }}
          >
            <span
              style={{
                fontSize: 11,
                fontWeight: 800,
                letterSpacing: '0.14em',
                color: 'var(--copper)',
                textTransform: 'uppercase' as const,
              }}
            >
              Проверка
            </span>
            <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--muted)', letterSpacing: '0.06em' }}>
              {String(step + 1).padStart(2, '0')} / {String(QUESTIONS.length).padStart(2, '0')}
            </span>
          </div>
          {/* Progress */}
          <div style={{ height: 2, background: 'rgba(22,22,22,0.08)', borderRadius: 100, overflow: 'hidden' }}>
            <div
              style={{
                height: '100%',
                background: 'var(--copper)',
                borderRadius: 100,
                width: `${((step + (answered ? 1 : 0)) / QUESTIONS.length) * 100}%`,
                transition: 'width 0.45s cubic-bezier(0.16,1,0.3,1)',
              }}
            />
          </div>
        </div>

        <h2
          style={{
            fontSize: 'clamp(20px, 3.5vw, 32px)',
            fontWeight: 800,
            color: 'var(--deep)',
            letterSpacing: '-0.02em',
            lineHeight: 1.25,
            marginBottom: 32,
          }}
        >
          {q.text}
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          {q.options.map((opt, i) => {
            let bg = '#fff'
            let border = '1px solid rgba(22,22,22,0.07)'
            let labelBg = 'rgba(22,22,22,0.06)'
            let labelColor = 'var(--muted)'
            let textColor = 'var(--deep)'

            if (answered) {
              if (i === q.correct) {
                bg = 'rgba(201,84,26,0.07)'
                border = '1.5px solid var(--copper)'
                labelBg = 'var(--copper)'
                labelColor = '#fff'
                textColor = 'var(--copper)'
              } else if (i === selected) {
                bg = 'rgba(22,22,22,0.03)'
                textColor = 'var(--muted)'
              }
            }

            return (
              <div
                key={i}
                className="quiz-option"
                onClick={() => choose(i)}
                style={{
                  background: bg,
                  border,
                  borderRadius: 20,
                  padding: '18px 16px',
                  cursor: answered ? 'default' : 'pointer',
                  boxShadow: '0 2px 10px rgba(22,22,22,0.04)',
                  transition: 'background 0.2s, border-color 0.2s',
                }}
              >
                <div
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: '50%',
                    background: labelBg,
                    color: labelColor,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 11,
                    fontWeight: 800,
                    marginBottom: 10,
                    letterSpacing: '0.04em',
                    transition: 'background 0.2s, color 0.2s',
                  }}
                >
                  {letters[i]}
                </div>
                <p
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: textColor,
                    lineHeight: 1.45,
                    transition: 'color 0.2s',
                  }}
                >
                  {opt}
                </p>
              </div>
            )
          })}
        </div>

        {answered && (
          <div
            style={{
              marginTop: 20,
              padding: '16px 20px',
              background: selected === q.correct ? 'rgba(201,84,26,0.07)' : 'rgba(22,22,22,0.04)',
              borderRadius: 16,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 12,
              animation: 'fadeUp 0.3s ease both',
            }}
          >
            <p
              style={{
                fontSize: 14,
                fontWeight: 700,
                color: selected === q.correct ? 'var(--copper)' : 'var(--muted)',
              }}
            >
              {selected === q.correct ? q.right : q.wrong}
            </p>
            <button
              onClick={next}
              style={{
                background: 'var(--deep)',
                color: '#fff',
                border: 'none',
                borderRadius: 100,
                padding: '10px 22px',
                fontSize: 13,
                fontWeight: 700,
                cursor: 'pointer',
                flexShrink: 0,
                transition: 'opacity 0.15s',
                whiteSpace: 'nowrap' as const,
              }}
            >
              {step < QUESTIONS.length - 1 ? 'Дальше →' : 'Завершить →'}
            </button>
          </div>
        )}
      </div>
    </section>
  )
}