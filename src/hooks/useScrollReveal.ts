"use client"

import { useEffect, useRef } from "react";

interface Options {
  /** Reveal only once (never remove the class again). */
  once?: boolean;
  threshold?: number;
  visibleClass?: string;
}

/**
 * Adds a "visible" class to the referenced element when it enters the viewport
 * and removes it when scrolling back up (unless `once` is set).
 */
export function useScrollReveal<T extends HTMLElement>({
  once = false,
  threshold = 0.15,
  visibleClass = "visible",
}: Options = {}) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      el.classList.add(visibleClass);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(visibleClass);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            entry.target.classList.remove(visibleClass);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -60px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once, threshold, visibleClass]);

  return ref;
}
