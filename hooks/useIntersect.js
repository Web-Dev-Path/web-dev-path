import { useState, useEffect, useRef } from 'react';

export const useIntersect = ({ root = null, rootMargin, threshold = 0 }) => {
  const [entry, setEntry] = useState({});
  const [node, setNode] = useState(null);

  const observer = useRef(null);

  useEffect(() => {
    //if (observer.current) observer.current.disconnect();

    observer = new window.IntersectionObserver(
      ([entry]) => {
        setEntry(entry);
      },
      { root, rootMargin, threshold }
    );

    //const { current: currentObserver } = observer;
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
