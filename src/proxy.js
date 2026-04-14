import { NextResponse } from "next/server";
import { auth } from "./auth";

export default async function proxy(req) {
  const session = await auth();

  if (!session) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}