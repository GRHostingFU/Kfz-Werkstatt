import type { Metadata } from "next";
import { Seitenkopf } from "@/components/Abschnitt";
import Ablauf from "@/components/Ablauf";
import Faq from "@/components/Faq";
import Schluss from "@/components/Schluss";
import { getHomeContent } from "@/lib/content";

const { ablauf, faq } = getHomeContent();

export const metadata: Metadata = {
  title: "Ablauf & häufige Fragen",
  description: ablauf.text,
};

export default function AblaufSeite() {
  return (
    <>
      <Seitenkopf
        kicker={ablauf.kicker}
        titel={ablauf.titel}
        text={ablauf.text}
      />
      <Ablauf ablauf={ablauf} kopf={false} />
      <Faq faq={faq} />
      <Schluss />
    </>
  );
}
