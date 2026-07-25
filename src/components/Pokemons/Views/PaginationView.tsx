import { useState, useTransition } from "react";
import { ErrorMessage, QueryBoundary } from "../../UI";
import { ApiError } from "../../../api/httpClient";
import LoadingGridSkeleton from "../Skeletons/LoadingGridSkeleton";
import PaginationGrid from "../Grids/PaginationGrid";

export default function PaginationView() {
  const [page, setPage] = useState(1);
  const [isPending, startTransition] = useTransition();

  return (
    <QueryBoundary
      fallback={<LoadingGridSkeleton />}
      errorFallback={({ error, resetErrorBoundary }) => {
        const retryable = error instanceof ApiError ? error.retryable : true;
        return (
          <ErrorMessage
            message={error instanceof Error ? error.message : undefined}
            status={error instanceof ApiError ? error.status : undefined}
            showRetry={retryable}
            onRetry={resetErrorBoundary}
          />
        );
      }}
    >
      <PaginationGrid
        page={page}
        isPending={isPending}
        onPageChange={(newPage) => startTransition(() => setPage(newPage))}
      />
    </QueryBoundary>
  );
}
