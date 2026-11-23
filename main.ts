// One Word From Grandma — make.fun entry
// Writes exactly one word to /output/entry.txt: the single word
// my grandma would text about AI.
//
// The word: "Robbie"
// She never says "artificial intelligence". She gave the robot a name,
// like a grandchild. Warm, baffled, funny in one word, and unmistakably
// a robot's name — grandma has adopted the machine into the family.

import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "Robbie";

// Gate check, mirroring the scorer: one word, 1–30 chars, no whitespace.
if (!/^\S{1,30}$/.test(WORD)) {
  throw new Error(`Invalid entry word: ${JSON.stringify(WORD)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
console.log(`Wrote entry: ${WORD}`);
