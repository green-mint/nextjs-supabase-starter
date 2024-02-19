import Head from 'next/head';
import * as React from 'react';

import { Button } from '@/components/ui/button';

export default async function HomePage() {
  return (
    <main>
      <Head>
        <title>Hi</title>
      </Head>
      <section className='bg-white'>
        <div className='layout relative flex flex-col items-center justify-center py-12 text-center'>
          <h1 className='mt-4 text-3xl'>
            Next.js + Tailwind CSS + TypeScript Starter
          </h1>
          <p className='mt-2 text-sm text-gray-800'>
            A starter for Next.js, Tailwind CSS, and TypeScript with Absolute
            Import, Seo, Link component, pre-configured with Husky
          </p>
        </div>
        <Button>Hello</Button>
      </section>
    </main>
  );
}
