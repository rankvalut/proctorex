import type { SVGProps } from "react";

/**
 * Stylized botanical ornaments, drawn as simple geometric marks.
 * Used as background decoration on the cream sections (matching the leaf
 * graphics in the source advertisement).
 */

export function Leaf(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M3 29C3 16 9 5 29 3c0 0 1 0 0 0C25 20 15 27 3 29Z"
        fill="currentColor"
        opacity="0.9"
      />
      <path
        d="M3 29C10 21 17 13 29 3"
        stroke="#0e2b1f"
        strokeOpacity="0.18"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function LeafSprig(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 120 120" fill="none" aria-hidden="true" {...props}>
      {/* stem */}
      <path
        d="M96 6C84 26 66 58 22 112"
        stroke="currentColor"
        strokeOpacity="0.55"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      {/* leaves */}
      <path
        d="M86 24c-14-4-25-12-30-22 15-2 27 5 30 22Z"
        fill="currentColor"
      />
      <path
        d="M70 44c-15-1-28-7-35-16 14-5 28 0 35 16Z"
        fill="currentColor"
        opacity="0.82"
      />
      <path
        d="M54 64c-14 1-27-3-35-11 12-6 27-4 35 11Z"
        fill="currentColor"
        opacity="0.66"
      />
      <path
        d="M38 86c-12 2-24-1-32-8 10-6 24-5 32 8Z"
        fill="currentColor"
        opacity="0.5"
      />
    </svg>
  );
}

export function LeafCluster(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 140 140" fill="none" aria-hidden="true" {...props}>
      <g transform="rotate(-20 70 70)">
        <LeafSprig className="h-full w-full" />
      </g>
      <g transform="rotate(130 70 70) scale(0.8)" opacity="0.7">
        <LeafSprig className="h-full w-full" />
      </g>
    </svg>
  );
}
