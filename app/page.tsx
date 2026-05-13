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
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "LingoJam",
    url: "https://lingojam.co",
    description: "200+ free online text translators and generators.",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://lingojam.co/{search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
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

        {/* SEO Content Section */}
        <section className="bg-gray-50 py-16 border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">About LingoJam</h2>
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-xl font-semibold text-indigo-600 mb-3">What is LingoJam?</h3>
                <p className="text-gray-600 leading-relaxed">
                  LingoJam is a free suite of online text tools designed to help you transform your
                  messages into something unique. Whether you need <strong>fancy fonts</strong> for
                  social media, <strong>secret ciphers</strong> for puzzles, or fun
                  <strong> language styles</strong> like Pig Latin or UwU, we have over 200 generators
                  to choose from.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-indigo-600 mb-3">How to use it?</h3>
                <p className="text-gray-600 leading-relaxed">
                  Simply choose a translator from our library, type your text in the input box, and
                  watch as it converts instantly. You can then copy the stylized text to use on
                  Instagram, Twitter, Discord, or anywhere else that supports Unicode. No signup or
                  installation required!
                </p>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <h4 className="font-bold text-gray-800 mb-2">Are these translators free?</h4>
                  <p className="text-gray-600 text-sm">
                    Yes, all translators on LingoJam are 100% free to use. We do not require any
                    registration or personal information.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <h4 className="font-bold text-gray-800 mb-2">Where can I use the fancy text?</h4>
                  <p className="text-gray-600 text-sm">
                    Our generators use special Unicode characters. They work on most modern platforms
                    including Instagram, Facebook, TikTok, Twitter, Discord, and messaging apps like
                    WhatsApp and Telegram.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}