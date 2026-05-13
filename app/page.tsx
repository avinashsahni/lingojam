import Link from "next/link";
import { Metadata } from "next";
import { popularTranslators, translators } from "@/data/translators/_index";

export const metadata: Metadata = {
  title: "LingoJam — Free Online Text Translators & Generators",
  description:
    "Free online text translators and generators. Fancy text, Morse code, backwards text, cursive, binary, and 200+ more. No signup needed.",
  openGraph: {
    title: "LingoJam — Free Online Text Translators",
    description: "200+ free text translators and generators. Fancy text, Morse code, cursive, binary & more.",
    url: "https://lingojam.co",
  },
  alternates: { canonical: "https://lingojam.co" },
};

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-b from-indigo-50 to-white py-16 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Free Online Text Translators
        </h1>
        <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
          200+ free text generators and translators. Fancy fonts, ciphers, language styles — no signup needed.
        </p>
        <Link
          href="#translators"
          className="mt-6 inline-block bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition"
        >
          Browse All Translators →
        </Link>
      </section>

      {/* Popular Translators Grid */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Popular Translators</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {popularTranslators.map((t) => (
            <Link
              key={t.slug}
              href={`/${t.slug}`}
              className="flex flex-col items-center p-4 bg-white border border-gray-100
                         rounded-xl shadow-sm hover:shadow-md hover:border-indigo-200
                         transition text-center group"
            >
              <span className="text-3xl mb-2">{t.emoji}</span>
              <span className="text-sm font-medium text-gray-700 group-hover:text-indigo-600">
                {t.title}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* All Translators by Category */}
      <section id="translators" className="max-w-5xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">All Translators</h2>
        {["text-style", "cipher", "language", "meme"].map((cat) => {
          const items = translators.filter((t) => t.category === cat);
          if (!items.length) return null;
          const label: Record<string, string> = {
            "text-style": "✨ Text Style",
            cipher: "🔐 Ciphers & Codes",
            language: "🌍 Language",
            meme: "😂 Meme & Fun",
          };
          return (
            <div key={cat} className="mb-8">
              <h3 className="text-lg font-semibold text-gray-700 mb-3">{label[cat]}</h3>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {items.map((t) => (
                  <li key={t.slug}>
                    <Link
                      href={`/${t.slug}`}
                      className="block px-3 py-2 rounded-lg text-sm text-gray-600
                                 hover:bg-indigo-50 hover:text-indigo-700 transition"
                    >
                      {t.emoji} {t.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </section>
    </main>
  );
}