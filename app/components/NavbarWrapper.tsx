"use client";

import { usePathname } from "next/navigation";
import NavBar from "./NavBar";

export default function NavbarWrapper() {
  const pathname = usePathname();

  if (pathname === "/chat") return null;

  return <NavBar />;
}
