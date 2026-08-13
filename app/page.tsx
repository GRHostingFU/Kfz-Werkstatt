import Hero from "@/components/Hero";
import Wegweiser from "@/components/Wegweiser";
import Leistungen from "@/components/Leistungen";
import Ablauf from "@/components/Ablauf";
import Schluss from "@/components/Schluss";
import { getHomeContent } from "@/lib/content";

export default function Startseite() {
  const inhalt = getHomeContent();

  return (
    <>
      <Hero hero={inhalt.hero} />
      <Wegweiser />
      <Leistungen leistungen={inhalt.leistungen} grenze={3} />
      <Ablauf ablauf={inhalt.ablauf} />
      <Schluss />
    </>
  );
}
