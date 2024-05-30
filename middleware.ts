import { cookies } from 'next/headers';
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {

    const response = NextResponse.next();

    if (request.nextUrl.pathname === "/back-office") {
        return NextResponse.redirect(new URL("/back-office/login", request.url));
    }
    if (request.nextUrl.pathname === "/back-office/login") {
        if (cookies().has("__auth")) {
            //-> Redirect to dash board
            return NextResponse.redirect(new URL("/back-office/dashboard", request.url));
        }
        return; //-> Stay this page.
    }
    if (request.nextUrl.pathname === "/back-office/dashboard") {
        if (!cookies().has("__auth")) {
            //-> Redirect to login
            return NextResponse.redirect(new URL("/back-office/login", request.url));
        }
        return; //-> Stay this page.
    }

    return response;
}

export const config = {
    matcher: [
        "/back-office",
        "/back-office/login",
        "/back-office/dashboard/:path*"
    ],
}