import Link from "next/link";
import {
  CONTACT_EMAIL,
  LEGAL_LINKS,
  NAV_LINKS,
  SITE_NAME,
  SUPPORT_HOURS,
  WHATSAPP_DISPLAY,
  WHATSAPP_NUMBER,
} from "@/lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-rule bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="font-display text-base font-extrabold tracking-tight">
              Buy<span className="text-orange">IPTV</span>Subscription
            </p>
            <p className="measure mt-4 text-sm leading-relaxed text-ink-muted">
              A UK-focused IPTV subscription. 37,000 live channels and 198,000
              films and series over standard broadband — no dish, no cable, no
              engineer visit. One payment per term, no auto-renewal.
            </p>
          </div>

          <nav aria-label="Site">
            <p className="eyebrow">Site</p>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-muted transition-colors hover:text-orange"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-ink-muted transition-colors hover:text-orange"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-ink-muted transition-colors hover:text-orange"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Legal">
            <p className="eyebrow">Legal</p>
            <ul className="mt-4 space-y-2.5">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-muted transition-colors hover:text-orange"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 grid gap-6 border-t border-rule pt-6 sm:grid-cols-2">
          <div>
            <p className="eyebrow">Contact</p>
            <ul className="mt-3 space-y-1.5">
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="data text-sm text-ink transition-colors hover:text-orange"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="data text-sm text-ink transition-colors hover:text-orange"
                >
                  {WHATSAPP_DISPLAY}
                </a>
              </li>
            </ul>
            <p className="eyebrow mt-3">{SUPPORT_HOURS}</p>
          </div>

          <p className="text-sm leading-relaxed text-ink-muted sm:text-right">
            {SITE_NAME} is not affiliated with any television network or content
            provider. All trademarks are the property of their respective owners.
          </p>
        </div>

        <p className="eyebrow mt-10">
          © {year} {SITE_NAME}
        </p>
      </div>
    </footer>
  );
}
