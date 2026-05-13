import Link from "next/link";
import { translators } from "@/data/translators/_index";

// Pick top translators per category for footer links (great for internal SEO)
const footerCategories = [
  {
    label: "✨ Text Style",
    links: translators
      .filter((t) => t.category === "text-style")
      .slice(0, 6),
  },
  {
    label: "🔐 Ciphers & Codes",
    links: translators
      .filter((t) => t.category === "cipher")
      .slice(0, 6),
  },
  {
    label: "🌍 Language",
    links: translators
      .filter((t) => t.category === "language")
      .slice(0, 6),
  },
  {
    label: "😂 Meme & Fun",
    links: translators
      .filter((t) => t.category === "meme")
      .slice(0, 6),
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 mt-12">
      <div className="max-w-6xl mx-auto px-4 py-12">

        {/* Link Grid — internal linking for SEO */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {footerCategories.map((cat) => (
            <div key={cat.label}>
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                {cat.label}
              </h3>
              <ul className="space-y-2">
                {cat.links.map((t) => (
                  <li key={t.slug}>
                    <Link
                      href={`/${t.slug}`}
                      className="text-sm text-gray-600 hover:text-indigo-600 transition"
                    >
                      {t.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-indigo-600 font-bold text-lg">
            <span>🗣️</span> LingoJam
          </div>

          <p className="text-xs text-gray-400 text-center">
            © {new Date().getFullYear()} LingoJam.co — Free online text translators and generators.
          </p>

          <nav className="flex items-center gap-4">
            <Link href="/" className="text-xs text-gray-400 hover:text-gray-600 transition">
              Home
            </Link>
            <Link href="/#translators" className="text-xs text-gray-400 hover:text-gray-600 transition">
              All Translators
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}