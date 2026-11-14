import type { Metadata } from "next";
import ProjectsPage from "../../projects/page";

const title = "المشاريع | هلا حجازي";
const description =
  "مشاريع ويب مختارة بتنفيذ هلا حجازي باستخدام Next.js وReact وNode.js وTypeScript.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: {
    canonical: "/ar/projects",
    languages: { en: "/projects", ar: "/ar/projects" },
  },
  openGraph: {
    type: "website",
    url: "/ar/projects",
    siteName: "هلا حجازي",
    title,
    description,
    locale: "ar_AR",
  },
};

export default function ArabicProjectsPage() {
  return <ProjectsPage />;
}
