import "./globals.css";
import type { Metadata, Viewport } from "next";
import CustomerCursor from "./components/CustomerCursor";
import NavbarWrapper from "./components/NavbarWrapper";
import Chat from "./components/Chat";
import StarBackground from "./StarBackground";
import ThemeProvider from "./components/ThemeProvider";
import { Plus_Jakarta_Sans, Cairo } from "next/font/google";
import WhatsAppButton from "./components/WhatsAppButton";
import { LanguageProvider } from "./i18n/LanguageProvider";

const SITE_URL = "https://hlahijazi.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Hla Hijazi | Full-Stack Developer (Next.js, React, Node.js)",
    template: "%s | Hla Hijazi",
  },
  description:
    "Full-Stack Developer building scalable web platforms with Next.js, React, and Node.js. AI integration, bilingual Arabic/English sites, and technical SEO.",
  keywords: [
    "Hla Hijazi",
    "Full-Stack Developer",
    "Next.js developer",
    "React developer",
    "Node.js",
    "TypeScript",
    "AI integration",
    "Technical SEO",
    "Arabic RTL websites",
  ],
  authors: [{ name: "Hla Hijazi", url: SITE_URL }],
  creator: "Hla Hijazi",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Hla Hijazi",
    title: "Hla Hijazi | Full-Stack Developer",
    description:
      "Scalable web platforms with Next.js, React, and Node.js. AI integration, bilingual sites, and technical SEO.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hla Hijazi | Full-Stack Developer",
    description:
      "Scalable web platforms with Next.js, React, and Node.js. AI integration, bilingual sites, and technical SEO.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

const arabicFont = Cairo({
  subsets: ["arabic"],
  variable: "--font-arabic",
});

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Hla Hijazi",
  jobTitle: "Full-Stack Developer",
  url: SITE_URL,
  sameAs: [
    "https://github.com/hlahijazi2002",
    "https://www.linkedin.com/in/hla-hijazi-a86a57369/",
  ],
  knowsAbout: [
    "Next.js",
    "React",
    "Node.js",
    "TypeScript",
    "Technical SEO",
    "AI integration",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      dir="ltr"
      className="scroll-smooth"
      suppressHydrationWarning
    >
      <body
        className={`${jakarta.variable} ${arabicFont.variable} antialiased selection:bg-neon-blue selection:text-white`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <LanguageProvider>
          <ThemeProvider>
            <StarBackground />
            <CustomerCursor />
            <NavbarWrapper />
            <main className="relative z-10">{children}</main>
            <Chat />
            <WhatsAppButton />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
