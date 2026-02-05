export interface contributionsInterface {
  repo: string;
  contibutionDescription: string;
  repoOwner: string;
  link: string;
}

export const contributionsUnsorted: contributionsInterface[] = [
  // {
  //   repo: "",
  //   contibutionDescription:
  //     "",
  //   repoOwner: "",
  //   link: "",
  // },
  
];

export const featuredContributions: contributionsInterface[] =
  contributionsUnsorted.slice(0, 3);
