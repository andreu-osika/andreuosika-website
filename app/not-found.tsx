import Link from 'next/link'

export default function NotFound() {
  return (
    <main
      style={{
        backgroundColor: '#000',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <p
        style={{
          fontFamily: "'Neue Montreal', sans-serif",
          fontSize: '14px',
          fontWeight: 600,
          color: '#5d6973',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          marginBottom: '24px',
        }}
      >
        404
      </p>
      <p
        style={{
          fontFamily: "'Neue Montreal', sans-serif",
          fontSize: 'clamp(36px, 5vw, 72px)',
          fontStyle: 'italic',
          fontWeight: 100,
          color: '#fff',
          marginBottom: '48px',
        }}
      >
        Page not found
      </p>
      <Link
        href="/"
        style={{
          fontFamily: "'Neue Montreal', sans-serif",
          fontSize: '14px',
          fontWeight: 500,
          color: '#9977ea',
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          transition: 'opacity 0.2s',
        }}
      >
        ← Back to work
      </Link>
    </main>
  )
}
