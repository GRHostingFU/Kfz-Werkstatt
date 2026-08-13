import Bild from "./Bild";
import { Blockkopf } from "./Abschnitt";
import type { HomeContent } from "@/lib/content";

export default function Werkstatt({
  werkstatt,
  kopf = true,
}: {
  werkstatt: HomeContent["werkstatt"];
  kopf?: boolean;
}) {
  return (
    <section className="border-t border-linie py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="relative aspect-3/4 overflow-hidden rounded-2xl border border-linie bg-flaeche-2 shadow-sm lg:-rotate-[0.5deg]">
            <Bild
              src={werkstatt.bild}
              alt={werkstatt.bildAlt}
              sizes="(min-width: 1024px) 38vw, 100vw"
            />
          </div>
        </div>

        <div className="lg:col-span-7 lg:pt-6">
          {kopf ? (
            <Blockkopf kicker={werkstatt.kicker} titel={werkstatt.titel} />
          ) : null}
          <div
            className={`space-y-5 text-[1.0625rem] leading-relaxed text-gedaempft ${kopf ? "mt-6" : ""}`}
          >
            {werkstatt.absaetze.map((a, i) => (
              <p key={i}>{a}</p>
            ))}
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-linie pt-8">
            {werkstatt.zahlen.map((z) => (
              <div key={z.label}>
                <dt className="text-3xl font-semibold tracking-tight tabular-nums">
                  {z.wert}
                </dt>
                <dd className="mt-1 text-xs leading-snug text-gedaempft">
                  {z.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
