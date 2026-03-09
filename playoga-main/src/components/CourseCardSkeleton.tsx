import { Skeleton } from "@/components/ui/skeleton";

const CourseCardSkeleton = () => (
  <div className="bg-card rounded-xl overflow-hidden shadow-lg">
    <Skeleton className="h-52 w-full rounded-none" />
    <div className="p-6 space-y-3">
      <Skeleton className="h-5 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-2/3" />
      <div className="flex justify-between pt-2">
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-4 w-20" />
      </div>
    </div>
  </div>
);

export default CourseCardSkeleton;
