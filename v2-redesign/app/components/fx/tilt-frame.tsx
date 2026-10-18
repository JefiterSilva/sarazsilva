'use client';

import { useReducedMotionSafe } from './use-reduced-motion';
import { cn } from '@/lib/utils';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import type { PointerEvent, ReactNode } from 'react';

type TiltFrameProps = {
  children: ReactNode;
  className?: string;
  /** Inclinacao maxima em graus */
  max?: number;
};

/**
 * Moldura que inclina de leve seguindo o cursor.
 * Motivo: feedback fisico, a foto responde a quem a observa.
 * Usa motion values, nunca useState, para nao re-renderizar a arvore.
 */
export function TiltFrame({ children, className, max = 5 }: TiltFrameProps) {
  const reduce = useReducedMotionSafe();
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 140, damping: 18 });
  const sy = useSpring(py, { stiffness: 140, damping: 18 });
  const rotateY = useTransform(sx, [-0.5, 0.5], [-max, max]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [max, -max]);

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  const onMove = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== 'mouse') return;
    const rect = event.currentTarget.getBoundingClientRect();
    px.set((event.clientX - rect.left) / rect.width - 0.5);
    py.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const onLeave = () => {
    px.set(0);
    py.set(0);
  };

  return (
    <div
      className={cn('[perspective:1100px]', className)}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  );
}
