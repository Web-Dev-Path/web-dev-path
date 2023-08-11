import { useState, useEffect, useRef } from 'react';

export const useIntersect = ({ root = null, rootMargin, threshold = 0 }) => {
  const [entry, setEntry] = useState<any>({});
  const [node, setNode] = useState<any>(null);

  let observer = useRef<any>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    observer = new window.IntersectionObserver(
      ([entry]) => {
        setEntry(entry);
      },
      { root, rootMargin, threshold }
    );

    if (node) {
      observer.observe(node);
    }
    return () => {
      observer.disconnect();
      if (node) {
        observer.unobserve(node);
      }
    };
  }, [node, root, rootMargin, threshold]);

  return [setNode, entry];
};
