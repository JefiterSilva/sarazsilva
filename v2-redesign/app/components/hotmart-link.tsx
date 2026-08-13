'use client';

import { track } from '@vercel/analytics';
import Link from 'next/link';
import type { ReactNode } from 'react';

type HotmartLinkProps = {
  href: string;
  product: 'combo' | 'parte_1' | 'parte_2';
  children: ReactNode;
};

export function HotmartLink({ href, product, children }: HotmartLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track('hotmart_checkout_click', { product })}
    >
      {children}
    </Link>
  );
}
