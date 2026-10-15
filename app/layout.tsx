import "./globals.css";
import CustomerCursor from "./components/CustomerCursor";
import NavbarWrapper from "./components/NavbarWrapper";
import Chat from "./components/Chat";
import StarBackground from "./StarBackground";
import ThemeProvider from "./components/ThemeProvider";
import { Plus_Jakarta_Sans } from "next/font/google";
import WhatsAppButton from "./components/WhatsAppButton";

export const metadata = {
  title: "Hla Hijazi",
  description:
    "A high-end, futuristic space-themed portifolio of a Senior Web Engineer",
};

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${jakarta.variable} antialiased selection:bg-neon-blue selection:text-white`}
      >
        <ThemeProvider>
          <StarBackground />
          <CustomerCursor />
          <NavbarWrapper />
          <main className="relative z-10">{children}</main>
          <Chat />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
