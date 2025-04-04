import { createServerClient } from '@supabase/ssr'
  import { cookies } from 'next/headers'
  export async function createClient() {
    const cookieStore = await cookies()
    return createServerClient(
      "https://hafvuypcsrilfemqvggd.supabase.co",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhhZnZ1eXBjc3JpbGZlbXF2Z2dkIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0MzcyMzM2NywiZXhwIjoyMDU5Mjk5MzY3fQ.df6PjJhJTBas56j1YRF0fyePkGrLWyARuNlSvDZbPEs",
      {
        cookies: {
          getAll() {
            return cookieStore.getAll()
          },
          setAll(cookiesToSet) {
            try {
              cookiesToSet.forEach(({ name, value, options }) =>
                cookieStore.set(name, value, options)
              )
            } catch {
              // The `setAll` method was called from a Server Component.
              // This can be ignored if you have middleware refreshing
              // user sessions.
            }
          },
        },
      }
    )
  }