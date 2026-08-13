import Link from "next/link";
import type { HomeContent } from "@/lib/content";

export default function Footer({
  betrieb,
}: {
  betrieb: HomeContent["betrieb"];
}) {
  return (
    <footer className="mt-auto border-t border-stone-900/10 bg-oel py-14 text-sand">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 md:grid-cols-3">
        <div>
          <p className="font-semibold tracking-tight">{betrieb.name}</p>
          <p className="mt-1 text-sm text-stone-400">{betrieb.claim}</p>
        </div>
        <div className="text-sm text-stone-300">
          <p>{betrieb.strasse}</p>
          <p>{betrieb.ort}</p>
          <p className="mt-3">{betrieb.telefon}</p>
          <p>{betrieb.email}</p>
        </div>
        <div className="text-sm text-stone-400">
          <p>
            Demo-Seite ohne Tracking, ohne Cookies, ohne externe Schriftarten.
          </p>
          <nav className="mt-4 flex gap-5">
            <Link
              href="/impressum"
              className="transition-colors duration-200 ease-out hover:text-sand"
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="transition-colors duration-200 ease-out hover:text-sand"
            >
              Datenschutz
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
