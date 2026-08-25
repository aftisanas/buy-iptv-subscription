"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import OrderSummaryModal from "./OrderSummaryModal";
import { PRICING_PLANS } from "@/lib/constants";

type PricingPlan = (typeof PRICING_PLANS)[number];

const toAccessLabel = (planName: string) => {
  const match = planName.match(/^(\d+)\s+Months?$/i);
  return match ? `${match[1]}-Month Access` : `${planName} Access`;
};

/**
 * Plans as a comparison table on desktop, cards on mobile.
 *
 * Every sibling site renders a four-card row; a real <table> with tabular
 * figures is both the structural break (DESIGN-SPEC §2) and the honest way to
 * present four options that differ only by duration and price.
 *
 * The originalPrice/discount badges are deliberately not rendered — the
 * reference prices they compare against are unverified and internally
 * incoherent (3 months "was" £59.99 while 24 months costs £79.99 today).
 * Under DMCC/CPR price-transparency rules a "was" price must have been
 * genuinely charged. Reinstate only with evidence.
 */

const INCLUDED = [
  "37,000+ live channels",
  "198,000+ films & series",
  "Up to 4K UHD",
  "5 simultaneous screens",
  "7-day catch-up EPG",
  "30-day money-back",
];

export default function Plans() {
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);

  return (
    <section id="plans" className="border-b border-rule bg-paper-sunk py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="eyebrow">Plans</p>
        <h2 className="marker mt-4 font-display text-3xl lg:text-4xl">
          Four terms, one product
        </h2>
        <p className="measure mt-4 text-ink-muted">
          Every plan carries the identical service — the only variables are how
          long it runs and what it costs. Longer terms cost less per month.
          Nothing renews automatically.
        </p>

        {/* Desktop: comparison table */}
        <div className="mt-10 hidden overflow-x-auto lg:block">
          <table className="w-full text-left">
            <caption className="sr-only">IPTV subscription plans and prices</caption>
            <thead>
              <tr className="border-b-2 border-ink">
                <th scope="col" className="eyebrow py-3 pr-4 font-normal">Term</th>
                <th scope="col" className="eyebrow py-3 pr-4 font-normal">Price</th>
                <th scope="col" className="eyebrow py-3 pr-4 font-normal">Per month</th>
                <th scope="col" className="eyebrow py-3 pr-4 font-normal">Secure Proxy</th>
                <th scope="col" className="eyebrow py-3 pr-4 font-normal">Extra connection</th>
                <th scope="col" className="sr-only">Order</th>
              </tr>
            </thead>
            <tbody>
              {PRICING_PLANS.map((plan) => (
                <tr key={plan.id} className="border-b border-rule">
                  <th scope="row" className="py-5 pr-4 align-middle">
                    <span className="font-display text-xl font-extrabold tracking-tight">
                      {plan.name}
                    </span>
                    {plan.popular && (
                      <span className="eyebrow ml-3 text-orange">Most chosen</span>
                    )}
                  </th>
                  <td className="data py-5 pr-4 align-middle text-2xl font-medium">
                    £{plan.price.toFixed(2)}
                  </td>
                  <td className="data py-5 pr-4 align-middle text-ink-muted">
                    £{plan.perMonth.toFixed(2)}
                  </td>
                  <td className="data py-5 pr-4 align-middle text-ink-muted">
                    +£{plan.proxyPrice.toFixed(2)}
                  </td>
                  <td className="data py-5 pr-4 align-middle text-ink-muted">
                    +£{plan.extraConnectionPrice.toFixed(2)}
                  </td>
                  <td className="py-5 text-right align-middle">
                    <button
                      type="button"
                      onClick={() => setSelectedPlan(plan)}
                      className="bg-orange px-5 py-2.5 font-display text-sm font-bold tracking-tight text-white transition-colors hover:bg-orange-hover"
                    >
                      Order this plan
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile: cards */}
        <ul className="mt-10 space-y-4 lg:hidden">
          {PRICING_PLANS.map((plan) => (
            <li
              key={plan.id}
              className={`border bg-paper p-6 ${plan.popular ? "border-orange border-2" : "border-rule"}`}
            >
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-display text-xl font-extrabold tracking-tight">
                  {plan.name}
                </h3>
                {plan.popular && <span className="eyebrow text-orange">Most chosen</span>}
              </div>
              <p className="data mt-3 text-3xl font-medium">£{plan.price.toFixed(2)}</p>
              <p className="eyebrow mt-1">£{plan.perMonth.toFixed(2)} per month</p>
              <dl className="mt-4 border-t border-rule pt-3 text-sm text-ink-muted">
                <div className="flex justify-between py-1">
                  <dt>Secure Proxy</dt>
                  <dd className="data">+£{plan.proxyPrice.toFixed(2)}</dd>
                </div>
                <div className="flex justify-between py-1">
                  <dt>Extra connection</dt>
                  <dd className="data">+£{plan.extraConnectionPrice.toFixed(2)}</dd>
                </div>
              </dl>
              <button
                type="button"
                onClick={() => setSelectedPlan(plan)}
                className="mt-5 w-full bg-orange px-5 py-3.5 font-display text-sm font-bold tracking-tight text-white transition-colors hover:bg-orange-hover"
              >
                Order this plan
              </button>
            </li>
          ))}
        </ul>

        <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-2 border-t border-rule pt-6 sm:grid-cols-2 lg:grid-cols-3">
          {INCLUDED.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-ink-muted">
              <Check className="mt-1 h-4 w-4 shrink-0 text-orange" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
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
