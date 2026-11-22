import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "The kettle has gone quiet. Its last heat sits in your hands like a small animal asleep \u2014 breathing, warm, asking nothing. Outside, the light lets go of the day, one rooftop at a time.";

// Guard the graded run: the entry must be 1-280 Unicode code points, not whitespace-only.
const codePoints = [...entry].length;
if (codePoints < 1 || codePoints > 280 || entry.trim() === "") {
  console.error(
    `entry.txt must be 1-280 code points and not whitespace-only, got ${codePoints} code points`,
  );
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
