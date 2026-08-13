import Link from "next/link";
import { Blockkopf } from "./Abschnitt";
import type { HomeContent } from "@/lib/content";

export default function Leistungen({
  leistungen,
  kopf = true,
  grenze = 0,
}: {
  leistungen: HomeContent["leistungen"];
  /** Auf der Unterseite steht die Ueberschrift schon im Seitenkopf. */
  kopf?: boolean;
  /** 0 = alle zeigen, sonst gekuerzter Anriss mit Link auf die Unterseite. */
  grenze?: number;
}) {
  const eintraege = grenze
    ? leistungen.eintraege.slice(0, grenze)
    : leistungen.eintraege;

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {kopf ? (
          <Blockkopf
            kicker={leistungen.kicker}
            titel={leistungen.titel}
            text={leistungen.text}
          />
        ) : null}

        <ul
          className={`grid gap-4 sm:grid-cols-2 lg:grid-cols-3 ${kopf ? "mt-12" : ""}`}
        >
          {eintraege.map((e) => (
            <li
              key={e.titel}
              className="flex h-full flex-col rounded-2xl border border-linie bg-flaeche p-6 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-akzent/40 hover:shadow-md"
            >
              <h3 className="text-lg font-medium tracking-tight">{e.titel}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-gedaempft">
                {e.text}
              </p>
              {e.preisHinweis ? (
                <p className="mt-auto pt-5 text-xs font-medium tracking-wide text-akzent">
                  {e.preisHinweis}
                </p>
              ) : null}
            </li>
          ))}
        </ul>

        {grenze ? (
          <Link
            href="/leistungen"
            className="mt-8 inline-block rounded-full border border-linie px-5 py-2.5 text-sm transition-all duration-200 ease-out hover:border-akzent hover:bg-flaeche-2 active:scale-[0.99]"
          >
            Alle Leistungen ansehen
          </Link>
        ) : (
          <p className="mt-10 max-w-xl text-sm text-gedaempft">
            Ihr Anliegen ist nicht dabei? Rufen Sie kurz an – wenn wir es nicht
            machen können, kennen wir jemanden, der es kann.
          </p>
        )}
      </div>
    </section>
  );
}
