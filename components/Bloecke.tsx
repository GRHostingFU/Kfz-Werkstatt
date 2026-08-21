"use client";

import { useTina } from "tinacms/dist/react";
import Hero from "./Hero";
import Wegweiser from "./Wegweiser";
import Leistungen from "./Leistungen";
import Werkstatt from "./Werkstatt";
import Team from "./Team";
import Ablauf from "./Ablauf";
import Faq from "./Faq";
import Kontakt from "./Kontakt";
import Schluss from "./Schluss";
import { Seitenkopf } from "./Abschnitt";
import type { Anfrage, Block, Seite } from "@/lib/inhalt";
import type { Betrieb } from "./typen";

/*
 * Rendert die Abschnitte einer Seite. useTina haengt das Dokument an den
 * Editor: im Bearbeitungsmodus kommen die Werte live aus dem Formular,
 * sonst aus den Daten, die der Server mitgegeben hat.
 */
export default function Bloecke({
  anfrage,
  betrieb,
}: {
  anfrage: Anfrage<{ seite: Seite }>;
  betrieb: Betrieb;
}) {
  const { data } = useTina({
    query: anfrage.query,
    variables: anfrage.variables,
    data: anfrage.data,
  });

  const bloecke = (data?.seite?.bloecke ?? []).filter(Boolean) as Block[];

  return (
    <>
      {bloecke.map((block, i) => {
        // Tina liefert __typename (z. B. "SeiteBloeckeHero"), die lokalen
        // Dateien _template. Beides auf den Blocknamen herunterbrechen.
        const art = (
          block._template ??
          block.__typename?.replace(/^SeiteBloecke/, "") ??
          ""
        ).toLowerCase();

        const props = block as Record<string, never>;
        const key = `${art}-${i}`;

        switch (art) {
          case "seitenkopf":
            return <Seitenkopf key={key} {...props} />;
          case "hero":
            return <Hero key={key} {...props} />;
          case "wegweiser":
            return <Wegweiser key={key} {...props} />;
          case "leistungen":
            return <Leistungen key={key} {...props} />;
          case "werkstatt":
            return <Werkstatt key={key} {...props} />;
          case "team":
            return <Team key={key} {...props} />;
          case "ablauf":
            return <Ablauf key={key} {...props} />;
          case "faq":
            return <Faq key={key} {...props} />;
          case "kontakt":
            return <Kontakt key={key} {...props} betrieb={betrieb} />;
          case "schluss":
            return <Schluss key={key} {...props} betrieb={betrieb} />;
          default:
            return null;
        }
      })}
    </>
  );
}
