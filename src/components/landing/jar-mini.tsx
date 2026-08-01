/**
 * Compact PROCTOREX jar illustration (standalone SVG) used inside pricing
 * cards and on the section add-to-cart CTAs. Gradients are prefixed `jm-`
 * to avoid id collisions when multiple instances render on a page.
 */
export function JarMini({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 140" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="jm-lid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#fffefa" />
          <stop offset="45%" stopColor="#f1eee5" />
          <stop offset="100%" stopColor="#d7d4c9" />
        </linearGradient>
        <linearGradient id="jm-body" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#f4ecdd" />
          <stop offset="28%" stopColor="#fffdf7" />
          <stop offset="62%" stopColor="#faf3e6" />
          <stop offset="100%" stopColor="#ece1cc" />
        </linearGradient>
      </defs>

      {/* lid */}
      <rect x="26" y="8" width="48" height="20" rx="5" fill="url(#jm-lid)" />
      <rect x="26" y="24" width="48" height="6" rx="3" fill="#c9c6ba" />
      {/* neck */}
      <rect x="32" y="28" width="36" height="14" rx="4" fill="#e9dfc9" />
      {/* body */}
      <path
        d="M30 40 C 24 52 22 78 26 100 C 28 118 40 128 50 128 C 60 128 72 118 74 100 C 78 78 76 52 70 40 Z"
        fill="url(#jm-body)"
      />
      <path
        d="M33 42 C 27 56 25 80 28 100 C 29 112 35 120 42 124"
        fill="none"
        stroke="#ffffff"
        strokeOpacity="0.7"
        strokeWidth="5"
        strokeLinecap="round"
      />
      {/* label */}
      <rect x="36" y="56" width="28" height="44" rx="4" fill="#fffdf6" stroke="#efe4cf" strokeWidth="1" />
      <rect x="42" y="64" width="16" height="1.5" fill="#c9a24b" />
      <text
        x="50"
        y="78"
        textAnchor="middle"
        fontSize="7"
        fontWeight="700"
        fill="#1e5b3e"
        fontFamily="Georgia, serif"
        letterSpacing="0.3"
      >
        PROCTOREX
      </text>
      <text
        x="50"
        y="90"
        textAnchor="middle"
        fontSize="4"
        fontWeight="600"
        fill="#6b6b5e"
        fontFamily="Georgia, serif"
      >
        CREMĂ NATURALĂ
      </text>
    </svg>
  );
}
