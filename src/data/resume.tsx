import { Icons } from "@/components/icons";
import {
  BriefcaseBusiness,
  CodeIcon,
  GraduationCap,
  HomeIcon,
  NotebookIcon,
  PencilLine,
} from "lucide-react";
import {
  SiPython,
  SiCplusplus,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiSpringboot,
  SiReact,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiRabbitmq,
  SiGit,
  SiLinux,
  SiDocker,
  SiNginx,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiTensorflow,
} from "react-icons/si";
import { DiJava } from "react-icons/di";


export const DATA = {
  name: "Amiruddin",
  initials: "MAS",
  url: "#",
  location: "India",
  locationLink: "https://www.google.com/maps/place/india",
  description: "Software Engineer | Backend & AI | Scalable systems",
  summary: "I'm a Software Engineer focused on Backend and AI, with a strong interest in building scalable systems and intelligent solutions. A CSE sophomore who’s always exploring new technologies beyond the classroom.",
  avatarUrl: "/img.png",

  skills: [
    { name: "Python", icon: SiPython },
    { name: "C/C++", icon: SiCplusplus },
    { name: "Java", icon: DiJava },
    { name: "JavaScript", icon: SiJavascript },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Express.js", icon: SiExpress },
    { name: "Spring Boot", icon: SiSpringboot },
    { name: "React.js", icon: SiReact },
    { name: "TailwindCSS", icon: SiTailwindcss },
    { name: "MongoDB", icon: SiMongodb },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "Redis", icon: SiRedis },
    { name: "RabbitMQ", icon: SiRabbitmq },
    { name: "Git", icon: SiGit },
    { name: "Linux", icon: SiLinux },
    { name: "Docker", icon: SiDocker },
    { name: "NGINX", icon: SiNginx },
    { name: "Pandas", icon: SiPandas },
    { name: "NumPy", icon: SiNumpy },
    { name: "Scikit Learn", icon: SiScikitlearn },
    { name: "TensorFlow", icon: SiTensorflow },
  ],

  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "#projects", icon: CodeIcon, label: "Projects" },
    { href: "#experience", icon: BriefcaseBusiness, label: "Experience" },
    { href: "#education", icon: GraduationCap, label: "Education" },
    // {
    //   href: "#",
    //   icon: NotebookIcon,
    //   label: "Blog",
    // },
  ],
  contact: {
    email: "amirvsidd@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/amiruddinsiddiqui",
        icon: Icons.github,
        contact: true,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mo-amir-sidd",
        icon: Icons.linkedin,
        contact: true,
        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:amirvsidd@gmail.com",
        icon: Icons.email,
        contact: true,
        navbar: false,
      },
    },
  },

  // work: [
  //   {
  //     company: "xyz",
  //     href: "",
  //     badges: ["Remote", "Nepal"],
  //     location: "xyz",
  //     title: "Software Engineer - Backend",
  //     icon: false,
  //     logoUrl: "/experience/xyz.png",
  //     start: "xyz",
  //     end: "xyz",
  //     description: `*xyz*`,
  //   },
  // ],

  education: [
    {
      school: "MU",
      href: "#",
      degree: "B.Tech in CS&E, India",
      icon: true,
      logoUrl: "/graduation-cap.svg",
      start: "2024",
      end: "2028",
    },
  ],
  projects: [
    {
      title: "DiffSense",
      href: "https://github.com/amiruddinsiddiqui/diffsense",
      dates: "",
      active: true,
      description:
        "DiffSense is an AI-driven platform that analyzes GitHub code diffs to highlight risks, bugs, and meaningful changes, enabling faster and more confident code reviews.",
      technologies: [
        "Node.js",
        "Express.js",
        "React.js",
        "TailwindCSS",
        "Supabase (PostgreSQL)",
        "RabbitMQ",
        "Gemini API",
        "ngrok",
        "OAuth2.0",
        "Github webhook"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/amiruddinsiddiqui/diffsense",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/diffsense.png",
      video: "",
    },
    {
      title: "Shorty",
      href: "https://shorty-tan.vercel.app/",
      dates: "",
      active: true,
      description:
        "Shorty is a URL shortening platform designed for fast and reliable redirection. It features collision-free short code generation, Redis-backed caching for ultra-low latency redirects, and built-in rate limiting to prevent abuse.",
      technologies: [
        "Spring Boot",
        "MongoDB",
        "Redis",
        "Bucket4j",
        "React.js",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Website",
          href: "https://shorty-tan.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/amiruddinsiddiqui/shorty",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/shorty.png",
      video: "",
    },
    {
      title: "MemoriaX AI",
      href: "https://github.com/amiruddinsiddiqui/memoriax-ai",
      dates: "",
      active: true,
      description:
        "Memoriax AI is a memory assistant that captures, organizes, and recalls personal and contextual knowledge like a second brain. It leverages semantic understanding and memory decay to keep the most relevant information at the forefront while letting less important details gracefully fade.",
      technologies: [
        "Node.js",
        "Express.js",
        "React.js",
        "TailwindCSS",
        "LangChain",
        "Pinecone",
        "MongoDB",
        "Gemini API",
        "RabbitMQ",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/amiruddinsiddiqui/memoriax-ai",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/memoriax.png",
      video: "",
    },
    {
      title: "CollabX",
      href: "#",
      dates: "",
      active: false,
      description:
        "CollabX is a collaborative web app for brainstorming ideas, planning tasks, and managing workflows in one shared workspace.",
      technologies: [
        "Node.js",
        "Express.js",
        "Websocket",
        "MongoDB",
        "React.js",
        "TailwindCSS",
      ],
      links: [
        {
          type: "Source",
          href: "#",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/projects/commingsoon.png",
      video: "",
    },
  ],

  // hackathons: [
  //
  //   {
  //     title: "DeveloperWeek Hackathon",
  //     dates: "February 3rd - 4th, 2025",
  //     location: "x, yz",
  //     description: "xyz",
  //     image: "#",
  //     links: [
  //       {
  //         title: "Github",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/xyz",
  //       },
  //     ],
  //   },
  //
  // ],

} as const;
