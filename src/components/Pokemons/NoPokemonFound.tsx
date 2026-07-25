import { EmptyState } from "../UI";
import noPokemonHere from "../../assets/Images/no-pokemon-here.svg";

export default function NoPokemonFound() {
  return (
    <EmptyState
      image={<img src={noPokemonHere} alt="" className="w-56 mx-auto" />}
      title="No Pokémon here."
      description="We couldn't find any Pokémon to show."
    />
  );
}
