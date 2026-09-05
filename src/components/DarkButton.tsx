interface DarkButtonI {
    label : string,
    onClick: () => void;
}

export default function DarkButton ({label, onClick} : DarkButtonI) {
    return(
        <button
                onClick={onClick}
                style={{
                    marginTop: 40,
                    background: 'var(--deep)',
                    color: '#fff',
                    border: 'none',
                    borderRadius: 100,
                    padding: '16px 38px',
                    fontSize: 15,
                    fontWeight: 700,
                    letterSpacing: '0.03em',
                    cursor: 'pointer',
                    boxShadow: '0 4px 24px rgba(22,22,22,0.2)',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                }}
                onMouseEnter={e => {
                    const b = e.currentTarget as HTMLButtonElement
                    b.style.transform = 'scale(1.05)'
                    b.style.boxShadow = '0 8px 36px rgba(22,22,22,0.28)'
                }}
                onMouseLeave={e => {
                    const b = e.currentTarget as HTMLButtonElement
                    b.style.transform = 'scale(1)'
                    b.style.boxShadow = '0 4px 24px rgba(22,22,22,0.2)'
                }}
                >
                {label}
        </button>
    );
}