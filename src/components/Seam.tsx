/**
 * The seam — dark hero to light body (DESIGN-SPEC §5).
 *
 * A hard edge with a 4px orange rule, never a gradient fade. All seven
 * reference templates soften this transition and all seven read as accidental
 * because of it. The caption sits on the paper side so the rule stays unbroken.
 */
export default function Seam({
  caption = "Plans from £25.99 · 30-day money-back · No auto-renewal",
}: {
  caption?: string;
}) {
  return (
    <div className="bg-paper">
      <div className="seam-rule" />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="eyebrow border-b border-rule py-3.5">{caption}</p>
      </div>
    </div>
  );
}
