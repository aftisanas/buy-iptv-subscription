import Image from "next/image";
import Link from "next/link";
import SectionLink from "./SectionLink";
import ChannelWallArt from "./art/ChannelWallArt";
import { ShieldCheck, Zap, Tv, Users } from "lucide-react";

/**
 * Two-column hero from `lg:` up, stacked on tablet and mobile.
 *
 * No canvas loop and no framer-motion — this is the LCP region and 70% of
 * clicks are mobile. The background is CSS (radial blooms plus a faint
 * programme-guide grid) and the artwork is inline SVG, so neither costs a
 * network request.
 */

const BADGES = [
  { icon: Zap, label: "Xtream codes in 60 seconds" },
  { icon: Tv, label: "37,000+ UK & global channels" },
  { icon: Users, label: "Extra connections available" },
  { icon: ShieldCheck, label: "30-day money-back" },
];

export default function Hero({
  eyebrow = "Buy IPTV UK · Instant automated delivery",
  title,
  standfirst = "Buy IPTV UK the fast way. Pick a plan, pay at the automated checkout, and your Xtream codes land in your inbox in under a minute — 37,000 live channels, 198,000 films and series, native 4K UHD, with extra connections available at checkout.",
  compact = false,
}: {
  eyebrow?: string;
  title?: React.ReactNode;
  standfirst?: string;
  compact?: boolean;
}) {
  return (
    <section className="night-field relative overflow-hidden">
      <div className="guide-grid absolute inset-0" aria-hidden="true" />
      <div
        className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-night to-transparent"
        aria-hidden="true"
      />

      <div
        className={`relative mx-auto max-w-6xl px-5 sm:px-8 ${
          compact ? "pt-28 pb-12 lg:pt-32 lg:pb-14" : "pt-24 pb-14 lg:pt-32 lg:pb-20"
        }`}
      >
        <div
          className={
            compact
              ? ""
              : "grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.92fr)] lg:gap-14"
          }
        >
          {/* Copy — centred while stacked, left-aligned once side by side */}
          <div className={compact ? "text-center" : "text-center lg:text-left"}>
            {!compact && (
              <Image
                src="/buy-iptv.webp"
                alt="Buy IPTV UK"
                width={64}
                height={64}
                priority
                className="rise rise-1 mx-auto mb-5 h-14 w-14 lg:mx-0 lg:h-16 lg:w-16"
              />
            )}

            <p className="rise rise-1 eyebrow">{eyebrow}</p>

            <h1
              className={`rise rise-2 mt-3 text-balance font-display text-white ${
                compact
                  ? "mx-auto max-w-4xl text-[2rem] sm:text-4xl lg:text-5xl"
                  : "text-[2.15rem] sm:text-5xl lg:text-[3.5rem]"
              }`}
            >
              {title ?? (
                <>
                  Buy IPTV UK — 37,000 Channels in 4K,{" "}
                  <span className="gold-text">Live in 60 Seconds</span>
                </>
              )}
            </h1>

            <p
              className={`rise rise-3 mt-5 text-[0.98rem] text-white/65 sm:text-base ${
                compact ? "mx-auto max-w-2xl" : "mx-auto max-w-xl lg:mx-0"
              }`}
            >
              {standfirst}
            </p>

            <div
              className={`rise rise-4 mt-8 flex flex-col gap-3 sm:flex-row ${
                compact
                  ? "items-center justify-center"
                  : "items-center justify-center lg:justify-start"
              }`}
            >
              <Link
                href="/checkout"
                className="w-full rounded-lg bg-gradient-to-r from-gold-bright to-gold px-8 py-4 text-center text-sm font-bold text-night shadow-lg shadow-gold/20 transition-all hover:brightness-110 sm:w-auto"
              >
                Get my codes — from £25.99
              </Link>
              <SectionLink
                href="/#plans"
                className="w-full rounded-lg bg-white/10 px-8 py-4 text-center text-sm font-bold text-white transition-colors hover:bg-white/15 sm:w-auto"
              >
                See the four plans
              </SectionLink>
            </div>

            <ul
              className={`rise rise-5 mt-8 flex flex-wrap items-center gap-x-6 gap-y-2.5 ${
                compact ? "justify-center" : "justify-center lg:justify-start"
              }`}
            >
              {BADGES.map((b) => (
                <li
                  key={b.label}
                  className="flex items-center gap-2 text-xs font-medium text-white/55"
                >
                  <b.icon className="h-4 w-4 text-gold-bright" aria-hidden="true" />
                  {b.label}
                </li>
              ))}
            </ul>
          </div>

          {/* Artwork — right column on desktop, below the copy when stacked */}
          {!compact && (
            <div className="rise rise-5 mx-auto w-full max-w-lg lg:max-w-none">
              <ChannelWallArt className="h-auto w-full" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
