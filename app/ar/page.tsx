import type { Metadata } from "next";
import Home from "../page";

const title = "هلا حجازي | مطورة ويب Full-Stack ومهندسة برمجيات";
const description =
  "هلا حجازي، مهندسة برمجيات ومطورة ويب Full-Stack. أبني منصات ويب سريعة باستخدام Next.js وReact وNode.js، مع دمج الذكاء الاصطناعي ومواقع بالعربية والإنجليزية.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: {
    canonical: "/ar",
    languages: { en: "/", ar: "/ar", "x-default": "/" },
  },
  openGraph: {
    type: "website",
    url: "/ar",
    siteName: "هلا حجازي",
    title,
    description,
    locale: "ar_AR",
  },
  twitter: { card: "summary_large_image", title, description },
};

export default function ArabicHome() {
  return <Home />;
}
