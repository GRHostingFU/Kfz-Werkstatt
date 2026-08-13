import { Blockkopf } from "./Abschnitt";
import type { HomeContent } from "@/lib/content";

export default function Ablauf({
  ablauf,
  kopf = true,
}: {
  ablauf: HomeContent["ablauf"];
  kopf?: boolean;
}) {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {kopf ? (
          <Blockkopf
            kicker={ablauf.kicker}
            titel={ablauf.titel}
            text={ablauf.text}
          />
        ) : null}

        <ol className={`grid gap-4 md:grid-cols-3 ${kopf ? "mt-12" : ""}`}>
          {ablauf.schritte.map((s) => (
            <li
              key={s.nummer}
              className="group relative rounded-2xl border border-linie bg-flaeche p-6 transition-all duration-200 ease-out hover:-translate-y-1 hover:border-akzent/40 hover:shadow-md"
            >
              <span className="grid size-10 place-items-center rounded-full bg-akzent-weich font-mono text-sm text-akzent tabular-nums">
                {s.nummer}
              </span>
              <h3 className="mt-5 text-xl font-medium tracking-tight">
                {s.titel}
              </h3>
              <p className="mt-2 leading-relaxed text-gedaempft">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
