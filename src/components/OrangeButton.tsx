interface OrangeButtonI {
    label : string
    onClick : () => void
}

export default function OrangeButton ({ label, onClick } : OrangeButtonI) {
    return(
        <button
            onClick={onClick}
            style={{
              background: 'var(--copper)',
              color: '#fff',
              border: 'none',
              borderRadius: 100,
              padding: '18px 44px',
              fontSize: 16,
              fontWeight: 700,
              cursor: 'pointer',
              boxShadow: '0 8px 32px rgba(201,84,26,0.4)',
              letterSpacing: '0.02em',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.04)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)' }}
          >
            {label}
          </button>
    );
}