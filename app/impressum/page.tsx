import type { Metadata } from "next";
import Rechtstext from "@/components/Rechtstext";
import { ladeRechtstext } from "@/lib/rechtstexte";

export const metadata: Metadata = {
  title: "Impressum",
  robots: { index: false },
};

export default async function ImpressumSeite() {
  const anfrage = await ladeRechtstext("impressum");
  return <Rechtstext anfrage={anfrage} />;
}
