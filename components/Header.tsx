"use client";

import { useEffect, useState } from "react";
import type { HomeContent } from "@/lib/content";
import { telHref } from "@/lib/content";

const links = [
  { label: "Leistungen", ziel: "#leistungen" },
  { label: "Werkstatt", ziel: "#werkstatt" },
  { label: "Team", ziel: "#team" },
  { label: "Ablauf", ziel: "#ablauf" },
  { label: "Fragen", ziel: "#faq" },
];

export default function Header({ betrieb }: { betrieb: HomeContent["betrieb"] }) {
  const [offen, setOffen] = useState(false);

  // Menue schliessen, sobald zur Desktop-Breite gewechselt wird
  useEffect(() => {
    if (!offen) return;
    const mq = window.matchMedia("(min-width: 768px)");
    const zu = () => setOffen(false);
    mq.addEventListener("change", zu);
    return () => mq.removeEventListener("change", zu);
  }, [offen]);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-900/10 bg-sand/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center gap-6 px-5 py-3 sm:px-8">
        <a
          href="#top"
          className="group flex shrink-0 items-baseline gap-2 transition-opacity duration-200 ease-out hover:opacity-70"
        >
          <span className="text-[0.95rem] font-semibold tracking-tight">
            {betrieb.name}
          </span>
          <span className="hidden text-xs text-stone-500 sm:inline">
            Lohberg
          </span>
        </a>

        <nav className="ml-auto hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.ziel}
              href={l.ziel}
              className="rounded-full px-3 py-2 text-sm text-stone-600 transition-all duration-200 ease-out hover:bg-stone-900/5 hover:text-stone-900"
            >
              {l.label}
            </a>
          ))}
          <a
            href={telHref(betrieb.telefon)}
            className="ml-2 rounded-full bg-oel px-4 py-2 text-sm font-medium text-sand transition-all duration-200 ease-out hover:scale-[1.02] hover:bg-rost hover:shadow-md active:scale-[0.99]"
          >
            {betrieb.telefon}
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOffen((v) => !v)}
          aria-expanded={offen}
          aria-controls="mobil-menue"
          className="ml-auto rounded-full border border-stone-900/15 px-4 py-2 text-sm transition-all duration-200 ease-out hover:bg-stone-900/5 active:scale-[0.98] md:hidden"
        >
          {offen ? "Schließen" : "Menü"}
        </button>
      </div>

      <div
        id="mobil-menue"
        hidden={!offen}
        className="border-t border-stone-900/10 md:hidden"
      >
        <nav className="mx-auto flex max-w-6xl flex-col px-5 py-2 sm:px-8">
          {links.map((l) => (
            <a
              key={l.ziel}
              href={l.ziel}
              onClick={() => setOffen(false)}
              className="rounded-lg px-2 py-3 text-sm text-stone-700 transition-colors duration-200 ease-out hover:bg-stone-900/5"
            >
              {l.label}
            </a>
          ))}
          <a
            href={telHref(betrieb.telefon)}
            className="mt-2 mb-3 rounded-full bg-oel px-4 py-3 text-center text-sm font-medium text-sand transition-all duration-200 ease-out active:scale-[0.99]"
          >
            Anrufen: {betrieb.telefon}
          </a>
        </nav>
      </div>
    </header>
  );
}
