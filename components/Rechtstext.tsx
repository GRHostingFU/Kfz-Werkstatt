"use client";

import Link from "next/link";
import { useTina } from "tinacms/dist/react";
import type { Anfrage } from "@/lib/inhalt";
import type { Text } from "./typen";

export type RechtstextDaten = {
  rechtstext: {
    titel?: Text;
    einleitung?: Text;
    warnung?: Text;
    abschnitte?:
      | ({ titel?: Text; absaetze?: (string | null)[] | null } | null)[]
      | null;
  };
};

/** Gemeinsames Layout für Impressum und Datenschutzerklärung. */
export default function Rechtstext({
  anfrage,
}: {
  anfrage: Anfrage<RechtstextDaten>;
}) {
  const { data } = useTina({
    query: anfrage.query,
    variables: anfrage.variables,
    data: anfrage.data,
  });

  const inhalt = data?.rechtstext ?? anfrage.data.rechtstext;

  return (
    <article className="mx-auto max-w-3xl px-5 py-16 sm:px-8 md:py-24">
      <Link
        href="/"
        className="text-sm text-gedaempft transition-colors duration-200 ease-out hover:text-akzent"
      >
        ← Zurück zur Startseite
      </Link>

      <h1 className="mt-8 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
        {inhalt.titel}
      </h1>
      <p className="mt-4 leading-relaxed text-gedaempft">{inhalt.einleitung}</p>

      {inhalt.warnung ? (
        <p className="mt-8 rounded-xl border border-akzent/30 bg-akzent-weich px-5 py-4 text-sm leading-relaxed">
          {inhalt.warnung}
        </p>
      ) : null}

      <div className="mt-14 space-y-12">
        {(inhalt.abschnitte ?? []).filter(Boolean).map((a, i) => (
          <section key={a?.titel ?? i}>
            <h2 className="text-xl font-medium tracking-tight">{a?.titel}</h2>
            <div className="mt-3 space-y-3 leading-relaxed text-gedaempft">
              {(a?.absaetze ?? []).filter(Boolean).map((p, j) => (
                <p key={j}>{p}</p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
