import type { Template } from "tinacms";

/*
 * Die Bausteine, aus denen eine Seite besteht. Jeder Block hier hat eine
 * Entsprechung in components/bloecke/. Wer hier ein Feld ergaenzt, muss es
 * dort auch anzeigen – und umgekehrt.
 */

const text = { component: "textarea" } as const;

export const bloecke: Template[] = [
  {
    name: "seitenkopf",
    label: "Seitenkopf",
    ui: { itemProps: (item) => ({ label: `Seitenkopf – ${item?.titel ?? ""}` }) },
    fields: [
      { type: "string", name: "kicker", label: "Überzeile" },
      { type: "string", name: "titel", label: "Überschrift" },
      { type: "string", name: "text", label: "Einleitung", ui: text },
    ],
  },
  {
    name: "hero",
    label: "Kopfbereich mit Bild",
    ui: { itemProps: (item) => ({ label: `Kopfbereich – ${item?.titel ?? ""}` }) },
    fields: [
      { type: "string", name: "kicker", label: "Überzeile" },
      { type: "string", name: "titel", label: "Überschrift" },
      { type: "string", name: "text", label: "Einleitungstext", ui: text },
      {
        type: "object",
        name: "primaerButton",
        label: "Haupt-Button",
        fields: [
          { type: "string", name: "label", label: "Beschriftung" },
          { type: "string", name: "ziel", label: "Ziel (z. B. /kontakt)" },
        ],
      },
      {
        type: "object",
        name: "sekundaerButton",
        label: "Zweiter Button",
        fields: [
          { type: "string", name: "label", label: "Beschriftung" },
          { type: "string", name: "ziel", label: "Ziel (z. B. /leistungen)" },
        ],
      },
      { type: "image", name: "bild", label: "Bild" },
      { type: "string", name: "bildAlt", label: "Bildbeschreibung (Alt-Text)" },
      { type: "string", name: "hinweise", label: "Kurze Versprechen", list: true },
    ],
  },
  {
    name: "wegweiser",
    label: "Wegweiser-Karten",
    ui: { itemProps: () => ({ label: "Wegweiser-Karten" }) },
    fields: [
      { type: "string", name: "ueberschrift", label: "Überschrift" },
      {
        type: "object",
        name: "karten",
        label: "Karten",
        list: true,
        ui: { itemProps: (item) => ({ label: item?.titel }) },
        fields: [
          { type: "string", name: "hinweis", label: "Kleiner Hinweis oben" },
          { type: "string", name: "titel", label: "Titel" },
          { type: "string", name: "text", label: "Beschreibung", ui: text },
          { type: "string", name: "ziel", label: "Ziel (z. B. /leistungen)" },
        ],
      },
    ],
  },
  {
    name: "leistungen",
    label: "Leistungen",
    ui: { itemProps: (item) => ({ label: `Leistungen – ${item?.titel ?? ""}` }) },
    fields: [
      { type: "boolean", name: "mitKopf", label: "Überschrift anzeigen" },
      { type: "string", name: "kicker", label: "Überzeile" },
      { type: "string", name: "titel", label: "Überschrift" },
      { type: "string", name: "text", label: "Einleitung", ui: text },
      {
        type: "number",
        name: "grenze",
        label: "Nur so viele zeigen (0 = alle)",
        description: "Bei einer Zahl größer 0 erscheint darunter ein Link auf die Leistungsseite.",
      },
      {
        type: "object",
        name: "eintraege",
        label: "Einzelne Leistungen",
        list: true,
        ui: { itemProps: (item) => ({ label: item?.titel }) },
        fields: [
          { type: "string", name: "titel", label: "Titel" },
          { type: "string", name: "text", label: "Beschreibung", ui: text },
          { type: "string", name: "preisHinweis", label: "Preishinweis (optional)" },
        ],
      },
    ],
  },
  {
    name: "werkstatt",
    label: "Werkstatt-Porträt",
    ui: { itemProps: (item) => ({ label: `Werkstatt – ${item?.titel ?? ""}` }) },
    fields: [
      { type: "boolean", name: "mitKopf", label: "Überschrift anzeigen" },
      { type: "string", name: "kicker", label: "Überzeile" },
      { type: "string", name: "titel", label: "Überschrift" },
      { type: "string", name: "absaetze", label: "Absätze", list: true },
      { type: "image", name: "bild", label: "Bild" },
      { type: "string", name: "bildAlt", label: "Bildbeschreibung (Alt-Text)" },
      {
        type: "object",
        name: "zahlen",
        label: "Zahlen",
        list: true,
        ui: { itemProps: (item) => ({ label: item?.label }) },
        fields: [
          { type: "string", name: "wert", label: "Wert" },
          { type: "string", name: "label", label: "Bezeichnung" },
        ],
      },
    ],
  },
  {
    name: "team",
    label: "Team",
    ui: { itemProps: (item) => ({ label: `Team – ${item?.titel ?? ""}` }) },
    fields: [
      { type: "string", name: "kicker", label: "Überzeile" },
      { type: "string", name: "titel", label: "Überschrift" },
      { type: "string", name: "text", label: "Nebentext", ui: text },
      {
        type: "object",
        name: "mitglieder",
        label: "Mitarbeiter",
        list: true,
        ui: { itemProps: (item) => ({ label: item?.name }) },
        fields: [
          { type: "string", name: "name", label: "Name" },
          { type: "string", name: "rolle", label: "Funktion" },
          { type: "string", name: "text", label: "Kurzbeschreibung", ui: text },
          { type: "image", name: "bild", label: "Foto" },
          { type: "string", name: "bildAlt", label: "Bildbeschreibung (Alt-Text)" },
        ],
      },
    ],
  },
  {
    name: "ablauf",
    label: "Ablauf in Schritten",
    ui: { itemProps: (item) => ({ label: `Ablauf – ${item?.titel ?? ""}` }) },
    fields: [
      { type: "boolean", name: "mitKopf", label: "Überschrift anzeigen" },
      { type: "string", name: "kicker", label: "Überzeile" },
      { type: "string", name: "titel", label: "Überschrift" },
      { type: "string", name: "text", label: "Einleitung", ui: text },
      {
        type: "object",
        name: "schritte",
        label: "Schritte",
        list: true,
        ui: { itemProps: (item) => ({ label: item?.titel }) },
        fields: [
          { type: "string", name: "nummer", label: "Nummer" },
          { type: "string", name: "titel", label: "Titel" },
          { type: "string", name: "text", label: "Beschreibung", ui: text },
        ],
      },
    ],
  },
  {
    name: "faq",
    label: "Häufige Fragen",
    ui: { itemProps: (item) => ({ label: `Fragen – ${item?.titel ?? ""}` }) },
    fields: [
      { type: "string", name: "kicker", label: "Überzeile" },
      { type: "string", name: "titel", label: "Überschrift" },
      {
        type: "object",
        name: "eintraege",
        label: "Fragen",
        list: true,
        ui: { itemProps: (item) => ({ label: item?.frage }) },
        fields: [
          { type: "string", name: "frage", label: "Frage" },
          { type: "string", name: "antwort", label: "Antwort", ui: text },
        ],
      },
    ],
  },
  {
    name: "kontakt",
    label: "Kontakt mit Formular",
    ui: { itemProps: (item) => ({ label: `Kontakt – ${item?.titel ?? ""}` }) },
    fields: [
      { type: "string", name: "kicker", label: "Überzeile" },
      { type: "string", name: "titel", label: "Überschrift" },
      { type: "string", name: "text", label: "Text", ui: text },
      {
        type: "string",
        name: "formularHinweis",
        label: "Hinweis unter dem Formular",
        ui: text,
      },
    ],
  },
  {
    name: "schluss",
    label: "Abschluss mit Telefonnummer",
    ui: { itemProps: (item) => ({ label: `Abschluss – ${item?.titel ?? ""}` }) },
    fields: [
      { type: "string", name: "titel", label: "Überschrift" },
      { type: "string", name: "text", label: "Text", ui: text },
      { type: "string", name: "buttonLabel", label: "Beschriftung zweiter Button" },
      { type: "string", name: "buttonZiel", label: "Ziel zweiter Button" },
    ],
  },
];
