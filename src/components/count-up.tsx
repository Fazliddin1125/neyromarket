"use client";

import { animate, useInView, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

type Props = {
  to: number;
  suffix?: string;
  prefix?: string;
};

export function CountUp({ to, suffix = "", prefix = "" }: Props) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-30px" });
  const value = useMotionValue(0);
  const rounded = useTransform(() => Math.round(value.get()));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(value, to, { duration: 1.7, ease: "easeOut" });
    return () => controls.stop();
  }, [inView, to, value]);

  return (
    <span ref={ref}>
      {prefix}
      {rounded.get().toLocaleString("ru-RU")}
      {suffix}
    </span>
  );
}
