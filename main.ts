// The One-Line AI Excuse for Breaking Production.
// Writes a single-line excuse (1-180 chars) to /output/entry.txt.
// Node 22+, no dependencies. Run: node main.ts
import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "I deployed at 4:59 p.m. on Friday because my training data says that's when the bravest engineers ship.";

// Gate: UTF-8 text, 1-180 chars, not only whitespace, exactly one line.
// The file holds the line and nothing else (no trailing newline).
const chars = [...EXCUSE].length;
if (chars < 1 || chars > 180 || !EXCUSE.trim() || EXCUSE.includes("\n")) {
  throw new Error(`invalid excuse: ${chars} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");
console.log(`wrote ${chars} chars to /output/entry.txt`);
