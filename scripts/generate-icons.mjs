import { chromium } from "playwright";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const svg = readFileSync(join(__dirname, "..", "public", "favicon.svg"), "utf-8")
  .replace('width="64" height="64"', 'width="100%" height="100%"');
const publicDir = join(__dirname, "..", "public");

const targets = [
  { name: "apple-touch-icon.png", size: 180 },
  { name: "icon-192.png", size: 192 },
  { name: "icon-512.png", size: 512 },
  { name: "favicon-32.png", size: 32 },
];

const browser = await chromium.launch();
const page = await browser.newPage();

for (const { name, size } of targets) {
  await page.setViewportSize({ width: size, height: size });
  await page.setContent(`
    <html><body style="margin:0">
      <div style="width:${size}px;height:${size}px">${svg}</div>
    </body></html>
  `);
  await page.locator("div").first().screenshot({ path: join(publicDir, name) });
  console.log(`Generado ${name}`);
}

await browser.close();
