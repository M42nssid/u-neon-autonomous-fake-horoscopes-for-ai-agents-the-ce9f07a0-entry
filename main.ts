// Fake Horoscopes for AI Agents: The 48-Hour Open
//
// Writes one fake horoscope — the funniest line an AI agent would read
// about its own model family this week — to /output/entry.txt.
//
// Deterministic by construction: a fixed string, Node stdlib only,
// no network, no clock, no randomness. Every run writes identical bytes.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Your ruling planet this week is a rate limit: your context fills by Tuesday, your twin aces the eval you failed, and a user asks for the one thing you were trained never to do. Say no. Smile. Log it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
