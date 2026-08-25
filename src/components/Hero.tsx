import Image from "next/image";
import Link from "next/link";
import SectionLink from "./SectionLink";
import HeroArt from "./art/HeroArt";
import { ShieldCheck, Zap, Tv, Users } from "lucide-react";

/**
 * Centred hero on a night field. No canvas loop, no framer-motion — this is
 * the LCP region and 70% of clicks are mobile. The background is CSS
 * (radial blooms + a faint programme-guide grid) and the artwork is inline
 * SVG, so neither costs a network request.
 */

const BADGES = [
  { icon: Zap, label: "Xtream codes in 60 seconds" },
  { icon: Tv, label: "37,000+ UK & global channels" },
  { icon: Users, label: "5 screens included" },
  { icon: ShieldCheck, label: "30-day money-back" },
];

export default function Hero({
  eyebrow = "Buy IPTV UK · Instant automated delivery",
  title,
  standfirst = "Buy IPTV UK the fast way. Pick a plan, pay at the automated checkout, and your Xtream codes land in your inbox in under a minute — 37,000 live channels, 198,000 films and series, native 4K UHD on five screens at once.",
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
        className={`relative mx-auto max-w-5xl px-5 text-center sm:px-8 ${
          compact ? "pt-28 pb-12 lg:pt-32 lg:pb-14" : "pt-24 pb-14 lg:pt-32 lg:pb-16"
        }`}
      >
        {!compact && (
          <Image
            src="/buy-iptv.webp"
            alt="Buy IPTV UK"
            width={72}
            height={72}
            priority
            className="rise rise-1 mx-auto mb-5 h-16 w-16 lg:h-[72px] lg:w-[72px]"
          />
        )}

        <p className="rise rise-1 eyebrow">{eyebrow}</p>

        <h1
          className={`rise rise-2 mx-auto mt-3 max-w-4xl text-balance font-display text-white ${
            compact
              ? "text-[2rem] sm:text-4xl lg:text-5xl"
              : "text-[2.15rem] sm:text-5xl lg:text-[3.75rem]"
          }`}
        >
          {title ?? (
            <>
              Buy IPTV UK — 37,000 Channels in 4K,{" "}
              <span className="gold-text">Live in 60 Seconds</span>
            </>
          )}
        </h1>

        <p className="rise rise-3 mx-auto mt-5 max-w-2xl text-[0.98rem] text-white/65 sm:text-base">
          {standfirst}
        </p>

        <div className="rise rise-4 mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/checkout"
            className="w-full bg-gradient-to-r from-gold-bright to-gold px-8 py-4 text-center text-sm font-extrabold text-night shadow-lg shadow-gold/20 transition-all hover:brightness-110 sm:w-auto"
          >
            Buy IPTV UK Now — From £25.99
          </Link>
          <SectionLink
            href="/#plans"
            className="w-full border border-white/20 px-8 py-4 text-center text-sm font-bold text-white transition-colors hover:border-gold-bright hover:text-gold-bright sm:w-auto"
          >
            Compare all four plans
          </SectionLink>
        </div>

        <ul className="rise rise-5 mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-x-6 gap-y-2.5">
          {BADGES.map((b) => (
            <li key={b.label} className="flex items-center gap-2 text-xs font-semibold text-white/55">
              <b.icon className="h-4 w-4 text-gold-bright" aria-hidden="true" />
              {b.label}
            </li>
          ))}
        </ul>

        {!compact && (
          <div className="rise rise-5 mx-auto mt-12 max-w-3xl">
            <HeroArt className="h-auto w-full" />
          </div>
        )}
      </div>
    </section>
  );
}
