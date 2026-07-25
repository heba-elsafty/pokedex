// PokeAPI list URLs look like: https://pokeapi.co/api/v2/pokemon/25/
export function getIdFromUrl(url: string): number {
  const match = url.match(/\/pokemon\/(\d+)\/?$/);
  return match ? Number(match[1]) : 0;
}

// The sprite URL is the official artwork of the Pokémon.
export function getSpriteUrl(id: number): string {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
}
