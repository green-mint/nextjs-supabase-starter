'use client';

import * as React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { BsGoogle } from 'react-icons/bs';

import { Button } from '@/components/ui/button';

import { createClient } from '@/services/supabase/client';

const socialLogins = [
  {
    name: 'Facebook',
    icon: BsFacebook,
    provider: 'facebook',
  },
  {
    name: 'Google',
    icon: BsGoogle,
    provider: 'google',
  },
] as const;

export function SocialLogins() {
  async function onSubmitSocial(
    provider: (typeof socialLogins)[number]['provider']
  ) {
    const supabase = createClient();
    await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${window.location.origin}/api/auth/callback`,
      },
    });
  }

  return (
    <div className='flex flex-col gap-1'>
      {socialLogins.map((social, idx) => (
        <Button
          key={idx}
          variant='outline'
          type='button'
          onClick={() => onSubmitSocial(social.provider)}
        >
          <social.icon className='mr-2 h-4 w-4' />
          {social.name}
        </Button>
      ))}
    </div>
  );
}
