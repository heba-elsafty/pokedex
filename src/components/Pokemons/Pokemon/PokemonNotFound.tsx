import { Link } from "react-router";
import ErrorState from "../../UI/ErrorHandling/ErrorState";
import Button from "../../UI/Button";
import pokemonSad from "../../../assets/Images/pokemon-sad.svg";

export default function PokemonNotFound() {
  return (
    <ErrorState
      image={<img src={pokemonSad} alt="" className="w-40 h-40 mx-auto" />}
      eyebrow="Not found"
      title="This Pokémon isn't here."
      description="We looked everywhere but couldn't find a Pokémon with that name."
      action={
        <Button as={Link} to="/pokedex">
          Back to Home
        </Button>
      }
    />
  );
}
