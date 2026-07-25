import { Button } from "@/components/UI";
import PokemonCard from "../Cards/PokemonCard";
import { useInfinitePokemonList } from "../hooks/useInfinitePokemonList";
import NoPokemonFound from "../NoPokemonFound";
import { Loader2 } from "lucide-react";

export default function InfiniteGrid() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfinitePokemonList();

  const seen = new Set<string>();
  const items = data.pages
    .flatMap((page) => page.results)
    .filter((p) => {
      if (seen.has(p.name)) return false;
      seen.add(p.name);
      return true;
    });

  if (items.length === 0) return <NoPokemonFound />;

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {items.map((p) => (
          <PokemonCard key={p.name} name={p.name} url={p.url} />
        ))}
      </div>

      <div className="flex justify-center mt-6">
        {hasNextPage && (
          <Button
            variant="primary"
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
          >
            {isFetchingNextPage ? (
              <span className="flex items-center gap-2">
                <Loader2 size={16} className="animate-spin" /> Loading more
                Pokemon...
              </span>
            ) : (
              "Load More"
            )}
          </Button>
        )}
      </div>

      <p className="text-center text-xs text-ink-subtle mt-2">
        Showing {items.length} Pokemon
      </p>
    </div>
  );
}
