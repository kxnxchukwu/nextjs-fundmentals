import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

function handleApiAuth(request: NextRequest): NextResponse | void {
  const authHeader = request.headers.get('Authorization')
  if (!authHeader) {
    return NextResponse.json(
      { success: false, message: 'Authorization header is required' },
      { status: 401 }
    )
  }
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname.startsWith('/api'))
    return handleApiAuth(request) ?? NextResponse.next()

  return NextResponse.next()
}
export const config = {
  matcher: ['/api/:path*', '/dashboard/:path*'],
}
