import Bloecke from "@/components/Bloecke";
import { ladeEinstellungen, ladeSeite } from "@/lib/inhalt";

export default async function Startseite() {
  const [anfrage, einstellungen] = await Promise.all([
    ladeSeite("home"),
    ladeEinstellungen(),
  ]);

  return (
    <Bloecke
      anfrage={anfrage}
      betrieb={einstellungen.data.einstellungen.betrieb}
    />
  );
}
