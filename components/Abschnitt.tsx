import type { ReactNode } from "react";

/** Einheitlicher Seitenkopf – haelt Abstaende und Typografie ueber alle Seiten gleich. */
export function Seitenkopf({
  kicker,
  titel,
  text,
  children,
}: {
  kicker: string;
  titel: string;
  text?: string;
  children?: ReactNode;
}) {
  return (
    <header className="border-b border-linie">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 md:py-20">
        <p className="text-xs font-medium tracking-[0.18em] text-akzent uppercase">
          {kicker}
        </p>
        <h1 className="mt-4 max-w-[18ch] text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          {titel}
        </h1>
        {text ? (
          <p className="mt-5 max-w-2xl text-[1.0625rem] leading-relaxed text-gedaempft">
            {text}
          </p>
        ) : null}
        {children}
      </div>
    </header>
  );
}

/** Ueberschriftenblock innerhalb einer Seite. */
export function Blockkopf({
  kicker,
  titel,
  text,
}: {
  kicker: string;
  titel: string;
  text?: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-medium tracking-[0.18em] text-akzent uppercase">
        {kicker}
      </p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
        {titel}
      </h2>
      {text ? (
        <p className="mt-5 leading-relaxed text-gedaempft">{text}</p>
      ) : null}
    </div>
  );
}
