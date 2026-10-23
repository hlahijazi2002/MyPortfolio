import {
  Code2,
  Layers,
  Lightbulb,
  Globe,
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  Share2,
  CheckCircle,
  Zap,
} from "lucide-react";
// عدّل المسار حسب مكان الملف عندك
import type { L10n } from "@/i18n/LanguageProvider";

export interface Project {
  key: number;
  category: string;
  image: string;
  title: L10n;
  status?: "in-progress" | "completed";
  siteLink: string;
  gitHubLink: string;
}

export const projects: Project[] = [
  {
    key: 21,
    category: "Next.JS",
    image: "/eduCore.png",
    title: {
      en: "EduCore University System",
      ar: "نظام EduCore الجامعي",
    },
    status: "in-progress",
    siteLink: "https://edu-core-university-system.vercel.app/",
    gitHubLink: "https://github.com/hlahijazi2002/EduCore-University-System",
  },
  {
    key: 0,
    category: "React",
    image: "/knot.png",
    title: { en: "Knot Platform", ar: "منصة Knot" },
    status: "in-progress",
    siteLink: "https://knot-platform.vercel.app/",
    gitHubLink: "https://github.com/hlahijazi2002/Knot-Platform",
  },
  {
    key: 20,
    category: "Next.JS",
    image: "/Adventure.png",
    title: { en: "Adventure", ar: "Adventure" },
    siteLink: "https://adventure-phi-rouge.vercel.app/",
    gitHubLink: "https://github.com/hlahijazi2002/Adventure",
  },
  {
    key: 1,
    category: "React",
    image: "/Ecommerce.png",
    title: { en: "E-Commerce", ar: "متجر إلكتروني" },
    siteLink: "https://brilliant-melomakarona-81b21b.netlify.app/",
    gitHubLink: "https://github.com/hlahijazi2002/E-Commerce-with-strapi",
  },
  {
    key: 5,
    category: "React",
    image: "/dashboard.png",
    title: { en: "Admin Dashboard", ar: "لوحة تحكم الأدمن" },
    siteLink: "https://poetic-stardust-e949f0.netlify.app/",
    gitHubLink: "https://github.com/hlahijazi2002/Admin-Dashboard",
  },
  {
    key: 66,
    category: "Next.JS",
    image: "/basira.png",
    title: { en: "BasiraLens", ar: "BasiraLens" },
    siteLink: "https://basira-sigma.vercel.app/",
    gitHubLink: "https://github.com/hlahijazi2002/Basira",
  },
  {
    key: 50,
    category: "Next.JS",
    image: "/oxa.png",
    title: { en: "OXA Code", ar: "OXA Code" },
    siteLink: "https://oxa-code.vercel.app/",
    gitHubLink: "https://github.com/hlahijazi2002/OXA-Code",
  },
  {
    key: 2,
    category: "React",
    image: "/prayerTimes.png",
    title: { en: "Prayer Times", ar: "مواقيت الصلاة" },
    siteLink: "https://lively-gelato-cf1aa1.netlify.app/",
    gitHubLink: "https://github.com/hlahijazi2002/PrayersTime",
  },
  {
    key: 3,
    category: "React",
    image: "/toDo.png",
    title: { en: "To Do", ar: "قائمة المهام" },
    siteLink: "https://tangerine-puffpuff-fee848.netlify.app/",
    gitHubLink: "https://github.com/hlahijazi2002/ToDo-project",
  },
  {
    key: 4,
    category: "React",
    image: "/weather.png",
    title: { en: "Weather", ar: "حالة الطقس" },
    siteLink: "https://effulgent-druid-fb7446.netlify.app/",
    gitHubLink: "https://github.com/hlahijazi2002/Weather-project",
  },
  {
    key: 8,
    category: "HTML & CSS",
    image: "/dashboardCss.png",
    title: { en: "Dashboard", ar: "لوحة تحكم" },
    siteLink: "https://dulcet-capybara-5dc20b.netlify.app/",
    gitHubLink: "https://github.com/hlahijazi2002/Dashboard",
  },
  {
    key: 9,
    category: "JS",
    image: "/special.png",
    title: { en: "Special Design", ar: "تصميم مميز" },
    siteLink: "https://regal-kataifi-505638.netlify.app/",
    gitHubLink: "https://github.com/hlahijazi2002/Special-design",
  },
];

