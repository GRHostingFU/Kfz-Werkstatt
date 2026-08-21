import type { Metadata } from "next";
import Rechtstext from "@/components/Rechtstext";
import { ladeRechtstext } from "@/lib/rechtstexte";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  robots: { index: false },
};

export default async function DatenschutzSeite() {
  const anfrage = await ladeRechtstext("datenschutz");
  return <Rechtstext anfrage={anfrage} />;
}
