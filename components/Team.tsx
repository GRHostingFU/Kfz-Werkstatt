import Bild from "./Bild";
import type { HomeContent } from "@/lib/content";

export default function Team({ team }: { team: HomeContent["team"] }) {
  return (
    <section className="border-t border-linie bg-flaeche-2/60 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="text-xs font-medium tracking-[0.18em] text-akzent uppercase">
              {team.kicker}
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              {team.titel}
            </h2>
          </div>
          <p className="max-w-xs text-sm text-gedaempft">{team.text}</p>
        </div>

        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.mitglieder.map((m, i) => (
            <li
              key={m.name}
              // jede zweite Karte etwas tiefer – bricht das Raster auf
              className={`group rounded-2xl border border-linie bg-flaeche p-4 transition-all duration-200 ease-out hover:-translate-y-1 hover:border-akzent/40 hover:shadow-lg hover:shadow-black/5 ${
                i % 2 === 1 ? "lg:mt-8" : ""
              }`}
            >
              <div className="relative aspect-square overflow-hidden rounded-xl bg-flaeche-2">
                <Bild
                  src={m.bild}
                  alt={m.bildAlt}
                  sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 100vw"
                  className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                />
              </div>
              <h3 className="mt-4 font-medium tracking-tight">{m.name}</h3>
              <p className="text-sm text-akzent">{m.rolle}</p>
              <p className="mt-2 pb-1 text-sm leading-relaxed text-gedaempft">
                {m.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
