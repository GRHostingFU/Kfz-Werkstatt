import Image from "next/image";
import type { HomeContent } from "@/lib/content";

export default function Hero({ hero }: { hero: HomeContent["hero"] }) {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 pt-16 pb-20 sm:px-8 md:pt-24 md:pb-28 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7 lg:pr-10">
          <p className="text-xs font-medium tracking-[0.18em] text-rost uppercase">
            {hero.kicker}
          </p>
          <h1 className="mt-5 max-w-[15ch] text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl">
            {hero.titel}
          </h1>
          <p className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-stone-600">
            {hero.text}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={hero.primaerButton.ziel}
              className="rounded-full bg-oel px-6 py-3 text-sm font-medium text-sand transition-all duration-200 ease-out hover:-translate-y-px hover:bg-rost hover:shadow-lg hover:shadow-stone-900/10 active:translate-y-0 active:scale-[0.99]"
            >
              {hero.primaerButton.label}
            </a>
            <a
              href={hero.sekundaerButton.ziel}
              className="rounded-full border border-stone-900/15 px-6 py-3 text-sm font-medium transition-all duration-200 ease-out hover:border-stone-900/30 hover:bg-stone-900/5 active:scale-[0.99]"
            >
              {hero.sekundaerButton.label}
            </a>
          </div>

          <ul className="mt-10 space-y-2.5 border-l-2 border-rost/30 pl-5">
            {hero.hinweise.map((h) => (
              <li key={h} className="text-sm text-stone-600">
                {h}
              </li>
            ))}
          </ul>
        </div>

        {/* leicht versetzt statt sauber zentriert – das Layout soll atmen */}
        <div className="lg:col-span-5 lg:pt-10">
          <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-stone-200 shadow-sm lg:rotate-[0.6deg]">
            <Image
              src={hero.bild}
              alt={hero.bildAlt}
              fill
              priority
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
