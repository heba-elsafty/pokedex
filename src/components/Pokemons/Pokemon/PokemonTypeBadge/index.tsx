import Badge from "../../../UI/Badge";
import {
  POKEMON_TYPE_COLORS,
  DEFAULT_TYPE_COLOR,
  isPokemonType,
} from "../constants/pokemonTypeColors";

interface Props {
  type: string;
}

export default function PokemonTypeBadge({ type }: Props) {
  const colorClass = isPokemonType(type)
    ? POKEMON_TYPE_COLORS[type]
    : DEFAULT_TYPE_COLOR;
  return <Badge className={colorClass}>{type}</Badge>;
}
