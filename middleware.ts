import { NextResponse, NextRequest } from "next/server";

const publicPaths = [
  "/",
  "/sign-up",
  "/forgot-password",
  "/reset-password*",
  "/verify-email"
];

const _getPath = (path: string) => {
  return publicPaths.find((x) =>
    path.match(new RegExp(`^${x}$`.replace("*$", "($|/)")))
  );
}

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const userToken = request.cookies.get('token')?.value || ""

  if (!userToken && !publicPaths.includes(_getPath(path) as string)) {
    return NextResponse.redirect(new URL("/", request.url));
  } 
  
  if(userToken && publicPaths.includes(path)) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }
}

export const config = {
  matcher: ['/((?!static|.*\\..*|_next|favicon.ico).*)'],
};
