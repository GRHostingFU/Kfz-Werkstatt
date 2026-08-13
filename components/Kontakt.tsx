import type { HomeContent } from "@/lib/content";
import { telHref } from "@/lib/content";
import TerminFormular from "./TerminFormular";

export default function Kontakt({
  kontakt,
  betrieb,
}: {
  kontakt: HomeContent["kontakt"];
  betrieb: HomeContent["betrieb"];
}) {
  return (
    <section id="kontakt" className="py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <p className="text-xs font-medium tracking-[0.18em] text-rost uppercase">
            {kontakt.kicker}
          </p>
          <h2 className="mt-4 max-w-[16ch] text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            {kontakt.titel}
          </h2>
          <p className="mt-5 leading-relaxed text-stone-600">{kontakt.text}</p>

          <a
            href={telHref(betrieb.telefon)}
            className="mt-8 inline-block rounded-full bg-oel px-6 py-3 text-sm font-medium text-sand transition-all duration-200 ease-out hover:-translate-y-px hover:bg-rost hover:shadow-lg hover:shadow-stone-900/10 active:translate-y-0 active:scale-[0.99]"
          >
            {betrieb.telefon}
          </a>

          <dl className="mt-10 space-y-3 border-t border-stone-900/10 pt-8 text-sm">
            <div className="flex gap-4">
              <dt className="w-32 shrink-0 text-stone-500">Adresse</dt>
              <dd>
                {betrieb.strasse}
                <br />
                {betrieb.ort}
              </dd>
            </div>
            {betrieb.oeffnungszeiten.map((o) => (
              <div key={o.tage} className="flex gap-4">
                <dt className="w-32 shrink-0 text-stone-500">{o.tage}</dt>
                <dd>{o.zeit}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:col-span-7">
          <TerminFormular hinweis={kontakt.formularHinweis} />
        </div>
      </div>
    </section>
  );
}
