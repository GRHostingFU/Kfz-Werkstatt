import type { Metadata } from "next";
import Rechtstext from "@/components/Rechtstext";
import { getRechtstext } from "@/lib/content";

const inhalt = getRechtstext("impressum");

export const metadata: Metadata = {
  title: inhalt.titel,
  description: inhalt.einleitung,
  robots: { index: false },
};

export default function ImpressumSeite() {
  return <Rechtstext inhalt={inhalt} />;
}
