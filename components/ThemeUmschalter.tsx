"use client";

import { useSyncExternalStore } from "react";

export type Modus = "hell" | "dunkel";

/**
 * Wird als erstes im <head> ausgefuehrt und setzt die Klasse, bevor der
 * Browser malt. Ohne das blitzt beim Laden kurz das helle Layout auf.
 */
export const themeSkript = `
try {
  var m = localStorage.getItem("farbmodus");
  if (m === "dunkel" || (m !== "hell" && matchMedia("(prefers-color-scheme: dark)").matches)) {
    document.documentElement.classList.add("dark");
  }
} catch (e) {}
`;

/*
 * Der Farbmodus lebt am <html>-Element, nicht in React. Deshalb lesen wir
 * ihn ueber useSyncExternalStore aus dem DOM, statt ihn in einen State zu
 * spiegeln – das haelt beide Quellen automatisch deckungsgleich.
 */
const zuhoerer = new Set<() => void>();

function melden() {
  for (const cb of zuhoerer) cb();
}

function abonnieren(cb: () => void) {
  zuhoerer.add(cb);

  // Solange keine eigene Wahl gespeichert ist, folgt die Seite dem System.
  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  const folgen = () => {
    if (localStorage.getItem("farbmodus")) return;
    document.documentElement.classList.toggle("dark", mq.matches);
    melden();
  };
  mq.addEventListener("change", folgen);

  return () => {
    zuhoerer.delete(cb);
    mq.removeEventListener("change", folgen);
  };
}

const lesen = (): Modus =>
  document.documentElement.classList.contains("dark") ? "dunkel" : "hell";

/** Auf dem Server ist der Modus unbekannt – der Button rendert dann neutral. */
const lesenServer = (): Modus | null => null;

export default function ThemeUmschalter() {
  const modus = useSyncExternalStore(abonnieren, lesen, lesenServer);

  function umschalten() {
    const neu: Modus = modus === "dunkel" ? "hell" : "dunkel";
    document.documentElement.classList.toggle("dark", neu === "dunkel");
    localStorage.setItem("farbmodus", neu);
    melden();
  }

  const beschriftung =
    modus === "dunkel"
      ? "Zur hellen Ansicht wechseln"
      : "Zur dunklen Ansicht wechseln";

  return (
    <button
      type="button"
      onClick={umschalten}
      suppressHydrationWarning
      aria-label={beschriftung}
      title={beschriftung}
      className="grid size-9 shrink-0 place-items-center rounded-full border border-linie text-gedaempft transition-all duration-200 ease-out hover:scale-[1.05] hover:border-akzent hover:text-akzent active:scale-95"
    >
      {/* Sonne im Dunkelmodus, Mond im Hellmodus */}
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="size-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        suppressHydrationWarning
      >
        {modus === "dunkel" ? (
          <>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4" />
          </>
        ) : (
          <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z" />
        )}
      </svg>
    </button>
  );
}
