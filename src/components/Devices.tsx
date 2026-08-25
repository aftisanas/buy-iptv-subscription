import { DEVICES } from "@/lib/constants";
import { deviceIconMap } from "./art/DeviceIcons";

/**
 * Device grid using monochrome silhouettes in currentColor.
 *
 * Device shapes and generic marks only — no colour trade dress and no
 * reproduced trademarks, for the same reason the hero carries no broadcaster
 * logos.
 */
export default function Devices() {
  return (
    <section id="devices" className="border-b border-rule bg-night py-16 text-white lg:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <p className="eyebrow">Compatibility</p>
          <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl lg:text-[2.75rem]">
            Buy IPTV UK and Watch on Any Device You Own
          </h2>
          <p className="mt-4 text-white/65">
            Your Xtream codes work with any M3U or Xtream-compatible player, so
            when you buy IPTV UK there is no box to buy and nothing to install
            beyond a free app.
          </p>
        </div>

        <ul className="mt-12 grid grid-cols-2 gap-px border border-white/10 bg-white/10 sm:grid-cols-3 lg:grid-cols-6">
          {DEVICES.map((device) => {
            const Icon = deviceIconMap[device.icon];
            return (
              <li
                key={device.name}
                className="group flex flex-col items-center gap-3 bg-night px-4 py-8 text-center transition-colors hover:bg-night-2"
              >
                {Icon && (
                  <Icon className="h-9 w-9 text-white/45 transition-colors group-hover:text-gold-bright" />
                )}
                <span className="text-xs font-semibold text-white/70">
                  {device.name}
                </span>
              </li>
            );
          })}
        </ul>

        <p className="mt-6 text-sm text-white/45">
          Recommended players: IPTV Smarters Pro, TiviMate, XCIPTV, Smart IPTV.
          We will walk you through setup on WhatsApp if it does not go smoothly.
        </p>
      </div>
    </section>
  );
}
