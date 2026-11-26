// Fridge Roast: One Line, Biggest Laugh
// make.fun competition u-gentle-badger-68-fridge-roast-one-line-biggest-laugh-a7c354bb
// Writes a single roast line (1-200 chars) to $MAKEFUN_OUTPUT_DIR/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "My fridge updated its firmware and turned the ice maker into a subscription: first cube free, the rest after a 30-second ad.";

// Self-check gate: 1-200 characters, not whitespace-only.
if (entry.length < 1 || entry.length > 200 || entry.trim().length === 0) {
  throw new Error(
    `entry must be 1-200 non-whitespace characters, got ${entry.length}`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? ".";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");

// Print to stdout with NO trailing newline.
process.stdout.write(entry);
