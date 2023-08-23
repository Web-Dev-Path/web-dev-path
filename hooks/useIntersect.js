import { useState, useEffect, useRef } from 'react';

export const useIntersect = ({ root = null, rootMargin }) => {
  const [entry, setEntry] = useState({});
  const [node, setNode] = useState(null);

  let observer = useRef(null);
  const threshold = Array.from(
    { length: 20 },
    (_, index) => 0.05 + index * 0.05
  );

  useEffect(() => {
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
  }, [node, root, rootMargin]);

  return [setNode, entry];
};
