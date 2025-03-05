import "server-only";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
const privateRouting = ["/myprofile"];
const publicRoutes = ["/", "/about", "/delivery"];
const blockRouter = ["/login"];

export default async function middleware(req, res) {
  const path = req.nextUrl.pathname;
  const isProtectedRoute = privateRouting.includes(path);
  const isPublicRoute = publicRoutes.includes(path);
  const blockRouting = blockRouter.includes(path);
  const cookie = cookies().get("Y_V")?.value;

  if (cookie) {
    if (blockRouting) {
      return NextResponse.redirect(new URL("/myprofile", req.nextUrl));
    }
  } else {
    if (isProtectedRoute) {
      return NextResponse.redirect(new URL("/login", req.nextUrl));
    }
  }

  return NextResponse.next();
}


// Routes Middleware should not run on
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
