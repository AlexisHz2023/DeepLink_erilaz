import { auth } from "@clerk/nextjs/server";

export async function requireAuth() {
  const { sessionClaims } = await auth();

  if (!sessionClaims) {
    throw new Response("Unauthorized", { status: 401 });
  }

  return sessionClaims;
}

