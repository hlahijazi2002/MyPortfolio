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
  description: string;
  siteLink: string;
  gitHubLink: string;
}
export const projects: Project[] = [
  {
    key: 0,
    category: "React",
    image: "/knot.png",
    title: "Knot Platform",
    description:
      "A dynamic social media platform designed to bridge connections through a seamless and interactive user interface. Built with a focus on performance and engagement ",
    siteLink: "https://knot-platform.vercel.app/",
    gitHubLink: "https://github.com/hlahijazi2002/Knot-Platform",
  },
  {
    key: 20,
    category: "Next.JS",
    image: "/Adventure.png",
    title: "Adventure",
    description:
      "A modern, high-performance travel landing page designed to provide a seamless user experience. The project focuses on 'Adventure without limits' featuring smooth interactions and a mobile-first responsive design.",
    siteLink: "https://adventure-phi-rouge.vercel.app/",
    gitHubLink: "https://github.com/hlahijazi2002/Adventure",
  },
  {
    key: 1,
    category: "React",
    image: "/Ecommerce.png",
    title: "E-Commerce",
    description:
      "Comprehensive and visually appealing E-Commerce interface designed for a high-end shopping experience. It features a clean, user-centric layout with advanced navigation and promotional elements.",
    siteLink: "https://brilliant-melomakarona-81b21b.netlify.app/",
    gitHubLink: "https://github.com/hlahijazi2002/E-Commerce-with-strapi",
  },
  {
    key: 5,
    category: "React",
    image: "/dashboard.png",
    title: "Admin Dashboard",
    description:
      "A comprehensive administrative dashboard designed for high-level data visualization and management.",
    siteLink: "https://poetic-stardust-e949f0.netlify.app/",
    gitHubLink: "https://github.com/hlahijazi2002/Admin-Dashboard",
  },
  {
    key: 2,
    category: "React",
    image: "/prayerTimes.png",
    title: "Prayer Times",
    description:
      "A highly accurate and location-aware web application designed to provide real-time Islamic prayer schedules.",
    siteLink: "https://lively-gelato-cf1aa1.netlify.app/",
    gitHubLink: "https://github.com/hlahijazi2002/PrayersTime",
  },
  {
    key: 3,
    category: "React",
    image: "/toDo.png",
    title: "To Do",
    description:
      "A sophisticated task management application designed to streamline daily workflows and enhance productivity.",
    siteLink: "https://tangerine-puffpuff-fee848.netlify.app/",
    gitHubLink: "https://github.com/hlahijazi2002/ToDo-project",
  },
  {
    key: 4,
    category: "React",
    image: "/weather.png",
    title: "Weather",
    description:
      "A sleek and highly responsive weather forecasting application that delivers accurate, real-time meteorological data.",
    siteLink: "https://effulgent-druid-fb7446.netlify.app/",
    gitHubLink: "https://github.com/hlahijazi2002/Weather-project",
  },

  {
    key: 6,
    category: "HTML & CSS",
    image: "/leon.png",
    title: "Leon",
    description:
      "A sleek, minimalist web template designed for creative agencies and freelancers. This project focuses on the 'Less is More' philosophy",
    siteLink: "https://thunderous-phoenix-675bdd.netlify.app/",
    gitHubLink: "https://github.com/hlahijazi2002/Leon",
  },
  {
    key: 7,
    category: "HTML & CSS",
    image: "/kasper.png",
    title: "Kasper",
    description:
      "A bold and artistic single-page website template designed for creative studios and portfolios. ",
    siteLink: "https://incomparable-mermaid-b93da9.netlify.app/",
    gitHubLink: "https://github.com/hlahijazi2002/Kasper",
  },
  {
    key: 8,
    category: "HTML & CSS",
    image: "/dashboardCss.png",
    title: "Dashboard",
    description:
      "A main dashboard designed for efficient data organization. The project contributed to the user experience (UX) through a clean and organized interface that facilitates performance and project tracking.",
    siteLink: "https://dulcet-capybara-5dc20b.netlify.app/",
    gitHubLink: "https://github.com/hlahijazi2002/Dashboard",
  },
  {
    key: 9,
    category: "JS",
    image: "/special.png",
    title: "Special Design",
    description:
      "High-performance landing page designed for a creative agency. It features a dark-themed, minimalist UI with a strong focus on user customization and smooth navigation.",
    siteLink: "https://regal-kataifi-505638.netlify.app/",
    gitHubLink: "https://github.com/hlahijazi2002/Special-design",
  },
  {
    key: 10,
    category: "JS",
    image: "/guessGame.png",
    title: "Guess Game",
    description:
      "Interactive web-based puzzle game where players attempt to guess a hidden 5-letter word within five attempts. It features a clean, user-friendly interface with real-time feedback.",
    siteLink: "https://creative-gnome-76a9dc.netlify.app/",
    gitHubLink: "https://github.com/hlahijazi2002/Guess-Game",
  },
  {
    key: 11,
    category: "JS",
    image: "/hangman.png",
    title: "Hangman Game",
    description:
      "Classic web-based word puzzle game where players guess a hidden word letter by letter within a limited number of attempts. It combines logic with a clean, functional interface.",
    siteLink: "https://stellular-naiad-15ae4e.netlify.app/",
    gitHubLink: "https://github.com/hlahijazi2002/Hangman-Game",
  },
  {
    key: 12,
    category: "JS",
    image: "/memory.png",
    title: "Memory Game",
    description:
      "Web-based memory puzzle game designed to test and improve cognitive recognition. Players must flip cards to find matching pairs of animal illustrations in as few attempts as possible.",
    siteLink: "https://aesthetic-maamoul-760165.netlify.app/",
    gitHubLink: "https://github.com/hlahijazi2002/Memory-Game",
  },
  {
    key: 13,
    category: "JS",
    image: "/quiz.png",
    title: "Quiz App",
    description:
      "Dynamic web-based examination tool designed to test technical knowledge through a structured, timed quiz. It features a professional and clean UI built for focused assessment.",
    siteLink: "https://sparkling-speculoos-9bd825.netlify.app/",
    gitHubLink: "https://github.com/hlahijazi2002/Quiz-App",
  },

  {
    key: 15,
    category: "JS",
    image: "/typingSpeed.png",
    title: "TypingSpeed Test",
    description:
      "Interactive web application designed to measure and improve a user's typing speed and accuracy. It challenges players to type randomly generated words within a strict time limit.",
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
