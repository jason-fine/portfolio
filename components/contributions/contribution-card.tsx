import Link from "next/link";

import { Icons } from "@/components/common/icons";
import { contributionsInterface } from "@/config/contributions";

interface ContributionCardProps {
  contributions: contributionsInterface[];
}

export default function ContributionCard({
  contributions,
}: ContributionCardProps) {
  return (
    <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3 static">
      {contributions.map((contribution, id) => (
        <Link href={contribution.link} target="_blank" key={id}>
          <div className="relative rounded-lg border bg-background p-2 hover:bg-accent hover:text-accent-foreground">
            <Icons.externalLink
              size={35}
              className="absolute bottom-3 right-3 border bg-background rounded-full p-2 cursor-pointer text-muted-foreground "
            />
            <div className="flex h-[170px] flex-col justify-between rounded-md p-6 sm:h-[170px]">
              <div className="flex flex-row justify-between w-full">
                <h3 className="font-bold flex space-x-2 items-center max-w-[80%] overflow-hidden">
                  <Icons.gitRepoIcon size={20} className="flex-shrink-0" />
                  <span className="truncate">{contribution.repo}</span>
                </h3>
                <Icons.gitBranch size={20} className="flex-shrink-0" />
              </div>
              <div className="space-y-4 overflow-hidden">
                <p className="text-sm text-muted-foreground line-clamp-3 overflow-ellipsis">
                  {contribution.contibutionDescription}
                </p>
                <p className="text-sm text-muted-foreground flex space-x-2 items-center">
                  <Icons.gitOrgBuilding size={15} className="flex-shrink-0" />
                  <span className="truncate">{contribution.repoOwner}</span>
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
