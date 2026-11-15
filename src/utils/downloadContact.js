import { profile } from "../data/profile.js";

function escapeVCard(value = "") {
  return String(value)
    .replace(/\\/g, "\\\\")
    .replace(/\n/g, "\\n")
    .replace(/,/g, "\\,")
    .replace(/;/g, "\\;");
}

export function downloadContact() {
  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${escapeVCard(profile.name)}`,
    `N:${escapeVCard(profile.name)}`,
    `TITLE:${escapeVCard(profile.role)}`
  ];

  if (profile.email && !profile.email.startsWith("YOUR_")) {
    lines.push(`EMAIL;TYPE=INTERNET:${escapeVCard(profile.email)}`);
  }
  if (profile.phone) lines.push(`TEL;TYPE=CELL:${escapeVCard(profile.phone)}`);
  if (profile.website && !profile.website.includes("YOUR_DOMAIN")) {
    lines.push(`URL:${escapeVCard(profile.website)}`);
  }
  if (profile.location) {
    lines.push(`ADR;TYPE=WORK:;;${escapeVCard(profile.location)};;;;`);
  }

  lines.push("END:VCARD");
  const blob = new Blob([lines.join("\r\n")], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "Noor-Ul-Amin.vcf";
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}
