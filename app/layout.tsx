import type { Metadata, Viewport } from "next";
import "./globals.css";
import Rahmen from "@/components/Rahmen";
import { themeSkript } from "@/components/ThemeUmschalter";
import { ladeEinstellungen, ladeSeite, paletteOderStandard } from "@/lib/inhalt";

export async function generateMetadata(): Promise<Metadata> {
  const [{ data: e }, { data: s }] = await Promise.all([
    ladeEinstellungen(),
    ladeSeite("home"),
  ]);

  return {
    title: {
      default: s.seite?.seo?.title ?? e.einstellungen.betrieb.name,
      template: `%s – ${e.einstellungen.betrieb.name}`,
    },
    description: s.seite?.seo?.description ?? undefined,
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f4f1" },
    { media: "(prefers-color-scheme: dark)", color: "#14110f" },
  ],
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const anfrage = await ladeEinstellungen();
  const palette = paletteOderStandard(
    anfrage.data.einstellungen.design?.palette,
  );

  return (
    <html
      lang="de"
      data-palette={palette}
      className="h-full antialiased"
      suppressHydrationWarning
    >
      <head>
        {/* setzt den Farbmodus vor dem ersten Paint – verhindert Aufblitzen */}
        <script dangerouslySetInnerHTML={{ __html: themeSkript }} />
      </head>
      <body className="flex min-h-full flex-col">
        <a
          href="#inhalt"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-100 focus:rounded-full focus:bg-akzent focus:px-4 focus:py-2 focus:text-sm focus:text-auf-akzent"
        >
          Zum Inhalt springen
        </a>
        <Rahmen anfrage={anfrage}>{children}</Rahmen>
      </body>
    </html>
  );
}
