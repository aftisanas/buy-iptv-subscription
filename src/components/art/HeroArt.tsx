/**
 * Hero composition: a stylised TV running a programme guide, with a tablet and
 * phone beside it and floating quality chips.
 *
 * All shapes, drawn in code — no broadcaster logos, no film posters, no stock
 * photography. That constraint is not cosmetic: the sister property
 * buy-iptv-uk.com lost its whole index overnight after a DMCA event, and logo
 * walls are the highest-signal trigger for that. This gives the section real
 * imagery without the exposure.
 */
export default function HeroArt({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 620 460"
      role="img"
      aria-label="Buy IPTV UK — 4K UHD streaming on TV, tablet and phone"
      className={className}
    >
      <defs>
        <linearGradient id="ha-screen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#241f3f" />
          <stop offset="60%" stopColor="#17152c" />
          <stop offset="100%" stopColor="#0b0a1a" />
        </linearGradient>
        <linearGradient id="ha-bezel" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2e2850" />
          <stop offset="100%" stopColor="#12101f" />
        </linearGradient>
        <linearGradient id="ha-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f0a930" />
          <stop offset="100%" stopColor="#b8791a" />
        </linearGradient>
        <radialGradient id="ha-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#f0a930" stopOpacity="0.34" />
          <stop offset="100%" stopColor="#f0a930" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse cx="310" cy="250" rx="290" ry="200" fill="url(#ha-glow)" />

      {/* ── Television ── */}
      <rect x="92" y="46" width="436" height="266" rx="12" fill="url(#ha-bezel)" />
      <rect x="104" y="58" width="412" height="230" rx="6" fill="url(#ha-screen)" />

      {/* Programme-guide rows — the "IPTV" signal, abstract by design */}
      <g opacity="0.95">
        {[0, 1, 2, 3].map((row) => (
          <g key={row} transform={`translate(120, ${76 + row * 52})`}>
            <rect width="64" height="38" rx="4" fill="#f0a930" opacity={0.9 - row * 0.17} />
            <rect x="74" width="122" height="10" rx="5" fill="#ffffff" opacity={0.34 - row * 0.05} />
            <rect x="74" y="18" width="86" height="8" rx="4" fill="#ffffff" opacity={0.2 - row * 0.03} />
            <rect x="212" width="72" height="38" rx="4" fill="#ffffff" opacity={0.11} />
            <rect x="292" width="88" height="38" rx="4" fill="#ffffff" opacity={0.07} />
          </g>
        ))}
      </g>

      {/* Play affordance */}
      <circle cx="310" cy="173" r="38" fill="url(#ha-gold)" />
      <path d="M299 156l26 17-26 17z" fill="#0b0a1a" />

      {/* Stand */}
      <rect x="286" y="312" width="48" height="30" fill="#221d3d" />
      <rect x="236" y="342" width="148" height="11" rx="5.5" fill="#2e2850" />

      {/* ── Tablet ── */}
      <rect x="16" y="176" width="106" height="150" rx="10" fill="url(#ha-bezel)" />
      <rect x="24" y="184" width="90" height="134" rx="5" fill="#17152c" />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect
          key={i}
          x="32"
          y={194 + i * 25}
          width={i % 2 ? 52 : 70}
          height="14"
          rx="3"
          fill="#f0a930"
          opacity={0.62 - i * 0.09}
        />
      ))}

      {/* ── Phone ── */}
      <rect x="512" y="204" width="82" height="152" rx="13" fill="url(#ha-bezel)" />
      <rect x="519" y="212" width="68" height="136" rx="8" fill="#17152c" />
      <rect x="527" y="222" width="52" height="34" rx="4" fill="#f0a930" opacity="0.82" />
      {[0, 1, 2, 3].map((i) => (
        <rect
          key={i}
          x="527"
          y={266 + i * 20}
          width={i % 2 ? 38 : 52}
          height="11"
          rx="3"
          fill="#ffffff"
          opacity={0.22 - i * 0.04}
        />
      ))}

      {/* ── Floating chips ── */}
      <g className="tabular">
        <rect x="428" y="18" width="94" height="34" rx="17" fill="#0b0a1a" stroke="#f0a930" strokeWidth="1.5" />
        <text x="475" y="40" textAnchor="middle" fill="#f0a930" fontSize="15" fontWeight="700" fontFamily="system-ui, sans-serif">
          4K UHD
        </text>

        <rect x="14" y="92" width="118" height="34" rx="17" fill="#0b0a1a" stroke="#ffffff" strokeOpacity="0.25" strokeWidth="1.5" />
        <text x="73" y="114" textAnchor="middle" fill="#ffffff" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">
          37,000+
        </text>

        <rect x="446" y="378" width="132" height="34" rx="17" fill="#d93a2b" />
        <text x="512" y="400" textAnchor="middle" fill="#ffffff" fontSize="14" fontWeight="700" fontFamily="system-ui, sans-serif">
          5 SCREENS
        </text>
      </g>
    </svg>
  );
}
