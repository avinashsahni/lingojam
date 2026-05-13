import { notFound } from "next/navigation";
import { Metadata } from "next";
import { translators, getTranslatorBySlug } from "@/data/translators/_index";
import TranslatorBox from "@/components/TranslatorBox";

// ─── Static Params ────────────────────────────────────────────────────────────
export async function generateStaticParams() {
  return translators.map((t) => ({ slug: t.slug }));
}

// ─── SEO Metadata ─────────────────────────────────────────────────────────────
export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const t = getTranslatorBySlug(slug);
  if (!t) return {};
  return {
    title: `${t.title} — LingoJam`,
    description: `${t.description} Try our free ${t.title.toLowerCase()} now! No signup needed.`,
    openGraph: {
      title: `${t.title} — LingoJam`,
      description: t.description,
      url: `https://lingojam.co/${t.slug}`,
    },
    alternates: { canonical: `https://lingojam.co/${t.slug}` },
  };
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default async function TranslatorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const translator = getTranslatorBySlug(slug);
  if (!translator) notFound();

  // JSON-LD Schemas for SEO
  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: translator.title,
    description: translator.description,
    url: `https://lingojam.co/${translator.slug}`,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://lingojam.co" },
      {
        "@type": "ListItem",
        position: 2,
        name: translator.title,
        item: `https://lingojam.co/${translator.slug}`,
      },
    ],
  };

  const faqSchema = translator.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: translator.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <main className="max-w-3xl mx-auto px-4 py-10">
        {/* Title */}
        <div className="text-center mb-8">
          <span className="text-5xl">{translator.emoji}</span>
          <h1 className="text-3xl font-bold mt-3 text-gray-900">{translator.title}</h1>
          <p className="text-gray-500 mt-2 text-base">{translator.description}</p>
        </div>

        {/* Translator UI */}
        <TranslatorBox translator={{ ...translator, fn: undefined }} />

        {/* FAQ Section */}
        {translator.faqs && translator.faqs.length > 0 && (
          <section className="mt-14">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {translator.faqs.map((faq, i) => (
                <div key={i} className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900">{faq.q}</h3>
                  <p className="text-gray-600 text-sm mt-1">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </>
  );
}