import client from "@/tina/__generated__/client";
import globalJson from "@/content/einstellungen/global.json";
import homeJson from "@/content/seiten/home.json";
import leistungenJson from "@/content/seiten/leistungen.json";
import werkstattJson from "@/content/seiten/werkstatt.json";
import ablaufJson from "@/content/seiten/ablauf.json";
import kontaktJson from "@/content/seiten/kontakt.json";

export type Block = { __typename?: string; _template?: string } & Record<
  string,
  unknown
>;

export type Seite = {
  seo?: { title?: string | null; description?: string | null } | null;
  bloecke?: (Block | null)[] | null;
};

export type Einstellungen = {
  design?: { palette?: string | null } | null;
  betrieb: {
    name: string;
    claim: string;
    telefon: string;
    email: string;
    strasse: string;
    ort: string;
    oeffnungszeiten: { tage: string; zeit: string }[];
  };
  navigation: { label: string; ziel: string }[];
  fusszeile?: { hinweis?: string | null } | null;
};

/** Was eine Seite zum Rendern und fuer den Editor braucht. */
export type Anfrage<T> = {
  data: T;
  query: string;
  variables: object;
};

const lokaleSeiten: Record<string, unknown> = {
  home: homeJson,
  leistungen: leistungenJson,
  werkstatt: werkstattJson,
  ablauf: ablaufJson,
  kontakt: kontaktJson,
};

export const seitenNamen = Object.keys(lokaleSeiten);

/*
 * Erst TinaCloud fragen – nur damit kennt der Editor das Dokument und kann
 * live mitschreiben. Schlaegt das fehl (keine Zugangsdaten in der CI, Dienst
 * gerade nicht erreichbar), rendern wir aus der lokalen JSON-Datei weiter.
 * Die Website ist dann vollstaendig, nur eben ohne Live-Bearbeitung.
 */
export async function ladeSeite(
  name: string,
): Promise<Anfrage<{ seite: Seite }>> {
  const relativePath = `${name}.json`;

  try {
    const antwort = await client.queries.seite({ relativePath });
    return {
      data: antwort.data as unknown as { seite: Seite },
      query: antwort.query,
      variables: antwort.variables,
    };
  } catch {
    return {
      data: { seite: lokaleSeiten[name] as Seite },
      query: "",
      variables: { relativePath },
    };
  }
}

export async function ladeEinstellungen(): Promise<
  Anfrage<{ einstellungen: Einstellungen }>
> {
  const relativePath = "global.json";

  try {
    const antwort = await client.queries.einstellungen({ relativePath });
    return {
      data: antwort.data as unknown as { einstellungen: Einstellungen },
      query: antwort.query,
      variables: antwort.variables,
    };
  } catch {
    return {
      data: { einstellungen: globalJson as Einstellungen },
      query: "",
      variables: { relativePath },
    };
  }
}

/** Telefonnummer als tel:-Link, ohne Leerzeichen und Trennzeichen. */
export function telHref(nummer: string): string {
  return `tel:${nummer.replace(/[^\d+]/g, "")}`;
}

/** Nur die vier vorbereiteten Farbwelten sind zulaessig. */
export function paletteOderStandard(wert: string | null | undefined): string {
  const erlaubt = ["werkstatt", "stahl", "wald", "signal"];
  return wert && erlaubt.includes(wert) ? wert : "werkstatt";
}
