import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { themeSkript } from "@/components/ThemeUmschalter";
import { getHomeContent } from "@/lib/content";

const { seo, betrieb } = getHomeContent();

export const metadata: Metadata = {
  title: {
    default: seo.title,
    template: `%s – ${betrieb.name}`,
  },
  description: seo.description,
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f4f1" },
    { media: "(prefers-color-scheme: dark)", color: "#14110f" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="de" className="h-full antialiased" suppressHydrationWarning>
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
        <Header betrieb={betrieb} />
        <main id="inhalt">{children}</main>
        <Footer betrieb={betrieb} />
      </body>
    </html>
  );
}
