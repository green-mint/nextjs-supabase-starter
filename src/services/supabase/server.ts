// Docs: https://supabase.com/docs/guides/auth/server-side/nextjs?router=app

import { type CookieOptions, createServerClient } from '@supabase/ssr';
import { type cookies } from 'next/headers';

import { env } from '@/env';

export function createClient(cookieStore: ReturnType<typeof cookies>) {
  return createServerClient(
    env.NEXT_PUBLIC_SUPABASE_URL,
    env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
        // The set and remove methods for the server client need error handlers,
        // because Next.js throws an error if cookies are set from Server Components.
        // You can safely ignore this error because you'll set up middleware in the
        // next step to write refreshed cookies to storage.

        set(name: string, value: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value, ...options });
          } catch (error) {
            // The `set` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
        remove(name: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value: '', ...options });
          } catch (error) {
            // The `delete` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    }
  );
}
