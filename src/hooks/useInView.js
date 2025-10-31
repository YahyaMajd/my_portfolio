import { useEffect, useRef, useState } from 'react';

export default function useInView({ threshold = 0.2, root = null, rootMargin = '0px', once = true } = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    // Server-side or reduced motion fallback
    if (typeof window === 'undefined') {
      setInView(true);
      return;
    }

    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setInView(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            if (once && observer && el) observer.unobserve(el);
          } else {
            if (!once) setInView(false);
          }
        });
      },
      { threshold, root, rootMargin }
    );

    observer.observe(el);

    return () => {
      try {
        observer.disconnect();
      } catch (e) {
        // ignore
      }
    };
  }, [threshold, root, rootMargin, once]);

  return [ref, inView];
}
