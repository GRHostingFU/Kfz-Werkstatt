import type { Metadata } from "next";
import { Seitenkopf } from "@/components/Abschnitt";
import Kontakt from "@/components/Kontakt";
import { getHomeContent } from "@/lib/content";

const { kontakt, betrieb } = getHomeContent();

export const metadata: Metadata = {
  title: "Kontakt & Termin",
  description: kontakt.text,
};

export default function KontaktSeite() {
  return (
    <>
      <Seitenkopf kicker={kontakt.kicker} titel={kontakt.titel} />
      <Kontakt kontakt={kontakt} betrieb={betrieb} />
    </>
  );
}
