'use client';

import { useReducedMotionSafe } from './use-reduced-motion';
import { cn } from '@/lib/utils';
import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
  type RefObject,
} from 'react';

const EASE = 'cubic-bezier(0.16, 1, 0.3, 1)';

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  /** Anima ao montar (hero) em vez de ao entrar na viewport */
  onMount?: boolean;
};

/**
 * Entrada em fade + deslocamento curto.
 * O estado base é visível: se a animação não arrancar, o conteúdo fica na página.
 * Motivo: hierarquia de leitura, sem esconder o hero quando o movimento falha.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  onMount = false,
}: RevealProps) {
  const reduce = useReducedMotionSafe();
  const ref = useRef<HTMLDivElement>(null);
  const play = useEnterFlag(ref, onMount, reduce);

  useLayoutEffect(() => {
    if (reduce || !play) return;
    const el = ref.current;
    if (!el) return;
    return playEnter(
      el,
      [
        { opacity: 0, transform: `translateY(${y}px)` },
        { opacity: 1, transform: 'translateY(0px)' },
      ],
      { duration: 700, delay: delay * 1000 },
    );
  }, [reduce, play, y, delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

type RevealWordsProps = {
  text: string;
  className?: string;
  delay?: number;
  onMount?: boolean;
};

/**
 * Título sobe palavra por palavra, de uma máscara.
 * Motivo: a primeira frase entra como letreiro. Sem movimento, a frase fica legível.
 */
export function RevealWords({
  text,
  className,
  delay = 0,
  onMount = false,
}: RevealWordsProps) {
  const reduce = useReducedMotionSafe();
  const ref = useRef<HTMLSpanElement>(null);
  const play = useEnterFlag(ref, onMount, reduce);
  const words = text.split(' ');

  if (reduce) {
    return (
      <span ref={ref} className={className}>
        {text}
      </span>
    );
  }

  return (
    <>
      <span className="sr-only">{text}</span>
      <span ref={ref} aria-hidden="true" className={cn(className)}>
        {words.map((word, i) => (
          <RisingWord
            key={`${word}-${i}`}
            word={word}
            play={play}
            delay={delay + i * 0.06}
            spacer={i < words.length - 1}
          />
        ))}
      </span>
    </>
  );
}

function RisingWord({
  word,
  play,
  delay,
  spacer,
}: {
  word: string;
  play: boolean;
  delay: number;
  spacer: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    if (!play) return;
    const el = ref.current;
    if (!el) return;
    return playEnter(
      el,
      [{ transform: 'translateY(115%)' }, { transform: 'translateY(0)' }],
      { duration: 800, delay: delay * 1000 },
    );
  }, [play, delay]);

  return (
    <span className="-mb-[0.18em] inline-block overflow-hidden pb-[0.18em] align-bottom">
      <span ref={ref} className="inline-block">
        {word}
      </span>
      {spacer ? '\u00A0' : null}
    </span>
  );
}

function useEnterFlag(
  ref: RefObject<HTMLElement | null>,
  onMount: boolean,
  reduce: boolean,
) {
  const [play, setPlay] = useState(onMount);

  useEffect(() => {
    if (reduce || onMount) return;
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setPlay(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setPlay(true);
        observer.disconnect();
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [onMount, reduce, ref]);

  return play && !reduce;
}

/**
 * Corre a entrada. Se o tempo não avança depois do atraso, cancela:
 * o estilo base do elemento já é o estado final visível.
 */
function playEnter(
  el: HTMLElement,
  keyframes: Keyframe[],
  { duration, delay }: { duration: number; delay: number },
): () => void {
  const anim = el.animate(keyframes, {
    duration,
    delay,
    easing: EASE,
    fill: 'both',
  });

  let raf = 0;
  let lastTime: number | null = null;
  let stuckFrames = 0;
  const watch = () => {
    if (anim.playState === 'idle' || anim.playState === 'paused') {
      anim.cancel();
      return;
    }
    if (anim.playState === 'finished') return;

    const time = typeof anim.currentTime === 'number' ? anim.currentTime : null;
    if (time !== null && time >= delay + 16) return;
    if (time !== null && lastTime !== null && time === lastTime) {
      stuckFrames += 1;
    } else {
      stuckFrames = 0;
    }
    lastTime = time;
    if (stuckFrames >= 12) {
      anim.cancel();
      return;
    }
    raf = requestAnimationFrame(watch);
  };
  raf = requestAnimationFrame(watch);

  return () => {
    cancelAnimationFrame(raf);
    anim.cancel();
  };
}
