import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getUser } from "./actions/getUser";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const isLogged = await getUser();
  console.log(request.nextUrl.pathname.includes("login"));
  if (isLogged !== undefined && request.nextUrl.pathname.includes("login"))
    return Response.redirect(new URL("/", request.nextUrl));
  if(!isLogged&&request.nextUrl.pathname.includes('me')) return Response.redirect(new URL('/login',request.nextUrl))
}
// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
