import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DAINTYMINDZ LAB — Where Precision Meets Innovation",
  description:
    "DAINTYMINDZ LTD is a forward-thinking innovation lab driving intellectual energy, scientific rigor, and bold solutions for tomorrow's challenges.",
  keywords: [
    "DAINTYMINDZ",
    "innovation lab",
    "technology",
    "research",
    "scientific rigor",
    "precision",
  ],
  openGraph: {
    title: "DAINTYMINDZ LAB — Where Precision Meets Innovation",
    description:
      "A forward-thinking innovation lab driving intellectual energy, scientific rigor, and bold solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="noise-overlay min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
