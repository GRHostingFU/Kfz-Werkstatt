/** Gemeinsame Typen der Bloecke – bewusst tolerant, weil Felder im Editor leer sein duerfen. */
export type Text = string | null | undefined;

export type Knopf = { label?: Text; ziel?: Text } | null;

export type LeistungsEintrag = {
  titel?: Text;
  text?: Text;
  preisHinweis?: Text;
} | null;

export type TeamMitglied = {
  name?: Text;
  rolle?: Text;
  text?: Text;
  bild?: Text;
  bildAlt?: Text;
} | null;

export type Schritt = { nummer?: Text; titel?: Text; text?: Text } | null;

export type Frage = { frage?: Text; antwort?: Text } | null;

export type Zahl = { wert?: Text; label?: Text } | null;

export type Karte = {
  hinweis?: Text;
  titel?: Text;
  text?: Text;
  ziel?: Text;
} | null;

export type Oeffnungszeit = { tage?: Text; zeit?: Text } | null;

export type Betrieb = {
  name?: Text;
  claim?: Text;
  telefon?: Text;
  email?: Text;
  strasse?: Text;
  ort?: Text;
  oeffnungszeiten?: (Oeffnungszeit | null)[] | null;
};

export type NaviPunkt = { label?: Text; ziel?: Text } | null;
