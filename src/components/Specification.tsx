import { SPECIFICATION } from "@/lib/constants";

/**
 * The specification table. No sibling site has this section — it is one of the
 * four slots that break the shared template signature (DESIGN-SPEC §2).
 *
 * It states limits alongside features on purpose: "No phone line, no live
 * chat" and "No card form on this site" are the rows that make the rest
 * credible. A spec sheet that only lists strengths is a brochure.
 */
export default function Specification() {
  return (
    <section id="specification" className="border-b border-rule py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,22rem)_1fr] lg:gap-16">
          <div>
            <p className="eyebrow">Specification</p>
            <h2 className="marker mt-4 font-display text-3xl lg:text-4xl">
              Exactly what you get
            </h2>
            <p className="measure mt-4 text-ink-muted">
              Every figure below is checkable against the plan table or a
              published policy. Where something is not included, it says so.
            </p>
          </div>

          <table className="w-full text-left">
            <caption className="sr-only">
              IPTV subscription specification
            </caption>
            <tbody>
              {SPECIFICATION.map((row, i) => (
                <tr
                  key={row.label}
                  className={`border-t border-rule ${i === 0 ? "border-t-2 border-t-ink" : ""}`}
                >
                  <th
                    scope="row"
                    className="w-[38%] py-3.5 pr-4 align-top font-body text-base font-normal text-ink-muted"
                  >
                    {row.label}
                  </th>
                  <td className="py-3.5 pr-4 align-top">
                    <span className="data font-medium text-ink">
                      {row.value}
                    </span>
                  </td>
                  <td className="hidden py-3.5 align-top text-sm text-ink-muted sm:table-cell">
                    {row.note}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
