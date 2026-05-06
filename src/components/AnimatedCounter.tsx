import { useEffect, useRef, useState } from "react";

interface CounterProps {
  value: string; // e.g. "20+", "500+", "50+"
  duration?: number;
  className?: string;
}

const parse = (v: string) => {
  const match = v.match(/(\d+)/);
  const num = match ? parseInt(match[1], 10) : 0;
  const prefix = match ? v.slice(0, match.index) : "";
  const suffix = match ? v.slice((match.index || 0) + match[0].length) : v;
  return { num, prefix, suffix };
};

const AnimatedCounter = ({ value, duration = 3200, className }: CounterProps) => {
  const { num, prefix, suffix } = parse(value);
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const t = Math.min(1, (now - start) / duration);
              const eased = 1 - Math.pow(1 - t, 3);
              setDisplay(Math.round(eased * num));
              if (t < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [num, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
};

export default AnimatedCounter;
