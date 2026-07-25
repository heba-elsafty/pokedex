import { useSuspenseInfiniteQuery } from "@tanstack/react-query";
import { fetchPokemonList } from "../../../api/pokemonApi";
import { DEFAULT_PAGE_SIZE } from "../../../constants/pagination";

export function useInfinitePokemonList() {
  return useSuspenseInfiniteQuery({
    queryKey: ["pokemon-infinite"],
    queryFn: ({ pageParam, signal }) => fetchPokemonList(DEFAULT_PAGE_SIZE, pageParam, signal),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      if (!lastPage.next) return undefined;
      return allPages.length * DEFAULT_PAGE_SIZE;
    },
  });
}
