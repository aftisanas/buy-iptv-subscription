import {
  Tv,
  Monitor,
  Zap,
  Clock,
  LayoutGrid,
  Smartphone,
  Shield,
  Film,
} from "lucide-react";
import { FEATURES } from "@/lib/constants";

const iconMap = { Tv, Monitor, Zap, Clock, LayoutGrid, Smartphone, Shield, Film };

/**
 * Feature grid with icons. The first pass shipped a bare specification table
 * and nothing else — accurate, but it read as a datasheet rather than a
 * subscription page. Icons and a denser grid carry the same claims.
 */
export default function Features() {
  return (
    <section id="features" className="border-b border-rule py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-3xl">
          <p className="eyebrow">Why buy IPTV UK here</p>
          <h2 className="marker mt-3 font-display text-3xl sm:text-4xl lg:text-[2.75rem]">
            Everything Included When You Buy IPTV UK
          </h2>
          <p className="mt-4 text-ink-muted">
            One price covers the whole service. There is no 4K surcharge, no
            per-screen upsell and no minimum term when you buy IPTV UK from
            this page.
          </p>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => {
            const Icon = iconMap[feature.icon];
            return (
              <li key={feature.title} className="group rounded-xl bg-paper-sunk p-6 transition-colors hover:bg-gold-soft">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-night text-gold-bright transition-colors group-hover:bg-gold group-hover:text-night">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-lg leading-snug">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                  {feature.description}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
