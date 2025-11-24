'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';

import { ComponentProps } from 'react';

export function CustomLink({ href, className, ...rest }: ComponentProps<typeof Link>) {
  return <Link href={href} className={cn(className)} prefetch={false} {...rest} />;
}
