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
  {
    id: "wordle-clone",
    companyName: "Wordle Clone",
    type: "Personal",
    category: ["Web Dev", "Frontend", "UI/UX"],
    shortDescription:
      "A clone of the popular word-guessing game Wordle with similar gameplay and features.",
    websiteLink: "https://wordle-clone-sepia.vercel.app",
    githubLink: "",
    techStack: [
      "React",
      "Javascript",
      "HTML 5",
      "CSS 3",
      "Vercel",
    ],
    startDate: new Date("2025-10-01"),
    endDate: new Date("2025-11-15"),
    companyLogoImg: "/logo.png",
    pagesInfoArr: [
      {
        title: "Wordle Game",
        description:
          "A fully functional Wordle clone where players guess a 5-letter word within six attempts. Features color-coded feedback and a virtual keyboard.",
        imgArr: ["/profile-img.jpg"],
      },
    ],
    descriptionDetails: {
      paragraphs: [
        "Created a responsive web-based clone of the popular word-guessing game Wordle, where players have six attempts to guess a five-letter word.",
        "Implemented core game mechanics including letter validation, color-coded feedback, and a virtual keyboard that updates based on guessed letters.",
      ],
      bullets: [
        "Built with React for efficient state management and component-based architecture",
        "Designed responsive UI that works across desktop and mobile devices",
        "Implemented word validation and game logic similar to the original Wordle",
        "Deployed on Vercel for reliable hosting and performance",
      ],
    },
  },
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
