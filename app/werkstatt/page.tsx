import type { Metadata } from "next";
import { Seitenkopf } from "@/components/Abschnitt";
import Werkstatt from "@/components/Werkstatt";
import Team from "@/components/Team";
import Schluss from "@/components/Schluss";
import { getHomeContent } from "@/lib/content";

const { werkstatt, team } = getHomeContent();

export const metadata: Metadata = {
  title: "Werkstatt & Team",
  description: werkstatt.absaetze[0],
};

export default function WerkstattSeite() {
  return (
    <>
      <Seitenkopf kicker={werkstatt.kicker} titel={werkstatt.titel} />
      <Werkstatt werkstatt={werkstatt} kopf={false} />
      <Team team={team} />
      <Schluss />
    </>
  );
}
