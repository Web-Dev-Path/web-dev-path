import { useEffect, useRef } from 'react';

export function useAutoScroll({ direction = 'left', speed = 60 } = {}) {
  const viewportRef = useRef(null);
  const groupRef = useRef(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const viewport = viewportRef.current;
    const group = groupRef.current;
    if (!viewport || !group) return undefined;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    if (prefersReducedMotion) return undefined;

    const dir = direction === 'right' ? -1 : 1;
    const groupWidth = group.offsetWidth;
    viewport.scrollLeft = dir === -1 ? groupWidth : 0;

    let frameId;
    let lastTimestamp;

    const step = timestamp => {
      if (lastTimestamp !== undefined && !pausedRef.current) {
        const delta = ((timestamp - lastTimestamp) / 1000) * speed * dir;
        viewport.scrollLeft += delta;

        if (viewport.scrollLeft >= groupWidth) {
          viewport.scrollLeft -= groupWidth;
        } else if (viewport.scrollLeft <= 0) {
          viewport.scrollLeft += groupWidth;
        }
      }
      lastTimestamp = timestamp;
      frameId = requestAnimationFrame(step);
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [direction, speed]);

  const pause = () => {
    pausedRef.current = true;
  };
  const resume = () => {
    pausedRef.current = false;
  };

  return { viewportRef, groupRef, pause, resume };
}
