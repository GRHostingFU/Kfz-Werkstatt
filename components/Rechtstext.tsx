import Link from "next/link";
import type { RechtstextContent } from "@/lib/content";

/** Gemeinsames Layout für Impressum und Datenschutzerklärung. */
export default function Rechtstext({ inhalt }: { inhalt: RechtstextContent }) {
  return (
    <article className="mx-auto max-w-3xl px-5 py-16 sm:px-8 md:py-24">
      <Link
        href="/"
        className="text-sm text-stone-500 transition-colors duration-200 ease-out hover:text-rost"
      >
        ← Zurück zur Startseite
      </Link>

      <h1 className="mt-8 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
        {inhalt.titel}
      </h1>
      <p className="mt-4 leading-relaxed text-stone-600">{inhalt.einleitung}</p>

      {inhalt.warnung ? (
        <p className="mt-8 rounded-xl border border-rost/25 bg-rost/5 px-5 py-4 text-sm leading-relaxed text-stone-700">
          {inhalt.warnung}
        </p>
      ) : null}

      <div className="mt-14 space-y-12">
        {inhalt.abschnitte.map((a) => (
          <section key={a.titel}>
            <h2 className="text-xl font-medium tracking-tight">{a.titel}</h2>
            <div className="mt-3 space-y-3 leading-relaxed text-stone-600">
              {a.absaetze.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
