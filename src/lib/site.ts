export const site = {
  name: "RIICH Trading",
  contactName: "RIICH",
  tagline: "Sourcing premium & shopping personnel",
  description:
    "Sportswear, streetwear, mode de luxe, maroquinerie, accessoires et électronique — sélectionnés selon votre brief.",
  currency: "EUR",
  locale: "fr-FR",
  contactEmail:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "preciousjohnrm5@gmail.com",
  contactPhone: process.env.NEXT_PUBLIC_CONTACT_PHONE ?? "0780297449",
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "33780297449",
} as const;

/** French numbers: accepts 078… or +33… and returns E.164 for tel:/WhatsApp. */
export function contactPhoneTel(phone = site.contactPhone): string {
  let digits = phone.replace(/\D/g, "");
  if (digits.startsWith("33")) digits = digits.slice(2);
  if (digits.startsWith("0")) digits = digits.slice(1);
  return `+33${digits}`;
}

/** Display as +33 7 80 29 74 49 */
export function contactPhoneDisplay(phone = site.contactPhone): string {
  let digits = phone.replace(/\D/g, "");
  if (digits.startsWith("33")) digits = digits.slice(2);
  if (digits.startsWith("0")) digits = digits.slice(1);
  if (digits.length === 9) {
    return `+33 ${digits[0]} ${digits.slice(1, 3)} ${digits.slice(3, 5)} ${digits.slice(5, 7)} ${digits.slice(7, 9)}`;
  }
  return phone;
}
