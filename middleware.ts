import { NextResponse, NextRequest } from "next/server";
import { decryptData } from "./lib/encrypt";
import { AUTHORIZE_PATHS } from "./lib/constants";

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
  const encryptRole = request.cookies.get('role')?.value || ""
  const decryptRole = decryptData(encryptRole)

  // Redirect to login page if users is not logged in
  if (!userToken && !publicPaths.includes(_getPath(path) as string)) {
    return NextResponse.redirect(new URL("/", request.url));
  } 
  
  // Redirect to dashboard if user is logged in
  if (userToken && publicPaths.includes(path)) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // Redirect to refer URL if user is not authorized
  if (userToken && !AUTHORIZE_PATHS[path].includes(decryptRole)) {        
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

}

export const config = {
  matcher: ['/((?!static|.*\\..*|_next|favicon.ico).*)'],
};
