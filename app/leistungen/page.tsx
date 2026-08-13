import type { Metadata } from "next";
import { Seitenkopf } from "@/components/Abschnitt";
import Leistungen from "@/components/Leistungen";
import Schluss from "@/components/Schluss";
import { getHomeContent } from "@/lib/content";

const { leistungen } = getHomeContent();

export const metadata: Metadata = {
  title: "Leistungen",
  description: leistungen.text,
};

export default function LeistungenSeite() {
  return (
    <>
      <Seitenkopf
        kicker={leistungen.kicker}
        titel={leistungen.titel}
        text={leistungen.text}
      />
      <Leistungen leistungen={leistungen} kopf={false} />
      <Schluss />
    </>
  );
}
