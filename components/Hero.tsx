import Link from "next/link";
import Bild from "./Bild";
import type { Knopf, Text } from "./typen";

export default function Hero({
  kicker,
  titel,
  text,
  primaerButton,
  sekundaerButton,
  bild,
  bildAlt,
  hinweise,
}: {
  kicker?: Text;
  titel?: Text;
  text?: Text;
  primaerButton?: Knopf;
  sekundaerButton?: Knopf;
  bild?: Text;
  bildAlt?: Text;
  hinweise?: (string | null)[] | null;
}) {
  return (
    <section className="relative overflow-hidden border-b border-linie">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 pt-14 pb-16 sm:px-8 md:pt-20 md:pb-24 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-6 lg:pr-8">
          {kicker ? (
            <p className="text-xs font-medium tracking-[0.18em] text-akzent uppercase">
              {kicker}
            </p>
          ) : null}
          <h1 className="mt-5 max-w-[15ch] text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl">
            {titel}
          </h1>
          <p className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-gedaempft">
            {text}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            {primaerButton?.label ? (
              <Link
                href={primaerButton.ziel ?? "/"}
                className="rounded-full bg-akzent px-6 py-3 text-sm font-medium text-auf-akzent transition-all duration-200 ease-out hover:-translate-y-px hover:shadow-lg hover:shadow-black/10 active:translate-y-0 active:scale-[0.99]"
              >
                {primaerButton.label}
              </Link>
            ) : null}
            {sekundaerButton?.label ? (
              <Link
                href={sekundaerButton.ziel ?? "/"}
                className="rounded-full border border-linie px-6 py-3 text-sm font-medium transition-all duration-200 ease-out hover:border-akzent hover:bg-flaeche-2 active:scale-[0.99]"
              >
                {sekundaerButton.label}
              </Link>
            ) : null}
          </div>

          {hinweise?.length ? (
            <ul className="mt-10 space-y-2.5 border-l-2 border-akzent/40 pl-5">
              {hinweise.filter(Boolean).map((h) => (
                <li key={h} className="text-sm text-gedaempft">
                  {h}
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        {/* leicht versetzt statt sauber zentriert – das Layout soll atmen */}
        {bild ? (
          <div className="lg:col-span-6 lg:pt-8">
            <div className="relative aspect-4/3 overflow-hidden rounded-2xl border border-linie bg-flaeche-2 shadow-sm lg:rotate-[0.6deg]">
              <Bild
                src={bild}
                alt={bildAlt ?? ""}
                priority
                sizes="(min-width: 1024px) 48vw, 100vw"
              />
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
