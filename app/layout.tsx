import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SouthFit Kuwait — CrossFit & Fitness",
  description:
    "SouthFit Kuwait — Premium CrossFit, Bootcamp, Personal Training & more. Two branches: Men's in Mangaf, Women's in Jebla.",
  keywords: [
    "SouthFit Kuwait",
    "ساوث فت",
    "CrossFit Kuwait",
    "gym Kuwait",
    "bootcamp Kuwait",
    "personal training Kuwait",
    "SouthFit Mangaf",
    "SouthFit Jebla",
    "women gym Kuwait",
    "men gym Kuwait",
  ],
  authors: [{ name: "SouthFit Kuwait" }],
  openGraph: {
    title: "SouthFit Kuwait — CrossFit & Fitness",
    description:
      "Premium CrossFit, Bootcamp, Personal Training & more. Men's & Women's branches in Kuwait.",
    type: "website",
    locale: "en_US",
    alternateLocale: "ar_KW",
    siteName: "SouthFit Kuwait",
    images: [{ url: "/logo.jpg", width: 1080, height: 1080, alt: "SouthFit Kuwait Logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SouthFit Kuwait — CrossFit & Fitness",
    description:
      "Premium CrossFit, Bootcamp, Personal Training & more. Men's & Women's branches in Kuwait.",
    images: ["/logo.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Outfit:wght@500;600;700;800;900&family=Tajawal:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#0a0a0f" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
