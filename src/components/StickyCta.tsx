"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Zap } from "lucide-react";

/**
 * Sticky order bar, all breakpoints.
 *
 * The countdown that sat here was removed on 2026-08-26. It seeded a random
 * 14-24h deadline per visitor in localStorage and restarted on expiry, so
 * nothing actually changed at zero — a clock ticking down beside a price is a
 * representation that something does, which is a banned practice under CPRs
 * Sch.1 / DMCC Sch.20 regardless of the caption above it. It also contradicted
 * PRICE_VALID_UNTIL ("2027-12-31") published in every Offer on the same page.
 *
 * The slot now carries the delivery promise, which is the real anxiety for
 * someone buying a digital credential from an unfamiliar site — and unlike the
 * timer, it is true.
 */
export default function StickyCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 560);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-night/95 backdrop-blur transition-transform duration-200 ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-2.5 sm:gap-6 sm:px-8 sm:py-3">
        <div className="flex min-w-0 flex-1 items-center gap-2.5">
          <Zap className="hidden h-5 w-5 shrink-0 text-gold-bright sm:block" aria-hidden="true" />
          <div className="min-w-0">
            <p className="truncate text-sm font-bold text-white">
              Xtream codes emailed in under 60 seconds
            </p>
            <p className="truncate text-xs text-white/45">
              Automatic on payment · 30-day money-back · no auto-renewal
            </p>
          </div>
        </div>

        <Link
          href="/checkout"
          className="shrink-0 rounded-lg bg-gradient-to-r from-gold-bright to-gold px-5 py-3 text-center text-sm font-bold whitespace-nowrap text-night transition-all hover:brightness-110 sm:px-7"
        >
          Buy now — from £25.99
        </Link>
      </div>
    </div>
  );
}
