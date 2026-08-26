// The WhatsApp order path. NOT the only checkout — /checkout takes card
// payment through the hub and emails Xtream codes automatically. This modal is
// the alternative for buyers who would rather arrange the order in chat, and
// the fallback the hub itself falls back to when stores are unavailable.
"use client";

import { useEffect, useRef, useState } from "react";
import { X, Minus, Plus } from "lucide-react";
import {
  CHECKOUT_COPY,
  EXTRA_CONNECTION_PRICE,
  EXTRA_CONNECTIONS_MAX,
  SITE_NAME,
} from "@/lib/constants";
import { buildWhatsAppCheckoutUrl, calculateOrderTotal } from "@/lib/whatsapp";

type OrderSummaryModalProps = {
  open: boolean;
  onClose: () => void;
  planName: string;
  planPrice: number;
  proxyPrice: number;
  extraConnectionPrice?: number;
  currency?: string;
};

const formatPrice = (value: number, currency: string) =>
  `${currency}${value.toFixed(2)}`;

export default function OrderSummaryModal({
  open,
  onClose,
  planName,
  planPrice,
  proxyPrice,
  extraConnectionPrice = EXTRA_CONNECTION_PRICE,
  currency = "£",
}: OrderSummaryModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  // Add-on state resets between plans via the `key` on this component at the
  // call site, so there is no need to clear it in an effect.
  const [proxyOn, setProxyOn] = useState(false);
  const [extraConnections, setExtraConnections] = useState(0);

  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = prevOverflow;
      previouslyFocused?.focus?.();
    };
  }, [open, onClose]);

  if (!open) return null;

  const total = calculateOrderTotal({
    planPrice,
    proxyEnabled: proxyOn,
    proxyPrice,
    extraConnections,
    extraConnectionPrice,
  });

  const extraConnectionsSubtotal = extraConnections * extraConnectionPrice;

  const handleCheckout = () => {
    const url = buildWhatsAppCheckoutUrl({
      planName,
      planPrice,
      proxyEnabled: proxyOn,
      proxyPrice,
      extraConnections,
      extraConnectionPrice,
      brandName: SITE_NAME,
    });
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-4">
      <div
        onClick={onClose}
        aria-hidden="true"
        className="absolute inset-0 bg-night/70"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="order-summary-title"
        className="relative max-h-[92dvh] w-full max-w-md overflow-y-auto rounded-xl bg-paper ring-1 ring-ink/10"
      >
        <div className="flex items-center justify-between border-b border-rule px-5 py-4">
          <h2 id="order-summary-title" className="eyebrow text-ink">
            Order summary
          </h2>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close order summary"
            className="-mr-2 p-2 text-ink-muted transition-colors hover:text-gold"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="px-5 py-5">
          <div className="flex items-baseline justify-between gap-4 border-b border-rule pb-4">
            <span className="font-display text-lg font-bold tracking-tight">
              {planName}
            </span>
            <div className="text-right">
              <div className="tabular text-xl font-medium">
                {formatPrice(planPrice, currency)}
              </div>
              <div className="eyebrow mt-0.5">One-time payment</div>
            </div>
          </div>

          <h3 className="eyebrow mt-5">Optional add-ons</h3>

          {/* Secure Proxy */}
          <div className="mt-3 rounded-xl bg-white ring-1 ring-ink/10 px-4 py-4">
            <div className="flex items-start justify-between gap-3">
              <span className="font-display text-sm font-bold tracking-tight">
                Secure Proxy
              </span>
              <button
                type="button"
                role="switch"
                aria-checked={proxyOn}
                aria-label="Toggle Secure Proxy"
                onClick={() => setProxyOn((v) => !v)}
                className={`relative inline-flex h-6 w-11 shrink-0 items-center transition-colors ${
                  proxyOn ? "bg-gold" : "bg-rule"
                }`}
              >
                <span
                  className={`inline-block h-5 w-5 bg-white transition-transform ${
                    proxyOn ? "translate-x-[1.375rem]" : "translate-x-0.5"
                  }`}
                />
              </button>
            </div>
            <div className="tabular mt-1.5 text-sm font-medium text-gold">
              +{formatPrice(proxyPrice, currency)}
            </div>
            <p className="mt-2 text-xs leading-relaxed text-ink-muted">
              Encrypts your stream traffic and reduces ISP-side filtering. No
              bandwidth cap, no separate app. Priced per term, not per month.
            </p>
          </div>

          {/* Extra connections */}
          <div className="mt-3 rounded-xl bg-white ring-1 ring-ink/10 px-4 py-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="font-display text-sm font-bold tracking-tight">
                  {CHECKOUT_COPY.extraConnectionsLabel}
                </div>
                <p className="mt-1 text-xs leading-relaxed text-ink-muted">
                  {CHECKOUT_COPY.extraConnectionsHelp}
                </p>
              </div>

              <div className="flex shrink-0 items-center gap-1">
                <button
                  type="button"
                  onClick={() => setExtraConnections((v) => Math.max(0, v - 1))}
                  disabled={extraConnections === 0}
                  aria-label="Decrease extra connections"
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-paper-sunk text-ink transition-colors hover:border-gold hover:text-gold disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-rule disabled:hover:text-ink"
                >
                  <Minus className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
                <span
                  aria-live="polite"
                  className="tabular w-7 text-center text-sm font-medium"
                >
                  {extraConnections}
                </span>
                <button
                  type="button"
                  onClick={() =>
                    setExtraConnections((v) =>
                      Math.min(EXTRA_CONNECTIONS_MAX, v + 1)
                    )
                  }
                  disabled={extraConnections === EXTRA_CONNECTIONS_MAX}
                  aria-label="Increase extra connections"
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-paper-sunk text-ink transition-colors hover:border-gold hover:text-gold disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:border-rule disabled:hover:text-ink"
                >
                  <Plus className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
              </div>
            </div>

            <div className="tabular mt-2 text-xs font-medium text-gold">
              {CHECKOUT_COPY.extraConnectionsPriceLabel(extraConnectionPrice)}
            </div>

            {extraConnections > 0 && (
              <div className="tabular mt-1 text-xs text-ink-muted">
                {extraConnections} × {formatPrice(extraConnectionPrice, currency)}{" "}
                = {formatPrice(extraConnectionsSubtotal, currency)}
              </div>
            )}
          </div>
        </div>

        <div className="border-t border-rule bg-paper-sunk px-5 py-5">
          <div className="flex items-baseline justify-between">
            <span className="eyebrow">Total</span>
            <span className="tabular text-2xl font-medium">
              {formatPrice(total, currency)}
            </span>
          </div>

          <button
            type="button"
            onClick={handleCheckout}
            aria-label={`${CHECKOUT_COPY.buttonLabelPrefix} for ${formatPrice(total, currency)}`}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-gold px-6 py-3.5 font-display text-sm font-bold tracking-tight text-white transition-colors hover:bg-gold-hover"
          >
            {CHECKOUT_COPY.buttonLabelPrefix} · {formatPrice(total, currency)}
          </button>

          <p className="eyebrow mt-3 text-center">
            {CHECKOUT_COPY.footerNote}
          </p>
        </div>
      </div>
    </div>
  );
}
