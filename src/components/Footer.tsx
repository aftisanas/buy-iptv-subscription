import Link from "next/link";
import Image from "next/image";
import { Mail, MessageCircle } from "lucide-react";
import {
  CONTACT_EMAIL,
  LEGAL_LINKS,
  NAV_LINKS,
  SITE_NAME,
  SUPPORT_HOURS,
  WHATSAPP_DISPLAY,
  WHATSAPP_NUMBER,
} from "@/lib/constants";

/** Compact four-column footer. The previous version ran to nearly a full
 *  viewport of mostly empty space; this one is dense by design. */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-night text-white/70">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <Image
                src="/buy-iptv.webp"
                alt=""
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <span className="font-display text-base text-white">
                Buy IPTV UK
              </span>
            </div>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/50">
              Buy IPTV UK with 37,000 live channels and 198,000 films and series
              over standard broadband. One payment per term, no contract, no
              auto-renewal.
            </p>
          </div>

          <nav aria-label="Site">
            <p className="eyebrow">Site</p>
            <ul className="mt-3 space-y-1.5">
              {[...NAV_LINKS, { label: "Blog", href: "/blog" }, { label: "Contact", href: "/contact" }].map(
                (link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/55 transition-colors hover:text-gold-bright"
                    >
                      {link.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>

          <nav aria-label="Legal">
            <p className="eyebrow">Legal</p>
            <ul className="mt-3 space-y-1.5">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/55 transition-colors hover:text-gold-bright"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="eyebrow">Support</p>
            <ul className="mt-3 space-y-1.5">
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="flex items-center gap-2 text-sm text-white/55 transition-colors hover:text-gold-bright"
                >
                  <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/55 transition-colors hover:text-gold-bright"
                >
                  <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
                  {WHATSAPP_DISPLAY}
                </a>
              </li>
            </ul>
            <p className="mt-2.5 text-xs text-white/35">{SUPPORT_HOURS}</p>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-5 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {SITE_NAME}
          </p>
          <p className="max-w-xl sm:text-right">
            Not affiliated with any television network or content provider. All
            trademarks are the property of their respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
}
