import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  // Keep local development unchanged; enforce HTTPS only in production.
  if (process.env.NODE_ENV !== 'production') {
    return NextResponse.next()
  }

  const forwardedProto = request.headers.get('x-forwarded-proto')
  if (forwardedProto === 'http') {
    const httpsUrl = new URL(request.url)
    httpsUrl.protocol = 'https:'
    return NextResponse.redirect(httpsUrl, 308)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
