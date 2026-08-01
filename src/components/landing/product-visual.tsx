/**
 * PROCTOREX product scene — an SVG recreation of the source advertisement's
 * hero image: a cream jar ("PROCTOREX Cremă naturală 30 g") on a stone slab,
 * surrounded by calendula flowers, lavender sprigs and two softgel capsules.
 *
 * Gradients are prefixed to avoid id collisions when embedded on a page.
 */

export function ProductVisual({
  className,
  ariaLabel = "Borcan PROCTOREX Cremă naturală 30 g, pe o piatră, cu flori de calendula, lavandă și capsule",
}: {
  className?: string;
  ariaLabel?: string;
}) {
  return (
    <svg
      viewBox="0 0 720 640"
      role="img"
      aria-label={ariaLabel}
      className={className}
    >
      <defs>
        {/* soft cream glow behind the product */}
        <radialGradient id="px-glow" cx="50%" cy="46%" r="55%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
          <stop offset="70%" stopColor="#fbf3e3" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#fbf6ec" stopOpacity="0" />
        </radialGradient>

        {/* stone slab */}
        <linearGradient id="px-stone" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e3dccb" />
          <stop offset="55%" stopColor="#d5ccb8" />
          <stop offset="100%" stopColor="#c2b79f" />
        </linearGradient>
        <linearGradient id="px-stone-dark" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#cfc4ab" />
          <stop offset="100%" stopColor="#a99e83" />
        </linearGradient>

        {/* jar */}
        <linearGradient id="px-lid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2f7a54" />
          <stop offset="45%" stopColor="#1e5b3e" />
          <stop offset="100%" stopColor="#153f2d" />
        </linearGradient>
        <linearGradient id="px-body" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#f4ecdd" />
          <stop offset="28%" stopColor="#fffdf7" />
          <stop offset="62%" stopColor="#faf3e6" />
          <stop offset="100%" stopColor="#ece1cc" />
        </linearGradient>
        <linearGradient id="px-neck" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f0e8d8" />
          <stop offset="100%" stopColor="#ddd0b8" />
        </linearGradient>

        {/* petal + center for calendula */}
        <radialGradient id="px-petal" cx="50%" cy="30%" r="80%">
          <stop offset="0%" stopColor="#f7b54d" />
          <stop offset="70%" stopColor="#e88f2a" />
          <stop offset="100%" stopColor="#c96f18" />
        </radialGradient>
        <radialGradient id="px-center" cx="40%" cy="35%" r="70%">
          <stop offset="0%" stopColor="#a86b22" />
          <stop offset="100%" stopColor="#7c4a14" />
        </radialGradient>

        {/* lavender buds */}
        <linearGradient id="px-lav" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#a395d4" />
          <stop offset="100%" stopColor="#6f5ea8" />
        </linearGradient>

        {/* capsules */}
        <linearGradient id="px-cap-a" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f5c76b" />
          <stop offset="100%" stopColor="#d99a2e" />
        </linearGradient>
        <linearGradient id="px-cap-b" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#b7d9bd" />
          <stop offset="100%" stopColor="#7cae85" />
        </linearGradient>

        <filter id="px-soft" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="10" />
        </filter>
      </defs>

      {/* warm glow */}
      <ellipse cx="360" cy="330" rx="330" ry="270" fill="url(#px-glow)" />

      {/* stone slab */}
      <g>
        <path
          d="M150 500 C 120 480 96 470 92 442 C 88 414 118 400 150 392
             C 130 360 148 330 190 322 C 232 314 268 330 310 322
             C 360 312 420 316 470 330 C 514 342 556 336 596 352
             C 636 368 652 406 636 442 C 622 474 596 488 566 500
             C 520 518 470 528 360 530 C 250 532 200 516 150 500 Z"
          fill="url(#px-stone)"
        />
        <path
          d="M150 500 C 120 480 96 470 92 442 C 88 414 118 400 150 392
             C 130 360 148 330 190 322"
          fill="none"
          stroke="url(#px-stone-dark)"
          strokeOpacity="0.6"
          strokeWidth="3"
        />
        <ellipse cx="360" cy="545" rx="235" ry="30" fill="#1b2b22" opacity="0.12" filter="url(#px-soft)" />
      </g>

      {/* lavender sprig (left) */}
      <g>
        <path
          d="M120 470 C 128 420 148 380 178 348"
          stroke="#4c6b3c"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
        />
        {[
          [136, 432], [148, 410], [160, 390], [170, 372],
          [128, 448], [142, 424], [154, 402],
        ].map(([x, y], i) => (
          <ellipse
            key={`l${i}`}
            cx={x}
            cy={y}
            rx="7"
            ry="12"
            transform={`rotate(${i % 2 ? 30 : -30} ${x} ${y})`}
            fill="url(#px-lav)"
          />
        ))}
        <ellipse cx="178" cy="350" rx="6" ry="9" transform="rotate(-40 178 350)" fill="url(#px-lav)" />
      </g>

      {/* green leaves behind the jar */}
      <g fill="#5f8d70">
        <path d="M300 430 C 258 400 240 360 252 320 C 296 336 312 386 300 430 Z" />
        <path d="M420 438 C 464 412 492 378 490 340 C 444 346 422 396 420 438 Z" />
      </g>

      {/* calendula flowers on the stone */}
      <Calendula cx={252} cy={474} r={30} />
      <Calendula cx={486} cy={486} r={24} scale={0.8} />
      <Calendula cx={566} cy={430} r={20} scale={0.65} />

      {/* two softgel capsules */}
      <g transform="rotate(-14 536 466)">
        <g>
          <rect x="502" y="452" width="34" height="26" rx="13" fill="url(#px-cap-a)" />
          <rect x="536" y="452" width="32" height="26" rx="13" fill="url(#px-cap-b)" />
          <rect x="502" y="452" width="66" height="6" rx="3" fill="#ffffff" opacity="0.55" />
        </g>
      </g>

      {/* jar */}
      <g>
        {/* lid */}
        <rect x="296" y="252" width="128" height="52" rx="14" fill="url(#px-lid)" />
        <rect x="292" y="248" width="136" height="12" rx="6" fill="#2f7a54" />
        <rect x="296" y="280" width="128" height="10" rx="5" fill="#123828" />
        {/* neck */}
        <rect x="312" y="300" width="96" height="34" rx="8" fill="url(#px-neck)" />
        <rect x="312" y="300" width="96" height="6" fill="#ffffff" opacity="0.5" />
        {/* body */}
        <path
          d="M288 330
             C 272 356 268 420 272 470
             C 276 500 292 516 320 518
             L 400 518
             C 428 516 444 500 448 470
             C 452 420 448 356 432 330 Z"
          fill="url(#px-body)"
        />
        <path
          d="M296 336 C 284 360 280 420 283 468 C 285 488 292 504 312 512"
          fill="none"
          stroke="#ffffff"
          strokeOpacity="0.75"
          strokeWidth="10"
          strokeLinecap="round"
        />
        {/* label */}
        <rect x="300" y="352" width="120" height="122" rx="12" fill="#fffdf6" stroke="#efe4cf" strokeWidth="1.5" />
        <rect x="312" y="366" width="96" height="2" fill="#c9a24b" />
        <text
          x="360"
          y="398"
          textAnchor="middle"
          fontFamily="var(--font-outfit), sans-serif"
          fontSize="22"
          fontWeight="700"
          fill="#1e5b3e"
          letterSpacing="0.5"
        >
          PROCTOREX
        </text>
        <text
          x="360"
          y="418"
          textAnchor="middle"
          fontFamily="var(--font-outfit), sans-serif"
          fontSize="11"
          fontWeight="600"
          fill="#6b6b5e"
          letterSpacing="0.4"
        >
          CREMĂ NATURALĂ
        </text>
        <text
          x="360"
          y="448"
          textAnchor="middle"
          fontFamily="var(--font-nunito-sans), sans-serif"
          fontSize="12"
          fontWeight="700"
          fill="#43594c"
        >
          30 g
        </text>
        <rect x="312" y="456" width="96" height="2" fill="#c9a24b" />
      </g>
    </svg>
  );
}

function Calendula({
  cx,
  cy,
  r,
  scale = 1,
}: {
  cx: number;
  cy: number;
  r: number;
  scale?: number;
}) {
  const petals = Array.from({ length: 12 });
  return (
    <g transform={`translate(${cx} ${cy}) scale(${scale})`}>
      <ellipse cx={0} cy={r + 4} rx={r + 16} ry={9} fill="#1b2b22" opacity="0.14" />
      {petals.map((_, i) => (
        <ellipse
          key={i}
          cx={0}
          cy={-r * 0.78}
          rx={r * 0.32}
          ry={r * 0.86}
          fill="url(#px-petal)"
          transform={`rotate(${(360 / petals.length) * i})`}
        />
      ))}
      <circle r={r * 0.42} fill="url(#px-center)" />
      <circle r={r * 0.18} fill="#5c3710" opacity="0.5" />
    </g>
  );
}
