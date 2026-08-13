import Link from "next/link";
import Bild from "./Bild";
import type { HomeContent } from "@/lib/content";

export default function Hero({ hero }: { hero: HomeContent["hero"] }) {
  return (
    <section className="relative overflow-hidden border-b border-linie">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 pt-14 pb-16 sm:px-8 md:pt-20 md:pb-24 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-6 lg:pr-8">
          <p className="text-xs font-medium tracking-[0.18em] text-akzent uppercase">
            {hero.kicker}
          </p>
          <h1 className="mt-5 max-w-[15ch] text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl">
            {hero.titel}
          </h1>
          <p className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-gedaempft">
            {hero.text}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              href={hero.primaerButton.ziel}
              className="rounded-full bg-akzent px-6 py-3 text-sm font-medium text-auf-akzent transition-all duration-200 ease-out hover:-translate-y-px hover:shadow-lg hover:shadow-black/10 active:translate-y-0 active:scale-[0.99]"
            >
              {hero.primaerButton.label}
            </Link>
            <Link
              href={hero.sekundaerButton.ziel}
              className="rounded-full border border-linie px-6 py-3 text-sm font-medium transition-all duration-200 ease-out hover:border-akzent hover:bg-flaeche-2 active:scale-[0.99]"
            >
              {hero.sekundaerButton.label}
            </Link>
          </div>

          <ul className="mt-10 space-y-2.5 border-l-2 border-akzent/40 pl-5">
            {hero.hinweise.map((h) => (
              <li key={h} className="text-sm text-gedaempft">
                {h}
              </li>
            ))}
          </ul>
        </div>

        {/* leicht versetzt statt sauber zentriert – das Layout soll atmen */}
        <div className="lg:col-span-6 lg:pt-8">
          <div className="relative aspect-4/3 overflow-hidden rounded-2xl border border-linie bg-flaeche-2 shadow-sm lg:rotate-[0.6deg]">
            <Bild
              src={hero.bild}
              alt={hero.bildAlt}
              priority
              sizes="(min-width: 1024px) 48vw, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
