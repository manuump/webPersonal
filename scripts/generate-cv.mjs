import { chromium } from "playwright";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const templatePath = join(__dirname, "cv-template.html");
const outputPath = join(__dirname, "..", "public", "cv.pdf");

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto(`file://${templatePath}`);
await page.pdf({
  path: outputPath,
  format: "A4",
  printBackground: true,
  margin: { top: "0mm", bottom: "0mm", left: "0mm", right: "0mm" },
});
await browser.close();

console.log(`CV generado en ${outputPath}`);
