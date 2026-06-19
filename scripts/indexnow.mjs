// IndexNow-Submit: pingt alle sitemap.xml-URLs an Bing/Yandex/Seznam (instant).
// Voraussetzung: Seite + Key-File live deployed. Lauf: node scripts/indexnow.mjs
// Re-runnbar nach jeder neuen Seite. Google -> separat via Search Console.
import { readFileSync } from "node:fs";

const HOST = "ki-kanzlei.at";
const KEY = "6daef3175a49e0130b889240d1840849";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const xml = readFileSync(new URL("../public/sitemap.xml", import.meta.url), "utf-8");
const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
if (urlList.length === 0) throw new Error("Keine URLs in sitemap.xml gefunden");

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
});

// IndexNow: 200/202 = akzeptiert, 403 = Key-File nicht erreichbar, 422 = URL/Host-Mismatch
console.log(`${urlList.length} URLs -> IndexNow: HTTP ${res.status} ${res.statusText}`);
if (!res.ok) {
  console.error(await res.text());
  process.exit(1);
}
