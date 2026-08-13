import home from "@/content/pages/home.json";

export type Button = { label: string; ziel: string };

export type HomeContent = {
  seo: { title: string; description: string };
  betrieb: {
    name: string;
    claim: string;
    telefon: string;
    email: string;
    strasse: string;
    ort: string;
    oeffnungszeiten: { tage: string; zeit: string }[];
  };
  hero: {
    kicker: string;
    titel: string;
    text: string;
    primaerButton: Button;
    sekundaerButton: Button;
    bild: string;
    bildAlt: string;
    hinweise: string[];
  };
  leistungen: {
    kicker: string;
    titel: string;
    text: string;
    eintraege: { titel: string; text: string; preisHinweis?: string }[];
  };
  werkstatt: {
    kicker: string;
    titel: string;
    absaetze: string[];
    bild: string;
    bildAlt: string;
    zahlen: { wert: string; label: string }[];
  };
  team: {
    kicker: string;
    titel: string;
    text: string;
    mitglieder: {
      name: string;
      rolle: string;
      text: string;
      bild: string;
      bildAlt: string;
    }[];
  };
  ablauf: {
    kicker: string;
    titel: string;
    text: string;
    schritte: { nummer: string; titel: string; text: string }[];
  };
  faq: {
    kicker: string;
    titel: string;
    eintraege: { frage: string; antwort: string }[];
  };
  kontakt: {
    kicker: string;
    titel: string;
    text: string;
    formularHinweis: string;
  };
};

/**
 * Einzige Quelle fuer die Startseiten-Inhalte. Die JSON-Datei wird von
 * TinaCMS (/admin) bearbeitet und liegt im Git-Repo – dadurch ist der
 * Inhalt Teil des Builds und die Seite bleibt vollstaendig statisch.
 */
export function getHomeContent(): HomeContent {
  return home as HomeContent;
}

/** Telefonnummer als tel:-Link, ohne Leerzeichen und Trennzeichen. */
export function telHref(nummer: string): string {
  return `tel:${nummer.replace(/[^\d+]/g, "")}`;
}
