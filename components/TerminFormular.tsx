"use client";

import { useState } from "react";

const feld =
  "w-full rounded-lg border border-stone-900/15 bg-white px-4 py-3 text-sm transition-all duration-200 ease-out placeholder:text-stone-400 hover:border-stone-900/30 focus:border-rost focus:ring-2 focus:ring-rost/20 focus:outline-none";

/*
 * Demo-Formular: es geht bewusst kein Request raus und es wird nichts
 * gespeichert. So entstehen keine personenbezogenen Daten (DSGVO), solange
 * kein echter Empfaenger konfiguriert ist.
 */
export default function TerminFormular({ hinweis }: { hinweis: string }) {
  const [gesendet, setGesendet] = useState(false);

  if (gesendet) {
    return (
      <div className="rounded-2xl border border-stone-900/10 bg-white p-8">
        <h3 className="text-xl font-medium tracking-tight">
          Danke – im echten Betrieb läge die Anfrage jetzt bei uns im Büro.
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-stone-600">
          Dies ist eine Demo-Seite. Es wurde nichts verschickt und nichts
          gespeichert.
        </p>
        <button
          type="button"
          onClick={() => setGesendet(false)}
          className="mt-6 rounded-full border border-stone-900/15 px-5 py-2.5 text-sm transition-all duration-200 ease-out hover:bg-stone-900/5 active:scale-[0.99]"
        >
          Nochmal ausfüllen
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setGesendet(true);
      }}
      className="rounded-2xl border border-stone-900/10 bg-white p-6 shadow-sm transition-shadow duration-200 ease-out hover:shadow-md sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-stone-600">
            Name
          </span>
          <input name="name" required className={feld} placeholder="Vor- und Nachname" />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-medium text-stone-600">
            Telefon
          </span>
          <input
            name="telefon"
            type="tel"
            required
            className={feld}
            placeholder="Für den Rückruf"
          />
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-1.5 block text-xs font-medium text-stone-600">
            Fahrzeug
          </span>
          <input
            name="fahrzeug"
            className={feld}
            placeholder="Modell, Baujahr, Kilometerstand"
          />
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-1.5 block text-xs font-medium text-stone-600">
            Worum geht es?
          </span>
          <textarea
            name="anliegen"
            rows={5}
            required
            className={feld}
            placeholder="Zum Beispiel: Quietschen beim Bremsen, seit zwei Wochen, vorne links."
          />
        </label>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          className="rounded-full bg-oel px-6 py-3 text-sm font-medium text-sand transition-all duration-200 ease-out hover:-translate-y-px hover:bg-rost hover:shadow-lg hover:shadow-stone-900/10 active:translate-y-0 active:scale-[0.99]"
        >
          Anfrage abschicken
        </button>
        <p className="max-w-xs text-xs leading-relaxed text-stone-500">
          {hinweis}
        </p>
      </div>
    </form>
  );
}
