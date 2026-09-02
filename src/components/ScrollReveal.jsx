import { useEffect, useRef, useState } from 'react';

const revealVariants = new Set(['fadeUp', 'fadeIn', 'scaleIn', 'slideRight', 'slideLeft']);

export default function ScrollReveal({
  children,
  variant = 'fadeUp',
  delay = 0,
  duration = 0.6,
  className = '',
  once = true,
}) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (once) observer.disconnect();
      } else if (!once) {
        setIsVisible(false);
      }
    }, { rootMargin: '-50px' });

    observer.observe(element);
    return () => observer.disconnect();
  }, [once]);

  return (
    <div
      ref={elementRef}
      className={`scroll-reveal scroll-reveal-${revealVariants.has(variant) ? variant : 'fadeUp'} ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{ '--reveal-duration': `${duration}s`, '--reveal-delay': `${delay}s` }}
    >
      {children}
    </div>
  );
}
