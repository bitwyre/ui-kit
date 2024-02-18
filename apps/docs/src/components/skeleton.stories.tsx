import {Card} from "@bitwyre/ui-kit";
import {Skeleton} from "@nextui-org/skeleton";

export const SkeletonComponent = () => {
  return (
    <Card className="w-[200px] space-y-5 p-4 rounded-lg border-2 border-bw-navy-300">
      <Skeleton className="rounded-lg !duration-300 bg-bw-navy-300" disableAnimation>
        <div className="h-24 rounded-lg bg-default-300"></div>
      </Skeleton>
      <div className="space-y-3">
        <Skeleton
          className="w-3/5 rounded-lg !duration-300 bg-bw-navy-300"
          disableAnimation>
          <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton
          className="w-4/5 rounded-lg !duration-300 bg-bw-navy-300"
          disableAnimation>
          <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
        </Skeleton>
        <Skeleton
          className="w-2/5 rounded-lg !duration-300 bg-bw-navy-300"
          disableAnimation>
          <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
        </Skeleton>
      </div>
    </Card>
  );
};
