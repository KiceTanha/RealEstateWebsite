'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function ScrollRevealInit() {
  const pathname = usePathname();

  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    const frame = requestAnimationFrame(() => {
      const targets = Array.from(
        document.querySelectorAll<HTMLElement>('.card-dark, .section-title, [data-reveal]')
      );

      // Stagger sibling cards/items that share the same parent container
      const parents = new Set(targets.map((el) => el.parentElement));
      parents.forEach((parent) => {
        if (!parent) return;
        const siblings = targets.filter((el) => el.parentElement === parent);
        if (siblings.length > 1) {
          siblings.forEach((el, i) => {
            el.style.setProperty('--reveal-delay', `${i * 110}ms`);
          });
        }
      });

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const el = entry.target as HTMLElement;
              el.classList.remove('will-reveal');
              el.classList.add('revealed');
              observer!.unobserve(el);
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
      );

      targets.forEach((el) => {
        // Only hide elements that are genuinely below the fold
        if (el.getBoundingClientRect().top > window.innerHeight * 0.9) {
          el.classList.add('will-reveal');
        }
        observer!.observe(el);
      });
    });

    return () => {
      cancelAnimationFrame(frame);
      observer?.disconnect();
    };
  }, [pathname]);

  return null;
}
