import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "bah-se",
    position: "Software Engineer",
    company: "Booz Allen Hamilton",
    location: "New York, NY",
    startDate: new Date("2025-10-01"),
    endDate: "Present",
    description: [
      "Led scalability and infrastructure planning efforts, including research and stakeholder discussions on storage architecture, CPU/RAM sizing, performance tradeoffs, and projected resource requirements.",
      "Designed, developed, and enhanced a secure full-stack document management platform for a private government client, supporting scalable document ingestion, indexing, metadata tagging, and advanced search capabilities.",
      "Evaluated and refined machine learning–based document classification systems by analyzing model outputs, assessing performance metrics, and informing iterative improvement strategies to improve categorization accuracy and downstream analytics.",
    ],
    achievements: [
      "Led scalability and infrastructure planning efforts, including research and stakeholder discussions on storage architecture, CPU/RAM sizing, performance tradeoffs, and projected resource requirements.",
      "Designed, developed, and enhanced a secure full-stack document management platform for a private government client, supporting scalable document ingestion, indexing, metadata tagging, and advanced search capabilities.",
      "Evaluated and refined machine learning–based document classification systems by analyzing model outputs, assessing performance metrics, and informing iterative improvement strategies to improve categorization accuracy and downstream analytics.",
    ],
    skills: ["Typescript", "React", "Python", "Docker", "Kubernetes", "AWS", "CI/CD"],
    companyUrl: "https://www.boozallen.com",
    logo: "/experience/bah-logo.png",
  },
  {
    id: "bah-ds",
    position: "Data Scientist",
    company: "Booz Allen Hamilton",
    location: "Washington, DC",
    startDate: new Date("2024-10-01"),
    endDate: new Date("2025-09-30"),
    description: [
      "Co-authored a publication on respiratory disease surveillance, identifying leading indicators of hospitalization trends through prior-week analysis and rank correlation techniques.",
      "Designed and maintained scalable statistical analysis pipelines using PySpark and Spark SQL to analyze seasonal COVID-19, Flu, and RSV hospital admission trends, supporting surveillance and reporting efforts.",
      "Improved data reliability and reporting efficiency by implementing data quality checks for missing and erroneous values, testing hospital data submission APIs, and mentoring team members on Python-based automation for PowerPoint, Word, and Excel report generation.",
    ],
    achievements: [
      "Co-authored a publication on respiratory disease surveillance, identifying leading indicators of hospitalization trends through prior-week analysis and rank correlation techniques.",
      "Designed and maintained scalable statistical analysis pipelines using PySpark and Spark SQL to analyze seasonal COVID-19, Flu, and RSV hospital admission trends, supporting surveillance and reporting efforts.",
      "Improved data reliability and reporting efficiency by implementing data quality checks for missing and erroneous values, testing hospital data submission APIs, and mentoring team members on Python-based automation for PowerPoint, Word, and Excel report generation.",
    ],
    skills: ["Python", "Databricks", "SQL"],
    companyUrl: "https://boozallen.com",
    logo: "/experience/bah-logo.png",
  },
  {
    id: "builtdesign",
    position: "Web Developer Intern",
    company: "Builtdesign",
    location: "Nagpur, India",
    startDate: new Date("2021-07-01"),
    endDate: new Date("2022-07-01"),
    description: [
      "Developed websites using React, Angular, and GraphQL.",
      "Set up AWS servers and CI/CD pipelines.",
      "Built a multi-page PDF reader for large files (>300MB).",
    ],
    achievements: [
      "Developed websites using React, Angular, and GraphQL; reduced API load time by 30%.",
      "Set up AWS servers and CI/CD pipelines, scaling traffic to 3,000+ users/day.",
      "Built a multi-page PDF reader for large files (>300MB) to boost user engagement.",
    ],
    skills: [
      "React",
      "Angular",
      "GraphQL",
      "AWS",
      "HTML 5",
      "CSS 3",
      "Javascript",
    ],
    companyUrl: "https://builtdesign.in",
    logo: "/experience/builtdesign-logo.png",
  },
];
