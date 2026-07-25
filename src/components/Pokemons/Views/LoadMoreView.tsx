import { ErrorMessage, QueryBoundary } from "../../UI";
import { ApiError } from "../../../api/httpClient";
import LoadingGridSkeleton from "../Skeletons/LoadingGridSkeleton";
import InfiniteGrid from "../Grids/InfiniteGrid";
 

export default function LoadMoreView() {
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
      <InfiniteGrid />
    </QueryBoundary>
  );
}

