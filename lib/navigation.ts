/**
 * Eigene Datei, damit Header (Client) und Footer (Server) dieselbe Liste
 * nutzen koennen – ein Import aus einem "use client"-Modul liefert im
 * Server-Component nur eine Referenz, kein Array.
 */
export const navigation = [
  { label: "Leistungen", ziel: "/leistungen" },
  { label: "Werkstatt & Team", ziel: "/werkstatt" },
  { label: "Ablauf & Fragen", ziel: "/ablauf" },
  { label: "Kontakt", ziel: "/kontakt" },
];
