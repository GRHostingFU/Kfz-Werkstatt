"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { telHref } from "@/lib/inhalt";
import ThemeUmschalter from "./ThemeUmschalter";
import type { Betrieb, NaviPunkt } from "./typen";

export default function Header({
  betrieb,
  navigation,
}: {
  betrieb: Betrieb;
  navigation: (NaviPunkt | null)[];
}) {
  const pfad = usePathname();
  // Gemerkt wird der Pfad, zu dem das Menue geoeffnet wurde. Dadurch faellt
  // es beim Seitenwechsel von selbst zu, ganz ohne Effect.
  const [offenAuf, setOffenAuf] = useState<string | null>(null);
  const offen = offenAuf === pfad;

  // Menue schliessen, sobald zur Desktop-Breite gewechselt wird
  useEffect(() => {
    if (!offen) return;
    const mq = window.matchMedia("(min-width: 900px)");
    const zu = () => setOffenAuf(null);
    mq.addEventListener("change", zu);
    return () => mq.removeEventListener("change", zu);
  }, [offen]);

  return (
    <header className="sticky top-0 z-50 border-b border-linie bg-grund/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-5 py-3 sm:px-8">
        <Link
          href="/"
          className="group flex shrink-0 items-center gap-2.5 transition-opacity duration-200 ease-out hover:opacity-70"
        >
          <span className="grid size-9 place-items-center rounded-lg bg-akzent text-sm font-bold text-auf-akzent">
            KB
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block text-[0.9rem] font-semibold tracking-tight">
              {betrieb.name}
            </span>
            <span className="block text-[0.7rem] text-gedaempft">
              {betrieb.claim}
            </span>
          </span>
        </Link>

        <nav className="mx-auto hidden items-center gap-1 min-[900px]:flex">
          {navigation.filter(Boolean).map((l) => {
            const aktiv = pfad === l?.ziel;
            return (
              <Link
                key={l?.ziel}
                href={l?.ziel ?? "/"}
                aria-current={aktiv ? "page" : undefined}
                className={`rounded-full px-3.5 py-2 text-sm transition-all duration-200 ease-out ${
                  aktiv
                    ? "bg-akzent-weich font-medium text-akzent"
                    : "text-gedaempft hover:bg-flaeche-2 hover:text-inhalt"
                }`}
              >
                {l?.label}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-2 min-[900px]:ml-0">
          <ThemeUmschalter />
          <a
            href={telHref(betrieb.telefon ?? "")}
            className="hidden rounded-full bg-inhalt px-4 py-2 text-sm font-medium text-grund transition-all duration-200 ease-out hover:scale-[1.02] hover:bg-akzent hover:text-auf-akzent hover:shadow-md active:scale-[0.99] min-[900px]:block"
          >
            {betrieb.telefon}
          </a>
          <button
            type="button"
            onClick={() => setOffenAuf(offen ? null : pfad)}
            aria-expanded={offen}
            aria-controls="mobil-menue"
            className="rounded-full border border-linie px-4 py-2 text-sm transition-all duration-200 ease-out hover:bg-flaeche-2 active:scale-[0.98] min-[900px]:hidden"
          >
            {offen ? "Schließen" : "Menü"}
          </button>
        </div>
      </div>

      <div
        id="mobil-menue"
        hidden={!offen}
        className="border-t border-linie bg-grund min-[900px]:hidden"
      >
        <nav className="mx-auto flex max-w-6xl flex-col px-5 py-2 sm:px-8">
          {navigation.filter(Boolean).map((l) => (
            <Link
              key={l?.ziel}
              href={l?.ziel ?? "/"}
              aria-current={pfad === l?.ziel ? "page" : undefined}
              className={`rounded-lg px-2 py-3 text-sm transition-colors duration-200 ease-out ${
                pfad === l?.ziel
                  ? "font-medium text-akzent"
                  : "text-gedaempft hover:bg-flaeche-2 hover:text-inhalt"
              }`}
            >
              {l?.label}
            </Link>
          ))}
          <a
            href={telHref(betrieb.telefon ?? "")}
            className="mt-2 mb-3 rounded-full bg-inhalt px-4 py-3 text-center text-sm font-medium text-grund transition-all duration-200 ease-out active:scale-[0.99]"
          >
            Anrufen: {betrieb.telefon}
          </a>
        </nav>
      </div>
    </header>
  );
}
