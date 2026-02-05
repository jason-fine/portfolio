import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@jason-fine",
    icon: Icons.gitHub,
    link: "https://github.com/jason-fine",
  },
  {
    name: "Gmail",
    username: "jason.fine610",
    icon: Icons.gmail,
    link: "mailto:jason.fine610@gmail.com",
  },
];
