import { defineConfig } from "tinacms";

// Branch, in den der Editor speichert. Auf Vercel liefert Git automatisch
// den passenden Wert, lokal fallen wir auf "main" zurueck.
const branch =
  process.env.NEXT_PUBLIC_TINA_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,
  // Beide Werte kommen aus tina.io (Projekt anlegen -> Overview).
  // Ohne sie laeuft der lokale Editor trotzdem im Dateisystem-Modus.
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID ?? "",
  token: process.env.TINA_TOKEN ?? "",

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },

  schema: {
    collections: [
      {
        name: "startseite",
        label: "Startseite",
        path: "content/pages",
        format: "json",
        match: { include: "home" },
        ui: {
          // Eine einzelne Seite: kein Anlegen/Loeschen im Editor.
          allowedActions: { create: false, delete: false },
          // Bewusst kein `router`: der wuerde den Editor in die visuelle
          // Ansicht schicken, die ohne useTina in den Komponenten keine
          // Felder anzeigt. Ohne ihn oeffnet sich direkt das Formular.
        },
        fields: [
          {
            type: "object",
            name: "seo",
            label: "SEO / Browser-Tab",
            fields: [
              { type: "string", name: "title", label: "Seitentitel" },
              {
                type: "string",
                name: "description",
                label: "Beschreibung",
                ui: { component: "textarea" },
              },
            ],
          },
          {
            type: "object",
            name: "betrieb",
            label: "Betriebsdaten",
            fields: [
              { type: "string", name: "name", label: "Name der Werkstatt" },
              { type: "string", name: "claim", label: "Untertitel / Claim" },
              { type: "string", name: "telefon", label: "Telefon" },
              { type: "string", name: "email", label: "E-Mail" },
              { type: "string", name: "strasse", label: "Straße und Nr." },
              { type: "string", name: "ort", label: "PLZ und Ort" },
              {
                type: "object",
                name: "oeffnungszeiten",
                label: "Öffnungszeiten",
                list: true,
                ui: {
                  itemProps: (item) => ({ label: item?.tage }),
                },
                fields: [
                  { type: "string", name: "tage", label: "Tage" },
                  { type: "string", name: "zeit", label: "Uhrzeit" },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "hero",
            label: "Kopfbereich",
            fields: [
              { type: "string", name: "kicker", label: "Überzeile" },
              { type: "string", name: "titel", label: "Überschrift" },
              {
                type: "string",
                name: "text",
                label: "Einleitungstext",
                ui: { component: "textarea" },
              },
              {
                type: "object",
                name: "primaerButton",
                label: "Haupt-Button",
                fields: [
                  { type: "string", name: "label", label: "Beschriftung" },
                  { type: "string", name: "ziel", label: "Ziel (z. B. #kontakt)" },
                ],
              },
              {
                type: "object",
                name: "sekundaerButton",
                label: "Zweiter Button",
                fields: [
                  { type: "string", name: "label", label: "Beschriftung" },
                  { type: "string", name: "ziel", label: "Ziel (z. B. #leistungen)" },
                ],
              },
              { type: "image", name: "bild", label: "Bild" },
              { type: "string", name: "bildAlt", label: "Bildbeschreibung (Alt-Text)" },
              {
                type: "string",
                name: "hinweise",
                label: "Kurze Versprechen",
                list: true,
              },
            ],
          },
          {
            type: "object",
            name: "leistungen",
            label: "Leistungen",
            fields: [
              { type: "string", name: "kicker", label: "Überzeile" },
              { type: "string", name: "titel", label: "Überschrift" },
              {
                type: "string",
                name: "text",
                label: "Einleitung",
                ui: { component: "textarea" },
              },
              {
                type: "object",
                name: "eintraege",
                label: "Einzelne Leistungen",
                list: true,
                ui: {
                  itemProps: (item) => ({ label: item?.titel }),
                },
                fields: [
                  { type: "string", name: "titel", label: "Titel" },
                  {
                    type: "string",
                    name: "text",
                    label: "Beschreibung",
                    ui: { component: "textarea" },
                  },
                  {
                    type: "string",
                    name: "preisHinweis",
                    label: "Preishinweis (optional)",
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "werkstatt",
            label: "Über die Werkstatt",
            fields: [
              { type: "string", name: "kicker", label: "Überzeile" },
              { type: "string", name: "titel", label: "Überschrift" },
              {
                type: "string",
                name: "absaetze",
                label: "Absätze",
                list: true,
                ui: { component: "textarea" },
              },
              { type: "image", name: "bild", label: "Bild" },
              { type: "string", name: "bildAlt", label: "Bildbeschreibung (Alt-Text)" },
              {
                type: "object",
                name: "zahlen",
                label: "Zahlen",
                list: true,
                ui: {
                  itemProps: (item) => ({ label: item?.label }),
                },
                fields: [
                  { type: "string", name: "wert", label: "Wert" },
                  { type: "string", name: "label", label: "Bezeichnung" },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "team",
            label: "Team",
            fields: [
              { type: "string", name: "kicker", label: "Überzeile" },
              { type: "string", name: "titel", label: "Überschrift" },
              {
                type: "string",
                name: "text",
                label: "Nebentext",
                ui: { component: "textarea" },
              },
              {
                type: "object",
                name: "mitglieder",
                label: "Mitarbeiter",
                list: true,
                ui: {
                  itemProps: (item) => ({ label: item?.name }),
                },
                fields: [
                  { type: "string", name: "name", label: "Name" },
                  { type: "string", name: "rolle", label: "Funktion" },
                  {
                    type: "string",
                    name: "text",
                    label: "Kurzbeschreibung",
                    ui: { component: "textarea" },
                  },
                  { type: "image", name: "bild", label: "Foto" },
                  {
                    type: "string",
                    name: "bildAlt",
                    label: "Bildbeschreibung (Alt-Text)",
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "ablauf",
            label: "Ablauf / 3 Schritte",
            fields: [
              { type: "string", name: "kicker", label: "Überzeile" },
              { type: "string", name: "titel", label: "Überschrift" },
              {
                type: "string",
                name: "text",
                label: "Einleitung",
                ui: { component: "textarea" },
              },
              {
                type: "object",
                name: "schritte",
                label: "Schritte",
                list: true,
                ui: {
                  itemProps: (item) => ({ label: item?.titel }),
                },
                fields: [
                  { type: "string", name: "nummer", label: "Nummer" },
                  { type: "string", name: "titel", label: "Titel" },
                  {
                    type: "string",
                    name: "text",
                    label: "Beschreibung",
                    ui: { component: "textarea" },
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "faq",
            label: "Häufige Fragen",
            fields: [
              { type: "string", name: "kicker", label: "Überzeile" },
              { type: "string", name: "titel", label: "Überschrift" },
              {
                type: "object",
                name: "eintraege",
                label: "Fragen",
                list: true,
                ui: {
                  itemProps: (item) => ({ label: item?.frage }),
                },
                fields: [
                  { type: "string", name: "frage", label: "Frage" },
                  {
                    type: "string",
                    name: "antwort",
                    label: "Antwort",
                    ui: { component: "textarea" },
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "kontakt",
            label: "Kontakt",
            fields: [
              { type: "string", name: "kicker", label: "Überzeile" },
              { type: "string", name: "titel", label: "Überschrift" },
              {
                type: "string",
                name: "text",
                label: "Text",
                ui: { component: "textarea" },
              },
              {
                type: "string",
                name: "formularHinweis",
                label: "Hinweis unter dem Formular",
                ui: { component: "textarea" },
              },
            ],
          },
        ],
      },
      {
        name: "rechtstext",
        label: "Rechtstexte",
        path: "content/pages",
        format: "json",
        match: { include: "{impressum,datenschutz}" },
        ui: {
          allowedActions: { create: false, delete: false },
        },
        fields: [
          { type: "string", name: "titel", label: "Überschrift" },
          {
            type: "string",
            name: "einleitung",
            label: "Einleitung",
            ui: { component: "textarea" },
          },
          {
            type: "string",
            name: "warnung",
            label: "Hinweisbox (leer lassen zum Ausblenden)",
            ui: { component: "textarea" },
          },
          {
            type: "object",
            name: "abschnitte",
            label: "Abschnitte",
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.titel }),
            },
            fields: [
              { type: "string", name: "titel", label: "Titel" },
              {
                type: "string",
                name: "absaetze",
                label: "Absätze",
                list: true,
                ui: { component: "textarea" },
              },
            ],
          },
        ],
      },
    ],
  },
});
