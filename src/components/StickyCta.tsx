"use client";

import { useEffect, useState } from "react";
import { WhatsAppCta } from "./ui/WhatsAppCta";

/**
 * Sticky mobile order bar. 70% of clicks are mobile (820/1,172,
 * buy-iptv-uk.com 90d), so the only checkout path must never be more than a
 * thumb away.
 *
 * Appears after the hero rather than on load — a bar covering the H1 on first
 * paint hurts both LCP perception and the first impression.
 */
export default function StickyCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-rule bg-paper p-3 transition-transform duration-200 md:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <WhatsAppCta className="w-full" />
    </div>
  );
}
