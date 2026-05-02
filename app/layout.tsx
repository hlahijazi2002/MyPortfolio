import "./globals.css";
import CustomerCursor from "./components/CustomerCursor";
import NavbarWrapper from "./components/NavbarWrapper";
import Chat from "./components/Chat";
import StarBackground from "./StarBackground";

export const metadata = {
  title: "Hla Hijazi",
  description:
    "A high-end, futuristic space-themed portifolio of a Senior Web Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased selection:bg-neon-blue selection:text-white">
        <StarBackground />
        <CustomerCursor />
        <NavbarWrapper />
        <main className="relative z-10">{children}</main>
        <Chat />
      </body>
    </html>
  );
}
