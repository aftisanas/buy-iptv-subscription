"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Check } from "lucide-react";
import OrderSummaryModal from "./OrderSummaryModal";
import { CHECKOUT_MODE, PRICING_PLANS } from "@/lib/constants";

type PricingPlan = (typeof PRICING_PLANS)[number];

const toAccessLabel = (planName: string) => {
  const match = planName.match(/^(\d+)\s+Months?$/i);
  return match ? `${match[1]}-Month Access` : `${planName} Access`;
};

/**
 * Plan cards, each carrying its own feature list.
 *
 * The previous pass hoisted the shared features into one list below the table
 * to avoid repetition; that made every plan look identical and gave the buyer
 * nothing to read inside the card they were deciding on. Repetition is correct
 * here — the card has to stand alone.
 *
 * originalPrice/discount badges remain unrendered: the reference prices are
 * internally incoherent (3 months "was" £59.99 while 24 months costs £79.99
 * today) and under DMCC/CPR rules a "was" price must have been genuinely
 * charged.
 */
export default function Plans() {
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);

  // "hub" sends the buyer into the full /checkout flow; "whatsapp" keeps the
  // order modal and goes straight to wa.me. Either way they end up with a
  // WhatsApp route if Shopify is unavailable.
  const handleChoosePlan = (plan: PricingPlan) => {
    if (CHECKOUT_MODE === "hub") {
      router.push(`/checkout?plan=${plan.id}`);
      return;
    }
    setSelectedPlan(plan);
  };

  return (
    <section id="plans" className="border-b border-rule bg-paper-sunk py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="text-center">
          <p className="eyebrow">Pricing</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-[2.75rem]">
            Buy IPTV UK Plans — Four Terms, One Full Service
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-ink-muted">
            Every plan to buy IPTV UK carries the identical channel library, 4K
            streaming and one connection. Only the term and the price change, and
            longer terms cost less per month. Nothing renews automatically.
          </p>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:items-start">
          {PRICING_PLANS.map((plan) => {
            const popular = plan.popular;
            return (
              <li
                key={plan.id}
                className={`relative flex flex-col rounded-2xl bg-paper transition-shadow ${
                  popular
                    ? "shadow-xl shadow-gold/20 ring-2 ring-gold lg:-mt-4 lg:mb-4"
                    : "shadow-sm ring-1 ring-ink/10 hover:shadow-lg hover:shadow-ink/5"
                }`}
              >
                {popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-flame px-3.5 py-1 text-[0.7rem] font-bold text-white">
                    Most popular
                  </span>
                )}

                <div className={`px-6 pb-6 ${popular ? "pt-8" : "pt-6"}`}>
                  <h3 className="font-display text-2xl">{plan.name}</h3>
                  <p className="mt-1 text-sm text-ink-muted">{plan.subtitle}</p>

                  <div className="mt-5 flex items-baseline gap-1.5">
                    <span className="tabular font-display text-4xl text-ink">
                      £{plan.price.toFixed(2)}
                    </span>
                    <span className="text-sm text-ink-muted">one-off</span>
                  </div>
                  <p className="tabular mt-1 text-sm font-medium text-gold">
                    £{plan.perMonth.toFixed(2)} / month effective
                  </p>
                </div>

                <ul className="mt-auto space-y-2.5 border-t border-rule/70 px-6 pb-5 pt-5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-ink-muted">
                      <Check
                        className={`mt-0.5 h-4 w-4 shrink-0 ${popular ? "text-gold" : "text-ink-muted/60"}`}
                        aria-hidden="true"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="px-6 pb-6">
                  <button
                    type="button"
                    onClick={() => handleChoosePlan(plan)}
                    className={`block w-full rounded-lg px-5 py-3.5 text-center text-sm font-bold transition-all ${
                      popular
                        ? "bg-gradient-to-r from-gold-bright to-gold text-night hover:brightness-110"
                        : "bg-night text-white hover:bg-night-2"
                    }`}
                  >
                    Choose {plan.name} — £{plan.price.toFixed(2)}
                  </button>
                </div>
              </li>
            );
          })}
        </ul>

        <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-ink-muted">
          All prices in GBP and payable once for the stated term. Add the Secure
          Proxy or extra connections at checkout.
        </p>
      </div>

      <OrderSummaryModal
        key={selectedPlan?.id ?? "none"}
        open={selectedPlan !== null}
        onClose={() => setSelectedPlan(null)}
        planName={selectedPlan ? toAccessLabel(selectedPlan.name) : ""}
        planPrice={selectedPlan?.price ?? 0}
        proxyPrice={selectedPlan?.proxyPrice ?? 0}
        extraConnectionPrice={selectedPlan?.extraConnectionPrice}
      />
    </section>
  );
}
