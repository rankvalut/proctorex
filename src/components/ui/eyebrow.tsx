"use client";

import { motion, useReducedMotion } from "motion/react";

/**
 * Animated section eyebrow (small uppercase label above headlines).
 * Slides in with a gold accent line that draws itself in.
 */
export function Eyebrow({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();

  const base = `inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em] text-leaf-600 ${className}`;

  if (reduce) {
    return (
      <p className={base}>
        <span className="h-0.5 w-7 rounded-full bg-gold" />
        {children}
      </p>
    );
  }

  return (
    <motion.p
      className={base}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
    >
      <motion.span
        className="h-0.5 w-7 rounded-full bg-gold"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.45, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
        style={{ transformOrigin: "left" }}
      />
      {children}
    </motion.p>
  );
}
