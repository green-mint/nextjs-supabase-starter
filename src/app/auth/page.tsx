import { Metadata } from 'next';
import Link from 'next/link';

import { UserAuthForm } from '@/components/auth/user-auth-form';

export const metadata: Metadata = {
  title: 'Authentication',
  description: 'Authentication forms built using the components.',
};

export default function AuthenticationPage() {
  return (
    <div className='container flex items-center h-screen'>
      <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
        <div className='flex flex-col space-y-2 text-center'>
          <h1 className='text-2xl font-semibold tracking-tight dark:text-white'>
            Create an account
          </h1>
          <p className='text-sm text-muted-foreground dark:text-white'>
            Enter your email below to create your account
          </p>
        </div>
        <UserAuthForm />
        <p className='px-8 text-center text-sm text-muted-foreground dark:text-white'>
          By clicking continue, you agree to our{' '}
          <Link
            href='/terms'
            className='underline underline-offset-4 hover:text-primary'
          >
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link
            href='/privacy'
            className='underline underline-offset-4 hover:text-primary'
          >
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
