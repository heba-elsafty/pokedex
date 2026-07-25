import { useSuspenseQuery } from "@tanstack/react-query";
import { fetchPokemonList } from "../../../api/pokemonApi";
import { DEFAULT_PAGE_SIZE } from "../../../constants/pagination";

 
export function usePokemonList(page: number) {
  const offset = (page - 1) * DEFAULT_PAGE_SIZE;
  return useSuspenseQuery({
    queryKey: ["pokemon-list", page],
    queryFn: ({ signal }) => fetchPokemonList(DEFAULT_PAGE_SIZE, offset, signal),
  });
}
