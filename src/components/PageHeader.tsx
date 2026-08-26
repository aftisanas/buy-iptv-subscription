/**
 * Compact night header shared by every non-homepage route, so /blog,
 * /blog/[slug] and /contact sit on the same ground as the homepage hero
 * rather than carrying their own treatment.
 */
export default function PageHeader({
  eyebrow,
  title,
  standfirst,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  standfirst?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="night-field relative overflow-hidden">
      <div className="guide-grid absolute inset-0" aria-hidden="true" />
      <div
        className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-night to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-4xl px-5 pt-28 pb-14 text-center sm:px-8 lg:pt-32 lg:pb-16">
        <p className="rise rise-1 eyebrow">{eyebrow}</p>
        <h1 className="rise rise-2 mt-3 text-balance font-display text-[2rem] text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {standfirst && (
          <p className="rise rise-3 mx-auto mt-5 max-w-2xl text-[0.98rem] text-white/65 sm:text-base">
            {standfirst}
          </p>
        )}
        {children && <div className="rise rise-4 mt-8">{children}</div>}
      </div>
    </section>
  );
}
