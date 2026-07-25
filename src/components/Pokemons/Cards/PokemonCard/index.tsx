import { Link } from "react-router";
import Card from "../../../UI/Card";
import { getIdFromUrl, getSpriteUrl } from "../../Pokemon/constants/pokemonId";

interface Props {
  name: string;
  url: string;
}

export default function PokemonCard({ name, url }: Props) {
  const id = getIdFromUrl(url);
  return (
    <Card
      as={Link}
      to={`/pokedex/${name}`}
      hoverable
      className="flex flex-col items-center text-center"
    >
      <div className="w-full bg-background rounded-control p-4 flex items-center justify-center">
        <img
          src={getSpriteUrl(id)}
          alt={name}
          className="w-28 h-28 object-contain"
          loading="lazy"
        />
      </div>
      <p className="mt-3 font-semibold capitalize">{name}</p>
      <p className="text-sm text-ink-subtle">#{id.toString().padStart(3, "0")}</p>
    </Card>
  );
}
