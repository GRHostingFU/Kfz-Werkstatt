import { spawnSync } from "node:child_process";

/*
 * Baut Tina und danach Next.
 *
 * Die Cloud-Pruefung laeuft nur in der Produktion. Ueberall sonst wird sie
 * uebersprungen:
 *
 * - Vorschau-Deployments bauen einen Feature-Branch, den TinaCloud nicht
 *   indexiert hat – die Pruefung wuerde jede Vorschau rot faerben.
 * - In der CI gibt es bewusst keine Tina-Zugangsdaten. Der Schritt erzeugt
 *   dort nur den GraphQL-Client, damit `next build` uebersetzen kann.
 */
const produktion = process.env.VERCEL_ENV === "production";

const schritte = [
  ["tinacms", produktion ? ["build"] : ["build", "--skip-cloud-checks"]],
  ["next", ["build"]],
];

for (const [befehl, argumente] of schritte) {
  const ergebnis = spawnSync(befehl, argumente, { stdio: "inherit", shell: true });

  if (ergebnis.status !== 0) {
    process.exit(ergebnis.status ?? 1);
  }
}
