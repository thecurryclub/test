import Image from "next/image";

export const metadata = {
  title: "The Culture Box",
  openGraph: {
    title: "The Culture Box",
    images: [
      {
        url: "/og/culture-box.png", // place this file in /public/og/
        width: 1200,
        height: 630,
        alt: "Tru Flavors – The Culture Box",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og/culture-box.png"],
  },
};

export default function Page() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left column: text */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark">
            The Culture Box
          </h1>
          <p className="text-lg text-gray-700">
            A curated selection of our finest Tru Flavors curry kits delivered
            monthly. Hand-picked recipes, bold flavors, and gut-friendly
            ingredients—all packed with convenience.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Chef-crafted recipes, ready in minutes</li>
            <li>Balanced with wellness in mind</li>
            <li>Exclusive monthly creations</li>
          </ul>
        </div>

        {/* Right column: image */}
        <div className="relative rounded-2xl overflow-hidden bg-brand-light h-64 md:h-80">
          <Image
            src="/og/culture-box.png"
            alt="Tru Flavors Culture Box – monthly curated curry kits"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </div>
    </main>
  );
}
