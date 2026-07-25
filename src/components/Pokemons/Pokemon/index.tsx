import { useParams, Link } from "react-router";
import { ArrowLeft } from "lucide-react";

import PokemonNotFound from "./PokemonNotFound";
import { ErrorMessage, QueryBoundary } from "../../UI";
import { ApiError } from "../../../api/httpClient";
import PokemonDetailsSkeleton from "../Skeletons/PokemonDetailsSkeleton";
import PokemonDetailCard from "./PokemonDetailCard";

export default function PokemonDetail() {
  const { name } = useParams<{ name: string }>();

  return (
    <div className="min-h-screen bg-linear-to-br from-purple-50 via-pink-50 to-pink-100">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link
          to="/pokedex"
          className="inline-flex items-center gap-1 text-sm text-ink-muted hover:text-ink"
        >
          <ArrowLeft size={16} /> Back to List
        </Link>

        <QueryBoundary
          fallback={<PokemonDetailsSkeleton />}
          errorFallback={({ error, resetErrorBoundary }) => {
            if (error instanceof ApiError && error.status === 404) {
              return (
                <div className="mt-8">
                  <PokemonNotFound />
                </div>
              );
            }
            const retryable =
              error instanceof ApiError ? error.retryable : true;
            return (
              <div className="mt-8">
                <ErrorMessage
                  message={error instanceof Error ? error.message : undefined}
                  status={error instanceof ApiError ? error.status : undefined}
                  showRetry={retryable}
                  onRetry={resetErrorBoundary}
                />
              </div>
            );
          }}
        >
          <PokemonDetailCard name={name!} />
        </QueryBoundary>
      </div>
    </div>
  );
}
