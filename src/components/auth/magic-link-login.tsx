'use client';

import { Label } from '@radix-ui/react-label';
import { Loader2 } from 'lucide-react';
import * as React from 'react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { signupWithMagicLink } from '@/actions/signup-with-magiclink';

export function MagicLinkLogin() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [email, setEmail] = React.useState<string>('');

  async function onSubmitEmail() {
    setIsLoading(true);

    if (await signupWithMagicLink(email))
      toast('Sign in link sent to your email.');
    else toast('Unknown error occurred. Please try again.');

    setIsLoading(false);
  }

  return (
    <form className='grid gap-2'>
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
    </form>
  );
}
