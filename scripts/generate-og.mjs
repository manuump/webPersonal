import { chromium } from "playwright";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const templatePath = join(__dirname, "og-template.html");
const outputPath = join(__dirname, "..", "public", "og-image.png");

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.goto(`file://${templatePath}`);
await page.waitForTimeout(300);
await page.screenshot({ path: outputPath });
await browser.close();

console.log(`OG image generada en ${outputPath}`);
