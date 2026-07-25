import { DEFAULT_PAGE_SIZE } from "@/constants/pagination";
import { usePokemonList } from "../hooks/usePokemonList";
import PokemonCard from "../Cards/PokemonCard";
import { Pagination } from "@/components/UI";
import NoPokemonFound from "../NoPokemonFound";
import { clx } from "@/utils/helper";

interface PaginationGridProps {
  page: number;
  isPending: boolean;
  onPageChange: (page: number) => void;
}

export default function PaginationGrid({
  page,
  isPending,
  onPageChange,
}: PaginationGridProps) {
  const { data } = usePokemonList(page);
  const totalPages = Math.ceil(data.count / DEFAULT_PAGE_SIZE);

  if (data.results.length === 0) return <NoPokemonFound />;

  return (
    <div>
      <div
        className={clx(
          "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 transition-opacity",
          isPending ? "opacity-60" : "opacity-100",
        )}
      >
        {data.results.map((p) => (
          <PokemonCard key={p.name} name={p.name} url={p.url} />
        ))}
      </div>

      <Pagination
        page={page}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />

      <p className="text-center text-xs text-ink-muted mt-2">
        Page {page} of {totalPages} ({data.results.length} Pokemon shown)
      </p>
    </div>
  );
}
