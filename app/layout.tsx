import type { Metadata, Viewport } from "next";
import "./globals.css";
import { getHomeContent } from "@/lib/content";

const { seo } = getHomeContent();

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
};

export const viewport: Viewport = {
  themeColor: "#f7f5f2",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="de" className="h-full antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
