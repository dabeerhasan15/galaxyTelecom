"use client";

import {
  type CSSProperties,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

export type ScrollRevealDirection = "left" | "right" | "top" | "bottom";

type Props = {
  children: ReactNode;
  direction?: ScrollRevealDirection;
  /** Stagger siblings with ms delay (only applies when revealed). */
  delayMs?: number;
  className?: string;
};

export function ScrollReveal({
  children,
  direction = "bottom",
  delayMs = 0,
  className = "",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -32px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const style = {
    ...(delayMs > 0 ? { "--sr-delay": `${delayMs}ms` } : {}),
  } as CSSProperties;

  return (
    <div
      ref={ref}
      className={`scroll-reveal scroll-reveal--${direction} ${
        visible ? "is-visible" : ""
      } ${className}`.trim()}
      style={style}
    >
      {children}
    </div>
  );
}
