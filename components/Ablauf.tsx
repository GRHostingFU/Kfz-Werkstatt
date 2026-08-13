import type { HomeContent } from "@/lib/content";

export default function Ablauf({ ablauf }: { ablauf: HomeContent["ablauf"] }) {
  return (
    <section id="ablauf" className="py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <p className="text-xs font-medium tracking-[0.18em] text-rost uppercase">
            {ablauf.kicker}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            {ablauf.titel}
          </h2>
          <p className="mt-5 leading-relaxed text-stone-600">{ablauf.text}</p>
        </div>

        <ol className="lg:col-span-8">
          {ablauf.schritte.map((s) => (
            <li
              key={s.nummer}
              className="group flex gap-6 border-t border-stone-900/10 py-7 transition-colors duration-200 ease-out first:border-t-0 first:pt-0 hover:border-rost/40"
            >
              <span className="w-10 shrink-0 pt-1 font-mono text-sm text-stone-400 tabular-nums transition-colors duration-200 ease-out group-hover:text-rost">
                {s.nummer}
              </span>
              <div>
                <h3 className="text-xl font-medium tracking-tight">
                  {s.titel}
                </h3>
                <p className="mt-2 max-w-xl leading-relaxed text-stone-600">
                  {s.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
