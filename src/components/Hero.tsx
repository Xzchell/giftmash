import DarkButton from "./DarkButton";

interface HeroPageI {
    onStart : () => void
}

export default function HeroPage ({onStart} : HeroPageI) {
    return(
        <section
            id="hero"
            style={{ background: 'var(--cream)', minHeight: '100svh' }}
            className="relative flex flex-col items-center justify-center overflow-hidden px-6 py-20"
        >
        <div
            className="float-anim absolute"
            style={{
            width: 'min(560px, 85vw)',
            height: 'min(560px, 85vw)',
            background: 'var(--copper)',
            borderRadius: '42%',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            opacity: 0.07,
            zIndex: 0,
            }}
        />

            {/* Floating chip top-right */}
            <div
                className="float-anim absolute"
                style={{
                top: '11%',
                right: '7%',
                background: 'var(--copper)',
                color: '#fff',
                borderRadius: 20,
                padding: '14px 22px',
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: '0.1em',
                boxShadow: '0 16px 48px rgba(201,84,26,0.35)',
                animationDelay: '0.4s',
                zIndex: 1,
                }}
            >
                2024 — 2026
            </div>

            {/* Floating chip bottom-left */}
            <div
                className="float-anim absolute"
                style={{
                bottom: '16%',
                left: '5%',
                background: '#fff',
                color: 'var(--deep)',
                borderRadius: 16,
                padding: '10px 18px',
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '0.07em',
                boxShadow: '0 6px 28px rgba(22,22,22,0.1)',
                animationDelay: '0.9s',
                zIndex: 1,
                }}
            >
                ✦ три года
            </div>

            {/* Main */}
            <div
                className="relative z-10 text-center"
                style={{ animation: 'fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) both' }}
            >
                {/* 18 */}
                <div
                style={{
                    fontSize: 'clamp(120px, 34vw, 340px)',
                    fontWeight: 900,
                    lineHeight: 0.85,
                    color: 'var(--copper)',
                    letterSpacing: '-0.04em',
                }}
                >
                18
                </div>

                <div
                style={{
                    fontSize: 'clamp(18px, 4vw, 36px)',
                    fontWeight: 800,
                    letterSpacing: '-0.01em',
                    color: 'var(--deep)',
                    marginTop: 12,
                }}
                >
                ТЕБЕ ВОСЕМНАДЦАТЬ
                </div>

                <div
                style={{
                    marginTop: 24,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 4,
                }}
                >
                <p style={{ fontSize: 16, color: 'var(--muted)', fontWeight: 500 }}>
                    Три года истории.
                </p>
                <p style={{ fontSize: 16, color: 'var(--muted)', fontWeight: 500 }}>
                    И вот мы здесь.
                </p>
                </div>

                <DarkButton 
                    label="Продолжить"
                    onClick={onStart}
                />
            </div>
        </section>
    );
}