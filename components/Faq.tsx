import { Blockkopf } from "./Abschnitt";
import type { HomeContent } from "@/lib/content";

/*
  Bewusst native <details>-Elemente: kein Client-JS, keine Hydration-Kosten,
  funktioniert sofort beim ersten Paint und ist per Tastatur bedienbar.
*/
export default function Faq({ faq }: { faq: HomeContent["faq"] }) {
  return (
    <section className="border-t border-linie bg-flaeche-2/60 py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <Blockkopf kicker={faq.kicker} titel={faq.titel} />
        </div>

        <div className="lg:col-span-8">
          {faq.eintraege.map((e) => (
            <details
              key={e.frage}
              className="group mb-3 rounded-2xl border border-linie bg-flaeche px-5 transition-colors duration-200 ease-out hover:border-akzent/40 open:border-akzent/40"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-left [&::-webkit-details-marker]:hidden">
                <span className="text-[1.0625rem] font-medium tracking-tight">
                  {e.frage}
                </span>
                <span
                  aria-hidden="true"
                  className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-akzent-weich text-akzent transition-transform duration-200 ease-out group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="max-w-2xl pb-5 leading-relaxed text-gedaempft">
                {e.antwort}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
