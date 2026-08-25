import { buildWhatsAppEnquiryUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import { SUPPORT_HOURS } from "@/lib/constants";

/**
 * The site's only checkout path, presented as a deliberate choice.
 *
 * Orange rather than WhatsApp green on purpose (DESIGN-SPEC §8): brand
 * consistency beats channel recognition, and a green button visually concedes
 * that one channel is all there is. Never label this "for payment please
 * contact us" — that phrasing reads as improvisation.
 */

function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="currentColor"
      className={className}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 0 1 6.988 2.896 9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.359.101 11.945c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.652a11.9 11.9 0 0 0 5.71 1.454h.006c6.585 0 11.946-5.359 11.949-11.945a11.9 11.9 0 0 0-3.480-8.408" />
    </svg>
  );
}

export function WhatsAppCta({
  label = "Message us on WhatsApp",
  message,
  className,
  tone = "solid",
}: {
  label?: string;
  message?: string;
  className?: string;
  tone?: "solid" | "outline";
}) {
  return (
    <a
      href={buildWhatsAppEnquiryUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-2.5 px-6 py-3.5 font-display text-sm font-bold tracking-tight transition-colors",
        tone === "solid"
          ? "bg-orange text-white hover:bg-orange-hover"
          : "border border-current text-orange hover:bg-orange hover:text-white",
        className
      )}
    >
      <WhatsAppGlyph className="h-[1.15em] w-[1.15em]" />
      {label}
    </a>
  );
}

/**
 * Sets expectations under the button.
 *
 * Deliberately quotes SUPPORT_HOURS rather than a response-time promise. The
 * design review suggested "usually replies in under 15 min", but no such
 * measurement exists — inventing one would recreate exactly the class of claim
 * Phase 1 removed. Reinstate a response time only when it can be measured.
 */
export function WhatsAppExpectation({ className }: { className?: string }) {
  return <p className={cn("eyebrow", className)}>{SUPPORT_HOURS}</p>;
}

export default WhatsAppCta;
