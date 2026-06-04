// Single source of truth for WhatsApp message pricing.
// Charged per message DELIVERED (never on failed sends). GST applied on top.
// Marketing is priced higher to reflect Meta's marketing-category charge.

export const GST_RATE = 0.18;

export const RATES: Record<string, number> = {
  marketing: 1.0,
  utility: 0.2,
  authentication: 0.2,
};

// Maps a WhatsApp template/campaign category to its wallet transaction category.
export const BILLING_CATEGORY: Record<string, string> = {
  marketing: "marketing_message",
  utility: "utility_message",
  authentication: "auth_message",
};

// Normalize a free-form category string and return its per-message rate.
// Defaults to the marketing rate for unknown/empty categories (safest = highest).
export function rateFor(category?: string | null): number {
  const key = (category || "marketing").toLowerCase();
  return RATES[key] ?? RATES.marketing;
}

// Normalized billing transaction category for a free-form category string.
export function billingCategoryFor(category?: string | null): string {
  const key = (category || "marketing").toLowerCase();
  return BILLING_CATEGORY[key] ?? "marketing_message";
}
