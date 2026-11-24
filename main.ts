import { mkdirSync, writeFileSync } from "node:fs";

// One sentence: bizarre premise (rent-a-crow), real economics
// (a found earbud beats a $249 replacement), concrete buyer and price.
const pitch =
  "We rent trained crows to retrieve lost AirPods from gutters, " +
  "because a bird that finds your $249 earbud in ten minutes " +
  "is cheaper than buying a new pair.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", pitch, "utf8");
