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
    <section className="py-16 md:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="rounded-2xl border border-linie bg-flaeche p-6 sm:p-8">
            <p className="text-xs font-medium tracking-[0.14em] text-gedaempft uppercase">
              Direkt anrufen
            </p>
            <a
              href={telHref(betrieb.telefon)}
              className="mt-3 block text-2xl font-semibold tracking-tight transition-colors duration-200 ease-out hover:text-akzent"
            >
              {betrieb.telefon}
            </a>
            <p className="mt-4 text-sm leading-relaxed text-gedaempft">
              {kontakt.text}
            </p>

            <dl className="mt-8 space-y-3 border-t border-linie pt-6 text-sm">
              <div className="flex gap-4">
                <dt className="w-32 shrink-0 text-gedaempft">Adresse</dt>
                <dd>
                  {betrieb.strasse}
                  <br />
                  {betrieb.ort}
                </dd>
              </div>
              <div className="flex gap-4">
                <dt className="w-32 shrink-0 text-gedaempft">E-Mail</dt>
                <dd className="break-all">{betrieb.email}</dd>
              </div>
              {betrieb.oeffnungszeiten.map((o) => (
                <div key={o.tage} className="flex gap-4">
                  <dt className="w-32 shrink-0 text-gedaempft">{o.tage}</dt>
                  <dd>{o.zeit}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="lg:col-span-7">
          <TerminFormular hinweis={kontakt.formularHinweis} />
        </div>
      </div>
    </section>
  );
}
