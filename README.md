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
app/                 layout.tsx, page.tsx, globals.css
components/          Header, Hero, Leistungen, Werkstatt, Team,
                     Ablauf, Faq, Kontakt, TerminFormular, Footer
content/pages/       home.json – alle Texte und Bilder der Startseite
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

## Bewusste Entscheidungen

- **Keine externen Schriften, keine Tracker.** Ausschließlich System-Fonts,
  konfiguriert in `app/globals.css`. Damit gibt es keine Requests zu Dritten.
- **Keine Markennamen.** Es ist durchgehend von „alle Fahrzeugmarken“ die Rede.
- **Platzhalterbilder** kommen von `placehold.co` (freigegeben in
  `next.config.ts`). Echte Fotos später über den Tina-Media-Manager ersetzen.
- **Performance:** alles serverseitig gerendert, Client-JS nur im Mobilmenü und
  im Formular. Die FAQ nutzt natives `<details>`, Bilder laufen über
  `next/image` mit festen Seitenverhältnissen (kein CLS).
- **`prefers-reduced-motion`** wird respektiert.

## Noch offen für einen echten Livegang

- Impressum und Datenschutzerklärung.
- Das Kontaktformular ist eine Demo: es verschickt und speichert nichts.
- Adresse, Telefonnummer, Preise und Team sind erfunden.