export const skills: { title: L10n; icon: typeof Code2 }[] = [
  { title: { en: "Clean Code", ar: "كتابة كود نظيف" }, icon: Code2 },
  { title: { en: "Problem Solving", ar: "حل المشكلات" }, icon: Lightbulb },
  { title: { en: "Data Integrity", ar: "سلامة البيانات" }, icon: ShieldCheck },
  {
    title: { en: "System Architecture", ar: "تصميم هيكلية الأنظمة" },
    icon: Share2,
  },
  {
    title: { en: "Performance Optimization", ar: "تحسين الأداء" },
    icon: Zap,
  },
  { title: { en: "Responsive Design", ar: "تصميم متجاوب" }, icon: Layers },
  { title: { en: "Modern CSS", ar: "CSS حديث" }, icon: Globe },
  { title: { en: "Quality Assurance", ar: "ضمان الجودة" }, icon: CheckCircle },
];

// أسماء التقنيات بتضل بالإنجليزي في اللغتين
export const techSkills = [
  { name: "Html5", Image: "/html.png", width: 50, height: 50 },
  { name: "Css", Image: "/css.png", width: 50, height: 50 },
  { name: "Java Script", Image: "/js.png", width: 50, height: 50 },
  { name: "Python", Image: "/python.svg", width: 50, height: 50 },
  { name: "Type Script", Image: "/ts.png", width: 50, height: 50 },
  { name: "React", Image: "/react.png", width: 50, height: 50 },
  { name: "Inngest", Image: "/inngest.jpg", width: 50, height: 50 },
  { name: "Redux", Image: "/redux.png", width: 50, height: 50 },
  { name: "Clerk", Image: "/clerk.png", width: 50, height: 50 },
  { name: "React Query", Image: "/reactquery.png", width: 50, height: 50 },
  { name: "NextJs", Image: "/next.png", width: 50, height: 50 },
  { name: "Tailwind Css", Image: "/tailwind.png", width: 50, height: 50 },
  { name: "ImageKit", Image: "/imagekit.png", width: 50, height: 50 },
  { name: "SASS", Image: "/sass.svg", width: 50, height: 50 },
  { name: "MySQL", Image: "/mysql.svg", width: 50, height: 50 },
  { name: "Framer Motion", Image: "/framer.png", width: 50, height: 50 },
  { name: "Figma", Image: "/figma.svg", width: 50, height: 50 },
  { name: "Git", Image: "/git.svg", width: 50, height: 50 },
  { name: "Vercel", Image: "/vercel.svg", width: 50, height: 50 },
];

export const contactInfo: {
  icon: React.ReactNode;
  label: L10n;
  value: L10n;
}[] = [
  {
    icon: <Mail className="text-neon-blue" />,
    label: { en: "Email", ar: "البريد الإلكتروني" },
    value: { en: "hlahijazi22@gmail.com", ar: "hlahijazi22@gmail.com" },
  },
  {
    icon: <Phone className="text-neon-blue" />,
    label: { en: "Phone", ar: "الهاتف" },
    value: { en: "00970594814452", ar: "00970594814452" },
  },
  {
    icon: <MapPin className="text-neon-blue" />,
    label: { en: "Location", ar: "الموقع" },
    value: { en: "Palestine, Gaza", ar: "غزة، فلسطين" },
  },
];

export interface EducationData {
  degree: L10n;
  institution: L10n;
  duration: L10n;
  description: L10n;
  tech: string[];
  inProgress?: boolean;
}

export const education: EducationData[] = [
  {
    degree: { en: "Bachelor of Engineering", ar: "بكالوريوس هندسة" },
    institution: { en: "Al-Azhar University", ar: "جامعة الأزهر" },
    duration: { en: "2019 - 2024", ar: "2019 - 2024" },
    description: {
      en: "Specializing in Computer Systems Engineering",
      ar: "تخصص هندسة نظم الحاسوب",
    },
    tech: [
      "Agile Methodology",
      "Software Development Life Cycle (SDLC)",
      "Programming Languages (Java, C, C++, Dart, R, Assembly)",
      "Data Structures",
      "Algorithms",
      "Software Engineering Principles",
      "Design Patterns",
      "Database Design",
      "Software Testing",
      "Object-Oriented Programming",
    ],
  },
  {
    degree: {
      en: "MBA in Artificial Intelligence",
      ar: "ماجستير إدارة أعمال (MBA) في الذكاء الاصطناعي",
    },
    institution: {
      en: "Talal Abu Gazaleh Digital University",
      ar: "جامعة طلال أبو غزالة الرقمية",
    },
    duration: { en: "2025 - Present", ar: "2025 - الآن" },
    description: {
      en: "Specializing in Artificial Intelligence",
      ar: "تخصص الذكاء الاصطناعي",
    },
    tech: ["Python", "Machine Learning", "Deep Learning"],
    inProgress: true,
  },
];
