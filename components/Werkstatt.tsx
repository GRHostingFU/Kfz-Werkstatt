import Bild from "./Bild";
import { Blockkopf } from "./Abschnitt";
import type { Text, Zahl } from "./typen";

export default function Werkstatt({
  kicker,
  titel,
  absaetze,
  bild,
  bildAlt,
  zahlen,
  mitKopf,
}: {
  kicker?: Text;
  titel?: Text;
  absaetze?: (string | null)[] | null;
  bild?: Text;
  bildAlt?: Text;
  zahlen?: (Zahl | null)[] | null;
  mitKopf?: boolean | null;
}) {
  return (
    <section className="border-t border-linie py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
        {bild ? (
          <div className="lg:col-span-5">
            <div className="relative aspect-3/4 overflow-hidden rounded-2xl border border-linie bg-flaeche-2 shadow-sm lg:-rotate-[0.5deg]">
              <Bild
                src={bild}
                alt={bildAlt ?? ""}
                sizes="(min-width: 1024px) 38vw, 100vw"
              />
            </div>
          </div>
        ) : null}

        <div className={bild ? "lg:col-span-7 lg:pt-6" : "lg:col-span-12"}>
          {mitKopf ? <Blockkopf kicker={kicker} titel={titel} /> : null}
          <div
            className={`space-y-5 text-[1.0625rem] leading-relaxed text-gedaempft ${mitKopf ? "mt-6" : ""}`}
          >
            {(absaetze ?? []).filter(Boolean).map((a, i) => (
              <p key={i}>{a}</p>
            ))}
          </div>

          {zahlen?.length ? (
            <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-linie pt-8">
              {zahlen.filter(Boolean).map((z, i) => (
                <div key={z?.label ?? i}>
                  <dt className="text-3xl font-semibold tracking-tight tabular-nums">
                    {z?.wert}
                  </dt>
                  <dd className="mt-1 text-xs leading-snug text-gedaempft">
                    {z?.label}
                  </dd>
                </div>
              ))}
            </dl>
          ) : null}
        </div>
      </div>
    </section>
  );
}
