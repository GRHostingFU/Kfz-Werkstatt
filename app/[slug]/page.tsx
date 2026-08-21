import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Bloecke from "@/components/Bloecke";
import { ladeEinstellungen, ladeSeite, seitenNamen } from "@/lib/inhalt";

// Alle Unterseiten sind bekannt und werden statisch vorgerendert.
export function generateStaticParams() {
  return seitenNamen
    .filter((name) => name !== "home")
    .map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: PageProps<"/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const { data } = await ladeSeite(slug);

  return {
    title: data.seite?.seo?.title ?? undefined,
    description: data.seite?.seo?.description ?? undefined,
  };
}

export default async function Unterseite({ params }: PageProps<"/[slug]">) {
  const { slug } = await params;
  if (!seitenNamen.includes(slug)) notFound();

  const [anfrage, einstellungen] = await Promise.all([
    ladeSeite(slug),
    ladeEinstellungen(),
  ]);

  return (
    <Bloecke
      anfrage={anfrage}
      betrieb={einstellungen.data.einstellungen.betrieb}
    />
  );
}
