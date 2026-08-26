/**
 * Hero artwork: a channel-wall mosaic — a grid of abstract channel tiles with
 * one featured "now playing" card lifted out of it, plus floating chips.
 *
 * Deliberately NOT a TV/tablet/phone composition: that silhouette is what the
 * sister property uses and this site should not read as the same template.
 * Placeholder until the new brand artwork lands.
 *
 * All shapes drawn in code — no broadcaster logos, no film posters, no stock
 * photography, no network request.
 */
export default function ChannelWallArt({ className }: { className?: string }) {
  const tiles = [
    { x: 0, y: 0, w: 96, h: 62, o: 0.16 },
    { x: 104, y: 0, w: 96, h: 62, o: 0.1 },
    { x: 208, y: 0, w: 96, h: 62, o: 0.14 },
    { x: 312, y: 0, w: 96, h: 62, o: 0.08 },
    { x: 0, y: 70, w: 96, h: 62, o: 0.09 },
    { x: 312, y: 70, w: 96, h: 62, o: 0.13 },
    { x: 0, y: 140, w: 96, h: 62, o: 0.12 },
    { x: 104, y: 140, w: 96, h: 62, o: 0.08 },
    { x: 208, y: 140, w: 96, h: 62, o: 0.15 },
    { x: 312, y: 140, w: 96, h: 62, o: 0.1 },
    { x: 0, y: 210, w: 96, h: 62, o: 0.07 },
    { x: 104, y: 210, w: 96, h: 62, o: 0.12 },
    { x: 208, y: 210, w: 96, h: 62, o: 0.09 },
    { x: 312, y: 210, w: 96, h: 62, o: 0.14 },
  ];

  return (
    <svg
      viewBox="0 0 460 300"
      role="img"
      aria-label="Buy IPTV UK — 37,000 live channels in 4K UHD"
      className={className}
    >
      <defs>
        <linearGradient id="cw-feature" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f0a930" />
          <stop offset="100%" stopColor="#b8791a" />
        </linearGradient>
        <radialGradient id="cw-bloom" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#f0a930" stopOpacity="0.24" />
          <stop offset="100%" stopColor="#f0a930" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="230" cy="150" rx="240" ry="170" fill="url(#cw-bloom)" />

      {/* Background channel grid */}
      <g transform="translate(26, 14)">
        {tiles.map((t) => (
          <g key={`${t.x}-${t.y}`}>
            <rect
              x={t.x}
              y={t.y}
              width={t.w}
              height={t.h}
              rx="8"
              fill="#ffffff"
              opacity={t.o}
            />
            <rect
              x={t.x + 10}
              y={t.y + t.h - 18}
              width={t.w * 0.45}
              height="6"
              rx="3"
              fill="#ffffff"
              opacity={t.o + 0.1}
            />
          </g>
        ))}
      </g>

      {/* Featured "now playing" card, lifted out of the grid */}
      <g transform="translate(130, 84)">
        <rect
          x="0"
          y="0"
          width="200"
          height="132"
          rx="14"
          fill="#17152c"
          stroke="#f0a930"
          strokeOpacity="0.5"
          strokeWidth="1.5"
        />
        <rect x="0" y="0" width="200" height="132" rx="14" fill="url(#cw-feature)" opacity="0.14" />

        <circle cx="100" cy="56" r="26" fill="url(#cw-feature)" />
        <path d="M92 44l20 12-20 12z" fill="#0b0a1a" />

        <rect x="24" y="96" width="112" height="8" rx="4" fill="#ffffff" opacity="0.5" />
        <rect x="24" y="112" width="70" height="6" rx="3" fill="#ffffff" opacity="0.24" />

        <rect x="150" y="94" width="30" height="26" rx="6" fill="#f0a930" />
        <text
          x="165"
          y="111"
          textAnchor="middle"
          fill="#0b0a1a"
          fontSize="11"
          fontWeight="800"
          fontFamily="system-ui, sans-serif"
        >
          4K
        </text>
      </g>

      {/* Floating chips */}
      <g fontFamily="system-ui, sans-serif">
        <rect x="6" y="42" width="112" height="32" rx="16" fill="#0b0a1a" stroke="#ffffff" strokeOpacity="0.16" />
        <text x="62" y="63" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="700">
          37,000+
        </text>

        <rect x="344" y="240" width="96" height="32" rx="16" fill="#d93a2b" />
        <text x="392" y="261" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="700">
          4K UHD
        </text>
      </g>
    </svg>
  );
}
