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
    id: "bah-sd",
    position: "Software Developer / Consultant",
    company: "Booz Allen Hamilton",
    location: "Washington, DC",
    startDate: new Date("2020-04-01"),
    endDate: new Date("2024-09-30"),
    description: [
      "Developed and automated quarterly compliance verification scripts using PowerShell and Bash to validate software versions, SHA-256 file hashes, and registry values on government systems, generating audit-ready reports and remediation guidance.",
      "Oversaw hardware deployment to field sites, including configuration, testing, and handoff to end users, ensuring compliance with technical and operational standards.",
      "Managed software testing schedules and coordinated client feedback, ensuring timely issue tracking and effective communication of results to stakeholders.",
    ],
    achievements: [
      "Developed and automated quarterly compliance verification scripts using PowerShell and Bash to validate software versions, SHA-256 file hashes, and registry values on government systems, generating audit-ready reports and remediation guidance.",
      "Oversaw hardware deployment to field sites, including configuration, testing, and handoff to end users, ensuring compliance with technical and operational standards.",
      "Managed software testing schedules and coordinated client feedback, ensuring timely issue tracking and effective communication of results to stakeholders.",
    ],
    skills: [
      "Git", "CI/CD", "React", "Typescript"
    ],
    companyUrl: "https://boozallen.com",
    logo: "/experience/bah-logo.png",
  },
  {
    id: "swt-ae",
    position: "Application Engineer",
    company: "Suez Water Technologies",
    location: "New York, NY",
    startDate: new Date("2018-10-01"),
    endDate: new Date("2020-03-31"),
    description: [
      "Programmed and integrated fluid dynamics algorithms into proprietary process engineering software, enabling precise modeling of industrial processes and system performance.",
      "Analyzed user database to generate analytics and reports on customer software platform usage, supporting data-driven insights and decision-making.",
      "Developed visualizations and reports from client process data, presenting complex operational metrics in clear, actionable formats.",
    ],
    achievements: [
      "Programmed and integrated fluid dynamics algorithms into proprietary process engineering software, enabling precise modeling of industrial processes and system performance.",
      "Analyzed user database to generate analytics and reports on customer software platform usage, supporting data-driven insights and decision-making.",
      "Developed visualizations and reports from client process data, presenting complex operational metrics in clear, actionable formats.",
    ],
    skills: ["Python", "SQL", "React", "AWS"],
    companyUrl: "https://www.suez.com",
    logo: "/experience/suez-logo.png",
  }
];
