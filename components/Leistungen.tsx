import Link from "next/link";
import { Blockkopf } from "./Abschnitt";
import type { LeistungsEintrag, Text } from "./typen";

export default function Leistungen({
  kicker,
  titel,
  text,
  eintraege,
  mitKopf,
  grenze,
}: {
  kicker?: Text;
  titel?: Text;
  text?: Text;
  eintraege?: (LeistungsEintrag | null)[] | null;
  mitKopf?: boolean | null;
  /** 0 oder leer = alle zeigen, sonst gekuerzter Anriss mit Link. */
  grenze?: number | null;
}) {
  const alle = (eintraege ?? []).filter(Boolean);
  const sichtbar = grenze && grenze > 0 ? alle.slice(0, grenze) : alle;

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {mitKopf ? <Blockkopf kicker={kicker} titel={titel} text={text} /> : null}

        <ul
          className={`grid gap-4 sm:grid-cols-2 lg:grid-cols-3 ${mitKopf ? "mt-12" : ""}`}
        >
          {sichtbar.map((e, i) => (
            <li
              key={e?.titel ?? i}
              className="flex h-full flex-col rounded-2xl border border-linie bg-flaeche p-6 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-akzent/40 hover:shadow-md"
            >
              <h3 className="text-lg font-medium tracking-tight">{e?.titel}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-gedaempft">
                {e?.text}
              </p>
              {e?.preisHinweis ? (
                <p className="mt-auto pt-5 text-xs font-medium tracking-wide text-akzent">
                  {e.preisHinweis}
                </p>
              ) : null}
            </li>
          ))}
        </ul>

        {grenze && grenze > 0 ? (
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
