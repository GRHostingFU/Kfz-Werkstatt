import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Rechtstext from "@/components/Rechtstext";
import { getHomeContent, getRechtstext } from "@/lib/content";

const inhalt = getRechtstext("impressum");

export const metadata: Metadata = {
  title: `${inhalt.titel} – Kfz-Werkstatt Brandner`,
  description: inhalt.einleitung,
  robots: { index: false },
};

export default function ImpressumSeite() {
  const { betrieb } = getHomeContent();

  return (
    <>
      <Header betrieb={betrieb} />
      <main>
        <Rechtstext inhalt={inhalt} />
      </main>
      <Footer betrieb={betrieb} />
    </>
  );
}
