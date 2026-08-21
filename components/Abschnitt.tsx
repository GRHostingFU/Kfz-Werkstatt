import type { Text } from "./typen";

/** Einheitlicher Seitenkopf – haelt Abstaende und Typografie ueber alle Seiten gleich. */
export function Seitenkopf({
  kicker,
  titel,
  text,
}: {
  kicker?: Text;
  titel?: Text;
  text?: Text;
}) {
  return (
    <header className="border-b border-linie">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 md:py-20">
        {kicker ? (
          <p className="text-xs font-medium tracking-[0.18em] text-akzent uppercase">
            {kicker}
          </p>
        ) : null}
        <h1 className="mt-4 max-w-[18ch] text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          {titel}
        </h1>
        {text ? (
          <p className="mt-5 max-w-2xl text-[1.0625rem] leading-relaxed text-gedaempft">
            {text}
          </p>
        ) : null}
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
  kicker?: Text;
  titel?: Text;
  text?: Text;
}) {
  return (
    <div className="max-w-2xl">
      {kicker ? (
        <p className="text-xs font-medium tracking-[0.18em] text-akzent uppercase">
          {kicker}
        </p>
      ) : null}
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
        {titel}
      </h2>
      {text ? <p className="mt-5 leading-relaxed text-gedaempft">{text}</p> : null}
    </div>
  );
}
