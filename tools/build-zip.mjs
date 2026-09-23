import fs from "node:fs";
import { ZipArchive } from "archiver";

const OUTPUT = "module.zip";
const FILES = ["module.json", "LICENSE", "README.md"];
const DIRS = ["scripts", "packs/beyond20-features", "packs/beyond20-journal"];

const output = fs.createWriteStream(OUTPUT);
const archive = new ZipArchive({ zlib: { level: 9 } });

output.on("close", () => console.log(`${OUTPUT} written (${archive.pointer()} bytes)`));
archive.on("error", (err) => {
  throw err;
});

archive.pipe(output);
for (const file of FILES) {
  if (fs.existsSync(file)) archive.file(file, { name: file });
}
for (const dir of DIRS) {
  if (fs.existsSync(dir)) archive.directory(dir, dir);
}
await archive.finalize();
