import Link from "next/link";
import { telHref } from "@/lib/inhalt";
import type { Betrieb, Text } from "./typen";

/** Abschlussbereich mit dem naechsten Schritt. */
export default function Schluss({
  titel,
  text,
  buttonLabel,
  buttonZiel,
  betrieb,
}: {
  titel?: Text;
  text?: Text;
  buttonLabel?: Text;
  buttonZiel?: Text;
  betrieb: Betrieb;
}) {
  return (
    <section className="border-t border-linie bg-flaeche-2/60 py-16 md:py-20">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-8 px-5 sm:px-8">
        <div className="max-w-lg">
          <h2 className="text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
            {titel}
          </h2>
          {text ? (
            <p className="mt-3 leading-relaxed text-gedaempft">{text}</p>
          ) : null}
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={telHref(betrieb.telefon ?? "")}
            className="rounded-full bg-akzent px-6 py-3 text-sm font-medium text-auf-akzent transition-all duration-200 ease-out hover:-translate-y-px hover:shadow-lg hover:shadow-black/10 active:translate-y-0 active:scale-[0.99]"
          >
            {betrieb.telefon}
          </a>
          {buttonLabel ? (
            <Link
              href={buttonZiel ?? "/kontakt"}
              className="rounded-full border border-linie px-6 py-3 text-sm font-medium transition-all duration-200 ease-out hover:border-akzent hover:bg-flaeche active:scale-[0.99]"
            >
              {buttonLabel}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
