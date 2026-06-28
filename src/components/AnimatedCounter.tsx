"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface Props {
  value: string;
  duration?: number;
}

export default function AnimatedCounter({ value, duration = 1500 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    const numericMatch = value.match(/^([\d.]+)(.*)$/);
    if (!numericMatch) {
      setDisplay(value);
      return;
    }

    const target = parseFloat(numericMatch[1]);
    const suffix = numericMatch[2];
    const isFloat = value.includes(".");
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;

      if (isFloat) {
        setDisplay(current.toFixed(1) + suffix);
      } else {
        setDisplay(Math.floor(current) + suffix);
      }

      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return <span ref={ref}>{display}</span>;
}
