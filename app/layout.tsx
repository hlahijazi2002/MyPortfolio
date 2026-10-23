import "./globals.css";
import CustomerCursor from "./components/CustomerCursor";
import NavbarWrapper from "./components/NavbarWrapper";
import Chat from "./components/Chat";
import StarBackground from "./StarBackground";
import ThemeProvider from "./components/ThemeProvider";
import { Plus_Jakarta_Sans, IBM_Plex_Sans_Arabic } from "next/font/google";
import WhatsAppButton from "./components/WhatsAppButton";
import { LanguageProvider } from "./i18n/LanguageProvider";

export const metadata = {
  title: "Hla Hijazi",
  description:
    "A high-end, futuristic space-themed portifolio of a Senior Web Engineer",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

const arabicFont = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-arabic",
});

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
