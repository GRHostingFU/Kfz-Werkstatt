import Link from "next/link";
import type { HomeContent } from "@/lib/content";
import { telHref } from "@/lib/content";
import { navigation } from "@/lib/navigation";

export default function Footer({
  betrieb,
}: {
  betrieb: HomeContent["betrieb"];
}) {
  return (
    <footer className="mt-auto border-t border-linie bg-flaeche-2">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-semibold tracking-tight">{betrieb.name}</p>
          <p className="mt-1 text-sm text-gedaempft">{betrieb.claim}</p>
          <p className="mt-5 text-sm text-gedaempft">
            {betrieb.strasse}
            <br />
            {betrieb.ort}
          </p>
          <a
            href={telHref(betrieb.telefon)}
            className="mt-4 inline-block text-sm font-medium text-akzent transition-opacity duration-200 ease-out hover:opacity-70"
          >
            {betrieb.telefon}
          </a>
        </div>

        <nav className="text-sm">
          <p className="mb-3 text-xs font-medium tracking-[0.14em] text-gedaempft uppercase">
            Seiten
          </p>
          <ul className="space-y-2">
            {navigation.map((l) => (
              <li key={l.ziel}>
                <Link
                  href={l.ziel}
                  className="text-gedaempft transition-colors duration-200 ease-out hover:text-akzent"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="text-sm">
          <p className="mb-3 text-xs font-medium tracking-[0.14em] text-gedaempft uppercase">
            Öffnungszeiten
          </p>
          <ul className="space-y-2 text-gedaempft">
            {betrieb.oeffnungszeiten.map((o) => (
              <li key={o.tage}>
                <span className="block text-inhalt">{o.tage}</span>
                {o.zeit}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-linie">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-5 text-xs text-gedaempft sm:px-8">
          <p>Demo-Seite ohne Tracking, ohne Cookies, ohne externe Schriftarten.</p>
          <nav className="flex gap-5">
            <Link
              href="/impressum"
              className="transition-colors duration-200 ease-out hover:text-akzent"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="transition-colors duration-200 ease-out hover:text-akzent"
            >
              Datenschutz
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
