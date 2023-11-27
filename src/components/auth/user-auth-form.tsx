'use client';

import { Label } from '@radix-ui/react-label';
import { Loader2 } from 'lucide-react';
import * as React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { BsGoogle } from 'react-icons/bs';

import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import supabase from '@/services/supabase';

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

type UserAuthFormProps = React.HTMLAttributes<HTMLDivElement>;

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [email, setEmail] = React.useState<string>('');

  async function onSubmitEmail(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    await supabase.auth.signInWithOtp({
      email,
      options: {
        // shouldCreateUser: false,
        emailRedirectTo: `${window.location.origin}/api/auth/callback`,
      },
    });

    setIsLoading(false);
  }

  async function onSubmitSocial(
    provider: (typeof socialLogins)[number]['provider']
  ) {
    setIsLoading(true);

    await supabase.auth.signInWithOAuth({ provider });

    setIsLoading(false);
  }

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <form>
        <div className='grid gap-2'>
          <div className='grid gap-1'>
            <Label className='sr-only' htmlFor='email'>
              Email
            </Label>
            <Input
              id='email'
              placeholder='name@example.com'
              type='email'
              autoCapitalize='none'
              autoComplete='email'
              autoCorrect='off'
              onChange={(event) => setEmail(event.target.value)}
              disabled={isLoading}
            />
          </div>
          <Button disabled={isLoading} onClick={onSubmitEmail} type='button'>
            {isLoading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
            Sign In with Email
          </Button>
        </div>
      </form>
      <div className='relative'>
        <div className='absolute inset-0 flex items-center'>
          <span className='w-full border-t' />
        </div>
        <div className='relative flex justify-center text-xs uppercase'>
          <span className='bg-background px-2 text-muted-foreground'>
            Or continue with
          </span>
        </div>
      </div>
      <div className='flex flex-col gap-1'>
        {socialLogins.map((social, idx) => (
          <Button
            key={idx}
            variant='outline'
            type='button'
            onClick={() => onSubmitSocial(social.provider)}
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader2 className='mr-2 h-4 w-4 animate-spin' />
            ) : (
              <social.icon className='mr-2 h-4 w-4' />
            )}{' '}
            {social.name}
          </Button>
        ))}
      </div>
    </div>
  );
}
