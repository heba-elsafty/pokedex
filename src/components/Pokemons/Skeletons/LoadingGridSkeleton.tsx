import { Card } from "../../UI";

export default function LoadingGridSkeleton({ count = 12 }: { count?: number }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {Array.from({ length: count }).map((_, i) => (
        <Card key={i} className="animate-pulse flex flex-col items-center">
          <div className="w-full h-36 bg-background rounded-control" />
          <div className="mt-3 h-4 w-20 bg-placeholder rounded" />
          <div className="mt-2 h-3 w-16 bg-placeholder rounded" />
        </Card>
      ))}
    </div>
  );
}
