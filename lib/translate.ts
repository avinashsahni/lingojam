import { Translator } from "./types";
import { getTranslatorBySlug } from "@/data/translators/_index";

export function translate(input: string, translator: Translator): string {
  if (!input.trim()) return "";

  switch (translator.type) {
    case "charmap":
      return charMapTranslate(input, translator.rules!);
    case "wordmap":
      return wordMapTranslate(input, translator.rules!);
    case "function": {
      // Re-fetch the translator to get the non-serializable function
      const fullTranslator = getTranslatorBySlug(translator.slug);
      return fullTranslator?.fn ? fullTranslator.fn(input) : input;
    }
    default:
      return input;
  }
}

// Replaces each character using a map
function charMapTranslate(input: string, rules: Record<string, string>): string {
  return input
    .split("")
    .map((ch) => rules[ch] ?? rules[ch.toLowerCase()] ?? ch)
    .join("");
}

// Replaces whole words using a map (case-insensitive)
function wordMapTranslate(input: string, rules: Record<string, string>): string {
  return input
    .split(/(\s+)/)
    .map((token) => {
      if (/^\s+$/.test(token)) return token;
      const lower = token.toLowerCase();
      return rules[lower] ?? rules[token] ?? token;
    })
    .join("");
}