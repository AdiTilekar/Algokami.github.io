import { NextRequest, NextResponse } from 'next/server'

function parseBasicAuth(authHeader: string | null) {
  if (!authHeader || !authHeader.startsWith('Basic ')) {
    return null
  }

  try {
    const encoded = authHeader.slice(6)
    const decoded = atob(encoded)
    const separatorIndex = decoded.indexOf(':')
    if (separatorIndex < 0) return null

    return {
      username: decoded.slice(0, separatorIndex),
      password: decoded.slice(separatorIndex + 1),
    }
  } catch {
    return null
  }
}

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/enquiries')) {
    const isProduction = process.env.NODE_ENV === 'production'
    const configuredId = process.env.ENQUIRIES_ADMIN_ID
    const configuredPass = process.env.ENQUIRIES_ADMIN_PASS

    // In production, credentials must be configured via environment variables.
    if (isProduction && (!configuredId || !configuredPass)) {
      return new NextResponse('Enquiries access is not configured.', { status: 503 })
    }

    const adminId = configuredId || 'Admin'
    const adminPass = configuredPass || 'Okgoogle1403'
    const basicAuth = parseBasicAuth(request.headers.get('authorization'))

    if (!basicAuth || basicAuth.username !== adminId || basicAuth.password !== adminPass) {
      return new NextResponse('Authentication required.', {
        status: 401,
        headers: {
          'WWW-Authenticate': 'Basic realm="Enquiries Dashboard"',
        },
      })
    }
  }

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
