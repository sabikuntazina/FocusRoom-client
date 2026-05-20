import { auth } from '@/lib/auth';
import { headers } from 'next/headers'
import { NextResponse } from 'next/server'
// import { auth } from './lib/auth'
 

export default async function proxy(request) {

   const session = await auth.api.getSession({
        headers: await headers()
    })
    if(session) {
      return NextResponse.next();
    }

  return NextResponse.redirect(new URL('/login', request.url))
}
 
// Alternatively, you can use a default export:
// export default function proxy(request) { ... }
 
export const config = {
  matcher: ['/my-bookings/:path*'],
}