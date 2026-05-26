import type { Metadata } from "next";
import { Darker_Grotesque, Instrument_Serif } from "next/font/google";
import Footer from "@/components/Footer";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.cobaltmade.com";

const darkerGrotesque = Darker_Grotesque({
  variable: "--font-darker-grotesque",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "COBALT",
    template: "%s | COBALT",
  },
  description:
    "COBALT is a creative studio crafting strategy-led content, branding, and campaigns for ambitious brands.",
  keywords: [
    "COBALT",
    "creative studio",
    "content production",
    "branding",
    "social media",
    "marketing agency",
  ],
  authors: [{ name: "COBALT" }],
  creator: "COBALT",
  publisher: "COBALT",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "COBALT",
    title: "COBALT",
    description:
      "COBALT is a creative studio crafting strategy-led content, branding, and campaigns for ambitious brands.",
    images: [
      {
        url: "/images/backgrounds/about-header.png",
        width: 1200,
        height: 630,
        alt: "COBALT studio work",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "COBALT",
    description:
      "COBALT is a creative studio crafting strategy-led content, branding, and campaigns for ambitious brands.",
    images: ["/images/backgrounds/about-header.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "COBALT",
    url: siteUrl,
    sameAs: ["https://www.instagram.com/cobalt.made/"],
  };

  return (
    <html lang="en">
      <body
        className={`${darkerGrotesque.variable} ${instrumentSerif.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}
