'use client';

import * as React from 'react';
import type { VariantProps } from 'class-variance-authority';

import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

type AffiliateLinkButtonProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof buttonVariants> & {
    label: string;
    placement: string;
    productName?: string;
  };

export default function AffiliateLinkButton({
  className,
  variant = 'default',
  size = 'default',
  href,
  label,
  placement,
  productName,
  onClick,
  children,
  ...props
}: AffiliateLinkButtonProps) {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const payload = {
      event_label: label,
      placement,
      product_name: productName ?? null,
      destination_url: href ?? null,
      affiliate_network: 'mercado_livre',
    };

    window.dataLayer?.push({
      event: 'affiliate_click',
      ...payload,
    });

    window.gtag?.('event', 'affiliate_click', payload);

    onClick?.(event);
  };

  return (
    <a
      className={cn(buttonVariants({ variant, size, className }))}
      href={href}
      onClick={handleClick}
      {...props}
    >
      {children}
    </a>
  );
}
