'use server';

// import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers';

// import { redirect } from 'next/navigation';
import { createClient } from '@/services/supabase/server';

export async function signupWithMagicLink(email: string) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      // shouldCreateUser: false,
      emailRedirectTo: `http://localhost:3000/api/auth/confirm?next=/`,
    },
  });

  if (error) return false;

  // revalidatePath('/', 'layout')
  return true;
}
