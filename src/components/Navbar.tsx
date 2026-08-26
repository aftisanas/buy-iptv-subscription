"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import SectionLink from "./SectionLink";
import { buildWhatsAppEnquiryUrl } from "@/lib/whatsapp";
import { NAV_LINKS } from "@/lib/constants";

/**
 * Masthead. Rule-based rather than glass/blur — the sibling sites all use a
 * translucent floating pill, so a flat bar sitting on a hairline rule is part
 * of the structural differentiation (DESIGN-SPEC §2).
 */
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent the page scrolling behind the open mobile sheet.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled || open
          ? "border-b border-rule bg-paper/95 backdrop-blur"
          : "border-b border-white/10 bg-night/80 backdrop-blur"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8 lg:h-[4.5rem]">
        <Link
          href="/"
          className={`text-base font-bold tracking-tight transition-colors ${
            scrolled || open ? "text-ink" : "text-white"
          }`}
          onClick={() => setOpen(false)}
        >
          Buy<span className="text-gold">IPTV</span>Subscription
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <SectionLink
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-gold-bright ${
                scrolled ? "text-ink-muted" : "text-white/75"
              }`}
            >
              {link.label}
            </SectionLink>
          ))}
          <SectionLink
            href="/#plans"
            className="rounded-lg bg-gradient-to-r from-gold-bright to-gold px-5 py-2.5 text-sm font-bold text-night transition-all hover:brightness-110"
          >
            Buy
          </SectionLink>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className={`-mr-2 p-2 transition-colors lg:hidden ${
            scrolled || open ? "text-ink" : "text-white"
          }`}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Primary"
          className="border-t border-rule bg-paper px-5 pb-8 pt-2 sm:px-8 lg:hidden"
        >
          {NAV_LINKS.map((link) => (
            <SectionLink
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block border-b border-rule py-4 text-lg font-bold text-ink"
            >
              {link.label}
            </SectionLink>
          ))}
          <SectionLink
            href="/#plans"
            onClick={() => setOpen(false)}
            className="mt-6 block rounded-lg bg-gradient-to-r from-gold-bright to-gold px-5 py-3.5 text-center text-sm font-bold text-night"
          >
            Buy now — from £25.99
          </SectionLink>
          <a
            href={buildWhatsAppEnquiryUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block text-center text-sm text-ink-muted underline underline-offset-4 hover:text-gold"
          >
            Or ask a question on WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}
