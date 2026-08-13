import type { HomeContent } from "@/lib/content";

/*
  Bewusst native <details>-Elemente: kein Client-JS, kein Hydration-Kosten,
  funktioniert sofort beim ersten Paint und ist per Tastatur bedienbar.
*/
export default function Faq({ faq }: { faq: HomeContent["faq"] }) {
  return (
    <section
      id="faq"
      className="border-t border-stone-900/10 bg-white/60 py-20 md:py-28"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <p className="text-xs font-medium tracking-[0.18em] text-rost uppercase">
            {faq.kicker}
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            {faq.titel}
          </h2>
        </div>

        <div className="lg:col-span-8">
          {faq.eintraege.map((e) => (
            <details
              key={e.frage}
              className="group border-b border-stone-900/10 first:border-t"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-left transition-colors duration-200 ease-out hover:text-rost [&::-webkit-details-marker]:hidden">
                <span className="text-[1.0625rem] font-medium tracking-tight">
                  {e.frage}
                </span>
                <span
                  aria-hidden="true"
                  className="mt-1 shrink-0 text-stone-400 transition-transform duration-200 ease-out group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="max-w-2xl pb-6 leading-relaxed text-stone-600">
                {e.antwort}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
