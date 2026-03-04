import "./globals.css";
import StarBackground from "./components/StarBackground";
import CustomerCursor from "./components/CustomerCursor";
import NavBar from "./components/NavBar";

export const metadata = {
  title: "Hla's Portfolio | Senior Web Developer",
  description:
    "A high-end, futuristic space-themed portifolio of a Senior Web Engineer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased selection:bg-neon-blue selection:text-white">
        <StarBackground />
        <CustomerCursor />
        <NavBar />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
