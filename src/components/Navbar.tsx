"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import SectionLink from "./SectionLink";
import { WhatsAppCta } from "./ui/WhatsAppCta";
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
          ? "border-b border-rule bg-paper"
          : "border-b border-transparent bg-paper/0"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8 lg:h-[4.5rem]">
        <Link
          href="/"
          className="font-display text-base font-extrabold tracking-tight text-ink"
          onClick={() => setOpen(false)}
        >
          Buy<span className="text-gold">IPTV</span>Subscription
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <SectionLink
              key={link.href}
              href={link.href}
              className="font-display text-sm font-bold tracking-tight text-ink-muted transition-colors hover:text-gold"
            >
              {link.label}
            </SectionLink>
          ))}
          <WhatsAppCta label="Order on WhatsApp" className="px-5 py-2.5" />
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="-mr-2 p-2 text-ink lg:hidden"
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
              className="block border-b border-rule py-4 font-display text-lg font-bold tracking-tight text-ink"
            >
              {link.label}
            </SectionLink>
          ))}
          <WhatsAppCta className="mt-6 w-full" />
        </nav>
      )}
    </header>
  );
}
