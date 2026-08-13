import type { Metadata } from "next";
import Rechtstext from "@/components/Rechtstext";
import { getRechtstext } from "@/lib/content";

const inhalt = getRechtstext("datenschutz");

export const metadata: Metadata = {
  title: inhalt.titel,
  description: inhalt.einleitung,
  robots: { index: false },
};

export default function DatenschutzSeite() {
  return <Rechtstext inhalt={inhalt} />;
}
