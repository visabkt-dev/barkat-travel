import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone()
  const hostname = request.headers.get('host')

  // Redirect www to non-www (Preferred version: barkattravel.com)
  if (hostname?.startsWith('www.')) {
    const newHostname = hostname.replace('www.', '')
    url.hostname = newHostname
    return NextResponse.redirect(url, 301)
  }

  return NextResponse.next()
}

// Only run on document requests, not static files or APIs
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
