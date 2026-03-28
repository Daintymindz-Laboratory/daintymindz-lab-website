import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Syne } from "next/font/google";
import "./globals.css";

const displayFont = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const bodyFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const themeScript = `(() => {
  try {
    const storedTheme = window.localStorage.getItem("theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    const theme = storedTheme === "light" || storedTheme === "dark"
      ? storedTheme
      : systemTheme;
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  } catch {
    document.documentElement.dataset.theme = "dark";
    document.documentElement.style.colorScheme = "dark";
  }
})();`;

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
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="noise-overlay min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
