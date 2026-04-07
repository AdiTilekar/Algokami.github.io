import Link from 'next/link'

export default function NotFound() {
  return (
    <main style={{
      minHeight: '100vh', display: 'flex',
      flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      textAlign: 'center', padding: '40px 5%',
      background: 'linear-gradient(135deg, #0d1b4b, #1A1F5E)',
    }}>
      <h1 style={{ fontSize: '8rem', fontWeight: 800, color: '#F5A623', lineHeight: 1 }}>
        404
      </h1>
      <h2 style={{ fontSize: '2rem', color: 'white', margin: '16px 0' }}>Page Not Found</h2>
      <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '400px', marginBottom: '40px' }}>
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link href="/" className="btn btn-primary">
        <i className="fa-solid fa-home" /> Back to Home
      </Link>
    </main>
  )
}
