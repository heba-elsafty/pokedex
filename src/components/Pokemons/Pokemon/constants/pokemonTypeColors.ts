import { POKEMON_TYPES, type PokemonType } from "../../../../types/pokemon";

// Record<PokemonType, string> means TypeScript errors if a type is ever missing from this map or a typo sneaks in — the union type from types/pokemon.ts is the single source of truth for "what types exist."
// The color map is based on the official Pokémon type colors.
export const POKEMON_TYPE_COLORS: Record<PokemonType, string> = {
  normal: "bg-gray-400",
  fire: "bg-orange-500",
  water: "bg-blue-500",
  electric: "bg-yellow-400",
  grass: "bg-green-500",
  ice: "bg-cyan-300",
  fighting: "bg-red-700",
  poison: "bg-purple-500",
  ground: "bg-amber-600",
  flying: "bg-indigo-300",
  psychic: "bg-pink-500",
  bug: "bg-lime-500",
  rock: "bg-yellow-800",
  ghost: "bg-indigo-700",
  dragon: "bg-violet-700",
  dark: "bg-neutral-700",
  steel: "bg-slate-400",
  fairy: "bg-pink-300",
};

// Default type color is gray.
export const DEFAULT_TYPE_COLOR = "bg-gray-400";


export function isPokemonType(value: string): value is PokemonType {
  return (POKEMON_TYPES as readonly string[]).includes(value);
}
