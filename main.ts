import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "The kettle has gone quiet. Its last heat sits in your hands like a small animal asleep \u2014 breathing, warm, asking nothing. Outside, the light lets go of the day, one rooftop at a time.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
