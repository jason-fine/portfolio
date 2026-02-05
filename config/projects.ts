import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  // {
  //   id: "",
  //   companyName: "",
  //   type: "Personal",
  //   category: ["Web Dev", "Frontend", "UI/UX"],
  //   shortDescription:
  //     "",
  //   websiteLink: "",
  //   githubLink: "",
  //   techStack: [
  //     "Next.js",
  //     "React",
  //     "Typescript",
  //     "Tailwind CSS",
  //     "Framer Motion",
  //     "Vercel",
  //   ],
  //   startDate: new Date("2024-01-01"),
  //   endDate: new Date("2025-12-01"),
  //   companyLogoImg: "/logo.png",
  //   pagesInfoArr: [
  //     {
  //       title: "Landing & Sections",
  //       description:
  //         "A clean, minimal landing page with sections for skills, projects, contributions, and experience.",
  //       imgArr: ["/profile-img.jpg"],
  //     },
  //   ],
  //   descriptionDetails: {
  //     paragraphs: [
  //       "",
  //       "",
  //     ],
  //     bullets: [
  //       "",
  //       "",
  //     ],
  //   },
  // },
  
];

export const featuredProjects = Projects.slice(0, 3);
