import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Leistungen from "@/components/Leistungen";
import Werkstatt from "@/components/Werkstatt";
import Team from "@/components/Team";
import Ablauf from "@/components/Ablauf";
import Faq from "@/components/Faq";
import Kontakt from "@/components/Kontakt";
import Footer from "@/components/Footer";
import { getHomeContent } from "@/lib/content";

export default function Home() {
  const inhalt = getHomeContent();

  return (
    <>
      <Header betrieb={inhalt.betrieb} />
      <main>
        <Hero hero={inhalt.hero} />
        <Leistungen leistungen={inhalt.leistungen} />
        <Werkstatt werkstatt={inhalt.werkstatt} />
        <Team team={inhalt.team} />
        <Ablauf ablauf={inhalt.ablauf} />
        <Faq faq={inhalt.faq} />
        <Kontakt kontakt={inhalt.kontakt} betrieb={inhalt.betrieb} />
      </main>
      <Footer betrieb={inhalt.betrieb} />
    </>
  );
}
