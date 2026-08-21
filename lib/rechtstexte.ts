import client from "@/tina/__generated__/client";
import impressumJson from "@/content/pages/impressum.json";
import datenschutzJson from "@/content/pages/datenschutz.json";
import type { Anfrage } from "./inhalt";
import type { RechtstextDaten } from "@/components/Rechtstext";

const lokal: Record<string, unknown> = {
  impressum: impressumJson,
  datenschutz: datenschutzJson,
};

/** Wie ladeSeite: erst TinaCloud, sonst die lokale Datei. */
export async function ladeRechtstext(
  name: "impressum" | "datenschutz",
): Promise<Anfrage<RechtstextDaten>> {
  const relativePath = `${name}.json`;

  try {
    const antwort = await client.queries.rechtstext({ relativePath });
    return {
      data: antwort.data as unknown as RechtstextDaten,
      query: antwort.query,
      variables: antwort.variables,
    };
  } catch {
    return {
      data: { rechtstext: lokal[name] } as RechtstextDaten,
      query: "",
      variables: { relativePath },
    };
  }
}
