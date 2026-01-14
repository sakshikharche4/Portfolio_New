import {
  FaLightbulb,
  FaPaintBrush,
  FaCode,
  FaReact,
  FaServer,
  FaMobileAlt,
  FaTools,
  FaNodeJs,
  FaStripe,
  FaVuejs,
  FaFire,
  FaDatabase,
  FaCloud,
  FaRobot,
} from "react-icons/fa";

import profileImg from "../assets/profile.avif";
import projectImg1 from "../assets/project1.avif";
import projectImg2 from "../assets/project2.avif";
import projectImg3 from "../assets/project3.avif";
import projectImg4 from "../assets/project4.avif";
import projectImg5 from "../assets/project5.avif";
import projectImg6 from "../assets/project6.avif";

export const assets = {
  profileImg,
};

export const aboutInfo = [
  {
    icon: FaLightbulb,
    title: "Innovative",
    description:
      "I love creating unique solutions to complex problems with cutting-edge technologies.",
    color: "text-purple",
  },
  {
    icon: FaPaintBrush,
    title: "Design Oriented",
    description:
      "Beautiful design and user experience are at the heart of everything I create.",
    color: "text-pink",
  },
  {
    icon: FaCode,
    title: "Clean Code",
    description:
      "I write maintainable, efficient code following best practices and modern patterns.",
    color: "text-blue",
  },
];

export const skills = [
  {
    title: "Frontend Development",
    icon: FaReact,
    description:
      "Building responsive and interactive user interfaces with modern frameworks.",
    tags: [
      "HTML",
      "CSS",
      "Javascript",
      "React.js",
      "JQuery",
      "TailwindCss",
      "Redux",
    ],
  },
  {
    title: "Backend Development",
    icon: FaServer,
    description: "Creating robust server-side applications and RESTful APIs.",
    tags: ["Node.js", "Express"],
  },

  {
    title: "Tools & Technologies",
    icon: FaTools,
    description:
      "Essential tools and technologies I use in my development workflow.",
    tags: ["Git & GitHub", "Vs code", "Figma", "Postman", "Nodemon"],
  },
];

export const projects = [
 
  {
    title: "Task Management Website",
    description:
      "A productivity application with drag-and-drop functionality and real-time updates.",
    image: projectImg2,
    tech: ["React", "CURD Operations", "Tailwind CSS", "Javascript"],
    icons: [FaVuejs, FaFire, FaCloud, FaDatabase],
    demo: "https://task-management-notes.netlify.app/",
    code: "https://github.com/sakshikharche4/notes-app.git",
  },
  {
    title: "News Website",
    description: "Category-based news search functionality in the app",
    image: projectImg3,
    tech: ["React", "Tailwindcss", "Javascipt", "Routing", "News API"],
    icons: [FaReact, FaDatabase],
    demo: "https://news-web-sandy.vercel.app/",
    code: "https://github.com/sakshikharche4/News-Web.git",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase projects, skills",
    image: projectImg4,
    tech: ["React", "Tailwind CSS", "Routing", "Framer Motion", "Redux"],
    icons: [FaReact, FaCloud],
    demo: "https://sakshi-kharche-portfolio.netlify.app/",
    code: "https://github.com/sakshikharche4/Portfolio_New.git",
  },

  {
    title: "Weather Forecast Aap",
    description:
      "Developed a Weather Forecast App that allows users to search weather details by city and displays a ‘Not Found’ popup for invalid locations",
    image: projectImg6,
    tech: ["React", "Open Weather API", "Javascript", "Tailwind CSS"],
    icons: [FaRobot, FaReact, FaCloud],
    demo: "https://forcast-weather-web.netlify.app/",
    code: "https://github.com/sakshikharche4/WeatherApp.git",
  },
   {
    title: "Tik-Tac Game",
    description:
      `A classic Tic Tac Toe (X–O) game developed using vanilla JavaScript with DOM manipulation 
      for interactivity and Tailwind CSS for responsive and modern UI styling.`,
    image: projectImg1,
    tech: ["JavaScript", "Dom Manipulation", "Tailwindcss"],
    icons: [FaReact, FaNodeJs, FaDatabase, FaStripe],
    demo: "#",
    code: "#",
  },
];

export const workData = [
  {
    role: "Web Develper",
    company: "Wify Systems",
    duration: "August 2025 - Present",
    description: `Developed reusable, scalable React components using functional components, Hooks (useState, useEffect), props, and conditional rendering to build dynamic UIs.
Integrated API data, handled loading/error states, optimized component performance, and followed clean code practices with a modular architecture.`,
    color: "purple",
  },
  {
    role: "Software Engineer",
    company: "Asp Ol Media",
    duration: "July 2023 - August 2025",
    description:
      "Designed and developed responsive HTML email templates using table-based layouts and inline CSS for marketing and transactional campaigns.",
    color: "pink",
  },
];
