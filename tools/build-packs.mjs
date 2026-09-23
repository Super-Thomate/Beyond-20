import { compilePack } from "@foundryvtt/foundryvtt-cli";

await compilePack("packs/_source/beyond20-features", "packs/beyond20-features", {
  yaml: true,
  log: true,
});
await compilePack("packs/_source/beyond20-journal", "packs/beyond20-journal", {
  yaml: true,
  log: true,
});
