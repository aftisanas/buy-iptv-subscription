/**
 * Monochrome device silhouettes, drawn in `currentColor` so the parent chip
 * controls hue and hover. Device shapes and generic marks only — no colour
 * trade dress, no reproduced trademarks.
 */

type IconProps = { className?: string };

export const FireStickIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 32 32" className={className} aria-hidden="true" fill="currentColor">
    <path d="M18.1 2c.8 3.7-.7 5.9-2.5 8.1-1.9 2.4-3.8 4.8-3.8 8.3 0 5 3.5 9.1 8.8 9.1 6.3 0 9.9-4.6 9.9-10.1 0-3.2-1.5-6.3-3.8-7.8-.5 2.1-2 3.4-3.8 3.6C24.4 10 22.5 5.8 18.1 2Zm3 12.6c-.5 2.5-2.6 3.6-2.6 6 0 1.9 1.7 3.6 3.8 3.6s4-1.7 4-3.9c0-2.5-2.3-4-5.2-5.7Z" />
    <path d="M4 19.6c0 3.6 1.9 6.3 4.8 7.8-1.7-2.1-2.5-4.6-2.5-7.4 0-3.4 1.5-6.1 3.2-8.4C6.6 13.3 4 16.3 4 19.6Z" />
  </svg>
);

export const SmartTvIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 32 32" className={className} aria-hidden="true" fill="currentColor">
    <path d="M3 5h26a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm2 3v12h22V8H5Z" />
    <path d="M10 26h12v2.4H10z" />
  </svg>
);

export const MobileIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 32 32" className={className} aria-hidden="true" fill="currentColor">
    <path d="M9 1.5h14A2.5 2.5 0 0 1 25.5 4v24a2.5 2.5 0 0 1-2.5 2.5H9A2.5 2.5 0 0 1 6.5 28V4A2.5 2.5 0 0 1 9 1.5Zm0 3v23h14v-23H9Z" />
    <circle cx="16" cy="25.4" r="1.5" />
  </svg>
);

export const DesktopIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 32 32" className={className} aria-hidden="true" fill="currentColor">
    <path d="M2.6 4h26.8a1.6 1.6 0 0 1 1.6 1.6v14.8a1.6 1.6 0 0 1-1.6 1.6H2.6A1.6 1.6 0 0 1 1 20.4V5.6A1.6 1.6 0 0 1 2.6 4Zm1.4 3v12h24V7H4Z" />
    <path d="M11 24.6h10l1.6 3.4H9.4z" />
  </svg>
);

export const SetTopBoxIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 32 32" className={className} aria-hidden="true" fill="currentColor">
    <path d="M3 10h26a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2Zm1.8 3.2v6.6h22.4v-6.6H4.8Z" />
    <circle cx="24.6" cy="16.5" r="1.7" />
    <path d="M6.6 15.4h9.6v2.2H6.6z" />
  </svg>
);

export const StreamingBoxIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 32 32" className={className} aria-hidden="true" fill="currentColor">
    <path d="M16 3.4c5.2 0 9.6 2 9.6 4.6v16c0 2.6-4.4 4.6-9.6 4.6S6.4 26.6 6.4 24V8c0-2.6 4.4-4.6 9.6-4.6Zm0 2.8c-4 0-6.8 1.3-6.8 1.8S12 9.8 16 9.8s6.8-1.3 6.8-1.8S20 6.2 16 6.2Zm-6.8 5.5V24c0 .5 2.8 1.8 6.8 1.8s6.8-1.3 6.8-1.8V11.7c-1.9.9-4.4 1.3-6.8 1.3s-4.9-.4-6.8-1.3Z" />
    <circle cx="16" cy="19" r="2.6" />
  </svg>
);

/** Maps the DEVICES constant's icon keys onto the silhouettes above. */
export const deviceIconMap: Record<string, (p: IconProps) => React.ReactElement> = {
  Flame: FireStickIcon,
  Tv: SmartTvIcon,
  Smartphone: MobileIcon,
  Monitor: DesktopIcon,
  Box: SetTopBoxIcon,
  Airplay: StreamingBoxIcon,
};
