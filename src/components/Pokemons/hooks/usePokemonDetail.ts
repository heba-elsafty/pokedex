import { useSuspenseQuery } from "@tanstack/react-query";
import { fetchPokemonDetail } from "../../../api/pokemonApi";

export function usePokemonDetail(name: string) {
  return useSuspenseQuery({
    queryKey: ["pokemon-detail", name],
    queryFn: ({ signal }) => fetchPokemonDetail(name, signal),
  });
}
