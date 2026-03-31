import {
  Code2,
  Layers,
  Lightbulb,
  Clock,
  Cpu,
  Globe,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export interface Project {
  key: number;
  category: string;
  image: string;
  title: string;
  status?: "in-progress" | "completed";
  siteLink: string;
  gitHubLink: string;
}
export const projects: Project[] = [
  {
    key: 21,
    category: "Next.JS",
    image: "/eduCore.png",
    title: "EduCore University System",
    status: "in-progress",
    siteLink: "https://edu-core-university-system.vercel.app/",
    gitHubLink: "https://github.com/hlahijazi2002/EduCore-University-System",
  },
  {
    key: 0,
    category: "React",
    image: "/knot.png",
    title: "Knot Platform",
    siteLink: "https://knot-platform.vercel.app/",
    gitHubLink: "https://github.com/hlahijazi2002/Knot-Platform",
  },
  {
    key: 65,
    category: "Next.JS",
    image: "/oxa.png",
    title: "OXA Code",
    siteLink: "https://oxa-code.vercel.app/",
    gitHubLink: "https://github.com/hlahijazi2002/OXA-Code",
  },
  {
    key: 20,
    category: "Next.JS",
    image: "/Adventure.png",
    title: "Adventure",
    siteLink: "https://adventure-phi-rouge.vercel.app/",
    gitHubLink: "https://github.com/hlahijazi2002/Adventure",
  },
  {
    key: 1,
    category: "React",
    image: "/Ecommerce.png",
    title: "E-Commerce",
    siteLink: "https://brilliant-melomakarona-81b21b.netlify.app/",
    gitHubLink: "https://github.com/hlahijazi2002/E-Commerce-with-strapi",
  },
  {
    key: 5,
    category: "React",
    image: "/dashboard.png",
    title: "Admin Dashboard",
    siteLink: "https://poetic-stardust-e949f0.netlify.app/",
    gitHubLink: "https://github.com/hlahijazi2002/Admin-Dashboard",
  },
  {
    key: 2,
    category: "React",
    image: "/prayerTimes.png",
    title: "Prayer Times",
    siteLink: "https://lively-gelato-cf1aa1.netlify.app/",
    gitHubLink: "https://github.com/hlahijazi2002/PrayersTime",
  },
  {
    key: 3,
    category: "React",
    image: "/toDo.png",
    title: "To Do",
    siteLink: "https://tangerine-puffpuff-fee848.netlify.app/",
    gitHubLink: "https://github.com/hlahijazi2002/ToDo-project",
  },
  {
    key: 4,
    category: "React",
    image: "/weather.png",
    title: "Weather",
    siteLink: "https://effulgent-druid-fb7446.netlify.app/",
    gitHubLink: "https://github.com/hlahijazi2002/Weather-project",
  },

  {
    key: 6,
    category: "HTML & CSS",
    image: "/leon.png",
    title: "Leon",
    siteLink: "https://thunderous-phoenix-675bdd.netlify.app/",
    gitHubLink: "https://github.com/hlahijazi2002/Leon",
  },
  {
    key: 7,
    category: "HTML & CSS",
    image: "/kasper.png",
    title: "Kasper",
    siteLink: "https://incomparable-mermaid-b93da9.netlify.app/",
    gitHubLink: "https://github.com/hlahijazi2002/Kasper",
  },
  {
    key: 8,
    category: "HTML & CSS",
    image: "/dashboardCss.png",
    title: "Dashboard",
    siteLink: "https://dulcet-capybara-5dc20b.netlify.app/",
    gitHubLink: "https://github.com/hlahijazi2002/Dashboard",
  },
  {
    key: 9,
    category: "JS",
    image: "/special.png",
    title: "Special Design",
    siteLink: "https://regal-kataifi-505638.netlify.app/",
    gitHubLink: "https://github.com/hlahijazi2002/Special-design",
  },
  {
    key: 10,
    category: "JS",
    image: "/guessGame.png",
    title: "Guess Game",
    siteLink: "https://creative-gnome-76a9dc.netlify.app/",
    gitHubLink: "https://github.com/hlahijazi2002/Guess-Game",
  },
  {
    key: 11,
    category: "JS",
    image: "/hangman.png",
    title: "Hangman Game",
    siteLink: "https://stellular-naiad-15ae4e.netlify.app/",
    gitHubLink: "https://github.com/hlahijazi2002/Hangman-Game",
  },
  {
    key: 12,
    category: "JS",
    image: "/memory.png",
    title: "Memory Game",
    siteLink: "https://aesthetic-maamoul-760165.netlify.app/",
    gitHubLink: "https://github.com/hlahijazi2002/Memory-Game",
  },
  {
    key: 13,
    category: "JS",
    image: "/quiz.png",
    title: "Quiz App",
    siteLink: "https://sparkling-speculoos-9bd825.netlify.app/",
    gitHubLink: "https://github.com/hlahijazi2002/Quiz-App",
  },

  {
    key: 15,
    category: "JS",
    image: "/typingSpeed.png",
    title: "TypingSpeed Test",
    siteLink: "https://chipper-florentine-3f254c.netlify.app/",
    gitHubLink: "https://github.com/hlahijazi2002/Typing-speed-game",
  },
];

export const skills = [
  { title: "Clean Code", percentage: 100, icon: Code2 },
  { title: "Problem Solving", percentage: 100, icon: Lightbulb },
  { title: "Responsive Design", percentage: 100, icon: Layers },
  { title: "Modern CSS", percentage: 100, icon: Globe },
  { title: "UI Animation", percentage: 100, icon: Cpu },
  { title: "Time Saving", percentage: 100, icon: Clock },
];
export const techSkills = [
  {
    name: "Html5",
    Image: "/html.png",
    width: 80,
    height: 80,
  },
  {
    name: "Css",
    Image: "/css.png",
    width: 80,
    height: 80,
  },
  {
    name: "Java Script",
    Image: "/js.png",
    width: 65,
    height: 65,
  },
  {
    name: "Python",
    Image: "/python.svg",
    width: 80,
    height: 80,
  },
  {
    name: "Type Script",
    Image: "/ts.png",
    width: 80,
    height: 80,
  },
  {
    name: "React",
    Image: "/react.png",
    width: 80,
    height: 80,
  },
  {
    name: "Redux",
    Image: "/redux.png",
    width: 80,
    height: 80,
  },
  {
    name: "React Query",
    Image: "/reactquery.png",
    width: 80,
    height: 80,
  },

  {
    name: "NextJs",
    Image: "/next.png",
    width: 80,
    height: 80,
  },
  {
    name: "Tailwind Css",
    Image: "/tailwind.png",
    width: 80,
    height: 80,
  },
  {
    name: "SASS",
    Image: "/sass.svg",
    width: 80,
    height: 80,
  },
  {
    name: "MySQL",
    Image: "/mysql.svg",
    width: 80,
    height: 80,
  },
  {
    name: "Framer Motion",
    Image: "/framer.png",
    width: 80,
    height: 80,
  },
  {
    name: "Figma",
    Image: "/figma.svg",
    width: 80,
    height: 80,
  },

  {
    name: "Git",
    Image: "/git.svg",
    width: 80,
    height: 80,
  },
  {
    name: "Vercel",
    Image: "/vercel.svg",
    width: 80,
    height: 80,
  },
];

export const contactInfo = [
  {
    icon: <Mail className="text-neon-blue" />,
    label: "Email",
    value: "hlahijazi22@gmail.com",
  },

  {
    icon: <Phone className="text-neon-blue" />,
    label: "Phone",
    value: "00970594814452",
  },
  {
    icon: <MapPin className="text-neon-blue" />,
    label: "Location",
    value: "Palestine, Gaza",
  },
];
