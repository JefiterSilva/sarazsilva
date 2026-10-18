'use client';

import { useReducedMotionSafe } from './use-reduced-motion';
import { animate, useInView } from 'motion/react';
import { useEffect, useRef } from 'react';

type CountUpProps = {
  to: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
};

/**
 * Contador que sobe ate o valor final quando entra na tela.
 * Motivo: feedback de prova social, os numeros "se constroem" na frente do leitor.
 * O texto inicial ja e o valor final (SEO e sem JS).
 */
export function CountUp({
  to,
  decimals = 0,
  prefix = '',
  suffix = '',
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' });
  const reduce = useReducedMotionSafe();

  useEffect(() => {
    const node = ref.current;
    if (!inView || !node || reduce) return;

    const format = (v: number) => `${prefix}${v.toFixed(decimals)}${suffix}`;
    const controls = animate(0, to, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        node.textContent = format(v);
      },
    });

    return () => controls.stop();
  }, [inView, reduce, to, decimals, prefix, suffix]);

  return (
    <span ref={ref} className={className}>
      {`${prefix}${to.toFixed(decimals)}${suffix}`}
    </span>
  );
}
