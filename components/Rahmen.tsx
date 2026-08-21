"use client";

import { useEffect } from "react";
import { useTina } from "tinacms/dist/react";
import Header from "./Header";
import Footer from "./Footer";
import { paletteOderStandard, type Anfrage, type Einstellungen } from "@/lib/inhalt";

/*
 * Kopf und Fuss der Seite plus die gewaehlte Farbwelt. Laeuft ueber useTina,
 * damit Aenderungen an Betriebsdaten, Navigation und Palette im Editor sofort
 * sichtbar sind – ohne Speichern und ohne Neuladen.
 */
export default function Rahmen({
  anfrage,
  children,
}: {
  anfrage: Anfrage<{ einstellungen: Einstellungen }>;
  children: React.ReactNode;
}) {
  const { data } = useTina({
    query: anfrage.query,
    variables: anfrage.variables,
    data: anfrage.data,
  });

  const einstellungen = data?.einstellungen ?? anfrage.data.einstellungen;
  const palette = paletteOderStandard(einstellungen?.design?.palette);

  // Die Palette haengt am <html>-Element, damit sie auch den Hintergrund
  // hinter der Seite faerbt. Beim Wechsel im Editor hier nachziehen.
  useEffect(() => {
    document.documentElement.dataset.palette = palette;
  }, [palette]);

  return (
    <>
      <Header
        betrieb={einstellungen.betrieb}
        navigation={einstellungen.navigation}
      />
      <main id="inhalt">{children}</main>
      <Footer
        betrieb={einstellungen.betrieb}
        navigation={einstellungen.navigation}
        hinweis={einstellungen.fusszeile?.hinweis}
      />
    </>
  );
}
