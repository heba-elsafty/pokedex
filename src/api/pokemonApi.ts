import apiClient from "./apiClient";
import type { PokemonDetail, PokemonListResponse } from "../types/pokemon";

export async function fetchPokemonList(
  limit: number,
  offset: number,
  signal?: AbortSignal,
): Promise<PokemonListResponse> {
  return apiClient.httpRequest<PokemonListResponse>("/pokemon", "GET", {
    params: { limit, offset },
    signal,
  });
}

export async function fetchPokemonDetail(
  idOrName: string | number,
  signal?: AbortSignal,
): Promise<PokemonDetail> {
  return apiClient.httpRequest<PokemonDetail>(`/pokemon/${idOrName}`, "GET", {
    signal,
  });
}
