/**
 * Lead-Mails ohne n8n: nimmt JSON von Website-Formularen (z.B. KI-Reifegrad-Test)
 * entgegen und schickt sie sofort per Resend an das Postfach.
 * Resend wird direkt per REST aufgerufen (kein SDK noetig).
 */
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const RESEND_API = "https://api.resend.com/emails";
const TO = process.env.LEAD_TO_EMAIL || "info@ki-kanzlei.at";
const FROM = process.env.LEAD_FROM_EMAIL || "KI Kanzlei <leads@ki-kanzlei.at>";

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export async function POST(req: Request) {
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    return NextResponse.json({ error: "Mailversand nicht konfiguriert" }, { status: 500 });
  }

  let data: Record<string, unknown>;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: "Ungueltige Anfrage" }, { status: 400 });
  }

  // Honeypot: stilles OK, kein Mailversand.
  if (data.company_website) return NextResponse.json({ ok: true });

  const name = String(data.name || data.firstName || "").trim();
  const email = String(data.email || "").trim();
  if (!name || !email) {
    return NextResponse.json({ error: "Name und E-Mail erforderlich" }, { status: 400 });
  }

  const source = String(data.source || "Website-Formular");

  // Flache Felder als Zeilen, answers-Objekt separat aufschluesseln.
  const rows: [string, string][] = [];
  const skip = new Set(["answers", "company_website", "submittedAt"]);
  for (const [k, v] of Object.entries(data)) {
    if (skip.has(k) || v == null || v === "") continue;
    rows.push([k, typeof v === "object" ? JSON.stringify(v) : String(v)]);
  }
  if (data.answers && typeof data.answers === "object") {
    for (const [k, v] of Object.entries(data.answers as Record<string, unknown>)) {
      rows.push([`Antwort: ${k}`, String(v)]);
    }
  }

  const html =
    `<h2>Neue Anfrage: ${esc(source)}</h2>` +
    `<table cellpadding="6" style="border-collapse:collapse;font-family:sans-serif;font-size:14px">` +
    rows
      .map(
        ([k, v]) =>
          `<tr><td style="font-weight:600;border-bottom:1px solid #eee">${esc(k)}</td>` +
          `<td style="border-bottom:1px solid #eee">${esc(v)}</td></tr>`
      )
      .join("") +
    `</table>`;
  const text = `Neue Anfrage: ${source}\n\n${rows.map(([k, v]) => `${k}: ${v}`).join("\n")}`;

  const res = await fetch(RESEND_API, {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: FROM,
      to: [TO],
      reply_to: email,
      subject: `[${source}] ${name}`,
      html,
      text,
    }),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    return NextResponse.json({ error: "Versand fehlgeschlagen", detail }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
