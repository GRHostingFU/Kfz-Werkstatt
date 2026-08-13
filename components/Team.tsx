import Image from "next/image";
import type { HomeContent } from "@/lib/content";

export default function Team({ team }: { team: HomeContent["team"] }) {
  return (
    <section
      id="team"
      className="border-y border-stone-900/10 bg-white/60 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="text-xs font-medium tracking-[0.18em] text-rost uppercase">
              {team.kicker}
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              {team.titel}
            </h2>
          </div>
          <p className="max-w-xs text-sm text-stone-500">{team.text}</p>
        </div>

        <ul className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {team.mitglieder.map((m, i) => (
            <li
              key={m.name}
              // jede zweite Karte etwas tiefer – bricht das Raster auf
              className={i % 2 === 1 ? "lg:mt-10" : undefined}
            >
              <div className="group relative aspect-square overflow-hidden rounded-xl bg-stone-200">
                <Image
                  src={m.bild}
                  alt={m.bildAlt}
                  fill
                  loading="lazy"
                  sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 100vw"
                  className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                />
              </div>
              <h3 className="mt-4 font-medium tracking-tight">{m.name}</h3>
              <p className="text-sm text-rost">{m.rolle}</p>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                {m.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
