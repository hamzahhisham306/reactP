import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  sawa,
  delive,
  thelearnbook,
  arabgeorgia,
  dental,
  restaurant,
  eventhub,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Full Stack Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "AI Prompt Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Futric",
    icon: web,
    iconBg: "#383E56",
    date: "November 2025 - Present",
    points: [
      "Building and maintaining full-stack web applications using modern JavaScript frameworks.",
      "Developing scalable backend services and RESTful APIs to power client-facing platforms.",
      "Collaborating with cross-functional teams to deliver high-quality products on time.",
      "Key projects include Sawa (sawa.xapis.com) and Dliv (dliv.me).",
    ],
  },
  {
    title: "AI Prompt Engineer",
    company_name: "Optimiza",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "July 2024 - Present",
    points: [
      "Design, develop, and test complex prompts that optimize AI model performance.",
      "Code for AI-driven tasks and refine AI-generated output for production use.",
      "Successfully refactored AI-generated code to improve performance and readability.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Glyphsmarketing USA – Georgia (Remote)",
    icon: mobile,
    iconBg: "#383E56",
    date: "October 2023 - May 2024",
    points: [
      "Built visually appealing, user-friendly, and responsive web applications.",
      "Transformed design prototypes into functional, optimized code.",
      "Implemented new features and improved existing ones through frontend codebase optimization.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "The Larn Book Gate",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "March 2023 - October 2023",
    points: [
      "Built dynamic and responsive UIs using React.js component-based architecture.",
      "Created and managed RESTful APIs using Node.js and Express.js with server-side routing and middleware.",
      "Designed and managed relational and NoSQL databases, optimizing queries for scalability and data integrity.",
      "Enhanced application performance through code refactoring, resulting in faster load times.",
    ],
  },
];

const testimonials = [];

const projects = [
  {
    name: "Sawa",
    description:
      "A full-stack platform developed at Futric delivering seamless user experiences with modern web technologies and a scalable backend architecture.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "java spring boot",
        color: "green-text-gradient",
      },
      {
        name: "postgresql",
        color: "pink-text-gradient",
      },
    ],
    image: sawa,
    source_code_link: "https://sawa.xapis.com/",
  },
  {
    name: "Dliv",
    description:
      "A delivery and logistics platform built at Futric, providing efficient order management and real tracking capabilities for users and administrators.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nest.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: delive,
    source_code_link: "https://dliv.me/",
  },
  {
    name: "The Learn Book Gate",
    description:
      "A scientific knowledge portal hosting thousands of books, theses, Arab journals, and international conferences — a comprehensive academic database platform.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: thelearnbook,
    source_code_link: "https://thelearnbook.com",
  },
  {
    name: "Arab Gerogia",
    description:
      "An Arab community platform connecting Arab citizens in the US through social media channels, events, and community services to strengthen cultural ties.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: arabgeorgia,
    source_code_link: "https://arab-georgia.com/",
  },
  {
    name: "Dental 3D Treatment Planner",
    description:
      "A responsive web application for interactive visualization and treatment planning of 3D dental models, letting dentists inspect upper and lower jaw models from predefined views (Front, Top, Bottom, Left, Right, Upper/Lower) to improve diagnosis. Built entirely with AI.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "green-text-gradient",
      },
      {
        name: "ai-built",
        color: "pink-text-gradient",
      },
    ],
    image: dental,
    source_code_link:
      "https://3-dos.com/dental-viewer/?caseId=1&token=GAASw3l7iPIO323OHoMnXhXYoBLTG8RQmz1lm8OtEFsD1VRE",
  },
  {
    name: "Restaurant Management System",
    description:
      "A full-stack restaurant management platform with a customer website, an admin dashboard, and RESTful APIs — featuring menu management, reservations, multilingual support, authentication, and responsive user interfaces.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "sql",
        color: "pink-text-gradient",
      },
    ],
    image: restaurant,
    source_code_link: "https://dewanresturant.com/en",
  },
  {
    name: "EventHub",
    description:
      "An event booking platform that lets users discover upcoming events and create new ones through a clean, responsive interface.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: eventhub,
    source_code_link: "https://event-nextjs-last.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
