import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaPython, FaJava, FaGitAlt, FaGithub, FaDocker, FaAws } from 'react-icons/fa';
import { SiExpress, SiMongodb, SiMysql, SiCplusplus, SiC, SiVscodium } from 'react-icons/si';

// Project Screenshots
import faislaImg from '../assets/projects/faisla.png';
import skillswapImg from '../assets/projects/skillswap.png';
import supportBotImg from '../assets/projects/supportbot.png';
import libraryImg from '../assets/projects/library.png';

export const personalInfo = {
  name: "Uday Kumar J.",
  firstName: "Uday",
  title: "Full Stack Developer",
  roles: ["Full Stack Developer", "AI Enthusiast", "Problem Solver", "Open Source Contributor"],
  bio: `I'm a passionate Full Stack Developer and B.Tech student specializing in Artificial Intelligence & Data Science at Rajalakshmi Institute of Technology. With a strong foundation in both frontend and backend technologies, I love crafting elegant, performant web applications that solve real-world problems.

My expertise spans the entire development stack — from building responsive, animated user interfaces with React to designing robust server architectures with Node.js and Express. I'm also deeply interested in AI/ML, and I bring that analytical mindset to every project I build.

When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or participating in hackathons to push the boundaries of what's possible with code.`,
  email: "ukstudies27@gmail.com",
  profilePic: "/Portfolio/profile_pic.jpg",
  resumeLink: "/Portfolio/Resume.pdf",
  certificatesGDriveLink: "https://drive.google.com/drive/folders/1Qer9w3efgdgS8VCYowbq9O0NPKsdOdce",
};

export const socialLinks = [
  { name: "GitHub", url: "https://github.com/UKoder", icon: "github" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/j-udaykumar-dmj", icon: "linkedin" },
  { name: "Instagram", url: "https://www.instagram.com/j_udhay_kumar", icon: "instagram" },
  { name: "Email", url: "mailto:ukstudies27@gmail.com", icon: "email" },
];

export const skills = {
  languages: [
    { name: "Python", icon: FaPython, proficient: true },
    { name: "C++", icon: SiCplusplus, proficient: true },
    { name: "JavaScript", icon: FaJsSquare, proficient: true },
    { name: "Java", icon: FaJava, proficient: false },
    { name: "C", icon: SiC, proficient: false },
  ],
  frontend: [
    { name: "HTML5", icon: FaHtml5 },
    { name: "CSS3", icon: FaCss3Alt },
    { name: "React", icon: FaReact },
  ],
  backend: [
    { name: "Node.js", icon: FaNodeJs },
    { name: "Express.js", icon: SiExpress },
    { name: "MongoDB", icon: SiMongodb },
    { name: "MySQL", icon: SiMysql },
  ],
  tools: [
    { name: "Git", icon: FaGitAlt },
    { name: "GitHub", icon: FaGithub },
    { name: "VS Code", icon: SiVscodium },
    { name: "Docker", icon: FaDocker },
  ],
  cloud: [
    { name: "AWS", icon: FaAws },
  ],
};

export const projects = [
  {
    id: 1,
    title: "Faisla",
    description: "An innovative decision-making platform that helps users make informed choices through structured analysis and collaborative input. Features a seamless web interface for complex choice evaluation.",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/UKoder/Faisla_game",
    live: "#",
    image: faislaImg,
  },
  {
    id: 2,
    title: "Customer Support Bot",
    description: "An intelligent, domain-agnostic customer support chatbot powered by AI. Features configurable responses, RAG (Retrieval-Augmented Generation) integration, and a clean conversational UI.",
    tech: ["Python", "Flask", "AI/ML", "Docker"],
    github: "https://github.com/UKoder/Customer-Support-Bot",
    live: "#",
    image: supportBotImg,
  },
  {
    id: 3,
    title: "SkillSwap App",
    description: "A peer-to-peer skill exchange platform where users can teach and learn from each other. Features real-time skill matching, community-driven learning, and an intuitive task-based interface.",
    tech: ["React", "Vite", "Node.js", "MongoDB"],
    github: "https://github.com/UKoder/SkillSwap",
    live: "#",
    image: skillswapImg,
  },
  {
    id: 4,
    title: "Library Membership Registration",
    description: "A comprehensive library management system focusing on member registration and book cataloging. Features a robust Java Swing GUI and structured MySQL database management.",
    tech: ["Java", "Swing", "JDBC", "MySQL"],
    github: "https://github.com/UKoder/Library-membership-registration",
    live: "#",
    image: libraryImg,
  },
];

export const education = [
  {
    degree: "B.Tech in Artificial Intelligence & Data Science",
    institution: "Rajalakshmi Institute of Technology",
    duration: "2024 — 2028",
    description: "Pursuing a comprehensive program covering AI, machine learning, data science, and software engineering fundamentals.",
  },
];

export const certifications = [];

export const hackathons = [
  {
    name: "Synthetix 4.0",
    organizer: "VIT Chennai",
    description: "Participated in the Synthetix 4.0 hackathon held at VIT Chennai, exploring DeFi and blockchain technologies.",
    type: "Participation",
    certificate: "/Portfolio/Synthetix-4.0.pdf",
    date: "2024",
  },
  {
    name: "Freshathon",
    organizer: "Rajalakshmi Institute of Technology",
    description: "Awarded 3rd place in Freshathon, a college-level hackathon for freshmen at RIT.",
    type: "Winner (3rd Place)",
    certificate: "/Portfolio/freshathon certificate.pdf",
    date: "2024",
  },
  {
    name: "Agritech Event",
    organizer: "Rajalakshmi Institute of Technology",
    description: "Participated in the Agritech event held at RIT, focusing on agricultural technology solutions.",
    type: "Participation",
    certificate: "/Portfolio/Agritech event certificate.pdf",
    date: "2024",
  },
];


export const navLinks = [
  { name: "Home", to: "hero" },
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Projects", to: "projects" },
  { name: "Education", to: "education" },
  { name: "Certificates", to: "certifications" },
  { name: "Events", to: "hackathons" },
  { name: "Contact", to: "contact" },
];
