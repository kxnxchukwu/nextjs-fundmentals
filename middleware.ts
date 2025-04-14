import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function apiMiddleware(request: NextRequest) {
  // Check if the request is for the API routes
  if (request.nextUrl.pathname.startsWith('/api')) {
    // Get the Authorization header
    const authHeader = request.headers.get('Authorization')

    // If no Authorization header is present, return a 401 Unauthorized response
    if (!authHeader) {
      return NextResponse.json(
        { success: false, message: 'Authorization header is required' },
        { status: 401 }
      )
    }

    // You can add additional authorization logic here
    // For example, validate JWT tokens, check specific auth schemes, etc.
  }

  // Continue with the request for non-API routes or if authorization is valid
  return NextResponse.next()
}

export function dashboardMiddleware(request: NextRequest) {
  // Check if user is authenticated (e.g., via a cookie)
  const isAuthenticated = request.cookies.has('auth-token')

  // If trying to access a protected route and not authenticated
  if (request.nextUrl.pathname.startsWith('/dashboard') && !isAuthenticated) {
    // Redirect to login page
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

// Configure the middleware to only run on API routes
export const config = {
  matcher: ['/api/:path*', '/dashboard/:path*'],
}
