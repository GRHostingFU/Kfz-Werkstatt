import { defineConfig } from "tinacms";
import { bloecke } from "./bloecke";

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
        name: "seite",
        label: "Seiten",
        path: "content/seiten",
        format: "json",
        ui: {
          allowedActions: { create: false, delete: false },
          // Zeigt die passende Seite in der Vorschau neben dem Formular.
          router: (props) =>
            props.document._sys.filename === "home"
              ? "/"
              : `/${props.document._sys.filename}`,
        },
        fields: [
          {
            type: "object",
            name: "seo",
            label: "Browser-Tab und Suchmaschine",
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
            name: "bloecke",
            label: "Abschnitte",
            list: true,
            templates: bloecke,
          },
        ],
      },
      {
        name: "einstellungen",
        label: "Einstellungen",
        path: "content/einstellungen",
        format: "json",
        ui: {
          allowedActions: { create: false, delete: false },
          router: () => "/",
        },
        fields: [
          {
            type: "object",
            name: "design",
            label: "Aussehen",
            fields: [
              {
                type: "string",
                name: "palette",
                label: "Farbwelt",
                description:
                  "Gilt für die ganze Website, jeweils abgestimmt für helle und dunkle Ansicht.",
                options: [
                  { value: "werkstatt", label: "Werkstatt – warmes Braun mit Rost" },
                  { value: "stahl", label: "Stahl – Graublau mit kräftigem Blau" },
                  { value: "wald", label: "Wald – Salbei mit Tannengrün" },
                  { value: "signal", label: "Signal – Anthrazit mit Gelb" },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "betrieb",
            label: "Betriebsdaten",
            description:
              "Erscheinen im Kopf, im Fuß und auf der Kontaktseite gleichzeitig.",
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
                ui: { itemProps: (item) => ({ label: item?.tage }) },
                fields: [
                  { type: "string", name: "tage", label: "Tage" },
                  { type: "string", name: "zeit", label: "Uhrzeit" },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "navigation",
            label: "Navigation",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.label }) },
            fields: [
              { type: "string", name: "label", label: "Beschriftung" },
              { type: "string", name: "ziel", label: "Ziel (z. B. /leistungen)" },
            ],
          },
          {
            type: "object",
            name: "fusszeile",
            label: "Fußzeile",
            fields: [
              {
                type: "string",
                name: "hinweis",
                label: "Hinweistext",
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
          router: (props) => `/${props.document._sys.filename}`,
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
            ui: { itemProps: (item) => ({ label: item?.titel }) },
            fields: [
              { type: "string", name: "titel", label: "Titel" },
              {
                type: "string",
                name: "absaetze",
                label: "Absätze",
                list: true,
              },
            ],
          },
        ],
      },
    ],
  },
});
