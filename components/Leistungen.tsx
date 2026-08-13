import type { HomeContent } from "@/lib/content";

export default function Leistungen({
  leistungen,
}: {
  leistungen: HomeContent["leistungen"];
}) {
  return (
    <section
      id="leistungen"
      className="border-t border-stone-900/10 bg-white/60 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-medium tracking-[0.18em] text-rost uppercase">
            {leistungen.kicker}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            {leistungen.titel}
          </h2>
          <p className="mt-5 leading-relaxed text-stone-600">
            {leistungen.text}
          </p>
        </div>

        <ul className="mt-14 grid gap-x-10 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
          {leistungen.eintraege.map((e) => (
            <li
              key={e.titel}
              className="group rounded-xl border border-transparent p-5 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-stone-900/10 hover:bg-white hover:shadow-md"
            >
              <h3 className="text-lg font-medium tracking-tight">{e.titel}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-stone-600">
                {e.text}
              </p>
              {e.preisHinweis ? (
                <p className="mt-4 text-xs font-medium tracking-wide text-rost">
                  {e.preisHinweis}
                </p>
              ) : null}
            </li>
          ))}
        </ul>

        <p className="mt-12 max-w-xl text-sm text-stone-500">
          Ihr Anliegen ist nicht dabei? Rufen Sie kurz an – wenn wir es nicht
          machen können, kennen wir jemanden, der es kann.
        </p>
      </div>
    </section>
  );
}
