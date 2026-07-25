import { Suspense, type ReactNode } from "react";
import { QueryErrorResetBoundary } from "@tanstack/react-query";
import { ErrorBoundary, type FallbackProps } from "react-error-boundary";

interface Props {
  fallback: ReactNode;
  errorFallback: (props: FallbackProps) => ReactNode;
  children: ReactNode;
}

// Wraps a suspense-mode React Query read: `fallback` covers the loading
// state (thrown promise), `errorFallback` covers a thrown query error.
// QueryErrorResetBoundary's `reset` is wired to the boundary's own reset —
// without it, retrying would just re-throw the same cached error instead of
// actually refetching.
export default function QueryBoundary({
  fallback,
  errorFallback,
  children,
}: Props) {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary onReset={reset} fallbackRender={errorFallback}>
          <Suspense fallback={fallback}>{children}</Suspense>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
}
