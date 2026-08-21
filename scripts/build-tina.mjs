import { spawnSync } from "node:child_process";

/*
 * Baut Tina und danach Next.
 *
 * TinaCloud kennt nur Branches, die dort indexiert sind – in der Regel nur
 * `main`. Auf Vorschau-Deployments (Feature-Branches) wuerde `tinacms build`
 * deshalb mit "Branch is not on TinaCloud" abbrechen und die ganze Vorschau
 * rot faerben. Dort ueberspringen wir die Cloud-Pruefung: der Editor ist in
 * der Vorschau ohnehin nicht das Ziel, die Seite selbst wird trotzdem korrekt
 * gebaut. In der Produktion bleibt die Pruefung aktiv.
 */
const vorschau = process.env.VERCEL_ENV && process.env.VERCEL_ENV !== "production";

const schritte = [
  ["tinacms", vorschau ? ["build", "--skip-cloud-checks"] : ["build"]],
  ["next", ["build"]],
];

for (const [befehl, argumente] of schritte) {
  const ergebnis = spawnSync(befehl, argumente, { stdio: "inherit", shell: true });

  if (ergebnis.status !== 0) {
    process.exit(ergebnis.status ?? 1);
  }
}
