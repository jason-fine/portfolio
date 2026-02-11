export interface contributionsInterface {
  repo: string;
  contibutionDescription: string;
  repoOwner: string;
  link: string;
}

export const contributionsUnsorted: contributionsInterface[] = [
  {
    repo: "P-707. Trends in Respiratory Virus-associated Hospitalizations",
    contibutionDescription:
      "National Healthcare Safety Network, United States, 2024 - 2025. Published in Open Forum Infectious Diseases, Volume 13, Supplement 1, January 2026.",
    repoOwner: "Oxford University Press",
    link: "https://academic.oup.com/ofid/article/13/Supplement_1/ofaf695.919/8421111",
  },
  
];

export const featuredContributions: contributionsInterface[] =
  contributionsUnsorted.slice(0, 3);
