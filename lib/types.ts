export type TranslatorType = "wordmap" | "charmap" | "function";

export interface Translator {
  slug: string;              // URL: lingojam.co/fancy-text-generator
  title: string;             // "Fancy Text Generator"
  description: string;       // For meta tags + page intro
  category: string;          // "text-style" | "language" | "cipher" | "meme"
  emoji: string;             // For cards
  type: TranslatorType;
  rules?: Record<string, string>;   // For wordmap / charmap
  fn?: (input: string) => string;   // For function-based translators
  popular?: boolean;         // Show on homepage
  faqs?: { q: string; a: string }[]; // SEO FAQ section
}