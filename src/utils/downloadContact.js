import { profile } from "../data/profile.js";

const escapeField = (value = "") => String(value)
  .replace(/\\/g, "\\\\")
  .replace(/\n/g, "\\n")
  .replace(/,/g, "\\,")
  .replace(/;/g, "\\;");

export function downloadContact() {
  const card = [
    "BEGIN:VCARD", "VERSION:3.0",
    `FN:${escapeField(profile.name)}`,
    `N:${escapeField(profile.name)}`,
    `TITLE:${escapeField(profile.role)}`,
    `EMAIL;TYPE=INTERNET:${escapeField(profile.email)}`,
    `TEL;TYPE=CELL:${escapeField(profile.phone)}`,
    `URL:${escapeField(profile.social.linkedin)}`,
    `ADR;TYPE=WORK:;;${escapeField(profile.location)};;;;`,
    "END:VCARD"
  ].join("\r\n");
  const url = URL.createObjectURL(new Blob([card], { type: "text/vcard;charset=utf-8" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = "Noor-Ul-Amin.vcf";
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}