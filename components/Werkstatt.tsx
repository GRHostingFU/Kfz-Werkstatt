import Image from "next/image";
import type { HomeContent } from "@/lib/content";

export default function Werkstatt({
  werkstatt,
}: {
  werkstatt: HomeContent["werkstatt"];
}) {
  return (
    <section id="werkstatt" className="py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="relative aspect-3/4 overflow-hidden rounded-2xl bg-stone-200 shadow-sm lg:-rotate-[0.5deg]">
            <Image
              src={werkstatt.bild}
              alt={werkstatt.bildAlt}
              fill
              loading="lazy"
              sizes="(min-width: 1024px) 38vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="lg:col-span-7 lg:pt-8">
          <p className="text-xs font-medium tracking-[0.18em] text-rost uppercase">
            {werkstatt.kicker}
          </p>
          <h2 className="mt-4 max-w-[20ch] text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            {werkstatt.titel}
          </h2>
          <div className="mt-6 space-y-5 text-[1.0625rem] leading-relaxed text-stone-600">
            {werkstatt.absaetze.map((a, i) => (
              <p key={i}>{a}</p>
            ))}
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-stone-900/10 pt-8">
            {werkstatt.zahlen.map((z) => (
              <div key={z.label}>
                <dt className="text-3xl font-semibold tracking-tight tabular-nums">
                  {z.wert}
                </dt>
                <dd className="mt-1 text-xs leading-snug text-stone-500">
                  {z.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
