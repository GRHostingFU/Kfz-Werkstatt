# Kfz-Werkstatt – Demo-Website

Test-Website für eine freie Kfz-Werkstatt. Next.js (App Router) + Tailwind CSS v4 + TinaCMS.

## Schnellstart

```bash
npm install
npm run dev          # nur die Website        -> http://localhost:3000
npm run dev:tina     # Website + Live-Editor  -> http://localhost:3000/admin
```

## Struktur

```
app/                 layout.tsx (Header/Footer/Theme), page.tsx, globals.css
                     leistungen/, werkstatt/, ablauf/, kontakt/
                     impressum/, datenschutz/
components/          Header, Hero, Wegweiser, Leistungen, Werkstatt, Team,
                     Ablauf, Faq, Kontakt, TerminFormular, Schluss, Footer
                     ThemeUmschalter, Bild, Abschnitt, Rechtstext
lib/navigation.ts    Navigationspunkte (von Header und Footer geteilt)
public/bilder/       SVG-Illustrationen (Halle, Hebebühne, Porträts)
content/pages/       home.json – alle Texte und Bilder der Startseite
                     impressum.json, datenschutz.json
lib/content.ts       typisierter Zugriff auf den Inhalt
tina/config.ts       TinaCMS-Collections für den Editor
```

Die gesamte Startseite wird aus `content/pages/home.json` gerendert. Wer im
Editor speichert, ändert diese Datei – daraus baut Next.js beim nächsten
Deploy wieder eine statische Seite.

## TinaCMS einrichten

1. Projekt auf [app.tina.io](https://app.tina.io) anlegen, Repository verbinden.
2. `.env.example` nach `.env` kopieren und ausfüllen:
   - `NEXT_PUBLIC_TINA_CLIENT_ID`
   - `TINA_TOKEN`
   - `NEXT_PUBLIC_TINA_BRANCH` (optional, Standard `main`)
3. Lokal `npm run dev:tina` starten, Editor unter `/admin`.

Ohne Credentials läuft der Editor lokal im Dateisystem-Modus – die Website
selbst funktioniert in jedem Fall, auch ganz ohne Tina.

## Deployment auf Vercel

Repository importieren, fertig – das Standard-Build-Kommando `npm run build`
(= `next build`) braucht keine Umgebungsvariablen und läuft beim ersten
Versuch durch.

Sobald die Tina-Credentials in den Vercel-Projekt-Einstellungen hinterlegt
sind, kann das Build-Kommando auf `npm run build:tina` umgestellt werden –
dann wird der Editor mit nach `/admin` deployt.

`build:tina` läuft über `scripts/build-tina.mjs`. Auf Vorschau-Deployments
überspringt es die TinaCloud-Prüfung, weil dort meist ein Feature-Branch
gebaut wird und TinaCloud nur indexierte Branches kennt – sonst wäre jede
Vorschau rot. In der Produktion bleibt die Prüfung aktiv.

## Bewusste Entscheidungen

- **Keine externen Schriften, keine Tracker.** Ausschließlich System-Fonts,
  konfiguriert in `app/globals.css`. Damit gibt es keine Requests zu Dritten.
- **Hell und Dunkel.** Der Modus folgt beim ersten Besuch der Systemeinstellung,
  der Schalter oben rechts überschreibt sie und merkt sich die Wahl in
  `localStorage`. Ein Inline-Skript im `<head>` setzt die Klasse vor dem ersten
  Paint, deshalb blitzt beim Laden nichts auf. Farben laufen ausnahmslos über
  Tokens (`bg-grund`, `text-inhalt`, `text-akzent` …), definiert in
  `app/globals.css` – neue Komponenten sind damit automatisch in beiden Modi
  richtig.
- **Fünf Seiten statt One-Pager.** Startseite mit Anrissen, dazu Leistungen,
  Werkstatt & Team, Ablauf & Fragen sowie Kontakt. Header und Footer stehen im
  Root-Layout, die Seiten liefern nur ihren Inhalt.
- **Keine Markennamen.** Es ist durchgehend von „alle Fahrzeugmarken“ die Rede.
- **Bilder sind selbst gezeichnete SVGs** in `public/bilder/`. Sie liegen im
  Projekt, laden sofort und laufen am Image-Optimizer vorbei (siehe
  `components/Bild.tsx`). Echte Fotos später über den Tina-Media-Manager
  drüberlegen – die Bildfelder sind im Editor austauschbar.
- **Performance:** alles serverseitig gerendert, Client-JS nur im Mobilmenü und
  im Formular. Die FAQ nutzt natives `<details>`, Bilder laufen über
  `next/image` mit festen Seitenverhältnissen (kein CLS).
- **`prefers-reduced-motion`** wird respektiert.

## Rechtstexte

Impressum (`/impressum`) und Datenschutzerklärung (`/datenschutz`) liegen als
`content/pages/impressum.json` bzw. `datenschutz.json` und sind über den Tina-
Editor unter „Rechtstexte“ bearbeitbar. Beide Seiten sind über `robots: noindex`
von der Indexierung ausgenommen, solange die Angaben erfunden sind.

Der Datenschutztext beschreibt den tatsächlichen Stand dieser Demo: keine
Cookies, kein Tracking, keine externen Schriften, deshalb bewusst kein
Cookie-Banner. Sobald echte Dienste dazukommen (Karte, Analyse, Formular-
Versand), muss der Text ergänzt werden.

## Noch offen für einen echten Livegang

- Angaben in Impressum und Datenschutzerklärung durch die echten Daten
  ersetzen und juristisch prüfen lassen. Die Texte sind Vorlagen, keine
  Rechtsberatung.
- Das Kontaktformular ist eine Demo: es verschickt und speichert nichts.
- Adresse, Telefonnummer, Preise und Team sind erfunden.
