import Link from "next/link";

const karten = [
  {
    ziel: "/leistungen",
    titel: "Leistungen",
    text: "Was wir machen, was es kostet und was wir bewusst nicht anbieten.",
    hinweis: "6 Bereiche",
  },
  {
    ziel: "/werkstatt",
    titel: "Werkstatt & Team",
    text: "Wer hier schraubt, wie die Halle aussieht und wie wir dazu gekommen sind.",
    hinweis: "5 Leute",
  },
  {
    ziel: "/ablauf",
    titel: "Ablauf & Fragen",
    text: "In drei Schritten zum Termin – und die Antworten auf die häufigsten Fragen.",
    hinweis: "6 Antworten",
  },
  {
    ziel: "/kontakt",
    titel: "Kontakt",
    text: "Telefon, Öffnungszeiten, Anfahrt und das Formular für die Terminanfrage.",
    hinweis: "Rückruf am selben Tag",
  },
];

/** Einstiegskarten auf der Startseite – macht die Unterseiten sichtbar. */
export default function Wegweiser() {
  return (
    <section className="border-b border-linie bg-flaeche-2/60 py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h2 className="text-xs font-medium tracking-[0.18em] text-gedaempft uppercase">
          Wo möchten Sie hin?
        </h2>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {karten.map((k) => (
            <li key={k.ziel}>
              <Link
                href={k.ziel}
                className="group flex h-full flex-col rounded-2xl border border-linie bg-flaeche p-6 transition-all duration-200 ease-out hover:-translate-y-1 hover:border-akzent/50 hover:shadow-lg hover:shadow-black/5 active:translate-y-0"
              >
                <span className="text-xs font-medium tracking-wide text-akzent">
                  {k.hinweis}
                </span>
                <span className="mt-3 text-lg font-medium tracking-tight">
                  {k.titel}
                </span>
                <span className="mt-2 text-sm leading-relaxed text-gedaempft">
                  {k.text}
                </span>
                <span
                  aria-hidden="true"
                  className="mt-5 inline-block text-sm text-gedaempft transition-transform duration-200 ease-out group-hover:translate-x-1 group-hover:text-akzent"
                >
                  Ansehen →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
