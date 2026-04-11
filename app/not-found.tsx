import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="not-found-shell">
      <h1 className="not-found-code">
        404
      </h1>
      <h2 className="not-found-title">Page Not Found</h2>
      <p className="not-found-text">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link href="/" className="btn btn-primary">
        <i className="fa-solid fa-home" /> Back to Home
      </Link>
    </main>
  )
}
